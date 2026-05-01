const fs = require('fs');
const path = require('path');

const files = [
    'content-articles.js',
    'content-articles-en.js',
    'content-articles-fr.js',
    'content-articles-de.js',
    'content-articles-it.js'
];

const reclassifications = [
    // Cultural moves
    { keywords: ['fondue', 'carnaval', 'queso', 'tradiciones', 'fiestas', 'eventos', 'esquí', 'ski', 'navidad', 'christmas', 'noël', 'weihnachten', 'marmota', 'recetas', 'historia', 'history', 'musée', 'museo', 'museum'], newHub: 'cultura-eventos' },
    
    // Specific fixes from plan
    { id: 'fb-125', newHub: 'vivienda' },
    { id: 'fb-141', newHub: 'vivir-en-suiza' },
    { id: 'fb-214', newHub: 'vivir-en-suiza' },
    { id: 'fb-232', newHub: 'cultura-eventos' },
    { id: 'fb-026', newHub: 'cultura-eventos' },
    { id: 'fb-011', newHub: 'vivir-en-suiza' },
    { id: 'fb-396-la-fondue', newHub: 'cultura-eventos' },
    { id: 'fb-401-quesos-suizos', newHub: 'cultura-eventos' }
];

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Simple parser to identify objects and update hubs
    // This is a bit risky with regex, so we'll do it carefully
    
    reclassifications.forEach(rule => {
        if (rule.id) {
            // Find specific ID and update its hub
            const regex = new RegExp(`("${rule.id}"|'${rule.id}'):\\s*{[^{]*hub:\\s*["'][^"']+["']`, 'g');
            content = content.replace(regex, (match) => {
                return match.replace(/hub:\s*["'][^"']+["']/, `hub: "${rule.newHub}"`);
            });
        }
        
        if (rule.keywords) {
            // Move based on keywords in title or keywords field
            // This is harder to do safely with regex on the whole file
            // We'll skip auto-keyword matching in this script for safety and do it manually for known slugs if needed
        }
    });

    // Manual list of slugs to move to cultura-eventos if they exist
    const culturalSlugs = [
        'fondue', 'carnaval', 'tradiciones', 'fiesta', 'navidad', 'esqui', 'ski', 'ferie', 'festivals', 
        'concierto', 'museum', 'museo', 'history', 'historia', 'receta', 'gastronomia'
    ];
    
    culturalSlugs.forEach(slugPart => {
        const regex = new RegExp(`("[^"]*${slugPart}[^"]*"|'[^']*${slugPart}[^']*'):\\s*{[^{]*hub:\\s*["']vivir-en-suiza["']`, 'gi');
        content = content.replace(regex, (match) => {
            return match.replace(/hub:\s*["']vivir-en-suiza["']/, `hub: "cultura-eventos"`);
        });
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
