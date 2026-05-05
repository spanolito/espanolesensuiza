#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

/**
 * Systematic Article Hub Normalization Tool
 * 
 * This tool audits all article bundles (ES, FR, DE, EN, IT) and enforces 
 * thematic hub classification based on updated keyword rules.
 * 
 * It uses Spanish bundles as the "Master Source" to ensure cross-language consistency.
 * If an article does not match any rules, its hub and category are set to empty.
 */

const HUB_RULES = {
  tramites: {
    title: ["permiso", "empadron", "tramite", "migracion", "registro", "naturaliz", "carnet", "conducir", "e-id", "ees"],
    body: ["permiso de residencia", "comuna", "canton", "pasaporte", "identidad", "formulario", "cita previa", "sem.admin"],
  },
  trabajo: {
    title: [
      "trabajar", "trabajo", "empleo", "salario", "nomina", "paro", "rav", "desempleo",
      "cotizados", "jubilacion", "avs", "ahv", "cct", "gav", "mercado laboral", "13a", "pension"
    ],
    body: [
      "contrato de trabajo", "despido", "busqueda de empleo", "sindicato", "sueldo", "salario minimo",
      "seguro de desempleo", "pensionista", "jubilado", "13.a", "13ª", "ahv/avs"
    ],
  },
  vivienda: {
    title: ["alquiler", "alquilar", "piso", "vivienda", "habitacion", "mudanza", "asloca", "garantia"],
    body: ["contrato de alquiler", "fianza", "deposito", "inmobiliaria", "regie", "vecinos", "ruido", "limpieza", "lavanderia"],
  },
  salud: {
    title: [
      "seguro medico", "lamal", "psicologo", "psiquiatra", "prima", "pramienverbilligung",
      "accidente", "baja", "enfermo", "dentista", "dental", "tardoc", "medico"
    ],
    body: [
      "seguro medico", "lamal", "franquicia", "copago", "medico de cabecera", "psicologo",
      "psiquiatra", "primas", "pramienverbilligung", "ipt", "bag.admin", "aseguradora", "kvg",
      "accidente", "laa", "enfermedad profesional", "krankentaggeld", "dentista", "dental", "tardoc", "factura medica"
    ],
  },
  impuestos: {
    title: ["impuesto", "declaracion", "fiscal", "irpf", "aeat", "hacienda", "3a", "3.pilar", "bancario", "cuenta bancaria"],
    body: [
      "impuesto a la fuente", "declaracion de la renta", "fiscalidad", "doble imposicion", "convenio",
      "ahorro", "pilar 3a", "aeat", "hacienda", "banco", "iban", "tarjeta", "credito"
    ],
  },
  fronterizos: {
    title: ["frontalier", "fronterizo", "g-permis", "permiso g"],
    body: ["trabajar en suiza vivir en francia", "teletrabajo", "impuestos fronterizos", "frontera"],
  },
  recursos: {
    title: ["fraude", "estafa", "alerta", "consulta", "reforma", "referendum", "votacion", "ley", "normativa", "decreto", "gobierno"],
    body: ["fraude", "estafa", "alerta", "temu", "sms", "votaciones", "iniciativa popular", "referendos", "ayuda", "contacto"],
  },
  "vivir-en-suiza": {
    title: ["vivir en suiza", "costo de vida", "supermercado", "transporte", "tren", "sbb", "cff", "festivo", "vacaciones", "compras", "comprar", "bicicleta", "ciudad", "pueblo", "canton", "idioma", "clima", "tiempo", "ocio", "turismo"],
    body: ["coste de vida", "precios", "comprar", "ocio", "calidad de vida", "suiza alemana", "suiza francesa", "festivos", "restaurante", "gastronomia", "compras", "tienda", "devolver"],
  },
  "cultura-eventos": {
    title: ["cultura", "evento", "concierto", "fiesta", "tradicion", "museo", "exposicion", "festival", "teatro", "espectaculo"],
    body: ["cultura", "tradiciones", "gastronomia", "folclore", "musica", "arte", "conciertos", "museos"],
  },
};

const HUB_LABELS = {
  "vivir-en-suiza": {
    es: "Vivir en Suiza",
    fr: "Vivre en Suisse",
    en: "Living in Switzerland",
    de: "Leben in der Schweiz",
    it: "Vivere in Svizzera",
  },
  trabajo: {
    es: "Trabajo y Salarios",
    fr: "Travail et salaires",
    en: "Work and Salaries",
    de: "Arbeit und Löhne",
    it: "Lavoro e salari",
  },
  vivienda: {
    es: "Vivienda",
    fr: "Logement",
    en: "Housing",
    de: "Wohnen",
    it: "Alloggio",
  },
  salud: {
    es: "Salud y LAMal",
    fr: "Santé et LAMal",
    en: "Health and LAMal",
    de: "Gesundheit und KVG",
    it: "Salute e LAMal",
  },
  impuestos: {
    es: "Impuestos",
    fr: "Impôts",
    en: "Taxes",
    de: "Steuern",
    it: "Imposte",
  },
  tramites: {
    es: "Tramites y Permisos",
    fr: "Démarches et permis",
    en: "Formalities and Permits",
    de: "Formalitäten und Bewilligungen",
    it: "Pratiche e permessi",
  },
  recursos: {
    es: "Alertas y recursos",
    fr: "Alertes et ressources",
    en: "Alerts and Resources",
    de: "Warnungen und Ressourcen",
    it: "Avvisi e risorse",
  },
  fronterizos: {
    es: "Fronterizos",
    fr: "Frontaliers",
    en: "Cross-border Workers",
    de: "Grenzgänger",
    it: "Frontalieri",
  },
  "cultura-eventos": {
    es: "Cultura y Eventos",
    fr: "Culture et Événements",
    en: "Culture and Events",
    de: "Kultur und Veranstaltungen",
    it: "Cultura ed eventi",
  },
};

function classify(title, body) {
  const t = (title || "").toLowerCase();
  const b = (body || "").toLowerCase();

  let bestHub = "";
  let bestScore = 0;

  for (const [hub, rules] of Object.entries(HUB_RULES)) {
    let score = 0;
    rules.title.forEach(kw => {
      if (t.includes(kw)) score += 5;
    });
    rules.body.forEach(kw => {
      if (b.includes(kw)) score += 1;
    });

    if (score > bestScore) {
      bestScore = score;
      bestHub = hub;
    }
  }

  return bestScore > 0 ? bestHub : "";
}

const FILES = [
  "content-articles.js",
  "content-articles-de.js",
  "content-articles-en.js",
  "content-articles-fr.js",
  "content-articles-it.js",
  "content-articles-facebook-de.js",
  "content-articles-facebook-en.js",
  "content-articles-facebook-es.js",
  "content-articles-facebook-fr.js",
  "content-articles-facebook-it.js",
  "content-articles-facebook-daily-de.js",
  "content-articles-facebook-daily-en.js",
  "content-articles-facebook-daily-es.js",
  "content-articles-facebook-daily-fr.js",
  "content-articles-facebook-daily-it.js",
];

const SPANISH_FILES = [
  "content-articles.js",
  "content-articles-facebook-es.js",
  "content-articles-facebook-daily-es.js"
];

const masterHubMap = new Map();

SPANISH_FILES.forEach(filename => {
  const filePath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const articleRegex = /(['"]([^'"]+)['"]\s*:\s*\{[\s\S]*?\n\s{4}\})/g;
  let match;
  while ((match = articleRegex.exec(content)) !== null) {
    const fullBlock = match[1];
    const key = match[2];
    const titleMatch = fullBlock.match(/title\s*:\s*[`'"]([\s\S]*?)[`'"]\s*,/);
    const contentMatch = fullBlock.match(/content\s*:\s*`([\s\S]*?)`/);
    const descriptionMatch = fullBlock.match(/description\s*:\s*[`'"]([\s\S]*?)[`'"]\s*,/);
    
    const title = titleMatch ? titleMatch[1] : "";
    const body = contentMatch ? contentMatch[1] : (descriptionMatch ? descriptionMatch[1] : "");

    const hub = classify(title, body);
    if (hub) masterHubMap.set(key, hub);
  }
});

console.log(`Auditing ${FILES.length} files using ${masterHubMap.size} Spanish master entries...`);

FILES.forEach(filename => {
  const filePath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let lang = 'es';
  if (filename.endsWith('-fr.js')) lang = 'fr';
  else if (filename.endsWith('-en.js')) lang = 'en';
  else if (filename.endsWith('-de.js')) lang = 'de';
  else if (filename.endsWith('-it.js')) lang = 'it';

  const articleRegex = /(['"]([^'"]+)['"]\s*:\s*\{[\s\S]*?\n\s{4}\})/g;
  let finalContent = content;
  let changes = 0;
  let count = 0;

  let match;
  while ((match = articleRegex.exec(content)) !== null) {
    const articleBlock = match[1];
    const key = match[2];
    let newHub = masterHubMap.get(key);
    
    if (!newHub) {
      const titleMatch = articleBlock.match(/title\s*:\s*[`'"]([\s\S]*?)[`'"]\s*,/);
      const contentMatch = articleBlock.match(/content\s*:\s*`([\s\S]*?)`/);
      const descriptionMatch = articleBlock.match(/description\s*:\s*[`'"]([\s\S]*?)[`'"]\s*,/);
      newHub = classify(titleMatch ? titleMatch[1] : "", contentMatch ? contentMatch[1] : (descriptionMatch ? descriptionMatch[1] : ""));
    }

    const newCategory = newHub ? (HUB_LABELS[newHub][lang] || HUB_LABELS[newHub]['es']) : "";
    let newBlock = articleBlock.replace(/hub\s*:\s*[`'"].*?[`'"]\s*,?/, `hub: "${newHub}",`);
    newBlock = newBlock.replace(/category\s*:\s*[`'"].*?[`'"]\s*,?/, `category: "${newCategory}",`);
    
    if (newBlock !== articleBlock) {
      finalContent = finalContent.replace(articleBlock, newBlock);
      changes++;
    }
    count++;
  }

  if (changes > 0) {
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`  ${filename}: Updated ${changes} of ${count} articles.`);
  }
});

console.log("Normalization complete.");
