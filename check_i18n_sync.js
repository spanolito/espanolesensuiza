#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const LANG_GROUPS = {
  es: ["content-articles.js", "content-articles-facebook-es.js"],
  en: ["content-articles-en.js", "content-articles-facebook-en.js"],
  fr: ["content-articles-fr.js", "content-articles-facebook-fr.js"],
  de: ["content-articles-de.js", "content-articles-facebook-de.js"],
  it: ["content-articles-it.js", "content-articles-facebook-it.js"],
};

function createContext() {
  return vm.createContext({
    window: {
      siteContent: {
        es: { global: {}, pages: {}, articles: {} },
        en: { global: {}, pages: {}, articles: {} },
        fr: { global: {}, pages: {}, articles: {} },
        de: { global: {}, pages: {}, articles: {} },
        it: { global: {}, pages: {}, articles: {} },
      },
    },
    console,
  });
}

function loadArticles(files, lang) {
  const ctx = createContext();
  files.forEach((file) => {
    const src = fs.readFileSync(path.join(ROOT, file), "utf8");
    vm.runInContext(src, ctx, { filename: file });
  });
  return ctx.window.siteContent[lang].articles || {};
}

function structureCounts(html) {
  const source = String(html || "");
  return {
    h2: (source.match(/<h2\b/gi) || []).length,
    h3: (source.match(/<h3\b/gi) || []).length,
    li: (source.match(/<li\b/gi) || []).length,
    table: (source.match(/<table\b/gi) || []).length,
    callout: (source.match(/class=\"callout/gi) || []).length,
  };
}

function main() {
  const es = loadArticles(LANG_GROUPS.es, "es");
  const esKeys = Object.keys(es);
  let hasErrors = false;

  for (const lang of ["en", "fr", "de", "it"]) {
    const current = loadArticles(LANG_GROUPS[lang], lang);
    const missing = esKeys.filter((key) => !current[key]);
    const structuralDiffs = [];

    for (const key of esKeys) {
      if (!current[key]) continue;
      const baseCounts = structureCounts(es[key].content);
      const targetCounts = structureCounts(current[key].content);
      if (JSON.stringify(baseCounts) !== JSON.stringify(targetCounts)) {
        structuralDiffs.push({ key, baseCounts, targetCounts });
      }
    }

    console.log(`${lang}: total=${Object.keys(current).length} missing=${missing.length} structuralDiffs=${structuralDiffs.length}`);
    if (missing.length > 0) {
      hasErrors = true;
      console.log(`  Missing sample: ${missing.slice(0, 10).join(", ")}`);
    }
    if (structuralDiffs.length > 0) {
      hasErrors = true;
      structuralDiffs.slice(0, 10).forEach((diff) => {
        console.log(`  Structural diff ${diff.key}:`, diff.baseCounts, diff.targetCounts);
      });
    }
  }

  if (hasErrors) process.exitCode = 2;
}

main();
