
const fs = require('fs');
const path = require('path');
const { translate } = require('google-translate-api-x');

const BASE_DIR = '/Users/oscarandujar/Projets/espanolesensuiza/';
const ES_DAILY_FILE = path.join(BASE_DIR, 'content-articles-facebook-daily-es.js');
const LANGUAGES = ['fr', 'de', 'en', 'it'];

// Helper to extract prefix like "fb-daily-20260503-01"
function getPrefix(key) {
    const match = key.match(/^fb-daily-\d{8}-\d{2}/);
    return match ? match[0] : null;
}

function parseDailyFile(filePath) {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf8');
    const startMatch = content.indexOf('Object.assign(');
    if (startMatch === -1) return {};
    const objStart = content.indexOf('{', startMatch);
    const objEnd = content.lastIndexOf('}');
    if (objStart === -1 || objEnd === -1) return {};
    const objStr = content.substring(objStart, objEnd + 1);
    try {
        return eval('(' + objStr + ')');
    } catch (e) {
        console.error(`Error parsing ${filePath}:`, e.message);
        return {};
    }
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

async function translateArticle(article, lang) {
    console.log(`  Translating: ${article.title} -> ${lang}`);
    
    const fields = ['title', 'description', 'keywords', 'category', 'dateUpdated', 'imageAlt', 'summary', 'content'];
    const translations = await Promise.all(fields.map(f => translateText(article[f], lang)));
    
    const translated = {
        title: translations[0],
        description: translations[1],
        keywords: translations[2],
        keywordsLocalized: true,
        category: translations[3],
        hub: article.hub,
        slug: article.slug,
        readingTime: article.readingTime,
        dateUpdated: translations[4],
        featuredImage: article.featuredImage,
        imageAlt: translations[5],
        summary: translations[6],
        relatedSlugs: article.relatedSlugs || [],
        content: translations[7]
    };
    
    return translated;
}

function generateFileContent(lang, articles) {
    let output = `/**
 * content-articles-facebook-daily-${lang}.js
 * Auto-generated from daily Markdown posts.
 */

window.siteContent = window.siteContent || {};
window.siteContent.${lang} = window.siteContent.${lang} || { global: {}, pages: {}, articles: {} };
window.siteContent.${lang}.articles = window.siteContent.${lang}.articles || {};

Object.assign(window.siteContent.${lang}.articles, {
`;

    for (const [key, art] of Object.entries(articles)) {
        output += `
    "${key}": {
        title: ${JSON.stringify(art.title)},
        description: ${JSON.stringify(art.description)},
        keywords: ${JSON.stringify(art.keywords)},
        keywordsLocalized: true,
        category: ${JSON.stringify(art.category)},
        hub: ${JSON.stringify(art.hub)},
        slug: ${JSON.stringify(art.slug)},
        readingTime: ${art.readingTime},
        dateUpdated: ${JSON.stringify(art.dateUpdated)},
        featuredImage: ${JSON.stringify(art.featuredImage)},
        imageAlt: ${JSON.stringify(art.imageAlt)},
        summary: ${JSON.stringify(art.summary)},
        relatedSlugs: ${JSON.stringify(art.relatedSlugs)},
        content: \`${art.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
    },
`;
    }

    output += `\n});\n`;
    return output;
}

async function run() {
    const esArticles = parseDailyFile(ES_DAILY_FILE);
    const esPrefixMap = {};
    for (const key of Object.keys(esArticles)) {
        const prefix = getPrefix(key);
        if (prefix) esPrefixMap[prefix] = key;
    }

    for (const lang of LANGUAGES) {
        console.log(`Processing ${lang.toUpperCase()}...`);
        const langFile = path.join(BASE_DIR, `content-articles-facebook-daily-${lang}.js`);
        const currentArticles = parseDailyFile(langFile);
        
        const normalizedArticles = {};
        const langPrefixMap = {};
        
        // 1. Map current articles by prefix
        for (const [key, art] of Object.entries(currentArticles)) {
            const prefix = getPrefix(key);
            if (prefix) {
                langPrefixMap[prefix] = art;
            } else {
                // Keep entries without prefix as they are
                normalizedArticles[key] = art;
            }
        }

        // 2. Normalize existing and add missing from ES
        for (const [prefix, esKey] of Object.entries(esPrefixMap)) {
            const esArt = esArticles[esKey];
            if (langPrefixMap[prefix]) {
                // Existing entry - normalize key and slug
                const existingArt = langPrefixMap[prefix];
                existingArt.slug = esArt.slug; // Ensure slug is ES
                normalizedArticles[esKey] = existingArt;
                console.log(`  Normalized: ${prefix}`);
            } else {
                // Missing entry - translate and add
                const translated = await translateArticle(esArt, lang);
                translated.slug = esArt.slug; // Ensure slug is ES
                normalizedArticles[esKey] = translated;
                console.log(`  Added: ${prefix}`);
            }
        }

        // 3. Write back the whole file to ensure consistency
        const newContent = generateFileContent(lang, normalizedArticles);
        fs.writeFileSync(langFile, newContent, 'utf8');
        console.log(`  Updated ${langFile}`);
    }
}

run().catch(console.error);
