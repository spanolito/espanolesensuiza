#!/usr/bin/env node
/**
 * Quick i18n coverage audit for articles across languages.
 *
 * Usage:
 *   node check_i18n_coverage.js
 */

const fs = require("fs");

const LANG_FILES = {
  es: "content-articles.js",
  en: "content-articles-en.js",
  fr: "content-articles-fr.js",
  de: "content-articles-de.js",
  it: "content-articles-it.js",
};

function extractArticleKeys(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const keys = [...src.matchAll(/"(?<key>articulo-[^"]+)"\s*:\s*\{/g)].map(
    (m) => m.groups.key,
  );
  return new Set(keys);
}

function main() {
  const esKeys = extractArticleKeys(LANG_FILES.es);
  let hasMissing = false;

  for (const [lang, file] of Object.entries(LANG_FILES)) {
    if (lang === "es") continue;
    const keys = extractArticleKeys(file);
    const missing = [...esKeys].filter((k) => !keys.has(k));
    if (missing.length > 0) {
      hasMissing = true;
      console.log(`${lang}: missing ${missing.length}`);
      console.log(`  ${missing.join(", ")}`);
    } else {
      console.log(`${lang}: OK`);
    }
  }

  if (hasMissing) {
    process.exitCode = 2;
  }
}

main();

