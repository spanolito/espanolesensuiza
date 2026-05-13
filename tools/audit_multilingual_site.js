#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const REPORT_PATH = path.join(ROOT, "artifacts", "multilingual-audit-report.md");
const JSON_PATH = path.join(ROOT, "artifacts", "multilingual-audit-report.json");
const LANGS = ["es", "en", "fr", "de", "it"];
const TARGET_LANGS = LANGS.filter((lang) => lang !== "es");

const FILES = {
  pages: "content-pages.js",
  articleSets: {
    es: [
      "content-articles.js",
      "content-articles-facebook-es.js",
      "content-articles-facebook-daily-es.js",
    ],
    en: [
      "content-articles-en.js",
      "content-articles-facebook-en.js",
      "content-articles-facebook-daily-en.js",
    ],
    fr: [
      "content-articles-fr.js",
      "content-articles-facebook-fr.js",
      "content-articles-facebook-daily-fr.js",
    ],
    de: [
      "content-articles-de.js",
      "content-articles-facebook-de.js",
      "content-articles-facebook-daily-de.js",
    ],
    it: [
      "content-articles-it.js",
      "content-articles-facebook-it.js",
      "content-articles-facebook-daily-it.js",
    ],
  },
};

const EXPECTED_SCRIPT_SRCS = [
  "content-pages.js",
  "content-articles.js",
  "content-articles-en.js",
  "content-articles-fr.js",
  "content-articles-de.js",
  "content-articles-it.js",
  "content-articles-facebook-es.js",
  "content-articles-facebook-en.js",
  "content-articles-facebook-fr.js",
  "content-articles-facebook-de.js",
  "content-articles-facebook-it.js",
  "content-articles-facebook-daily-es.js",
  "content-articles-facebook-daily-en.js",
  "content-articles-facebook-daily-fr.js",
  "content-articles-facebook-daily-de.js",
  "content-articles-facebook-daily-it.js",
];

const SPANISH_LEAK_PATTERNS = {
  en: [
    /\bIntroducci[oó]n\b/i,
    /\bC[oó]mo funciona\b/i,
    /\bConsejo pr[aá]ctico\b/i,
    /\bPermiso\b/i,
    /\bSuiza decide\b/i,
    /\bHoy por hoy\b/i,
    /\bLo m[aá]s importante\b/i,
  ],
  fr: [
    /\bIntroducci[oó]n\b/i,
    /\bC[oó]mo funciona\b/i,
    /\bConsejo pr[aá]ctico\b/i,
    /\bPermiso\b/i,
    /\bHoy por hoy\b/i,
    /\bLo m[aá]s importante\b/i,
  ],
  de: [
    /\bIntroducci[oó]n\b/i,
    /\bC[oó]mo funciona\b/i,
    /\bConsejo pr[aá]ctico\b/i,
    /\bPermiso\b/i,
    /\bHoy por hoy\b/i,
    /\bLo m[aá]s importante\b/i,
  ],
  it: [
    /\bIntroducci[oó]n\b/i,
    /\bC[oó]mo funciona\b/i,
    /\bConsejo pr[aá]ctico\b/i,
    /\bPermiso\b/i,
    /\bHoy por hoy\b/i,
    /\bLo m[aá]s importante\b/i,
  ],
};

function createContext() {
  const siteContent = {};
  for (const lang of LANGS) {
    siteContent[lang] = { global: {}, pages: {}, articles: {} };
  }
  siteContent.ui = {};
  return vm.createContext({
    window: { siteContent },
    localStorage: { getItem() { return "es"; } },
    console,
  });
}

function loadSiteData() {
  const ctx = createContext();
  const orderedFiles = [
    FILES.pages,
    ...LANGS.flatMap((lang) => FILES.articleSets[lang]),
  ];
  for (const file of orderedFiles) {
    const source = fs.readFileSync(path.join(ROOT, file), "utf8");
    vm.runInContext(source, ctx, { filename: file });
  }
  return ctx.window.siteContent;
}

function normalizeText(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hashText(value) {
  return crypto.createHash("sha1").update(normalizeText(value)).digest("hex");
}

function countText(value) {
  return normalizeText(value).length;
}

function classifyKey(key) {
  if (key.startsWith("fb-daily-")) return "facebook-daily";
  if (key.startsWith("fb-")) return "facebook-archive";
  return "main";
}

function articleFamilyByFile(file) {
  if (file.includes("facebook-daily")) return "facebook-daily";
  if (file.includes("facebook-")) return "facebook-archive";
  return "main";
}

function stripHashRoute(href) {
  const raw = String(href || "");
  if (!raw.startsWith("#/")) return null;
  return raw.slice(2).split(/[?#]/)[0];
}

function collectInternalLinks(html) {
  const links = [];
  const source = String(html || "");
  const regex = /href="([^"]+)"/g;
  let match;
  while ((match = regex.exec(source))) {
    const slug = stripHashRoute(match[1]);
    if (slug) links.push(slug);
  }
  return links;
}

function isHistoricalFallback(article) {
  const source = normalizeText(article.content || "");
  return [
    "Historical Facebook Post",
    "Publication Facebook historique",
    "Historischer Facebook-Beitrag",
    "Post storico di Facebook",
  ].some((snippet) => source.includes(snippet));
}

function isGenericDuplicateTitle(title) {
  const value = normalizeText(title).toLowerCase();
  return [
    "(untitled)",
    "(sans titre)",
    "(senza titolo)",
    "(ohne titel)",
    "compartment only!",
    "je viens de partager !",
    "ich teile einfach!",
    "teile ich nur!",
    "condivido e basta!",
  ].includes(value);
}

function collectScriptSrcs() {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const srcs = [];
  const regex = /<script[^>]+src="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html))) srcs.push(match[1]);
  return srcs;
}

function collectMediaFiles() {
  const mediaRoot = path.join(ROOT, "media");
  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else {
        files.push(path.relative(ROOT, full).replace(/\\/g, "/"));
      }
    }
  }
  walk(mediaRoot);
  return files;
}

function collectReferencedMediaFiles() {
  const referenced = new Set();
  const files = fs
    .readdirSync(ROOT)
    .filter((file) => /\.(js|html|css|xml|md)$/i.test(file))
    .map((file) => path.join(ROOT, file));

  for (const top of ["docs", "scripts", "tools"]) {
    const dir = path.join(ROOT, top);
    if (!fs.existsSync(dir)) continue;
    const stack = [dir];
    while (stack.length) {
      const current = stack.pop();
      for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
        const full = path.join(current, entry.name);
        if (entry.isDirectory()) {
          stack.push(full);
        } else if (/\.(js|html|css|xml|md)$/i.test(entry.name)) {
          files.push(full);
        }
      }
    }
  }

  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    const matches = source.match(/media\/[A-Za-z0-9_./-]+/g) || [];
    for (const match of matches) referenced.add(match);
  }
  return referenced;
}

function buildPageSlugMap(siteContent) {
  const pages = siteContent.es.pages || {};
  const slugs = new Set(["", "/"]);
  for (const page of Object.values(pages)) {
    if (page && typeof page.slug === "string" && page.slug.trim()) {
      slugs.add(page.slug.trim());
    }
  }
  return slugs;
}

function buildLangArticleMaps(siteContent) {
  const maps = {};
  for (const lang of LANGS) {
    const articles = siteContent[lang].articles || {};
    const slugToKeys = new Map();
    for (const [key, article] of Object.entries(articles)) {
      const slug = String(article.slug || "").trim();
      if (!slug) continue;
      if (!slugToKeys.has(slug)) slugToKeys.set(slug, []);
      slugToKeys.get(slug).push(key);
    }
    maps[lang] = { articles, slugToKeys };
  }
  return maps;
}

function findDuplicates(articles) {
  const bySlug = new Map();
  const byTitle = new Map();
  const byContent = new Map();

  for (const [key, article] of Object.entries(articles)) {
    const slug = String(article.slug || "").trim();
    const title = normalizeText(article.title).toLowerCase();
    const contentHash = hashText(article.content);

    if (slug) {
      if (!bySlug.has(slug)) bySlug.set(slug, []);
      bySlug.get(slug).push(key);
    }
    if (title) {
      if (!byTitle.has(title)) byTitle.set(title, []);
      byTitle.get(title).push(key);
    }
    if (!byContent.has(contentHash)) byContent.set(contentHash, []);
    byContent.get(contentHash).push(key);
  }

  return {
    bySlug: [...bySlug.entries()].filter(([, keys]) => keys.length > 1),
    byTitle: [...byTitle.entries()].filter(([, keys]) => keys.length > 1),
    byContent: [...byContent.entries()].filter(([, keys]) => keys.length > 1),
  };
}

function dateLooksSpanish(value) {
  const raw = String(value || "").toLowerCase();
  return [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ].some((month) => raw.includes(month));
}

function audit() {
  const siteContent = loadSiteData();
  const pageSlugs = buildPageSlugMap(siteContent);
  const langMaps = buildLangArticleMaps(siteContent);
  const scriptSrcs = collectScriptSrcs();
  const mediaFiles = collectMediaFiles();
  const referencedMediaFiles = collectReferencedMediaFiles();
  const allMediaFiles = new Set(mediaFiles);
  const esArticles = langMaps.es.articles;

  const report = {
    generatedAt: new Date().toISOString(),
    articlesMissing: [],
    duplicateArticles: [],
    imageIssues: [],
    brokenLinks: [],
    multilingualInconsistencies: [],
    actionsSuggested: [],
    indexIssues: [],
    mediaUnused: [],
    summary: {},
  };

  for (const expectedSrc of EXPECTED_SCRIPT_SRCS) {
    if (!scriptSrcs.includes(expectedSrc)) {
      report.indexIssues.push({
        file: "index.html",
        missingScript: expectedSrc,
      });
    }
  }

  for (const lang of TARGET_LANGS) {
    const currentArticles = langMaps[lang].articles;
    const duplicateInfo = findDuplicates(currentArticles);

    for (const [slug, keys] of duplicateInfo.bySlug) {
      report.duplicateArticles.push({
        lang,
        fileType: "unknown",
        slug,
        keys,
        reason: "duplicate slug",
      });
    }
    for (const [title, keys] of duplicateInfo.byTitle) {
      if (keys.length < 2) continue;
      if (isGenericDuplicateTitle(title)) continue;
      report.duplicateArticles.push({
        lang,
        fileType: "unknown",
        slug: null,
        keys,
        reason: `duplicate title: ${title.slice(0, 120)}`,
      });
    }
    for (const [contentHash, keys] of duplicateInfo.byContent) {
      if (keys.length < 2) continue;
      const articles = keys.map((key) => currentArticles[key]);
      const uniqueTitles = new Set(articles.map((article) => normalizeText(article.title)));
      const longEnough = articles.some((article) => countText(article.content) > 200);
      const allFallback = articles.every((article) => isHistoricalFallback(article));
      if (allFallback) continue;
      if (uniqueTitles.size > 1 && longEnough) {
        report.duplicateArticles.push({
          lang,
          fileType: "unknown",
          slug: null,
          keys,
          reason: `same content fingerprint ${contentHash}`,
        });
      }
    }

    for (const [key, esArticle] of Object.entries(esArticles)) {
      const targetArticle = currentArticles[key];
      if (!targetArticle) {
        report.articlesMissing.push({
          lang,
          key,
          slug: esArticle.slug || null,
          family: classifyKey(key),
        });
        continue;
      }

      const family = classifyKey(key);
      const targetContentLength = countText(targetArticle.content);
      const esContentLength = countText(esArticle.content);
      const sameContentHash = hashText(targetArticle.content) === hashText(esArticle.content);
      const targetLinks = collectInternalLinks(targetArticle.content);
      const langValidSlugs = new Set([
        ...pageSlugs,
        ...langMaps[lang].slugToKeys.keys(),
        ...langMaps.es.slugToKeys.keys(),
      ]);

      if (String(targetArticle.hub || "") !== String(esArticle.hub || "")) {
        report.multilingualInconsistencies.push({
          lang,
          key,
          field: "hub",
          expected: esArticle.hub || "",
          actual: targetArticle.hub || "",
        });
      }

      if (String(targetArticle.featuredImage || "") !== String(esArticle.featuredImage || "")) {
        report.imageIssues.push({
          lang,
          key,
          slug: targetArticle.slug || esArticle.slug || null,
          field: "featuredImage",
          expected: esArticle.featuredImage || "",
          actual: targetArticle.featuredImage || "",
          problem: "image differs from Spanish reference",
        });
      }

      for (const mediaField of ["featuredImage"]) {
        const mediaPath = String(targetArticle[mediaField] || "").trim();
        if (mediaPath && !allMediaFiles.has(mediaPath)) {
          report.imageIssues.push({
            lang,
            key,
            slug: targetArticle.slug || esArticle.slug || null,
            field: mediaField,
            expected: esArticle[mediaField] || "",
            actual: mediaPath,
            problem: "referenced image file missing",
          });
        }
      }

      if (Array.isArray(targetArticle.supportingImages)) {
        for (const imagePath of targetArticle.supportingImages) {
          if (!allMediaFiles.has(imagePath)) {
            report.imageIssues.push({
              lang,
              key,
              slug: targetArticle.slug || esArticle.slug || null,
              field: "supportingImages",
              expected: null,
              actual: imagePath,
              problem: "supporting image file missing",
            });
          }
        }
      }

      if (Array.isArray(esArticle.relatedSlugs)) {
        const expected = JSON.stringify(esArticle.relatedSlugs);
        const actual = JSON.stringify(targetArticle.relatedSlugs || []);
        if (expected !== actual) {
          report.multilingualInconsistencies.push({
            lang,
            key,
            field: "relatedSlugs",
            expected: esArticle.relatedSlugs || [],
            actual: targetArticle.relatedSlugs || [],
          });
        }
      }

      for (const linkSlug of targetLinks) {
        if (!langValidSlugs.has(linkSlug)) {
          report.brokenLinks.push({
            lang,
            key,
            location: "article content",
            brokenSlug: linkSlug,
            sourceSlug: targetArticle.slug || esArticle.slug || null,
          });
        }
      }

      for (const relatedSlug of targetArticle.relatedSlugs || []) {
        if (!langValidSlugs.has(relatedSlug)) {
          report.brokenLinks.push({
            lang,
            key,
            location: "relatedSlugs",
            brokenSlug: relatedSlug,
            sourceSlug: targetArticle.slug || esArticle.slug || null,
          });
        }
      }

      if (sameContentHash && esContentLength > 200) {
        report.multilingualInconsistencies.push({
          lang,
          key,
          field: "content",
          expected: "translated content",
          actual: "identical to Spanish source",
        });
      } else if (lang !== "es") {
        const raw = String(targetArticle.content || "");
        const hasSpanishLeak = (SPANISH_LEAK_PATTERNS[lang] || []).some((pattern) => pattern.test(raw));
        if (hasSpanishLeak) {
          report.multilingualInconsistencies.push({
            lang,
            key,
            field: "content",
            expected: "target language content",
            actual: "Spanish fragments detected",
          });
        }
      }

      if (dateLooksSpanish(targetArticle.dateUpdated)) {
        report.multilingualInconsistencies.push({
          lang,
          key,
          field: "dateUpdated",
          expected: "localized date",
          actual: targetArticle.dateUpdated || "",
        });
      }

      if (targetArticle.title && normalizeText(targetArticle.title) === normalizeText(esArticle.title)) {
        report.multilingualInconsistencies.push({
          lang,
          key,
          field: "title",
          expected: "localized title",
          actual: "identical to Spanish title",
        });
      }

      if (targetArticle.summary && normalizeText(targetArticle.summary) === normalizeText(esArticle.summary)) {
        report.multilingualInconsistencies.push({
          lang,
          key,
          field: "summary",
          expected: "localized summary",
          actual: "identical to Spanish summary",
        });
      }

      if (family !== "main" && targetContentLength < Math.min(120, esContentLength * 0.2) && esContentLength > 250) {
        report.multilingualInconsistencies.push({
          lang,
          key,
          field: "content",
          expected: `content length comparable to Spanish reference (${esContentLength})`,
          actual: `short fallback content (${targetContentLength})`,
        });
      }
    }
  }

  for (const mediaPath of mediaFiles) {
    if (!referencedMediaFiles.has(mediaPath)) {
      report.mediaUnused.push(mediaPath);
    }
  }

  report.summary = {
    spanishArticles: Object.keys(esArticles).length,
    missingArticles: report.articlesMissing.length,
    duplicateArticles: report.duplicateArticles.length,
    imageIssues: report.imageIssues.length,
    brokenLinks: report.brokenLinks.length,
    multilingualInconsistencies: report.multilingualInconsistencies.length,
    indexIssues: report.indexIssues.length,
    unusedMediaFiles: report.mediaUnused.length,
  };

  return report;
}

function formatList(items, formatter, fallback = "None.") {
  if (!items.length) return fallback;
  return items.map(formatter).join("\n");
}

function main() {
  const report = audit();
  fs.writeFileSync(JSON_PATH, JSON.stringify(report, null, 2));

  const markdown = [
    "# Multilingual Audit Report",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Summary",
    "",
    `- Spanish reference articles: ${report.summary.spanishArticles}`,
    `- Missing articles in non-ES languages: ${report.summary.missingArticles}`,
    `- Duplicate article anomalies: ${report.summary.duplicateArticles}`,
    `- Image issues: ${report.summary.imageIssues}`,
    `- Broken internal links: ${report.summary.brokenLinks}`,
    `- Multilingual inconsistencies: ${report.summary.multilingualInconsistencies}`,
    `- Index/script loading issues: ${report.summary.indexIssues}`,
    `- Unused media files: ${report.summary.unusedMediaFiles}`,
    "",
    "## Missing Articles",
    "",
    formatList(
      report.articlesMissing,
      (item) => `- \`${item.lang}\` | \`${item.family}\` | \`${item.key}\` | slug: \`${item.slug || "n/a"}\``
    ),
    "",
    "## Duplicate Articles",
    "",
    formatList(
      report.duplicateArticles,
      (item) => `- \`${item.lang}\` | slug: \`${item.slug || "n/a"}\` | keys: ${item.keys.map((key) => `\`${key}\``).join(", ")} | ${item.reason}`
    ),
    "",
    "## Image Issues",
    "",
    formatList(
      report.imageIssues,
      (item) => `- \`${item.lang}\` | \`${item.key}\` | slug: \`${item.slug || "n/a"}\` | ${item.problem} | expected: \`${item.expected || "n/a"}\` | actual: \`${item.actual || "n/a"}\``
    ),
    "",
    "## Broken Links",
    "",
    formatList(
      report.brokenLinks,
      (item) => `- \`${item.lang}\` | \`${item.key}\` | ${item.location} | source: \`${item.sourceSlug || "n/a"}\` | broken: \`${item.brokenSlug}\``
    ),
    "",
    "## Multilingual Inconsistencies",
    "",
    formatList(
      report.multilingualInconsistencies,
      (item) => `- \`${item.lang}\` | \`${item.key}\` | field: \`${item.field}\` | expected: \`${String(item.expected).slice(0, 160)}\` | actual: \`${String(item.actual).slice(0, 160)}\``
    ),
    "",
    "## Index Issues",
    "",
    formatList(
      report.indexIssues,
      (item) => `- [${item.file}](${path.join(ROOT, item.file)}:1) missing script \`${item.missingScript}\``
    ),
    "",
    "## Unused Media Files",
    "",
    formatList(
      report.mediaUnused.slice(0, 200),
      (item) => `- \`${item}\``,
      "None."
    ),
    "",
  ].join("\n");

  fs.writeFileSync(REPORT_PATH, markdown);
  console.log(JSON.stringify(report.summary, null, 2));
}

main();
