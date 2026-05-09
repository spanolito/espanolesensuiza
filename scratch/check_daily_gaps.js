
const fs = require('fs');
const path = require('path');

function getSlugs(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex to match keys in the Object.assign structure
    // e.g. "fb-daily-20260420-01-...": {
    const regex = /^\s*"([^"]+)":\s*\{/gm;
    let slugs = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    return slugs;
}

const baseDir = '/Users/oscarandujar/Projets/espanolesensuiza/';
const esFile = path.join(baseDir, 'content-articles-facebook-daily-es.js');
const langs = ['fr', 'de', 'en', 'it'];

const esSlugs = getSlugs(esFile);
console.log(`ES Daily Articles: ${esSlugs.length}`);

langs.forEach(lang => {
    const langFile = path.join(baseDir, `content-articles-facebook-daily-${lang}.js`);
    if (fs.existsSync(langFile)) {
        const langSlugs = getSlugs(langFile);
        const missing = esSlugs.filter(s => !langSlugs.includes(s));
        console.log(`${lang.toUpperCase()} Daily Articles: ${langSlugs.length} (Missing: ${missing.length})`);
        if (missing.length > 0 && missing.length < 50) {
            console.log(`Missing slugs for ${lang}:`, missing);
        } else if (missing.length >= 50) {
             console.log(`Missing slugs for ${lang}: ${missing.length} (too many to list)`);
        }
    } else {
        console.log(`${lang.toUpperCase()} Daily File NOT FOUND`);
    }
});
