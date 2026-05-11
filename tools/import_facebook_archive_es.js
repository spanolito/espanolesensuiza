#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_FILE = path.join(ROOT, "content-articles.js");
const DEFAULT_REPORT = path.join(ROOT, "artifacts", "facebook-archive-import-report.json");
const PLACEHOLDER_MARKER = "Nota del archivo:";
const TARGET_HEADER = "Oscar Antonio a publié dans Españoles que realmente se ayudan en Suiza.";
const MIN_TEXT_LENGTH = 160;
const MIN_SCORE = 60;

function parseArgs(argv) {
  const options = {
    sourceHtml: "",
    write: false,
    report: DEFAULT_REPORT,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--source-html" && argv[i + 1]) {
      options.sourceHtml = argv[i + 1];
      i += 1;
    } else if (arg === "--report" && argv[i + 1]) {
      options.report = argv[i + 1];
      i += 1;
    } else if (arg === "--write") {
      options.write = true;
    }
  }

  if (!options.sourceHtml) {
    throw new Error("Missing required argument: --source-html <path>");
  }

  return options;
}

function decodeHtmlEntities(value) {
  return String(value || "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, "\"")
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value) {
  return decodeHtmlEntities(
    String(value || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>\s*<p>/gi, "\n\n")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function normalize(value) {
  return decodeHtmlEntities(String(value || ""))
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[#*"“”¡!¿?🌐]/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalize(value)
    .split(/[^a-z0-9]+/)
    .filter((token) => token && token.length > 2);
}

function overlapCount(a, b) {
  const setA = new Set(tokenize(a));
  const setB = new Set(tokenize(b));
  let count = 0;
  for (const token of setA) {
    if (setB.has(token)) count += 1;
  }
  return count;
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeJsString(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, "\\\"")
    .replace(/\n/g, " ");
}

function escapeTemplateLiteral(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function htmlEscape(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineFormat(value) {
  let out = htmlEscape(value);
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^\*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  out = out.replace(/\b(https?:\/\/[^\s<]+)\b/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  return out;
}

function textToHtml(text) {
  const lines = String(text || "")
    .split(/\n/)
    .map((line) => line.trimEnd());

  const html = [];
  let paragraph = [];
  let listMode = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const joined = paragraph.join(" ").replace(/\s+/g, " ").trim();
    if (joined) html.push(`<p>${inlineFormat(joined)}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (listMode === "ul") html.push("</ul>");
    if (listMode === "ol") html.push("</ol>");
    listMode = null;
  };

  const openList = (nextMode) => {
    if (listMode === nextMode) return;
    closeList();
    html.push(nextMode === "ul" ? "<ul>" : "<ol>");
    listMode = nextMode;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      closeList();
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      openList("ul");
      html.push(`<li>${inlineFormat(unordered[1].trim())}</li>`);
      continue;
    }

    const ordered = line.match(/^\d+[\.\)]\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      openList("ol");
      html.push(`<li>${inlineFormat(ordered[1].trim())}</li>`);
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  flushParagraph();
  closeList();

  return `<div class="article-content">\n${html.join("\n")}\n</div>`;
}

function computeReadingTime(text) {
  const words = String(text || "").match(/[A-Za-zÀ-ÿ0-9'’]+/g) || [];
  return Math.max(2, Math.round(words.length / 200));
}

function buildSummary(text) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  if (clean.length <= 220) return clean;

  const slice = clean.slice(0, 220);
  const boundary = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("! "), slice.lastIndexOf("? "));
  if (boundary >= 80) return slice.slice(0, boundary + 1).trim();
  return `${slice.trim()}...`;
}

function isGenericArchiveTitle(title) {
  const normalized = normalize(title);
  return (
    /^video de facebook\b/.test(normalized) ||
    /^archivo de facebook\b/.test(normalized) ||
    /^publicacion compartida de facebook\b/.test(normalized)
  );
}

function parseArchivePosts(sourceHtmlPath) {
  const html = fs.readFileSync(sourceHtmlPath, "utf8");
  const sections = html.match(/<section class="_a6-g"[\s\S]*?<\/section>/g) || [];
  const posts = [];

  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const headerMatch = section.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    if (!headerMatch) continue;

    const header = stripHtml(headerMatch[1]);
    if (header !== TARGET_HEADER) continue;

    const dateMatch = section.match(/<div class="_a72d">([\s\S]*?)<\/div>/i);
    const date = dateMatch ? stripHtml(dateMatch[1]) : "";

    const rawBlocks = Array.from(section.matchAll(/<div class="_2pin"><div>([\s\S]*?)<\/div><\/div>/g)).map((match) => stripHtml(match[1]));
    const blocks = rawBlocks.filter(Boolean);
    const mainText = blocks.sort((a, b) => b.length - a.length)[0] || "";
    const firstLine = String(mainText.split(/\n/)[0] || "").trim();

    posts.push({
      index: i + 1,
      date,
      firstLine,
      text: mainText,
      normalizedFirstLine: normalize(firstLine),
      normalizedText: normalize(mainText),
    });
  }

  return posts;
}

function loadSpanishArticles() {
  const ctx = {
    window: {
      siteContent: {
        es: { global: {}, pages: {}, articles: {} },
      },
    },
    console,
  };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(CONTENT_FILE, "utf8"), ctx, { filename: CONTENT_FILE });
  return ctx.window.siteContent.es.articles || {};
}

function findPlaceholderArticles(articles) {
  const placeholders = [];
  for (const [key, article] of Object.entries(articles)) {
    if (!article || !article.facebookUrl) continue;
    if (!String(article.content || "").includes(PLACEHOLDER_MARKER)) continue;
    placeholders.push({
      key,
      title: String(article.title || ""),
      dateUpdated: String(article.dateUpdated || ""),
      normalizedTitle: normalize(article.title),
    });
  }
  return placeholders;
}

function scoreCandidate(placeholder, post) {
  let score = 0;
  if (placeholder.dateUpdated && post.date === placeholder.dateUpdated) score += 25;
  if (placeholder.normalizedTitle && post.normalizedFirstLine && placeholder.normalizedTitle === post.normalizedFirstLine) score += 200;
  if (placeholder.normalizedTitle && post.normalizedText.includes(placeholder.normalizedTitle)) score += 160;
  if (placeholder.normalizedTitle && post.normalizedFirstLine && placeholder.normalizedTitle.includes(post.normalizedFirstLine) && post.normalizedFirstLine.length > 12) score += 120;
  if (placeholder.normalizedTitle && post.normalizedFirstLine && post.normalizedFirstLine.includes(placeholder.normalizedTitle) && placeholder.normalizedTitle.length > 12) score += 120;
  score += Math.min(overlapCount(placeholder.title, post.firstLine), 10) * 8;
  score += Math.min(overlapCount(placeholder.title, post.text), 10) * 3;
  return score;
}

function matchPlaceholders(placeholders, posts) {
  const sortedPlaceholders = [...placeholders].sort((a, b) => tokenize(b.title).length - tokenize(a.title).length);
  const remainingPostIndexes = new Set(posts.map((_, index) => index));
  const matched = [];
  const unmatched = [];

  for (const placeholder of sortedPlaceholders) {
    let bestIndex = -1;
    let bestScore = -1;

    for (const postIndex of remainingPostIndexes) {
      const score = scoreCandidate(placeholder, posts[postIndex]);
      if (score > bestScore) {
        bestScore = score;
        bestIndex = postIndex;
      }
    }

    if (bestIndex >= 0 && bestScore >= MIN_SCORE) {
      remainingPostIndexes.delete(bestIndex);
      matched.push({
        placeholder,
        post: posts[bestIndex],
        score: bestScore,
      });
    } else {
      unmatched.push(placeholder);
    }
  }

  return { matched, unmatched };
}

function buildReplacementPayloads(matches) {
  const imported = [];
  const skipped = [];

  for (const match of matches) {
    const { placeholder, post, score } = match;
    if (isGenericArchiveTitle(placeholder.title)) {
      skipped.push({ key: placeholder.key, reason: "generic-title", score, textLength: post.text.length });
      continue;
    }
    if (post.text.length < MIN_TEXT_LENGTH) {
      skipped.push({ key: placeholder.key, reason: "short-text", score, textLength: post.text.length });
      continue;
    }

    imported.push({
      key: placeholder.key,
      title: placeholder.title,
      score,
      postIndex: post.index,
      textLength: post.text.length,
      readingTime: computeReadingTime(post.text),
      summary: buildSummary(post.text),
      contentHtml: textToHtml(post.text),
    });
  }

  return { imported, skipped };
}

function replaceField(block, fieldName, replacement) {
  if (fieldName === "content") {
    return block.replace(/content:\s*`[\s\S]*?`/, `content: \`${escapeTemplateLiteral(replacement)}\``);
  }
  if (fieldName === "summary") {
    return block.replace(/summary:\s*"(?:[^"\\]|\\.)*"/, `summary: "${escapeJsString(replacement)}"`);
  }
  if (fieldName === "readingTime") {
    return block.replace(/readingTime:\s*\d+/, `readingTime: ${replacement}`);
  }
  return block;
}

function applyImportsToContent(content, imports) {
  let nextContent = content;
  const touched = [];

  for (const item of imports) {
    const blockRe = new RegExp(`("${escapeRegExp(item.key)}"\\s*:\\s*\\{[\\s\\S]*?\\n\\s*\\},)`, "m");
    const blockMatch = nextContent.match(blockRe);
    if (!blockMatch) continue;

    let block = blockMatch[1];
    block = replaceField(block, "readingTime", item.readingTime);
    block = replaceField(block, "summary", item.summary);
    block = replaceField(block, "content", item.contentHtml);

    nextContent = nextContent.replace(blockRe, block);
    touched.push(item.key);
  }

  return { nextContent, touched };
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const posts = parseArchivePosts(options.sourceHtml);
  const articles = loadSpanishArticles();
  const placeholders = findPlaceholderArticles(articles);
  const { matched, unmatched } = matchPlaceholders(placeholders, posts);
  const { imported, skipped } = buildReplacementPayloads(matched);

  const originalContent = fs.readFileSync(CONTENT_FILE, "utf8");
  const { nextContent, touched } = applyImportsToContent(originalContent, imported);

  if (options.write && nextContent !== originalContent) {
    fs.writeFileSync(CONTENT_FILE, nextContent, "utf8");
  }

  const report = {
    sourceHtml: path.resolve(options.sourceHtml),
    contentFile: CONTENT_FILE,
    stats: {
      archivePostsParsed: posts.length,
      placeholdersFound: placeholders.length,
      matchedCandidates: matched.length,
      imported: imported.length,
      skipped: skipped.length,
      unmatched: unmatched.length + (matched.length - imported.length - skipped.length),
      touched: touched.length,
      wrote: Boolean(options.write && nextContent !== originalContent),
    },
    skipped,
    unmatched: unmatched.slice(0, 100),
    imported: imported.slice(0, 100).map((item) => ({
      key: item.key,
      title: item.title,
      score: item.score,
      postIndex: item.postIndex,
      textLength: item.textLength,
    })),
  };

  if (options.report) {
    ensureDir(options.report);
    fs.writeFileSync(options.report, JSON.stringify(report, null, 2) + "\n", "utf8");
  }

  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
}

main();
