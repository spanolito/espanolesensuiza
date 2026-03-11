const fs = require('fs');

const files = ['content-articles-fr.js', 'content-articles-it.js', 'content-articles-en.js', 'content-articles-de.js'];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace summary: '...' with summary: `...`
  // We need to match title:, description:, category:, summary: followed by '...'
  content = content.replace(/(description|category|title|summary):\s*'([^'\n]*(?:'[^'\n]*)*)'/g, (match, prop, inner) => {
      // Escape backticks inside if any, but unlikely
      let safeInner = inner.replace(/`/g, "\\`");
      return `${prop}: \`${safeInner}\``;
  });

  fs.writeFileSync(file, content, 'utf8');
});
console.log("Quotes fixed!");
