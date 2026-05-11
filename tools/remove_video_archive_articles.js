#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const FILES = [
  "content-articles.js",
  "content-articles-de.js",
  "content-articles-en.js",
  "content-articles-fr.js",
  "content-articles-it.js",
].map((file) => path.join(ROOT, file));

function loadArticles(filePath) {
  const ctx = {
    window: {
      siteContent: {
        es: { global: {}, pages: {}, articles: {} },
        de: { global: {}, pages: {}, articles: {} },
        en: { global: {}, pages: {}, articles: {} },
        fr: { global: {}, pages: {}, articles: {} },
        it: { global: {}, pages: {}, articles: {} },
      },
    },
    console,
  };

  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(filePath, "utf8"), ctx, { filename: filePath });

  const lang = Object.keys(ctx.window.siteContent).find((key) => {
    const articles = ctx.window.siteContent[key] && ctx.window.siteContent[key].articles;
    return articles && Object.keys(articles).length > 0;
  });

  return (lang && ctx.window.siteContent[lang].articles) || {};
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function removeArticleBlock(content, key) {
  const blockRe = new RegExp(`\\n\\s*"${escapeRegExp(key)}"\\s*:\\s*\\{[\\s\\S]*?\\n\\s*\\},`, "m");
  if (blockRe.test(content)) {
    return content.replace(blockRe, "");
  }

  const firstBlockRe = new RegExp(`"${escapeRegExp(key)}"\\s*:\\s*\\{[\\s\\S]*?\\n\\s*\\},\\n?`, "m");
  return content.replace(firstBlockRe, "");
}

function main() {
  const report = [];

  for (const filePath of FILES) {
    const articles = loadArticles(filePath);
    const videoKeys = Object.keys(articles).filter((key) => key.includes("cliquer-pour-la-vid-o"));

    let nextContent = fs.readFileSync(filePath, "utf8");
    for (const key of videoKeys) {
      nextContent = removeArticleBlock(nextContent, key);
    }

    fs.writeFileSync(filePath, nextContent, "utf8");
    report.push({
      file: path.basename(filePath),
      removed: videoKeys.length,
    });
  }

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

main();
