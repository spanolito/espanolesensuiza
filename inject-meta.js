const fs = require('fs');

const file = '/Users/oscarandujar/.gemini/antigravity/scratch/spaniards-in-switzerland/content-articles.js';
let content = fs.readFileSync(file, 'utf8');

const metadataMap = {
    "articulo-franquicia": "category: 'Salud y Seguros',\n        hub: 'hub-salud',\n        readingTime: 4,\n        summary: 'En Suiza tú pagas el 100% de los primeros gastos médicos hasta cubrir tu Franquicia elegida. Después, pagas un 10% de copago.',",
    "articulo-impostos": "category: 'Impuestos',\n        hub: 'hub-impuestos',\n        readingTime: 5,\n        summary: 'En Suiza pagas impuestos a 3 niveles. El cantonal y comunal suponen la mayor carga y varían drásticamente incluso cruzando la calle.',",
    "articulo-impuesto-fuente": "category: 'Impuestos',\n        hub: 'hub-impuestos',\n        readingTime: 3,\n        dateUpdated: 'Actualizado recientemente',\n        summary: 'Si tienes Permiso B o L, la empresa descuenta tu impuesto a la fuente directamente. La tarifa depende del cantón, estado civil e hijos.',",
    "articulo-seguros-sociales": "category: 'Trabajo',\n        hub: 'hub-trabajo',\n        readingTime: 6,\n        summary: 'El sistema de pensiones suizo se basa en 3 pilares: el AVS (estatal), la LPP (seguro profesional obligatorio) y el 3er pilar (ahorro privado).',",
    "articulo-salarios": "category: 'Trabajo',\n        hub: 'hub-trabajo',\n        readingTime: 5,\n        summary: 'Suiza tiene salarios muy altos pero costos en proporción. Solo unos pocos cantones (ej. Ginebra, Neuchâtel) tienen salario mínimo legal.',",
    "articulo-contratos": "category: 'Trabajo',\n        hub: 'hub-trabajo',\n        readingTime: 4,\n        summary: 'El mercado laboral suizo es muy liberal. El despido es libre (respetando los plazos de preaviso) y las vacaciones mínimas son 4 semanas semanales.',",
    "articulo-periodo-prueba": "category: 'Trabajo',\n        hub: 'hub-trabajo',\n        readingTime: 3,\n        summary: 'El periodo de prueba estándar es de 1 a 3 meses. Durante este tiempo, cualquiera de las partes puede rescindir el contrato con 7 días de preaviso.',",
    "articulo-buscar-empleo": "category: 'Trabajo',\n        hub: 'hub-trabajo',\n        readingTime: 4,\n        summary: 'El CV al estilo suizo debe incluir foto, fecha de nacimiento y estado civil. Las plataformas más usadas son Jobup, Jobs.ch y LinkedIn.',",
    "articulo-alquiler": "category: 'Vivienda',\n        hub: 'hub-vivienda',\n        readingTime: 5,\n        summary: 'El mercado de alquiler es muy competitivo. Necesitas un dosier impecable: extracto de no deudas (poursuites), contrato y 3 últimas nóminas.',",
    "articulo-fianzas": "category: 'Vivienda',\n        hub: 'hub-vivienda',\n        readingTime: 3,\n        summary: 'La fianza máxima legal es de 3 meses de alquiler. Puedes depositarla en un banco o usar seguros como SwissCaution.',",
    "articulo-costo-vida": "category: 'Vivienda',\n        hub: 'hub-vivienda',\n        readingTime: 4,\n        summary: 'Un sueldo de 5000 CHF puede parecer alto, pero tras seguros, impuestos y alquiler, el margen de maniobra se reduce significativamente.',",
    "articulo-frontaliers": "category: 'Frontaliers',\n        hub: 'hub-frontaliers',\n        readingTime: 4,\n        summary: 'El Permiso G te permite vivir en Francia/Alemania y trabajar en Suiza. Debes elegir entre la LAMal o el seguro de tu país (derecho de opción).',",
    "articulo-diplomas": "category: 'Trámites Ordinarios',\n        hub: 'hub-tramites',\n        readingTime: 3,\n        summary: 'Solo las profesiones reguladas (médicos, profesores) necesitan reconocimiento obligatorio ante el SEFRI o MEBEKO.',",
    "articulo-sistema-escolar": "category: 'Familia',\n        hub: 'hub-tramites',\n        readingTime: 5,\n        summary: 'El sistema escolar orienta (segrega) a los alumnos rápido: más del 60% hace formación profesional dual (CFC) en lugar de bachillerato.',",
    "articulo-sistema-salud": "category: 'Salud y Seguros',\n        hub: 'hub-salud',\n        readingTime: 4,\n        summary: 'Evita ir a las urgencias de un hospital por dolencias leves. Usa las Permanences Médicales o llama antes a tu seguro si tienes modelo HMO.',",
    "articulo-transporte": "category: 'Vida Diaria',\n        hub: 'hub-tramites',\n        readingTime: 4,\n        summary: 'El abono Demi-tarif / Halbtax (mitad de precio) es casi obligatorio para cualquier residente si planea usar el transporte público ocasionalmente.',",
    "articulo-ciudadania": "category: 'Trámites Ordinarios',\n        hub: 'hub-tramites',\n        readingTime: 5,\n        summary: 'La naturalización ordinaria requiere 10 años de residencia, un Permiso C, nivel de idioma (B1/A2) y superar un examen comunal de integración.',"
};

for (const [key, meta] of Object.entries(metadataMap)) {
    // We target the keywords line to inject right after it
    const regex = new RegExp(\`("\\\$\{key\}": \\{[^:]+:[^:]+:[^:]+:[^:]+keywords: "[^"]+",)\`);
    content = content.replace(regex, \`$1\\n        \$\{meta\}\`);
}

// Since article 5 has key articulo-impuestos (metadataMap has typo articulo-impostos)
content = content.replace(/("articulo-impuestos": \{[^:]+:[^:]+:[^:]+:[^:]+keywords: "[^"]+",)/, \`$1\\n        category: 'Impuestos',\\n        hub: 'hub-impuestos',\\n        readingTime: 5,\\n        summary: 'En Suiza pagas impuestos a 3 niveles. El cantonal y comunal suponen la mayor carga y varían drásticamente incluso cruzando la calle.',\`);


fs.writeFileSync(file, content);
console.log('Metadata injected.');
