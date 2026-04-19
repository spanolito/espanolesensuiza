const fs = require('fs');
const path = require('path');

const histFile = '/Users/oscarandujar/Projets/Publications/articles_espanoles_suiza.md';
const postsDir = '/Users/oscarandujar/Projets/Publications/posts';
const targetFile = '/Users/oscarandujar/Projets/espanolesensuiza/content-articles.js';

let targetContent = fs.readFileSync(targetFile, 'utf8');
if (!targetContent.endsWith('};') && !targetContent.trim().endsWith('};')) {
    console.error("Target file does not end with };");
    process.exit(1);
}

// Remove the trailing }; (handling whitespace/newlines)
targetContent = targetContent.replace(/};\s*$/, '');
if (!targetContent.trim().endsWith(',')) {
    targetContent += ',\n';
}

let addedArticles = 0;

function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function classifyHub(title) {
    const t = title.toLowerCase();
    if (t.includes('impuesto') || t.includes('fuente') || t.includes('declaracion') || t.includes('tax')) return { hub: 'impuestos', category: 'Impuestos y Fiscalidad' };
    if (t.includes('permiso') || t.includes('llegar') || t.includes('registro') || t.includes('burocracia') || t.includes('tramite') || t.includes('ch')) return { hub: 'tramites', category: 'Trámites Ordinarios' };
    if (t.includes('alquiler') || t.includes('piso') || t.includes('vivienda') || t.includes('casa')) return { hub: 'vivienda', category: 'Vivienda y Alquiler' };
    if (t.includes('seguro') || t.includes('medico') || t.includes('lamal') || t.includes('enfermedad') || t.includes('franquicia')) return { hub: 'salud', category: 'Salud y Seguro (LAMal)' };
    if (t.includes('trabajo') || t.includes('salario') || t.includes('desempleo') || t.includes('empleo') || t.includes('sueldo') || t.includes('paro') || t.includes('contrato')) return { hub: 'trabajo', category: 'Trabajo y Empleo' };
    if (t.includes('fronterizo') || t.includes('frontier') || t.includes('frontera')) return { hub: 'fronterizos', category: 'Frontaliers y Permiso G' };
    return { hub: 'vivir', category: 'Vivir en Suiza' };
}

// 1. Parse historical
const histData = fs.readFileSync(histFile, 'utf8');
const regex = /\*\*(\d+)\.\*\*\s+\[(.*?)\]\((.*?)\)\s*\n\*(.*?)\*/g;
let match;
while ((match = regex.exec(histData)) !== null) {
    const num = match[1];
    const title = match[2];
    let fbUrl = match[3];
    const dateStr = match[4];

    const cleanTitle = title.replace(/[#*]/g, '').trim();
    const slug = `fb-${num}-${generateSlug(cleanTitle)}`;
    const { hub, category } = classifyHub(cleanTitle);

    let finalFbUrl = fbUrl;
    let isSearch = false;
    if (!fbUrl.includes('/groups/')) {
        const searchWords = cleanTitle.replace(/[^\w\sáéíóúÁÉÍÓÚñÑüÜ]/g, ' ')
                                .split(/\s+/)
                                .filter(w => w.trim().length > 2)
                                .slice(0, 5)
                                .join(' ');
        const safeSearchTerm = encodeURIComponent(searchWords);
        finalFbUrl = `https://www.facebook.com/groups/1560239407529680/search/?q=${safeSearchTerm}`;
        isSearch = true;
    }

    const safeTitle = cleanTitle.replace(/'/g, "\\'").replace(/"/g, '\\"');
    const content = `<div class="article-content">\n  <p><strong>Resumen extraído:</strong> ${safeTitle}...</p>\n  <div class="callout info">\n    <strong>Nota histórica:</strong> Debido al formato de exportación, solo pudimos recuperar este fragmento introductorio. Puedes usar el botón de abajo para buscar el post completo directamente en el grupo de Facebook.\n  </div>\n</div>`;

    const code = `\n    "${slug}": {
        title: "${safeTitle}",
        description: "${safeTitle}",
        keywords: "${hub}, suiza",
        category: "${category}",
        hub: "${hub}",
        slug: "${slug}",
        readingTime: 2,
        dateUpdated: "${dateStr}",
        facebookUrl: "${finalFbUrl}",
        isFbSearch: ${isSearch},
        summary: "Accede al contenido completo discutido por la comunidad buscando el fragmento original.",
        content: \`${content}\`
    },`;
    
    targetContent += code;
    addedArticles++;
}

// 2. Parse new posts
const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
for (const file of postFiles) {
    const data = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const blocks = data.split(/^##\s+Post/m);
    
    for (let i = 1; i < blocks.length; i++) {
        const block = blocks[i];
        const titleMatch = block.match(/^\s*\d*\s*—\s*(.*)/);
        if (!titleMatch) continue;
        const title = titleMatch[1].trim();
        const contentLines = block.replace(/^\s*\d*\s*—\s*.*\n/, '');
        
        const cleanTitle = title.replace(/[#*]/g, '').trim();
        const safeTitle = cleanTitle.replace(/'/g, "\\'").replace(/"/g, '\\"');
        const slug = generateSlug(cleanTitle);
        const { hub, category } = classifyHub(cleanTitle);

        const paragraphs = contentLines.split('\\n\\n')
            .map(p => p.trim())
            .filter(p => !p.startsWith('---') && p !== '')
            .map(p => `<p>${p}</p>`)
            .join('\\n');

        const content = `<div class="article-content">\n${paragraphs}\n</div>`;

        const dateMatch = file.match(/posts_(\d{4}-\d{2}-\d{2})/);
        const dateStr = dateMatch ? dateMatch[1] : 'Abril 2026';

        const escapedContent = content.replace(/\`/g, '\\\\`');
        const calculatedReadingTime = Math.max(2, Math.ceil(escapedContent.split(' ').length / 200));

        const code = `\n    "${slug}": {
        title: "${safeTitle}",
        description: '${safeTitle.substring(0, 100).replace(/'/g, "\\'")}...',
        keywords: "${hub}, guia suiza, vida suiza",
        category: "${category}",
        hub: "${hub}",
        slug: "${slug}",
        readingTime: ${calculatedReadingTime},
        dateUpdated: "${dateStr}",
        summary: "Guía de la comunidad basada en experiencias recientes y verificadas.",
        content: \`${escapedContent}\`
    },`;
        
        targetContent += code;
        addedArticles++;
    }
}

// remove the very last comma gracefully and add object closing
if (targetContent.endsWith(',')) {
    targetContent = targetContent.slice(0, -1);
}

targetContent += '\n};\n';

fs.writeFileSync(targetFile, targetContent, 'utf8');
console.log(`Successfully migrated ${addedArticles} articles to content-articles.js`);
