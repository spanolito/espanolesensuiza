/**
 * reclassify-articles.js — v2
 * Uses key-based matching (not slug-based) since articles are keyed by their slug-like identifier.
 * The key is the JSON property name at the start of each article entry.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ============================================================
// ARTICLES TO MOVE TO cultura-eventos
// ============================================================
const TO_CULTURA_EVENTOS = [
    // Tradiciones / gastronomía suiza
    'fb-017-10-museos-originales-en-suiza-romanda',
    'fb-021-cliquer-pour-la-vid-o-el-jet-d-eau-de-ginebra-un-espect-culo-de-fuerza-y-belleza',
    'fb-042-festival-de-verano-de-lucerna-un-evento-imperdible',
    'fb-043-este-fin-de-semana-no-te-pierdas-el-espect-culo-nico-en-ginebra-el-viernes-16-y-el-s-bado-17-de-agosto-a-las-22h-frente-a-la-playa-de-eaux',
    'fb-045-imagen-de-la-tormenta-del-jueves-por-la-tarde-sobre-ginebra-a-las-18-20-captada-por-la-c-mara-web-del-telef-rico-del-sal-ve',
    'fb-048-cliquer-pour-la-vid-o-el-final-de-los-fuegos-de-las-fiestas-en-ge-el-final-de-los-fuegos-de-las-fiestas-en-ge',
    'fb-101-double-cr-me-de-gruy-re-con-merengues-tu-defensa-contra-el-invierno',
    'fb-110-cliquer-pour-la-vid-o-del-27-de-octubre-al-7-de-enero-ginebra-se-transforma-en-un-espect-culo-de-arte-y-tecnolog-a-con-colloque-wright-o-geneva-l',
    'fb-116-la-emigraci-n-el-arte-de-dejar-para-ganar',
    'fb-121-ginebra-se-llena-de-vida-este-verano',
    'fb-137-espa-a-suiza-en-berna-a-por-semis-y-tranquilos-esta-vez-los-besos-van-con-consentimiento',
    'fb-144-el-pr-ncipe-de-bel-air-se-va-de-heidi-por-ginebra',
    'fb-145-el-alcalde-de-ginebra-es-gallego-literalmente',
    'fb-154-fuegos-artificiales-el-espect-culo-que-no-todos-disfrutan',
    'fb-157-henniez-cumple-120-a-os-una-historia-bien-suiza',
    'fb-164-sab-as-que-la-bandera-suiza-no-es-rectangular',
    'fb-168-suiza-no-solo-comparte-la-bandera-cuadrada-con-el-vaticano-sab-as-esto',
    'fb-182-hoy-vuelta-al-cole-en-ginebra',
    'fb-231-un-gruy-re-suizo-elegido-mejor-queso-del-mundo',
    'fb-232-65-000-voluntarios-participaron-en-el-clean-up-day-en-suiza',
    'fb-236-ginebra-se-convierto-en-un-circuito-n-utico-con-el-sailgp',
    'fb-237-del-d-salpe-al-carnaval-de-evol-ne-suiza-entre-vacas-y-m-scaras',
    'fb-242-cliquer-pour-la-vid-o-en-suiza-los-telef-ricos-no-son-solo-un-medio-de-transporte-son-parte-de-la-vida-diaria-y-un-s-mbolo-de-las-monta-as-conecta',
    'fb-287-fonduetram-de-berna-fondue-sobre-ra-lessi-te-apetece-un-plan-diferente-este-invierno-en-berna-vuelve-el-famoso-fonduetram-una-cena-de-fondue-dentro',
    'fb-301-las-estaciones-de-esqu-suizas-buscan-desesperadamente-personal',
    'fb-324-marmota-al-vino-tinto-el-plato-que-ha-indignado-a-media-suiza',
    'fb-329-empieza-la-temporada-de-esqu-en-suiza-qui-n-abre-y-cu-ndo',
    'fb-381-esquiar-en-suiza-deporte-nacional-y-uno-de-los-m-s-accidentados',
    'fb-396-la-fondue-no-naci-como-plato-nacional-y-casi-nadie-lo-sabe',
    'fb-397-navidad-dulce-navidad',
    'fb-433-un-nuevo-museo-dedicado-a-las-motos-de-competici-n-abre-en-la-regi-n-del-lago-lem-n-y-no-es-un-detalle-menor',
    'fb-447-turismo-brit-nico-londres-pide-m-s-vigilancia-a-quienes-viajan-a-suiza',
    'fb-513-cliquer-pour-la-vid-o-prueba-comunidad-atentos-al-detalle-voy-a-ser-voluntariamente-vago-y-no-voy-a-dar-pistas-adicionales-estas-im-genes-y-el',
    'fb-539-el-turismo-de-compras-no-se-puede-frenar-y-cuanto-antes-lo-asumamos-mejor',
    'fb-550-turismo-en-suiza-2025-r-cord-hist-rico-y-no-es-casualidad',
    'fb-123-d-nde-se-puede-ba-ar-uno-en-ginebra-sin-meter-la-pata',
    'fb-300-los-futuros-m-dicos-de-ginebra-otra-vez-al-natural',
];

// Articles to move from fronterizos to cultura-eventos
const FRONTERIZOS_TO_CULTURA = [
    'fb-026-barbacoas-en-suiza-entre-el-sabor-y-la-etiqueta-introducci-n-las-barbacoas-son-una-tradici-n-que-trasciende-fronteras-y-culturas-en-suiza-un',
    'fb-026-barbacoas-en-suiza-entre-el-sabor-y-la-etiquetaintroducci-nlas-barbacoas-son-una-tradici-n-que-trasciende-fronteras-y-culturas-en-suiza-un',
];

// Articles to move from fronterizos to vivir-en-suiza
const FRONTERIZOS_TO_VIVIR = [
    'fb-011-ginebra-una-ciudad-situada-en-la-frontera-suroeste-de-suiza-a-orillas-del-hermoso-lago-lem-n-es-un-lugar-con-una-rica-historia-y-una-vibrante-vida',
];

// Articles to move from trabajo to vivir-en-suiza
const TRABAJO_TO_VIVIR = [
    'fb-214-en-suiza-la-multa-se-adapta-a-tu-sueldo-y-no-siempre-la-pagas-al-momento',
];

// ============================================================
// Process files
// ============================================================
const FILES = [
    'content-articles.js',
    'content-articles-en.js',
    'content-articles-fr.js',
    'content-articles-de.js',
    'content-articles-it.js',
];

let totalChanges = 0;
const changeLog = [];

function changeHubForKey(content, articleKey, fromHub, toHub) {
    // Find the article entry by its key and change the hub
    // Article keys appear as: "article-key": { ...hub: "xxx"... }
    const keyEscaped = articleKey.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Pattern: find the article key, then find the hub property within the next ~1000 chars
    const regex = new RegExp(
        `("${keyEscaped}"\\s*:\\s*\\{[\\s\\S]*?)hub:\\s*["']${fromHub}["']`,
        'g'
    );
    
    let changed = false;
    const newContent = content.replace(regex, (match, prefix) => {
        // Make sure we're not crossing into another article (check we didn't pass another key)
        // Simple heuristic: if prefix contains another ": {" pattern, skip
        const otherKeys = prefix.match(/"\w[^"]*":\s*\{/g);
        if (otherKeys && otherKeys.length > 1) return match; // skip, crossed boundary
        
        changed = true;
        return `${prefix}hub: "${toHub}"`;
    });
    
    return { content: newContent, changed };
}

for (const file of FILES) {
    const filePath = path.join(ROOT, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fileChanges = 0;

    // Move to cultura-eventos from vivir-en-suiza
    for (const key of TO_CULTURA_EVENTOS) {
        const result = changeHubForKey(content, key, 'vivir-en-suiza', 'cultura-eventos');
        if (result.changed) {
            content = result.content;
            fileChanges++;
        }
    }

    // Move from fronterizos to cultura-eventos
    for (const key of FRONTERIZOS_TO_CULTURA) {
        const result = changeHubForKey(content, key, 'fronterizos', 'cultura-eventos');
        if (result.changed) {
            content = result.content;
            fileChanges++;
        }
    }

    // Move from fronterizos to vivir-en-suiza
    for (const key of FRONTERIZOS_TO_VIVIR) {
        const result = changeHubForKey(content, key, 'fronterizos', 'vivir-en-suiza');
        if (result.changed) {
            content = result.content;
            fileChanges++;
        }
    }

    // Move from trabajo to vivir-en-suiza
    for (const key of TRABAJO_TO_VIVIR) {
        const result = changeHubForKey(content, key, 'trabajo', 'vivir-en-suiza');
        if (result.changed) {
            content = result.content;
            fileChanges++;
        }
    }

    // Also move fb-232 from trabajo to cultura-eventos (Clean-Up-Day)
    {
        const result = changeHubForKey(content, 'fb-232-65-000-voluntarios-participaron-en-el-clean-up-day-en-suiza', 'trabajo', 'cultura-eventos');
        if (result.changed) {
            content = result.content;
            fileChanges++;
        }
    }

    if (fileChanges > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        changeLog.push(`${file}: ${fileChanges} article(s) reclassified`);
        totalChanges += fileChanges;
    } else {
        changeLog.push(`${file}: no changes needed`);
    }
}

console.log('=== Reclassification Complete ===');
console.log(`Total changes: ${totalChanges}`);
console.log('');
changeLog.forEach(l => console.log(l));

// Verify final distribution
console.log('\n=== Verification ===');
for (const file of FILES) {
    const content = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const hubs = {};
    const matches = content.matchAll(/hub:\s*["']([^"']+)["']/g);
    for (const m of matches) {
        hubs[m[1]] = (hubs[m[1]] || 0) + 1;
    }
    console.log(`\n${file}:`);
    Object.entries(hubs).sort((a, b) => b[1] - a[1]).forEach(([h, c]) => {
        console.log(`  ${h}: ${c}`);
    });
}
