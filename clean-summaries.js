const fs = require('fs');

const langs = ['fr', 'de', 'en', 'it'];

langs.forEach(lang => {
    let fileStr = fs.readFileSync(`content-articles-${lang}.js`, 'utf8');
    
    // Find consecutive summary lines
    // We match: summary: `...` followed by \n followed by spaces followed by summary: `...`
    // And we keep only the first one (or delete the second one)
    fileStr = fileStr.replace(/(summary:\s*`[^`]*`,\s*\n\s*)summary:\s*`[^`]*`,/g, '$1');
    
    fs.writeFileSync(`content-articles-${lang}.js`, fileStr, 'utf8');
    console.log(`Cleaned duplicates in content-articles-${lang}.js`);
});
