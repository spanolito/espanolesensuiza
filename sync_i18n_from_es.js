#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const translate = require("google-translate-api-x");

const ROOT = __dirname;
const LANGS = ["en", "fr", "de", "it"];
const REQUESTED_LANGS = (process.env.SYNC_LANGS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const REQUESTED_KEYS = (process.env.SYNC_KEYS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const SOURCE_FILES = {
  main: "content-articles.js",
  fbGuides: "content-articles-facebook-es.js",
};
const TARGET_FILES = {
  en: { main: "content-articles-en.js", fbGuides: "content-articles-facebook-en.js" },
  fr: { main: "content-articles-fr.js", fbGuides: "content-articles-facebook-fr.js" },
  de: { main: "content-articles-de.js", fbGuides: "content-articles-facebook-de.js" },
  it: { main: "content-articles-it.js", fbGuides: "content-articles-facebook-it.js" },
};

const HUB_TRANSLATIONS = {
  en: {
    tramites: "Procedures",
    trabajo: "Work",
    vivienda: "Housing",
    "vivir-en-suiza": "Living in Switzerland",
    vivir: "Living in Switzerland",
    salud: "Health",
    impuestos: "Taxes",
    fronterizos: "Frontaliers",
    recursos: "Resources",
  },
  fr: {
    tramites: "Démarches",
    trabajo: "Travail",
    vivienda: "Logement",
    "vivir-en-suiza": "Vivre en Suisse",
    vivir: "Vivre en Suisse",
    salud: "Santé",
    impuestos: "Impôts",
    fronterizos: "Frontaliers",
    recursos: "Ressources",
  },
  de: {
    tramites: "Verfahren",
    trabajo: "Arbeit",
    vivienda: "Wohnen",
    "vivir-en-suiza": "Leben in der Schweiz",
    vivir: "Leben in der Schweiz",
    salud: "Gesundheit",
    impuestos: "Steuern",
    fronterizos: "Grenzgänger",
    recursos: "Ressourcen",
  },
  it: {
    tramites: "Procedure",
    trabajo: "Lavoro",
    vivienda: "Alloggio",
    "vivir-en-suiza": "Vivere in Svizzera",
    vivir: "Vivere in Svizzera",
    salud: "Salute",
    impuestos: "Tasse",
    fronterizos: "Frontalieri",
    recursos: "Risorse",
  },
};

const FB_SEARCH_SUMMARY = {
  en: "Access the full discussion by searching for the original fragment in the Facebook community.",
  fr: "Accédez au fil complet en recherchant le fragment original dans la communauté Facebook.",
  de: "Rufen Sie die vollständige Diskussion auf, indem Sie im Facebook‑Forum nach dem Originalfragment suchen.",
  it: "Accedi alla discussione completa cercando il frammento originale nella community Facebook.",
};

const FB_SEARCH_CONTENT = {
  en: `<div class="article-content">
  <div class="callout info">
    <strong>Historical Facebook Post:</strong> Due to the original export format, only the title or opening fragment is available here. Use the button below to find and read the full thread with its discussion in our official Facebook community.
  </div>
</div>`,
  fr: `<div class="article-content">
  <div class="callout info">
    <strong>Publication Facebook historique :</strong> En raison du format d’export d’origine, seul le titre ou le fragment d’introduction est disponible ici. Utilisez le bouton ci-dessous pour retrouver et lire le fil complet avec ses échanges dans notre communauté Facebook officielle.
  </div>
</div>`,
  de: `<div class="article-content">
  <div class="callout info">
    <strong>Historischer Facebook-Beitrag:</strong> Aufgrund des ursprünglichen Exportformats ist hier nur der Titel oder der einleitende Ausschnitt verfügbar. Verwenden Sie den Button unten, um den vollständigen Thread mit den Diskussionen in unserer offiziellen Facebook-Community zu finden und zu lesen.
  </div>
</div>`,
  it: `<div class="article-content">
  <div class="callout info">
    <strong>Post storico di Facebook:</strong> A causa del formato originale di esportazione, qui è disponibile solo il titolo o il frammento introduttivo. Usa il pulsante qui sotto per trovare e leggere il thread completo con la relativa discussione nella nostra community Facebook ufficiale.
  </div>
</div>`,
};

const CACHE_PATH = path.join(ROOT, ".translation-cache.json");
let translationCache = {};
if (fs.existsSync(CACHE_PATH)) {
  translationCache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
}

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(translationCache, null, 2));
}

function cacheKey(lang, text) {
  return `${lang}::${text}`;
}

async function translateText(text, lang, extraOptions = {}) {
  const source = String(text || "");
  if (!source.trim()) return source;

  const key = cacheKey(lang, source);
  if (translationCache[key]) return translationCache[key];

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const result = await translate(source, {
      to: lang,
      rejectOnPartialFail: false,
      ...extraOptions,
    });
    if (result && typeof result.text === "string") {
      translationCache[key] = result.text;
      saveCache();
      return result.text;
    }
  }

  throw new Error(`Translation returned no text for ${lang}`);
}

async function translateBatch(items, lang) {
  const pending = [];
  const indexMap = [];
  const outputs = items.map((item) => {
    const source = String(item || "");
    if (!source.trim()) return source;
    const key = cacheKey(lang, source);
    if (translationCache[key]) return translationCache[key];
    indexMap.push(source);
    pending.push(source);
    return null;
  });

  if (pending.length > 0) {
    const separator = "\n<<<SYNC_SPLIT>>>\n";
    const joined = pending.join(separator);
    try {
      const result = await translate(joined, { to: lang, rejectOnPartialFail: false });
      const translatedItems = String(result.text).split(separator);
      if (translatedItems.length !== pending.length) {
        throw new Error(`Unexpected batch translation split count for ${lang}`);
      }
      translatedItems.forEach((translated, idx) => {
        translationCache[cacheKey(lang, pending[idx])] = translated;
      });
      saveCache();
    } catch (error) {
      for (const item of pending) {
        translationCache[cacheKey(lang, item)] = await translateText(item, lang, { forceBatch: false });
      }
      saveCache();
    }
  }

  return outputs.map((out, idx) => {
    if (out !== null) return out;
    const source = String(items[idx] || "");
    return translationCache[cacheKey(lang, source)] || source;
  });
}

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

function loadArticlesFromFile(filePath, lang) {
  const ctx = createContext();
  const src = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  vm.runInContext(src, ctx, { filename: filePath });
  return ctx.window.siteContent[lang].articles || {};
}

function splitEntries(allEntries) {
  const main = [];
  const fbGuides = [];
  Object.entries(allEntries).forEach(([key, article]) => {
    if (key.startsWith("fb-") || article.facebookUrl || article.isFbSearch) {
      if (key.startsWith("fb-") && /^fb-\d+/i.test(key)) {
        main.push([key, article]);
      } else {
        fbGuides.push([key, article]);
      }
    } else {
      main.push([key, article]);
    }
  });
  return { main, fbGuides };
}

function jsString(value) {
  return JSON.stringify(String(value ?? ""));
}

function jsMaybeString(value) {
  if (value === undefined || value === null) return null;
  return JSON.stringify(String(value));
}

function formatArray(values) {
  return `[${values.map((value) => JSON.stringify(value)).join(", ")}]`;
}

function formatArticleEntry(key, article) {
  const lines = [];
  lines.push(`    ${JSON.stringify(key)}: {`);
  lines.push(`        title: ${jsString(article.title)},`);
  lines.push(`        description: ${jsString(article.description)},`);
  if (article.keywords !== undefined) lines.push(`        keywords: ${jsString(article.keywords)},`);
  if (article.keywordsLocalized) lines.push(`        keywordsLocalized: true,`);
  if (article.category !== undefined) lines.push(`        category: ${jsString(article.category)},`);
  if (article.hub !== undefined) lines.push(`        hub: ${jsString(article.hub)},`);
  if (article.slug !== undefined) lines.push(`        slug: ${jsString(article.slug)},`);
  if (article.readingTime !== undefined) lines.push(`        readingTime: ${Number(article.readingTime)},`);
  if (article.dateUpdated !== undefined) lines.push(`        dateUpdated: ${jsString(article.dateUpdated)},`);
  if (article.summary !== undefined) lines.push(`        summary: ${jsString(article.summary)},`);
  if (article.featuredImage !== undefined) lines.push(`        featuredImage: ${jsString(article.featuredImage)},`);
  if (article.imageAlt !== undefined) lines.push(`        imageAlt: ${jsString(article.imageAlt)},`);
  if (Array.isArray(article.relatedSlugs)) lines.push(`        relatedSlugs: ${formatArray(article.relatedSlugs)},`);
  if (Array.isArray(article.supportingImages)) lines.push(`        supportingImages: ${formatArray(article.supportingImages)},`);
  if (article.facebookUrl !== undefined) lines.push(`        facebookUrl: ${jsString(article.facebookUrl)},`);
  if (article.isFbSearch) lines.push(`        isFbSearch: true,`);
  const content = String(article.content || "").replace(/`/g, "\\`");
  lines.push(`        content: \`${content}\``);
  lines.push(`    }`);
  return lines.join("\n");
}

function formatMainFile(lang, entries, slugMap) {
  const header = lang === "es"
    ? `/**\n * content-articles.js\n * Contains the 20 SEO optimized deep-dive articles.\n */\n\nwindow.siteContent = window.siteContent || { es: { global: {}, pages: {}, articles: {} } };\n\nwindow.siteContent.es.articles = {\n`
    : `/**\n * content-articles-${lang}.js\n * Auto-generated from Spanish source of truth.\n */\n\nwindow.siteContent = window.siteContent || {};\nwindow.siteContent.${lang} = window.siteContent.${lang} || { global: {}, pages: {}, articles: {} };\n\nwindow.siteContent.${lang}.articles = {\n`;

  const body = entries.map(([key, article]) => formatArticleEntry(key, article)).join(",\n");
  let out = `${header}${body}\n};\n`;

  if (lang !== "es" && Object.keys(slugMap).length > 0) {
    out += `\n(function () {\n    const slugMap = ${JSON.stringify(slugMap, null, 8)};\n\n    Object.entries(slugMap).forEach(([key, slug]) => {\n        if (window.siteContent.${lang}.articles[key]) window.siteContent.${lang}.articles[key].slug = slug;\n    });\n})();\n`;
  }

  return out;
}

function formatFbGuidesFile(lang, entries) {
  return `/**\n * content-articles-facebook-${lang}.js\n * Auto-generated from Spanish source of truth.\n */\n\nwindow.siteContent = window.siteContent || {};\nwindow.siteContent.${lang} = window.siteContent.${lang} || { global: {}, pages: {}, articles: {} };\nwindow.siteContent.${lang}.articles = window.siteContent.${lang}.articles || {};\n\nObject.assign(window.siteContent.${lang}.articles, {\n${entries.map(([key, article]) => formatArticleEntry(key, article)).join(",\n")}\n});\n`;
}

async function translateHtmlContent(html, lang) {
  const source = String(html || "");
  if (!source.trim()) return source;

  const segments = source.split(/(<[^>]+>)/g);
  const textJobs = [];

  segments.forEach((segment, index) => {
    if (!segment || segment.startsWith("<")) return;
    if (!segment.trim()) return;

    const leading = segment.match(/^\s*/)?.[0] || "";
    const trailing = segment.match(/\s*$/)?.[0] || "";
    const core = segment.slice(leading.length, segment.length - trailing.length);
    if (!core) return;

    textJobs.push({ index, leading, trailing, core });
  });

  if (textJobs.length === 0) return source;

  const translatedCores = await translateBatch(
    textJobs.map((job) => job.core),
    lang
  );

  textJobs.forEach((job, idx) => {
    segments[job.index] = `${job.leading}${translatedCores[idx]}${job.trailing}`;
  });

  return segments.join("");
}

async function translateRichArticle(baseArticle, targetArticle, lang) {
  const [title, description, keywords, category, summary, imageAlt] = await translateBatch([
    baseArticle.title,
    baseArticle.description,
    baseArticle.keywords || "",
    baseArticle.category || "",
    baseArticle.summary || "",
    baseArticle.imageAlt || "",
  ], lang);
  let content = "";
  try {
    content = await translateHtmlContent(baseArticle.content || "", lang);
  } catch (error) {
    content = baseArticle.content || "";
  }

  return {
    ...baseArticle,
    title,
    description,
    keywords,
    keywordsLocalized: true,
    category,
    hub: baseArticle.hub,
    slug: targetArticle && targetArticle.slug ? targetArticle.slug : baseArticle.slug,
    summary,
    imageAlt,
    content,
  };
}

async function translateFbHistoricalArticle(baseArticle, targetArticle, lang) {
  const [title, description, category] = await translateBatch([
    baseArticle.title,
    baseArticle.description || baseArticle.title,
    baseArticle.category || "",
  ], lang);

  return {
    ...baseArticle,
    title,
    description,
    keywords: baseArticle.keywords || "",
    category,
    hub: baseArticle.hub,
    slug: targetArticle && targetArticle.slug ? targetArticle.slug : baseArticle.slug,
    summary: FB_SEARCH_SUMMARY[lang],
    content: FB_SEARCH_CONTENT[lang],
  };
}

async function translateFbHistoricalArticlesBatch(entries, existingAll, lang) {
  const chunkSize = 40;
  const translated = {};

  for (let i = 0; i < entries.length; i += chunkSize) {
    const chunk = entries.slice(i, i + chunkSize);
    console.log(`[${lang}] Historical batch ${Math.floor(i / chunkSize) + 1}/${Math.ceil(entries.length / chunkSize)}`);
    const titleInputs = chunk.map(([, article]) => article.title);
    const descriptionInputs = chunk.map(([, article]) => article.description || article.title);
    const categoryInputs = chunk.map(([, article]) => article.category || "");

    const [titles, descriptions, categories] = await Promise.all([
      translateBatch(titleInputs, lang),
      translateBatch(descriptionInputs, lang),
      translateBatch(categoryInputs, lang),
    ]);

    chunk.forEach(([key, baseArticle], idx) => {
      const existing = existingAll[key];
      translated[key] = {
        ...baseArticle,
        title: titles[idx],
        description: descriptions[idx],
        keywords: baseArticle.keywords || "",
        category: categories[idx],
        hub: baseArticle.hub,
        slug: existing && existing.slug ? existing.slug : baseArticle.slug,
        summary: FB_SEARCH_SUMMARY[lang],
        content: FB_SEARCH_CONTENT[lang],
      };
    });
  }

  return translated;
}

async function buildLanguageOutputs(lang, esAll, existingAll) {
  const translated = {};
  const slugMap = {};
  const fbHistoricalEntries = [];
  const richEntries = [];

  for (const [key, baseArticle] of Object.entries(esAll)) {
    const existing = existingAll[key];
    if (existing && existing.slug) slugMap[key] = existing.slug;

    if (key.startsWith("fb-") && /^fb-\d+/i.test(key)) {
      fbHistoricalEntries.push([key, baseArticle]);
    } else {
      richEntries.push([key, baseArticle]);
    }
  }

  const translatedFbHistorical = await translateFbHistoricalArticlesBatch(fbHistoricalEntries, existingAll, lang);
  Object.assign(translated, translatedFbHistorical);

  for (const [key, baseArticle] of richEntries) {
    console.log(`[${lang}] Rich article ${key}`);
    translated[key] = await translateRichArticle(baseArticle, existingAll[key], lang);
  }

  return { translated, slugMap };
}

async function main() {
  const esMain = loadArticlesFromFile(SOURCE_FILES.main, "es");
  const esFbGuides = loadArticlesFromFile(SOURCE_FILES.fbGuides, "es");
  const esAll = { ...esMain, ...esFbGuides };
  const langsToSync = REQUESTED_LANGS.length > 0 ? LANGS.filter((lang) => REQUESTED_LANGS.includes(lang)) : LANGS;

  for (const lang of langsToSync) {
    console.log(`\nSyncing ${lang} from Spanish source...`);
    const existingMain = loadArticlesFromFile(TARGET_FILES[lang].main, lang);
    const existingFbGuides = loadArticlesFromFile(TARGET_FILES[lang].fbGuides, lang);
    const existingAll = { ...existingMain, ...existingFbGuides };
    const baseSelection = REQUESTED_KEYS.length > 0
      ? Object.fromEntries(
          REQUESTED_KEYS
            .filter((key) => esAll[key])
            .map((key) => [key, esAll[key]])
        )
      : esAll;

    const { translated, slugMap } = await buildLanguageOutputs(lang, baseSelection, existingAll);
    const nextAll = REQUESTED_KEYS.length > 0 ? { ...existingAll, ...translated } : translated;
    const { main, fbGuides } = splitEntries(nextAll);

    fs.writeFileSync(path.join(ROOT, TARGET_FILES[lang].main), formatMainFile(lang, main, slugMap), "utf8");
    fs.writeFileSync(path.join(ROOT, TARGET_FILES[lang].fbGuides), formatFbGuidesFile(lang, fbGuides), "utf8");
    saveCache();
    console.log(`Wrote ${TARGET_FILES[lang].main} and ${TARGET_FILES[lang].fbGuides}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
