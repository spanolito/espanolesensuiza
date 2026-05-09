
const fs = require('fs');
const path = require('path');
const { translate } = require('google-translate-api-x');

const BASE_DIR = '/Users/oscarandujar/Projets/espanolesensuiza/';
const ES_DAILY_FILE = path.join(BASE_DIR, 'content-articles-facebook-daily-es.js');
const LANGUAGES = ['fr', 'de', 'en', 'it'];

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
        return text;
    }
}

async function translateArticle(article, lang) {
    console.log(`  Translating: ${article.title} -> ${lang}`);
    const fields = ['title', 'description', 'keywords', 'category', 'dateUpdated', 'imageAlt', 'summary', 'content'];
    const translations = await Promise.all(fields.map(f => translateText(article[f], lang)));
    
    return {
        title: translations[0],
        description: translations[1],
        keywords: translations[2],
        keywordsLocalized: true,
        category: translations[3],
        hub: article.hub,
        slug: article.slug,
        readingTime: article.readingTime,
        dateUpdated: translations[4],
        featuredImage: article.featuredImage, // Explicitly keep ES
        imageAlt: translations[5],
        summary: translations[6],
        relatedSlugs: article.relatedSlugs || [],
        content: translations[7]
    };
}

function generateFileContent(lang, articles) {
    let output = `/**\n * content-articles-facebook-daily-${lang}.js\n * Auto-generated from Spanish source of truth.\n */\n\nwindow.siteContent = window.siteContent || {};\nwindow.siteContent.${lang} = window.siteContent.${lang} || { global: {}, pages: {}, articles: {} };\nwindow.siteContent.${lang}.articles = window.siteContent.${lang}.articles || {};\n\nObject.assign(window.siteContent.${lang}.articles, {\n`;
    for (const [key, art] of Object.entries(articles)) {
        output += `\n    "${key}": {\n        title: ${JSON.stringify(art.title)},\n        description: ${JSON.stringify(art.description)},\n        keywords: ${JSON.stringify(art.keywords)},\n        keywordsLocalized: true,\n        category: ${JSON.stringify(art.category)},\n        hub: ${JSON.stringify(art.hub)},\n        slug: ${JSON.stringify(art.slug)},\n        readingTime: ${art.readingTime},\n        dateUpdated: ${JSON.stringify(art.dateUpdated)},\n        featuredImage: ${JSON.stringify(art.featuredImage)},\n        imageAlt: ${JSON.stringify(art.imageAlt)},\n        summary: ${JSON.stringify(art.summary)},\n        relatedSlugs: ${JSON.stringify(art.relatedSlugs)},\n        content: \`${art.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`\n    },\n`;
    }
    output += `\n});\n`;
    return output;
}

async function run() {
    const esArticles = parseDailyFile(ES_DAILY_FILE);
    const esKeys = Object.keys(esArticles);

    for (const lang of LANGUAGES) {
        console.log(`Fixing ${lang.toUpperCase()}...`);
        const langFile = path.join(BASE_DIR, `content-articles-facebook-daily-${lang}.js`);
        const currentArticles = parseDailyFile(langFile);
        
        const fixedArticles = {};
        for (const key of esKeys) {
            const esArt = esArticles[key];
            if (currentArticles[key]) {
                // Existing entry - ensure fields are correct
                const art = currentArticles[key];
                art.slug = esArt.slug;
                art.featuredImage = esArt.featuredImage;
                art.hub = esArt.hub;
                fixedArticles[key] = art;
            } else {
                // Missing entry - translate and add
                const translated = await translateArticle(esArt, lang);
                fixedArticles[key] = translated;
            }
        }

        const newContent = generateFileContent(lang, fixedArticles);
        fs.writeFileSync(langFile, newContent, 'utf8');
        console.log(`  Cleaned up ${langFile}`);
    }
}

run().catch(console.error);
