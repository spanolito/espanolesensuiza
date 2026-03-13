#!/usr/bin/env node
/**
 * Editorial + visual audit scanner for espanolesensuiza.ch article bundles.
 *
 * Scans:
 * - content-articles.js
 * - content-articles-{en,fr,de}.js
 * - content-articles-facebook-{es,en,fr,de}.js
 *
 * Output: JSON to stdout (use with scripts to generate reports).
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

const FILES = [
  "content-articles.js",
  "content-articles-en.js",
  "content-articles-fr.js",
  "content-articles-de.js",
  "content-articles-facebook-es.js",
  "content-articles-facebook-en.js",
  "content-articles-facebook-fr.js",
  "content-articles-facebook-de.js",
].map((f) => path.join(ROOT, f));

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countMatches(haystack, re) {
  const str = String(haystack || "");
  const m = str.match(re);
  return m ? m.length : 0;
}

function hasAny(haystack, needles) {
  const s = String(haystack || "").toLowerCase();
  return needles.some((n) => s.includes(String(n).toLowerCase()));
}

function scanArticle(lang, key, article) {
  const content = String(article?.content || "");
  const text = stripHtml(content);
  const words = text ? text.split(" ").filter(Boolean).length : 0;

  const h1Count = countMatches(content, /<h1\b/gi);
  const h2Count = countMatches(content, /<h2\b/gi);
  const h3Count = countMatches(content, /<h3\b/gi);
  const imgCount = countMatches(content, /<img\b/gi);
  const inlineFontSizeCount = countMatches(content, /font-size\s*:/gi);

  const scenarioKeywords = [
    "tourist",
    "turista",
    "short stay",
    "estancia corta",
    "resident",
    "residente",
    "job seeker",
    "busc",
    "frontier",
    "frontalier",
    "fronterizo",
    "family reunification",
    "reagrup",
  ];

  const mentionsScenarios = hasAny(text, scenarioKeywords);

  return {
    lang,
    key,
    slug: article?.slug || null,
    title: article?.title || null,
    hub: article?.hub || null,
    category: article?.category || null,
    words,
    h1Count,
    h2Count,
    h3Count,
    imgCount,
    inlineFontSizeCount,
    hasFeaturedImageMeta: Boolean(article?.featuredImage),
    hasImageAltMeta: Boolean(article?.imageAlt),
    mentionsScenarios,
  };
}

function loadContentBundles() {
  const context = {
    window: {
      siteContent: {
        es: { global: {}, pages: {}, articles: {} },
        en: { global: {}, pages: {}, articles: {} },
        fr: { global: {}, pages: {}, articles: {} },
        de: { global: {}, pages: {}, articles: {} },
      },
    },
    console,
  };

  vm.createContext(context);
  for (const filePath of FILES) {
    const js = fs.readFileSync(filePath, "utf8");
    vm.runInContext(js, context, { filename: path.basename(filePath) });
  }

  return context.window.siteContent;
}

function main() {
  const siteContent = loadContentBundles();
  const langs = ["es", "en", "fr", "de"];

  const rows = [];
  for (const lang of langs) {
    const articles = siteContent?.[lang]?.articles || {};
    for (const [key, article] of Object.entries(articles)) {
      rows.push(scanArticle(lang, key, article));
    }
  }

  const byLang = Object.fromEntries(
    langs.map((lang) => [lang, rows.filter((r) => r.lang === lang)])
  );

  const byKey = {};
  for (const r of rows) {
    byKey[r.key] = byKey[r.key] || {};
    byKey[r.key][r.lang] = r;
  }

  const parity = [];
  for (const [key, entries] of Object.entries(byKey)) {
    const es = entries.es;
    if (!es) continue;
    for (const lang of ["en", "fr", "de"]) {
      const t = entries[lang];
      if (!t) continue;
      const ratio = es.words ? t.words / es.words : null;
      parity.push({ key, lang, slug: t.slug, title: t.title, words: t.words, esWords: es.words, ratio });
    }
  }

  process.stdout.write(
    JSON.stringify(
      {
        scannedFiles: FILES.map((p) => path.relative(ROOT, p)),
        counts: Object.fromEntries(langs.map((l) => [l, byLang[l].length])),
        rows,
        parity,
      },
      null,
      2
    ) + "\n"
  );
}

main();
