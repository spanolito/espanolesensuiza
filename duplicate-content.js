const fs = require('fs');

const langs = ['en', 'fr', 'de', 'it'];

// Read the original files
const pagesContent = fs.readFileSync('content-pages.js', 'utf8');
const articlesContent = fs.readFileSync('content-articles.js', 'utf8');

// Ensure the root object is created correctly
let baseSetup = `window.siteContent = window.siteContent || {};\n`;

for (const lang of langs) {
    baseSetup += `window.siteContent.${lang} = window.siteContent.${lang} || { global: {}, pages: {}, articles: {} };\n`;
}

// Modify original content-pages.js to include the setup
let newPagesContent = pagesContent.replace(
    'window.siteContent = window.siteContent || { es: { global: {}, pages: {}, articles: {} } };',
    'window.siteContent = window.siteContent || { es: { global: {}, pages: {}, articles: {} } };\n' + baseSetup
);
fs.writeFileSync('content-pages.js', newPagesContent);

// Duplicate for each lang
for (const lang of langs) {
    const pContent = newPagesContent.replace(/window\.siteContent\.es/g, `window.siteContent.${lang}`);
    const aContent = articlesContent.replace(/window\.siteContent\.es/g, `window.siteContent.${lang}`);
    
    fs.writeFileSync(`content-pages-${lang}.js`, pContent);
    fs.writeFileSync(`content-articles-${lang}.js`, aContent);
    console.log(`Created files for ${lang}`);
}
