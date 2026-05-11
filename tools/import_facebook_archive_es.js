#!/usr/bin/env node

const { spawnSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_FILE = path.join(ROOT, "content-articles.js");
const DEFAULT_REPORT = path.join(ROOT, "artifacts", "facebook-archive-import-report.json");
const MEDIA_DIR = path.join(ROOT, "media", "facebook-archive");
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

function stripLeadingVideoMarker(value) {
  return String(value || "").replace(/^Cliquer pour la vidéo[\s\u00a0]*:?\s*/iu, "");
}

function stripMarkdownDecorations(value) {
  return stripLeadingVideoMarker(String(value || ""))
    .replace(/^#+\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/__(.*?)__/g, "$1")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/([.!?:])(?=\S)/g, "$1 ")
    .replace(/\s+/g, " ")
    .trim();
}

function isLikelyHashtagLine(value) {
  const line = decodeHtmlEntities(String(value || "")).trim();
  if (!line) return false;
  if (/facebook\.com\/hashtag\//i.test(line)) return true;
  const hashtags = line.match(/#[\p{L}\p{N}_-]+/gu) || [];
  if (hashtags.length >= 2) return true;
  return false;
}

function extractCandidateTitle(value) {
  const lines = String(value || "")
    .split(/\n/)
    .map((line) => stripMarkdownDecorations(line))
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (isLikelyHashtagLine(line)) continue;
    if (line.length < 12) continue;
    return line;
  }

  return "";
}

function htmlEscape(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineFormat(value) {
  const linkPlaceholders = [];
  let out = htmlEscape(value);

  out = out.replace(/\[\s*(https?:\/\/[^\]\s]+)\s*\]\(\s*(https?:\/\/[^)\s]+)\s*\)/g, "[$1]($2)");
  out = out.replace(/(?:\[\s*){2,}(https?:\/\/[^\]\s]+)(?:\s*\]\(\s*https?:\/\/[^)\s]+\s*\))+/g, "$1");

  out = out.replace(/\[([^\]]+)\]\(\s*(https?:\/\/[^)\s]+)\s*\)/g, (_, label, url) => {
    const token = `__LINK_${linkPlaceholders.length}__`;
    linkPlaceholders.push(`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`);
    return token;
  });

  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^\*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  out = out.replace(/\b(https?:\/\/[^\s<]+)\b/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

  linkPlaceholders.forEach((html, index) => {
    out = out.replace(`__LINK_${index}__`, html);
  });

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

    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const tag = heading[1].length === 2 ? "h2" : "h3";
      html.push(`<${tag}>${inlineFormat(heading[2].trim())}</${tag}>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      openList("ul");
      html.push(`<li>${inlineFormat(unordered[1].trim())}</li>`);
      continue;
    }

    const bullet = line.match(/^•\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      openList("ul");
      html.push(`<li>${inlineFormat(bullet[1].trim())}</li>`);
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

function cleanImportedText(rawText, rawTitle) {
  const titlePlain = stripMarkdownDecorations(rawTitle);
  const titleNormalized = normalize(titlePlain);

  let lines = String(rawText || "")
    .split(/\n/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .filter((line) => !isLikelyHashtagLine(line));

  lines = lines.map((line) =>
    stripLeadingVideoMarker(
      line
      .replace(/\[\s*(https?:\/\/[^\]\s]+)\s*\]\(\s*(https?:\/\/[^)\s]+)\s*\)/g, "[$1]($2)")
      .replace(/(?:\[\s*){2,}(https?:\/\/[^\]\s]+)(?:\s*\]\(\s*https?:\/\/[^)\s]+\s*\))+/g, "$1")
    )
  );

  while (lines.length && /^cliquer pour la vid[ée]o\s*:?\s*$/i.test(lines[0])) {
    lines.shift();
  }

  if (lines.length) {
    const firstPlain = stripMarkdownDecorations(lines[0]);
    if (normalize(firstPlain) === titleNormalized) {
      lines.shift();
    }
  }

  const cleanedText = lines.join("\n").trim();
  return cleanedText || String(rawText || "").trim();
}

function buildImageTarget(key, sourcePath) {
  const ext = path.extname(sourcePath || "").toLowerCase() || ".jpg";
  const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)
    ? ext
    : [".mp4", ".mov", ".m4v", ".avi", ".webm"].includes(ext)
      ? ".png"
      : ".jpg";
  return path.join(MEDIA_DIR, `${key}${safeExt}`);
}

function ensureDirPath(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyImageIfNeeded(sourcePath, targetPath) {
  ensureDirPath(path.dirname(targetPath));
  if (fs.existsSync(sourcePath)) {
    if (!fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath);
    }
    return true;
  }
  return false;
}

function removeDirSafe(dirPath) {
  try {
    fs.rmSync(dirPath, { recursive: true, force: true });
  } catch (_) {
    // Best-effort cleanup only.
  }
}

function generateVideoThumbnailIfNeeded(sourcePath, targetPath) {
  ensureDirPath(path.dirname(targetPath));
  if (!fs.existsSync(sourcePath)) return false;
  if (fs.existsSync(targetPath)) return true;

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "fb-thumb-"));
  try {
    const result = spawnSync("/usr/bin/qlmanage", ["-t", "-s", "1200", "-o", tempDir, sourcePath], {
      encoding: "utf8",
    });
    if (result.status !== 0) return false;

    const sourceBase = path.basename(sourcePath);
    const thumbnail = fs.readdirSync(tempDir)
      .map((name) => path.join(tempDir, name))
      .find((filePath) => path.basename(filePath).startsWith(sourceBase) || /\.(png|jpg|jpeg)$/i.test(filePath));

    if (!thumbnail || !fs.existsSync(thumbnail)) return false;
    fs.copyFileSync(thumbnail, targetPath);
    return true;
  } catch (_) {
    return false;
  } finally {
    removeDirSafe(tempDir);
  }
}

function copyMediaIfNeeded(sourcePath, targetPath) {
  const ext = path.extname(sourcePath || "").toLowerCase();
  if ([".mp4", ".mov", ".m4v", ".avi", ".webm"].includes(ext)) {
    return generateVideoThumbnailIfNeeded(sourcePath, targetPath);
  }
  return copyImageIfNeeded(sourcePath, targetPath);
}

function parseArchivePosts(sourceHtmlPath) {
  const html = fs.readFileSync(sourceHtmlPath, "utf8");
  const sections = html.match(/<section class="_a6-g"[\s\S]*?<\/section>/g) || [];
  const posts = [];
  const exportRoot = path.resolve(sourceHtmlPath, "..", "..", "..");

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
    const previewBlocks = Array.from(section.matchAll(/<div class="_3-95">([\s\S]*?)<\/div>/g)).map((match) => stripHtml(match[1]));
    const previewText = previewBlocks.sort((a, b) => b.length - a.length)[0] || "";
    const firstLine = String(mainText.split(/\n/)[0] || "").trim();
    const imageRefs = Array.from(section.matchAll(/<img src="([^"]+)"/g))
      .map((match) => match[1])
      .filter((src) => src && !src.startsWith("data:image/"));
    const videoRefs = Array.from(section.matchAll(/<video[^>]*src="([^"]+)"/g))
      .map((match) => match[1])
      .filter((src) => src);
    const primaryImageRef = imageRefs[0] || "";
    const primaryImageSource = primaryImageRef ? path.join(exportRoot, primaryImageRef) : "";
    const primaryVideoRef = videoRefs[0] || "";
    const primaryVideoSource = primaryVideoRef ? path.join(exportRoot, primaryVideoRef) : "";

    posts.push({
      index: i + 1,
      date,
      firstLine,
      text: mainText,
      previewText,
      normalizedFirstLine: normalize(firstLine),
      normalizedText: normalize(mainText),
      primaryImageRef,
      primaryImageSource,
      primaryVideoRef,
      primaryVideoSource,
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

function findArchiveArticles(articles) {
  const placeholders = [];
  for (const [key, article] of Object.entries(articles)) {
    if (!article || !article.facebookUrl) continue;
    if (!String(key).startsWith("fb-")) continue;
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

function chooseImportedTitle(placeholder, post, cleanedText) {
  const candidates = [
    { source: "preview", value: extractCandidateTitle(post.previewText), baseScore: 120 },
    { source: "text", value: extractCandidateTitle(post.text), baseScore: 90 },
    { source: "content", value: extractCandidateTitle(cleanedText), baseScore: 70 },
    { source: "placeholder", value: stripMarkdownDecorations(placeholder.title), baseScore: 40 },
  ];

  let best = stripMarkdownDecorations(placeholder.title);
  let bestScore = -Infinity;

  for (const candidate of candidates) {
    const value = String(candidate.value || "").trim();
    if (!value) continue;
    if (/^(hola a tod|recordatorio|publicacion anonima)\b/i.test(normalize(value)) && candidate.source !== "placeholder") continue;

    let score = candidate.baseScore;
    const words = tokenize(value).length;
    if (value.length >= 20 && value.length <= 140) score += 30;
    if (value.length < 18) score -= 40;
    if (words >= 4) score += 20;
    if (normalize(cleanedText).startsWith(normalize(value)) && value.length >= 20) score += 25;
    if (/^(hola a tod|recordatorio|publicacion anonima)\b/i.test(normalize(value))) score -= 60;
    if (/^cliquer pour la video\b/i.test(normalize(value))) score -= 120;

    if (score > bestScore) {
      best = value;
      bestScore = score;
    }
  }

  return best;
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

    const cleanedText = cleanImportedText(post.text, placeholder.title);
    const cleanedTitle = chooseImportedTitle(placeholder, post, cleanedText);
    const mediaSource = post.primaryImageSource || post.primaryVideoSource || "";
    const localImageTarget = mediaSource ? buildImageTarget(placeholder.key, mediaSource) : "";
    const copiedImage = localImageTarget ? copyMediaIfNeeded(mediaSource, localImageTarget) : false;

    imported.push({
      key: placeholder.key,
      title: cleanedTitle,
      score,
      postIndex: post.index,
      textLength: cleanedText.length,
      readingTime: computeReadingTime(cleanedText),
      summary: buildSummary(cleanedText),
      contentHtml: textToHtml(cleanedText),
      description: buildSummary(cleanedText),
      featuredImage: copiedImage ? path.relative(ROOT, localImageTarget).replace(/\\/g, "/") : "",
      imageAlt: cleanedTitle,
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
  if (fieldName === "title" || fieldName === "description" || fieldName === "featuredImage" || fieldName === "imageAlt") {
    const fieldRe = new RegExp(`${fieldName}:\\s*"(?:[^"\\\\]|\\\\.)*"`);
    if (fieldRe.test(block)) {
      return block.replace(fieldRe, `${fieldName}: "${escapeJsString(replacement)}"`);
    }
    if (fieldName === "featuredImage" || fieldName === "imageAlt") {
      return block.replace(/summary:\s*"/, `${fieldName}: "${escapeJsString(replacement)}",\n        summary: "`);
    }
    return block;
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
    block = replaceField(block, "title", item.title);
    block = replaceField(block, "description", item.description);
    block = replaceField(block, "readingTime", item.readingTime);
    if (item.featuredImage) {
      block = replaceField(block, "featuredImage", item.featuredImage);
      block = replaceField(block, "imageAlt", item.imageAlt);
    }
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
  const placeholders = findArchiveArticles(articles);
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
      archiveArticlesFound: placeholders.length,
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
