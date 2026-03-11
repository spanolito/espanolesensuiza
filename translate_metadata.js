const fs = require('fs');

const translations = {
  fr: {
    "articulo-registro": { title: "Comment s'inscrire à l'arrivée en Suisse", description: "Guide étape par étape sur l'inscription dans votre nouvelle commune après votre déménagement in Suisse.", category: "Démarches Initiales", summary: "Vous devez vous inscrire dans votre commune dans les 14 jours." },
    "articulo-lamal": { title: "Assurance maladie en Suisse (LAMal)", description: "L'assurance maladie est obligatoire. Découvrez comment fonctionne la LAMal.", category: "Assurance Maladie", summary: "La LAMal est obligatoire et privée. Vous avez 3 mois pour l'obtenir." },
    "articulo-impuestos": { title: "Impôts en Suisse : fédéral, cantonal et communal", description: "Comprendre le système de triple imposition en Suisse.", category: "Système Fiscal", summary: "En Suisse, vous payez des impôts à 3 niveaux." },
    "articulo-seguros-sociales": { title: "Assurances sociales : AVS, AI, LPP et Chômage", description: "Aperçu des assurances sociales suisses : 1er pilier (AVS), 2ème pilier (LPP) et chômage.", category: "Travail", summary: "Le système de retraite suisse repose sur 3 piliers." },
    "articulo-salarios": { title: "Salaires en Suisse par secteur et région", description: "Découvrez le salaire moyen en Suisse, les différences cantonales et le Salarium.", category: "Marché du Travail", summary: "La Suisse a des salaires très élevés mais des coûts proportionnels." },
    "articulo-contratos": { title: "Contrats de travail en Suisse : droits et obligations", description: "Tout sur le contrat de travail suisse (CDI, CDD) et les vacances légales.", category: "Contrats", summary: "Le marché du travail est très libéral. Le licenciement est libre." },
    "articulo-periodo-prueba": { title: "Période d'essai et délais de congé en Suisse", description: "Connaissez vos droits pendant la période d'essai et les délais de préavis.", category: "Travail", summary: "La période d'essai standard est de 1 à 3 mois." },
    "articulo-buscar-empleo": { title: "Recherche d'emploi : plateformes et stratégies", description: "Où chercher du travail, comment faire votre CV suisse et les principaux portails.", category: "Candidatures", summary: "Le CV suisse doit inclure une photo et date de naissance." },
    "articulo-alquiler": { title: "Louer un appartement : le processus", description: "Documents nécessaires (poursuites) et le dossier pour obtenir un appartement.", category: "Contrat de Location", summary: "Le marché est très compétitif. Il vous faut un dossier impeccable." },
    "articulo-fianzas": { title: "Garanties de loyer et droits des locataires", description: "Fonctionnement des garanties de loyer (SwissCaution) et de l'ASLOCA.", category: "Logement", summary: "La garantie maximale légale est de 3 mois de loyer." },
    "articulo-costo-vida": { title: "Coût de la vie en Suisse : logement, nourriture, impôts", description: "Exemple de budget mensuel détaillé. Est-ce cher de vivre en Suisse ?", category: "Coût de la Vie", summary: "Un salaire de 5000 CHF peut sembler élevé, mais les frais fixes sont importants." },
    "articulo-frontaliers": { title: "Travailleurs frontaliers : règles et fiscalité", description: "Tout ce qu'il faut savoir si vous vivez en France/Allemagne et travaillez en Suisse.", category: "Frontaliers", summary: "Le permis G vous permet de vivre en France et travailler en Suisse." },
    "articulo-diplomas": { title: "Reconnaissance des diplômes étrangers en Suisse", description: "Comment valider votre diplôme universitaire ou professionnel (SEFRI, Croix-Rouge).", category: "Démarches Administratives", summary: "Seules les professions réglementées nécessitent une reconnaissance." },
    "articulo-sistema-escolar": { title: "Le système scolaire en Suisse expliqué", description: "Guide sur le fonctionnement de l'école en Suisse et les filières.", category: "Famille", summary: "Le système scolaire oriente les élèves tôt vers l'apprentissage." },
    "articulo-sistema-salud": { title: "Système de santé : médecins et urgences", description: "Trouver un médecin, fonctionner des urgences et payer les factures médicales.", category: "Réseau Médical", summary: "Évitez les urgences pour les maux mineurs, privilégiez les permanences." },
    "articulo-transporte": { title: "Transports publics : CFF, Demi-tarif et AG", description: "La Suisse possède le réseau de trains le plus dense. Découvrez les abonnements.", category: "Transports Publics", summary: "L'abonnement Demi-tarif est presque obligatoire pour tout résident." },
    "articulo-ciudadania": { title: "Citoyenneté suisse et naturalisation", description: "Exigences pour obtenir le passeport suisse. Années de résidence et examen.", category: "Démarches Administratives", summary: "La naturalisation nécessite 10 ans de résidence et un permis C." }
  },
  de: {
    "articulo-registro": { title: "Anmeldung bei der Ankunft in der Schweiz", description: "Schritt-für-Schritt-Anleitung zur Anmeldung in Ihrer neuen Gemeinde.", category: "Erste Schritte", summary: "Sie müssen sich innerhalb der ersten 14 Tage in Ihrer Gemeinde anmelden." },
    "articulo-lamal": { title: "Krankenversicherung in der Schweiz (KVG)", description: "Die Krankenversicherung ist obligatorisch. Wie die Grundversicherung funktioniert.", category: "Krankenversicherung", summary: "Die KVG ist obligatorisch und privat. Sie haben 3 Monate Zeit dafür." },
    "articulo-impuestos": { title: "Steuern in der Schweiz: Bund, Kantone und Gemeinden", description: "Verstehen Sie das dreistufige Steuersystem der Schweiz.", category: "Steuersystem", summary: "In der Schweiz zahlen Sie Steuern auf 3 Ebenen." },
    "articulo-seguros-sociales": { title: "Sozialversicherungen: AHV, IV, BVG und ALV", description: "Übersicht über das schweizerische Sozialversicherungssystem.", category: "Arbeit", summary: "Das Rentensystem basiert auf 3 Säulen." },
    "articulo-salarios": { title: "Löhne in der Schweiz nach Branche und Region", description: "Entdecken Sie den Durchschnittslohn, kantonale Unterschiede und den Salarium.", category: "Arbeitsmarkt", summary: "Die Schweiz hat sehr hohe Gehälter, aber auch entsprechende Lebenshaltungskosten." },
    "articulo-contratos": { title: "Arbeitsverträge in der Schweiz: Rechte und Pflichten", description: "Alles über den Schweizer Arbeitsvertrag und gesetzliche Ferien.", category: "Verträge", summary: "Der Arbeitsmarkt ist sehr liberal. Kündigungen sind einfach." },
    "articulo-periodo-prueba": { title: "Probezeit und Kündigungsfristen", description: "Kennen Sie Ihre Rechte während der Probezeit und der Kündigungsfrist.", category: "Arbeit", summary: "Die reguläre Probezeit beträgt 1 bis 3 Monate." },
    "articulo-buscar-empleo": { title: "Jobsuche: Plattformen und Strategien", description: "Wo Sie Jobs finden und wie Sie Ihren Schweizer Lebenslauf erstellen.", category: "Bewerbungen", summary: "Ein Schweizer Lebenslauf sollte ein Foto und das Geburtsdatum enthalten." },
    "articulo-alquiler": { title: "Wohnung mieten: Der Prozess", description: "Benötigte Dokumente (Betreibungsauszug) für Ihre Bewerbung.", category: "Mietvertrag", summary: "Der Wohnungsmarkt ist umkämpft. Sie brauchen ein perfektes Dossier." },
    "articulo-fianzas": { title: "Mietkaution und Mieterrechte", description: "Wie Mietkautionsversicherungen (SwissCaution) und der Mieterverband funktionieren.", category: "Wohnen", summary: "Die gesetzliche MaximalKaution beträgt 3 Monatsmieten." },
    "articulo-costo-vida": { title: "Lebenshaltungskosten in der Schweiz", description: "Ein detailliertes Schweizer Monatsbudget. Ist das Leben in der Schweiz teuer?", category: "Lebenshaltungskosten", summary: "Ein Gehalt von 5000 CHF kann nach Abzug der Fixkosten knapp werden." },
    "articulo-frontaliers": { title: "Grenzgänger: Regeln und Steuern", description: "Alles, was Sie wissen müssen, wenn Sie im Ausland leben und in der Schweiz arbeiten.", category: "Grenzgänger", summary: "Die Ausweis G erlaubt es Ihnen in der Schweiz zu arbeiten." },
    "articulo-diplomas": { title: "Anerkennung ausländischer Diplome", description: "So lassen Sie Ihren Universitäts- oder Berufsabschluss anerkennen (SBFI).", category: "Verwaltungsverfahren", summary: "Nur für reglementierte Berufe ist eine offizielle Anerkennung Pflicht." },
    "articulo-sistema-escolar": { title: "Das Schweizer Schulsystem erklärt", description: "Leitfaden zum Schweizer Schulsystem und der dualen Berufsbildung.", category: "Familie", summary: "Das Schulsystem leitet Schüler oft früh in die Berufsbildung." },
    "articulo-sistema-salud": { title: "Gesundheitssystem: Ärzte und Notfälle", description: "Wie Sie Gesundheitsleistungen nutzen und Rechnungen bezahlen.", category: "Medizinisches Netzwerk", summary: "Vermeiden Sie Notaufnahmen für leichte Beschwerden." },
    "articulo-transporte": { title: "Öffentlicher Verkehr: SBB, Halbtax und GA", description: "Das dichteste Zugnetz der Welt. Abonnemente erklärt.", category: "Öffentlicher Verkehr", summary: "Das Halbtax-Abo ist für Anwohner fast zwingend erforderlich." },
    "articulo-ciudadania": { title: "Schweizer Bürgerrecht und Einbürgerung", description: "Voraussetzungen für den Schweizer Pass: Aufenthaltsdauer und Integrationstest.", category: "Verwaltungsverfahren", summary: "Die Einbürgerung erfordert 10 Jahre Aufenthalt und einen Ausweis C." }
  },
  en: {
    "articulo-registro": { title: "How to register upon arrival in Switzerland", description: "Step-by-step guide to registering in your new commune.", category: "Initial Steps", summary: "You must legally register in your commune within the first 14 days." },
    "articulo-lamal": { title: "Health insurance in Switzerland (LAMal)", description: "Health insurance is mandatory. Discover how basic insurance works.", category: "Health Insurance", summary: "LAMal is mandatory and private. You have 3 months to arrange it." },
    "articulo-impuestos": { title: "Taxes in Switzerland: federal, cantonal, and communal", description: "Understand the three-tier tax system in Switzerland.", category: "Tax System", summary: "In Switzerland, you pay taxes at 3 different levels." },
    "articulo-seguros-sociales": { title: "Social Security: AVS, LPP, and Unemployment", description: "Breakdown of the Swiss social security system and pension pillars.", category: "Work", summary: "The Swiss pension system is based on 3 pillars." },
    "articulo-salarios": { title: "Salaries in Switzerland by sector and region", description: "Discover the average Swiss salary and use the Salarium calculator.", category: "Job Market", summary: "Switzerland has high salaries but living costs to match." },
    "articulo-contratos": { title: "Employment contracts in Switzerland: rights & obligations", description: "Everything about Swiss employment contracts and legal holidays.", category: "Contracts", summary: "The labor market is very liberal, with flexible termination periods." },
    "articulo-periodo-prueba": { title: "Probationary period and notice periods", description: "Know your rights during probation and standard notice periods.", category: "Work", summary: "The standard probation period is between 1 and 3 months." },
    "articulo-buscar-empleo": { title: "Job searching: Platforms and Strategies", description: "Where to find jobs and how to customize your CV for Switzerland.", category: "Applications", summary: "A Swiss-style CV should include a photo and date of birth." },
    "articulo-alquiler": { title: "Renting an apartment: the process", description: "Required documents (debt extract) to score a Swiss rental.", category: "Rental Contract", summary: "The rental market is competitive; you need a flawless application." },
    "articulo-fianzas": { title: "Rental deposits and tenant rights", description: "How rental guarantees work (SwissCaution) and tenant associations.", category: "Housing", summary: "The maximum legal deposit is 3 months' rent." },
    "articulo-costo-vida": { title: "Cost of living in Switzerland", description: "A detailed monthly Swiss budget example.", category: "Cost of Living", summary: "A 5000 CHF salary can be tight after taxes, insurance, and rent." },
    "articulo-frontaliers": { title: "Cross-border workers (frontaliers): rules & taxes", description: "Everything you need to know if you live in France/Germany and work in Switzerland.", category: "Cross-border", summary: "The G permit allows you to live abroad and work in Switzerland." },
    "articulo-diplomas": { title: "Recognition of foreign diplomas", description: "How to validate your university or professional degree in Switzerland.", category: "Ordinary Procedures", summary: "Only regulated professions require mandatory recognition." },
    "articulo-sistema-escolar": { title: "The Swiss school system explained", description: "Guide on how schools work in Switzerland and early tracking.", category: "Family", summary: "The school system often steers students into vocational training." },
    "articulo-sistema-salud": { title: "Healthcare system: doctors and emergencies", description: "Finding a GP and understanding how to pay your medical bills.", category: "Medical Network", summary: "Avoid hospitals for minor ailments; visit standard clinics instead." },
    "articulo-transporte": { title: "Public transport: SBB, Halbtax and GA", description: "Discover the world's best dense train network and travel passes.", category: "Public Transport", summary: "The Half-Fare card is almost mandatory for any resident." },
    "articulo-ciudadania": { title: "Swiss Citizenship and Naturalization", description: "Requirements to obtain the Swiss passport, language levels, and exams.", category: "Ordinary Procedures", summary: "Naturalization requires 10 years of residency and a C Permit." }
  },
  it: {
    "articulo-registro": { title: "Come registrarsi all'arrivo in Svizzera", description: "Guida passo passo alla registrazione nel tuo nuovo comune.", category: "Primi Passi", summary: "Devi registrarti nel tuo comune entro i primi 14 giorni." },
    "articulo-lamal": { title: "Assicurazione sanitaria in Svizzera (LAMal)", description: "L'assicurazione sanitaria è obbligatoria. Scopri come funziona la LAMal.", category: "Assicurazione Sanitaria", summary: "La LAMal è obbligatoria e privata. Hai 3 mesi per attivarla." },
    "articulo-impuestos": { title: "Imposte in Svizzera: federali, cantonali e comunali", description: "Comprendere il sistema di tripla imposizione in Svizzera.", category: "Sistema Fiscale", summary: "In Svizzera, si pagano le tasse a 3 livelli." },
    "articulo-seguros-sociales": { title: "Assicurazioni sociali: AVS, LPP e Disoccupazione", description: "Ripartizione del sistema di sicurezza sociale svizzero.", category: "Lavoro", summary: "Il sistema pensionistico svizzero si basa su 3 pilastri." },
    "articulo-salarios": { title: "Salari in Svizzera per settore e regione", description: "Scopri il salario medio svizzero e utilizza il calcolatore Salarium.", category: "Mercato del Lavoro", summary: "La Svizzera ha stipendi elevati ma costi di vita proporzionati." },
    "articulo-contratos": { title: "Contratti di lavoro in Svizzera: diritti e doveri", description: "Tutto sui contratti di lavoro e sulle ferie legali in Svizzera.", category: "Contratti", summary: "Il mercato del lavoro è molto liberale. Il licenziamento è flessibile." },
    "articulo-periodo-prueba": { title: "Periodo di prova e termini di preavviso", description: "Conosci i tuoi diritti durante la prova e i preavvisi standard.", category: "Lavoro", summary: "Il periodo di prova standard è di 1 a 3 mesi." },
    "articulo-buscar-empleo": { title: "Ricerca di un lavoro: piattaforme e strategie", description: "Dove cercare lavoro e come creare un CV in stile svizzero.", category: "Candidature", summary: "Un CV svizzero dovrebbe includere una foto e la data di nascita." },
    "articulo-alquiler": { title: "Affittare un appartamento: il processo", description: "Documenti necessari (estratto debiti) per ottenere un affitto.", category: "Contratto di Affitto", summary: "Il mercato degli affitti è competitivo; serve un dossier impeccabile." },
    "articulo-fianzas": { title: "Depositi cauzionali e diritti degli inquilini", description: "Come funzionano le garanzie d'affitto (SwissCaution) e l'ASLOCA.", category: "Alloggi", summary: "Il deposito massimo legale è pari a 3 mesi di affitto." },
    "articulo-costo-vida": { title: "Costo della vita in Svizzera", description: "Un esempio dettagliato di budget mensile svizzero.", category: "Costo della Vita", summary: "Uno stipendio di 5000 CHF può essere limitato dopo le spese fisse." },
    "articulo-frontaliers": { title: "Lavoratori frontalieri: regole e fiscalità", description: "Tutto ciò che devi sapere se vivi in Italia/Francia e lavori in Svizzera.", category: "Frontalieri", summary: "Il permesso G ti permette di vivere all'estero e lavorare in Svizzera." },
    "articulo-diplomas": { title: "Riconoscimento dei diplomi stranieri", description: "Come far riconoscere la tua laurea o qualifica professionale.", category: "Procedure Ordinarie", summary: "Solo le professioni regolamentate richiedono il riconoscimento." },
    "articulo-sistema-escolar": { title: "Il sistema scolastico svizzero spiegato", description: "Guida su come funziona la scuola e la formazione duale in Svizzera.", category: "Famiglia", summary: "Il sistema scolastico indirizza spesso presto verso la formazione professionale." },
    "articulo-sistema-salud": { title: "Rete sanitaria: medici e urgenze", description: "Trovare un medico e capire come pagare le fatture mediche.", category: "Rete Medica", summary: "Evita gli ospedali per i disturbi minori, vai alle guardie mediche." },
    "articulo-transporte": { title: "Trasporti pubblici: FFS, Metà-presso e AG", description: "La rete ferroviaria più fitta d'Europa. Abbonamenti spiegati.", category: "Trasporto Pubblico", summary: "L'abbonamento Metà-prezzo è quasi obbligatorio per i residenti." },
    "articulo-ciudadania": { title: "Cittadinanza svizzera e naturalizzazione", description: "Requisiti per ottenere il passaporto svizzero e gli esami.", category: "Procedure Ordinarie", summary: "La naturalizzazione richiede 10 anni di residenza e un Permesso C." }
  }
};

const langs = ['fr', 'de', 'en', 'it'];

langs.forEach(lang => {
    let filePath = `content-articles-${lang}.js`;
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    const t = translations[lang];
    // Replace titles, descriptions, categories, and summaries based on keys
    for (const [key, trans] of Object.entries(t)) {
        // Regex to replace title
        let regex = new RegExp(`("${key}":\\s*\\{[\\s\\S]*?title:\\s*")[^"]+(")`, 'g');
        content = content.replace(regex, `$1${trans.title}$2`);

        // Regex to replace description
        regex = new RegExp(`("${key}":\\s*\\{[\\s\\S]*?description:\\s*")[^"]+(")`, 'g');
        content = content.replace(regex, `$1${trans.description}$2`);

        // Regex to replace category
        regex = new RegExp(`("${key}":\\s*\\{[\\s\\S]*?category:\\s*['"])[^'"]+(['"])`, 'g');
        content = content.replace(regex, `$1${trans.category}$2`);

        // Regex to replace summary
        regex = new RegExp(`("${key}":\\s*\\{[\\s\\S]*?summary:\\s*['"])[^'"]+(['"])`, 'g');
        content = content.replace(regex, `$1${trans.summary}$2`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log("Translations applied successfully.");
