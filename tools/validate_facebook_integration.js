#!/usr/bin/env node
/**
 * Validates that Facebook-derived article routes exist in siteContent for each language.
 */

const fs = require("fs");
const vm = require("vm");
const path = require("path");

function loadScript(filePath) {
  const abs = path.resolve(filePath);
  const code = fs.readFileSync(abs, "utf8");
  vm.runInThisContext(code, { filename: abs });
}

global.window = {};

// Base content (existing site)
loadScript("content-pages.js");
loadScript("content-articles.js");
loadScript("content-articles-en.js");
loadScript("content-articles-fr.js");
loadScript("content-articles-de.js");

// Facebook-derived bundles
loadScript("content-articles-facebook-es.js");
loadScript("content-articles-facebook-en.js");
loadScript("content-articles-facebook-fr.js");
loadScript("content-articles-facebook-de.js");

const slugs = [
  "alquilar-en-suiza-evitar-estafas",
  "consejos-vida-diaria-suiza",
  "costo-de-vida-suiza-presupuesto",
  "democracia-directa-suiza",
  "fraudes-inmigrantes-suiza",
  "normas-locales-ginebra",
  "permisos-suiza-actualizacion",
  "rav-paro-suiza",
  "seguro-medico-lamal-elegir",
  "sistema-politico-suiza",
  "trabajar-en-suiza-guia",
];

const langs = ["es", "en", "fr", "de"];

const requiredH2ByLang = {
  es: [
    "Introducción",
    "Contexto en Suiza",
    "Situaciones comunes que generan problemas",
    "Cómo evitar multas o conflictos",
    "Consejos prácticos",
    "Fuentes oficiales",
  ],
  en: [
    "Introduction",
    "Context in Switzerland",
    "Common situations that cause problems",
    "How to avoid fines or conflicts",
    "Practical tips",
    "Official sources",
  ],
  fr: [
    "Introduction",
    "Contexte en Suisse",
    "Situations fréquentes qui créent des problèmes",
    "Comment éviter des amendes ou des conflits",
    "Conseils pratiques",
    "Sources officielles",
  ],
  de: [
    "Einleitung",
    "Kontext in der Schweiz",
    "Häufige Situationen, die Probleme verursachen",
    "Wie man Bussen oder Konflikte vermeidet",
    "Praktische Tipps",
    "Offizielle Quellen",
  ],
};

let ok = true;
for (const lang of langs) {
  const articles = (window.siteContent[lang] && window.siteContent[lang].articles) || {};
  const bySlug = new Map(Object.entries(articles).map(([k, v]) => [v.slug, { key: k, value: v }]));
  for (const slug of slugs) {
    const item = bySlug.get(slug);
    if (!item) {
      console.error(`[${lang}] Missing slug: ${slug}`);
      ok = false;
      continue;
    }
    const content = String(item.value.content || "");
    if (content.includes("<h1")) {
      console.error(`[${lang}] content contains <h1> for ${slug} (key=${item.key})`);
      ok = false;
    }
    if (!content.includes("<div") || content.length < 200) {
      console.error(`[${lang}] Suspicious content for ${slug} (key=${item.key})`);
      ok = false;
    }

    const required = requiredH2ByLang[lang] || [];
    for (const heading of required) {
      if (!content.includes(`<h2>${heading}</h2>`)) {
        console.error(`[${lang}] Missing <h2>${heading}</h2> in ${slug} (key=${item.key})`);
        ok = false;
      }
    }
  }
}

if (!ok) {
  process.exit(1);
}
console.log("OK: Facebook-derived routes present for es/en/fr/de.");
