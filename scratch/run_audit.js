
const fs = require('fs');
const path = require('path');

const BASE_DIR = '/Users/oscarandujar/Projets/espanolesensuiza/';
const LANGUAGES = ['fr', 'de', 'en', 'it'];
const ES_DAILY_FILE = path.join(BASE_DIR, 'content-articles-facebook-daily-es.js');

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
        return {};
    }
}

function runAudit() {
    const esArticles = parseDailyFile(ES_DAILY_FILE);
    const esKeys = Object.keys(esArticles);
    
    let report = "# Audit Content Synchronization Report\n\n";
    report += `Source of truth (ES): **${esKeys.length} articles**\n\n`;
    
    let table = "| Language | Articles | Synced | Missing Slugs | Missing Images | Spanish imageAlt? |\n";
    table += "| :--- | :--- | :--- | :--- | :--- | :--- |\n";

    for (const lang of LANGUAGES) {
        const langFile = path.join(BASE_DIR, `content-articles-facebook-daily-${lang}.js`);
        const langArticles = parseDailyFile(langFile);
        const langKeys = Object.keys(langArticles);
        
        const missingSlugs = esKeys.filter(k => !langArticles[k]);
        const missingImages = esKeys.filter(k => langArticles[k] && !langArticles[k].featuredImage);
        
        // Simple check for Spanish residues in imageAlt
        const spanishMarkers = [" en Suiza", " en España", " de la ", " para "];
        const spanishAlts = esKeys.filter(k => {
            const alt = langArticles[k] ? langArticles[k].imageAlt : "";
            return alt && spanishMarkers.some(m => alt.includes(m));
        });

        table += `| ${lang.toUpperCase()} | ${langKeys.length} | ${missingSlugs.length === 0 ? '✅' : '❌'} | ${missingSlugs.length} | ${missingImages.length} | ${spanishAlts.length} |\n`;
    }

    report += table;
    report += "\n\n## Missing Slugs Details\n";
    for (const lang of LANGUAGES) {
        const langFile = path.join(BASE_DIR, `content-articles-facebook-daily-${lang}.js`);
        const langArticles = parseDailyFile(langFile);
        const missingSlugs = esKeys.filter(k => !langArticles[k]);
        if (missingSlugs.length > 0) {
            report += `### ${lang.toUpperCase()}\n- ${missingSlugs.join('\n- ')}\n`;
        }
    }

    fs.writeFileSync(path.join(BASE_DIR, 'artifacts/final_audit_report.md'), report, 'utf8');
    console.log("Audit report generated in artifacts/final_audit_report.md");
    return report;
}

runAudit();
