
const fs = require('fs');
const path = require('path');
const { translate } = require('google-translate-api-x');

const BASE_DIR = '/Users/oscarandujar/Projets/espanolesensuiza/';
const LANGUAGES = ['fr', 'de', 'en', 'it'];
const FILES = [
    'content-articles-{lang}.js',
    'content-articles-facebook-daily-{lang}.js'
];

const SPANISH_MARKERS = [
    " en Suiza", " en España", " de la renta", " para residentes", " con permiso", " los ", " las ", " una ",
    " del ", " por ", " sobre ", " jubilación ", " trámite ", " impuestos ", " declaración "
];

function isSpanish(text) {
    if (!text) return false;
    const lower = text.toLowerCase();
    return SPANISH_MARKERS.some(marker => lower.includes(marker.toLowerCase()));
}

async function translateText(text, to) {
    if (!text || typeof text !== 'string' || text.trim() === '') return text;
    try {
        const res = await translate(text, { to });
        return res.text;
    } catch (e) {
        console.error(`Translation error for ${to}:`, e.message);
        return text;
    }
}

async function processFile(filePath, lang) {
    if (!fs.existsSync(filePath)) return;
    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to find imageAlt: "..." or imageAlt: '...'
    const regex = /imageAlt:\s*["']([^"']+)["']/g;
    let match;
    let replacements = [];

    while ((match = regex.exec(content)) !== null) {
        const originalText = match[1];
        if (isSpanish(originalText)) {
            console.log(`  Found Spanish imageAlt: "${originalText}"`);
            const translated = await translateText(originalText, lang);
            replacements.push({ original: originalText, translated });
        }
    }

    if (replacements.length > 0) {
        for (const replacement of replacements) {
            // Be careful with escaping quotes
            const escapedOriginal = replacement.original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const searchRegex = new RegExp(`imageAlt:\\s*["']${escapedOriginal}["']`, 'g');
            content = content.replace(searchRegex, `imageAlt: ${JSON.stringify(replacement.translated)}`);
        }
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  Updated ${replacements.length} imageAlt tags in ${filePath}`);
    } else {
        console.log(`  No Spanish imageAlt found in ${filePath}`);
    }
}

async function run() {
    for (const lang of LANGUAGES) {
        for (const filePattern of FILES) {
            const filePath = path.join(BASE_DIR, filePattern.replace('{lang}', lang));
            await processFile(filePath, lang);
        }
    }
}

run().catch(console.error);
