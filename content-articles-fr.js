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
        title: "Comment s'inscrire à son arrivée en Suisse (Contrôle des habitants)",
        description: "Guide pas à pas pour l'inscription dans votre nouvelle commune après un déménagement en Suisse. Délais, documents et suite de la procédure.",
        keywords: "inscription commune suisse, enregistrement suisse, contrôle des habitants, vivre en Suisse, premier mois en Suisse",
        category: 'Démarches',
        hub: 'tramites',
        slug: "inscription-commune-suisse",
        readingTime: 3,
        featuredImage: "media/guides/registrarse-en-suiza.jpg",
        imageAlt: "Façade d'un bâtiment administratif d'une commune suisse avec le panneau Contrôle des habitants",
        summary: "Si vous vous installez en Suisse pour y résider, vous devez généralement vous inscrire dans votre commune dans les quelques jours qui suivent votre arrivée. L'attestation d'inscription permet souvent de commencer à travailler et d'avancer les démarches en attendant la carte du permis.",
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>L'<strong>inscription à la commune</strong> (Contrôle des habitants / <i>Contrôle des habitants</i> / <i>Einwohnerkontrolle</i>) est la démarche qui <strong>formalise votre résidence</strong> en Suisse. Elle est essentielle pour lancer tout le circuit administratif: permis, assurance maladie, impôts, école, etc.</p>
                <p>Point important: <strong>toutes les personnes qui "entrent en Suisse" ne doivent pas forcément s'inscrire</strong>. Cet article s'adresse aux personnes qui <strong>s'installent pour vivre</strong> en Suisse, pour le travail, les études ou des raisons familiales, et qui ont besoin d'un domicile officiel.</p>

                <h2>Comment fonctionne le système</h2>
                <ol>
                    <li><strong>Vous choisissez votre commune</strong> et identifiez le bureau d'inscription compétent.</li>
                    <li><strong>Vous prenez rendez-vous</strong> si nécessaire, ce qui est fréquent dans les grandes villes.</li>
                    <li><strong>Vous présentez vos documents</strong>, payez un émolument et déclarez votre domicile.</li>
                    <li>La commune vous remet une <strong>attestation ou un certificat d'inscription</strong> selon le canton et votre situation.</li>
                    <li>Le dossier est transmis à l'<strong>autorité cantonale de migration</strong> et la <strong>carte du permis</strong> arrive plus tard par courrier.</li>
                </ol>
                <div class="callout warning">
                    <strong>Délais:</strong>
                    <p>Dans beaucoup de cantons, l'inscription doit être faite dans les <strong>14 jours</strong> et, si vous venez pour travailler, généralement <strong>avant le premier jour de travail</strong>. Les détails changent selon le canton et la commune: vérifiez toujours le site officiel de votre commune.</p>
                </div>

                <h2>Conditions et règles</h2>
                <h3>1) Qui doit s'inscrire, et qui ne le doit pas?</h3>
                <ul>
                    <li><strong>Touriste / court séjour:</strong> il n'y a normalement <strong>pas d'inscription communale</strong> comme résident.</li>
                    <li><strong>Vous vous installez pour résider:</strong> en pratique, <strong>oui</strong>, vous devez vous inscrire dans votre commune dans le délai local.</li>
                    <li><strong>Chercheur d'emploi UE/AELE:</strong> vous pouvez rester un certain temps pour chercher un travail, selon des règles spécifiques. Si vous vous établissez effectivement, <strong>vous devez régulariser</strong> votre situation selon les règles cantonales.</li>
                    <li><strong>Frontalier avec permis G:</strong> vous travaillez en Suisse mais <strong>vous vivez hors de Suisse</strong>. Il ne s'agit pas d'une inscription de résidence classique, même s'il existe des démarches cantonales et des règles spécifiques en matière d'impôts et d'assurances.</li>
                </ul>
                <p>Si votre cas est intermédiaire, par exemple si vous commencez par un court séjour puis vous trouvez un emploi, la règle pratique est simple: <strong>dès que vous avez un motif de séjour et une adresse, agissez vite</strong> pour éviter retards ou sanctions.</p>

                <h3>2) Adresse et hébergement: oui, cela peut être temporaire</h3>
                <p>Si, à votre arrivée, vous êtes à l'hôtel, en Airbnb ou hébergé chez quelqu'un, il est souvent possible de vous inscrire à une <strong>adresse provisoire</strong> puis de la mettre à jour plus tard. Si vous logez chez un particulier, on demande souvent une <strong>attestation d'hébergement</strong> signée par la personne titulaire du bail.</p>

                <h3>3) Documents habituels</h3>
                <ul>
                    <li>Pièce d'identité, carte d'identité ou passeport.</li>
                    <li><strong>Motif du séjour:</strong> contrat de travail, admission à des études ou preuve de moyens propres, selon la situation.</li>
                    <li>Contrat de bail ou attestation d'hébergement.</li>
                    <li>Photo passeport, ou photo prise sur place selon la commune.</li>
                    <li>Documents familiaux si nécessaire: mariage, naissance des enfants, etc.</li>
                </ul>
                <p>Il faut aussi souvent payer un <strong>émolument administratif</strong>, dont le montant dépend du canton et du type de permis.</p>

                <h2>Exemples concrets</h2>
                <h3>Exemple 1 — Vous arrivez avec un emploi et un logement temporaire</h3>
                <p>Vous vous inscrivez avec votre contrat de travail, votre pièce d'identité et votre adresse provisoire. Vous obtenez une attestation qui vous permet d'avancer pour la banque et l'assurance pendant que la carte de permis est en préparation. Quand vous signez votre bail définitif, vous annoncez ensuite le changement d'adresse.</p>

                <h3>Exemple 2 — Vous arrivez comme étudiant</h3>
                <p>Vous présentez votre admission ou votre immatriculation et, selon le canton, la preuve de vos moyens financiers et de votre couverture. L'inscription déclenche ensuite les autres démarches, comme l'assurance ou la fiscalité si vous travaillez en parallèle.</p>

                <h3>Exemple 3 — Vous êtes frontalier</h3>
                <p>Vous ne suivez pas le même circuit qu'un résident. Votre permis et vos obligations sont généralement traités avec l'employeur et l'autorité cantonale, avec des règles fiscales et d'assurance spécifiques. Il ne faut pas le considérer comme un permis B tout en vivant à l'étranger.</p>

                <h2>Erreurs fréquentes</h2>
                <ul>
                    <li><strong>Confondre entrée en Suisse et résidence:</strong> visiter la Suisse n'implique pas une inscription; s'y installer, oui.</li>
                    <li><strong>Attendre le logement définitif</strong> et dépasser le délai.</li>
                    <li><strong>Ne pas prendre rendez-vous</strong> à temps dans les communes où l'agenda est chargé.</li>
                    <li><strong>Ne pas actualiser l'adresse</strong> lors d'un déménagement, alors que radiations et nouvelles inscriptions comptent beaucoup en Suisse.</li>
                    <li><strong>Ne pas préparer les documents familiaux</strong> à l'avance, notamment apostilles et traductions quand elles sont nécessaires.</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Consultez le site officiel de votre commune et cherchez la rubrique "Anmeldung / Contrôle des habitants / Einwohnerkontrolle".</li>
                    <li>Préparez un PDF avec tous les documents, ainsi que des copies papier.</li>
                    <li>Si votre situation est atypique, sans contrat, en frontalier ou en regroupement familial, demandez par écrit la liste exacte des pièces exigées.</li>
                    <li>Après l'inscription, donnez la priorité à l'<a href="#/assurance-maladie-suisse-lamal">assurance maladie LAMal</a> et au compte bancaire.</li>
                    <li>Pour organiser le premier mois, utilisez aussi la <a href="#/checklist-demarches-du-premier-mois-en-suisse">checklist des démarches d'arrivée</a>.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.ch.ch/es/entrar-y-vivir-en-suiza/" target="_blank" rel="noopener noreferrer">ch.ch — Entrer et vivre en Suisse</a></li>
                    <li><a href="https://www.sem.admin.ch/sem/es/home/themen/aufenthalt.html" target="_blank" rel="noopener noreferrer">SEM — Séjour / Aufenthalt</a></li>
                    <li>Site officiel de votre commune (Contrôle des habitants / Einwohnerkontrolle).</li>
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
        title: "Retraite en Suisse : combien vous toucherez selon votre âge d'arrivée",
        description: "Analyse pratique de la retraite en Suisse (AVS et LPP) avec des exemples concrets pour les personnes qui arrivent à 30, 40 ou 50 ans.",
        keywords: "retraite Suisse, pension Suisse, AVS, LPP, combien toucher à la retraite en Suisse",
        category: 'Travail',
        hub: 'trabajo',
        slug: "jubilacion-edad-retiro-suiza",
        readingTime: 6,
        featuredImage: "media/guides/jubilacion-pension-suiza.jpg",
        imageAlt: "Personne retraitée profitant de la vue sur les Alpes suisses",
        summary: "La retraite suisse repose sur trois piliers. Les années cotisées font une vraie différence: plus vous arrivez tôt, plus votre pension pourra être solide.",
        content: `
            <div class="article-content">
                <p>L'une des questions les plus fréquentes est de savoir quelle retraite on peut espérer après une vie professionnelle en Suisse. Le système repose surtout sur deux piliers principaux pour les salariés: l'AVS et la LPP.</p>

                <h2>Les piliers fondamentaux</h2>
                <ul>
                    <li><strong>1er pilier (AVS):</strong> la pension publique. Le minimum tourne autour de 1'200 CHF et le maximum autour de 2'450 CHF par mois. Elle dépend du nombre d'années cotisées sans interruption.</li>
                    <li><strong>2e pilier (LPP):</strong> la caisse de pension professionnelle. C'est le capital accumulé pendant votre activité salariée. À la retraite, vous pouvez en principe choisir entre une rente mensuelle ou un retrait en capital, selon les règles applicables.</li>
                </ul>

                <h2>Exemples selon l'âge d'arrivée</h2>
                <p>Les attentes changent fortement selon le moment où vous commencez à cotiser en Suisse:</p>
                <ul>
                    <li><strong>Arrivée à 30 ans:</strong> scénario favorable. Après environ 35 ans de cotisations, il est réaliste d'espérer une retraite totale entre 4'000 et 5'500 CHF par mois, AVS + LPP.</li>
                    <li><strong>Arrivée à 40 ans:</strong> le temps commence à compter. L'AVS sera partielle et la LPP plus limitée. La retraite totale peut se situer autour de 3'000 à 4'000 CHF.</li>
                    <li><strong>Arrivée à 50 ans:</strong> cas plus délicat. Sans salaires élevés, la retraite totale peut rester entre 2'000 et 3'000 CHF, ce qui rend l'épargne privée supplémentaire particulièrement importante.</li>
                </ul>

                <div class="callout tip">
                    <strong>Note sur les conventions:</strong> les années travaillées en Espagne ne sont pas perdues. Chaque pays versera sa part proportionnelle au moment de la retraite.
                </div>
            </div>
        `
    },

    "articulo-vivir-sin-trabajar": {
        title: "Vivre en Suisse sans travailler : conditions pour les résidents UE",
        description: "Guide sur la résidence en Suisse sans activité lucrative: épargne, rentes ou retraite, et permis nécessaires.",
        keywords: "vivre en Suisse sans travailler, permis de résidence avec épargne, permis B sans activité lucrative",
        category: 'Vie',
        hub: 'vivir-en-suiza',
        slug: "vivir-sin-trabajar-suiza",
        readingTime: 4,
        featuredImage: "media/guides/residir-en-suiza-sin-trabajo.jpg",
        imageAlt: "Personne profitant de la vie en Suisse sans travailler",
        summary: "Il est possible de vivre en Suisse sans travailler, mais vous devez démontrer des moyens financiers suffisants et disposer d'une assurance maladie complète.",
        content: `
            <div class="article-content">
                <p>Beaucoup se demandent s'il est possible de s'établir en Suisse sans avoir de contrat de travail. La réponse est oui, surtout pour les citoyens de l'UE/AELE, mais sous des conditions strictes.</p>

                <h2>Règles pour les citoyens UE/AELE</h2>
                <p>Si vous êtes espagnol ou ressortissant d'un autre pays de l'UE et que vous prévoyez de rester plus de 90 jours sans travailler, vous devez vous inscrire et demander une autorisation de séjour en démontrant:</p>
                <ul>
                    <li><strong>Des moyens financiers suffisants:</strong> vous devez prouver que vous avez des ressources, épargne, rentes ou pension externe, pour vivre sans recourir à l'aide sociale suisse.</li>
                    <li><strong>Une assurance maladie:</strong> il faut une couverture maladie suisse complète, généralement la LAMal. Une assurance voyage temporaire ne suffit pas pour un séjour de résidence.</li>
                    <li><strong>Une inscription officielle:</strong> vous devez vous enregistrer auprès du Contrôle des habitants de votre commune de résidence.</li>
                </ul>

                <h2>Et pour les citoyens hors UE?</h2>
                <p>Dans ce cas, les règles sont beaucoup plus restrictives. En général, la résidence sans activité lucrative n'est admise que dans des situations très spécifiques, comme la retraite, les études ou certains motifs médicaux, avec des garanties financières élevées.</p>

                <div class="callout warning">
                    <strong>Important:</strong> être simplement domicilié chez un ami ne remplace pas une autorisation de séjour. Des contrôles peuvent mener à des amendes ou à une obligation de quitter le pays si la situation n'est pas régularisée.
                </div>
            </div>
        `
    },

    "articulo-ai-invalidez": {
        title: "L'assurance-invalidite (AI) suisse : aide et reintegration",
        description: "Comprendre le fonctionnement de l'assurance-invalidite suisse. Son objectif principal est la reintegration professionnelle avant le versement d'une rente.",
        keywords: "AI suisse, invalidite Suisse, assurance incapacite, rente AI",
        category: "Assurances Sociales",
        hub: "salud",
        slug: "seguro-invalidez-ai-suiza",
        readingTime: 4,
        dateUpdated: "Mars 2026",
        summary: "L'AI n'est pas une retraite anticipee. Sa philosophie est : 'd'abord la readaptation, ensuite la rente'. L'objectif est que le travailleur reste actif.",
        featuredImage: "media/guides/seguro-invalidez-ai-suiza.jpg",
        imageAlt: "Seance de conseil pour la reintegration professionnelle en Suisse",
        content: `
            <div class="article-content">
                <p>L'<i>Assurance-invalidite</i> (AI) est un pilier fondamental du systeme de securite sociale suisse. Son fonctionnement est souvent mal compris par les personnes habituees a d'autres systemes europeens.</p>

                <h2>Readaptation avant la rente</h2>
                <p>Contrairement a d'autres pays, l'objectif principal de l'AI n'est pas de verser immediatement une pension a vie, mais de tout mettre en oeuvre pour que la personne recupere sa capacite de travail. Les mesures prevues incluent :</p>
                <ul>
                    <li>Readaptation medicale et professionnelle.</li>
                    <li>Adaptation du poste de travail ou aides techniques.</li>
                    <li>Reconversion professionnelle (formation a un nouveau metier).</li>
                </ul>

                <h2>Quand perCoit-on la rente ?</h2>
                <p>La rente d'invalidite n'est accordee que lorsqu'il est etabli que, apres avoir epuise les mesures de readaptation, la personne conserve une incapacite de gain durable. Cette rente peut etre partielle ou totale selon le degre d'invalidite determine par les experts de l'AI.</p>

                <h2>Deposer la demande le plus tot possible</h2>
                <p>Il est essentiel de deposer une demande AI des que l'on prevoit qu'une maladie ou un accident entrainera une incapacite prolongee (plus d'un an). Ne pas attendre que la situation soit critique : la procedure est longue et necessite de nombreuses evaluations medicales et professionnelles.</p>
            </div>
        `
    },

    "articulo-vacunas": {
        title: "Vaccins en Suisse : recommandations et liberte de choix",
        description: "Tout sur le calendrier vaccinal suisse. Non obligatoires par la loi, mais officiellement recommandes par l'OFSP.",
        keywords: "vaccins Suisse, calendrier vaccination Suisse, OFSP vaccins, ecole vaccins Suisse",
        category: "Sante Publique",
        hub: "salud",
        slug: "vacunacion-en-suiza",
        readingTime: 4,
        dateUpdated: "Mars 2026",
        summary: "En Suisse, aucun vaccin n'est obligatoire. Le systeme repose sur les recommandations de l'Office federal de la sante publique (OFSP) et la responsabilite individuelle.",
        featuredImage: "media/guides/vacunacion-en-suiza.jpg",
        imageAlt: "Flacons de vaccins dans un contexte medical suisse",
        content: `
            <div class="article-content">
                <p>En arrivant en Suisse, de nombreuses familles sont surprises de decouvrir que le systeme de vaccination fonctionne differemment de celui d'autres pays europeens. La liberte de choix du citoyen est ici privilegiee.</p>

                <h2>Les vaccins sont-ils obligatoires ?</h2>
                <p><strong>Non. En Suisse, aucun vaccin n'est obligatoire</strong>, ni pour les enfants ni pour les adultes. Meme pour entrer a l'ecole publique. Le systeme repose sur le fait que les familles s'informent aupres de leur pediatre et decident selon les recommandations officielles.</p>

                <h2>Recommandations de l'OFSP (BAG)</h2>
                <p>L'Office federal de la sante publique publie un calendrier vaccinal recommande incluant les vaccins standards (Diphtherie, Tetanos, Coqueluche, Polio, Rougeole, etc.). En Suisse, sont particulierement recommandes :</p>
                <ul>
                    <li><strong>Encephalite a tiques :</strong> Tres importante si vous pratiquez des activites en plein air ou en foret.</li>
                    <li><strong>Grippe et HPV :</strong> Selon les groupes a risque et l'age.</li>
                </ul>

                <h2>Cout et assurance</h2>
                <p>Les vaccins recommandes dans le calendrier officiel sont couverts par l'assurance de base (LAMal), bien qu'ils puissent etre soumis a la franchise choisie par l'assure.</p>
            </div>
        `
    },

    "articulo-danza-patos": {
        title: "Le saviez-vous ? La danse des canards est d'origine suisse",
        description: "Decouvrez l'histoire de 'Der Ententanz', la melodie enteetante nee en Suisse qui a conquis le monde entier.",
        keywords: "danse des canards Suisse, Werner Thomas, Bobby Setter, curiosites Suisse",
        category: "Culture et Vie",
        hub: "recursos",
        slug: "origen-danza-de-los-patos-suiza",
        readingTime: 3,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/origen-danza-de-los-patos-suiza.jpg",
        imageAlt: "Icone officielle de la Suisse avec la croix blanche sur fond rouge",
        summary: "Meme si elle semble generique, la celebre danse des canards a ete composee par un accordeoniste suisse a Davos dans les annees 1950.",
        content: `
            <div class="article-content">
                <p>Il est impossible de ne pas l'avoir entendue a un mariage, une fete de village ou a l'Oktoberfest. Ce que peu de gens savent, c'est que la <strong>Danse des canards</strong> (<i>Der Ententanz</i>) a un passeport 100 % suisse.</p>

                <h2>Werner Thomas : le pere de la chanson</h2>
                <p>La melodie a ete composee a la fin des annees 1950 par <strong>Werner Thomas</strong>, un accordeoniste de Davos. Il l'appela d'abord "Der Ententanz" (La danse du canard), s'inspirant du mouvement des canards lorsqu'il jouait dans les hotels et restaurants de la station de ski.</p>

                <h2>De Davos au monde entier</h2>
                <p>Curieusement, la chanson ne s'est pas imposee immediatement. C'est dans les annees 1970 et 1980 que divers groupes europeens ont commence a la reprendre, en faisant un succes mondial sous des noms tels que "The Birdie Song" ou "La danse des canards".</p>

                <div class="callout info">
                    <strong>Le saviez-vous ?</strong> Werner Thomas a compose la chanson dans le seul but de faire danser les gens de facon amusante et sans prise de tete. Mission accomplie !
                </div>
            </div>
        `
    },

    "articulo-introduccion-suiza": {
        title: "Comment fonctionne la Suisse : guide complet pour les nouveaux résidents",
        description: "Guide complet sur la Suisse: organisation fédérale, 26 cantons, système politique, 4 langues, différences régionales, éducation et vie quotidienne. Essentiel avant de s'y installer.",
        keywords: "comment fonctionne la Suisse, cantons suisses, fédéralisme, démocratie directe, langues en Suisse, système scolaire suisse, différences entre cantons",
        category: 'Vie',
        hub: 'vivir-en-suiza',
        slug: "introduccion-guia-suiza",
        readingTime: 15,
        featuredImage: "media/guides/introduccion-suiza-como-funciona.png",
        imageAlt: "Vue panoramique de la Suisse avec montages, lac et village typique",
        summary: "La Suisse n'est pas un pays conventionnel. C'est une Confédération de 26 cantons autonomes, avec 4 langues nationales, une démocratie directe et un fédéralisme qui influence votre vie quotidienne dès le premier jour.",
        content: `
            <div class="article-content">
                <p>Si vous envisagez de déménager en Suisse, ou si vous venez d'arriver, comprendre comment le pays fonctionne est la première étape. La Suisse ne fonctionne ni comme la France, ni comme l'Espagne, ni comme la plupart des autres pays européens. Son système politique, son organisation territoriale et sa culture administrative sont uniques, et ils influencent votre quotidien dès le moment où vous signez un contrat, choisissez une assurance maladie ou vous inscrivez dans votre commune.</p>

                <div class="callout info">
                    <strong>Pourquoi est-ce important?</strong> Parce qu'en Suisse, les règles en matière d'impôts, d'assurances, de scolarité et de démarches de résidence <strong>dépendent du canton où vous vivez</strong>, pas seulement de l'État fédéral.
                </div>

                <h2>La Suisse en chiffres</h2>
                <ul>
                    <li><strong>Capitale:</strong> Berne, siège des autorités fédérales</li>
                    <li><strong>Superficie:</strong> 41'285 km²</li>
                    <li><strong>Population:</strong> environ 8,9 millions d'habitants</li>
                    <li><strong>Monnaie:</strong> franc suisse, CHF</li>
                    <li><strong>Frontières:</strong> Allemagne, Autriche, Liechtenstein, Italie et France</li>
                    <li><strong>Organisation:</strong> Confédération helvétique, 26 cantons autonomes</li>
                    <li><strong>Langues nationales:</strong> allemand, français, italien, romanche</li>
                    <li><strong>Membre de l'ONU et de l'AELE</strong>, mais <strong>pas de l'Union européenne</strong></li>
                </ul>

                <h2 id="organizacion">Section 1 — Cantons et organisation territoriale</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-politico-cantones.png"
                         alt="Carte politique de la Suisse avec les 26 cantons et les trois niveaux de gouvernement"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Chaque canton a sa propre histoire et ses propres compétences dans l'État fédéral suisse.
                    </figcaption>
                </figure>

                <p>La Suisse est une <strong>Confédération helvétique</strong> composée de <strong>26 cantons</strong>. Cette structure existe depuis le Moyen Âge et explique en grande partie le fonctionnement particulier du pays. Chaque canton est, en pratique, un mini-État avec son propre gouvernement, son propre parlement et ses propres règles dans de nombreux domaines.</p>

                <p>L'organisation administrative fonctionne sur trois niveaux:</p>
                <ul>
                    <li><strong>Confédération:</strong> le niveau fédéral, basé à Berne. Il gère la politique extérieure, la défense, la monnaie, le droit civil et constitutionnel, ainsi que les grandes lignes communes.</li>
                    <li><strong>Cantons:</strong> 26 unités autonomes avec de larges compétences en fiscalité, éducation, santé, police et administration.</li>
                    <li><strong>Communes:</strong> plus de 2'000 municipalités, niveau le plus proche des habitants. Elles gèrent l'inscription des résidents, une partie de la fiscalité locale et de nombreux services du quotidien.</li>
                </ul>

                <div class="callout">
                    <strong>Exemple concret:</strong> quand vous arrivez en Suisse, vous ne vous inscrivez pas auprès de "l'État suisse". Vous vous inscrivez dans <em>votre commune</em>. C'est elle qui lance votre dossier de résidence et qui gère une partie de vos obligations administratives.
                </div>

                <p>Les 26 cantons sont, dans l'ordre traditionnel d'entrée dans la Confédération: Uri, Schwyz, Obwald, Nidwald, Glaris, Zoug, Fribourg, Soleure, Bâle-Ville, Bâle-Campagne, Schaffhouse, Appenzell Rhodes-Extérieures, Appenzell Rhodes-Intérieures, Saint-Gall, Grisons, Argovie, Thurgovie, Tessin, Vaud, Valais, Neuchâtel, Genève, Jura, Berne, Lucerne et Zurich.</p>

                <p><a href="https://www.ch.ch/en/cantons/" target="_blank" rel="noopener noreferrer">→ Voir les portails officiels des 26 cantons sur ch.ch</a></p>

                <h2 id="politica">Section 2 — Le système politique suisse</h2>

                <p>La Suisse possède l'une des démocraties les plus participatives du monde. Les citoyens n'élisent pas seulement des représentants: <strong>ils votent aussi directement sur les lois</strong>, plusieurs fois par an.</p>

                <h3>Démocratie directe</h3>
                <p>Quatre fois par an, les Suisses sont appelés à voter sur des <strong>référendums</strong>. Ces votations peuvent porter aussi bien sur une hausse de taxe que sur une réforme constitutionnelle majeure. Les résultats sont contraignants.</p>

                <h3>Initiatives populaires</h3>
                <p>Si 100'000 citoyens réunissent des signatures en 18 mois, ils peuvent proposer une modification de la Constitution fédérale. Le peuple vote ensuite sur cette proposition. Cet instrument a eu un impact réel sur des sujets centraux de la vie publique suisse.</p>

                <h3>Référendum facultatif</h3>
                <p>Si 50'000 citoyens récoltent des signatures en 100 jours contre une loi votée par le Parlement, cette loi doit être soumise au vote populaire. C'est l'un des principaux contre-pouvoirs du système suisse.</p>

                <h3>Le Conseil fédéral</h3>
                <p>La Suisse n'a pas de président doté d'un pouvoir exécutif fort. Le gouvernement est composé de <strong>7 conseillers fédéraux</strong>, élus par le Parlement pour quatre ans. Les décisions se prennent de manière collégiale et consensuelle. La présidence de la Confédération tourne chaque année entre eux et reste essentiellement honorifique.</p>

                <div class="callout info">
                    <strong>Note pour les résidents étrangers:</strong> en tant que résident non naturalisé, vous ne votez pas au niveau fédéral. En revanche, certains cantons, comme Neuchâtel, Vaud ou Jura, accordent des droits politiques au niveau local ou communal après plusieurs années de résidence.
                </div>

                <h2 id="lenguas">Section 3 — Les 4 langues de la Suisse</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/lenguas-suiza.png"
                         alt="Carte linguistique de la Suisse avec les quatre régions de langues officielles"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        La langue dont vous avez besoin dépend directement du canton où vous vous installez.
                    </figcaption>
                </figure>

                <p>La Suisse a <strong>4 langues nationales</strong>. La langue utilisée au travail, dans l'administration et dans la vie sociale dépend directement de la région où vous vivez.</p>

                <h3>🇩🇪 Allemand — Suisse alémanique</h3>
                <p>Il est parlé dans environ <strong>17 à 18 cantons</strong> et représente près de 63% de la population. Dans la vie quotidienne, les Suisses alémaniques parlent surtout le <em>Schweizerdeutsch</em>, un ensemble de dialectes oraux. Les documents officiels, les contrats et les courriers sont en revanche rédigés en allemand standard, le <em>Hochdeutsch</em>.</p>

                <h3>🇫🇷 Français — La Romandie</h3>
                <p>Le français est parlé par environ <strong>23%</strong> de la population, notamment à Genève, Vaud, Neuchâtel et Jura, ainsi que dans certaines parties du Valais, de Fribourg et de Berne. Le français suisse est très proche du français standard, avec quelques particularités comme <em>huitante</em>.</p>

                <h3>🇮🇹 Italien — Le Tessin</h3>
                <p>L'italien est parlé par environ <strong>8%</strong> de la population, principalement au Tessin et dans certaines vallées des Grisons. Le Tessin a une identité culturelle nettement plus méditerranéenne que le reste du pays.</p>

                <h3>🏔️ Romanche</h3>
                <p>Langue rhéto-romane parlée par environ <strong>0,5%</strong> de la population, surtout dans certaines parties des Grisons. Elle est langue nationale, mais son usage administratif reste limité aux régions où elle est parlée.</p>

                <h3>Cantons bilingues et trilingues</h3>
                <ul>
                    <li><strong>Fribourg:</strong> bilingue français/allemand.</li>
                    <li><strong>Berne:</strong> principalement germanophone, avec une minorité francophone dans le Jura bernois.</li>
                    <li><strong>Valais:</strong> bilingue français/allemand selon les régions.</li>
                    <li><strong>Grisons:</strong> trilingue allemand/romanche/italien.</li>
                </ul>

                <div class="callout">
                    <strong>Conseil pratique:</strong> apprendre la langue du canton où vous vivez est l'investissement le plus rentable que vous puissiez faire. En Suisse, la langue ne sert pas seulement à communiquer: elle conditionne l'intégration, l'emploi et l'accès aux services.
                </div>

                <h2 id="cantones">Section 4 — Ce qui change d'un canton à l'autre</h2>

                <p>Pour les nouveaux arrivants, c'est un point central: en Suisse, <strong>le canton dans lequel vous vivez change presque tout</strong>.</p>

                <h3>Impôts</h3>
                <p>La charge fiscale totale, fédérale, cantonale et communale, peut varier énormément selon le lieu de résidence. À salaire identique, vivre à Genève ou à Zoug peut représenter plusieurs milliers de francs de différence par an.</p>
                <p>→ <a href="#/impot-a-la-source-suisse-quellensteuer">Lire: comment fonctionne l'impôt à la source</a></p>

                <h3>Assurance maladie</h3>
                <p>Les primes LAMal sont obligatoires partout, mais leur montant varie selon le canton et même selon la région à l'intérieur d'un canton.</p>
                <p>→ <a href="#/assurance-maladie-suisse-lamal">Lire: l'assurance maladie LAMal expliquée</a></p>

                <h3>Éducation et scolarité</h3>
                <p>Le système scolaire relève essentiellement des cantons. Le calendrier scolaire, l'âge du début de la scolarité, les langues enseignées et l'organisation générale varient sensiblement.</p>
                <p>→ <a href="#/le-systeme-scolaire-en-suisse-explique">Lire: le système scolaire suisse</a></p>

                <h3>Démarches de résidence et administration</h3>
                <p>Les délais, formulaires et horaires du Contrôle des habitants changent d'une commune à l'autre. Il n'existe pas une seule procédure uniforme pour tout le pays.</p>
                <p>→ <a href="#/inscription-commune-suisse">Lire: comment s'inscrire en Suisse à l'arrivée</a></p>

                <div class="callout">
                    <strong>Conclusion pratique:</strong> avant de choisir un canton, comparez la fiscalité, les primes d'assurance maladie et les possibilités d'emploi dans la région. Ce sont des choix qui auront un impact durable sur votre budget.
                </div>

                <h2 id="educacion">Section 5 — Le système éducatif suisse</h2>

                <p>Le système éducatif suisse est public, gratuit et de très bonne qualité. Il se distingue par son <strong>orientation professionnelle précoce</strong> et par le rôle central de l'apprentissage dual.</p>

                <h3>Structure générale</h3>
                <ul>
                    <li><strong>École enfantine:</strong> deux ans, généralement obligatoires dès 4 ans.</li>
                    <li><strong>École primaire:</strong> environ 6 ans, avec introduction précoce d'une deuxième langue nationale et de l'anglais.</li>
                    <li><strong>Secondaire I:</strong> environ 3 ans, jusqu'à 15 ans, avec orientation à la fin du cycle.</li>
                </ul>

                <h3>L'orientation professionnelle</h3>
                <p>Vers 15-16 ans, les élèves s'orientent généralement vers l'une de deux voies:</p>
                <ol>
                    <li><strong>Formation professionnelle duale:</strong> la voie majoritaire. Plus de 60% des jeunes font un apprentissage en entreprise, combiné à l'école professionnelle.</li>
                    <li><strong>Voie académique:</strong> maturité gymnasiale puis université ou écoles polytechniques.</li>
                </ol>

                <h3>Universités</h3>
                <p>La Suisse compte plusieurs universités publiques reconnues à Zurich, Berne, Bâle, Genève, Lausanne et Neuchâtel. Les deux écoles polytechniques fédérales, l'ETH Zurich et l'EPFL à Lausanne, figurent parmi les meilleures du monde.</p>

                <div class="callout info">
                    <strong>Pour les familles nouvellement arrivées:</strong> si vous avez des enfants en âge scolaire, inscrivez-les à l'école publique de votre commune dès le premier mois. L'école est gratuite et l'intégration linguistique est généralement accompagnée.
                </div>

                <h2 id="regiones">Section 6 — Différences culturelles et régionales</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-regiones-suiza.png"
                         alt="Carte des régions culturelles et linguistiques de la Suisse"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Les grandes régions culturelles de Suisse ont des identités très différentes.
                    </figcaption>
                </figure>

                <p>Au-delà des frontières administratives, la Suisse se divise en trois grandes régions culturelles avec des mentalités bien distinctes.</p>

                <h3>🔵 Suisse alémanique</h3>
                <p>C'est la région la plus vaste et la plus importante économiquement. On y trouve Zurich, Bâle, Zoug et de nombreuses multinationales. La culture y est souvent plus formelle, plus directe et très attachée à la ponctualité.</p>

                <h3>🟢 La Romandie</h3>
                <p>Elle regroupe notamment Genève, Vaud, Neuchâtel et Jura. L'ambiance y est généralement perçue comme plus ouverte et plus proche du monde latin. Genève et Lausanne ont aussi une forte dimension internationale.</p>

                <h3>🟡 Le Tessin</h3>
                <p>Le canton italophone du sud du pays a un climat plus doux, un rythme de vie plus méditerranéen et une économie liée au tourisme, aux services et à la proximité de l'Italie.</p>

                <h2>En résumé: ce qu'il faut savoir avant d'arriver</h2>
                <ul>
                    <li>La Suisse <strong>n'appartient pas à l'UE</strong> et a ses propres règles.</li>
                    <li>Chaque canton fonctionne différemment: renseignez-vous sur le vôtre avant de vous installer.</li>
                    <li>La langue de votre canton est déterminante pour vous intégrer.</li>
                    <li>L'inscription dans la commune est la première démarche à faire à l'arrivée.</li>
                    <li>L'assurance maladie est obligatoire dès le début de la résidence.</li>
                    <li>La démocratie directe donne aux citoyens un poids et une responsabilité inhabituels en Europe.</li>
                </ul>

                <h2>Articles essentiels pour les nouveaux résidents</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 1rem;">
                    <a href="#/inscription-commune-suisse" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">📋 S'inscrire en Suisse</a>
                    <a href="#/tramites-llegada-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🪪 Permis de séjour</a>
                    <a href="#/recherche-demploi-plateformes-et-strategies" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💼 Chercher un emploi</a>
                    <a href="#/assurance-maladie-suisse-lamal" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏥 Assurance maladie LAMal</a>
                    <a href="#/louer-appartement-suisse" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏠 Louer un logement</a>
                    <a href="#/impot-a-la-source-suisse-quellensteuer" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💰 Impôts en Suisse</a>
                    <a href="#/le-systeme-scolaire-en-suisse-explique" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🎓 Système éducatif</a>
                    <a href="#/cout-de-la-vie-en-suisse-logement-nourriture-impots" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💶 Coût de la vie</a>
                </div>
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
        description: "Guide sur les 4 langues nationales de la Suisse: régions linguistiques, cantons bilingues et conseils pour les personnes qui arrivent dans le pays.",
        keywords: "langues en Suisse, langues suisses, allemand de Suisse, Romandie, Tessin, romanche, régions linguistiques",
        audience: "newcomer",
        featuredImage: "media/guides/lenguas-suiza.png",
        category: "Culture & Langues",
        hub: "vivir-en-suiza",
        readingTime: 5,
        summary: "La Suisse a 4 langues nationales. La langue que vous devrez apprendre dépend entièrement du canton où vous vous installez: allemand à l'est et au centre, français à l'ouest, italien au Tessin.",
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
                <p>Parlé par moins de <strong>1%</strong> de la population, exclusivement dans certaines parties du canton des Grisons. C'est une langue romane avec cinq variantes écrites différentes. Elle a le statut de langue nationale et co-officielle dans les régions où elle est parlée, mais elle n'est utilisée au niveau fédéral que dans des cas spécifiques.</p>

                <h2>Cantons bilingues et trilingues</h2>

                <p>Plusieurs cantons ont deux langues officielles ou davantage:</p>

                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:1rem; margin:1.5rem 0;">
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Fribourg (FR)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingue français / allemand. L'administration fonctionne dans les deux langues et la ville de Fribourg est un vrai point de rencontre entre les deux cultures.</p>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Valais / Wallis (VS)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingue français / allemand selon la région. Le Valais romand est francophone, alors que le Haut-Valais est germanophone.</p>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Grisons (GR)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Trilingue allemand / romanche / italien. C'est le seul canton suisse avec trois langues officielles et chaque vallée peut avoir sa langue dominante.</p>
                    </div>
                </div>

                <h2>Quelle langue apprendre?</h2>

                <p>La réponse est presque toujours la même: <strong>la langue du canton où vous vivez</strong>. Si vous n'avez pas encore choisi où vous installer, voici quelques repères:</p>

                <ul>
                    <li><strong>Français:</strong> souvent le point d'entrée le plus simple pour les hispanophones et les personnes venant d'une langue latine. Il ouvre les portes de la Romandie et de villes comme Genève ou Lausanne.</li>
                    <li><strong>Allemand:</strong> la langue qui offre le plus grand marché de l'emploi en Suisse, puisqu'elle couvre la majorité du pays. Elle demande plus d'efforts, mais les possibilités sont nombreuses.</li>
                    <li><strong>Italien:</strong> très accessible si vous le parlez déjà, mais le marché du travail tessinois est plus petit et certains emplois demandent aussi l'allemand ou l'anglais.</li>
                </ul>

                <div class="callout">
                    <strong>Investissement clé:</strong> beaucoup de cantons proposent des cours de langue subventionnés, voire gratuits, pour les résidents étrangers. Certaines entreprises paient aussi une partie des cours. Renseignez-vous dès le premier mois auprès de votre commune.
                </div>

                <h2>L'anglais en Suisse</h2>
                <p>L'anglais est très présent dans les secteurs techniques, financiers et internationaux, surtout à Zurich et à Genève. De nombreuses multinationales fonctionnent presque exclusivement en anglais. Mais pour les démarches administratives, la recherche d'emploi hors multinationales et l'intégration locale, la langue du canton reste indispensable.</p>

                <h2>Articles liés</h2>
                <ul>
                    <li><a href="#/comment-fonctionne-la-suisse-guide">Comment fonctionne la Suisse</a></li>
                    <li><a href="#/les-26-cantons-suisses-ce-qui-change-dun-canton-a-lautre">Les 26 cantons suisses</a></li>
                    <li><a href="#/inscription-commune-suisse">S'inscrire en Suisse à l'arrivée</a></li>
                    <li><a href="#/recherche-demploi-plateformes-et-strategies">Chercher un emploi en Suisse</a></li>
                </ul>

                <div class="callout warning">
                    <strong>Intégration et langue :</strong> Ne sous-estimez pas l'importance de la langue locale. Même si vous travaillez en anglais, connaître la langue de votre canton est essentiel pour comprendre votre contrat de location, vos impôts et pour vous faire des amis locaux.
                </div>
            </div>`
    },
        "articulo-tramites-llegada": {
        title: "Liste de vérification complète : démarches à l'arrivée en Suisse",
        description: "Tout ce qu'il faut faire pendant le premier mois en Suisse, classé par priorité: inscription, assurance maladie, compte bancaire, transports, poubelles et plus encore.",
        keywords: "démarches arrivée Suisse, checklist arrivée Suisse, premiers pas en Suisse, nouvel arrivant Suisse, que faire en arrivant en Suisse",
        category: 'Démarches',
        hub: 'tramites',
        slug: "tramites-llegada-suiza",
        readingTime: 6,
        featuredImage: "media/guides/checklist-llegada-suiza.jpg",
        imageAlt: "Checklist de démarches à l'arrivée en Suisse",
        summary: "Deux situations, deux circuits différents: si vous venez chercher un emploi, vous n'avez pas d'obligation administrative immédiate; si vous vous installez avec contrat ou résidence effective, l'inscription dans la commune est la première étape obligatoire.",
        content: `
            <div class="article-content">
                <div class="callout warning">
                    <strong>Important:</strong> si vous venez en Suisse comme touriste ou pour chercher un emploi, vous n'avez pas à vous inscrire à la commune ni à demander un permis de séjour. Cette obligation existe seulement lorsque vous vous installez réellement dans le pays, en général après la signature d'un contrat de travail ou l'établissement effectif de votre résidence.
                </div>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Si vous venez comme touriste ou pour chercher un emploi</h2>
                <p>En tant que citoyen de l'UE/AELE, vous avez le droit d'entrer en Suisse et d'y séjourner un certain temps sans démarche administrative pendant votre recherche d'emploi. À ce stade, il n'y a ni inscription obligatoire, ni permis à demander, ni délai administratif à respecter.</p>
                <p>En revanche, il vaut mieux avoir certains points en ordre avant le voyage ou pendant le séjour:</p>

                <h3>Documents personnels</h3>
                <p>Emportez votre carte d'identité ou votre passeport en cours de validité. Vous n'avez besoin d'aucun autre document pour entrer en Suisse ou circuler dans le pays.</p>

                <h3>Logement et mobilité</h3>
                <p>Définissez où vous allez loger dès le premier jour, même si c'est provisoire. Pour vous déplacer, les transports publics suisses sont efficaces et ponctuels. Si vous pensez les utiliser souvent, le <strong>demi-tarif / Halbtax</strong>, autour de 190 CHF par an, divise pratiquement par deux le prix des billets dans tout le pays. Il s'amortit vite et s'achète sur <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">sbb.ch</a> ou dans n'importe quel guichet CFF/SBB.</p>

                <h3>CV et recherche d'emploi</h3>
                <p>Le marché du travail suisse a ses propres codes. Le CV standard inclut souvent une photo, la date de naissance et l'état civil. Les principales plateformes sont <a href="https://www.jobs.ch" target="_blank" rel="noopener noreferrer">jobs.ch</a>, <a href="https://www.jobup.ch" target="_blank" rel="noopener noreferrer">jobup.ch</a> et LinkedIn. Recherchez dans la langue du canton où vous voulez travailler: cela augmente clairement le nombre de réponses.</p>

                <h3>Assurance maladie pendant la recherche</h3>
                <p>Tant que vous ne résidez pas officiellement en Suisse, la LAMal ne s'applique pas encore. Si vous avez la carte européenne d'assurance maladie ou une assurance voyage, cela suffit généralement pour un séjour de recherche. L'obligation de souscrire une LAMal commence seulement au moment où vous vous inscrivez comme résident.</p>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Si vous venez vous installer, avec contrat ou résidence effective</h2>
                <p>Dès que vous signez un contrat de travail ou établissez votre résidence effective en Suisse, le circuit administratif démarre. Les délais sont réels et leur non-respect peut entraîner des amendes.</p>

                <div class="callout info">
                    <strong>Règle générale:</strong> l'inscription dans la commune doit être faite dans un délai de <strong>14 jours</strong> après l'arrivée et, dans de nombreux cantons, <strong>avant le premier jour de travail</strong>. Le délai exact varie selon le canton: vérifiez toujours le site de votre commune.
                </div>

                <h3>1. Inscrivez-vous dans la commune</h3>
                <p>C'est la première démarche, et elle débloque toutes les autres. Lors de l'inscription, vous recevez souvent une attestation provisoire de résidence qui a une pleine valeur administrative: avec elle, vous pouvez commencer à travailler, ouvrir un compte bancaire et souscrire l'assurance maladie, même si la carte du permis met plusieurs semaines à arriver.</p>
                <p><strong>À apporter:</strong> carte d'identité ou passeport, contrat de travail ou de bail, adresse où vous vivez, même provisoire.</p>
                <p><strong>Coût:</strong> généralement entre 65 et 100 CHF selon le canton et le type de permis.</p>

                <h3>2. Ouvrez un compte bancaire</h3>
                <p>Votre employeur a besoin d'un IBAN suisse pour vous verser votre salaire. Avec l'attestation d'inscription, vous pouvez déjà aller à la banque. Si vous avez besoin d'une solution très rapide, des options numériques comme Neon, Yuh ou Revolut avec compte suisse peuvent être activées très vite. Les banques traditionnelles, comme PostFinance, UBS, Raiffeisen ou Migros Bank, prennent parfois un peu plus de temps mais offrent davantage de services.</p>

                <h3>3. Souscrivez l'assurance maladie LAMal</h3>
                <p>Vous avez <strong>3 mois</strong> à partir de la date d'inscription pour choisir votre assurance obligatoire, avec effet rétroactif au premier jour. N'attendez pas le dernier moment: même si vous souscrivez tard, vous paierez les primes depuis le début. La couverture de base est identique chez tous les assureurs; seul le prix change. Comparez les offres sur <a href="https://www.priminfo.admin.ch" target="_blank" rel="noopener noreferrer">Priminfo.admin.ch</a>, le comparateur officiel.</p>

                <h3>4. Communiquez votre situation familiale à l'employeur</h3>
                <p>Si vous avez un conjoint ou des enfants à charge, l'employeur doit le savoir pour appliquer le bon barème de l'impôt à la source. Une erreur à ce stade peut être pénible à corriger rétroactivement.</p>

                <h3>5. Mettez votre nom sur la boîte aux lettres</h3>
                <p>En Suisse, une grande partie de l'administration passe encore par le courrier. Vous recevrez la carte du permis, les factures d'assurance et divers courriers fiscaux sur papier. Si votre nom n'est pas sur la boîte aux lettres dès le départ, ces envois peuvent être perdus ou retournés.</p>

                <h3>6. Apprenez le système de tri des déchets de votre commune</h3>
                <p>Dans de nombreux cantons, seules des sacs officiels payants sont autorisés pour les ordures ménagères. Utiliser des sacs ordinaires peut entraîner des amendes. Renseignez-vous dès le premier jour auprès de votre immeuble ou de la commune.</p>

                <h3>7. Prenez le demi-tarif pour les transports</h3>
                <p>Si vous utilisez régulièrement les trains et les transports publics, le <strong>demi-tarif / Halbtax</strong> est presque toujours rentable. Il réduit le prix des billets dans tout le pays et s'amortit rapidement.</p>

                <h3>Dans les 3 premiers mois</h3>
                <p>Une fois l'urgence passée, il vaut la peine de vous renseigner sur les assurances complémentaires et sur le troisième pilier 3a, une épargne retraite avec avantages fiscaux. Plus on commence tôt, plus l'effet cumulé est important.</p>

                <div class="callout tip">
                    <strong>Ordre recommandé:</strong> inscription dans la commune → compte bancaire → LAMal → communication à l'employeur → boîte aux lettres et déchets → demi-tarif. Chaque étape facilite la suivante.
                </div>

                <h2>Erreurs fréquentes à l'installation</h2>
                <p>Reporter l'inscription jusqu'au moment où "tout sera prêt" et dépasser le délai est l'erreur la plus fréquente. Ne pas comprendre l'effet rétroactif de la LAMal génère aussi des factures inattendues. Oublier le nom sur la boîte aux lettres peut faire perdre la carte du permis ou des lettres fiscales. Et ne pas demander dès le début comment fonctionne la gestion des déchets expose à des amendes évitables.</p>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.ch.ch/es/entrar-y-vivir-en-suiza/" target="_blank" rel="noopener noreferrer">ch.ch — Entrer et vivre en Suisse</a></li>
                    <li><a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo — comparateur officiel LAMal</a></li>
                    <li><a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">SBB/CFF/FFS — transports publics</a></li>
                </ul>
            </div>
        `
    },
        "articulo-trabajar-sin-permiso-fisico": {
        title: "Puis-je travailler en Suisse avant d'avoir le permis physique ?",
        description: "Oui, vous pouvez travailler legalement en Suisse meme si le permis physique tarde a arriver. Nous expliquons comment fonctionne l'attestation provisoire.",
        keywords: "travailler sans permis suisse, permis provisoire suisse, attestation residence suisse, attendre permis suisse",
        category: "Demarches Ordinaires",
        hub: "tramites",
        slug: "trabajar-antes-permiso-fisico-suiza",
        readingTime: 3,
        dateUpdated: "Mars 2026",
        featuredImage: "media/guides/trabajar-antes-permiso-fisico-suiza.jpg",
        imageAlt: "Personne travaillant en Suisse dans un environnement professionnel",
        summary: "Vous pouvez commencer a travailler des le premier jour apres vous etre inscrit a la commune. Le permis physique peut prendre des semaines, mais l'attestation d'enregistrement a une pleine valeur legale.",
        content: `
            <div class="article-content">
                <p>C'est l'une des questions les plus frequentes des nouveaux arrivants, et la reponse est source de beaucoup de confusion : <strong>oui, vous pouvez travailler legalement en Suisse meme si la carte physique du permis n'est pas encore arrivee</strong>.</p>

                <h2>Comment fonctionne le processus</h2>
                <p>Lorsque vous vous inscrivez au bureau du Controle des habitants, vous recevez immediatement une <strong>attestation provisoire de residence</strong> ("Attestation de residence" en francais, "Meldebestatigung" en allemand). Ce document prouve legalement que vous etes inscrit et autorise a resider et a travailler en Suisse.</p>
                <p>Le permis physique (carte plastifiee avec votre photo) est emis par le service cantonal des migrations et peut mettre entre 4 et 12 semaines a arriver par courrier. Ce delai est tout a fait normal et aucun employeur serieux ne l'ignore.</p>

                <h2>Quel document le travailleur utilise-t-il en attendant ?</h2>
                <p>Durant la periode d'attente, le travailleur utilise l'attestation provisoire comme justificatif. Pour l'entreprise, cela suffit pour traiter la fiche de salaire et remplir ses obligations administratives.</p>

                <div class="callout info">
                    <strong>Cas typique :</strong> Beaucoup de travailleurs commencent un lundi et se rendent a la commune le vendredi precedent. Attestation provisoire en main, ils prennent leur poste sans difficulte. Le permis physique arrive plusieurs semaines plus tard par courrier.
                </div>

                <h2>Et si l'employeur exige le permis physique ?</h2>
                <p>Si un employeur pose des problemes, vous pouvez lui expliquer que la procedure est standard et que l'attestation provisoire a pleine valeur legale. Dans les grandes entreprises avec un service RH, c'est une routine. En cas de doute, employeur et employe peuvent appeler le service cantonal des migrations pour confirmer l'etat de la demande.</p>

                <h2>Quand arrive le permis physique ?</h2>
                <ul>
                    <li>Cantons avec moins de demande : 3 a 5 semaines.</li>
                    <li>Geneve, Zurich (forte demande) : 8 a 12 semaines ou plus.</li>
                </ul>
                <p>Vous recevrez la carte dans la boite aux lettres de votre domicile enregistre. Il est donc important que votre nom figure sur la boite depuis le premier jour.</p>

                <div class="callout warning">
                    <strong>Important :</strong> Le permis physique a une date d'expiration. Lorsqu'elle approche, vous recevrez une convocation pour le renouveler. Ne l'ignorez pas.
                </div>
            </div>
        `
    },

    "articulo-impuestos": {
        title: "Impôts en Suisse : fédéral, cantonal et communal",
        description: "Comprendre le système de triple imposition en Suisse : de la Confédération, des cantons et des communes.",
        keywords: "impôts Suisse, fiscalité Suisse, cantons impôts",
        audience: 'worker',
        category: 'Régime Fiscal',
        hub: 'impuestos',
        slug: "impuestos-en-suiza",
        readingTime: 12,
        featuredImage: "media/guides/impuestos-suiza.png",
        imageAlt: "Formulaires d'impôts, calculatrice et pièces de monnaie suisses sur un bureau ordonné",
        summary: 'En Suisse, vous payez les impôts à 3 niveaux. Les impôts cantonaux et communaux constituent la plus grande charge et varient drastiquement même en traversant la rue.',
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>En Suisse, les impôts ne se comprennent pas en regardant simplement un « taux national » et c'est tout. Le pays est fédéral, et votre charge fiscale dépend beaucoup de <strong>l'endroit où vous vivez</strong> (canton et commune), votre état civil, vos enfants et votre niveau de revenus. Deux personnes ayant le même salaire peuvent payer différemment simplement en vivant dans des communes différentes.</p>

                <div class="callout info">
                    <strong>Points clés :</strong>
                    <ul>
                        <li>Vous payez les impôts à <strong>trois niveaux</strong> : Confédération, canton et commune.</li>
                        <li>Ce qui varie généralement le plus (et ce qui compte le plus dans votre budget), c'est cantonal et communal.</li>
                        <li>De nombreux nouveaux arrivants avec un permis L/B commencent par l'<a href="#/impuesto-fuente-suiza">impôt à la source</a> (retenue sur le salaire).</li>
                    </ul>
                </div>

                <h2>Comment fonctionne le système</h2>
                <h3>1) Impôt fédéral direct</h3>
                <p>C'est le composant national. Il s'applique uniformément dans tout le pays, avec des barèmes progressifs. C'est généralement une part mineure de votre facture totale comparé au canton et à la commune.</p>

                <h3>2) Impôts cantonaux</h3>
                <p>Chaque canton définit ses barèmes, déductions et règles. En plus de l'impôt sur le revenu, de nombreux cantons appliquent un impôt sur la <strong>fortune/patrimoine</strong> (avec des seuils et des règles propres). C'est pour cela que parler d'« impôts en Suisse » sans mentionner le canton, c'est rester incomplet.</p>

                <h3>3) Impôts communaux</h3>
                <p>Dans de nombreux cantons, la commune applique un coefficient ou un multiplicateur sur l'impôt cantonal de base. Résultat : vous déplacer « de quelques kilomètres » peut changer votre situation fiscale sans changer d'emploi.</p>

                <h3>4) Retenue vs déclaration annuelle</h3>
                <p>Il existe deux grands modes de paiement :</p>
                <ul>
                    <li><strong>Impôt à la source :</strong> votre employeur retient mensuellement sur le salaire (très courant avec les permis L/B).</li>
                    <li><strong>Déclaration ordinaire :</strong> vous déclarez annuellement et payez/ajustez selon le décompte (fréquent avec permis C et autres cas).</li>
                </ul>
                <p>Dans certains cas, même si vous êtes à la source, vous pouvez être obligé de faire une déclaration ordinaire ou une régularisation (selon canton et situation). Si vous avez des doutes, ne la mettez pas de côté en pensant « quand la lettre arrivera » : consultez rapidement.</p>

                <h3>5) Année fiscale, factures et « surprises »</h3>
                <p>En déclaration ordinaire, il est habituel qu'il y ait des paiements provisionnels ou des factures à compte (selon le canton) et des ajustements ultérieurs. C'est pourquoi, même si votre salaire est stable, une liquidation peut arriver des mois plus tard. La recommandation pratique est simple : <strong>gardez une réserve</strong> et ne planifiez pas vos finances au centime près.</p>

                <h3>6) Impôt ecclésiastique (selon le canton et l'affiliation)</h3>
                <p>Dans certains cantons, il existe un impôt lié à l'affiliation religieuse (église). Si vous n'en êtes pas membre, en principe cela ne devrait pas s'appliquer. Comme c'est un sujet sensible et cantonal, consultez la documentation de votre canton si vous voyez un concept que vous ne comprenez pas.</p>

                <h2>Conditions et règles</h2>
                <h3>Documents qui forment généralement la base de votre fiscalité</h3>
                <ul>
                    <li><strong>Certificat salarial / Lohnausweis :</strong> le document annuel contenant votre salaire et ses éléments.</li>
                    <li><strong>État civil et enfants :</strong> ils impactent les tarifs à la source et les déductions.</li>
                    <li><strong>Domicile fiscal (commune) :</strong> détermine une grande partie de votre facture.</li>
                    <li><strong>Patrimoine et dettes :</strong> si applicable (particulièrement pertinent dans les cantons avec impôt sur la fortune).</li>
                </ul>

                <h3>Ce que signifie « être à la source » en pratique</h3>
                <p>Si vous êtes à la source, l'administration fiscale applique un tarif standard basé sur des catégories (état civil, enfants, etc.). Ce qui est important pour vous :</p>
                <ul>
                    <li>Vérifier que votre catégorie est correcte (les changements familiaux importent).</li>
                    <li>Savoir si votre canton permet des <strong>corrections</strong> ou régularisations pour déductions (par exemple, cotisations au 3e pilier, frais de formation, etc.).</li>
                    <li>Comprendre que certains seuils/situations peuvent vous mener à une déclaration ordinaire (selon les règles cantonales et fédérales).</li>
                </ul>

                <h3>Ce qui se passe si vous faites une déclaration ordinaire</h3>
                <p>Dans la déclaration, le canton et la commune vous appliquent les règles de déductions et les barèmes. Il peut y avoir des déductions pour :</p>
                <ul>
                    <li>Cotisations de prévoyance (par exemple, 3e pilier).</li>
                    <li>Frais professionnels (selon règles cantonales).</li>
                    <li>Frais de garde d'enfants (selon canton).</li>
                    <li>Intérêts des dettes (selon canton).</li>
                </ul>
                <p>La liste exacte des déductions et des limites est <strong>dépendante du canton</strong>. C'est pourquoi, ne copiez pas les conseils fiscaux d'un canton à un autre sans vérifier.</p>

                <h3>Vous déménagez en Suisse : pourquoi tout change</h3>
                <p>En Suisse, le domicile fiscal est clé. Si vous déménagez de commune ou de canton, ce ne sont pas que les pourcentages qui changent : peuvent changer les déductions, formulaires, délais et formes de paiement. Il n'est pas rare que la première année après un déménagement, des ajustements apparaissent parce que le système « se recalcule » avec votre nouveau domicile.</p>

                <h2>Exemples concrets</h2>
                <h3>Exemple 1 – Même salaire, commune différente</h3>
                <p>On vous offre le même salaire dans la même entreprise, mais vous hésitez entre deux communes proches. Si une commune a un multiplicateur élevé et l'autre bas, votre « salaire net réel » change. C'est pourquoi, en comparant les loyers, comparez aussi les impôts (en Suisse, ils vont ensemble).</p>

                <h3>Exemple 2 – Vous vous mariez en milieu d'année</h3>
                <p>Un changement d'état civil peut changer le tarif à la source ou vos déductions. En pratique, il faut notifier les changements et garder la documentation. L'erreur typique est de la laisser pour la fin et d'être surprise par des ajustements.</p>

                <h3>Exemple 3 – Revenus supplémentaires (indépendant, loyer, investissements)</h3>
                <p>Si vous avez des revenus supplémentaires, la retenue standard peut ne pas refléter votre situation finale. C'est un cas typique où il peut y avoir obligation de déclarer ou de régulariser. Le conseil pratique : anticipez et mettez de l'argent de côté.</p>

                <h3>Exemple 4 – Vous déménagez de canton en été</h3>
                <p>Vous travaillez toute l'année, mais vous changez de canton à la moitié. Même si c'est « le même pays », fiscalement c'est un changement important : communiquez-le dans vos démarches de domicile et acceptez que le calcul final puisse varier par rapport à ce que vous attendiez.</p>

                <h2>Erreurs courantes</h2>
                <ul>
                    <li><strong>Croire que « en Suisse on paie peu » sans regarder le canton/la commune :</strong> la différence peut être grande.</li>
                    <li><strong>Ne pas vérifier la catégorie à la source :</strong> une erreur de catégorie peut vous faire mal payer toute l'année.</li>
                    <li><strong>Ne pas garder le certificat salarial :</strong> c'est la pièce centrale de toute correction ou déclaration.</li>
                    <li><strong>Ne pas planifier la liquidité :</strong> en Suisse, des ajustements et des factures peuvent arriver après coup ; ne vivez pas à la limite.</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Si vous venez d'arriver, commencez par comprendre l'<a href="#/impuesto-fuente-suiza">impôt à la source</a>.</li>
                    <li>Quand vous choisissez où vivre, regardez le « paquet complet » : loyer + impôts + transport.</li>
                    <li>Si vous changez de commune ou de canton, acceptez que les règles changent et révisez votre budget.</li>
                    <li>Créez un dossier fiscal annuel (PDFs et lettres) : certificat salarial, contrats, reçus du 3e pilier et communications du canton.</li>
                    <li>Si vous avez des doutes, consultez l'autorité fiscale de votre canton : un appel à temps évite des erreurs coûteuses.</li>
                    <li>Connectez ce guide avec le <a href="#/presupuesto-suiza">coût de la vie</a> et les <a href="#/trabajadores-fronterizos-suiza">travailleurs frontaliers</a> si applicable.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.estv.admin.ch/" target="_blank" rel="noopener noreferrer">AFC / ESTV – Administration fédérale des contributions</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch – Portail officiel suisse</a></li>
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
        featuredImage: "media/guides/impuesto-fuente-suiza.jpg",
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
        title: "RAV et chômage en Suisse : fonctionnement, conditions et étapes",
        description: "Guide pratique de l'assurance chômage suisse: conditions, délais, inscription au RAV, obligations et sanctions.",
        keywords: "RAV Suisse, chômage Suisse, assurance chômage Suisse, ALV AC, indemnités chômage Suisse",
        category: 'Travail',
        hub: 'trabajo',
        slug: "rav-paro-suiza",
        readingTime: 7,
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        imageAlt: "Centre de l'assurance-chômage suisse offrant des services aux demandeurs d'emploi",
        summary: "Si vous perdez votre emploi en Suisse, le RAV et la caisse de chômage peuvent couvrir une partie de votre salaire, mais le système impose des délais stricts et une recherche d'emploi prouvée.",
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>En Suisse, le chômage, assurance ALV/AC, est un système très utile, mais aussi <strong>exigeant</strong>. Il ne suffit pas de "s'inscrire": tout repose sur des documents, des délais et une recherche d'emploi démontrable. Il faut aussi distinguer deux acteurs dès le départ:</p>
                <ul>
                    <li><strong>RAV / ORP:</strong> l'office régional de placement, qui suit votre dossier, vos rendez-vous et votre stratégie de retour à l'emploi.</li>
                    <li><strong>Caisse de chômage:</strong> c'est elle qui vérifie votre droit et qui <strong>verse</strong> les indemnités.</li>
                </ul>
                <p>Les détails pratiques, formulaires, prise de rendez-vous, rythme du suivi, peuvent varier selon le <strong>canton</strong> et l'office compétent, mais la logique générale est la même partout en Suisse.</p>

                <div class="callout warning">
                    <strong>Message clair:</strong> si votre contrat se termine dans 2 à 4 semaines, commencez aujourd'hui à conserver des preuves de vos recherches. Beaucoup de dossiers se compliquent parce qu'il est impossible de démontrer ce qui a été fait avant le dernier jour.
                </div>

                <h2>Comment fonctionne le système</h2>
                <h3>1) Ce qui est versé</h3>
                <p>Les prestations sont calculées en fonction du salaire assuré et versées sous forme d'<strong>indemnités journalières</strong>. Comme ordre de grandeur, on parle souvent de <strong>70%</strong> du salaire assuré, ou de <strong>80%</strong> dans certains cas, par exemple avec des enfants à charge. Il existe des plafonds et des règles spécifiques pour les bonus, le temps partiel ou les revenus variables.</p>
                <p>La caisse de chômage est la seule à faire le calcul exact à partir de vos documents. Ne prenez pas ces pourcentages comme une promesse ferme, mais comme une base pour anticiper votre budget.</p>

                <h3>2) RAV et caisse de chômage: deux rôles différents</h3>
                <p>Le RAV contrôle que vous respectez vos obligations: candidatures, disponibilité, entretiens et éventuelles mesures de réinsertion. La caisse, elle, vérifie le droit aux prestations et effectue le paiement. On peut être inscrit au RAV et avoir malgré tout un paiement bloqué parce qu'il manque des pièces ou qu'une sanction s'applique.</p>

                <h3>3) Le cycle mensuel réel</h3>
                <p>Dans la pratique, le système fonctionne souvent ainsi:</p>
                <ul>
                    <li>Vous remettez une <strong>liste de candidatures</strong> avec des preuves, et parfois d'autres formulaires de contrôle, dans le délai fixé.</li>
                    <li>Vous avez des <strong>entretiens</strong> avec votre conseiller RAV et devez arriver préparé, avec un CV à jour, des offres ciblées et une stratégie crédible.</li>
                    <li>Si vous travaillez quelques jours ou à temps partiel, vous devez l'annoncer afin que la prestation soit recalculée en fonction du revenu perçu.</li>
                </ul>
                <p>Selon la situation, il peut aussi y avoir des <strong>jours d'attente</strong> ou des particularités au début du dossier. Mieux vaut demander précisément à votre caisse quelles dates et quels documents conditionnent le premier paiement.</p>

                <h3>4) Revenus intermédiaires</h3>
                <p>Un point important: accepter un travail temporaire ou partiel pendant une période de chômage peut être positif. Dans certains cas, le système compense une partie de la différence entre votre ancien salaire et ce nouveau revenu. Il faut toujours demander à la caisse comment déclarer ces revenus et quel est leur impact exact.</p>

                <h2>Conditions et règles</h2>
                <h3>1) Conditions typiques</h3>
                <p>Le droit exact dépend de chaque cas, mais il repose généralement sur les éléments suivants:</p>
                <ul>
                    <li>Avoir <strong>cotisé</strong> pendant la période minimale requise dans la période de référence.</li>
                    <li>Être <strong>sans emploi</strong>, ou en réduction reconnue de l'activité, et être <strong>apte</strong> à travailler.</li>
                    <li>Être <strong>plaçable</strong>, c'est-à-dire disponible et prêt à accepter un emploi convenable.</li>
                    <li>Effectuer une <strong>recherche active</strong> et démontrable.</li>
                </ul>

                <h3>2) Documents souvent demandés</h3>
                <p>Préparez un vrai dossier de chômage avec:</p>
                <ul>
                    <li>Pièce d'identité et permis de séjour.</li>
                    <li>Contrat de travail et <strong>lettre de licenciement</strong> ou confirmation de fin de contrat.</li>
                    <li>Fiches de salaire récentes, certificat salarial si nécessaire, coordonnées bancaires.</li>
                    <li>Formulaires de la caisse et preuves de votre recherche.</li>
                    <li>Documents liés à des situations particulières, comme maladie, maternité ou réduction du taux d'activité.</li>
                </ul>
                <p>Si vous êtes malade pendant la procédure, il faut généralement fournir un <strong>certificat médical</strong> et l'annoncer immédiatement, car cela influence votre disponibilité et vos obligations.</p>

                <h3>3) Recherche d'emploi: quantité et qualité</h3>
                <p>En Suisse, on attend une recherche <strong>régulière</strong> et organisée. Le nombre minimal de candidatures peut varier selon le canton et votre situation. Ce qui compte n'est pas seulement la quantité, mais aussi:</p>
                <ul>
                    <li>Des candidatures <strong>raisonnables</strong>, cohérentes avec votre profil et votre marché.</li>
                    <li>Des <strong>preuves</strong> conservées correctement: e-mails, PDF, captures d'écran de portails.</li>
                    <li>Des réponses rapides aux offres "assignées" par le RAV et l'absence de silence sur les propositions reçues.</li>
                </ul>

                <h3>4) Démission, fin de contrat "négociée" et sanctions</h3>
                <p>Si vous démissionnez volontairement ou si votre contrat se termine d'une manière considérée comme évitable, il peut y avoir des <strong>jours de suspension</strong>, donc des jours non indemnisés. Cela ne signifie pas que vous perdez définitivement le droit au chômage, mais le système sanctionne les décisions qu'il estime évitables. En cas de motif sérieux, santé, harcèlement, modification substantielle des conditions, documentez tout et demandez conseil avant d'agir.</p>

                <h2>Exemples concrets</h2>
                <h3>Exemple 1 — Licenciement avec préavis</h3>
                <p>Vous apprenez aujourd'hui que votre contrat se termine dans un mois. Vous commencez immédiatement à postuler, conservez les preuves, demandez votre certificat de travail et préparez le dossier. Au moment de l'inscription, vous pouvez démontrer une recherche active préalable.</p>

                <h3>Exemple 2 — Fin d'un contrat temporaire</h3>
                <p>Même si ce n'est pas un licenciement, le système attend la même logique: recherches documentées, inscription à temps, disponibilité et respect des délais.</p>

                <h3>Exemple 3 — Vous trouvez un temps partiel de deux mois</h3>
                <p>Vous acceptez un emploi temporaire tout en continuant à chercher quelque chose de plus stable. Vous informez le RAV et la caisse, déclarez les revenus et continuez à respecter vos obligations. Très souvent, c'est mieux vu que de refuser des opportunités parce qu'elles ne sont pas "parfaites".</p>

                <h2>Erreurs fréquentes</h2>
                <ul>
                    <li><strong>S'inscrire trop tard:</strong> attendre "pour voir si quelque chose se présente" et perdre des jours d'indemnisation.</li>
                    <li><strong>Ne pas avoir de preuves:</strong> dire que vous avez envoyé des CV sans captures ni e-mails mène souvent à des sanctions.</li>
                    <li><strong>Manquer un rendez-vous:</strong> une absence sans justificatif peut coûter des jours d'indemnisation.</li>
                    <li><strong>Voyager sans autorisation:</strong> quitter le pays sans coordination peut être interprété comme une indisponibilité.</li>
                    <li><strong>Ne pas répondre</strong> aux propositions du RAV ou refuser un emploi convenable sans raison solide.</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Organisez votre recherche comme un vrai travail: calendrier, plages horaires fixes et suivi dans un tableau.</li>
                    <li>Préparez un dossier "à la suisse": CV, lettre, diplômes et certificats. Appuyez-vous sur <a href="#/recherche-demploi-plateformes-et-strategies">la recherche d'emploi en Suisse</a>.</li>
                    <li>Gardez une réserve de trésorerie: le premier paiement peut prendre du temps et des ajustements sont possibles.</li>
                    <li>Conservez des preuves irréprochables: PDF, e-mails et captures avec date visible. Une candidature sans preuve est souvent considérée comme inexistante.</li>
                    <li>Reliez votre situation de chômage aux autres démarches: <a href="#/tramites-llegada-suiza">permis de séjour</a> et <a href="#/impot-a-la-source-suisse-quellensteuer">impôt à la source</a> si cela vous concerne.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.ch.ch/es/trabajo/desempleo/" target="_blank" rel="noopener noreferrer">ch.ch — Chômage</a></li>
                    <li><a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer">SECO — Secrétariat d'État à l'économie</a></li>
                </ul>

                <h2>Articles liés</h2>
                <ul>
                    <li><a href="#/recherche-demploi-plateformes-et-strategies">Chercher un emploi en Suisse</a></li>
                    <li><a href="#/contrats-de-travail-en-suisse-droits-et-obligations">Contrats de travail en Suisse</a></li>
                    <li><a href="#/assurances-sociales-avs-ai-lpp-et-chomage">Assurances sociales en Suisse</a></li>
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
        featuredImage: "media/guides/buscar-empleo-heramientas.jpeg",
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
        description: "Documents nécessaires, extrait du registre des poursuites et dossier locatif complet pour louer en Suisse dans un marché très compétitif.",
        keywords: "louer appartement Suisse, dossier location Suisse, extrait des poursuites, bail Suisse",
        category: 'Logement',
        hub: 'vivienda',
        slug: "alquilar-vivienda-suiza",
        readingTime: 8,
        featuredImage: "media/guides/alquilar-vivienda-suiza.jpg",
        imageAlt: "Clés de logement suisse avec document de bail et demande de location",
        summary: "Le marché locatif suisse est très compétitif. Il faut un dossier impeccable, en particulier un extrait du registre des poursuites, un contrat de travail et souvent les trois dernières fiches de salaire.",
        content: `
            <div class="article-content">
                <h2>Introduction</h2>
                <p>Louer un logement en Suisse surprend souvent pour deux raisons: la <strong>concurrence</strong> dans certaines zones et l'importance du <strong>dossier</strong>. Il ne suffit pas de pouvoir payer. Les régies cherchent des profils stables, avec des documents complets et sans historique d'impayés. La bonne nouvelle, c'est qu'en comprenant le processus et en préparant bien votre candidature, vous augmentez clairement vos chances.</p>

                <div class="callout info">
                    <strong>Points clés:</strong>
                    <ul>
                        <li>Préparez votre dossier <strong>avant</strong> de commencer les visites.</li>
                        <li>Le document central est l'<strong>extrait du registre des poursuites</strong> ou <strong>Betreibungsauszug</strong>.</li>
                        <li>Anticipez le coût d'entrée: garantie de loyer, premier mois, déménagement et assurances.</li>
                    </ul>
                </div>

                <h2>Comment fonctionne le système</h2>
                <h3>1) Où les logements sont publiés</h3>
                <p>La majorité des annonces se trouve sur <a href="https://www.homegate.ch/" target="_blank" rel="noopener noreferrer">Homegate</a> ou <a href="https://www.immoscout24.ch/" target="_blank" rel="noopener noreferrer">ImmoScout24</a>. Il existe aussi des sites de régies et des groupes locaux. Le conseil le plus utile: créez des alertes par quartier, budget et nombre de pièces afin de réagir vite.</p>

                <h3>2) Visite et candidature</h3>
                <p>En Suisse, visiter un appartement ne signifie pas le réserver. Le plus souvent, vous visitez puis vous déposez une <strong>candidature formelle</strong> avec votre dossier. Lors des visites collectives, il peut y avoir des dizaines de candidats. Celui qui envoie un dossier complet rapidement prend souvent l'avantage.</p>

                <h3>3) Sélection et contrat</h3>
                <p>La régie vérifie votre solvabilité et le profil du ménage. Si vous êtes retenu, elle vous envoie le contrat ou une confirmation. Si vous n'êtes pas choisi, il est courant de ne recevoir aucune explication détaillée.</p>

                <h3>4) Entrée dans le logement</h3>
                <p>Avant de recevoir les clés, il faut généralement finaliser:</p>
                <ul>
                    <li><strong>La garantie de loyer:</strong> en logement, elle est en principe limitée à trois mois de loyer et placée sur un compte bloqué à votre nom, ou remplacée par une assurance de caution.</li>
                    <li><strong>L'état des lieux:</strong> il est crucial. Les défauts du logement sont notés et servent de référence à la sortie.</li>
                    <li><strong>La responsabilité civile:</strong> elle est souvent demandée pour couvrir les dommages causés à des tiers, comme un dégât d'eau.</li>
                </ul>

                <h2>Conditions et règles</h2>
                <h3>Le dossier locatif type</h3>
                <p>Les régies demandent généralement des documents pour vérifier votre identité, vos revenus et votre historique de paiement. Un dossier typique comprend:</p>
                <ul>
                    <li>Copie de votre carte d'identité ou passeport et, si vous l'avez déjà, permis de séjour. Si vous venez d'arriver, le contrat de travail et l'attestation d'inscription peuvent aider.</li>
                    <li>Les <strong>3 dernières fiches de salaire</strong>. Si vous n'en avez pas encore, ajoutez le contrat de travail et une lettre de l'employeur avec salaire et date de début.</li>
                    <li><strong>L'extrait du registre des poursuites</strong> ou <strong>Betreibungsauszug</strong>, qui atteste de l'absence de poursuites en Suisse.</li>
                    <li>Le formulaire propre à la régie.</li>
                    <li>Parfois une assurance RC, des références ou une brève lettre de présentation.</li>
                </ul>

                <h3>Règle d'or: le tiers du salaire</h3>
                <p>Beaucoup de régies appliquent une règle simple: le loyer mensuel ne devrait pas dépasser environ <strong>un tiers</strong> du revenu brut du ménage. Si ce ratio est dépassé, la candidature peut être refusée même si, en pratique, vous pensez pouvoir assumer le loyer.</p>

                <h3>Pièces, charges et lecture du bail</h3>
                <ul>
                    <li><strong>Nombre de pièces:</strong> le salon compte dans le total. Un 3,5 pièces correspond souvent à un salon, deux chambres et un espace plus petit.</li>
                    <li><strong>Charges:</strong> elles peuvent inclure le chauffage, l'eau chaude et des frais communs, mais pas toujours. Il faut vérifier ce qui est compris.</li>
                </ul>
                <p>Le contrat contient souvent des <strong>dates de résiliation</strong> spécifiques, par exemple à la fin d'un trimestre, ainsi qu'un <strong>délai de préavis</strong> de plusieurs mois. Il ne faut pas supposer qu'on peut partir à n'importe quel moment avec seulement 30 jours d'annonce.</p>

                <h3>Entrée et sortie: l'état des lieux est votre protection</h3>
                <p>Le jour de la remise des clés, un état des lieux détaillé est effectué. Prenez des photos et notez tout défaut, même minime. Au moment de la sortie, c'est ce document qui sert à distinguer l'usure normale des dommages qui pourraient vous être facturés.</p>

                <h2>Exemples concrets</h2>
                <h3>Exemple 1 — Vous venez d'arriver et n'avez pas encore de fiches de salaire suisses</h3>
                <p>Renforcez le dossier avec un contrat indéterminé, une attestation de l'employeur et une brève explication écrite. Cela ne garantit pas l'acceptation, mais améliore nettement vos chances.</p>

                <h3>Exemple 2 — Couple: une seule personne travaille pour l'instant</h3>
                <p>Le revenu total compte, mais la stabilité compte aussi. Joignez le contrat de la personne salariée et expliquez le projet de l'autre personne, recherche d'emploi, langue, etc.</p>

                <h3>Exemple 3 — On vous propose une assurance de caution au lieu d'une garantie bloquée</h3>
                <p>Au lieu de bloquer plusieurs milliers de francs, vous pouvez payer une prime annuelle à une société de cautionnement. C'est utile si vous manquez de liquidités, mais ce n'est pas de l'argent récupérable. Comparez bien avec <a href="#/garanties-de-loyer-et-droits-des-locataires">les garanties de location</a>.</p>

                <h3>Exemple 4 — Sous-location pour commencer</h3>
                <p>Beaucoup de nouveaux arrivants commencent avec une chambre ou une sous-location pour pouvoir s'inscrire et toucher le premier salaire. C'est souvent réaliste, mais il faut un contrat clair et éviter les accords purement verbaux.</p>

                <h2>Erreurs fréquentes</h2>
                <ul>
                    <li><strong>Dossier incomplet:</strong> dans un marché tendu, c'est presque un refus automatique.</li>
                    <li><strong>Demander trop tard l'extrait des poursuites:</strong> faites-le dès que vous avez une adresse.</li>
                    <li><strong>Négliger l'état des lieux:</strong> c'est l'une des erreurs les plus coûteuses au moment de partir.</li>
                    <li><strong>Tomber dans une arnaque:</strong> n'envoyez jamais d'argent à l'avance sans contrat réel et sans vérification sérieuse.</li>
                    <li><strong>Ne pas anticiper les coûts d'entrée:</strong> garantie + premier loyer + déménagement + assurances s'additionnent très vite.</li>
                </ul>

                <h2>Conseils pratiques</h2>
                <ul>
                    <li>Gardez votre dossier dans un seul PDF, propre, ordonné et prêt à être envoyé le jour même.</li>
                    <li>Préparez une mini-présentation professionnelle de quelques lignes pour accompagner votre candidature.</li>
                    <li>Aux visites collectives: arrivez ponctuellement, soyez bref et envoyez votre dossier sans tarder si l'appartement vous intéresse.</li>
                    <li>En cas de doute sur le contrat ou la restitution de la garantie, regardez aussi <a href="#/garanties-de-loyer-et-droits-des-locataires">les garanties et droits des locataires</a>.</li>
                    <li>Reliez la question du logement à votre budget et à vos démarches de départ: <a href="#/cout-de-la-vie-en-suisse-logement-nourriture-impots">coût de la vie</a> et <a href="#/checklist-demarches-du-premier-mois-en-suisse">premier mois en Suisse</a>.</li>
                </ul>

                <h2>Sources officielles</h2>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portail officiel suisse</a></li>
                </ul>
            </div>
        `
    },
        "articulo-fianzas": {
        title: "Garanties de location et droits des locataires (ASLOCA)",
        description: "Découvrez comment fonctionnent les garanties de loyer en Suisse, les alternatives via assurances de caution et les associations de défense des locataires.",
        keywords: "garantie de loyer Suisse, SwissCaution, ASLOCA, Mieterverband",
        category: 'Logement',
        hub: 'vivienda',
        slug: "fianzas-alquiler-suiza",
        readingTime: 3,
        featuredImage: "media/guides/fianzas-alquiler-suiza.jpg",
        imageAlt: "Document de garantie de location avec stylo et clés de maison suisse",
        summary: "En Suisse, la garantie maximale légale pour un logement est de 3 mois de loyer. Vous pouvez la déposer à la banque ou utiliser une assurance de caution comme alternative.",
        content: `
            <div class="article-content">
                <h2>La garantie de loyer</h2>
                <p>En Suisse, le bailleur peut demander jusqu'à un <strong>maximum légal de 3 mois de loyer</strong> comme garantie pour un logement. Pour les locaux commerciaux, il n'y a pas cette même limite. Cet argent ne doit jamais être remis en main propre au propriétaire.</p>
                <p>La somme est déposée sur un <strong>compte bancaire bloqué</strong> ouvert à votre nom. Elle ne peut être libérée qu'avec l'accord conjoint du locataire et du bailleur au moment de la sortie, ou selon la procédure légale applicable.</p>

                <h2>Assurances de caution</h2>
                <p>Si vous ne disposez pas de plusieurs milliers de francs à bloquer, il existe des sociétés, comme <a href="https://www.swisscaution.ch/" target="_blank">SwissCaution</a>, qui se portent garantes. Vous payez une prime annuelle non remboursable, souvent autour de 5% du montant garanti, et la société remet un certificat à la régie comme si la somme était bloquée.</p>

                <h2>Défendre vos droits: ASLOCA / Mieterverband</h2>
                <p>Le système protège plutôt bien les locataires, mais il peut devenir complexe lorsqu'une régie veut vous imputer des frais abusifs à la sortie ou retarder le remboursement de la garantie. Dans ce cas, être membre de l'<a href="https://www.asloca.ch/" target="_blank">ASLOCA</a> en Suisse romande, ou du Mieterverband en Suisse alémanique, est souvent très utile. Ces associations proposent des conseils, une aide à la lecture du bail et parfois un soutien juridique pour un coût annuel modéré.</p>
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
        description: "Comment faire reconnaître votre diplôme universitaire ou professionnel en Suisse, pour les titres espagnols ou latino-américains, et à quelle autorité s'adresser.",
        keywords: "reconnaissance diplômes Suisse, homologation titre Suisse, SEFRI, diplôme étranger Suisse",
        category: 'Études',
        hub: 'recursos',
        slug: "diplomas-extranjeros-reconocimiento-suiza",
        readingTime: 5,
        featuredImage: "media/guides/homologar-titulos-suiza.jpg",
        imageAlt: "Diplôme avec traduction et certification pour la Suisse",
        summary: "Seules les professions réglementées, médecins, enseignants, soins, etc., exigent une reconnaissance officielle obligatoire. Pour les autres, c'est surtout le marché du travail qui évalue votre diplôme.",
        content: `
            <div class="article-content">
                <p>Si vous avez un diplôme étranger et que vous voulez exercer en Suisse, la première question à se poser est simple: votre profession est-elle réglementée? C'est le cas notamment de la médecine, des soins infirmiers, de l'enseignement ou de certaines professions juridiques. Si la profession n'est pas réglementée, il n'y a généralement <strong>pas d'obligation légale de reconnaissance officielle</strong>; c'est surtout l'employeur qui décidera de la valeur de votre diplôme.</p>

                <h2>Professions réglementées et autorités compétentes</h2>
                <p>Pour les professions réglementées, la reconnaissance est indispensable. L'autorité compétente dépend du domaine:</p>
                <ul>
                    <li><strong>SEFRI / SEFRI-SBFI:</strong> pour de nombreuses professions de la formation professionnelle, du commerce et de la pédagogie.</li>
                    <li><strong>MEBEKO:</strong> pour les médecins, dentistes, vétérinaires et pharmaciens. Un niveau de langue nationale est souvent exigé, en général B2 ou C1 selon le cas.</li>
                    <li><strong>Croix-Rouge suisse:</strong> pour plusieurs professions paramédicales et de santé non universitaires, comme les soins infirmiers ou la physiothérapie.</li>
                </ul>

                <p>Ces démarches impliquent des frais administratifs, parfois de plusieurs centaines de francs, et requièrent souvent des traductions certifiées conformes ainsi que des pièces académiques détaillées.</p>

                <div class="callout info">
                    <strong>Source utile:</strong> vérifiez quelle autorité est compétente pour votre diplôme sur le <a href="https://www.sbfi.admin.ch/sbfi/en/home/education/recognition-of-foreign-qualifications.html" target="_blank">portail officiel du SEFRI</a>.
                </div>
            </div>
        `
    },
        "articulo-sistema-escolar": {
        title: "Le systeme scolaire suisse explique",
        description: "Guide sur le fonctionnement de l'ecole en Suisse, les ecoles publiques, les langues et l'orientation precoce (filieres).",
        keywords: "ecole suisse, education suisse, systeme scolaire suisse, ecole enfantine suisse",
        audience: 'family',
        category: 'Famille',
        hub: 'vivir-en-suiza',
        slug: "sistema-escolar-suiza",
        readingTime: 5,
        featuredImage: "media/guides/sistema-escolar-suiza.jpg",
        imageAlt: "Batiment moderne d'une ecole primaire publique en Suisse avec aire de jeux et montagnes en fond",
        summary: "Le systeme scolaire oriente (segregue) les eleves rapidement : plus de 60 % effectuent une formation professionnelle duale (CFC) plutot qu'une maturite gymnasiale.",
        content: `
            <div class="article-content">
                <p>L'education publique en Suisse est gratuite, entierement obligatoire pendant 11 ans et d'excellente qualite. Cependant, sa structure est tres cantonale (chaque canton definit son programme) et presente une particularite : l'orientation professionnelle precoce.</p>

                <h2>Structure generale (modele HarmoS)</h2>
                <ul>
                    <li><strong>Ecole enfantine (Ecole Enfantine / Kindergarten) :</strong> Debute a 4 ans. Deux annees obligatoires de preparation.</li>
                    <li><strong>Ecole primaire (Ecole Primaire / Primarschule) :</strong> De 6 a 12 ans (degres 3 a 8). Une deuxieme et une troisieme langue sont introduites rapidement (autre langue nationale et anglais).</li>
                    <li><strong>Degre secondaire I (Cycle d'orientation / Sekundarstufe I) :</strong> De 12 a 15 ans (degres 9 a 11).</li>
                </ul>

                <h2>L'orientation ou "filieres"</h2>
                <p>Contrairement a d'autres pays europeens, en Suisse, vers 12 ou 15 ans, les eleves sont orientes selon leurs resultats et aptitudes vers deux voies tres differenciees :</p>
                <ol>
                    <li><strong>La voie professionnelle (formation professionnelle / apprentissage dual) :</strong> Plus de 60 % des jeunes suisses optent pour un "CFC" (Certificat federal de capacite). Ils travaillent 3 ou 4 jours par semaine en entreprise pour apprendre un metier et suivent 1 ou 2 jours de cours. C'est une voie tres valorisee et remuneree des le debut.</li>
                    <li><strong>La voie academique (Gymnase / College / Maturite / Matura) :</strong> Pour les eleves ayant de meilleures notes scolaires, elle les prepare a entrer directement a l'universite ou aux Ecoles Polytechniques Federales.</li>
                </ol>
                <p><em>Remarque :</em> Le systeme est permeable ; un etudiant en formation professionnelle peut acceder a l'universite par la suite via des "passerelles".</p>
            </div>
        `
    },

    "articulo-transporte": {
        title: "Transports publics en Suisse : CFF/SBB, Halbtax et abonnements",
        description: "Guide complet sur les transports en Suisse : trains, bus, tarifs et comment économiser avec des abonnements.",
        keywords: "trains Suisse, CFF SBB FFS, demi-tarif Suisse, Halbtax, AG, abonnement général",
        category: 'Vie quotidienne',
        hub: 'vivir-en-suiza',
        slug: "transporte-publico-suiza-cff-sbb",
        readingTime: 4,
        featuredImage: "media/guides/transporte-publico-suiza.jpg",
        imageAlt: "Train CFF/SBB moderne arrivant en gare suisse",
        summary: "Le demi-tarif / Halbtax est presque incontournable pour tout résident qui prévoit d'utiliser les transports publics, même occasionnellement.",
        content: `
            <div class="article-content">
                <p>La Confédération est fière de disposer de l'un des réseaux de transports publics les plus denses, ponctuels et intégrés du monde. Trains, bus, trams et même bateaux fonctionnent dans une logique commune et avec des correspondances très bien coordonnées.</p>

                <h2>Le SwissPass</h2>
                <p>Le SwissPass est la carte rouge, physique et numérique dans l'application SBB Mobile, qui sert de support à vos abonnements de transport et à d'autres prestations, comme certains forfaits de ski.</p>

                <h2>L'abonnement indispensable: le demi-tarif / Halbtax</h2>
                <p>Acheter des billets de train au plein tarif revient vite cher. C'est pourquoi une grande partie des résidents prend un <strong>demi-tarif annuel</strong>. Il coûte un peu moins de 200 CHF par an et permet d'acheter des billets à moitié prix dans les trains, bus, bateaux et la plupart des réseaux urbains. Il s'amortit très rapidement.</p>

                <h2>L'abonnement général, AG / GA</h2>
                <p>Si vous êtes un gros pendulaire et prenez souvent le train pour aller travailler, l'<strong>abonnement général</strong> permet de voyager de façon illimitée dans presque tout le réseau national, interurbain, urbain, postbus et bateaux. Il est cher, plusieurs milliers de francs par an, mais offre une liberté totale. Certains employeurs en subventionnent une partie.</p>

                <h2>Billets dégriffés et cartes journalières communales</h2>
                <p>Si vous achetez vos billets plusieurs semaines à l'avance dans l'application SBB Mobile, vous pouvez trouver des <strong>billets dégriffés</strong> avec de fortes réductions. Ils sont en revanche valables pour un horaire précis.</p>
                <p>De nombreuses communes vendent aussi des <strong>cartes journalières</strong> fortement subventionnées pour leurs habitants.</p>
            </div>
        `
    },
        "articulo-ciudadania": {
        title: "Citoyenneté suisse et naturalisation par résidence",
        description: "Conditions pour obtenir le passeport suisse: années de résidence, niveau de langue et procédure de naturalisation ordinaire.",
        keywords: "nationalité suisse, naturalisation suisse, citoyenneté suisse, passeport suisse",
        category: 'Démarches',
        hub: 'tramites',
        slug: "ciudadania-suiza-naturalizacion",
        readingTime: 5,
        featuredImage: "media/guides/nacionalidad-suiza-pasaporte.jpg",
        imageAlt: "Passeport rouge suisse symbole de la citoyenneté suisse",
        summary: "La naturalisation ordinaire exige 10 ans de résidence, un permis C, un niveau de langue certifié et la preuve d'une intégration réelle dans votre canton et votre commune.",
        content: `
            <div class="article-content">
                <p>Obtenir le passeport à croix blanche n'est pas perçu en Suisse comme une simple formalité administrative. Pour beaucoup de Suisses, c'est la confirmation finale d'un niveau d'intégration jugé suffisant.</p>

                <h2>Conditions de la naturalisation ordinaire</h2>
                <p>Si vous n'êtes pas marié à une personne de nationalité suisse, la voie habituelle est la naturalisation ordinaire. La condition principale est de totaliser <strong>10 ans de résidence en Suisse</strong>. Les années vécues entre 8 et 18 ans comptent double dans le calcul, dans les limites prévues par la loi.</p>

                <ul>
                    <li>Disposer d'un <strong>permis C</strong>.</li>
                    <li>Avoir résidé de façon continue dans le même canton ou la même commune pendant la durée minimale fixée localement, souvent entre 2 et 5 ans.</li>
                    <li><strong>Intégration et langue:</strong> démontrer une bonne maîtrise de la langue officielle du canton, souvent au niveau B1 à l'oral et A2 à l'écrit.</li>
                    <li>Ne pas avoir dépendu de l'aide sociale récemment, ou avoir remboursé les montants perçus si cela s'applique.</li>
                    <li>Ne pas avoir d'antécédents pénaux ni de dettes ou poursuites qui bloqueraient la procédure.</li>
                </ul>

                <h2>La procédure d'examen</h2>
                <p>La procédure implique trois niveaux: commune, canton et Confédération. Dans beaucoup de communes, vous devez passer un examen écrit et un entretien oral. On y évalue vos connaissances civiques, votre compréhension du système suisse, la géographie et la culture locale, ainsi que votre intégration concrète dans votre environnement.</p>
                
                <div class="callout info">
                    <strong>Information officielle:</strong> chaque canton a sa propre procédure, mais tous s'inscrivent dans le cadre fédéral présenté par le <a href="https://www.sem.admin.ch/sem/es/home/themen/buergerrecht/einbuergerung/ordentliche_einbuergerung.html" target="_blank">SEM</a>.
                </div>
            </div>
        `
    },
        "articulo-consulados": {
        title: "Consulats espagnols en Suisse : où ils sont et quelles démarches ils font",
        description: "Guide complet des trois consulats espagnols en Suisse, Genève, Berne et Zurich: services, rendez-vous, passeports, registre consulaire et démarches d'état civil.",
        keywords: "consulat espagnol Suisse, consulat Genève, consulat Zurich, consulat Berne, registre consulaire, passeport Espagne Suisse, MAEC",
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
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantons :</strong> Zurich, Argovie, Bâle, Lucerne, Saint-Gall, Grisons, Schaffhouse, Thurgovie, Tessin, Zoug et autres</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Adresse :</strong> Riedtlistrasse 17, 8006 Zurich</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Téléphone :</strong><br>+41 44 368 61 00</p>
                        <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portail officiel →</a>
                    </div>
                </div>

                <h2>Quelles démarches pouvez-vous faire au consulat?</h2>

                <h3>Registre de matricule consulaire</h3>
                <p>C'est la <strong>première démarche à faire</strong> lorsque vous vous installez en Suisse. Elle sert à vous inscrire officiellement comme Espagnol résident à l'étranger. Grâce à cette inscription:</p>
                <ul>
                    <li>Vous pouvez renouveler votre DNI et votre passeport depuis la Suisse.</li>
                    <li>Vous pouvez voter aux élections espagnoles depuis l'étranger.</li>
                    <li>L'administration espagnole connaît officiellement votre lieu de résidence.</li>
                </ul>
                <p>L'inscription est gratuite. Il faut généralement présenter un passeport ou DNI en cours de validité, une preuve de résidence en Suisse et parfois le permis de séjour suisse.</p>

                <h3>DNI et passeport</h3>
                <p>Vous pouvez renouveler ou demander votre DNI et votre passeport au consulat de votre circonscription. Il est <strong>indispensable de prendre rendez-vous</strong> via le portail consulaire. Les délais peuvent atteindre plusieurs semaines, surtout à Genève et à Zurich.</p>

                <div class="callout">
                    <strong>Conseil:</strong> demandez le rendez-vous deux à trois mois avant l'expiration de votre document. N'attendez pas la dernière minute.
                </div>

                <h3>État civil: naissances, mariages, décès</h3>
                <p>Si vous avez eu un enfant en Suisse, si vous vous êtes marié ou si un membre de votre famille est décédé, le consulat peut enregistrer l'événement dans l'état civil espagnol.</p>

                <h3>Pensions et sécurité sociale</h3>
                <p>Le consulat peut aussi vous orienter sur les conventions entre l'Espagne et la Suisse en matière de sécurité sociale, de pensions, d'addition des périodes cotisées et d'autres démarches liées à l'administration espagnole.</p>

                <h3>Assistance consulaire</h3>
                <p>En cas d'urgence, perte de documents, accident grave, décès, le consulat peut fournir une assistance consulaire. En dehors des horaires, chaque consulat dispose d'un numéro de garde.</p>

                <h2>Comment demander un rendez-vous</h2>
                <p>La plupart des démarches se font exclusivement sur rendez-vous. Consultez les liens officiels de chaque consulat pour les instructions actualisées:</p>
                <ul>
                    <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consulat de Genève</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consulat de Berne</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consulat de Zurich</a></li>
                </ul>

                <h2>Portail du ministère des Affaires étrangères</h2>
                <p>Toutes les informations actualisées sur les démarches, conditions et actualités pour les Espagnols en Suisse se trouvent sur les portails consulaires:</p>
                <ul>
                    <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consulat de Genève</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consulat de Berne</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consulat de Zurich</a></li>
                </ul>

                <h2>Articles liés</h2>
                <ul>
                    <li><a href="#/inscription-commune-suisse">S'inscrire en Suisse à l'arrivée</a></li>
                    <li><a href="#/tramites-llegada-suiza">Permis de séjour L, B et C</a></li>
                    <li><a href="#/checklist-demarches-du-premier-mois-en-suisse">Checklist des démarches du premier mois</a></li>
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
