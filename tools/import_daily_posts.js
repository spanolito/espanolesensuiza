#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
let translate = null;

try {
  translate = require("google-translate-api-x");
} catch (error) {
  translate = null;
}

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SOURCE_DIR = "/Users/oscarandujar/Projets/Publications/posts";
const DEFAULT_LANGS = ["es", "en", "fr", "de"];
const DEFAULT_OUT_FILES = {
  es: "content-articles-facebook-daily-es.js",
  en: "content-articles-facebook-daily-en.js",
  fr: "content-articles-facebook-daily-fr.js",
  de: "content-articles-facebook-daily-de.js",
};
const DEFAULT_STATE_FILE = path.join(ROOT, ".daily-posts-import-state.json");

const MONTHS = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  fr: ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"],
  de: ["Januar", "Februar", "Marz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
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
  },
  en: {
    "vivir-en-suiza": "Living in Switzerland",
    trabajo: "Work & Salaries",
    vivienda: "Housing",
    salud: "Health & LAMal",
    impuestos: "Taxes",
    tramites: "Procedures & Permits",
    recursos: "Alerts & resources",
  },
  fr: {
    "vivir-en-suiza": "Vivre en Suisse",
    trabajo: "Travail & salaires",
    vivienda: "Logement",
    salud: "Sante & LAMal",
    impuestos: "Impots",
    tramites: "Demarches & permis",
    recursos: "Alertes & ressources",
  },
  de: {
    "vivir-en-suiza": "Leben in der Schweiz",
    trabajo: "Arbeit & Lohne",
    vivienda: "Wohnen",
    salud: "Gesundheit & LAMal",
    impuestos: "Steuern",
    tramites: "Behorden & Bewilligungen",
    recursos: "Warnungen & Ressourcen",
    "cultura-eventos": "Kultur & Veranstaltungen",
    fronterizos: "Grenzgaenger",
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
      "seguro medico", "lamal", "psicologo", "psicologo", "psiquiatra", "prima", "pramienverbilligung",
    ],
    body: [
      "seguro medico", "lamal", "franquicia", "copago", "medico de cabecera", "psicologo",
      "psiquiatra", "primas", "pramienverbilligung", "ipt", "bag.admin", "aseguradora", "kvg",
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
    ],
    body: [
      "permiso", "permisos", "residencia", "registro", "commune", "municipio", "control de habitantes",
      "etias", "frontera", "lex koller", "registrarte", "empadronamiento", "direccion de residencia",
      "solicitar el permiso", "autoridad cantonal", "titulo de residencia",
    ],
  },
  recursos: {
    title: [
      "fraude", "estafa", "alerta", "consulta", "reforma", "referendum", "votacion", "ley",
    ],
    body: [
      "fraude", "estafa", "alerta", "consulta publica", "consulta", "consejo federal", "referendum",
      "votacion", "ley federal", "mercado inmobiliario", "reforma", "proyecto", "multa", "multas",
    ],
  },
  fronterizos: {
    title: ["fronterizo", "fronterizos", "permiso g", "cmu"],
    body: ["fronterizo", "fronterizos", "permiso g", "cmu", "cruzar la frontera", "francia", "alta saboya"],
  },
  "cultura-eventos": {
    title: ["fiesta", "fiestas", "festival", "tradicion", "tradiciones", "evento", "cultura"],
    body: ["fiesta", "fiestas", "festival", "tradicion", "tradiciones", "evento", "cultura", "feria", "carnaval"],
  },
  "vivir-en-suiza": {
    title: ["suiza", "vida diaria", "vida en suiza", "consejos"],
    body: [
      "vida diaria", "coste de vida", "costo de vida", "transporte publico", "escuela", "cantonal",
      "vecinos", "integracion", "idioma", "idiomas", "recien llegado", "convivencia",
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
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
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

function classifyHub(title, body) {
  const normalizedTitle = normalizeText(title);
  const normalizedBody = normalizeText(body);
  const scores = {};

  for (const [hub, rules] of Object.entries(HUB_RULES)) {
    const titleHits = countKeywordHits(normalizedTitle, rules.title || []);
    const bodyHits = countKeywordHits(normalizedBody, rules.body || []);
    scores[hub] = (titleHits * 5) + (bodyHits * 2);
  }

  if (normalizedTitle.includes("venir a trabajar") || normalizedTitle.includes("buscar trabajo")) {
    scores.trabajo += 6;
  }
  if (normalizedTitle.includes("permiso g") || normalizedBody.includes("lamal vs cmu")) {
    scores.fronterizos += 8;
  }
  if (normalizedTitle.includes("coste de vida") || normalizedTitle.includes("costo de vida")) {
    scores["vivir-en-suiza"] += 8;
  }

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
    .map((chunk) => chunk.replace(/\n+/g, " ").trim())
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

function parseDailyMarkdown(contents, dateInfo) {
  const lines = String(contents || "").split("\n");
  const posts = [];
  let current = null;

  for (const line of lines) {
    const titleMatch = line.match(/^##\s+Post\s+(\d+)\s+—\s+(.+?)\s*$/);
    if (titleMatch) {
      if (current) posts.push(current);
      current = {
        index: Number(titleMatch[1]),
        title: titleMatch[2].trim(),
        bodyLines: [],
      };
      continue;
    }

    if (!current) continue;
    if (line.trim() === "---") continue;
    current.bodyLines.push(line);
  }

  if (current) posts.push(current);

  return posts.map((post) => {
    const rawBody = post.bodyLines.join("\n").trim();
    const hub = classifyHub(post.title, rawBody);
    const slugBase = toSlug(post.title) || `post-${post.index}`;
    const slug = `actualidad-${dateInfo.isoDate}-${post.index}-${slugBase}`.slice(0, 120);
    return {
      id: `fb-daily-${dateInfo.compactDate}-${String(post.index).padStart(2, "0")}-${slugBase}`.slice(0, 120),
      title: post.title,
      body: rawBody,
      hub,
      slug,
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

async function translateText(text, lang, options) {
  const source = String(text || "").trim();
  if (!source || lang === "es") return String(text || "");
  if (options.noTranslate) return String(text || "");

  const cacheKey = `${lang}::${source}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  if (!translate) {
    translationCache.set(cacheKey, String(text || ""));
    return String(text || "");
  }

  try {
    const result = await translate(source, { to: lang, rejectOnPartialFail: false });
    const translated = result && typeof result.text === "string" ? result.text : String(text || "");
    translationCache.set(cacheKey, translated);
    return translated;
  } catch (error) {
    console.warn(`Translation fallback for ${lang}: ${source.slice(0, 60)}...`);
    translationCache.set(cacheKey, String(text || ""));
    return String(text || "");
  }
}

async function localizeArticle(article, lang, options) {
  const title = await translateText(article.title, lang, options);
  const body = await translateText(article.body, lang, options);
  const description = await translateText(article.description, lang, options);
  const summary = await translateText(article.summary, lang, options);
  const keywords = await translateText(article.keywords, lang, options);

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

function renderBundle(lang, articles) {
  const entries = articles.map((article) => `    "${jsEscape(article.id)}": {
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
    }`).join(",\n\n");

  return `/**
 * content-articles-facebook-daily-${lang}.js
 * Auto-generated from daily Markdown posts.
 */

window.siteContent = window.siteContent || {};
window.siteContent.${lang} = window.siteContent.${lang} || { global: {}, pages: {}, articles: {} };
window.siteContent.${lang}.articles = window.siteContent.${lang}.articles || {};

Object.assign(window.siteContent.${lang}.articles, {
${entries}
});
`;
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

function loadSourceFiles(sourceDir, options) {
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
  const manifest = [];
  const fileSignatures = {};

  for (const filename of selected) {
    const dateInfo = parseDailyFileName(filename);
    const filePath = path.join(sourceDir, filename);
    const contents = fs.readFileSync(filePath, "utf8");
    const stat = fs.statSync(filePath);
    fileSignatures[filename] = `${stat.size}:${stat.mtimeMs}`;
    const parsed = parseDailyMarkdown(contents, dateInfo);
    articles.push(...parsed);
    manifest.push(...parsed.map((article) => ({
      id: article.id,
      title: article.title,
      hub: article.hub,
      slug: article.slug,
      sourceFile: article.sourceFile,
      dateUpdated: article.dateUpdated,
    })));
  }

  return { articles, selectedFiles: selected, fileSignatures, manifest };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const sourceDir = path.resolve(options.sourceDir);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory not found: ${sourceDir}`);
  }

  const loaded = loadSourceFiles(sourceDir, options);
  if (loaded.articles.length === 0) {
    if (options.changedOnly) {
      console.log("No changed daily posts detected");
      return;
    }
    throw new Error(`No daily posts found in ${sourceDir}`);
  }

  for (const lang of options.langs) {
    if (!DEFAULT_OUT_FILES[lang]) {
      console.warn(`Skipping unsupported language: ${lang}`);
      continue;
    }

    const localized = [];
    for (const article of loaded.articles) {
      localized.push(await localizeArticle(article, lang, options));
    }

    const outPath = path.join(ROOT, DEFAULT_OUT_FILES[lang]);
    fs.writeFileSync(outPath, renderBundle(lang, localized), "utf8");
    console.log(`Wrote ${path.basename(outPath)} with ${localized.length} articles`);
  }

  writeState(options.stateFile, {
    updatedAt: new Date().toISOString(),
    sourceDir,
    files: loaded.fileSignatures,
    selectedFiles: loaded.selectedFiles,
  });

  if (options.reportPath) {
    fs.writeFileSync(options.reportPath, JSON.stringify(loaded.manifest, null, 2), "utf8");
    console.log(`Wrote classification report to ${options.reportPath}`);
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
