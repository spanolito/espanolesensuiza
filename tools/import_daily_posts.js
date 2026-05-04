#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
let translate = null;

try {
  translate = require("google-translate-api-x");
} catch (error) {
  translate = null;
}

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SOURCE_DIR = "/Users/oscarandujar/Projets/Publications/posts";
const DEFAULT_LANGS = ["es", "en", "fr", "de", "it"];
const DEFAULT_OUT_FILES = {
  es: "content-articles-facebook-daily-es.js",
  en: "content-articles-facebook-daily-en.js",
  fr: "content-articles-facebook-daily-fr.js",
  de: "content-articles-facebook-daily-de.js",
  it: "content-articles-facebook-daily-it.js",
};
const DEFAULT_STATE_FILE = path.join(ROOT, ".daily-posts-import-state.json");
const CLASSIFICATION_REFERENCE = path.join(ROOT, "docs", "daily-posts-classification.json");

const MONTHS = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  fr: ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"],
  de: ["Januar", "Februar", "Marz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
};

const HUB_LABELS = {
  es: {
    "vivir-en-suiza": "Vivir en Suiza",
    trabajo: "Trabajo y Salarios",
    vivienda: "Vivienda",
    salud: "Salud y LAMal",
    impuestos: "Impuestos",
    tramites: "Tramites y Permisos",
    recursos: "Alertas y recursos",
    fronterizos: "Fronterizos",
    "cultura-eventos": "Cultura y eventos",
  },
  en: {
    "vivir-en-suiza": "Living in Switzerland",
    trabajo: "Work & Salaries",
    vivienda: "Housing",
    salud: "Health & LAMal",
    impuestos: "Taxes",
    tramites: "Procedures & Permits",
    recursos: "Alerts & resources",
    fronterizos: "Cross-border workers",
    "cultura-eventos": "Culture & events",
  },
  fr: {
    "vivir-en-suiza": "Vivre en Suisse",
    trabajo: "Travail & salaires",
    vivienda: "Logement",
    salud: "Sante & LAMal",
    impuestos: "Impots",
    tramites: "Demarches & permis",
    recursos: "Alertes & ressources",
    fronterizos: "Frontaliers",
    "cultura-eventos": "Culture & evenements",
  },
  de: {
    "vivir-en-suiza": "Leben in der Schweiz",
    trabajo: "Arbeit & Lohne",
    vivienda: "Wohnen",
    salud: "Gesundheit & LAMal",
    impuestos: "Steuern",
    tramites: "Behorden & Bewilligungen",
    recursos: "Warnungen & Ressourcen",
    fronterizos: "Grenzgaenger",
    "cultura-eventos": "Kultur & Veranstaltungen",
  },
  it: {
    "vivir-en-suiza": "Vivere in Svizzera",
    trabajo: "Lavoro e salari",
    vivienda: "Alloggio",
    salud: "Salute & LAMal",
    impuestos: "Imposte",
    tramites: "Pratiche & permessi",
    recursos: "Avvisi & risorse",
    fronterizos: "Frontalieri",
    "cultura-eventos": "Cultura & eventi",
  },
};

const HUB_RULES = {
  trabajo: {
    title: [
      "trabajar", "trabajo", "empleo", "salario", "nomina", "paro", "rav", "desempleo",
      "cotizados", "jubilacion", "avs", "ahv", "cct", "gav", "mercado laboral",
    ],
    body: [
      "trabajar", "empleador", "empleo", "contrato de trabajo", "salario", "nomina",
      "desempleo", "rav", "paro", "cotizacion", "cotizaciones", "jubilacion", "avs", "ahv",
      "cct", "gav", "mercado laboral", "caja de compensacion", "seguridad social",
    ],
  },
  vivienda: {
    title: [
      "alquiler", "alquilar", "piso", "vivienda", "inquilino", "arrendador", "fianza", "sublet",
    ],
    body: [
      "alquiler", "alquilar", "piso", "vivienda", "inquilino", "arrendador", "homegate", "immoscout",
      "comparis", "fianza", "deposito", "sublet", "subalquiler", "cooperativa de vivienda",
      "taux de reference", "referencia hipotecaria", "mieterverband", "asloca",
    ],
  },
  salud: {
    title: [
      "seguro medico", "lamal", "psicologo", "psiquiatra", "prima", "pramienverbilligung",
      "accidente", "baja", "enfermo", "dentista", "dental",
    ],
    body: [
      "seguro medico", "lamal", "franquicia", "copago", "medico de cabecera", "psicologo",
      "psiquiatra", "primas", "pramienverbilligung", "ipt", "bag.admin", "aseguradora", "kvg",
      "accidente", "laa", "enfermedad profesional", "krankentaggeld", "dentista", "dental",
    ],
  },
  impuestos: {
    title: [
      "impuesto", "impuestos", "fuente", "quellensteuer", "fiscal", "tributacion", "declaracion",
    ],
    body: [
      "impuesto", "impuestos", "quellensteuer", "fuente", "declaracion", "deduccion", "deducciones",
      "fiscal", "tributacion", "iva", "declaracion ordinaria", "retencion", "canton de residencia",
    ],
  },
  tramites: {
    title: [
      "permiso", "residencia", "registro", "commune", "municipio", "etias", "lex koller", "llegar",
      "embarque", "pasaporte",
    ],
    body: [
      "permiso", "permisos", "residencia", "registro", "commune", "municipio", "control de habitantes",
      "etias", "frontera", "lex koller", "registrarte", "empadronamiento", "direccion de residencia",
      "solicitar el permiso", "autoridad cantonal", "titulo de residencia", "embarque", "pasaporte",
    ],
  },
  recursos: {
    title: [
      "fraude", "estafa", "alerta", "consulta", "reforma", "referendum", "votacion", "ley", "temu", "sms",
    ],
    body: [
      "fraude", "estafa", "alerta", "consulta publica", "consulta", "consejo federal", "referendum",
      "votacion", "ley federal", "mercado inmobiliario", "reforma", "proyecto", "multa", "multas",
      "phishing", "sms", "temu", "consumidor",
    ],
  },
  fronterizos: {
    title: ["fronterizo", "fronterizos", "permiso g", "cmu"],
    body: ["fronterizo", "fronterizos", "permiso g", "cmu", "cruzar la frontera", "francia", "alta saboya"],
  },
  "cultura-eventos": {
    title: ["fiesta", "fiestas", "festival", "tradicion", "tradiciones", "evento", "cultura", "cern", "web"],
    body: ["fiesta", "fiestas", "festival", "tradicion", "tradiciones", "evento", "cultura", "feria", "carnaval", "cern", "world wide web"],
  },
  "vivir-en-suiza": {
    title: ["suiza", "vida diaria", "vida en suiza", "consejos", "civismo", "comunidad", "perro", "fresas"],
    body: [
      "vida diaria", "coste de vida", "costo de vida", "transporte publico", "escuela", "cantonal",
      "vecinos", "integracion", "idioma", "idiomas", "recien llegado", "convivencia", "civismo",
      "perro", "hausordnung", "autocosecha", "lago",
    ],
  },
};

const STOP_WORDS = new Set([
  "a", "al", "algo", "algunos", "ante", "bajo", "casi", "como", "con", "contra", "cual", "cuando",
  "de", "del", "desde", "donde", "dos", "el", "ella", "ellas", "ellos", "en", "entre", "era", "es",
  "esa", "ese", "eso", "esta", "este", "esto", "estos", "hay", "la", "las", "le", "les", "lo", "los",
  "mas", "muy", "ni", "no", "nos", "o", "os", "otra", "otro", "para", "pero", "por", "que", "se",
  "segun", "si", "sin", "sobre", "su", "sus", "te", "tu", "un", "una", "uno", "unos", "y", "ya",
]);

const translationCache = new Map();
const TITLE_HUB_OVERRIDES = new Map([
  ["trabajar a tiempo parcial en suiza no es solo cobrar menos", "trabajo"],
  ["se viniste con una idea... y la realidad te puso en tu sitio.", "vivir-en-suiza"],
]);

function parseArgs(argv) {
  const options = {
    sourceDir: DEFAULT_SOURCE_DIR,
    langs: [...DEFAULT_LANGS],
    limit: 0,
    since: "",
    noTranslate: false,
    changedOnly: false,
    stateFile: DEFAULT_STATE_FILE,
    reportPath: "",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--source-dir" && argv[i + 1]) {
      options.sourceDir = argv[i + 1];
      i += 1;
    } else if (arg === "--langs" && argv[i + 1]) {
      options.langs = argv[i + 1].split(",").map((value) => value.trim()).filter(Boolean);
      i += 1;
    } else if (arg === "--limit" && argv[i + 1]) {
      options.limit = Number(argv[i + 1]) || 0;
      i += 1;
    } else if (arg === "--since" && argv[i + 1]) {
      options.since = argv[i + 1].trim();
      i += 1;
    } else if (arg === "--no-translate") {
      options.noTranslate = true;
    } else if (arg === "--changed-only") {
      options.changedOnly = true;
    } else if (arg === "--state-file" && argv[i + 1]) {
      options.stateFile = argv[i + 1];
      i += 1;
    } else if (arg === "--report" && argv[i + 1]) {
      options.reportPath = argv[i + 1];
      i += 1;
    }
  }

  return options;
}

function jsEscape(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
    .replace(/"/g, '\\"');
}

function toSlug(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function parseDailyFileName(filename) {
  const match = filename.match(/^posts_(\d{4})-(\d{2})-(\d{2})\.md$/);
  if (!match) return null;
  return {
    isoDate: `${match[1]}-${match[2]}-${match[3]}`,
    compactDate: `${match[1]}${match[2]}${match[3]}`,
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
  };
}

function formatDateForLang(lang, dateInfo) {
  const monthIndex = Math.max(0, dateInfo.month - 1);
  const months = MONTHS[lang] || MONTHS.en;
  return `${dateInfo.day} ${months[monthIndex]} ${dateInfo.year}`;
}

function summarize(text, maxLength) {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).trimEnd()}…`;
}

function extractKeywords(title, body) {
  const words = `${title} ${body}`.match(/[A-Za-zÀ-ÿ0-9]{4,}/g) || [];
  const picked = [];
  const seen = new Set();
  for (const word of words) {
    const normalized = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if (STOP_WORDS.has(normalized) || seen.has(normalized)) continue;
    seen.add(normalized);
    picked.push(normalized);
    if (picked.length >= 8) break;
  }
  return picked.join(", ");
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function countKeywordHits(text, keywords) {
  let hits = 0;
  for (const keyword of keywords) {
    const token = normalizeText(keyword);
    if (!token) continue;
    if (text.includes(token)) hits += 1;
  }
  return hits;
}

function readClassificationReference() {
  if (!fs.existsSync(CLASSIFICATION_REFERENCE)) {
    return { byTitle: new Map(), bySlug: new Map() };
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(CLASSIFICATION_REFERENCE, "utf8"));
    const byTitle = new Map();
    const bySlug = new Map();
    if (Array.isArray(parsed)) {
      for (const item of parsed) {
        if (item && item.title && item.hub) byTitle.set(normalizeText(item.title), item.hub);
        if (item && item.slug && item.hub) bySlug.set(item.slug, item.hub);
      }
    }
    return { byTitle, bySlug };
  } catch (error) {
    return { byTitle: new Map(), bySlug: new Map() };
  }
}

function classifyHub(title, body, reference) {
  const normalizedTitle = normalizeText(title);
  const normalizedBody = normalizeText(body);
  if (reference.byTitle.has(normalizedTitle)) return reference.byTitle.get(normalizedTitle);
  if (TITLE_HUB_OVERRIDES.has(normalizedTitle)) return TITLE_HUB_OVERRIDES.get(normalizedTitle);

  const scores = {};
  for (const [hub, rules] of Object.entries(HUB_RULES)) {
    const titleHits = countKeywordHits(normalizedTitle, rules.title || []);
    const bodyHits = countKeywordHits(normalizedBody, rules.body || []);
    scores[hub] = (titleHits * 5) + (bodyHits * 2);
  }

  if (normalizedTitle.includes("venir a trabajar") || normalizedTitle.includes("buscar trabajo")) scores.trabajo += 6;
  if (normalizedTitle.includes("permiso g") || normalizedBody.includes("lamal vs cmu")) scores.fronterizos += 8;
  if (normalizedTitle.includes("coste de vida") || normalizedTitle.includes("costo de vida")) scores["vivir-en-suiza"] += 8;

  const ranked = Object.entries(scores).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    const preferredOrder = [
      "fronterizos",
      "impuestos",
      "salud",
      "trabajo",
      "vivienda",
      "tramites",
      "recursos",
      "cultura-eventos",
      "vivir-en-suiza",
    ];
    return preferredOrder.indexOf(a[0]) - preferredOrder.indexOf(b[0]);
  });

  const [bestHub, bestScore] = ranked[0] || ["vivir-en-suiza", 0];
  return bestScore > 0 ? bestHub : "vivir-en-suiza";
}

function estimateReadingTime(text) {
  const words = (String(text || "").match(/[A-Za-zÀ-ÿ0-9]+/g) || []).length;
  return Math.max(1, Math.round(words / 180));
}

function splitParagraphs(rawBody) {
  return String(rawBody || "")
    .split(/\n\s*\n/)
    .map((chunk) => chunk.split("\n").map((line) => line.trim()).filter(Boolean).join(" "))
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

function bodyToHtml(rawBody) {
  const paragraphs = splitParagraphs(rawBody);
  return [
    '<div class="article-content">',
    ...paragraphs.map((paragraph) => `<p>${paragraph}</p>`),
    "</div>",
  ].join("\n");
}

function cleanBodyLines(lines) {
  return lines
    .map((line) => line.replace(/\r/g, ""))
    .filter((line) => line.trim() !== "---")
    .filter((line) => !/^\*\*Fecha de generacion:/.test(normalizeText(line)))
    .filter((line) => !/^#\s+Posts Facebook/.test(line.trim()))
    .filter((line) => !/^www\.espanolesensuiza\.ch\/?$/i.test(line.trim()))
    .filter((line) => !/^https?:\/\/www\.espanolesensuiza\.ch\/?$/i.test(line.trim()));
}

function parseDailyMarkdown(contents, dateInfo, reference) {
  const lines = String(contents || "").split("\n");
  const posts = [];
  let current = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r/g, "");
    const sectionMatch = line.match(/^##\s+POST\s+(\d+)\s*-\s*(.+?)\s*$/i);
    if (sectionMatch) {
      if (current) posts.push(current);
      current = {
        sourceIndex: Number(sectionMatch[1]),
        title: "",
        bodyLines: [],
      };
      continue;
    }

    if (!current) continue;
    const titleMatch = line.trim().match(/^\*\*(.+?)\*\*$/);
    if (!current.title && titleMatch) {
      current.title = titleMatch[1].trim();
      continue;
    }
    current.bodyLines.push(line);
  }

  if (current) posts.push(current);

  return posts
    .filter((post) => post.title)
    .map((post) => {
      const rawBody = cleanBodyLines(post.bodyLines).join("\n").trim();
      const slugBase = toSlug(post.title) || `post-${post.sourceIndex}`;
      return {
        sourceIndex: post.sourceIndex,
        title: post.title,
        titleNormalized: normalizeText(post.title),
        body: rawBody,
        slugBase,
        hub: classifyHub(post.title, rawBody, reference),
        description: summarize(rawBody, 180),
        summary: summarize(rawBody, 160),
        keywords: extractKeywords(post.title, rawBody),
        readingTime: estimateReadingTime(rawBody),
        dateUpdated: formatDateForLang("es", dateInfo),
        dateInfo,
        sourceFile: `posts_${dateInfo.isoDate}.md`,
      };
    });
}

function buildArticleIds(dateInfo, index, slugBase) {
  return {
    id: `fb-daily-${dateInfo.compactDate}-${String(index).padStart(2, "0")}-${slugBase}`.slice(0, 120),
    slug: `actualidad-${dateInfo.isoDate}-${index}-${slugBase}`.slice(0, 120),
  };
}

function loadBundleArticles(lang) {
  const bundlePath = path.join(ROOT, DEFAULT_OUT_FILES[lang]);
  if (!fs.existsSync(bundlePath)) return {};
  const source = fs.readFileSync(bundlePath, "utf8");
  const context = {
    window: {},
    console: { log() {}, warn() {}, error() {} },
  };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: bundlePath });
  return (((context.window || {}).siteContent || {})[lang] || {}).articles || {};
}

function extractIndexInfo(article) {
  const idMatch = String(article && article.id ? article.id : "").match(/^fb-daily-(\d{8})-(\d{2})-/);
  if (idMatch) return { compactDate: idMatch[1], index: Number(idMatch[2]) };
  const slugMatch = String(article && article.slug ? article.slug : "").match(/^actualidad-(\d{4})-(\d{2})-(\d{2})-(\d+)-/);
  if (slugMatch) return {
    compactDate: `${slugMatch[1]}${slugMatch[2]}${slugMatch[3]}`,
    index: Number(slugMatch[4]),
  };
  return null;
}

function buildExistingIndex(existingArticles) {
  const ids = new Set();
  const slugs = new Set();
  const titles = new Set();
  const dateIndexes = new Map();

  for (const [id, article] of Object.entries(existingArticles)) {
    ids.add(id);
    if (article.slug) slugs.add(article.slug);
    if (article.title) titles.add(normalizeText(article.title));
    const info = extractIndexInfo({ id, slug: article.slug });
    if (!info) continue;
    if (!dateIndexes.has(info.compactDate)) dateIndexes.set(info.compactDate, new Set());
    dateIndexes.get(info.compactDate).add(info.index);
  }

  return { ids, slugs, titles, dateIndexes };
}

function nextAvailableIndex(dateIndexes, compactDate, preferredIndex) {
  const used = dateIndexes.get(compactDate) || new Set();
  if (!dateIndexes.has(compactDate)) dateIndexes.set(compactDate, used);
  if (!used.has(preferredIndex)) {
    used.add(preferredIndex);
    return preferredIndex;
  }
  let next = used.size > 0 ? Math.max(...used) + 1 : preferredIndex;
  while (used.has(next)) next += 1;
  used.add(next);
  return next;
}

function collectImportPlan(sourceArticles, existingIndex, reference) {
  const additions = [];
  const ignored = [];
  const manifest = [];

  for (const article of sourceArticles) {
    const derived = buildArticleIds(article.dateInfo, article.sourceIndex, article.slugBase);
    const referenceHub = reference.bySlug.get(derived.slug) || reference.byTitle.get(article.titleNormalized);
    const hub = referenceHub || article.hub;

    if (existingIndex.ids.has(derived.id)) {
      ignored.push({ title: article.title, sourceFile: article.sourceFile, reason: "id deja integre" });
      continue;
    }
    if (existingIndex.slugs.has(derived.slug)) {
      ignored.push({ title: article.title, sourceFile: article.sourceFile, reason: "slug deja integre" });
      continue;
    }
    if (existingIndex.titles.has(article.titleNormalized)) {
      ignored.push({ title: article.title, sourceFile: article.sourceFile, reason: "titre deja integre" });
      continue;
    }

    const assignedIndex = nextAvailableIndex(existingIndex.dateIndexes, article.dateInfo.compactDate, article.sourceIndex);
    const uniqueIds = buildArticleIds(article.dateInfo, assignedIndex, article.slugBase);
    const prepared = {
      ...article,
      id: uniqueIds.id,
      slug: uniqueIds.slug,
      hub,
    };

    additions.push(prepared);
    existingIndex.ids.add(prepared.id);
    existingIndex.slugs.add(prepared.slug);
    existingIndex.titles.add(prepared.titleNormalized);
    manifest.push({
      id: prepared.id,
      title: prepared.title,
      hub: prepared.hub,
      slug: prepared.slug,
      sourceFile: prepared.sourceFile,
      dateUpdated: prepared.dateUpdated,
    });
  }

  return { additions, ignored, manifest };
}

async function translateText(text, lang, options) {
  const source = String(text || "");
  if (!source.trim() || lang === "es") return source;
  if (options.noTranslate) {
    throw new Error(`Translation disabled while ${lang} content is required`);
  }
  if (!translate) {
    throw new Error(`Translation package unavailable for ${lang}`);
  }

  const cacheKey = `${lang}::${source}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  try {
    const result = await translate(source, { to: lang, rejectOnPartialFail: false });
    const translated = result && typeof result.text === "string" ? result.text : "";
    if (!translated.trim()) throw new Error("empty translation response");
    translationCache.set(cacheKey, translated);
    return translated;
  } catch (error) {
    throw new Error(`Translation failed for ${lang}: ${error.message || error}`);
  }
}

async function translateBatch(texts, lang, options) {
  if (lang === "es") return texts.map((text) => String(text || ""));
  const normalized = texts.map((text) => String(text || ""));
  if (normalized.every((text) => !text.trim())) return normalized;

  const separator = "\n[[[__CODEX_DAILY_POSTS_SEPARATOR__]]]\n";
  const joined = normalized.join(separator);

  try {
    const translated = await translateText(joined, lang, options);
    const pieces = String(translated).split(separator);
    if (pieces.length === normalized.length) return pieces;
  } catch (error) {
    // Fall back to per-field translation below.
  }

  const translatedIndividually = [];
  for (const text of normalized) {
    translatedIndividually.push(await translateText(text, lang, options));
  }
  return translatedIndividually;
}

async function localizeArticle(article, lang, options) {
  const [title, body, description, summary, keywords] = await translateBatch([
    article.title,
    article.body,
    article.description,
    article.summary,
    article.keywords,
  ], lang, options);

  return {
    ...article,
    title,
    body,
    description,
    summary,
    keywords,
    dateUpdated: formatDateForLang(lang, article.dateInfo),
    category: (HUB_LABELS[lang] || HUB_LABELS.es)[article.hub] || article.hub,
    content: bodyToHtml(body),
  };
}

function renderArticleEntry(article) {
  return `    "${jsEscape(article.id)}": {
        title: "${jsEscape(article.title)}",
        description: "${jsEscape(article.description)}",
        keywords: "${jsEscape(article.keywords)}",
        keywordsLocalized: true,
        category: "${jsEscape(article.category)}",
        hub: "${jsEscape(article.hub)}",
        slug: "${jsEscape(article.slug)}",
        readingTime: ${article.readingTime},
        dateUpdated: "${jsEscape(article.dateUpdated)}",
        summary: "${jsEscape(article.summary)}",
        relatedSlugs: [],
        content: \`${jsEscape(article.content)}\`
    }`;
}

function appendEntriesToBundle(lang, localizedArticles) {
  if (localizedArticles.length === 0) return;
  const bundlePath = path.join(ROOT, DEFAULT_OUT_FILES[lang]);
  const current = fs.readFileSync(bundlePath, "utf8");
  const marker = `Object.assign(window.siteContent.${lang}.articles, {\n`;
  const start = current.indexOf(marker);
  const end = current.lastIndexOf("\n});");
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`Unable to append entries to ${path.basename(bundlePath)}`);
  }

  const objectStart = start + marker.length;
  const objectBody = current.slice(objectStart, end);
  const trimmedBody = objectBody.trim();
  const rendered = localizedArticles.map(renderArticleEntry).join(",\n\n");
  const insertion = trimmedBody ? `${objectBody},\n\n${rendered}` : `${objectBody}${rendered}\n`;
  const next = `${current.slice(0, objectStart)}${insertion}${current.slice(end)}`;
  fs.writeFileSync(bundlePath, next, "utf8");
}

function readState(stateFile) {
  if (!stateFile || !fs.existsSync(stateFile)) return {};
  try {
    return JSON.parse(fs.readFileSync(stateFile, "utf8"));
  } catch (error) {
    return {};
  }
}

function writeState(stateFile, payload) {
  if (!stateFile) return;
  fs.writeFileSync(stateFile, JSON.stringify(payload, null, 2), "utf8");
}

function loadSourceFiles(sourceDir, options, reference) {
  const filenames = fs.readdirSync(sourceDir)
    .filter((name) => /^posts_\d{4}-\d{2}-\d{2}\.md$/.test(name))
    .sort();
  const state = readState(options.stateFile);

  const filtered = filenames.filter((filename) => {
    const dateInfo = parseDailyFileName(filename);
    if (!dateInfo) return false;
    if (options.since && dateInfo.isoDate < options.since) return false;
    if (options.changedOnly) {
      const filePath = path.join(sourceDir, filename);
      const stat = fs.statSync(filePath);
      const previous = state.files && state.files[filename];
      const signature = `${stat.size}:${stat.mtimeMs}`;
      if (previous === signature) return false;
    }
    return true;
  });

  const selected = options.limit > 0 ? filtered.slice(-options.limit) : filtered;
  const articles = [];
  const fileSignatures = {};

  for (const filename of selected) {
    const dateInfo = parseDailyFileName(filename);
    const filePath = path.join(sourceDir, filename);
    const contents = fs.readFileSync(filePath, "utf8");
    const stat = fs.statSync(filePath);
    fileSignatures[filename] = `${stat.size}:${stat.mtimeMs}`;
    articles.push(...parseDailyMarkdown(contents, dateInfo, reference));
  }

  return { articles, selectedFiles: selected, fileSignatures, previousState: state };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const sourceDir = path.resolve(options.sourceDir);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory not found: ${sourceDir}`);
  }

  const reference = readClassificationReference();
  const loaded = loadSourceFiles(sourceDir, options, reference);
  if (loaded.articles.length === 0) {
    if (options.changedOnly) {
      console.log("No changed daily posts detected");
      return;
    }
    throw new Error(`No daily posts found in ${sourceDir}`);
  }

  const existingEsArticles = loadBundleArticles("es");
  const importPlan = collectImportPlan(loaded.articles, buildExistingIndex(existingEsArticles), reference);
  if (importPlan.additions.length === 0) {
    console.log("No new daily posts to add");
    if (importPlan.ignored.length > 0) {
      console.log(JSON.stringify({ ignored: importPlan.ignored }, null, 2));
    }
    return;
  }

  const localizedByLang = {};
  for (const lang of options.langs) {
    if (!DEFAULT_OUT_FILES[lang]) {
      console.warn(`Skipping unsupported language: ${lang}`);
      continue;
    }
    localizedByLang[lang] = [];
    for (const article of importPlan.additions) {
      localizedByLang[lang].push(lang === "es" ? {
        ...article,
        category: (HUB_LABELS.es[article.hub] || article.hub),
        content: bodyToHtml(article.body),
      } : await localizeArticle(article, lang, options));
    }
  }

  for (const [lang, localizedArticles] of Object.entries(localizedByLang)) {
    appendEntriesToBundle(lang, localizedArticles);
    console.log(`Updated ${DEFAULT_OUT_FILES[lang]} with ${localizedArticles.length} new articles`);
  }

  const mergedFiles = {
    ...((loaded.previousState && loaded.previousState.files) || {}),
    ...loaded.fileSignatures,
  };

  writeState(options.stateFile, {
    updatedAt: new Date().toISOString(),
    sourceDir,
    files: mergedFiles,
    selectedFiles: loaded.selectedFiles,
  });

  if (options.reportPath) {
    fs.writeFileSync(options.reportPath, JSON.stringify({
      added: importPlan.manifest,
      ignored: importPlan.ignored,
    }, null, 2), "utf8");
    console.log(`Wrote import report to ${options.reportPath}`);
  }

  console.log(JSON.stringify({
    addedCount: importPlan.additions.length,
    datesProcessed: [...new Set(importPlan.additions.map((article) => article.dateInfo.isoDate))],
    modifiedFiles: Object.keys(localizedByLang).map((lang) => DEFAULT_OUT_FILES[lang]).concat(options.stateFile),
    ignored: importPlan.ignored,
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
