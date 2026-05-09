
const fs = require('fs');
const path = require('path');
const { translate } = require('google-translate-api-x');

const BASE_DIR = '/Users/oscarandujar/Projets/espanolesensuiza/';
const ES_DAILY_FILE = path.join(BASE_DIR, 'content-articles-facebook-daily-es.js');
const LANGUAGES = ['fr', 'de', 'en', 'it'];

// Helper to parse the JS files (basic extraction of the object content)
function parseDailyFile(filePath) {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf8');
    
    // We want to extract the object passed to Object.assign
    // This is a bit tricky with regex if it's large, but let's try to find the start of the object
    const startMatch = content.indexOf('Object.assign(');
    if (startMatch === -1) return {};
    
    // We look for the first '{' after Object.assign
    const objStart = content.indexOf('{', startMatch);
    // And the last '}' before the end
    const objEnd = content.lastIndexOf('}');
    
    if (objStart === -1 || objEnd === -1) return {};
    
    const objStr = content.substring(objStart, objEnd + 1);
    
    // Using eval is risky but these are static files we control
    // To be safer, we'll wrap it in a function
    try {
        return eval('(' + objStr + ')');
    } catch (e) {
        console.error(`Error parsing ${filePath}:`, e.message);
        return {};
    }
}

async function translateText(text, to) {
    if (!text || typeof text !== 'string') return text;
    // Don't translate if it's just HTML tags or empty
    if (text.trim() === '' || (text.includes('<') && text.includes('>') && text.replace(/<[^>]*>/g, '').trim() === '')) return text;
    
    try {
        const res = await translate(text, { to });
        return res.text;
    } catch (e) {
        console.error(`Translation error for ${to}:`, e.message);
        return text; // Fallback to original
    }
}

async function translateArticle(article, lang) {
    console.log(`  Translating: ${article.title} -> ${lang}`);
    
    const translated = {
        title: await translateText(article.title, lang),
        description: await translateText(article.description, lang),
        keywords: await translateText(article.keywords, lang),
        keywordsLocalized: true,
        category: await translateText(article.category, lang),
        hub: article.hub, // Keep ES
        slug: article.slug, // Keep ES
        readingTime: article.readingTime,
        dateUpdated: await translateText(article.dateUpdated, lang),
        featuredImage: article.featuredImage, // Keep ES
        imageAlt: await translateText(article.imageAlt, lang),
        summary: await translateText(article.summary, lang),
        relatedSlugs: article.relatedSlugs || [],
        content: await translateText(article.content, lang)
    };
    
    return translated;
}

function formatArticle(key, article) {
    return `    "${key}": {
        title: ${JSON.stringify(article.title)},
        description: ${JSON.stringify(article.description)},
        keywords: ${JSON.stringify(article.keywords)},
        keywordsLocalized: true,
        category: ${JSON.stringify(article.category)},
        hub: ${JSON.stringify(article.hub)},
        slug: ${JSON.stringify(article.slug)},
        readingTime: ${article.readingTime},
        dateUpdated: ${JSON.stringify(article.dateUpdated)},
        featuredImage: ${JSON.stringify(article.featuredImage)},
        imageAlt: ${JSON.stringify(article.imageAlt)},
        summary: ${JSON.stringify(article.summary)},
        relatedSlugs: ${JSON.stringify(article.relatedSlugs)},
        content: \`${article.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
    },
`;
}

async function run() {
    const esArticles = parseDailyFile(ES_DAILY_FILE);
    const esKeys = Object.keys(esArticles);
    console.log(`Found ${esKeys.length} articles in ES daily file.`);

    for (const lang of LANGUAGES) {
        const langFile = path.join(BASE_DIR, `content-articles-facebook-daily-${lang}.js`);
        const langArticles = parseDailyFile(langFile);
        
        // Find missing articles based on the ES key
        const missingKeys = esKeys.filter(key => !langArticles[key]);
        
        console.log(`${lang.toUpperCase()}: Missing ${missingKeys.length} articles.`);
        
        if (missingKeys.length === 0) continue;

        let newEntries = '';
        for (const key of missingKeys) {
            const translated = await translateArticle(esArticles[key], lang);
            newEntries += formatArticle(key, translated);
        }

        if (newEntries) {
            // Append to the file before the closing Object.assign paren
            let content = fs.readFileSync(langFile, 'utf8');
            const insertPos = content.lastIndexOf('});');
            if (insertPos !== -1) {
                const updatedContent = content.substring(0, insertPos) + newEntries + content.substring(insertPos);
                fs.writeFileSync(langFile, updatedContent, 'utf8');
                console.log(`Updated ${langFile} with ${missingKeys.length} new articles.`);
            } else {
                console.error(`Could not find injection point in ${langFile}`);
            }
        }
    }
}

run().catch(console.error);
