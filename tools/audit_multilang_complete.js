#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ARTIFACTS_DIR = path.join(ROOT, "artifacts");
const LANGS = ["es", "fr", "en", "de", "it"];
const NON_ES_LANGS = LANGS.filter((lang) => lang !== "es");
const PAGE_FILE = "content-pages.js";

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), "utf8");
}

function listArticleFilesOnDisk() {
  return fs
    .readdirSync(ROOT)
    .filter((name) => /^content-articles.*\.js$/.test(name))
    .sort((a, b) => a.localeCompare(b));
}

function getPreferredArticleLoadOrder() {
  return [
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
}

function parseScriptSrcs(htmlFile) {
  const html = readFile(htmlFile);
  return [...html.matchAll(/<script\s+src="([^"]+)"><\/script>/g)].map((m) => m[1]);
}

function createVmContext() {
  const siteContent = {
    ui: {
      es: {},
      fr: {},
      en: {},
      de: {},
      it: {},
    },
    es: { global: {}, pages: {}, articles: {} },
    fr: { global: {}, pages: {}, articles: {} },
    en: { global: {}, pages: {}, articles: {} },
    de: { global: {}, pages: {}, articles: {} },
    it: { global: {}, pages: {}, articles: {} },
  };

  return vm.createContext({
    window: { siteContent },
    localStorage: {
      getItem(key) {
        return key === "lang" ? "es" : null;
      },
      setItem() {},
      removeItem() {},
      clear() {},
    },
    console,
  });
}

function loadSiteContent(files) {
  const ctx = createVmContext();
  for (const file of files) {
    const absPath = path.join(ROOT, file);
    if (!fs.existsSync(absPath)) continue;
    vm.runInContext(fs.readFileSync(absPath, "utf8"), ctx, { filename: file });
  }
  return ctx.window.siteContent;
}

function toAscii(value) {
  return String(value || "")
    .replace(/[“”]/g, "\"")
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");
}

function toAsciiDeep(value) {
  if (typeof value === "string") return toAscii(value);
  if (Array.isArray(value)) return value.map((item) => toAsciiDeep(item));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => [toAscii(key), toAsciiDeep(entryValue)]),
    );
  }
  return value;
}

function normalizeText(value) {
  return toAscii(value)
    .toLowerCase()
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(html) {
  const text = stripHtml(html);
  return text ? text.split(/\s+/).filter(Boolean).length : 0;
}

function countMatches(text, regex) {
  const matches = String(text || "").match(regex);
  return matches ? matches.length : 0;
}

function getStructureSignature(html) {
  const source = String(html || "");
  return {
    h1: countMatches(source, /<h1\b/gi),
    h2: countMatches(source, /<h2\b/gi),
    h3: countMatches(source, /<h3\b/gi),
    h4: countMatches(source, /<h4\b/gi),
    p: countMatches(source, /<p\b/gi),
    ul: countMatches(source, /<ul\b/gi),
    ol: countMatches(source, /<ol\b/gi),
    li: countMatches(source, /<li\b/gi),
    table: countMatches(source, /<table\b/gi),
    blockquote: countMatches(source, /<blockquote\b/gi),
    img: countMatches(source, /<img\b/gi),
    internalLinks: extractInternalLinks(source).length,
  };
}

function extractInternalLinks(html) {
  return [...String(html || "").matchAll(/href="(#\/[^"]+)"/g)].map((m) => m[1]);
}

function removeQuery(src) {
  return String(src || "").split("?")[0];
}

function fileExistsFromProject(relPath) {
  if (!relPath) return false;
  if (/^(https?:)?\/\//i.test(relPath)) return true;
  return fs.existsSync(path.join(ROOT, removeQuery(relPath)));
}

function extractCanonicalId(key, article) {
  const source = String(key || article?.slug || "");
  let match = source.match(/^(fb-daily-\d{8}-\d{2})/);
  if (match) return match[1];
  match = source.match(/^(fb-\d{3})/);
  if (match) return match[1];
  return String(key || article?.slug || "");
}

function extractArticleType(key, canonicalId) {
  if (/^fb-daily-\d{8}-\d{2}$/.test(canonicalId)) return "facebook-daily";
  if (/^fb-\d{3}$/.test(canonicalId)) return "facebook-archive";
  if (String(key || "").startsWith("fb-")) return "facebook-curated";
  return "guide";
}

function isArchivedFacebookPlaceholder(article) {
  const content = String(article?.content || "");
  return content.includes("Nota del archivo:") && content.length < 400;
}

function parseDateParts(rawValue) {
  const raw = normalizeText(rawValue).replace(/,/g, " ");
  if (!raw) return null;

  const monthMap = {
    jan: 1,
    january: 1,
    enero: 1,
    janvier: 1,
    janner: 1,
    januar: 1,
    gennaio: 1,
    feb: 2,
    february: 2,
    febrero: 2,
    fevrier: 2,
    februar: 2,
    febbraio: 2,
    mar: 3,
    march: 3,
    marzo: 3,
    mars: 3,
    marz: 3,
    apr: 4,
    april: 4,
    abril: 4,
    avril: 4,
    aprile: 4,
    may: 5,
    mayo: 5,
    mai: 5,
    giugno: 6,
    jun: 6,
    june: 6,
    junio: 6,
    juin: 6,
    juni: 6,
    jul: 7,
    july: 7,
    julio: 7,
    juillet: 7,
    juli: 7,
    aug: 8,
    august: 8,
    agosto: 8,
    aout: 8,
    agost: 8,
    sep: 9,
    sept: 9,
    september: 9,
    septiembre: 9,
    septembre: 9,
    settembre: 9,
    okt: 10,
    oct: 10,
    october: 10,
    octubre: 10,
    octobre: 10,
    ottobre: 10,
    nov: 11,
    november: 11,
    noviembre: 11,
    novembre: 11,
    dec: 12,
    december: 12,
    diciembre: 12,
    decembre: 12,
    dezember: 12,
    dicembre: 12,
  };

  let match = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) {
    return { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]), precision: "day" };
  }

  match = raw.match(/^(\d{1,2}) ([a-z]+) (\d{4})(?:\b| )/);
  if (match && monthMap[match[2]]) {
    return { year: Number(match[3]), month: monthMap[match[2]], day: Number(match[1]), precision: "day" };
  }

  match = raw.match(/^([a-z]+) (\d{1,2}) (\d{4})(?:\b| )/);
  if (match && monthMap[match[1]]) {
    return { year: Number(match[3]), month: monthMap[match[1]], day: Number(match[2]), precision: "day" };
  }

  match = raw.match(/^([a-z]+) (\d{4})$/);
  if (match && monthMap[match[1]]) {
    return { year: Number(match[2]), month: monthMap[match[1]], day: 0, precision: "month" };
  }

  match = raw.match(/^(\d{4})$/);
  if (match) {
    return { year: Number(match[1]), month: 0, day: 0, precision: "year" };
  }

  return null;
}

function normalizeDate(rawValue) {
  const parts = parseDateParts(rawValue);
  if (!parts) return "";
  const mm = String(parts.month || 0).padStart(2, "0");
  const dd = String(parts.day || 0).padStart(2, "0");
  return `${parts.year}-${mm}-${dd}`;
}

function formatList(values) {
  return values.length ? values.join(", ") : "none";
}

function deriveCategoryMap(siteContent) {
  const categoryCounts = {};
  for (const lang of LANGS) {
    categoryCounts[lang] = {};
    const articles = siteContent[lang]?.articles || {};
    for (const article of Object.values(articles)) {
      const hub = String(article?.hub || "").trim();
      const category = String(article?.category || "").trim();
      if (!hub || !category) continue;
      categoryCounts[lang][hub] = categoryCounts[lang][hub] || {};
      categoryCounts[lang][hub][category] = (categoryCounts[lang][hub][category] || 0) + 1;
    }
  }

  const categoryMap = {};
  for (const lang of LANGS) {
    categoryMap[lang] = {};
    for (const [hub, counts] of Object.entries(categoryCounts[lang])) {
      const sorted = Object.entries(counts).sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0]);
      });
      categoryMap[lang][hub] = sorted[0]?.[0] || "";
    }
  }
  return categoryMap;
}

function buildInventory(siteContent, sourceName) {
  const inventory = {};
  const slugMaps = {};

  for (const lang of LANGS) {
    const articles = siteContent[lang]?.articles || {};
    const byCanonicalId = new Map();
    const slugToIds = new Map();

    for (const [key, article] of Object.entries(articles)) {
      const canonicalId = extractCanonicalId(key, article);
      const slug = String(article?.slug || "").trim();
      const supportingImages = Array.isArray(article?.supportingImages) ? article.supportingImages.slice() : [];
      const entry = {
        source: sourceName,
        lang,
        key,
        canonicalId,
        type: extractArticleType(key, canonicalId),
        title: String(article?.title || ""),
        slug,
        description: String(article?.description || ""),
        summary: String(article?.summary || ""),
        hub: String(article?.hub || ""),
        category: String(article?.category || ""),
        dateUpdated: String(article?.dateUpdated || ""),
        dateNormalized: normalizeDate(article?.dateUpdated || ""),
        featuredImage: String(article?.featuredImage || ""),
        supportingImages,
        imageAlt: String(article?.imageAlt || ""),
        keywords: String(article?.keywords || ""),
        readingTime: Number(article?.readingTime || 0) || 0,
        relatedSlugs: Array.isArray(article?.relatedSlugs) ? article.relatedSlugs.slice() : [],
        facebookUrl: String(article?.facebookUrl || ""),
        isPlaceholder: isArchivedFacebookPlaceholder(article),
        wordCount: wordCount(article?.content || ""),
        contentText: stripHtml(article?.content || ""),
        contentNormalized: normalizeText(stripHtml(article?.content || "")),
        titleNormalized: normalizeText(article?.title || ""),
        summaryNormalized: normalizeText(article?.summary || ""),
        structure: getStructureSignature(article?.content || ""),
        objectKeys: Object.keys(article || {}).sort(),
        internalLinks: extractInternalLinks(article?.content || ""),
      };

      byCanonicalId.set(canonicalId, entry);
      if (slug) {
        const current = slugToIds.get(slug) || [];
        current.push(canonicalId);
        slugToIds.set(slug, current);
      }
    }

    inventory[lang] = byCanonicalId;
    slugMaps[lang] = slugToIds;
  }

  return { inventory, slugMaps };
}

function buildPagesIndex(siteContent) {
  const pageKeys = new Set(Object.keys(siteContent.es?.pages || {}));
  return pageKeys;
}

function extractRouteFromHref(href) {
  const route = String(href || "").replace(/^#\//, "").trim();
  return route || "";
}

function buildSlugIndex(inventory) {
  const map = {};
  for (const lang of LANGS) {
    map[lang] = new Map();
    for (const entry of inventory[lang].values()) {
      if (entry.slug) map[lang].set(entry.slug, entry);
    }
  }
  return map;
}

function arraysEqual(left, right) {
  return JSON.stringify(left || []) === JSON.stringify(right || []);
}

function structureEqual(left, right) {
  return JSON.stringify(left || {}) === JSON.stringify(right || {});
}

function getRepoReferences() {
  const files = ["app.js", "index.html", "404.html", PAGE_FILE, ...listArticleFilesOnDisk()];
  const refs = new Set();
  for (const file of files) {
    if (!fs.existsSync(path.join(ROOT, file))) continue;
    const text = readFile(file);
    for (const match of text.matchAll(/media\/[A-Za-z0-9_./-]+\.(?:png|jpg|jpeg|webp|gif|svg)/g)) {
      refs.add(removeQuery(match[0]));
    }
  }
  return refs;
}

function listMediaFiles() {
  const mediaRoot = path.join(ROOT, "media");
  const files = [];

  function walk(dirPath) {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      const absPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        walk(absPath);
      } else if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(entry.name)) {
        files.push(path.relative(ROOT, absPath).replace(/\\/g, "/"));
      }
    }
  }

  if (fs.existsSync(mediaRoot)) walk(mediaRoot);
  return files.sort((a, b) => a.localeCompare(b));
}

function computeImageUsage(allInventory) {
  const imageUsage = new Map();
  for (const lang of LANGS) {
    for (const entry of allInventory[lang].values()) {
      const paths = [];
      if (entry.featuredImage) paths.push(removeQuery(entry.featuredImage));
      for (const src of entry.supportingImages) paths.push(removeQuery(src));
      for (const src of paths) {
        if (!src) continue;
        const current = imageUsage.get(src) || [];
        current.push({ lang, canonicalId: entry.canonicalId, key: entry.key, slug: entry.slug });
        imageUsage.set(src, current);
      }
    }
  }
  return imageUsage;
}

function compareSite() {
  const allArticleFiles = listArticleFilesOnDisk();
  const indexScripts = parseScriptSrcs("index.html");
  const notFoundScripts = parseScriptSrcs("404.html");

  const preferredRepoFiles = getPreferredArticleLoadOrder().filter((file) => allArticleFiles.includes(file));
  const repoFiles = [PAGE_FILE, ...preferredRepoFiles];
  const indexFiles = [PAGE_FILE, ...indexScripts.filter((src) => /^content-articles.*\.js$/.test(src))];
  const notFoundFiles = [PAGE_FILE, ...notFoundScripts.filter((src) => /^content-articles.*\.js$/.test(src))];

  const repoContent = loadSiteContent(repoFiles);
  const indexContent = loadSiteContent(indexFiles);
  const notFoundContent = loadSiteContent(notFoundFiles);

  const categoryMap = deriveCategoryMap(repoContent);
  const repoData = buildInventory(repoContent, "repo");
  const indexData = buildInventory(indexContent, "index");
  const notFoundData = buildInventory(notFoundContent, "404");
  const pagesIndex = buildPagesIndex(repoContent);
  const slugIndex = buildSlugIndex(repoData.inventory);
  const imageUsage = computeImageUsage(repoData.inventory);
  const mediaFiles = listMediaFiles();
  const referencedMedia = getRepoReferences();

  const missingTranslations = [];
  const imageMismatches = [];
  const brokenRoutes = [];
  const seoIssues = [];
  const structureIssues = [];
  const orphanPublications = [];
  const untranslatedSlugIssues = [];
  const keyMismatchIssues = [];

  const runtimeGaps = [];
  const duplicateSlugs = [];
  const duplicateCanonicalIds = [];
  const metadataIssues = [];
  const supportingImageIssues = [];

  for (const lang of LANGS) {
    const slugCounts = repoData.slugMaps[lang];
    for (const [slug, ids] of slugCounts.entries()) {
      if (ids.length > 1) {
        duplicateSlugs.push({ lang, slug, canonicalIds: ids.slice() });
      }
    }
  }

  const esReference = repoData.inventory.es;

  for (const canonicalId of esReference.keys()) {
    const esEntry = esReference.get(canonicalId);

    for (const lang of NON_ES_LANGS) {
      const targetEntry = repoData.inventory[lang].get(canonicalId);
      if (!targetEntry) {
        missingTranslations.push({
          canonicalId,
          esKey: esEntry.key,
          esSlug: esEntry.slug,
          esTitle: esEntry.title,
          missingLang: lang,
          type: esEntry.type,
        });
        continue;
      }

      if (targetEntry.key !== esEntry.key) {
        keyMismatchIssues.push({
          issue: "key_mismatch",
          canonicalId,
          lang,
          esKey: esEntry.key,
          langKey: targetEntry.key,
          esSlug: esEntry.slug,
          langSlug: targetEntry.slug,
        });
      }

      const expectedCategory = categoryMap[lang][esEntry.hub] || "";
      if (!targetEntry.title) {
        seoIssues.push({ canonicalId, lang, issue: "missing_title", key: targetEntry.key, slug: targetEntry.slug });
      }
      if (!targetEntry.description) {
        seoIssues.push({ canonicalId, lang, issue: "missing_description", key: targetEntry.key, slug: targetEntry.slug });
      }
      if (!targetEntry.summary) {
        seoIssues.push({ canonicalId, lang, issue: "missing_summary", key: targetEntry.key, slug: targetEntry.slug });
      }
      if (!targetEntry.featuredImage) {
        seoIssues.push({ canonicalId, lang, issue: "missing_og_image_source", key: targetEntry.key, slug: targetEntry.slug });
      }
      if (!targetEntry.imageAlt) {
        seoIssues.push({ canonicalId, lang, issue: "missing_image_alt", key: targetEntry.key, slug: targetEntry.slug });
      }
      if (!targetEntry.keywords) {
        seoIssues.push({ canonicalId, lang, issue: "missing_keywords", key: targetEntry.key, slug: targetEntry.slug });
      }

      if (targetEntry.hub !== esEntry.hub) {
        metadataIssues.push({
          canonicalId,
          lang,
          issue: "hub_mismatch",
          esHub: esEntry.hub,
          langHub: targetEntry.hub,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (!targetEntry.category) {
        metadataIssues.push({
          canonicalId,
          lang,
          issue: "missing_category",
          expectedCategory,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      } else if (expectedCategory && targetEntry.category !== expectedCategory) {
        metadataIssues.push({
          canonicalId,
          lang,
          issue: "category_mismatch",
          expectedCategory,
          actualCategory: targetEntry.category,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (targetEntry.readingTime !== esEntry.readingTime) {
        metadataIssues.push({
          canonicalId,
          lang,
          issue: "reading_time_mismatch",
          esReadingTime: esEntry.readingTime,
          langReadingTime: targetEntry.readingTime,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (esEntry.dateNormalized && targetEntry.dateNormalized && esEntry.dateNormalized !== targetEntry.dateNormalized) {
        metadataIssues.push({
          canonicalId,
          lang,
          issue: "date_mismatch",
          esDate: esEntry.dateUpdated,
          langDate: targetEntry.dateUpdated,
          esDateNormalized: esEntry.dateNormalized,
          langDateNormalized: targetEntry.dateNormalized,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      } else if (esEntry.dateUpdated && !targetEntry.dateUpdated) {
        metadataIssues.push({
          canonicalId,
          lang,
          issue: "missing_date",
          esDate: esEntry.dateUpdated,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (targetEntry.slug === esEntry.slug && targetEntry.titleNormalized !== esEntry.titleNormalized) {
        untranslatedSlugIssues.push({
          canonicalId,
          lang,
          issue: "slug_not_translated",
          esSlug: esEntry.slug,
          langSlug: targetEntry.slug,
          esTitle: esEntry.title,
          langTitle: targetEntry.title,
          key: targetEntry.key,
        });
      }

      if (targetEntry.titleNormalized === esEntry.titleNormalized && lang !== "es") {
        seoIssues.push({
          canonicalId,
          lang,
          issue: "title_same_as_spanish",
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (targetEntry.contentNormalized === esEntry.contentNormalized && lang !== "es" && targetEntry.wordCount > 30) {
        metadataIssues.push({
          canonicalId,
          lang,
          issue: "content_same_as_spanish",
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (!structureEqual(esEntry.structure, targetEntry.structure)) {
        structureIssues.push({
          canonicalId,
          lang,
          issue: "structure_mismatch",
          esStructure: esEntry.structure,
          langStructure: targetEntry.structure,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (esEntry.wordCount > 0) {
        const ratio = Number((targetEntry.wordCount / esEntry.wordCount).toFixed(2));
        if (ratio < 0.45 || ratio > 1.8) {
          structureIssues.push({
            canonicalId,
            lang,
            issue: "word_count_ratio_outlier",
            ratio,
            esWordCount: esEntry.wordCount,
            langWordCount: targetEntry.wordCount,
            key: targetEntry.key,
            slug: targetEntry.slug,
          });
        }
      }

      const featuredMatches = removeQuery(targetEntry.featuredImage) === removeQuery(esEntry.featuredImage);
      const supportingMatches = arraysEqual(
        targetEntry.supportingImages.map(removeQuery),
        esEntry.supportingImages.map(removeQuery),
      );

      if (!featuredMatches) {
        imageMismatches.push({
          canonicalId,
          lang,
          issue: "hero_image_mismatch",
          esImage: esEntry.featuredImage,
          langImage: targetEntry.featuredImage,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (!supportingMatches) {
        imageMismatches.push({
          canonicalId,
          lang,
          issue: "supporting_images_mismatch",
          esSupportingImages: esEntry.supportingImages,
          langSupportingImages: targetEntry.supportingImages,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      if (esEntry.supportingImages.length !== targetEntry.supportingImages.length) {
        supportingImageIssues.push({
          canonicalId,
          lang,
          issue: "supporting_image_count_mismatch",
          esCount: esEntry.supportingImages.length,
          langCount: targetEntry.supportingImages.length,
          key: targetEntry.key,
          slug: targetEntry.slug,
        });
      }

      for (const src of [esEntry.featuredImage, ...esEntry.supportingImages]) {
        if (src && !fileExistsFromProject(src)) {
          imageMismatches.push({
            canonicalId,
            lang: "es",
            issue: "missing_image_file",
            image: src,
            key: esEntry.key,
            slug: esEntry.slug,
          });
        }
      }

      for (const src of [targetEntry.featuredImage, ...targetEntry.supportingImages]) {
        if (src && !fileExistsFromProject(src)) {
          imageMismatches.push({
            canonicalId,
            lang,
            issue: "missing_image_file",
            image: src,
            key: targetEntry.key,
            slug: targetEntry.slug,
          });
        }
      }
    }
  }

  for (const lang of NON_ES_LANGS) {
    for (const [canonicalId, entry] of repoData.inventory[lang].entries()) {
      if (!esReference.has(canonicalId)) {
        orphanPublications.push({
          lang,
          canonicalId,
          key: entry.key,
          slug: entry.slug,
          title: entry.title,
          issue: "language_only_publication",
        });
      }
    }
  }

  for (const lang of LANGS) {
    for (const entry of repoData.inventory[lang].values()) {
      const routeContext = { lang, key: entry.key, canonicalId: entry.canonicalId, slug: entry.slug, title: entry.title };

      for (const href of entry.internalLinks) {
        const route = extractRouteFromHref(href);
        if (!route) continue;

        const hasArticleInLang = slugIndex[lang].has(route);
        const hasArticleInEs = slugIndex.es.has(route);
        const hasPage = pagesIndex.has(route);

        if (!hasArticleInLang && !hasPage) {
          brokenRoutes.push({
            ...routeContext,
            issue: "broken_internal_link",
            href,
            route,
            fallbackExistsInSpanish: hasArticleInEs,
          });
        }

        const routeEntryInEs = slugIndex.es.get(route);
        if (lang !== "es" && routeEntryInEs && routeEntryInEs.canonicalId === entry.canonicalId && route !== entry.slug) {
          brokenRoutes.push({
            ...routeContext,
            issue: "internal_link_points_to_spanish_slug",
            href,
            route,
            expectedSlug: entry.slug,
          });
        }
      }

      for (const relatedSlug of entry.relatedSlugs) {
        const route = String(relatedSlug || "").trim();
        if (!route) continue;
        const hasArticleInLang = slugIndex[lang].has(route);
        const hasPage = pagesIndex.has(route);
        if (!hasArticleInLang && !hasPage) {
          brokenRoutes.push({
            ...routeContext,
            issue: "broken_related_slug",
            relatedSlug: route,
          });
        }
      }
    }
  }

  for (const lang of LANGS) {
    const repoSet = repoData.inventory[lang];
    const indexSet = indexData.inventory[lang];
    const notFoundSet = notFoundData.inventory[lang];

    for (const [canonicalId, entry] of repoSet.entries()) {
      if (!indexSet.has(canonicalId)) {
        runtimeGaps.push({
          lang,
          runtime: "index",
          canonicalId,
          key: entry.key,
          slug: entry.slug,
          title: entry.title,
          issue: "bundle_not_loaded_in_index",
        });
      }
      if (!notFoundSet.has(canonicalId)) {
        runtimeGaps.push({
          lang,
          runtime: "404",
          canonicalId,
          key: entry.key,
          slug: entry.slug,
          title: entry.title,
          issue: "bundle_not_loaded_in_404",
        });
      }
    }
  }

  const unusedImages = mediaFiles.filter((file) => !referencedMedia.has(file));
  const duplicateImageRefs = [...imageUsage.entries()]
    .map(([image, refs]) => ({
      image,
      references: refs.length,
      canonicalIds: [...new Set(refs.map((ref) => ref.canonicalId))].sort(),
    }))
    .filter((item) => item.canonicalIds.length >= 2)
    .sort((a, b) => b.references - a.references || a.image.localeCompare(b.image));

  return {
    sourceFiles: {
      allArticleFiles,
      indexArticleFiles: indexFiles.filter((file) => file !== PAGE_FILE),
      notFoundArticleFiles: notFoundFiles.filter((file) => file !== PAGE_FILE),
    },
    counts: {
      repo: Object.fromEntries(LANGS.map((lang) => [lang, repoData.inventory[lang].size])),
      index: Object.fromEntries(LANGS.map((lang) => [lang, indexData.inventory[lang].size])),
      notFound: Object.fromEntries(LANGS.map((lang) => [lang, notFoundData.inventory[lang].size])),
      esReference: esReference.size,
    },
    issues: {
      missingTranslations,
      imageMismatches,
      brokenRoutes,
      seoIssues,
      structureIssues,
      metadataIssues,
      supportingImageIssues,
      orphanPublications,
      untranslatedSlugIssues,
      keyMismatchIssues,
      runtimeGaps,
      duplicateSlugs,
      duplicateCanonicalIds,
    },
    diagnostics: {
      categoryMap,
      unusedImages,
      duplicateImageRefs,
      pageRouteCount: pagesIndex.size,
      pageRoutes: [...pagesIndex].sort(),
      runtimeScripts: {
        index: indexScripts,
        notFound: notFoundScripts,
      },
    },
    inventories: {
      repo: repoData.inventory,
      index: indexData.inventory,
      notFound: notFoundData.inventory,
    },
  };
}

function toPlainObjectInventory(inventory) {
  const output = {};
  for (const lang of LANGS) {
    output[lang] = {};
    for (const [canonicalId, entry] of inventory[lang].entries()) {
      output[lang][canonicalId] = entry;
    }
  }
  return output;
}

function writeJson(relPath, value) {
  fs.writeFileSync(path.join(ROOT, relPath), JSON.stringify(toAsciiDeep(value), null, 2) + "\n");
}

function renderMarkdownReport(result) {
  const { counts, issues, diagnostics, sourceFiles } = result;

  const lines = [];
  lines.push("# Audit multilingue complet");
  lines.push("");
  lines.push("## Resume global");
  lines.push("");
  lines.push(`- Nombre total d'articles ES: ${counts.repo.es}`);
  lines.push(`- Nombre FR: ${counts.repo.fr}`);
  lines.push(`- Nombre EN: ${counts.repo.en}`);
  lines.push(`- Nombre DE: ${counts.repo.de}`);
  lines.push(`- Nombre IT: ${counts.repo.it}`);
  lines.push(`- Nombre de traductions manquantes: ${issues.missingTranslations.length}`);
  lines.push(`- Nombre d'images incoherentes: ${issues.imageMismatches.length}`);
  lines.push(`- Nombre de slugs incoherents: ${issues.untranslatedSlugIssues.length + issues.keyMismatchIssues.length + issues.duplicateSlugs.length}`);
  lines.push(`- Nombre de pages orphelines: ${issues.orphanPublications.length}`);
  lines.push("");
  lines.push("## Constat runtime");
  lines.push("");
  lines.push(`- Publications chargees via index.html: ES ${counts.index.es}, FR ${counts.index.fr}, EN ${counts.index.en}, DE ${counts.index.de}, IT ${counts.index.it}`);
  lines.push(`- Publications chargees via 404.html: ES ${counts.notFound.es}, FR ${counts.notFound.fr}, EN ${counts.notFound.en}, DE ${counts.notFound.de}, IT ${counts.notFound.it}`);
  lines.push(`- Ecart runtime total: ${issues.runtimeGaps.length} publications non chargees selon le point d'entree`);
  lines.push(`- Routes de pages partagees detectees: ${diagnostics.pageRouteCount}`);
  lines.push("");
  lines.push("## Fichiers analyses");
  lines.push("");
  lines.push(`- Bundles article sur disque: ${sourceFiles.allArticleFiles.length}`);
  lines.push(`- Bundles article charges par index.html: ${sourceFiles.indexArticleFiles.length}`);
  lines.push(`- Bundles article charges par 404.html: ${sourceFiles.notFoundArticleFiles.length}`);
  lines.push(`- Fichier de structure partagee: ${PAGE_FILE}`);
  lines.push("");
  lines.push("## Articles manquants");
  lines.push("");
  lines.push("| Canonical ID | ES | FR | EN | DE | IT |");
  lines.push("| --- | --- | --- | --- | --- | --- |");

  const missingByCanonicalId = new Map();
  for (const issue of issues.missingTranslations) {
    const current = missingByCanonicalId.get(issue.canonicalId) || {
      canonicalId: issue.canonicalId,
      es: issue.esTitle,
      fr: "OK",
      en: "OK",
      de: "OK",
      it: "OK",
    };
    current[issue.missingLang] = "MISSING";
    missingByCanonicalId.set(issue.canonicalId, current);
  }
  for (const row of [...missingByCanonicalId.values()].sort((a, b) => a.canonicalId.localeCompare(b.canonicalId))) {
    lines.push(`| ${row.canonicalId} | ${row.es} | ${row.fr} | ${row.en} | ${row.de} | ${row.it} |`);
  }
  if (!missingByCanonicalId.size) lines.push("| none | none | none | none | none | none |");
  lines.push("");

  lines.push("## Images incoherentes");
  lines.push("");
  lines.push("| Article ES | Langue | Probleme |");
  lines.push("| --- | --- | --- |");
  for (const issue of issues.imageMismatches.slice().sort((a, b) => a.canonicalId.localeCompare(b.canonicalId) || a.lang.localeCompare(b.lang))) {
    lines.push(`| ${issue.canonicalId} | ${issue.lang} | ${issue.issue} |`);
  }
  if (!issues.imageMismatches.length) lines.push("| none | none | none |");
  lines.push("");

  lines.push("## Slugs incoherents");
  lines.push("");
  lines.push("| Canonical ID | Langue | Probleme |");
  lines.push("| --- | --- | --- |");
  const slugIssueRows = [
    ...issues.untranslatedSlugIssues.map((issue) => ({ canonicalId: issue.canonicalId, lang: issue.lang, issue: issue.issue })),
    ...issues.keyMismatchIssues.map((issue) => ({ canonicalId: issue.canonicalId, lang: issue.lang, issue: "key_mismatch" })),
    ...issues.duplicateSlugs.map((issue) => ({ canonicalId: formatList(issue.canonicalIds), lang: issue.lang, issue: `duplicate_slug:${issue.slug}` })),
  ].sort((a, b) => a.canonicalId.localeCompare(b.canonicalId) || a.lang.localeCompare(b.lang));
  for (const row of slugIssueRows) {
    lines.push(`| ${row.canonicalId} | ${row.lang} | ${row.issue} |`);
  }
  if (!slugIssueRows.length) lines.push("| none | none | none |");
  lines.push("");

  lines.push("## Metadonnees manquantes");
  lines.push("");
  lines.push("| Canonical ID | Langue | Probleme |");
  lines.push("| --- | --- | --- |");
  const metaRows = [
    ...issues.seoIssues.map((issue) => ({ canonicalId: issue.canonicalId, lang: issue.lang, issue: issue.issue })),
    ...issues.metadataIssues.map((issue) => ({ canonicalId: issue.canonicalId, lang: issue.lang, issue: issue.issue })),
  ].sort((a, b) => a.canonicalId.localeCompare(b.canonicalId) || a.lang.localeCompare(b.lang));
  for (const row of metaRows) {
    lines.push(`| ${row.canonicalId} | ${row.lang} | ${row.issue} |`);
  }
  if (!metaRows.length) lines.push("| none | none | none |");
  lines.push("");

  lines.push("## SupportingImages manquantes");
  lines.push("");
  lines.push("| Canonical ID | Langue | Probleme |");
  lines.push("| --- | --- | --- |");
  for (const issue of issues.supportingImageIssues.slice().sort((a, b) => a.canonicalId.localeCompare(b.canonicalId) || a.lang.localeCompare(b.lang))) {
    lines.push(`| ${issue.canonicalId} | ${issue.lang} | ${issue.issue} |`);
  }
  if (!issues.supportingImageIssues.length) lines.push("| none | none | none |");
  lines.push("");

  lines.push("## Pages cassees");
  lines.push("");
  lines.push("| Canonical ID | Langue | Probleme |");
  lines.push("| --- | --- | --- |");
  const brokenRows = [
    ...issues.brokenRoutes.map((issue) => ({ canonicalId: issue.canonicalId, lang: issue.lang, issue: issue.issue })),
    ...issues.runtimeGaps.map((issue) => ({ canonicalId: issue.canonicalId, lang: issue.lang, issue: `${issue.issue}:${issue.runtime}` })),
  ].sort((a, b) => a.canonicalId.localeCompare(b.canonicalId) || a.lang.localeCompare(b.lang));
  for (const row of brokenRows) {
    lines.push(`| ${row.canonicalId} | ${row.lang} | ${row.issue} |`);
  }
  if (!brokenRows.length) lines.push("| none | none | none |");
  lines.push("");

  lines.push("## Publications orphelines");
  lines.push("");
  lines.push("| Canonical ID | Langue | Titre |");
  lines.push("| --- | --- | --- |");
  for (const issue of issues.orphanPublications.slice().sort((a, b) => a.canonicalId.localeCompare(b.canonicalId) || a.lang.localeCompare(b.lang))) {
    lines.push(`| ${issue.canonicalId} | ${issue.lang} | ${issue.title} |`);
  }
  if (!issues.orphanPublications.length) lines.push("| none | none | none |");
  lines.push("");

  lines.push("## Bonus");
  lines.push("");
  lines.push(`- Images inutilisees detectees: ${diagnostics.unusedImages.length}`);
  lines.push(`- Images dupliquees massivement (>= 5 references): ${diagnostics.duplicateImageRefs.length}`);
  lines.push(`- Ecarts de structure HTML: ${issues.structureIssues.length}`);
  lines.push(`- Ecarts de runtime bundles: ${issues.runtimeGaps.length}`);
  lines.push("");

  if (diagnostics.unusedImages.length) {
    lines.push("### Images inutilisees");
    lines.push("");
    for (const image of diagnostics.unusedImages.slice(0, 100)) {
      lines.push(`- ${image}`);
    }
    if (diagnostics.unusedImages.length > 100) {
      lines.push(`- ... ${diagnostics.unusedImages.length - 100} autres`);
    }
    lines.push("");
  }

  if (diagnostics.duplicateImageRefs.length) {
    lines.push("### Images dupliquees massivement");
    lines.push("");
    for (const item of diagnostics.duplicateImageRefs.slice(0, 40)) {
      lines.push(`- ${item.image} -> ${item.references} references`);
    }
    lines.push("");
  }

  lines.push("## Recommandations");
  lines.push("");
  lines.push("- Aligner les cles d'articles entre l'espagnol et les autres langues pour toutes les publications daily recentes. Les aides runtime de app.js supposent souvent une cle identique.");
  lines.push("- Charger content-articles-facebook-it.js dans index.html si l'italien doit exposer les memes publications historiques que les autres langues.");
  lines.push("- Charger les bundles facebook et daily dans 404.html pour eviter des routes cassees en acces direct ou apres refresh.");
  lines.push("- Uniformiser les slugs non espagnols la ou le slug local reste identique a l'espagnol alors que le titre est traduit.");
  lines.push("- Corriger les publications orphelines encore presentes hors ES et supprimer ou rebrancher les references non canoniques.");
  lines.push("- Completer featuredImage, supportingImages, summary, description et imageAlt la ou ils manquent pour conserver la coherence SEO et OpenGraph.");
  lines.push("- Reverifier les liens internes des contenus traduits pour qu'ils pointent vers le slug de la langue courante quand il existe.");
  lines.push("- Traiter les placeholders Facebook restants et harmoniser la structure HTML quand les ratios de mots ou de balises divergent fortement.");
  lines.push("");

  return lines.join("\n") + "\n";
}

function main() {
  ensureDir(ARTIFACTS_DIR);

  const result = compareSite();

  const markdown = renderMarkdownReport(result);
  fs.writeFileSync(path.join(ARTIFACTS_DIR, "audit_multilang_complete.md"), markdown);

  writeJson("artifacts/missing_translations.json", result.issues.missingTranslations);
  writeJson("artifacts/image_mismatches.json", result.issues.imageMismatches);
  writeJson("artifacts/broken_routes.json", {
    brokenRoutes: result.issues.brokenRoutes,
    runtimeGaps: result.issues.runtimeGaps,
    duplicateSlugs: result.issues.duplicateSlugs,
  });
  writeJson("artifacts/seo_issues.json", {
    seoIssues: result.issues.seoIssues,
    metadataIssues: result.issues.metadataIssues,
    untranslatedSlugIssues: result.issues.untranslatedSlugIssues,
    keyMismatchIssues: result.issues.keyMismatchIssues,
    structureIssues: result.issues.structureIssues,
  });

  writeJson("artifacts/audit_multilang_complete.debug.json", {
    counts: result.counts,
    diagnostics: result.diagnostics,
    issues: {
      missingTranslations: result.issues.missingTranslations.length,
      imageMismatches: result.issues.imageMismatches.length,
      brokenRoutes: result.issues.brokenRoutes.length,
      seoIssues: result.issues.seoIssues.length,
      metadataIssues: result.issues.metadataIssues.length,
      structureIssues: result.issues.structureIssues.length,
      runtimeGaps: result.issues.runtimeGaps.length,
      untranslatedSlugIssues: result.issues.untranslatedSlugIssues.length,
      keyMismatchIssues: result.issues.keyMismatchIssues.length,
      supportingImageIssues: result.issues.supportingImageIssues.length,
      orphanPublications: result.issues.orphanPublications.length,
    },
    inventories: {
      repo: toPlainObjectInventory(result.inventories.repo),
      index: toPlainObjectInventory(result.inventories.index),
      notFound: toPlainObjectInventory(result.inventories.notFound),
    },
  });

  process.stdout.write(
    JSON.stringify(
      {
        ok: true,
        report: "artifacts/audit_multilang_complete.md",
        counts: result.counts,
        issueCounts: {
          missingTranslations: result.issues.missingTranslations.length,
          imageMismatches: result.issues.imageMismatches.length,
          brokenRoutes: result.issues.brokenRoutes.length,
          seoIssues: result.issues.seoIssues.length,
          metadataIssues: result.issues.metadataIssues.length,
          structureIssues: result.issues.structureIssues.length,
          runtimeGaps: result.issues.runtimeGaps.length,
          untranslatedSlugIssues: result.issues.untranslatedSlugIssues.length,
          keyMismatchIssues: result.issues.keyMismatchIssues.length,
          supportingImageIssues: result.issues.supportingImageIssues.length,
          orphanPublications: result.issues.orphanPublications.length,
        },
      },
      null,
      2,
    ) + "\n",
  );
}

main();
