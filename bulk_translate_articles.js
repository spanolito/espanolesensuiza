const fs = require('fs');
const translate = require('google-translate-api-x');

const langs = ['fr', 'de', 'en', 'it'];

async function run() {
    for (const lang of langs) {
        console.log(`\n--- Processing ${lang} ---`);
        const filePath = `content-articles-${lang}.js`;
        let fileStr = fs.readFileSync(filePath, 'utf8');
        
        // Remove duplicate summary lines (the one with single quotes)
        fileStr = fileStr.replace(/summary:\s*'[^']*',\s*/g, '');

        // Match each article block up to the content
        const articleRegex = /"([^"]+)"\s*:\s*\{([\s\S]*?)content:\s*`([^`]*)`/g;
        
        let newFileStr = fileStr;
        let match;
        const matches = [];
        
        // Use string.matchAll for easier iteration
        for (const match of fileStr.matchAll(articleRegex)) {
             matches.push({
                fullMatch: match[0],
                id: match[1],
                beforeContent: match[2],
                contentString: match[3]
            });
        }
        
        console.log(`Found ${matches.length} articles for ${lang}.`);
        
        for (const m of matches) {
            console.log(`Translating ${m.id} to ${lang}...`);
            try {
                // translate
                const res = await translate(m.contentString, {to: lang});
                let translatedHTML = res.text;
                // Escape backticks in translated HTML
                translatedHTML = translatedHTML.replace(/`/g, "\\`");
                
                // Construct replacement string
                const replacement = `"${m.id}": {${m.beforeContent}content: \`${translatedHTML}\``;
                
                // Replace in the file string
                newFileStr = newFileStr.replace(m.fullMatch, replacement);
                
                // Sleep to avoid rate limits
                await new Promise(r => setTimeout(r, 800));
            } catch (e) {
                console.error(`Error translating ${m.id}:`, e.message);
                await new Promise(r => setTimeout(r, 5000)); // wait longer on error
            }
        }
        
        fs.writeFileSync(filePath, newFileStr, 'utf8');
        console.log(`[OK] Saved ${filePath}`);
    }
}
run();
