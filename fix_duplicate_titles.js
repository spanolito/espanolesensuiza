#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function write(file, content) {
  fs.writeFileSync(path.join(ROOT, file), content, "utf8");
}

function normalizeHistoricalTitles() {
  const file = "content-articles.js";
  let src = read(file);

  src = src.replace(
    /("fb-(\d+)-sans-titre":\s*\{\s*\n\s*title:\s*")\(sans titre\)(",\s*\n\s*description:\s*")\(sans titre\)(")/g,
    (_, prefix, id, middle, suffix) => `${prefix}Archivo de Facebook ${id}${middle}Archivo de Facebook ${id}${suffix}`,
  );

  src = src.replace(
    /("fb-(\d+)-[^"]*solo-comparto[^"]*":\s*\{\s*\n\s*title:\s*")Solo comparto(?:\s*!+)?(?: Solo comparto(?:\s*!+)?)?(",\s*\n\s*description:\s*")Solo comparto(?:\s*!+)?(?: Solo comparto(?:\s*!+)?)?(")/g,
    (_, prefix, id, middle, suffix) => `${prefix}Publicación compartida de Facebook ${id}${middle}Publicación compartida de Facebook ${id}${suffix}`,
  );

  src = src.replace(
    /("fb-(\d+)-[^"]*":\s*\{\s*\n\s*title:\s*")Cliquer pour la vidéo :(",\s*\n\s*description:\s*")Cliquer pour la vidéo :(")/g,
    (_, prefix, id, middle, suffix) => `${prefix}Vídeo de Facebook ${id}${middle}Vídeo de Facebook ${id}${suffix}`,
  );

  write(file, src);
}

function translateEnglishDailyTitles() {
  const file = "content-articles-facebook-daily-en.js";
  let src = read(file);

  const replacements = new Map([
    ["La 13ª pensión AVS: qué es, cuándo llega y a quién afecta", "The 13th AHV pension: what it is, when it arrives, and who it affects"],
    ["El impuesto a la fuente en Suiza: lo que tu nómina no te explica", "Withholding tax in Switzerland: what your payslip does not explain"],
    ["Años cotizados en España: ¿cuentan para tu jubilación en Suiza?", "Years paid into the system in Spain: do they count toward your retirement in Switzerland?"],
    ["Venir a trabajar a Suiza: lo que necesitas tener resuelto antes de llegar", "Coming to work in Switzerland: what you need sorted out before you arrive"],
    ["El 14 de junio, Suiza vota si limita su población a 10 millones", "On June 14, Switzerland votes on whether to cap its population at 10 million"],
    ["LPP 2026: las pensiones de invalidez y supervivencia, por fin ajustadas a los precios", "LPP 2026: disability and survivors' pensions finally adjusted to prices"],
    ["Tardoc: lo que ha cambiado en tu consulta médica desde enero de 2026", "Tardoc: what has changed in your medical appointment since January 2026"],
    ["El permiso C: cinco años después, hay algo que pedir", "The C permit: five years later, there is something you need to request"],
    ["Si pierdes el trabajo en Suiza, esto es lo que debes saber desde el primer día", "If you lose your job in Switzerland, this is what you need to know from day one"],
    ['El fin de la "penalización fiscal" al matrimonio en Suiza: lo que cambia y cuándo', 'The end of the "marriage tax penalty" in Switzerland: what changes and when'],
    ["El taux de référence se mantiene en 1,25%: ni bajas de alquiler ni subidas para los inquilinos suizos", "The reference rate stays at 1.25%: no rent cuts and no increases for Swiss tenants"],
    ["Las subvenciones a las primas del seguro médico: un dinero al que muchos tienen derecho y no piden", "Health insurance premium subsidies: money many people are entitled to but never claim"],
    ["La regla de los 90 días en Suiza: lo que confunde a muchos españoles", "The 90-day rule in Switzerland: what confuses many Spaniards"],
    ["Encontrar piso en Suiza en 2026: bienvenido al deporte más frustrante del país", "Finding a flat in Switzerland in 2026: welcome to the country's most frustrating sport"],
    ["Suiza no tiene salario mínimo nacional, pero eso no significa que no haya suelo salarial", "Switzerland has no national minimum wage, but that does not mean there is no wage floor"],
  ]);

  for (const [from, to] of replacements) {
    src = src.replace(`title: ${JSON.stringify(from)},`, `title: ${JSON.stringify(to)},`);
  }

  write(file, src);
}

function removeSpanishDailyDuplicates() {
  const duplicateKeys = [
    "fb-daily-20260416-01-la-13-pension-avs-que-es-cuando-llega-y-a-quien-afecta",
    "fb-daily-20260416-02-el-impuesto-a-la-fuente-en-suiza-lo-que-tu-nomina-no-te-explica",
    "fb-daily-20260416-03-anos-cotizados-en-espana-cuentan-para-tu-jubilacion-en-suiza",
    "fb-daily-20260416-04-venir-a-trabajar-a-suiza-lo-que-necesitas-tener-resuelto-antes-de-llegar",
    "fb-daily-20260416-05-el-14-de-junio-suiza-vota-si-limita-su-poblacion-a-10-millones",
    "fb-daily-20260416-06-lpp-2026-las-pensiones-de-invalidez-y-supervivencia-por-fin-ajustadas-a-los-prec",
    "fb-daily-20260417-01-tardoc-lo-que-ha-cambiado-en-tu-consulta-medica-desde-enero-de-2026",
    "fb-daily-20260417-02-el-permiso-c-cinco-anos-despues-hay-algo-que-pedir",
    "fb-daily-20260417-03-si-pierdes-el-trabajo-en-suiza-esto-es-lo-que-debes-saber-desde-el-primer-dia",
    "fb-daily-20260418-01-el-fin-de-la-penalizacion-fiscal-al-matrimonio-en-suiza-lo-que-cambia-y-cuando",
    "fb-daily-20260418-02-el-taux-de-reference-se-mantiene-en-1-25-ni-bajas-de-alquiler-ni-subidas-para-lo",
    "fb-daily-20260418-03-las-subvenciones-a-las-primas-del-seguro-medico-un-dinero-al-que-muchos-tienen-d",
    "fb-daily-20260419-01-la-regla-de-los-90-dias-en-suiza-lo-que-confunde-a-muchos-espanoles",
    "fb-daily-20260419-02-encontrar-piso-en-suiza-en-2026-bienvenido-al-deporte-mas-frustrante-del-pais",
    "fb-daily-20260419-03-suiza-no-tiene-salario-minimo-nacional-pero-eso-no-significa-que-no-haya-suelo-s",
    "fb-daily-20260504-04-recolectar-fresas-en-ginebra-plan-bonito-hasta-que-ves-el-precio-por-k",
    "fb-daily-20260504-05-pasaporte-caducado-y-denegacion-de-embarque-cuando-la-aerolinea-se-equ",
  ];

  for (const file of [
    "content-articles-facebook-daily-es.js",
    "content-articles-facebook-daily-en.js",
    "content-articles-facebook-daily-fr.js",
    "content-articles-facebook-daily-de.js",
    "content-articles-facebook-daily-it.js",
  ]) {
    let src = read(file);
    for (const key of duplicateKeys) {
      const leadingBlock = new RegExp(`(Object\\.assign\\(window\\.siteContent\\.[a-z]+\\.articles, \\{\\n)\\s*${JSON.stringify(key)}: \\{[\\s\\S]*?\\n\\s*\\},\\n`, "g");
      const middleBlock = new RegExp(`,\\n\\s*${JSON.stringify(key)}: \\{[\\s\\S]*?\\n\\s*\\}`, "g");
      src = src.replace(leadingBlock, "$1");
      src = src.replace(middleBlock, "");
    }
    write(file, src);
  }
}

normalizeHistoricalTitles();
translateEnglishDailyTitles();
removeSpanishDailyDuplicates();

console.log("Duplicate title fixes applied.");
