#!/usr/bin/env node
/**
 * inject_images_i18n.js
 * Propage featuredImage + imageAlt traduit depuis les fichiers ES vers FR/DE/EN/IT
 */

const fs = require('fs');
const translate = require('google-translate-api-x');

const LANGS = ['fr', 'de', 'en', 'it'];
const sleep = ms => new Promise(r => setTimeout(r, ms));

// --- 1. Extraire les articles avec images depuis les fichiers ES ---

function extractImagesFromFile(filePath, isArray = false) {
  const code = fs.readFileSync(filePath, 'utf8');
  const results = [];
  const slugRe = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = slugRe.exec(code)) !== null) {
    const slug = m[1];
    const block = code.slice(m.index, m.index + 1000);
    const imgM = block.match(/featuredImage:\s*"([^"]+)"/);
    const altM = block.match(/imageAlt:\s*"([^"]+)"/);
    if (imgM) {
      results.push({ slug, img: imgM[1], alt: altM ? altM[1] : '' });
    }
  }
  return results;
}

// --- 2. Injection dans un fichier ---

function injectIntoFile(filePath, slug, img, alt) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const idx = content.indexOf('"' + slug + '"');
  if (idx === -1) return false; // slug non trouvé
  
  const block = content.slice(idx, idx + 1000);
  if (block.includes('featuredImage')) return false; // déjà injecté
  
  const dateMatch = block.match(/dateUpdated:\s*"[^"]*",?\n/);
  if (!dateMatch) return false;
  
  const insertPos = idx + block.indexOf(dateMatch[0]) + dateMatch[0].length;
  const toInsert = `        featuredImage: "${img}",\n        imageAlt: "${alt}",\n`;
  
  const newContent = content.slice(0, insertPos) + toInsert + content.slice(insertPos);
  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

// --- 3. Main ---

async function main() {
  // Extraire les articles ES
  console.log('Extraction des articles depuis les fichiers ES...');
  
  const guideArticles = extractImagesFromFile('content-articles.js');
  const dailyArticles = extractImagesFromFile('content-articles-facebook-daily-es.js');
  
  console.log(`Guides ES avec image: ${guideArticles.length}`);
  console.log(`Actualidad ES avec image: ${dailyArticles.length}`);
  
  // Pour les guides: exclure ceux déjà présents via les anciens articulo-xxx
  const frCode = fs.readFileSync('content-articles-fr.js', 'utf8');
  const existingFrImgs = new Set();
  const frRe = /featuredImage:\s*"([^"]+)"/g;
  let fm;
  while ((fm = frRe.exec(frCode)) !== null) existingFrImgs.add(fm[1]);
  
  const newGuideArticles = guideArticles.filter(a => !existingFrImgs.has(a.img));
  console.log(`Guides à propager: ${newGuideArticles.length}`);

  // Combiner tous les articles à traiter
  const allArticles = [...newGuideArticles, ...dailyArticles];
  console.log(`Total articles à traiter: ${allArticles.length}`);
  
  // Traiter chaque langue
  for (const lang of LANGS) {
    console.log(`\n=== Traitement langue: ${lang} ===`);
    
    const guideFile = `content-articles-${lang}.js`;
    const dailyFile = `content-articles-facebook-daily-${lang}.js`;
    
    let injected = 0;
    let skipped = 0;
    let notFound = 0;
    
    for (const article of allArticles) {
      const isDaily = dailyArticles.includes(article);
      const targetFile = isDaily ? dailyFile : guideFile;
      
      // Traduire l'alt text
      let translatedAlt = article.alt;
      if (article.alt && lang !== 'es') {
        try {
          const res = await translate(article.alt, { from: 'es', to: lang });
          translatedAlt = res.text.replace(/"/g, "'");
          await sleep(300);
        } catch (e) {
          console.log(`  [WARN] Traduction échouée pour ${article.slug}: ${e.message}`);
          translatedAlt = article.alt; // fallback espagnol
        }
      }
      
      const result = injectIntoFile(targetFile, article.slug, article.img, translatedAlt);
      if (result === true) {
        injected++;
        process.stdout.write('.');
      } else if (result === false) {
        // Vérifier si c'est "non trouvé" ou "déjà injecté"
        const content = fs.readFileSync(targetFile, 'utf8');
        if (!content.includes('"' + article.slug + '"')) {
          notFound++;
        } else {
          skipped++;
        }
      }
    }
    
    console.log(`\n  Injectés: ${injected} | Déjà présents: ${skipped} | Non trouvés: ${notFound}`);
  }
  
  console.log('\n=== Terminé ===');
}

main().catch(console.error);
