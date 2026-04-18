(function() {
/**
 * content-articles.js
 * Contains the 20 SEO optimized deep-dive articles.
 */

window.siteContent = window.siteContent || {};
window.siteContent.fr = window.siteContent.fr || { global: {}, pages: {}, articles: {} };

window.siteContent.fr.articles = {
	    // 1. Permisos de residencia
    "articulo-permisos": {
        title: "Autorisations de séjour en Suisse : L, B, C et différences",
        description: "Tout sur les autorisations suisses pour résidents étrangers. Découvrez les différences entre permis L, B et C.",
        keywords: "autorisations Suisse, permis L, permis B, permis C, vivre en Suisse, SEM",
        category: 'Démarches Ordinaires',
        hub: 'tramites',
        slug: "tramites-llegada-suiza",
        readingTime: 12,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/tramites-llegada-suiza.jpg",
        imageAlt: "Liste de vérification d'arrivée avec documents, clés et cartes suisses",
        summary: "Il existe trois autorisations principales (L, B, C). Votre nationalité (UE vs Pays tiers) et la durée de votre contrat déterminent celle que vous recevez. Vous pouvez travailler avant d'avoir la carte physique.",
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>Si vous allez vivre en Suisse, vous avez besoin d'un <strong>titre de séjour</strong> (autorisation). Pour les Espagnols et autres citoyens UE/AELE, le processus est généralement relativement direct si vous avez une raison claire de résider (par exemple, un contrat de travail). Pour les ressortissants de pays tiers, le système est différent et exige normalement des autorisations préalables et des conditions plus strictes.</p>

                <div class="callout info">
                    <strong>Le plus important d'abord :</strong> en Suisse, l'autorisation physique (la carte) peut prendre des semaines. En pratique, avec le <strong>justificatif/certificat d'enregistrement</strong> de la commune, vous pouvez normalement commencer à travailler et avancer dans vos démarches en attendant l'arrivée de la carte.
                </div>

                <h2>Comment fonctionne le système</h2>
                <p>L'autorisation ne se « demande » pas par internet de manière centralisée. Dans la plupart des cas, le flux réel est :</p>
                <ol>
                    <li><strong>Adresse en Suisse</strong> (location, sous-location, logement temporaire).</li>
                    <li><strong>Enregistrement à la commune</strong> (Contrôle des habitants / Einwohnerkontrolle).</li>
                    <li>Le dossier passe à l'<strong>autorité cantonale</strong> compétente (migration).</li>
                    <li>Vous recevez un certificat et ensuite la <strong>carte</strong> par courrier.</li>
                </ol>
                <p>Le détail des documents et délais <strong>varie selon le canton et la commune</strong> (rendez-vous préalable, frais, conditions de photo, etc.). La logique générale, cependant, est la même.</p>

                <h2>Conditions et règles</h2>
                <h3>Documents typiques pour l'enregistrement</h3>
                <p>Pour lancer le processus, on vous demandera généralement (selon le canton et votre situation) :</p>
                <ul>
                    <li>Carte d'identité/passeport.</li>
                    <li><strong>Raison de la résidence :</strong> contrat de travail, admission à des études, ou documentation de moyens propres.</li>
                    <li>Contrat de location ou <strong>certificat de logement</strong> si vous logez chez quelqu'un.</li>
                    <li>Photo de type passeport (parfois ils la font sur place).</li>
                    <li>État civil et documents familiaux le cas échéant.</li>
                </ul>
                <p>À l'enregistrement, il y a généralement une <strong>taxe administrative</strong> qui varie selon le canton et le type d'autorisation.</p>

                <h3>Quelle autorisation vous correspond (vision pratique)</h3>
                <p>Les autorisations les plus courantes pour les nouveaux arrivants sont :</p>
                <ul>
                    <li><strong>Permis L</strong> : séjour court/temporaire (souvent lié à un contrat de moins de 12 mois).</li>
                    <li><strong>Permis B</strong> : résidence (très habituel avec contrat d'au moins 12 mois ou indéterminé pour UE/AELE).</li>
                    <li><strong>Permis C</strong> : établissement (plus stable ; arrive généralement après plusieurs années de résidence régulière).</li>
                    <li><strong>Permis G</strong> : frontalier (vous vivez en dehors de la Suisse et travaillez en Suisse).</li>
                </ul>

                <h3>Tableau comparatif rapide</h3>
                <p>En Suisse, il existe plusieurs autorisations de séjour pour les citoyens de l'Union européenne.<br>
                Les plus courantes sont le permis L, le permis B et le permis C.<br>
                Chacun correspond à une situation différente selon le type de contrat et la durée du séjour.<br>
                Le tableau suivant résume leurs caractéristiques principales. Si vous planifiez votre déménagement, consultez aussi <a href="#/mudarse-a-suiza-desde-espana">le guide étape par étape</a>.</p>
                <table class="info-table">
                    <thead><tr><th>Permis</th><th>Pour qui (typique)</th><th>Durée</th><th>Remarques</th></tr></thead>
                    <tbody>
                        <tr><td><strong>L</strong></td><td>Contrat temporaire</td><td>Liée au contrat</td><td>Plus de restrictions ; dépend du cas/canton</td></tr>
                        <tr><td><strong>B</strong></td><td>Résidence avec travail/études</td><td>Généralement plusieurs années</td><td>Impôt à la source fréquent au début</td></tr>
                        <tr><td><strong>C</strong></td><td>Établissement</td><td>Renouvelable</td><td>Stabilité administrative accrue</td></tr>
                        <tr><td><strong>G</strong></td><td>Frontaliers</td><td>Généralement plusieurs années</td><td>Règles fiscales spéciales selon les accords</td></tr>
                    </tbody>
                </table>
                <div class="callout info">
                    <strong>Conseil pratique</strong>
                    <p>Avec un permis L, il peut être plus difficile de louer un logement auprès d'une agence immobilière. Beaucoup d'agences préfèrent les locataires avec un permis B ou un contrat de travail indéterminé.</p>
                </div>

                <h3>Liens utiles</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                </ul>

                <h3>Délais, frais et certificat provisoire</h3>
                <p>En pratique, ce qui déverrouille votre vie administrative est l'<strong>enregistrement à la commune</strong>. Quand vous vous enregistrez, de nombreuses communes vous remettent un <strong>certificat provisoire</strong> (ou justificatif) qui suffit en attendant l'arrivée de la carte. Ce document est généralement suffisant pour :</p>
                <ul>
                    <li>Commencer à travailler (votre employeur connaît généralement le processus).</li>
                    <li>Ouvrir un compte bancaire.</li>
                    <li>Contracter des services essentiels et avancer dans d'autres démarches.</li>
                </ul>
                <p>Les <strong>frais</strong> varient selon le canton et le type d'autorisation. Il est normal de payer une somme modérée à l'enregistrement et parfois de payer séparément pour la photo/biométrie si ce n'est pas fait au bureau.</p>

                <h3>Renouvellement et changements (domicile, emploi, situation familiale)</h3>
                <p>La vraie vie change et l'autorisation « suit » ces changements :</p>
                <ul>
                    <li><strong>Changement de domicile :</strong> quand vous déménagez, vous devez vous dés inscrire/réinscrire selon la commune (et dans le délai imparti). Ce n'est pas un détail : en Suisse, le domicile est une pièce centrale.</li>
                    <li><strong>Changement d'employeur :</strong> avec les permis UE/AELE, il y a généralement de la mobilité, mais l'obligation de notifier ou de mettre à jour peut dépendre du canton et du type d'autorisation.</li>
                    <li><strong>Changement d'état civil / enfants :</strong> cela impacte les démarches et souvent la fiscalité. Tenez votre documentation à jour.</li>
                </ul>

                <h3>Famille (regroupement familial) en deux lignes</h3>
                <p>Si vous arrivez en couple avec enfants, ou si vous voulez les amener après, l'administration regardera surtout :</p>
                <ul>
                    <li><strong>Revenus suffisants</strong> (selon le canton et la taille du foyer).</li>
                    <li><strong>Logement adéquat</strong> (nombre de chambres/espace).</li>
                    <li><strong>Documentation</strong> (certificats avec apostille/traduction si applicable).</li>
                </ul>
                <p>En règle pratique, préparez ces papiers <strong>avant</strong> de venir si possible : certificats de naissance et de mariage, et traductions si nécessaire.</p>

                <h2>Exemples concrets</h2>
                <h3>Exemple 1 – Vous arrivez avec un contrat indéterminé</h3>
                <p>Vous vous enregistrez à la commune avec carte d'identité + contrat + adresse. Vous payez les frais, recevez un certificat provisoire et pouvez commencer à travailler. Avec ce certificat, vous pouvez généralement ouvrir un compte bancaire et contracter l'assurance maladie.</p>

                <h3>Exemple 2 – Vous arrivez sans contrat (UE/AELE)</h3>
                <p>Dans certains cas, vous pouvez vous enregistrer en prouvant les <strong>moyens financiers</strong> et la couverture médicale. La difficulté pratique est que, sans contrat, la location et la banque peuvent être plus compliquées. C'est un scénario qui nécessite une planification financière réaliste.</p>

                <h3>Exemple 3 – Vous perdez votre emploi avec Permis B</h3>
                <p>Perdre son emploi n'implique pas automatiquement « perdre le permis », mais vous devez agir correctement : inscrivez-vous au RAV si applicable, cherchez activement du travail et maintenez votre enregistrement à jour. À ce stade, il est bon de consulter <a href="#/rav-paro-suiza">RAV et chômage en Suisse</a>.</p>

                <h3>Exemple 4 – Vous arrivez comme étudiant</h3>
                <p>À l'enregistrement, on vous demandera une preuve d'admission/d'inscription et, le cas échéant, les <strong>moyens financiers</strong> pour votre séjour. En tant qu'étudiant, vous voudrez aussi planifier l'assurance maladie et confirmer s'il y a des règles spécifiques (certaines situations ont des exceptions ou des procédures cantonales).</p>

                <h3>Exemple 5 – Vous êtes frontalier/ère (Permis G)</h3>
                <p>Si vous vivez en France/Allemagne/Italie et travaillez en Suisse, le permis G fonctionne avec ses propres règles et des implications fiscales importantes. Ne le traitez pas comme « un B mais en vivant dehors » : consultez votre situation auprès de sources officielles et, si nécessaire, cherchez des conseils fiscaux.</p>

                <h2>Erreurs courantes</h2>
                <ul>
                    <li><strong>Attendre d'avoir un logement définitif :</strong> si vous êtes en logement temporaire, enregistrez-vous et mettez à jour l'adresse plus tard.</li>
                    <li><strong>Supposer que tout est pareil dans tous les cantons :</strong> les délais, rendez-vous et documents changent.</li>
                    <li><strong>Ne pas préparer de documents familiaux :</strong> les certificats (naissance/mariage) peuvent prendre du temps à obtenir ; si vous arrivez en famille, préparez-les avec marge.</li>
                    <li><strong>Ne pas connecter l'autorisation aux autres obligations :</strong> LAMal, impôts et changements de domicile suivront.</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Réservez un rendez-vous (si applicable) à la commune dès que vous avez une adresse.</li>
                    <li>Apportez des copies imprimées et numériques de tout.</li>
                    <li>Si vous déménagez, faites le changement de domicile dans le délai imparti.</li>
                    <li>Si vous arrivez en famille, préparez les certificats (naissance/mariage) avec marge : apostille et traductions peuvent prendre du temps.</li>
                    <li>Pour votre « premier mois », utilisez le guide : <a href="#/tramites-llegada-suiza">Liste de vérification des démarches</a>.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.sem.admin.ch/sem/es/home/themen/aufenthalt.html" target="_blank" rel="noopener noreferrer">SEM – Résidence / Aufenthalt</a></li>
                    <li><a href="https://www.ch.ch" target="_blank" rel="noopener noreferrer">ch.ch – Portail officiel suisse</a></li>
                    <li>Autorités cantonales de migration (site du canton où vous résidez).</li>
                </ul>
            </div>
        `
    },

    "articulo-mudarse-suiza": {
        title: "S'installer en Suisse depuis l'Espagne : guide étape par étape",
        description: "Checklist pratique pour s'installer en Suisse depuis l'Espagne : emploi, inscription, permis, assurance, logement et budget.",
        keywords: "s'installer en suisse depuis l'espagne, vivre en suisse en tant qu'espagnol, déménager en suisse",
        category: 'Démarches',
        hub: 'tramites',
        slug: "s-installer-en-suisse-guide-etape-par-etape",
        readingTime: 5,
        featuredImage: "media/guides/mudarse-a-suiza-desde-espana.jpg",
        imageAlt: "Vue de deux personnes marchant dans une ville suisse avec leurs bagages, symbolisant le début d'une nouvelle vie",
        summary: "Les étapes clés pour venir vivre en Suisse : de la recherche d'emploi à l'inscription à la commune et la souscription d'une assurance maladie.",
        content: `
            <div class="article-content">
                <p>Beaucoup d'Espagnols souhaitent vivre ou travailler en Suisse pour ses salaires élevés, sa stabilité et sa qualité de vie. Ce guide résume les <strong>étapes principales</strong> pour réussir votre installation.</p>

                <h2>1) Avant de partir</h2>
                <ul>
                    <li><strong>Recherche d'emploi :</strong> Comprendre le marché local selon votre secteur et la langue du canton.</li>
                    <li><strong>Dossier de candidature :</strong> Préparer un CV aux normes suisses (avec photo, certificats et références).</li>
                    <li><strong>Économies :</strong> Prévoir un budget pour les premiers mois (loyer, caution, assurance).</li>
                </ul>
                <div class="callout info">
                    <strong>Conseil pratique</strong>
                    <p>Il est souvent plus facile de trouver un emploi si vous êtes déjà sur place ou si vous pouvez vous déplacer rapidement pour un entretien.</p>
                </div>

                <h2>2) À votre arrivée</h2>
                <ul>
                    <li><strong>Logement provisoire :</strong> Trouver une adresse pour pouvoir s'inscrire à la commune.</li>
                    <li><strong>Contrôle des habitants :</strong> S'enregistrer auprès de la commune de résidence sous 14 jours.</li>
                    <li><strong>Permis de séjour :</strong> Demander le titre de séjour correspondant à votre situation (L ou B).</li>
                </ul>

                <h2>3) Santé et assurance maladie</h2>
                <p>L'assurance maladie est <strong>obligatoire</strong> pour toute personne résidant en Suisse. Vous disposez de 3 mois après votre arrivée pour choisir une caisse maladie (LAMal).</p>

                <h2>4) Recherche de logement principal</h2>
                <p>La concurrence est rude, surtout dans les grandes villes. Préparez un dossier complet : copie du permis de séjour, attestation de non-poursuite et fiches de salaire.</p>

                <h2>5) Budget indicatif mensuel</h2>
                <table class="info-table">
                    <thead>
                        <tr>
                            <th>Dépense</th>
                            <th>Fourchette</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Loyer (1,5 - 2,5 p.)</td>
                            <td>1'200 - 1'800 CHF</td>
                        </tr>
                        <tr>
                            <td>Assurance maladie</td>
                            <td>350 - 450 CHF</td>
                        </tr>
                        <tr>
                            <td>Alimentation</td>
                            <td>400 - 600 CHF</td>
                        </tr>
                        <tr>
                            <td>Transport</td>
                            <td>80 - 150 CHF</td>
                        </tr>
                    </tbody>
                </table>

                <div class="callout info">
                    <strong>Réussite</strong>
                    <p>Une bonne préparation est la clé d'une expatriation réussie. N'hésitez pas à consulter nos guides détaillés pour chaque étape.</p>
                </div>

                <h3>Liens utiles</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch (Portail officiel)</a></li>
                    <li><a href="https://www.comparis.ch/" target="_blank" rel="noopener noreferrer">Comparis (Assurances et Logement)</a></li>
                </ul>
            </div>
            `
    },

    "articulo-registro": {
        title: "Inscription à la commune suisse : Le Contrôle des Habitants",
        description: "Quels documents sont nécessaires pour s'enregistrer en Suisse, les délais légaux et des conseils pratiques pour votre inscription initiale.",
        keywords: "inscription commune suisse, contrôle des habitants, vivre en suisse, enregistrement suisse",
        category: 'Démarches',
        hub: 'tramites',
        slug: "inscription-commune-suisse",
        readingTime: 3,
        featuredImage: "media/guides/registrarse-en-suiza.jpg",
        imageAlt: "Façade d'un bâtiment administratif d'une commune suisse avec le panneau Contrôle des habitants",
        summary: "L'enregistrement officiel est la première étape à votre arrivée. Vous avez généralement 14 jours pour vous inscrire après votre arrivée ou avant de commencer à travailler.",
        content: `
            <div class="article-content">
                <p>L'<strong>inscription à la commune</strong> (<i>Contrôle des habitants / Einwohnerkontrolle</i>) est la démarche qui officialise votre résidence en Suisse. C'est l'étape qui déclenche tout le reste : permis, assurance maladie, impôts et services communaux.</p>

                <h2>Délais et obligations</h2>
                <div class="callout warning">
                    <strong>Règle d'or</strong>
                    <p>Vous devez vous inscrire dans votre commune de résidence dans les <strong>14 jours</strong> suivant votre arrivée et, dans tous les cas, <strong>avant votre premier jour de travail</strong>.</p>
                </div>

                <h2>Documents nécessaires</h2>
                <p>Bien que les exigences puissent varier légèrement entre les cantons (et même les communes), vous aurez généralement besoin de :</p>
                <ul>
                    <li><strong>Document d'identité :</strong> Passeport ou carte d'identité en vigueur.</li>
                    <li><strong>Contrat de travail :</strong> Ou preuve de ressources suffisantes si vous ne travaillez pas.</li>
                    <li><strong>Contrat de bail :</strong> Ou une attestation de l'hébergeur si vous vivez chez un particulier.</li>
                    <li><strong>Photos d'identité :</strong> Souvent demandées pour le dossier du permis de séjour.</li>
                    <li><strong>État civil :</strong> Acte de naissance, certificat de mariage ou de divorce (si applicable).</li>
                </ul>

                <h2>Étapes du processus</h2>
                <ol>
                    <li><strong>Se présenter en personne :</strong> Allez au bureau de la commune (certains demandent un rendez-vous préalable).</li>
                    <li><strong>Remplir le formulaire :</strong> Ils vous fourniront un formulaire d'arrivée.</li>
                    <li><strong>Payer les frais :</strong> L'inscription et la gestion du permis ont un coût administratif (variable entre 50 et 200 CHF environ).</li>
                    <li><strong>Attestation de domicile :</strong> Une fois inscrit, demandez une attestation. Elle vous servira à ouvrir un compte bancaire ou souscrire une assurance.</li>
                </ol>

                <div class="callout info">
                    <strong>Bon à savoir</strong>
                    <p>La carte physique de votre permis de séjour n'arrive pas immédiatement. Elle est envoyée par courrier quelques semaines après votre passage à la commune.</p>
                </div>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Vérifiez les horaires d'ouverture sur le site web de votre commune.</li>
                    <li>Si vous changez de commune à l'avenir, vous devrez vous "désinscrire" de l'actuelle et vous inscrire dans la nouvelle.</li>
                </ul>
            </div>
            `
    },

    "articulo-lamal": {
        title: "Assurance maladie en Suisse (LAMal) : comment ça marche",
        description: "L'assurance maladie est obligatoire en Suisse. Découvrez comment fonctionne la LAMal ou l'assurance de base pour les résidents.",
        keywords: "assurance maladie suisse, LAMal, KVG, vivre en Suisse, système santé suisse",
        category: "Assurance Maladie",
        hub: "salud",
        slug: "assurance-maladie-suisse-lamal",
        readingTime: 12,
        featuredImage: "media/guides/seguro-medico-lamal-suiza.jpg",
        imageAlt: "Personne vérifiant sa carte d'assurance maladie suisse à côté de documents de la Krankenkasse",
        summary: "La LAMal est obligatoire et privée, l'État ne vous couvre pas automatiquement. Vous avez 3 mois pour faire les démarches, en payant les arriérés depuis le premier jour.",
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>L'une des plus grandes différences lors d'un déménagement en Suisse est que la santé ne fonctionne pas comme une "sécurité sociale automatique". La couverture médicale de base se contracte auprès d'un assureur privé, mais elle est réglementée par la loi : la <strong>LAMal</strong> (KVG en allemand). Dit simplement : <strong>elle est obligatoire, privée et standardisée</strong> en termes de couverture.</p>

                <div class="callout warning">
                    <strong>Délai critique :</strong> vous avez jusqu'à <strong>3 mois</strong> après votre arrivée/inscription pour souscrire l'assurance de base. La couverture est <strong>rétroactive</strong> : vous paierez les primes depuis le premier jour, même si vous la souscrivez tardivement.
                </div>

                <h2>Comment fonctionne le système</h2>
                <h3>1) Assurance de base (LAMal) vs complémentaires (LCA)</h3>
                <p>L'assurance <strong>de base</strong> couvre l'essentiel et sa couverture est identique selon la loi chez tous les assureurs. Les assurances <strong>complémentaires</strong> (LCA/VVG) couvrent les extras (par exemple, le dentaire, la chambre semi-privée/privée, les lunettes, etc.), mais elles ne sont pas obligatoirement acceptées : elles peuvent demander un questionnaire médical, imposer des exclusions ou refuser.</p>

                <h3>2) Ce que vous payez : prime, franchise et quote-part</h3>
                <p>En Suisse, être assuré ne signifie pas "tout inclus". Le coût se compose de :</p>
                <ul>
                    <li><strong>Prime mensuelle :</strong> paiement fixe (varie selon le canton/la commune, l'âge et le modèle choisi).</li>
                    <li><strong>Franchise :</strong> montant annuel que vous payez vous-même avant que l'assurance ne commence à rembourser.</li>
                    <li><strong>Quote-part (copago) :</strong> après la franchise, vous payez un pourcentage (avec un plafond annuel).</li>
                    <li><strong>Contribution hospitalière :</strong> en cas d'hospitalisation, un montant journalier s'applique généralement (adultes).</li>
                </ul>
                <p>Pour bien comprendre et choisir votre stratégie (franchise 300 vs 2500, etc.), lisez : <a href="#/franchise-et-quote-part-suisse">Franchise et quote-part</a>.</p>

                <h3>3) Modèles (libre choix, médecin de famille, télémédecine, HMO)</h3>
                <p>Une décision qui change beaucoup votre prime est le <strong>modèle</strong>. Dans certains modèles, vous devez d'abord appeler la télémédecine ou consulter votre médecin de famille avant d'aller chez un spécialiste. Si vous ne suivez pas les règles du modèle, vous pouvez perdre les remboursements. Pour beaucoup de nouveaux arrivants, le modèle bon marché fonctionne bien... si vous êtes discipliné.</p>

                <h3>4) Choisir et changer d'assureur (quand le faire)</h3>
                <p>Dans la LAMal, l'assurance de base se renouvelle et on peut changer de caisse selon les règles du calendrier. L'habitude est de comparer les primes en automne pour l'année suivante et de traiter le changement dans les délais. Les dates exactes et les conditions dépendent du produit et de l'année, suivez donc toujours les instructions officielles et les conditions de votre assureur.</p>

                <h3>5) Facturation : pourquoi on "paie d'abord" parfois</h3>
                <p>Il est très fréquent de recevoir des factures du médecin ou de l'hôpital. Selon le système de facturation, vous devrez peut-être payer vous-même puis demander le remboursement, ou l'assureur peut être facturé directement. Dans tous les cas, si vous n'avez pas atteint votre franchise, le coût est à votre charge. C'est pourquoi le système semble "cher" même en payant des primes mensuelles.</p>

                <h2>Conditions et règles</h2>
                <h3>1) Qui doit s'assurer</h3>
                <p>En général, toute personne résidant en Suisse doit être assurée. Il existe des exceptions et des règles spécifiques (par exemple, certains cas de frontaliers ou d'étudiants). Si votre cas est "spécial", confirmez par écrit auprès de votre canton ce qui s'applique.</p>

                <h3>2) Accidents : l'erreur la plus coûteuse</h3>
                <p>Si vous travaillez, il est possible que vous ayez une <strong>assurance accidents</strong> payée par l'employeur (parfois aussi pour les accidents non professionnels, selon votre temps de travail). Dans ce cas, vous pouvez normalement exclure la couverture accidents de l'assurance de base et baisser la prime. Si vous quittez votre emploi, vous devez <strong>réactiver</strong> les accidents dans votre LAMal pour ne pas rester sans couverture. Beaucoup de gens l'oublient juste au pire moment.</p>

                <h3>3) Réduction des primes (subside) et aides</h3>
                <p>Il existe un système de <strong>réduction des primes</strong> pour les personnes et les familles aux revenus modestes, géré au niveau cantonal (les règles, les seuils et le processus <strong>varient par canton</strong>). Si votre budget est serré, ce point est clé : beaucoup de gens ne le demandent pas par méconnaissance.</p>

                <h3>4) Ce que couvre l'assurance de base</h3>
                <p>La base couvre les soins médicaux nécessaires selon la réglementation. En termes pratiques, elle inclut généralement :</p>
                <ul>
                    <li>Consultations de médecine générale et spécialistes (selon le modèle/l'orientation).</li>
                    <li>Médicaments prescrits inclus dans les listes officielles.</li>
                    <li>Hospitalisation en <strong>division commune</strong> (généralement dans votre canton, sauf urgences ou règles spécifiques).</li>
                    <li>Maternité avec des conditions particulières.</li>
                </ul>

                <h3>5) Ce qu'elle ne couvre pas (ou de façon limitée)</h3>
                <ul>
                    <li><strong>Dentaire :</strong> la plupart des traitements dentaires de routine sont à votre charge ou via une complémentaire.</li>
                    <li><strong>Lunettes/lentilles :</strong> souvent avec des limites ou hors de la base.</li>
                    <li><strong>Chambre privée/semi-privée</strong> à l'hôpital : généralement via la complémentaire.</li>
                </ul>

                <h2>Exemples concrets</h2>
                <h3>Exemple 1 — Personne en bonne santé qui veut payer moins par mois</h3>
                <p>Si vous allez peu chez le médecin, il est courant de choisir une franchise élevée pour réduire la prime mensuelle. Le "risque" est que, si vous avez une urgence ou un traitement coûteux cette année-là, vous paierez plus au début.</p>

                <h3>Exemple 2 — Famille avec de jeunes enfants</h3>
                <p>Avec des enfants, les visites médicales sont plus fréquentes. Beaucoup de familles préfèrent des franchises plus basses pour avoir de la prévisibilité. Il convient aussi de choisir un modèle qui s'adapte à la pédiatrie et aux urgences.</p>

                <h3>Exemple 3 — Vous arrivez et ne souscrivez pas dans les délais</h3>
                <p>Si vous laissez passer les 3 mois, vous n'économisez pas les primes : on vous facturera rétroactivement depuis le premier jour et on pourra même vous assigner d'office à une caisse. Planifiez cette démarche durant le <a href="#/checklist-demarches-du-premier-mois-en-suisse">premier mois</a>.</p>

                <h3>Exemple 4 — Calcul du "pire cas annuel" (pour décider de la franchise)</h3>
                <p>Une façon pratique de choisir la franchise est de calculer votre "pire cas". Par exemple : si vous payez 350 CHF/mois de prime (4'200 CHF/an) et choisissez une franchise de 2'500 CHF, votre pire année peut ressembler à : prime annuelle + franchise + quote-part maximale. Cela vous donne un chiffre plafond pour votre budget. Ensuite, vous comparez avec le scénario d'une franchise à 300 (prime plus élevée, franchise plus basse) et décidez ce qui vous donne le plus de tranquillité.</p>

                <h2>Erreurs communes</h2>
                <ul>
                    <li><strong>Choisir uniquement par le prix :</strong> sans comprendre le modèle, vous pouvez finir par payer des factures non remboursées.</li>
                    <li><strong>Confondre base et complémentaire :</strong> le dentaire et la chambre privée ne sont pas inclus par défaut.</li>
                    <li><strong>Mal choisir la franchise :</strong> payer une prime basse ne compense pas si vous avez chaque année des dépenses médicales prévisibles.</li>
                    <li><strong>Ne pas ajuster les accidents en changeant d'emploi :</strong> vous doublez la couverture ou vous vous retrouvez sans la bonne.</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Comparez sur le portail officiel <a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo</a> (primes par canton/commune et modèles).</li>
                    <li>Calculez votre "pire cas annuel" : prime + franchise + quote-part, pour décider intelligemment.</li>
                    <li>Si vous allez souscrire des complémentaires (dentaire, etc.), il est généralement plus facile de le faire quand vous êtes en bonne santé et avant tout diagnostic.</li>
                    <li>Si votre budget est serré, vérifiez le sujet de la <strong>réduction des primes</strong> de votre canton (subside).</li>
                    <li>Connectez ce guide avec <a href="#/franchise-et-quote-part-suisse">franchise/quote-part</a> et le <a href="#/budget-suisse">coût de la vie</a>.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo — Comparateur officiel de primes</a></li>
                    <li><a href="https://www.bag.admin.ch/" target="_blank" rel="noopener noreferrer">OFSP / BAG — Office fédéral de la santé publique</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portail officiel suisse</a></li>
                </ul>
            </div>
        `
    },

    "articulo-franquicia": {
        title: "Franchise et quote-part dans le système de santé suisse",
        description: "Explication détaillée de la franchise et de la quote-part dans les assurances maladie suisses (LAMal).",
        keywords: "franchise LAMal, copago suisse, quote-part, assurance maladie",
        audience: 'resident',
        category: 'Coûts Médicaux',
        hub: 'salud',
        slug: "franchise-et-quote-part-suisse",
        readingTime: 4,
        featuredImage: "media/guides/franquicia-seguro-medico-suiza.jpg",
        imageAlt: "Image conceptuelle d'épargne et de santé dans le système suisse",
        summary: "En Suisse, vous payez 100 % des premiers frais médicaux jusqu'à couvrir la franchise choisie. Ensuite, vous payez une quote-part de 10 %.",
        content: `
            <div class="article-content">
                <p>Même après avoir payé vos primes mensuelles d'assurance de base (LAMal), vous êtes responsable d'une partie des frais médicaux générés. Ces dépenses sont divisées en Franchise et Quote-part (copago).</p>

                <h2>La Franchise (Franchise)</h2>
                <p>La franchise est le montant annuel que vous devez payer intégralement de votre poche pour les consultations médicales et les médicaments avant que l'assurance ne commence à rembourser.</p>
                <ul>
                    <li>Le minimum légal pour les adultes est de <strong>300 CHF</strong>.</li>
                    <li>Le maximum pour les adultes est de <strong>2'500 CHF</strong>.</li>
                    <li>Si vous choisissez une franchise basse (300 CHF), votre prime mensuelle sera élevée. Si vous choisissez la plus élevée (2'500 CHF), vous paierez moins chaque mois pour l'assurance, dans l'espoir de ne pas tomber malade.</li>
                </ul>
                <p><em>Conseil statistique :</em> Il n'est généralement pas rentable de prendre des franchises intermédiaires. En règle générale, on opte pour 300 (si vous pensez avoir beaucoup de dépenses) ou 2'500 (si vous êtes en très bonne santé).</p>

                <h2>La Quote-part (Selbstbehalt / Copago)</h2>
                <p>Une fois que vous avez épuisé votre franchise (par exemple, vous avez déjà dépensé 2'500 CHF en médecins), l'assurance prend en charge les frais, mais vous devez payer <strong>10 % du montant restant</strong>. C'est la quote-part.</p>
                <p>Heureusement, ces 10 % ont un plafond annuel maximum de <strong>700 CHF</strong> pour les adultes (350 CHF pour les enfants).</p>

                <h2>Frais d'hospitalisation</h2>
                <p>Si vous êtes hospitalisé, vous aurez un forfait journalier supplémentaire de 15 CHF par jour d'hospitalisation (participation aux frais de subsistance), applicable indépendamment de la franchise ou de la quote-part.</p>
            </div>
        `
    },

    "articulo-seguros-sociales": {
        title: "Assurances sociales en Suisse : AVS, AI, LPP et Assurance Chômage",
        description: "Détail des assurances sociales suisses : premier pilier (AVS/AI), deuxième pilier (LPP/Caisse de pension) et chômage.",
        keywords: "AVS suisse, LPP, chômage suisse, système de retraites suisse",
        audience: 'worker',
        category: 'Travail',
        hub: 'trabajo',
        slug: "assurances-sociales-suisse",
        readingTime: 6,
        featuredImage: "media/guides/seguros-sociales-suiza.jpg",
        imageAlt: "Illustration conceptuelle des trois piliers du système de prévoyance suisse (AVS, LPP, 3ème pilier)",
        summary: "Le système de retraite suisse repose sur 3 piliers : l'AVS (étatique), la LPP (assurance professionnelle obligatoire) et le 3ème pilier (épargne privée).",
        content: `
            <div class="article-content">
                <p>Une partie du salaire brut est obligatoirement affectée au système de sécurité sociale. La Suisse fonde sa prévoyance vieillesse sur un modèle particulier de <strong>trois piliers</strong>.</p>

                <h2>1er pilier : AVS et AI (Assurance vieillesse et survivants, Assurance invalidité)</h2>
                <p>Il s'agit d'une cotisation de répartition étatique, obligatoire pour tous les résidents ou travailleurs. Son objectif est de garantir le minimum vital en cas de vieillesse ou en cas de décès et d'invalidité.<br/>
                <strong>Cotisation :</strong> En règle générale, elle s'élève à environ 10,6 % de votre salaire, mais l'employeur en assume la moitié (5,3 %) et vous l'autre moitié. Elle apparaît directement déduite de la fiche de paie.</p>

                <h2>2ème pilier : LPP ou Caisse de pension (Prévoyance professionnelle)</h2>
                <p>À partir du 1er janvier suivant l'âge de 17 ans (pour les risques) et 24 ans (pour l'épargne vieillesse), et tant que le salaire dépasse un certain seuil, les salariés cotisent à ce fonds de capitalisation privé. 
                L'objectif est que, additionné au premier pilier, vous mainteniez à la retraite un niveau de vie proche de vos dernières années d'activité. Cet argent vous appartient et il s'accumule sur votre compte individuel avec des rendements. Si vous quittez définitivement le pays hors d'Europe, vous pouvez parfois récupérer une partie de ce fonds.</p>

                <h2>Assurance chômage (ALV/AC - Chômage)</h2>
                <p>La cotisation à l'assurance chômage est également obligatoire (payée pour moitié par le salarié et pour moitié par l'employeur). Si vous perdez malheureusement votre emploi après avoir cotisé au moins 12 mois, cet organisme paiera environ 70 % ou 80 % (si vous avez des enfants) de votre dernier salaire, sous réserve de vos efforts actifs et démontrés dans la recherche d'un nouvel emploi.</p>

                <h2>Résumé général :</h2>
                <p>Lorsque votre contrat arrive avec un chiffre brut par mois, le salaire net est perçu après déduction de l'AVS/AI, de la pension professionnelle, de l'assurance chômage et (dans de nombreux cas) de l'impôt à la source.</p>
            </div>
        `
    },

    "articulo-sistema-salud": {
        title: "Système de santé : médecins, pharmacies et urgences",
        description: "Apprenez à naviguer dans le réseau médical suisse : trouver un médecin, fonctionner des urgences et comprendre la facturation.",
        keywords: "médecin de famille suisse, urgences suisse, pédiatre suisse, système de santé suisse",
        audience: 'resident',
        category: 'Réseau Médical',
        hub: 'salud',
        slug: "systeme-de-sante-medecins-et-urgences",
        readingTime: 6,
        featuredImage: "media/guides/medicos-urgencias-suiza.jpg",
        imageAlt: "Cabinet médical suisse moderne avec un stéthoscope et des documents de santé",
        summary: "Évitez les urgences hospitalières pour les problèmes mineurs, privilégiez les permanences médicales et votre médecin de famille.",
        content: `
            <div class="article-content">
                <p>Comprendre comment naviguer dans la pratique quotidienne des soins de santé en Suisse vous évitera des ennuis (et des frayeurs financières).</p>

                <h2>1) Choisissez votre médecin selon votre modèle d'assurance</h2>
                <p>Le modèle LAMal le moins cher est généralement le « Modèle HMO » ou « Médecin de famille ». Cela signifie que vous ne pouvez pas vous rendre directement chez un spécialiste ou un hôpital sans appeler au préalable une ligne centralisée, ou sans passer strictement par votre médecin généraliste attitré. Si vous sautez cette étape, votre assurance pourrait refuser de payer la facture.</p>

                <h2>2) Les Urgences (Urgences / Notfall)</h2>
                <p>Se rendre aux urgences d'un hôpital devrait être réservé aux cas graves ou vitaux. Pour des soins rapides mais non vitaux, l'usage en Suisse est de se rendre à la <strong>"Permanence Médicale"</strong> (Polycliniques), où l'on vous soigne par ordre d'arrivée à un coût bien inférieur à celui de l'hôpital.</p>

                <h2>3) Le système de paiement : Tiers-garant vs Tiers-payant</h2>
                <p>Lorsque vous vous rendez à la pharmacie ou recevez une facture médicale, vous serez confronté à deux modèles :</p>
                <ul>
                    <li><strong>Tiers-garant (Paiement direct) :</strong> Vous recevez la facture à domicile (ou vous la payez à la pharmacie), vous la payez de votre poche, puis vous envoyez le justificatif à votre assurance. Si vous avez déjà dépassé votre franchise, l'assurance vous remboursera.</li>
                    <li><strong>Tiers-payant :</strong> Le médecin ou la pharmacie envoie la facture directement à l'assureur. La compagnie d'assurance la paie, et si vous n'avez pas encore atteint votre franchise, elle vous enverra une facture pour le montant correspondant.</li>
                </ul>

                <div class="callout tip">
                    <strong>Conseil pratique :</strong> Gardez toujours une copie de vos factures médicales, même si l'assurance les paie directement. Cela vous aidera à contrôler votre franchise annuelle.
                </div>
            </div>
        `
    },

    "articulo-subalquiler": {
        title: "Sous-location en Suisse : guide juridique complet",
        description: "Tout sur la sous-location en Suisse : contrats, cautions, droits et obligations pour le locataire principal et le sous-locataire.",
        keywords: "sous-location suisse, louer chambre suisse, contrat sous-location, caution sous-location",
        category: 'Logement',
        hub: 'vivienda',
        slug: "sous-location-logement-suisse",
        readingTime: 4,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/subalquiler-vivienda-suiza.jpg",
        imageAlt: "Chambre accueillante dans un appartement partagé dans une ville suisse",
        summary: "La sous-location est légale et courante en Suisse. Elle nécessite l'autorisation du propriétaire et, de préférence, un contrat écrit pour éviter tout malentendu.",
        content: `
            <div class="article-content">
                <p>La sous-location est une pratique très répandue en Suisse, qui permet à un locataire principal de louer une chambre ou la totalité du logement à un tiers. Cependant, pour qu'elle soit sûre et légale, certaines règles doivent être respectées.</p>

                <h2>1. Le contrat de sous-location</h2>
                <p>Bien que les contrats verbaux puissent avoir une certaine validité en Suisse, <strong>un contrat écrit est indispensable</strong> pour éviter tout litige. Il doit préciser :</p>
                <ul>
                    <li>L'identité du locataire principal et du sous-locataire.</li>
                    <li>L'objet : s'agit-il d'une chambre ou de l'appartement entier ? Préciser les parties communes.</li>
                    <li>La durée : date de début et de fin (si le contrat est à durée déterminée).</li>
                    <li>Le loyer et les charges : préciser si l'électricité, internet, etc. sont inclus.</li>
                    <li>Le préavis : délai nécessaire pour résilier le contrat.</li>
                </ul>

                <h2>2. La caution</h2>
                <p>Il est habituel de demander une caution de 1 à 2 mois de loyer. Points importants à retenir :</p>
                <ul>
                    <li>La caution <strong>ne peut pas être utilisée pour payer le dernier mois</strong> de loyer.</li>
                    <li>Elle doit être restituée intégralement s'il n'y a ni dommages ni dettes impayées.</li>
                    <li>Il est recommandé de réaliser un état des lieux avec photos à l'entrée pour éviter les disputes au départ.</li>
                </ul>

                <h2>3. Autorisation du propriétaire</h2>
                <p>C'est le point le plus critique : <strong>la sous-location doit être autorisée par le propriétaire de l'immeuble</strong>. Bien qu'il ne s'y oppose généralement pas en l'absence d'abus (comme sous-louer à un prix très supérieur au loyer principal), sous-louer en secret peut constituer un motif de résiliation du bail principal.</p>

                <div class="callout info">
                    <strong>Conseil :</strong> Mettez toujours tout <strong>par écrit</strong>. En Suisse, l'ambiguïté joue généralement contre celui qui n'a pas de preuves écrites.
                </div>

                <h2>4. Droits du sous-locataire</h2>
                <p>Le sous-locataire bénéficie en Suisse d'une protection relativement forte. Il peut notamment contester un loyer abusif auprès de l'autorité de conciliation compétente (généralement la Commission de conciliation en matière de baux). La relation est encadrée par les articles 262 et suivants du Code des obligations.</p>

                <h2>Résumé pratique</h2>
                <p>Avant de sous-louer, vérifiez toujours : l'autorisation du propriétaire (par écrit de préférence), la rédaction d'un contrat complet, et la réalisation d'un état des lieux. Ces trois éléments protègent à la fois le locataire principal et le sous-locataire en cas de litige.</p>

                <ul>
                    <li><a href="https://www.ch.ch/fr/logement/bail-a-loyer/sous-location/" target="_blank" rel="noopener noreferrer">ch.ch — Sous-location en Suisse</a></li>
                    <li><a href="https://www.asloca.ch" target="_blank" rel="noopener noreferrer">ASLOCA — Association suisse des locataires</a></li>
                </ul>
            </div>
        `
    },

"articulo-reagrupacion-familiar": {
        title: "Regroupement familial en Suisse : comment faire venir sa famille",
        description: "Guide complet pour faire venir votre conjoint et vos enfants en Suisse. Conditions, documents, delais et droits des membres de la famille regroupes.",
        keywords: "regroupement familial suisse, faire venir famille suisse, permis famille suisse, conjoint suisse, apostille suisse",
        category: 'Demarches administratives',
        hub: 'tramites',
        slug: "regroupement-familial-suisse",
        readingTime: 5,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/reagrupacion-familiar-suiza.jpg",
        imageAlt: "Famille heureuse arrivant en Suisse avec des bagages dans une gare avec les Alpes en arriere-plan",
        summary: "Si vous avez un Permis B ou C, vous pouvez faire venir votre conjoint et vos enfants de moins de 18 ans. Les membres de la famille obtiennent leur propre permis et ont le droit de travailler des le premier jour.",
        content: `
            <div class="article-content">
                <p>L'un des moments les plus importants dans la vie d'un emigre est de pouvoir faire venir sa famille. En Suisse, la procedure de regroupement familial est bien encadree et realisable pour les citoyens de l'UE, mais elle a ses propres regles et delais.</p>

                <h2>Qui peut demander le regroupement familial ?</h2>
                <p>Les titulaires d'un <strong>Permis B ou C en cours de validite</strong> peuvent en faire la demande. Avec un Permis L (courte duree), les possibilites sont tres limitees. Les membres de la famille pouvant etre regroupes sont :</p>
                <ul>
                    <li>Le conjoint (mariage officiel reconnu).</li>
                    <li>Le partenaire enregistre.</li>
                    <li>Les enfants mineurs de moins de 18 ans (y compris les enfants adoptes).</li>
                    <li>Dans certains cas, les parents ou membres de la famille dependants avec des besoins attestes.</li>
                </ul>

                <h2>Conditions requises pour le resident en Suisse</h2>
                <ul>
                    <li><strong>Logement adequat :</strong> le logement doit disposer d'un espace suffisant pour toute la famille. Les autorites le verifient.</li>
                    <li><strong>Ressources financieres suffisantes :</strong> ne pas dependre de l'aide sociale.</li>
                    <li><strong>Permis en cours de validite :</strong> sans sanctions ni permis en cours de revocation.</li>
                </ul>

                <h2>Documents necessaires</h2>
                <ul>
                    <li>Formulaire officiel de regroupement familial (office cantonal des migrations).</li>
                    <li>Passeports de tous les membres de la famille.</li>
                    <li>Acte de mariage ou de partenariat <strong>apostille et traduit</strong>.</li>
                    <li>Actes de naissance des enfants apostilles et traduits.</li>
                    <li>Contrat de bail du logement avec espace suffisant.</li>
                    <li>Derniers bulletins de salaire ou justificatif de revenus.</li>
                </ul>

                <div class="callout info">
                    <strong>L'Apostille de La Haye :</strong> les documents officiels espagnols doivent porter l'Apostille pour etre valables en Suisse. Elle s'obtient aupres du Ministere espagnol des Affaires etrangeres ou des Delegations du gouvernement. Faites-en la demande a l'avance car la procedure peut prendre plusieurs jours.
                </div>

                <h2>Delais importants</h2>
                <ul>
                    <li><strong>Citoyens UE avec Permis B :</strong> dans les 5 ans suivant l'obtention du permis.</li>
                    <li><strong>Titulaires d'un Permis C :</strong> aucune limite de delai.</li>
                </ul>
                <p>La procedure prend entre 4 et 12 semaines selon le canton et la charge de travail.</p>

                <h2>Quel permis les membres de la famille obtiennent-ils ?</h2>
                <ul>
                    <li>Principal titulaire d'un Permis B → les membres de la famille obtiennent un Permis B.</li>
                    <li>Principal titulaire d'un Permis C → les membres de la famille obtiennent un Permis C.</li>
                </ul>
                <p><strong>Droit au travail :</strong> oui. Le conjoint a pleinement le droit de travailler avec le permis obtenu. Les enfants sont automatiquement integres dans le systeme scolaire public suisse.</p>

                <div class="callout tip">
                    <strong>Conseil pratique :</strong> si vous devez chercher un logement plus grand pour satisfaire a l'exigence de logement adequat, faites-le avant de deposer la demande. C'est l'une des raisons les plus frequentes de retard dans la procedure.
                </div>
            </div>
        `
    },

"articulo-jubilacion": {
        title: "Retraite en Suisse : combien vous recevrez selon votre âge",
        description: "Guide complet sur la retraite suisse (AVS/AHV), les âges de retraite, les montants et comment calculer vos droits.",
        keywords: "retraite suisse, age retraite suisse, AVS, AHV, pension vieillesse",
        category: 'Travail',
        hub: 'trabajo',
        slug: "jubilacion-edad-retiro-suiza",
        readingTime: 6,
        featuredImage: "media/guides/jubilacion-edad-retiro-suiza.jpg",
        imageAlt: "Personne retraitée profitant de la vue sur les Alpes suisses",
        summary: "L'âge normal de retraite en Suisse est 65 ans pour les hommes et 64 ans pour les femmes (changement en cours). Vous avez droit à une pension AVS/AHV basée sur vos cotisations.",
        content: `
            <div class="article-content">
                <h2>L'Âge de Retraite Légal</h2>
                <p>En Suisse, l'âge de retraite dépend de votre sexe et du système :</p>
                <ul>
                    <li><strong>Hommes :</strong> 65 ans (jusqu'à 2031, ensuite 66 ans).</li>
                    <li><strong>Femmes :</strong> 64 ans (augmentation progressive jusqu'à 65 ans).</li>
                    <li><strong>Travailleurs indépendants :</strong> peuvent continuer plus longtemps.</li>
                </ul>

                <h2>Les Trois Piliers de la Retraite</h2>
                <p>La Suisse a un système à trois piliers :</p>
                <ul>
                    <li><strong>1er pilier (AVS/AHV) :</strong> assurance-vieillesse de base obligatoire.</li>
                    <li><strong>2e pilier (LPP/BVG) :</strong> prévoyance professionnelle (caisse de pension).</li>
                    <li><strong>3e pilier :</strong> épargne privée (volontaire).</li>
                </ul>

                <h2>Montant de la Pension AVS</h2>
                <p>Dépend de vos années de cotisations et de vos salaires passés. Montants 2026 :</p>
                <ul>
                    <li><strong>Minimum :</strong> environ CHF 1'225 par mois.</li>
                    <li><strong>Maximum :</strong> environ CHF 2'450 par mois.</li>
                </ul>

                <h2>Conseils</h2>
                <ul>
                    <li>Vérifiez votre compte AVS en ligne (av.swiss).</li>
                    <li>Planifiez votre retraite 5 ans avant.</li>
                    <li>Maximisez le 3e pilier (déductions fiscales).</li>
                </ul>
            </div>
        `
    },

    "articulo-vivir-sin-trabajar": {
        title: "Vivre en Suisse sans travailler : conditions de résidence",
        description: "Guide sur comment vivre en Suisse sans emploi : conditions, exigences financières et droits selon votre statut.",
        keywords: "vivre suisse sans travail, retraite suisse, étudiant suisse, conditions résidence",
        category: 'Vie',
        hub: 'vivir-en-suiza',
        slug: "vivir-sin-trabajar-suiza",
        readingTime: 4,
        featuredImage: "media/guides/vivir-sin-trabajar-suiza.jpg",
        imageAlt: "Personne profitant de la vie en Suisse sans travailler",
        summary: "Vous pouvez vivre sans travailler si : retraité avec revenu stable, étudiant, ou vous avez moyens financiers suffisants. Assurance maladie obligatoire.",
        content: `
            <div class="article-content">
                <h2>Situations Possibles</h2>

                <h3>Retraité</h3>
                <ul>
                    <li>AVS (retraite) = résidence autorisée.</li>
                    <li>Exigence : revenus suffisants (pension).</li>
                </ul>

                <h3>Étudiant</h3>
                <ul>
                    <li>Inscription à université/école = résidence autorisée.</li>
                    <li>Exigence : moyens financiers prouvés.</li>
                </ul>

                <h3>Sans Activité (UE/AELE)</h3>
                <ul>
                    <li>Première année : oui, limité.</li>
                    <li>Après : besoin de moyens financiers déclarés.</li>
                </ul>

                <h2>Exigences Communes</h2>
                <ul>
                    <li><strong>Assurance maladie :</strong> Obligatoire et payante (CHF 350-450/mois).</li>
                    <li><strong>Moyens financiers :</strong> Généralement CHF 3'000-5'000/mois minimum.</li>
                    <li><strong>Pas d'aide sociale :</strong> Vous ne devez pas être charge publique.</li>
                </ul>

                <h2>Conseil</h2>
                <p>Vérifiez les exigences spécifiques de votre canton avant de compter sur ce statut.</p>
            </div>
        `
    },

    "articulo-ai-invalidez": {
        title: "Assurance invalidité (AI/IV) : réinsertion avant rente",
        description: "Comment fonctionne l'assurance invalidité en Suisse : priorité à la réadaptation et à la réinsertion, avant une rente éventuelle.",
        keywords: "assurance invalidité suisse, ai iv, réinsertion, rente invalidité",
        featuredImage: "media/guides/seguro-invalidez-ai-suiza.jpg",
        category: "Assurances Sociales",
        hub: "salud",
        readingTime: 4,
        summary: "Principe suisse : « réinsertion avant rente ». L'AI finance des mesures pour revenir au travail (adaptations, formation, etc.).",
        content: `<div class="article-content">
<h2>Mesures possibles</h2>
<ul>
  <li>Réadaptation médicale et professionnelle</li>
  <li>Adaptation du poste, aides techniques</li>
  <li>Reconversion / formation</li>
</ul>

<h2>Quand parle-t-on de rente ?</h2>
<p>En général après avoir tenté les mesures de réinsertion et si la perte de capacité de gain persiste.</p>
</div>`
    },

    "articulo-vacunas": {
        title: "Vaccins en Suisse : recommandations, pas d'obligation générale",
        description: "En Suisse, la vaccination repose surtout sur des recommandations officielles de l'OFSP/BAG, avec une grande liberté individuelle.",
        keywords: "vaccins suisse, calendrier vaccinal ofsp, bag, encéphalite tiques",
        featuredImage: "media/guides/vacunacion-en-suiza.jpg",
        category: "Santé Publique",
        hub: "salud",
        readingTime: 4,
        summary: "Le système suisse privilégie les recommandations. L'encéphalite à tiques est souvent mise en avant pour les activités en extérieur.",
        content: `<div class="article-content">
<p>En Suisse, les vaccins sont généralement <strong>non obligatoires</strong> par la loi. L'OFSP/BAG publie un calendrier recommandé.</p>
<ul>
  <li>Vaccins standards (DTP, polio, ROR…)</li>
  <li><strong>Encéphalite à tiques (FSME/TBE) :</strong> recommandée selon régions/activités</li>
</ul>
<p>Les vaccins recommandés sont en principe couverts par l'assurance de base, selon franchise.</p>
</div>`
    },

    "articulo-danza-patos": {
        title: "Le saviez-vous ? La «danse des canards» est d'origine suisse",
        description: "L'histoire de «Der Ententanz», mélodie née en Suisse et devenue un classique des fêtes.",
        keywords: "danse des canards origine suisse, der ententanz, werner thomas davos",
        featuredImage: "media/guides/origen-danza-de-los-patos-suiza.jpg",
        category: "Culture & Vie",
        hub: "vivir-en-suiza",
        readingTime: 3,
        summary: "La mélodie a été composée par l'accordéoniste suisse Werner Thomas à la fin des années 1950 dans la région de Davos.",
        content: `<div class="article-content">
<p>Vous l'avez sûrement entendue à un mariage ou une fête de village. Mais <strong>«Der Ententanz»</strong> a un passeport suisse.</p>
<p>La mélodie est attribuée à <strong>Werner Thomas</strong> et s'est répandue mondialement via de nombreuses reprises.</p>
</div>`
    },

    "articulo-introduccion-suiza": {
        title: "Comment fonctionne la Suisse : guide complet pour nouveaux résidents",
        description: "Guide complet et pratique sur le fonctionnement de la Suisse : politique, système de santé, fiscalité, éducation et vie quotidienne.",
        keywords: "comment fonctionne suisse, système suisse, guide expat suisse, politique suisse",
        category: 'Vie',
        hub: 'vivir-en-suiza',
        slug: "introduccion-guia-suiza",
        readingTime: 15,
        featuredImage: "media/guides/introduccion-guia-suiza.jpg",
        imageAlt: "Vue panoramique de la Suisse avec montages, lac et village typique",
        summary: "La Suisse fonctionne par consensus politique, décentralisation cantonale, démocratie directe et stabilité institutionnelle. Système de santé obligatoire, impôts modérés et gouvernance efficace.",
        content: `
            <div class="article-content">
                <h2>La Politique Suisse</h2>
                <p>La Suisse est une <strong>fédération de 26 cantons</strong> avec :</p>
                <ul>
                    <li><strong>Démocratie directe :</strong> Initiatives populaires et référendums fréquents.</li>
                    <li><strong>Gouvernement collégial :</strong> 7 ministres (consensus).</li>
                    <li><strong>Décentralisation :</strong> Les cantons gèrent beaucoup de services.</li>
                </ul>

                <h2>Santé</h2>
                <p><strong>Obligatoire pour tous.</strong> Chacun choisit son assureur (LAMal/KVG). Copaiements : franchise (CHF 300-2'500/an) + quote-part (20%).</p>

                <h2>Fiscalité</h2>
                <ul>
                    <li><strong>Impôt sur le revenu :</strong> 10-20% selon le canton/commune.</li>
                    <li><strong>TVA :</strong> 7.7% (standard).</li>
                    <li><strong>Impôt sur la fortune :</strong> Dans certains cantons.</li>
                </ul>

                <h2>Éducation</h2>
                <ul>
                    <li><strong>Obligatoire :</strong> 9 ans (6-15 ans).</li>
                    <li><strong>Gratuite :</strong> Écoles publiques.</li>
                    <li>Après : apprentissage ou gymnase.</li>
                </ul>

                <h2>Sécurité Sociale</h2>
                <ul>
                    <li><strong>Retraite :</strong> AVS (de base).</li>
                    <li><strong>Assurance-chômage :</strong> Obligatoire (cotisation patronale/salariale).</li>
                    <li><strong>Assurance-accidents :</strong> LAA (professionnelle).</li>
                </ul>

                <h2>Vie Quotidienne</h2>
                <ul>
                    <li>Très ponctuel (trains à la minute).</li>
                    <li>Cher (coût de vie élevé).</li>
                    <li>Très sûr.</li>
                    <li>Français/Allemand/Italien selon région.</li>
                </ul>
            </div>
        `
    },

    "articulo-cantones": {
        title: "Les 26 cantons suisses : carte, capitales et langues",
        description: "Guide complet des 26 cantons suisses : carte politique, capitale, langue officielle et particularites. Essentiel pour comprendre la Suisse avant de s'y installer.",
        keywords: "cantons suisse, carte cantons suisse, 26 cantons, canton suisse, differences cantons",
        audience: 'newcomer',
        category: 'Organisation territoriale',
        hub: 'vivir-en-suiza',
        slug: "cantons-suisse",
        readingTime: 7,
        dateUpdated: "Mars 2026",
        summary: "La Suisse est composee de 26 cantons autonomes, chacun ayant son propre systeme fiscal, educatif et administratif. Le canton ou vous vivez change presque tout.",
        featuredImage: "media/guides/cantones-suiza.png",
        imageAlt: "Carte politique des 26 cantons suisses avec capitales et langues",
        content: `
                <p>En Suisse, le canton ou vous vous installez est aussi important que le pays lui-meme. Chacun des 26 cantons possede son propre gouvernement, ses propres lois fiscales, son propre systeme educatif et sa propre identite culturelle. Comprendre cette structure est indispensable avant de decider ou vivre.</p>

                <h2>Qu'est-ce qu'un canton ?</h2>
                <p>Un canton est l'unite territoriale de base de la Confederation helvetique. Il correspond a ce qu'en Espagne on appellerait une communaute autonome, mais avec des pouvoirs bien plus etendus. Les cantons existaient avant la Confederation : ils se sont unis par des pactes de defense mutuelle, non par une imposition centrale. Cela explique pourquoi chacun conserve une si grande autonomie.</p>

                <p>Chaque canton dispose de :</p>
                <ul>
                    <li>Son propre gouvernement (<em>Conseil d'Etat / Regierungsrat</em>) et son parlement cantonal</li>
                    <li>Ses propres lois et taux d'imposition (cantonal + communal)</li>
                    <li>Son systeme d'enseignement public</li>
                    <li>Sa police cantonale</li>
                    <li>Ses propres regles en matiere de formalites de residence</li>
                </ul>

                <h2>Les 26 cantons : tableau complet</h2>

                <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin:1rem 0;">
                    <thead>
                        <tr style="background:var(--bg-surface); border-bottom:2px solid var(--border-light);">
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Canton</th>
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Abr.</th>
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Capitale</th>
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Langue(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Argovie</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">AG</td><td style="padding:0.5rem 0.75rem;">Aarau</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Appenzell R.-Ext.</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">AR</td><td style="padding:0.5rem 0.75rem;">Herisau</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Appenzell R.-Int.</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">AI</td><td style="padding:0.5rem 0.75rem;">Appenzell</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Bale-Ville</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">BS</td><td style="padding:0.5rem 0.75rem;">Bale</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Bale-Campagne</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">BL</td><td style="padding:0.5rem 0.75rem;">Liestal</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Berne</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">BE</td><td style="padding:0.5rem 0.75rem;">Berne</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand / Francais</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Fribourg</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">FR</td><td style="padding:0.5rem 0.75rem;">Fribourg</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francais / Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Geneve</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">GE</td><td style="padding:0.5rem 0.75rem;">Geneve</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francais</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Glaris</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">GL</td><td style="padding:0.5rem 0.75rem;">Glaris</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Grisons</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">GR</td><td style="padding:0.5rem 0.75rem;">Coire</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand / Romanche / Italien</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Jura</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">JU</td><td style="padding:0.5rem 0.75rem;">Delemont</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francais</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Lucerne</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">LU</td><td style="padding:0.5rem 0.75rem;">Lucerne</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Neuchatel</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">NE</td><td style="padding:0.5rem 0.75rem;">Neuchatel</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francais</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Nidwald</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">NW</td><td style="padding:0.5rem 0.75rem;">Stans</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Obwald</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">OW</td><td style="padding:0.5rem 0.75rem;">Sarnen</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Schaffhouse</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SH</td><td style="padding:0.5rem 0.75rem;">Schaffhouse</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Schwytz</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SZ</td><td style="padding:0.5rem 0.75rem;">Schwytz</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Soleure</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SO</td><td style="padding:0.5rem 0.75rem;">Soleure</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Saint-Gall</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SG</td><td style="padding:0.5rem 0.75rem;">Saint-Gall</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Thurgovie</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">TG</td><td style="padding:0.5rem 0.75rem;">Frauenfeld</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Tessin</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">TI</td><td style="padding:0.5rem 0.75rem;">Bellinzone</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Italien</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Uri</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">UR</td><td style="padding:0.5rem 0.75rem;">Altdorf</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Valais / Wallis</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">VS</td><td style="padding:0.5rem 0.75rem;">Sion</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francais / Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Vaud</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">VD</td><td style="padding:0.5rem 0.75rem;">Lausanne</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francais</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Zoug</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">ZG</td><td style="padding:0.5rem 0.75rem;">Zoug</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Zurich</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">ZH</td><td style="padding:0.5rem 0.75rem;">Zurich</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Allemand</td></tr>
                    </tbody>
                </table>
                </div>

                <h2>Pourquoi le canton ou vous vivez est-il important ?</h2>

                <h3>Impots</h3>
                <p>C'est la difference la plus significative. La charge fiscale totale varie considerablement d'un canton a l'autre. Un exemple concret : une personne celibataire avec 80 000 CHF de salaire brut annuel paie approximativement :</p>
                <ul>
                    <li><strong>Zoug :</strong> ~12 000 CHF d'impots au total</li>
                    <li><strong>Geneve :</strong> ~22 000 CHF d'impots au total</li>
                </ul>
                <p>La meme personne, le meme salaire, mais presque le double d'impots selon le canton de residence.</p>
                <p>-> <a href="#/impuesto-fuente-suiza">Lire : Comment fonctionne l'impot a la source</a></p>

                <h3>Assurance maladie (primes LAMal)</h3>
                <p>Les primes de l'assurance obligatoire varient egalement selon le canton et la region du canton. Les plus cheres : Bale-Ville, Geneve, Vaud. Les moins cheres : Appenzell Rhodes-Interieures, Glaris, Nidwald.</p>
                <p>-> <a href="#/seguro-medico-lamal-suiza">Lire : L'assurance maladie LAMal</a></p>

                <h3>Education</h3>
                <p>Le systeme scolaire est entierement du ressort des cantons. Le calendrier scolaire, l'age d'entree a l'ecole, les matieres et le systeme d'orientation professionnelle varient d'un canton a l'autre.</p>
                <p>-> <a href="#/sistema-escolar-suiza">Lire : Le systeme educatif suisse</a></p>

                <h3>Formalites administratives</h3>
                <p>L'enregistrement des habitants, les delais, les formulaires disponibles en ligne et les horaires d'accueil varient d'une commune a l'autre au sein de chaque canton.</p>
                <p>-> <a href="#/registrarse-en-suiza">Lire : Comment s'enregistrer a l'arrivee</a></p>

                <h2>Cantons aux particularites notables</h2>
                <ul>
                    <li><strong>Zoug :</strong> le canton a la charge fiscale la plus faible du pays. Siege de nombreuses multinationales et societes de gestion d'actifs.</li>
                    <li><strong>Geneve :</strong> ville internationale, siege de l'ONU, de l'OMS et de la Croix-Rouge. Forte presence de fonctionnaires internationaux. Primes medicales et loyers tres eleves.</li>
                    <li><strong>Zurich :</strong> la ville la plus peuplee et le principal centre financier. Niveau de vie tres eleve, mais aussi les salaires les plus importants du pays.</li>
                    <li><strong>Tessin :</strong> le canton italophone. Nombreux travailleurs frontaliers. Climat mediterraneen et cout de la vie legerement inferieur au nord.</li>
                    <li><strong>Grisons :</strong> le plus grand canton, trilingue (allemand, romanche, italien). Economie fondee sur le tourisme alpin et l'agriculture.</li>
                    <li><strong>Berne :</strong> capitale federale. Bilingue (allemand avec minorite francophone). Siege du parlement et du gouvernement federal.</li>
                </ul>

                <div class="callout info">
                    <strong>Conseil pratique :</strong> avant de decider ou vous installer, comparez la charge fiscale du canton, les primes d'assurance maladie et l'offre d'emploi dans votre secteur. Parfois, changer de canton peut representer une difference de plusieurs milliers de francs par an.
                </div>

                <h2>Acceder au portail officiel de chaque canton</h2>
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(175px, 1fr)); gap:0.6rem; margin-top:1rem;">
                    <a href="https://www.ag.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Argovie (AG)</a>
                    <a href="https://www.ai.ch" target="_blank" rel="noopener noreferrer" class="canton-link">App. R.-Int. (AI)</a>
                    <a href="https://www.ar.ch" target="_blank" rel="noopener noreferrer" class="canton-link">App. R.-Ext. (AR)</a>
                    <a href="https://www.bs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Bale-Ville (BS)</a>
                    <a href="https://www.bl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Bale-Campagne (BL)</a>
                    <a href="https://www.be.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Berne (BE)</a>
                    <a href="https://www.fr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Fribourg (FR)</a>
                    <a href="https://www.ge.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Geneve (GE)</a>
                    <a href="https://www.gl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Glaris (GL)</a>
                    <a href="https://www.gr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Grisons (GR)</a>
                    <a href="https://www.jura.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Jura (JU)</a>
                    <a href="https://www.lu.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Lucerne (LU)</a>
                    <a href="https://www.ne.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Neuchatel (NE)</a>
                    <a href="https://www.nw.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Nidwald (NW)</a>
                    <a href="https://www.ow.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Obwald (OW)</a>
                    <a href="https://www.sh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schaffhouse (SH)</a>
                    <a href="https://www.sz.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schwytz (SZ)</a>
                    <a href="https://www.so.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Soleure (SO)</a>
                    <a href="https://www.sg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Saint-Gall (SG)</a>
                    <a href="https://www.tg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Thurgovie (TG)</a>
                    <a href="https://www.ti.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Tessin (TI)</a>
                    <a href="https://www.ur.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Uri (UR)</a>
                    <a href="https://www.vs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Valais/Wallis (VS)</a>
                    <a href="https://www.vd.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Vaud (VD)</a>
                    <a href="https://www.zg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zoug (ZG)</a>
                    <a href="https://www.zh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zurich (ZH)</a>
                </div>
            </div>
        `
    },

"articulo-lenguas": {
        title: "Les langues en Suisse : allemand, français, italien et romanche",
        description: "Guide sur les 4 langues nationales de Suisse : régions linguistiques, cantons bilingues et conseils pour les nouveaux arrivants.",
        keywords: "langues suisse, régions linguistiques, suisse allemand, romandie, tessin, romanche",
        audience: "newcomer",
        featuredImage: "media/guides/lenguas-suiza.png",
        category: "Culture & Langues",
        hub: "vivir-en-suiza",
        readingTime: 5,
        summary: "La Suisse a 4 langues nationales. La langue que vous devrez apprendre dépend entièrement du canton où vous vous installez : allemand à l'est et au centre, français à l'ouest, italien au Tessin.",
        content: `
            <div class="article-content">
                <p>La Suisse est l'un des rares pays au monde à posséder quatre langues nationales officielles. Mais il y a une erreur très courante à l'arrivée : croire que l'anglais suffit pour s'intégrer. Ce n'est pas le cas. La langue de votre canton de résidence est la clé du travail, des démarches administratives et de l'intégration sociale.</p>

                <h2>Les 4 langues nationales</h2>

                <h3>🇩🇪 Allemand — Suisse alémanique (Deutschschweiz)</h3>
                <p>Parlé par environ <strong>63%</strong> de la population. Il couvre une grande partie du centre et de l'est du pays : Zurich, Berne, Bâle, Lucerne, Zoug, Schwyz, Saint-Gall et la plupart des cantons de l'intérieur.</p>

                <p>Mais il y a une nuance fondamentale : au quotidien, les Suisses alémaniques ne parlent pas l'allemand standard. Ils parlent le <strong>Schweizerdeutsch</strong>, un ensemble de dialectes oraux qui varient d'un canton à l'autre et qui peuvent être totalement inintelligibles pour quelqu'un ayant appris l'allemand standard. Les textes écrits (contrats, lettres, formulaires) sont en revanche rédigés en allemand standard (<em>Hochdeutsch</em>).</p>

                <div class="callout">
                    <strong>Pour les francophones/hispanophones :</strong> L'allemand est difficile mais tout à fait accessible. Avec un niveau B1, vous pouvez déjà travailler dans la plupart des emplois non spécialisés. De nombreux cours d'allemand en Suisse sont gratuits ou subventionnés pour les résidents.
                </div>

                <h3>🇫🇷 Français — La Romandie</h3>
                <p>Parlé par environ <strong>23%</strong> de la population. Il correspond aux cantons de l'ouest : Genève, Vaud, Neuchâtel, Jura, et partiellement le Valais, Fribourg et Berne. Cette zone est informellement appelée <em>La Romandie</em>.</p>

                <p>Le français suisse est très similaire au français standard, avec quelques différences lexicales qui ne constituent pas une véritable barrière. Par exemple, on utilise <em>huitante</em> au lieu de <em>quatre-vingts</em> (80) dans certains cantons de la Romandie.</p>

                <div class="callout info">
                    <strong>Conseil pratique :</strong> Le français est souvent l'option la plus accessible pour ceux qui ont des racines latines. Le temps d'apprentissage est nettement inférieur à celui de l'allemand.
                </div>

                <h3>🇮🇹 Italien — Le Tessin</h3>
                <p>Parlé par environ <strong>8%</strong> de la population, principalement dans le canton du Tessin (TI) et dans certaines vallées du sud du canton des Grisons. Le Tessin est le seul canton entièrement italophone et possède une identité culturelle très méditerranéenne.</p>

                <p>L'italien est très proche de l'espagnol et du français. Cependant, le marché du travail au Tessin est plus petit et de nombreux postes nécessitent également l'allemand ou l'anglais pour collaborer avec le reste du pays.</p>

                <h3>🏔️ Romanche (Rumantsch)</h3>
                <p>Parlé par moins de <strong>1%</strong> de la population, exclusivement dans certaines parties du canton des Grisons. C'est une langue romane avec cinq variantes écrites différentes. Elle a le statut de langue nationale et co-officielle dans les régions où elle est parlée.</p>

                <h2>Cantons bilingues et trilingue</h2>

                <p>Trois cantons ont deux langues officielles ou plus :</p>
                <ul>
                    <li><strong>Berne, Fribourg, Valais :</strong> Français et Allemand.</li>
                    <li><strong>Grisons :</strong> Allemand, Italien et Romanche.</li>
                </ul>

                <div class="callout warning">
                    <strong>Intégration et langue :</strong> Ne sous-estimez pas l'importance de la langue locale. Même si vous travaillez en anglais, connaître la langue de votre canton est essentiel pour comprendre votre contrat de location, vos impôts et pour vous faire des amis locaux.
                </div>
            </div>`
    },
        "articulo-tramites-llegada": {
        title: "Liste de vérification complète : démarches à l'arrivée en Suisse",
        description: "Checklist pratique et complète des démarches administratives à faire dans le premier mois après arrivée en Suisse.",
        keywords: "arrivée suisse, démarches administratives, premier mois suisse, checklist",
        category: 'Démarches',
        hub: 'tramites',
        slug: "tramites-llegada-suiza",
        readingTime: 6,
        featuredImage: "media/guides/tramites-llegada-suiza.jpg",
        imageAlt: "Checklist de démarches à l'arrivée en Suisse",
        summary: "Premier mois en Suisse : enregistrement communal, assurance maladie, compte bancaire, permis, impôts. Cette checklist vous guide étape par étape.",
        content: `
            <div class="article-content">
                <h2>Semaine 1 (URGENT)</h2>
                <ul>
                    <li><strong>Enregistrement communal :</strong> Maximum 14 jours après arrivée.</li>
                    <li><strong>Adresse fixe :</strong> Nécessaire pour l'enregistrement (location, AirBnb, ami...).</li>
                </ul>

                <h2>Semaine 2-3</h2>
                <ul>
                    <li><strong>Assurance maladie :</strong> Obligatoire, délai 3 mois (avec rétroactivité possible).</li>
                    <li><strong>Compte bancaire :</strong> Avec certificat d'enregistrement provisoire.</li>
                    <li><strong>Permis de séjour :</strong> En cours après enregistrement communal.</li>
                </ul>

                <h2>Mois 1</h2>
                <ul>
                    <li><strong>Téléphone mobile :</strong> Saltus, Swisscom, Sunrise...</li>
                    <li><strong>Internet :</strong> Adresse requise.</li>
                    <li><strong>CFF Halbtax :</strong> Si vous voyagez souvent (CHF 120/an = 50% réduction).</li>
                </ul>

                <h2>Avant 3 Mois</h2>
                <ul>
                    <li><strong>Inscription fiscale :</strong> Canton/commune.</li>
                    <li><strong>Numéro AVS :</strong> Automatique après enregistrement.</li>
                    <li><strong>Assurance ménage :</strong> Si vous louez.</li>
                </ul>

                <h2>À Long Terme</h2>
                <ul>
                    <li><strong>Déclaration d'impôts :</strong> Annuellement (selon permission).</li>
                    <li><strong>Mise à jour domicile :</strong> Si vous déménagez.</li>
                </ul>
            </div>
        `
    },
        "articulo-trabajar-sin-permiso-fisico": {
        title: "Puis-je travailler en Suisse avant d'avoir la carte de permis?",
        description: "Réponse claire : oui, vous pouvez généralement commencer à travailler avec le certificat d'enregistrement provisoire de la commune.",
        keywords: "permis travail suisse, commencement travail, carte permis suisse, certificate enregistrement",
        category: 'Travail',
        hub: 'trabajo',
        slug: "trabajar-sin-permiso-fisico-suiza",
        readingTime: 3,
        featuredImage: "media/guides/trabajar-sin-permiso-fisico-suiza.jpg",
        imageAlt: "Personne commençant à travailler en Suisse avec documents de travail provisoires",
        summary: "Oui, vous pouvez commencer immédiatement avec le justificatif/certificat d'enregistrement fourni par la commune. Vous n'avez pas besoin d'attendre la carte physique.",
        content: `
            <div class="article-content">
                <h2>La Réponse Courte : OUI</h2>
                <p>Vous pouvez commencer à travailler <strong>immédiatement après</strong> avoir reçu votre <strong>certificat d'enregistrement</strong> de la commune, même avant l'arrivée de la carte physique.</p>

                <h2>Ce que Vous Recevez à l'Enregistrement</h2>
                <ul>
                    <li>Un <strong>certificat provisoire</strong> ou <strong>justificatif d'enregistrement</strong>.</li>
                    <li>Ce document suffit pour travailler légalement.</li>
                    <li>Votre employeur le connaît (c'est très courant en Suisse).</li>
                </ul>

                <h2>Qu'en est-il de la Carte Physique?</h2>
                <p>La carte arrive par courrier quelques semaines plus tard. Entre-temps :</p>
                <ul>
                    <li>Vous travaillez avec le certificat.</li>
                    <li>Vous pouvez ouvrir un compte bancaire.</li>
                    <li>Vous pouvez contracter l'assurance maladie.</li>
                </ul>

                <h2>Conseil Important</h2>
                <p>Dès votre arrivée, allez à l'enregistrement communal dans les <strong>14 jours</strong> pour obtenir ce certificat. C'est votre clé pour démarrer légalement.</p>
            </div>
        `
    },
        "articulo-impuestos": {
        title: "Impuestos en Suisse: federal, cantonal y comunal",
        description: "Comprende el sistema de triple imposición en Suisse: de la Confederación, de los cantones y de las comunas.",
        keywords: "impuestos suiza, fiscalidad Suisse, cantones impuestos",
        audience: 'worker',
        category: 'Sistema Tributario',
        hub: 'impuestos',
        slug: "impuestos-en-suiza",
        readingTime: 12,
        featuredImage: "media/guides/impuestos-suiza.png",
        imageAlt: "Formularios de impuestos, calculadora y monedas suizas sobre un escritorio ordenado",
        summary: 'En Suiza pagas impuestos a 3 niveles. El cantonal y comunal suponen la mayor carga y varían drásticamente incluso cruzando la calle.',
        content: `
            <div class="article-content">
                <h2>Introducción</h2>
                <p>En Suisse, los impuestos no se entienden mirando un "tipo nacional" y ya. El país es federal, y tu carga fiscal depende mucho de <strong>dónde vives</strong> (cantón y comuna), tu estado civil, hijos y nivel de ingresos. Dos personas con el mismo salario pueden pagar diferente solo por vivir en comunas distintas.</p>

                <div class="callout info">
                    <strong>Puntos clave:</strong>
                    <ul>
                        <li>Pagas impuestos a <strong>tres niveles</strong>: Confederación, cantón y comuna.</li>
                        <li>Lo cantonal y comunal suele ser lo que más varía (y lo que más importa en tu presupuesto).</li>
                        <li>Muchos recién llegados con permiso L/B empiezan con <a href="#/impuesto-fuente-suiza">impuesto a la fuente</a> (retención en nómina).</li>
                    </ul>
                </div>

                <h2>Cómo funciona el sistema</h2>
                <h3>1) Impuesto federal directo</h3>
                <p>Es el componente nacional. Se aplica de forma homogénea en todo el país, con escalas progresivas. Suele ser una parte menor de tu factura total comparado con cantón y comuna.</p>

                <h3>2) Impuestos cantonales</h3>
                <p>Cada cantón define escalas, deducciones y reglas. Además del impuesto sobre la renta, en muchos cantones existe impuesto sobre <strong>fortuna/patrimonio</strong> (con umbrales y reglas propias). Por eso, hablar de "impuestos en Suisse" sin mencionar el cantón es quedarse a medias.</p>

                <h3>3) Impuestos comunales</h3>
                <p>En muchos cantones, la comuna aplica un coeficiente o multiplicador sobre el impuesto cantonal básico. Resultado: moverte "unos kilómetros" puede cambiar tu fiscalidad sin cambiar de trabajo.</p>

                <h3>4) Retención vs declaración anual</h3>
                <p>Hay dos grandes formas de pago:</p>
                <ul>
                    <li><strong>Impuesto a la fuente:</strong> tu empleador retiene mensualmente en la nómina (muy común con permisos L/B).</li>
                    <li><strong>Declaración ordinaria:</strong> declaras anualmente y pagas/ajustas según liquidación (frecuente con permiso C y en otros casos).</li>
                </ul>
                <p>En determinados casos, aunque estés a la fuente, puedes estar obligado a una declaración ordinaria o a una regularización (según cantón y situación). Si tienes dudas, no lo dejes para "cuando llegue la carta": consulta pronto.</p>

                <h3>5) Año fiscal, facturas y "sorpresas"</h3>
                <p>En declaración ordinaria, es habitual que existan pagos provisionales o facturas a cuenta (según cantón) y ajustes posteriores. Por eso, aunque tu nómina sea estable, puede llegar una liquidación meses después. La recomendación práctica es simple: <strong>reserva un colchón</strong> y no planifiques tus finanzas al céntimo.</p>

                <h3>6) Impuesto eclesiástico (según cantón y afiliación)</h3>
                <p>En algunos cantones existe un impuesto ligado a la afiliación religiosa (iglesia). Si no eres miembro, en principio no debería aplicarse. Como es un tema sensible y cantonal, consúltalo en la documentación de tu cantón si ves un concepto que no entiendes.</p>

                <h2>Requisitos y reglas</h2>
                <h3>Documentos que suelen ser la base de tu fiscalidad</h3>
                <ul>
                    <li><strong>Lohnausweis / certificado salarial:</strong> el documento anual con tu salario y conceptos.</li>
                    <li><strong>Estado civil e hijos:</strong> impactan tarifas a la fuente y deducciones.</li>
                    <li><strong>Domicilio fiscal (comuna):</strong> determina gran parte de la factura.</li>
                    <li><strong>Patrimonio y deudas:</strong> si aplica (especialmente relevante en cantones con impuesto de fortuna).</li>
                </ul>

                <h3>Qué significa "estar a la fuente" en la práctica</h3>
                <p>Si estás a la fuente, la administración fiscal aplica una tarifa estándar basada en categorías (estado civil, hijos, etc.). Lo importante para ti es:</p>
                <ul>
                    <li>Verificar que tu categoría es correcta (cambios familiares importan).</li>
                    <li>Saber si tu cantón permite <strong>correcciones</strong> o regularizaciones por deducciones (por ejemplo, aportaciones a 3er pilar, gastos de formación, etc.).</li>
                    <li>Entender que algunos umbrales/situaciones pueden llevarte a declaración ordinaria (según reglas cantonales y federales).</li>
                    </ul>

                <h3>Qué pasa si haces declaración ordinaria</h3>
                <p>En la declaración, el cantón y la comuna te aplican reglas de deducciones y escalas. Pueden existir deducciones por:</p>
                <ul>
                    <li>Aportaciones previsionales (por ejemplo, 3er pilar).</li>
                    <li>Gastos profesionales (según reglas cantonales).</li>
                    <li>Gastos de cuidado de hijos (según cantón).</li>
                    <li>Intereses de deudas (según cantón).</li>
                </ul>
                <p>La lista exacta de deducciones y límites es <strong>canton-dependiente</strong>. Por eso, no copies consejos fiscales de un cantón a otro sin comprobar.</p>

                <h3>Te mudas dentro de Suisse: por qué cambia todo</h3>
                <p>En Suisse, el domicilio fiscal es clave. Si te mudas de comuna o cantón, no solo cambian porcentajes: pueden cambiar deducciones, formularios, plazos y la forma de pago. No es raro que el primer año tras una mudanza aparezcan ajustes porque el sistema "se recalcula" con tu nuevo domicilio.</p>

                <h2>Ejemplos concretos</h2>
                <h3>Ejemplo 1 — Misma nómina, distinta comuna</h3>
                <p>Te ofrecen el mismo sueldo en la misma empresa, pero estás dudando entre dos comunas cercanas. Si una comuna tiene un multiplicador alto y la otra bajo, tu "neto real" cambia. Por eso, al comparar alquileres, compara también impuestos (en Suiza van juntos).</p>

                <h3>Ejemplo 2 — Te casas a mitad de año</h3>
                <p>Un cambio de estado civil puede cambiar la tarifa a la fuente o tus deducciones. En la práctica, hay que notificar cambios y guardar documentación. El error típico es dejarlo para el final y luego sorprenderse con ajustes.</p>

                <h3>Ejemplo 3 — Ingresos extra (autónomo, alquiler, inversiones)</h3>
                <p>Si tienes ingresos adicionales, la retención estándar puede no reflejar tu situación final. Es un caso típico en el que puede haber obligación de declarar o regularizar. El consejo práctico: anticipa y reserva dinero.</p>

                <h3>Ejemplo 4 — Te mudas de cantón en verano</h3>
                <p>Trabajas todo el año, pero cambias de cantón a mitad. Aunque sea "el mismo país", fiscalmente es un cambio importante: comunícalo en tus trámites de domicilio y asume que el cálculo final puede variar respecto a lo que esperabas.</p>

                <h2>Errores comunes</h2>
                <ul>
                    <li><strong>Creer que "en Suiza se paga poco" sin mirar cantón/comuna:</strong> la diferencia puede ser grande.</li>
                    <li><strong>No revisar la categoría a la fuente:</strong> un error de categoría puede hacerte pagar mal todo el año.</li>
                    <li><strong>No guardar el certificado salarial:</strong> es la pieza central de cualquier corrección o declaración.</li>
                    <li><strong>No planificar liquidez:</strong> en Suisse pueden llegar ajustes y facturas a posteriori; no vivas al límite.</li>
                </ul>

                <h2>Consejos prácticos</h2>
                <ul>
                    <li>Si acabas de llegar, empieza por entender <a href="#/impuesto-fuente-suiza">impuesto a la fuente</a>.</li>
                    <li>Al elegir dónde vivir, mira el "pack completo": alquiler + impuestos + transporte.</li>
                    <li>Si cambias de comuna o cantón, asume que cambian reglas y revisa tu presupuesto.</li>
                    <li>Crea una carpeta fiscal anual (PDFs y cartas): Lohnausweis, contratos, recibos de 3er pilar y comunicaciones del cantón.</li>
                    <li>Si tienes dudas, consulta la autoridad fiscal de tu cantón: una llamada a tiempo evita errores caros.</li>
                    <li>Conecta esta guía con <a href="#/presupuesto-suiza">coste de vida</a> y <a href="#/trabajadores-fronterizos-suiza">fronterizos</a> si aplica.</li>
                </ul>

                <h2>Fuentes oficiales</h2>
                <ul>
                    <li><a href="https://www.estv.admin.ch/" target="_blank" rel="noopener noreferrer">AFC / ESTV — Administración Federal de Contribuciones</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portal oficial suizo</a></li>
                </ul>
            </div>
        `
    },
        "articulo-impuesto-fuente": {
        title: "L'impôt à la source (Quellensteuer) expliqué simplement",
        description: "Tout sur l'impôt à la source en Suisse : comment il fonctionne, qui le paie, comment l'éviter et comment le récupérer.",
        keywords: "impôt source suisse, quellensteuer, impôt frontalier, fiscalité suisse",
        category: 'Fiscalité',
        hub: 'impuestos',
        slug: "impuesto-fuente-quellensteuer-suiza",
        readingTime: 5,
        featuredImage: "media/guides/impuesto-fuente-quellensteuer-suiza.jpg",
        imageAlt: "Document fiscal suisse avec calculs d'impôt à la source",
        summary: "L'impôt à la source est une retenue fiscale prélevée directement sur votre salaire. Les frontaliers et certains résidents temporaires le paient. Vous pouvez le récupérer en déclarant vos impôts.",
        content: `
            <div class="article-content">
                <h2>Qu'est-ce que l'Impôt à la Source?</h2>
                <p>C'est une retenue fiscale prélevée directement par l'employeur sur votre salaire, versée directement aux autorités fiscales.</p>
                <p>Elle s'applique principalement aux :</p>
                <ul>
                    <li><strong>Frontaliers UE/AELE :</strong> généralement soumis à l'impôt à la source (selon la loi bilatérale).</li>
                    <li><strong>Résidents temporaires (permis L) :</strong> souvent soumis à l'impôt à la source.</li>
                    <li><strong>Résidents permanents (permis B/C) :</strong> normalement NO impôt à la source (déclaration fiscale annuelle à la place).</li>
                </ul>

                <h2>Taux et Calcul</h2>
                <p>Le taux varie selon :</p>
                <ul>
                    <li>Votre canton de travail et domicile.</li>
                    <li>Votre salaire annuel.</li>
                    <li>Votre situation de famille (marié, enfants, etc.).</li>
                </ul>
                <p>Exemple : De 4% à 20% selon les cas.</p>

                <h2>Récupération (Réclamation)</h2>
                <p>Vous pouvez récupérer une partie ou la totalité de l'impôt à la source via :</p>
                <ul>
                    <li><strong>Déclaration d'impôts annuelle :</strong> la plus courante (frontaliers et résidents temporaires).</li>
                    <li><strong>Rémunération indépendante :</strong> vous pouvez déduire certaines charges professionnelles.</li>
                </ul>

                <h2>Conseils</h2>
                <ul>
                    <li>Vérifiez le taux prélevé par votre employeur.</li>
                    <li>Conservez vos fiches de paie et bulletins.</li>
                    <li>Remplissez correctement votre déclaration d'impôts pour maximiser les récupérations.</li>
                </ul>
            </div>
        `
    },
        "articulo-rav-paro": {
        title: "RAV et chômage en Suisse : comment fonctionne l'assurance chômage",
        description: "Guide complet sur le chômage en Suisse, l'assurance-chômage (AC), le RAV et vos droits de travailleur.",
        keywords: "chômage suisse, assurance chômage, RAV, allocations chômage suisse",
        category: 'Travail',
        hub: 'trabajo',
        slug: "rav-paro-suiza",
        readingTime: 7,
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        imageAlt: "Centre de l'assurance-chômage suisse offrant des services aux demandeurs d'emploi",
        summary: "L'assurance-chômage suisse couvre jusqu'à 80% du salaire pendant 150-200 jours selon l'ancienneté. Le RAV est obligatoire pour les demandeurs d'emploi.",
        content: `
            <div class="article-content">
                <h2>L'Assurance-Chômage (AC)</h2>
                <p>En Suisse, l'assurance-chômage est <strong>obligatoire</strong> pour tous les salariés.</p>
                <ul>
                    <li><strong>Cotisations :</strong> Partagées entre salarié (0.5%) et employeur (1%).</li>
                    <li><strong>Durée de prestations :</strong> 150-200 jours selon ancienneté.</li>
                    <li><strong>Montant :</strong> 80% du salaire brut (jusqu'à CHF 196/jour).</li>
                </ul>

                <h2>Le RAV (Centre de l'Assurance-Chômage)</h2>
                <p>Le RAV est l'office régional de l'assurance-chômage. <strong>Obligatoire</strong> de s'inscrire.</p>
                <ul>
                    <li>Inscription : dans les 8 jours après perte d'emploi.</li>
                    <li>Rendez-vous réguliers (tous les 2 semaines généralement).</li>
                    <li>Recherche active d'emploi : obligation.</li>
                </ul>

                <h2>Conditions</h2>
                <ul>
                    <li><strong>Ancienneté :</strong> Minimum 12 mois de cotisations dans les 24 derniers mois.</li>
                    <li><strong>Raison du chômage :</strong> Sans faute grave de votre part.</li>
                    <li><strong>Cherche activement :</strong> Documents de demande d'emploi.</li>
                </ul>

                <h2>Conseils</h2>
                <ul>
                    <li>Inscrivez-vous au RAV <strong>immédiatement</strong>.</li>
                    <li>Documentez vos recherches d'emploi.</li>
                    <li>Respectez les rendez-vous RAV (obligatoire).</li>
                    <li>Demandez formation/aide RAV si nécessaire.</li>
                </ul>
            </div>
        `
    },
        "articulo-salarios": {
        title: "Salaires en Suisse par secteur et region : combien gagne-t-on ?",
        description: "Decouvrez le salaire moyen en Suisse, les differences par canton, le calculateur Salarium et l'existence du salaire minimum.",
        keywords: "salaire suisse, salaire moyen suisse, salarium, salaire minimum geneve",
        category: 'Marche du travail',
        hub: 'trabajo',
        slug: "salaires-suisse",
        readingTime: 5,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/salarios-sueldo-suiza.jpg",
        imageAlt: "Certificat de salaire suisse (Lohnausweis) avec des pieces de francs suisses sur un bureau professionnel",
        summary: 'La Suisse offre parmi les salaires les plus eleves au monde, mais le cout de la vie est proportionnel. Seuls quelques cantons (ex. Geneve, Neuchatel) ont un salaire minimum legal.',
        content: `
            <div class="article-content">
                <p>Les salaires en Suisse comptent parmi les plus eleves au monde, mais le cout de la vie l'est egalement. Il est essentiel de comprendre que votre pouvoir d'achat reel dependra de ce que vous gagnez face aux charges fixes de votre canton.</p>

                <h2>Existe-t-il un salaire minimum legal en Suisse ?</h2>
                <p>Au niveau federal, <strong>il n'existe pas</strong> de salaire minimum interprofessionnel. Cependant, certains cantons ont introduit leur propre salaire minimum horaire. Par exemple, Geneve et Neuchatel ont des salaires minimaux legaux qui avoisinent les 23-24 CHF de l'heure (soit environ 4 000 CHF bruts par mois a temps complet).</p>

                <h2>Le calculateur Salarium</h2>
                <p>Pour savoir si une offre d'emploi est juste pour votre secteur, votre experience, votre age et votre canton, l'outil le plus fiable est le <strong>Salarium</strong>, un calculateur statistique officiel maintenu par l'Office federal de la statistique (OFS).</p>

                <div class="callout info">
                    <strong>Lien utile :</strong> <a href="https://www.bfs.admin.ch/bfs/fr/home/statistiques/travail-remuneration/salaires-revenus-cout-travail/niveau-salaires-suisse/salarium.html" target="_blank">Calculateur de salaires Salarium</a>
                </div>

                <h2>Les conventions collectives de travail (CCT)</h2>
                <p>De nombreux secteurs (hotellerie, construction, coiffure) sont regis par des conventions collectives de travail (CCT / GAV). Ces conventions fixent des salaires minimaux obligatoires, le nombre de jours de vacances et le paiement des heures supplementaires, offrant une protection solide aux travailleurs.</p>
            </div>
        `
    },

"articulo-contratos": {
        title: "Contrats de travail en Suisse : droits et obligations",
        description: "Tout sur le contrat de travail suisse (CDI, CDD), les congés légaux et le versement du salaire complet en cas de maladie.",
        keywords: "contrat travail suisse, droits travailleurs suisse, congés suisse, code des obligations",
        category: 'Travail',
        hub: 'trabajo',
        slug: "contratos-de-trabajo-suiza",
        readingTime: 4,
        featuredImage: "media/guides/contratos-de-trabajo-suiza.jpg",
        imageAlt: "Deux personnes se serrant la main en signant un contrat de travail, représentant un accord de travail",
        summary: "Le marché du travail suisse est très libéral. La résiliation est libre (sous respect des délais de congé) et les congés minimums sont 4 semaines.",
        content: `
            <div class="article-content">
                <p>Le marché du travail suisse est très flexible et les conditions sont régulées principalement par le Code des obligations (CO) et les conventions collectives de travail (CCT).</p>

                <h2>Types de contrat</h2>
                <ul>
                    <li><strong>Contrat indéterminé (CDI) :</strong> c'est le plus courant. Il n'a pas de date de fin et permet à l'employeur ou au salarié de le résilier, en respectant toujours le délai de congé convenu ou légal.</li>
                    <li><strong>Contrat de durée déterminée (CDD) :</strong> signé pour une durée spécifique (par exemple, saison d'hiver, remplacement maternité).</li>
                    <li><strong>Travail temporaire :</strong> via des agences (Adecco, Manpower...), soumis à des règles spécifiques de cotisation et délai très flexible.</li>
                </ul>

                <h2>Journée de travail et congés</h2>
                <p>Par la loi, tout travailleur en Suisse a droit à un <strong>minimum de 4 semaines</strong> de congés payés par an (5 semaines si moins de 20 ans). La journée de travail standard est généralement <strong>8-9 heures</strong>, bien que cela puisse varier selon le secteur et le canton.</p>

                <h2>Versement du salaire</h2>
                <p>Le salaire est versé généralement <strong>une fois par mois</strong> (parfois à deux reprises). En cas de maladie sans assurance perte de gain, le salarié a droit à son <strong>salaire complet pendant 3 jours minimum</strong> (mais généralement 30 jours selon le Code des obligations, pouvant être réduit par CCT).</p>

                <h2>Droits et sécurité</h2>
                <ul>
                    <li><strong>Discrimination :</strong> interdite par la loi (âge, sexe, origine, religion, etc.).</li>
                    <li><strong>Accidents du travail :</strong> obligatoirement assurés par l'assurance responsabilité civile (LAA).</li>
                    <li><strong>Maternité :</strong> congés spécifiques et protection d'emploi (environ 14 semaines).</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Demandez une <strong>copie signée</strong> de votre contrat.</li>
                    <li>Vérifiez les délais de congé spécifiques (ils peuvent être plus avantageux dans une CCT ou un contrat privé).</li>
                    <li>En cas de litige, l'inspection du travail de votre canton peut vous conseiller gratuitement.</li>
                </ul>
            </div>
        `
    },
        "articulo-periodo-prueba": {
        title: "La période d'essai et les délais de congé en Suisse",
        description: "Connaissez vos droits pendant la période d'essai suisse et combien de temps de congé vous devez donner pour démissionner ou être licencié.",
        keywords: "période d'essai suisse, préavis licenciement suisse, probezeit",
        audience: 'worker',
        category: 'Travail',
        hub: 'trabajo',
        slug: "periodo-prueba-preaviso-suiza",
        readingTime: 3,
        featuredImage: "media/guides/periodo-prueba-preaviso-suiza.jpg",
        imageAlt: "Réunion d'examen professionnel à la fin de la période d'essai dans un bureau avec vue sur les montagnes suisses",
        summary: "La période d'essai standard est de 1 à 3 mois. Pendant ce temps, l'une ou l'autre des parties peut résilier le contrat avec 7 jours de préavis.",
        content: `
            <div class="article-content">
                <h2>La Période d'Essai (Probezeit / Temps d'essai)</h2>
                <p>Le premier mois d'un contrat de durée indéterminée est toujours considéré comme une période d'essai par la loi, sauf si le contrat en spécifie autrement. Cette période peut être prolongée par écrit jusqu'à un <strong>maximum de trois mois</strong>.</p>
                <p>Pendant ce temps, les deux parties peuvent résilier le contrat avec un <strong>préavis de sept jours</strong> (jours calendaires) et aucune justification supplémentaire n'est requise.</p>

                <h2>Les Délais de Congé (Kündigungsfrist / Délai de congé)</h2>
                <p>Une fois la période d'essai terminée, les délais légaux ou ceux convenus par contrat écrit (ou CCT) s'appliquent. Selon le Code des obligations, le cadre général est :</p>
                <ul>
                    <li><strong>1ère année de service :</strong> 1 mois (résiliation en fin de mois).</li>
                    <li><strong>De la 2e à la 9e année de service :</strong> 2 mois (résiliation en fin de mois).</li>
                    <li><strong>À partir de la 10e année de service :</strong> 3 mois (résiliation en fin de mois).</li>
                </ul>

                <div class="callout info">
                    <strong>Important :</strong> Le préavis doit toujours parvenir à votre patron AVANT le dernier jour ouvrable du mois pour que le mois suivant commence à compter.
                </div>
            </div>
        `
    },
        "articulo-buscar-empleo": {
        title: "Recherche d'emploi en Suisse : plates-formes et stratégies",
        description: "Guide complet pour chercher du travail en Suisse : jobsites, stratégies, langues et conseils pratiques.",
        keywords: "chercher emploi suisse, job.ch, jobup.ch, offres d'emploi suisse",
        category: 'Travail',
        hub: 'trabajo',
        slug: "buscar-empleo-suiza",
        readingTime: 4,
        featuredImage: "media/guides/buscar-empleo-suiza.jpg",
        imageAlt: "Personne cherchant un emploi en Suisse sur un ordinateur portable",
        summary: "En Suisse, chercher du travail en ligne est efficace via jobs.ch, jobup.ch et indeed.ch. Langage locale important (allemand/français/italien). Postulez rapidement - marché compétitif.",
        content: `
            <div class="article-content">
                <h2>Sites Principaux</h2>
                <ul>
                    <li><strong>jobs.ch :</strong> Bien connu en Suisse.</li>
                    <li><strong>jobup.ch :</strong> Beaucoup d'offres suisses.</li>
                    <li><strong>indeed.ch :</strong> Couverture large.</li>
                    <li><strong>job-room.ch :</strong> Plateforme officielle RAV/AECO.</li>
                    <li><strong>linkedin.com :</strong> Réseautage, très important en CH.</li>
                </ul>

                <h2>Conseils Pratiques</h2>
                <ul>
                    <li>Écrivez votre CV en <strong>français/allemand</strong> selon le canton.</li>
                    <li>Postulez <strong>immédiatement</strong> (concurrence forte).</li>
                    <li>Lettre de motivation personnalisée = important.</li>
                    <li>Si possible, déjà en Suisse = meilleur.</li>
                </ul>

                <h2>Langues</h2>
                <p>La langue est cruciale :</p>
                <ul>
                    <li><strong>Suisse alémanique :</strong> Allemand (très important).</li>
                    <li><strong>Suisse romande :</strong> Français.</li>
                    <li><strong>Suisse italienne :</strong> Italien.</li>
                    <li><strong>Anglais :</strong> Utile dans certains secteurs.</li>
                </ul>

                <h2>Sinon...</h2>
                <p>Pas de langue locale? Souvent refusé. Envisagez une formation linguistique courte avant.</p>
            </div>
        `
    },
        "articulo-alquiler": {
        title: "Louer un logement en Suisse : le processus étape par étape",
        description: "Guide complet sur la location en Suisse : le dossier, les étapes, les droits des locataires et les pièges à éviter.",
        keywords: "louer suisse, dossier location, trouver logement suisse, contrat bail suisse",
        category: 'Logement',
        hub: 'vivienda',
        slug: "alquilar-vivienda-suiza",
        readingTime: 8,
        featuredImage: "media/guides/alquilar-vivienda-suiza.jpg",
        imageAlt: "Clés de logement suisse avec document de bail et demande de location",
        summary: "La location en Suisse est très compétitive. Vous avez besoin d'un dossier solide : CDI, 3 mois de salaire, références. Le marché est serré, préparez-vous bien.",
        content: `
            <div class="article-content">
                <h2>Le Marché de la Location en Suisse</h2>
                <p>Trouver un logement est souvent <strong>difficile et compétitif</strong>. Les propriétaires sont très sélectifs.</p>

                <h2>Votre Dossier de Location</h2>
                <p>Préparez un dossier complet avec :</p>
                <ul>
                    <li><strong>Identité :</strong> Passeport, permis suisse.</li>
                    <li><strong>Travail :</strong> Contrat CDI (très important).</li>
                    <li><strong>Finances :</strong> 3 derniers bulletins de salaire.</li>
                    <li><strong>Références :</strong> lettre de précédent propriétaire.</li>
                    <li><strong>Emploi salarié :</strong> Certificat de l'employeur.</li>
                    <li><strong>Crédit :</strong> Historique de crédit (si possible).</li>
                </ul>

                <h2>Les Étapes</h2>
                <ol>
                    <li>Trouvez un bien sur <strong>immoscout24.ch</strong> ou <strong>homegate.ch</strong>.</li>
                    <li>Contactez le propriétaire/agence (réponses rapides = meilleur signe).</li>
                    <li>Visitez et postulez avec votre dossier.</li>
                    <li>Signez le contrat.</li>
                    <li>Payez la garantie (compte bloqué).</li>
                    <li>Prenez possession.</li>
                </ol>

                <h2>Droits des Locataires</h2>
                <ul>
                    <li>Vous ne pouvez pas être expulsé sans raison légale.</li>
                    <li>Le propriétaire doit donner 3 mois d'avis de fin de bail.</li>
                    <li>Les loyers ne peuvent augmenter que légèrement chaque année.</li>
                </ul>

                <h2>Conseils Pratiques</h2>
                <ul>
                    <li>Postez dès que vous voyez une annonce (compétition importante).</li>
                    <li>Avec permis L, préparez-vous à des refus.</li>
                    <li>Avec CDI c'est mieux.</li>
                    <li>Agences immobilières = plus strict que propriétaires privés.</li>
                </ul>
            </div>
        `
    },
        "articulo-fianzas": {
        title: "Garanties de location et droits des locataires (ASLOCA)",
        description: "Guide complet sur les garanties de location en Suisse, les droits des locataires et comment les propriétaires les utilisent.",
        keywords: "garantie location suisse, caution location, droits locataires suisse, ASLOCA",
        category: 'Logement',
        hub: 'vivienda',
        slug: "fianzas-alquiler-suiza",
        readingTime: 3,
        featuredImage: "media/guides/fianzas-alquiler-suiza.jpg",
        imageAlt: "Document de garantie de location avec stylo et clés de maison suisse",
        summary: "En Suisse, la garantie est généralement de 1 mois de loyer. Elle doit être placée sur un compte bloqué. Le propriétaire ne peut l'utiliser que dans des cas spécifiques.",
        content: `
            <div class="article-content">
                <h2>La Garantie de Location</h2>
                <p>La garantie est une somme que vous versez avant de prendre possession du logement. Elle sert à couvrir d'éventuels dégâts ou loyers impayés.</p>
                <ul>
                    <li><strong>Montant :</strong> généralement 1 mois de loyer (parfois jusqu'à 2 mois selon le contrat).</li>
                    <li><strong>Compte bloqué :</strong> légalement, la garantie doit être versée sur un <strong>compte bloqué</strong> (compte de garantie), pas simplement remise au propriétaire.</li>
                    <li><strong>Intérêts :</strong> les intérêts générés appartiennent au locataire (généralement très peu).</li>
                </ul>

                <h2>Récupération de la Garantie</h2>
                <p>À la fin du bail, le propriétaire doit restituer votre garantie plus les intérêts.</p>
                <ul>
                    <li>Si dégâts : le propriétaire peut retenir une partie (mais doit justifier et vous prouver).</li>
                    <li>Délai normal : 30 jours après votre départ.</li>
                    <li>En cas de litige : contactez ASLOCA ou l'autorité cantonale.</li>
                </ul>

                <h2>Conseils Pratiques</h2>
                <ul>
                    <li>Demandez un <strong>reçu signé</strong> pour votre garantie.</li>
                    <li>Vérifiez qu'elle est versée sur un compte bloqué.</li>
                    <li>Documentez l'état du logement (photos) à votre arrivée et départ.</li>
                </ul>
            </div>
        `
    },
        "articulo-costo-vida": {
        title: "Budgets en Suisse : logement, alimentation et impots",
        description: "Planification financiere en Suisse avec exemples de budgets pour celibataires, couples et familles face au logement, a l'alimentation et aux impots.",
        keywords: "budget suisse, planification financiere suisse, familles suisses, cout vie suisse",
        category: 'Cout de la vie',
        hub: 'vivir-en-suiza',
        slug: "budget-suisse",
        readingTime: 5,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/presupuesto-suiza.png",
        imageAlt: "Illustration d'un budget : portefeuille, calculatrice et depenses pour vivre en Suisse",
        supportingImages: [],
        summary: 'Guide de planification financiere pour la Suisse avec des exemples de budgets reels, des celibataires aux familles avec enfants.',
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>La Suisse est l'un des pays avec le cout de la vie le plus eleve d'Europe, et c'est pourquoi optimiser chaque franc est essentiel. Une bonne planification financiere permet d'eviter les mauvaises surprises, de maitriser ses depenses et de prendre des decisions eclairees sur le logement, l'alimentation et les impots. Le Service de conseil budgetaire suisse (Conseil Budgetaire) publie des exemples reels utiles comme reference pour la vie quotidienne.</p>

                <h2>Budget pour une personne seule</h2>
                <p>Vivre seul exige d'equilibrer les charges fixes avec les revenus mensuels nets.</p>
                <ul>
                    <li><strong>Loyer :</strong> un studio ou un appartement d'une piece coute generalement entre 1 400 et 2 200 CHF charges comprises. Prevoyez des augmentations annuelles et partagez les depenses si possible.</li>
                    <li><strong>Alimentation :</strong> cuisiner a la maison dans des chaines comme Migros ou Coop maintient les depenses entre 400 et 500 CHF ; manger au restaurant double cette enveloppe.</li>
                    <li><strong>Transport :</strong> l'abonnement mensuel urbain tourne autour de 80 a 140 CHF ; les moins de 25 ans ou ceux qui habitent pres du travail peuvent opter pour des formules plus economiques.</li>
                    <li><strong>Assurance maladie :</strong> la prime de base LAMal va de 300 a 450 CHF (selon le canton et l'age) ; choisissez la franchise et reservez une reserve pour couvrir les quotes-parts.</li>
                </ul>

                <h2>Budget pour un couple sans enfants</h2>
                <p>Deux adultes partagent les depenses mais menagent aussi de la place pour les loisirs et l'avenir.</p>
                <ul>
                    <li><strong>Logement :</strong> un appartement de 2 a 3 pieces s'eleve a 2 300-3 200 CHF ; ils se partagent l'electricite, internet et l'entretien.</li>
                    <li><strong>Loisirs :</strong> restaurants, salle de sport et escapades representent 200 a 400 CHF ; fixez un plafond mensuel pour ne pas sacrifier l'epargne.</li>
                    <li><strong>Assurances :</strong> en plus de la LAMal, ajoutez la responsabilite civile et l'assurance menage, surtout si vous avez des animaux de compagnie ou une voiture.</li>
                    <li><strong>Epargne :</strong> reservez au moins 10 a 15 % des revenus pour les urgences ou des projets (recommandation des conseillers budgetaires suisses).</li>
                </ul>

                <h2>Budget pour une famille avec enfants</h2>
                <p>Les familles font face a des postes de depenses qui se multiplient avec chaque enfant.</p>
                <ul>
                    <li><strong>Creche :</strong> une place coute entre 1 200 et 2 000 CHF par enfant, bien que les subventions cantonales puissent reduire ce montant.</li>
                    <li><strong>Education :</strong> materiaux, excursions et cours de langues representent 100 a 200 CHF par mois et par enfant.</li>
                    <li><strong>Alimentation :</strong> preparer des menus familiaux porte la depense a 700-900 CHF mensuels.</li>
                    <li><strong>Vetements :</strong> planifiez les renouvellements et profitez des promotions pour maitriser ce poste.</li>
                    <li><strong>Transport :</strong> abonnements familiaux ou trajets scolaires ajoutent 150 a 250 CHF.</li>
                    <li><strong>Activites parascolaires :</strong> musique, sport ou soutien scolaire peuvent couter 100 a 250 CHF par enfant et par mois.</li>
                </ul>

                <h3>Famille avec 1 enfant</h3>
                <p>Un exemple typique combine un loyer de 2 400 CHF, une creche partielle de 1 000 CHF et une alimentation d'environ 650 CHF. Partager les trajets aide a reduire les depenses de transport.</p>
                <h3>Famille avec 2 enfants</h3>
                <p>Les frais de creche et d'activites parascolaires doublent ; privilegiez les options publiques ou les structures avec des tarifs degressifs par fratrie.</p>
                <h3>Famille avec 3 enfants</h3>
                <p>L'accent doit etre mis sur l'efficacite : energie et transport moins couteux, un fonds pour les imprevus et la scolarite publique gratuite.</p>

                <h2>Pourquoi etablir un budget ?</h2>
                <p>Un budget bien planifie transforme l'incertitude en decisions eclairees.</p>
                <ul>
                    <li><strong>Maitriser les depenses :</strong> noter chaque poste revele ou il est possible d'economiser (abonnements, achats impulsifs, mobilite).</li>
                    <li><strong>Planifier l'avenir :</strong> savoir ce qu'il reste permet de decider si on epargne pour un logement, change de voiture ou investit dans l'education.</li>
                    <li><strong>Constituer une reserve d'urgence :</strong> les conseillers recommandent au minimum trois mois de charges fixes pour faire face aux urgences.</li>
                    <li><strong>Vivre avec plus de serenite financiere :</strong> moins de surprises signifie plus de confiance pour s'adapter aux changements de canton, de famille ou de travail.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://conseil-budgetaire.ch/" target="_blank" rel="noopener noreferrer">Service de conseil budgetaire suisse (Conseil Budgetaire)</a> - exemples reels de budgets et conseil gratuit.</li>
                    <li><a href="https://conseil-budgetaire.ch/individus/budgethilfen/budgetvorlagen" target="_blank" rel="noopener noreferrer">Modeles de budgets</a> prets a telecharger et adapter.</li>
                </ul>
            </div>
        `
    },

"articulo-frontaliers": {
        title: "Travailleurs frontaliers : regles et fiscalite",
        description: "Tout ce que vous devez savoir si vous residez en France, en Allemagne ou en Italie et travaillez en Suisse comme frontalier (Permis G).",
        keywords: "frontalier suisse, permis G, impots frontaliers suisse, vivre en france travailler en suisse",
        category: 'Frontaliers',
        hub: 'fronterizos',
        slug: "travailleurs-frontaliers-suisse",
        readingTime: 4,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/trabajadores-fronterizos-suiza.jpg",
        imageAlt: "Carte de l'Europe avec les frontieres entre la Suisse, la France, l'Allemagne et l'Italie, illustrant le flux des travailleurs frontaliers",
        summary: "Le Permis G vous permet de resider en France ou en Allemagne et de travailler en Suisse. Vous devez choisir entre la LAMal et l'assurance de votre pays de residence (droit d'option).",
        content: `
            <div class="article-content">
                <p>Les <em>frontaliers</em> sont des personnes residant de maniere permanente dans un pays voisin (principalement la France, l'Allemagne ou l'Italie) et franchissant la frontiere pour travailler en Suisse.</p>

                <h2>Le Permis G</h2>
                <p>Pour travailler dans ce cadre, vous avez besoin d'un <strong>Permis G (permis de travail frontalier)</strong>. Une condition essentielle pour le conserver est que vous devez retourner a votre residence principale a l'etranger au moins une fois par semaine (la plupart le font quotidiennement).</p>

                <h2>Fiscalite du frontalier</h2>
                <p>Les regles fiscales varient considerablement selon le canton ou vous travaillez et votre pays de residence (en raison des conventions de double imposition).</p>
                <ul>
                    <li><strong>Geneve :</strong> si vous residez en France et travaillez a Geneve, le canton de Geneve preleve l'impot a la source directement sur votre salaire.</li>
                    <li><strong>Vaud, Neuchatel, Jura :</strong> dans ces cantons, l'impot est generalement paye integralement en France et l'employeur suisse ne preleve pas d'impot a la source (si vous remettez a temps votre certificat de residence fiscale).</li>
                </ul>

                <h2>Assurance maladie (le droit d'option)</h2>
                <p>En debutant une activite en Suisse, vous disposez de 3 mois pour exercer votre "droit d'option". Vous pouvez choisir de vous assurer dans le systeme suisse (LAMal frontalier) ou dans le systeme de votre pays de residence (ex. Securite sociale francaise / CMU). <strong>Attention :</strong> cette decision est irrevocable. Si vous ne choisissez pas, vous serez automatiquement affilies a la LAMal suisse.</p>
            </div>
        `
    },

"articulo-diplomas": {
        title: "Reconnaissance des diplômes étrangers en Suisse",
        description: "Guide complet sur la reconnaissance des diplômes espagnols en Suisse, conditions et ressources officielles.",
        keywords: "reconnaissance diplômes suisse, diplôme étranger, certification suisse",
        category: 'Études',
        hub: 'recursos',
        slug: "diplomas-extranjeros-reconocimiento-suiza",
        readingTime: 5,
        featuredImage: "media/guides/diplomas-extranjeros-reconocimiento-suiza.jpg",
        imageAlt: "Diplôme avec traduction et certification pour la Suisse",
        summary: "Les diplômes UE/AELE sont généralement reconnus. Vous pouvez avoir besoin d'une apostille, traduction, ou pour certains métiers, homologation formelle.",
        content: `
            <div class="article-content">
                <h2>Diplômes de l'UE/AELE</h2>
                <p>Généralement <strong>reconnus automatiquement</strong> en Suisse si :</p>
                <ul>
                    <li>Diplôme de pays UE/AELE.</li>
                    <li>Reconnu dans votre pays d'origine.</li>
                </ul>

                <h2>Ce que Vous Avez Besoin</h2>
                <ul>
                    <li><strong>Apostille :</strong> Demandez-la auprès du ministère de l'Éducation espagnol.</li>
                    <li><strong>Traduction :</strong> En français/allemand selon le canton.</li>
                    <li><strong>Relevé de notes :</strong> Souvent requis.</li>
                </ul>

                <h2>Certains Métiers Réglementés</h2>
                <p>Pour les professions réglementées (infirmiers, architectes, avocats, etc.), une <strong>homologation formelle</strong> peut être requise.</p>
                <p>Contactez :</p>
                <ul>
                    <li><strong>SERI :</strong> Secrétariat d'État à la formation, à la recherche et à l'innovation.</li>
                    <li><strong>Offices cantonaux :</strong> Selon votre domaine.</li>
                </ul>

                <h2>Conseil</h2>
                <p>Demandez à l'avance à votre futur employeur ou université quels documents précis ils exigent.</p>
            </div>
        `
    },
        "articulo-sistema-escolar": {
        title: "Le système scolaire suisse expliqué",
        description: "Guide complet sur l'éducation en Suisse : école obligatoire, lycée, apprentissage et différences cantonales.",
        keywords: "école suisse, système éducatif suisse, scolarité obligatoire, apprentissage suisse",
        category: 'Éducation',
        hub: 'recursos',
        slug: "sistema-escolar-suiza",
        readingTime: 5,
        featuredImage: "media/guides/sistema-escolar-suiza.jpg",
        imageAlt: "Enfants suisses à l'école primaire dans une classe typique suisse",
        summary: "L'école obligatoire est 9 ans (6-15 ans) et gratuite. Après : apprentissage (majorité) ou lycée. Système cantonal = différences locales.",
        content: `
            <div class="article-content">
                <h2>Structure Générale</h2>
                <ul>
                    <li><strong>Primaire :</strong> 6-12 ans (6 ans).</li>
                    <li><strong>Secondaire I :</strong> 12-15 ans (3 ans).</li>
                    <li><strong>Secondaire II :</strong> 15-19 ans (apprentissage ou lycée).</li>
                </ul>

                <h2>Obligatoire</h2>
                <p><strong>Gratuite et obligatoire</strong> : 9 ans (6-15 ans). Écoles publiques = gratuites.</p>

                <h2>Après la Scolarité Obligatoire</h2>
                <ul>
                    <li><strong>Apprentissage :</strong> 2/3 des élèves (formation professionnelle 3-4 ans).</li>
                    <li><strong>Lycée/Gymnase :</strong> Préparation aux études universitaires (4 ans).</li>
                </ul>

                <h2>Différences Cantonales</h2>
                <p>Chaque canton a son système (âges, durées, niveaux peuvent varier légèrement).</p>

                <h2>Langue</h2>
                <p>Langue d'enseignement = langue officielle du canton.</p>

                <h2>Conseil</h2>
                <p>Contactez le service d'éducation de votre canton pour détails spécifiques.</p>
            </div>
        `
    },
        "articulo-transporte": {
        title: "Transports publics en Suisse : CFF/SBB, Halbtax et abonnements",
        description: "Guide complet sur les transports en Suisse : trains, bus, tarifs et comment économiser avec des abonnements.",
        keywords: "transport public suisse, CFF SBB, Halbtax, Tagespass, trains suisses",
        category: 'Vie quotidienne',
        hub: 'vivir-en-suiza',
        slug: "transporte-publico-suiza-cff-sbb",
        readingTime: 4,
        featuredImage: "media/guides/transporte-publico-suiza-cff-sbb.jpg",
        imageAlt: "Train CFF/SBB moderne arrivant en gare suisse",
        summary: "Les transports en Suisse sont excellents. Les trains (CFF/SBB) relient toutes les villes. Halbtax offre 50% de réduction. Les cartes d'abonnement mensuelles sont très utiles.",
        content: `
            <div class="article-content">
                <h2>L'Opérateur Principal : CFF/SBB</h2>
                <p><strong>CFF (Chemins de fer fédéraux suisses)</strong> ou <strong>SBB (Schweizerische Bundesbahnen)</strong> gère la plupart des trains en Suisse.</p>
                <ul>
                    <li>Trains rouges = CFF/SBB.</li>
                    <li>Réseau très dense et ponctuel.</li>
                    <li>Site : <strong>sbb.ch</strong> ou <strong>cff.ch</strong>.</li>
                </ul>

                <h2>Tarifs et Options</h2>
                <ul>
                    <li><strong>Billet simple :</strong> pricier pour trajets courts/longs.</li>
                    <li><strong>Halbtax :</strong> CHF 120/an ou CHF 60/6 mois = 50% de réduction sur tous les trajets.</li>
                    <li><strong>GA (General-Abonnement) :</strong> CHF 3'300/an = illimité en Suisse entière.</li>
                    <li><strong>Cartes mensuelles :</strong> moins cher pour trajets réguliers.</li>
                </ul>

                <h2>Buses et Tramways</h2>
                <p>Chaque ville a son réseau de bus/tramways. Les abonnements mensuels existent aussi.</p>

                <h2>Conseils</h2>
                <ul>
                    <li>Achetez un Halbtax si vous voyagez régulièrement.</li>
                    <li>Utilisez l'app SBB pour consulter les horaires et acheter des billets.</li>
                    <li>Les retards sont rares, attendez-vous à la punctualité suisse\!</li>
                </ul>
            </div>
        `
    },
        "articulo-ciudadania": {
        title: "Citoyenneté suisse et processus de naturalisation pour Espagnols",
        description: "Tout sur la nationalité suisse : conditions, délais, coûts et étapes pour devenir citoyen suisse.",
        keywords: "citoyenneté suisse, naturalisation suisse, devenir suisse, passeport suisse",
        category: 'Démarches',
        hub: 'tramites',
        slug: "ciudadania-suiza-naturalizacion",
        readingTime: 5,
        featuredImage: "media/guides/ciudadania-suiza-naturalizacion.jpg",
        imageAlt: "Passeport rouge suisse symbole de la citoyenneté suisse",
        summary: "Pour la naturalisation : au minimum 10 ans de résidence (5 pour jeunes), intégration culturelle, langue locale et approbation cantonale. Coûts : CHF 1'500-4'000.",
        content: `
            <div class="article-content">
                <h2>Conditions Générales</h2>
                <ul>
                    <li><strong>Résidence :</strong> Minimum 10 ans en Suisse (5 ans pour certains jeunes).</li>
                    <li><strong>Intégration :</strong> Participation à la vie locale, respect des lois.</li>
                    <li><strong>Langue :</strong> Connaissance suffisante de la langue officielle du canton.</li>
                    <li><strong>Approbation cantonale :</strong> Les conditions varient par canton.</li>
                </ul>

                <h2>Procédure</h2>
                <ol>
                    <li>Demande auprès de votre canton de domicile.</li>
                    <li>Enquête d'intégration (entretien).</li>
                    <li>Acceptation cantonale et communale.</li>
                    <li>Vote au niveau communal (algunos cantons).</li>
                    <li>Naturalisation formelle.</li>
                </ol>

                <h2>Coûts</h2>
                <ul>
                    <li><strong>Niveau fédéral :</strong> CHF 100-200.</li>
                    <li><strong>Niveau cantonal :</strong> CHF 1'000-4'000 selon le canton.</li>
                </ul>

                <h2>Délai</h2>
                <p>Comptez environ <strong>1-2 ans</strong> du début du processus.</p>

                <h2>Conseil</h2>
                <p>Contactez les autorités de votre canton pour connaître les étapes exactes et conditions spécifiques.</p>
            </div>
        `
    },
        "articulo-consulados": {
        title: "Consulats espagnols en Suisse : où ils sont et quelles démarches ils font",
        description: "Guide complet des trois consulats espagnols en Suisse (Genève, Berne, Zurich) : services, rendez-vous, passeports, registre consulaire.",
        keywords: "consulat espagnol suisse, consulat genève, consulat zurich, consulat berne, registre consulaire, passeport suisse, MAEC",
        audience: 'newcomer',
        category: 'Ressources Officielles',
        hub: 'tramites',
        slug: "consulados-espanoles-suiza",
        readingTime: 5,
        dateUpdated: "Mars 2026",
        summary: "L'Espagne a trois consulats en Suisse : Genève, Berne et Zurich. L'enregistrement consulaire est la première démarche que vous devez faire à votre arrivée. Sans lui, vous ne pouvez pas renouveler votre passeport ni voter.",
        featuredImage: "media/guides/consulados-espanoles-suiza.png",
        imageAlt: "Siège d'un consulat espagnol en Suisse avec le drapeau officiel",
        content: `
            <div class="article-content">
                <p>Si vous êtes citoyen espagnol vivant en Suisse, le consulat est votre guichet officiel pour toutes les démarches qui lient votre vie à l'étranger à l'administration espagnole. Il y a trois consulats généraux d'Espagne en Suisse, et vous devez vous adresser à celui qui correspond à votre canton de résidence.</p>

                <div class="callout info">
                    <strong>Première étape obligatoire :</strong> Une fois installé en Suisse, la démarche la plus importante est de vous <strong>inscrire au Registre d'Inscription Consulaire</strong>. Sans cet enregistrement, vous ne pourrez pas renouveler votre DNI ou passeport, ni voter aux élections espagnoles depuis l'étranger.
                </div>

                <h2>Les 3 Consulats Espagnols en Suisse</h2>

                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1.25rem; margin:1.5rem 0;">
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">Consulat Général à Genève</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantons :</strong> Genève, Vaud, Valais, Fribourg, Neuchâtel, Jura</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Adresse :</strong> Avenue Blanc 53, 1202 Genève</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Téléphone :</strong><br>+41 22 749 14 60</p>
                        <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portail officiel →</a>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">Consulat Général à Berne</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantons :</strong> Berne, Soleure, Fribourg (partie), Valais (partie)</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Adresse :</strong> Marienstrasse 12, 3005 Berne</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Téléphone :</strong><br>+41 31 356 22 20</p>
                        <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portail officiel →</a>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">Consulat Général à Zurich</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantons :</strong> Zurich, Glaris, Appenzell Rhodes-Intérieures, Appenzell Rhodes-Extérieures, Saint-Gall, Schaffhouse, Thurgovie, Argovie (partie)</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Adresse :</strong> Dufourstrasse 101, 8008 Zurich</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Téléphone :</strong><br>+41 44 254 40 00</p>
                        <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portail officiel →</a>
                    </div>
                </div>

                <h2>Démarches Principales</h2>
                <h3>1. Inscription au Registre d'Inscription Consulaire</h3>
                <p><strong>Démarche prioritaire.</strong> Démarche administrative obligatoire qui doit être effectuée dans les 90 jours suivant votre installation en Suisse.</p>
                <ul>
                    <li><strong>Documents requis :</strong> Passeport/DNI, certificat d'enregistrement de la commune.</li>
                    <li><strong>Délai :</strong> Généralement 30 minutes.</li>
                    <li><strong>Coût :</strong> Gratuit.</li>
                </ul>

                <h3>2. Passeport / DNI</h3>
                <p>Renouvellement ou demande d'un nouveau passeport espagnol.</p>
                <ul>
                    <li><strong>Délai :</strong> 2-4 semaines (recommandé d'appeler d'abord).</li>
                    <li><strong>Coût :</strong> Environ CHF 90-100 (passeport).</li>
                </ul>

                <h3>3. Apostille</h3>
                <p>Certification internationale de documents espagnols.</p>

                <h3>4. Vote</h3>
                <p>Si vous êtes inscrit au registre consulaire, vous pouvez voter aux élections espagnoles.</p>

                <h2>Conseils Pratiques</h2>
                <ul>
                    <li><strong>Prenez rendez-vous par email ou téléphone</strong> (pas de walk-in généralement).</li>
                    <li><strong>Inscription = prioritaire</strong> dès arrivée.</li>
                    <li><strong>Documents à jour :</strong> Passeport, DNI, actes (mariage, naissance...).</li>
                    <li><strong>Délais :</strong> Même si Suisse = efficace, compte 2-4 semaines.</li>
                </ul>

                <h2>Liens Utiles</h2>
                <ul>
                    <li><a href="https://www.exteriores.gob.es" target="_blank" rel="noopener noreferrer">Ministère des Affaires étrangères (Espagne)</a></li>
                    <li>Portails des consulats (voir ci-dessus).</li>
                </ul>
            </div>
        `
    }
};

// Technical SEO: ensure every FR article has a stable, clean slug for canonical URLs and sitemap generation.
    const slugMap = {
	        "articulo-permisos": "tramites-llegada-suiza",
        "articulo-mudarse-suiza": "mudarse-a-suiza-desde-espana",
        "articulo-registro": "inscription-commune-suisse",
        "articulo-lamal": "assurance-maladie-suisse-lamal",
        "articulo-franquicia": "franchise-et-quote-part-suisse",
        "articulo-impuestos": "impots-en-suisse",
        "articulo-impuesto-fuente": "impot-a-la-source-suisse-quellensteuer",
        "articulo-seguros-sociales": "assurances-sociales-avs-ai-lpp-et-chomage",
        "articulo-rav-paro": "chomage-rav-suisse",
        "articulo-salarios": "salaires-en-suisse-par-secteur-et-region",
        "articulo-contratos": "contrats-de-travail-en-suisse-droits-et-obligations",
        "articulo-periodo-prueba": "periode-dessai-et-delais-de-conge-en-suisse",
        "articulo-buscar-empleo": "recherche-demploi-plateformes-et-strategies",
        "articulo-alquiler": "louer-appartement-suisse",
        "articulo-fianzas": "garanties-de-loyer-et-droits-des-locataires",
        "articulo-costo-vida": "cout-de-la-vie-en-suisse-logement-nourriture-impots",
        "articulo-frontaliers": "travailleurs-frontaliers-regles-et-fiscalite",
        "articulo-diplomas": "reconnaissance-des-diplomes-etrangers-en-suisse",
        "articulo-sistema-escolar": "le-systeme-scolaire-en-suisse-explique",
        "articulo-sistema-salud": "systeme-de-sante-medecins-et-urgences",
        "articulo-transporte": "transports-publics-cff-demi-tarif-et-ag",
        "articulo-ciudadania": "citoyennete-suisse-et-naturalisation",
        "articulo-consulados": "consulats-espagne-suisse",
        "articulo-tramites-llegada": "checklist-demarches-du-premier-mois-en-suisse",
        "articulo-trabajar-sin-permiso-fisico": "travailler-avant-de-recevoir-la-carte-de-permis",
        "articulo-reagrupacion-familiar": "regroupement-familial-en-suisse-faire-venir-sa-famille",
        "articulo-subalquiler": "sous-location-en-suisse-bases-legales-et-conseils",
        "articulo-jubilacion": "retraite-en-suisse-comprendre-avs-et-lpp-3-piliers",
        "articulo-vivir-sin-trabajar": "vivre-en-suisse-sans-travailler-ue-aele-conditions",
        "articulo-ai-invalidez": "assurance-invalidite-ai-iv-reinsertion-avant-rente",
        "articulo-vacunas": "vaccins-en-suisse-recommandations-pas-dobligation-generale",
        "articulo-danza-patos": "le-saviez-vous-la-danse-des-canards-est-dorigine-suisse",
        "articulo-introduccion-suiza": "comment-fonctionne-la-suisse-guide",
        "articulo-cantones": "les-26-cantons-suisses-ce-qui-change-dun-canton-a-lautre",
        "articulo-lenguas": "langues-en-suisse-allemand-francais-italien-romanche"
    };

    Object.entries(slugMap).forEach(([key, slug]) => {
        if (window.siteContent.fr.articles[key]) window.siteContent.fr.articles[key].slug = slug;
    });
})();
