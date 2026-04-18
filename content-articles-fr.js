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
        title: "Permisos de residencia en Suisse: L, B, C y diferencias",
        description: "Todo sobre los permisos suizos para residentes extranjeros. Conoce las diferencias entre permiso L, B y C.",
	        keywords: "permisos Suisse, permiso L, permiso B, permiso C, vivir en Suisse, SEM",
	        category: "Trámites Ordinarios",
	        hub: "tramites",
	        slug: "tramites-llegada-suiza",
	        readingTime: 12,
	        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/tramites-llegada-suiza.jpg",
    imageAlt: "Checklist de llegada con documentos, llaves y tarjetas suizas",
        summary: "Existen tres permisos principales (L, B, C). Tu nacionalidad (UE vs Terceros Países) y duración del contrato dictan cuál recibes. Puedes trabajar antes de tener la tarjeta física.",
        content: `
            <div class="article-content">
                <h2>Introducción</h2>
                <p>Si vas a vivir en Suisse, necesitas un <strong>título de residencia</strong> (permiso). Para españoles y otros ciudadanos UE/EFTA, el proceso suele ser relativamente directo si tienes un motivo claro de estancia (por ejemplo, un contrato de trabajo). Para nacionales de terceros países, el sistema es distinto y normalmente exige autorizaciones previas y condiciones más estrictas.</p>

                <div class="callout info">
                    <strong>Lo más importante primero:</strong> en Suisse el permiso físico (la tarjeta) puede tardar semanas. En la práctica, con el <strong>justificante/certificado de registro</strong> de la comuna, normalmente puedes empezar a trabajar y avanzar trámites mientras llega la tarjeta.
                </div>

                <h2>Cómo funciona el sistema</h2>
                <p>El permiso no se "pide por internet" de forma centralizada. En la mayoría de casos, el flujo real es:</p>
                <ol>
                    <li><strong>Dirección en Suisse</strong> (alquiler, subalquiler, alojamiento temporal).</li>
                    <li><strong>Registro en la comuna</strong> (Control de Habitantes / Einwohnerkontrolle).</li>
                    <li>El expediente pasa a la <strong>autoridad cantonal</strong> competente (migración).</li>
                    <li>Recibes un certificado y después la <strong>tarjeta</strong> por correo.</li>
                </ol>
                <p>El detalle de documentos y plazos <strong>varía por cantón y comuna</strong> (cita previa, tasas, requisitos de foto, etc.). La lógica general, sin embargo, es la misma.</p>

                <h2>Requisitos y reglas</h2>
                <h3>Documentos típicos para el registro</h3>
                <p>Para iniciar el proceso, normalmente te pedirán (según cantón y situación):</p>
                <ul>
                    <li>DNI/pasaporte.</li>
                    <li><strong>Motivo de estancia:</strong> contrato de trabajo, admisión a estudios, o documentación de medios propios.</li>
                    <li>Contrato de alquiler o <strong>certificado de alojamiento</strong> si te hospedas en casa de alguien.</li>
                    <li>Foto tipo pasaporte (a veces te la hacen allí).</li>
                    <li>Estado civil y documentos de familia si procede.</li>
                </ul>
                <p>En el registro suele haber una <strong>tasa administrativa</strong> que cambia por cantón y tipo de permiso.</p>

                <h3>Qué permiso te corresponde (visión práctica)</h3>
                <p>Los permisos más comunes para recién llegados son:</p>
                <ul>
                    <li><strong>Permiso L</strong>: estancia corta/temporal (a menudo ligado a un contrato de menos de 12 meses).</li>
                    <li><strong>Permiso B</strong>: residencia (muy habitual con contrato de al menos 12 meses o indefinido para UE/EFTA).</li>
                    <li><strong>Permiso C</strong>: establecimiento (más estable; suele llegar tras varios años de residencia regular).</li>
                    <li><strong>Permiso G</strong>: fronterizo (vives fuera de Suisse y trabajas en Suisse).</li>
                </ul>

                <h3>Cuadro comparativo rápido</h3>
                <p>En Suiza existen varios permisos de residencia para ciudadanos de la Unión Europea.<br>
                Los más comunes son el permiso L, el permiso B y el permiso C.<br>
                Cada uno corresponde a una situación diferente según el tipo de contrato y la duración de la estancia.<br>
                La siguiente tabla resume sus principales características. Si estás planificando tu mudanza, mira también <a href="#/mudarse-a-suiza-desde-espana">la guía paso a paso</a>.</p>
                <table class="info-table">
                    <thead><tr><th>Permiso</th><th>Para quién (típico)</th><th>Duración</th><th>Notas</th></tr></thead>
                    <tbody>
                        <tr><td><strong>L</strong></td><td>Contrato temporal</td><td>Ligada al contrato</td><td>Más restricciones; depende del caso/cantón</td></tr>
                        <tr><td><strong>B</strong></td><td>Residencia con trabajo/estudios</td><td>Habitualmente varios años</td><td>Frecuente impuesto a la fuente al inicio</td></tr>
                        <tr><td><strong>C</strong></td><td>Establecimiento</td><td>Renovable</td><td>Mayor estabilidad administrativa</td></tr>
                        <tr><td><strong>G</strong></td><td>Fronterizos</td><td>Habitualmente varios años</td><td>Reglas fiscales especiales según acuerdos</td></tr>
                    </tbody>
                </table>
                <div class="callout info">
                    <strong>Consejo práctico</strong>
                    <p>Con un permiso L puede ser más difícil alquilar una vivienda a través de una inmobiliaria. Muchas agencias prefieren inquilinos con permiso B o con contrato de trabajo indefinido.</p>
                </div>

                <h3>Enlaces útiles</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                </ul>

                <h3>Plazos, tasas y certificado provisional</h3>
                <p>En la práctica, lo que desbloquea tu vida administrativa es el <strong>registro en la comuna</strong>. Al registrarte, muchas comunas te entregan un <strong>certificado provisional</strong> (o comprobante) que sirve mientras llega la tarjeta. Ese papel suele ser suficiente para:</p>
                <ul>
                    <li>Empezar a trabajar (tu empleador suele conocer el proceso).</li>
                    <li>Abrir cuenta bancaria.</li>
                    <li>Contratar servicios básicos y avanzar en otros trámites.</li>
                </ul>
                <p>Las <strong>tasas</strong> varían por cantón y tipo de permiso. Lo normal es pagar una cantidad moderada en el registro y, a veces, pagar aparte la foto/biometría si no se hace en la oficina.</p>

                <h3>Renovación y cambios (domicilio, empleo, situación familiar)</h3>
                <p>La vida real cambia y el permiso "sigue" esos cambios:</p>
                <ul>
                    <li><strong>Cambio de domicilio:</strong> cuando te mudas, debes darte de baja/alta según la comuna (y dentro del plazo). No es un detalle: en Suisse el domicilio es una pieza central.</li>
                    <li><strong>Cambio de empleador:</strong> con permisos UE/EFTA suele haber movilidad, pero la obligación de notificar o actualizar puede depender del cantón y del tipo de permiso.</li>
                    <li><strong>Cambio de estado civil / hijos:</strong> impacta trámites y, a menudo, fiscalidad. Mantén documentación actualizada.</li>
                </ul>

                <h3>Familia (reagrupación) en dos líneas</h3>
                <p>Si vienes con pareja e hijos, o quieres traerlos después, la administración mirará sobre todo:</p>
                <ul>
                    <li><strong>Ingresos suficientes</strong> (según cantón y tamaño del hogar).</li>
                    <li><strong>Vivienda adecuada</strong> (número de habitaciones/espacio).</li>
                    <li><strong>Documentación</strong> (certificados con apostilla/traducción si aplica).</li>
                </ul>
                <p>Como regla práctica, prepara estos papeles <strong>antes</strong> de venir si puedes: certificados de nacimiento y matrimonio, y traducciones cuando sean necesarias.</p>

                <h2>Ejemplos concretos</h2>
                <h3>Ejemplo 1 — Llegas con contrato indefinido</h3>
                <p>Te registras en la comuna con DNI + contrato + dirección. Pagas la tasa, recibes un certificado provisional y puedes comenzar a trabajar. Con ese certificado normalmente puedes abrir cuenta bancaria y contratar el seguro médico.</p>

                <h3>Ejemplo 2 — Llegas sin contrato (UE/EFTA)</h3>
                <p>En algunos casos puedes registrarte demostrando <strong>medios económicos</strong> y cobertura médica. La dificultad práctica es que, sin contrato, alquiler y banco pueden ser más complicados. Es un escenario que requiere planificación financiera realista.</p>

                <h3>Ejemplo 3 — Pierdes el trabajo con Permiso B</h3>
                <p>Perder el empleo no implica automáticamente "perder el permiso", pero sí exige actuar bien: inscríbete en el RAV si corresponde, busca empleo activamente y mantén tu registro en regla. En este punto conviene leer <a href="#/rav-paro-suiza">RAV y paro en Suisse</a>.</p>

                <h3>Ejemplo 4 — Vienes como estudiante</h3>
                <p>En el registro te pedirán prueba de admisión/matrícula y, según el caso, <strong>medios económicos</strong> para tu estancia. Como estudiante, también te interesará planificar el seguro médico y confirmar si hay reglas específicas (algunas situaciones tienen excepciones o procedimientos cantonales).</p>

                <h3>Ejemplo 5 — Eres fronterizo/a (Permiso G)</h3>
                <p>Si vives en Francia/Alemania/Italia y trabajas en Suisse, el permiso G funciona con reglas propias y con implicaciones fiscales importantes. No lo trates como "un B pero viviendo fuera": consulta tu situación en fuentes oficiales y, si es necesario, asesoramiento fiscal.</p>

                <h2>Errores comunes</h2>
                <ul>
                    <li><strong>Esperar a tener piso definitivo:</strong> si estás en alojamiento temporal, regístrate y actualiza luego la dirección.</li>
                    <li><strong>Asumir que todo es igual en todos los cantones:</strong> plazos, citas y documentos cambian.</li>
                    <li><strong>No preparar documentos familiares:</strong> certificados (nacimiento/matrimonio) pueden tardar en conseguirse; si vienes con familia, prepáralos con margen.</li>
                    <li><strong>No conectar el permiso con otras obligaciones:</strong> LAMal, impuestos y cambios de domicilio vienen detrás.</li>
                </ul>

                <h2>Consejos prácticos</h2>
                <ul>
                    <li>Reserva cita (si aplica) en la comuna en cuanto tengas dirección.</li>
                    <li>Lleva copias impresas y digitales de todo.</li>
                    <li>Si te mudas, haz el cambio de domicilio en plazo.</li>
                    <li>Si vienes con familia, prepara certificados (nacimiento/matrimonio) con margen: apostilla y traducciones pueden llevar tiempo.</li>
                    <li>Para el "primer mes", usa la guía: <a href="#/tramites-llegada-suiza">Checklist de trámites</a>.</li>
                </ul>

                <h2>Fuentes oficiales</h2>
                <ul>
                    <li><a href="https://www.sem.admin.ch/sem/es/home/themen/aufenthalt.html" target="_blank" rel="noopener noreferrer">SEM — Residencia / Aufenthalt</a></li>
                    <li><a href="https://www.ch.ch" target="_blank" rel="noopener noreferrer">ch.ch — Portal oficial suizo</a></li>
                    <li>Autoridades cantonales de migración (web del cantón donde resides).</li>
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
        title: "Jubilación en Suisse: cuánto cobrarás según tu edad de llegada",
        description: "Análisis de la jubilación en Suisse (AVS y LPP) con ejemplos reales para quienes llegan con 30, 40 o 50 años.",
        keywords: "jubilacion suiza, pension suiza, AVS, LPP, cuanto cobro jubilacion suiza",
        category: "Previsión Social",
        hub: "trabajo",
        slug: "jubilacion-pension-suiza",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/jubilacion-pension-suiza.jpg",
        imageAlt: "Pareja de jubilados disfrutando de un café en una terraza con vistas a los Alpes suizos",
        summary: "La jubilación suiza se basa en tres pilares. Los años cotizados marcan la diferencia: cuanto antes llegues, más sólida será tu pensión.",
        content: `
            <div class="article-content">
                <p>Una de las preguntas más frecuentes es qué pensión queda tras una vida laboral en Suisse. El sistema se apoya principalmente en dos pilares (AVS y LPP).</p>
                
                <h2>Los Pilares Fundamentales</h2>
                <ul>
                    <li><strong>1er Pilar (AVS):</strong> Pensión estatal. El mínimo ronda los 1.200 CHF y el máximo los 2.450 CHF mensuales. Depende de los años cotizados sin interrupciones.</li>
                    <li><strong>2do Pilar (LPP):</strong> Caja de pensiones profesional. Capital acumulado durante tu empleo. Al jubilarte puedes elegir entre una renta mensual o retirar el capital.</li>
                </ul>

                <h2>Ejemplos según edad de llegada</h2>
                <p>Las expectativas cambian drásticamente dependiendo de cuándo empieces a cotizar en el país:</p>
                <ul>
                    <li><strong>Llegada a los 30 años:</strong> Escenario ideal. Tras 35 años cotizados, es realista aspirar a una pensión total de entre 4.000 y 5.500 CHF (AVS + LPP).</li>
                    <li><strong>Llegada a los 40 años:</strong> El tiempo empieza a apretar. La AVS será parcial y el LPP más reducido. La pensión podría rondar los 3.000 - 4.000 CHF.</li>
                    <li><strong>Llegada a los 50 años:</strong> Caso delicado. Sin salarios muy altos, la pensión total podría quedarse entre 2.000 y 3.000 CHF, haciendo necesario el ahorro privado adicional.</li>
                </ul>

                <div class="callout tip">
                    <strong>Nota sobre convenios:</strong> Los años trabajados en España no se pierden; cada país pagará su parte proporcional al llegar la edad de jubilación.
                </div>
            </div>
        `
    },

    "articulo-vivir-sin-trabajar": {
        title: "Vivir en Suisse sin trabajar: requisitos para residentes UE",
        description: "Guía sobre cómo residir en Suisse sin actividad lucrativa (ahorros, rentas o jubilación) y qué permisos necesitas.",
        keywords: "vivir en suiza sin trabajar, permiso residencia ahorros, permiso B no lucrativo",
        category: "Trámites Ordinarios",
        hub: "tramites",
        slug: "residir-en-suiza-sin-trabajo",
        readingTime: 4,
        dateUpdated: "Marzo 2026",
        summary: "Es posible vivir en Suisse sin trabajar, pero debes demostrar medios económicos suficientes y disponer de un seguro médico completo (LAMal).",
        featuredImage: "media/guides/residir-en-suiza-sin-trabajo.jpg",
        imageAlt: "Persona relajada disfrutando de la libertad financiera en un balcón con vistas a los Alpes suizos",
        content: `
            <div class="article-content">
                <p>Muchos se preguntan si es posible establecerse en Suisse sin tener un contrato de trabajo. La respuesta es sí, especialmente para ciudadanos de la UE/AELC, pero bajo condiciones estrictas.</p>
                
                <h2>Normas para Ciudadanos UE/AELC</h2>
                <p>Si eres español o de otro país de la UE y planeas quedarte más de 90 días sin trabajar, debes registrarte y solicitar un permiso de residencia demostrando:</p>
                <ul>
                    <li><strong>Medios económicos suficientes:</strong> Debes probar que tienes recursos (ahorros, rentas, pensión externa) para vivir sin recurrir a la ayuda social suiza.</li>
                    <li><strong>Seguro Médico (LAMal):</strong> Es obligatorio contratar un seguro de salud suizo completo. No sirven seguros de viaje temporales.</li>
                    <li><strong>Registro oficial:</strong> Debes inscribirte en el Control de Habitantes de tu comuna de residencia.</li>
                </ul>

                <h2>¿Y para ciudadanos extra-comunitarios?</h2>
                <p>En este caso las normas son mucho más restrictivas. Generalmente solo se autoriza la residencia sin actividad lucrativa en casos muy específicos como jubilación, estudios o motivos médicos justificados, siempre con garantías financieras elevadas.</p>

                <div class="callout warning">
                    <strong>Importante:</strong> Estar empadronado en casa de un amigo no sustituye al permiso de residencia. Los controles pueden derivar en multas o salidas forzadas si no se cumple el trámite.
                </div>
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
        featuredImage: "media/guides/introduccion-suiza-como-funciona.png",
        title: "Cómo funciona Suiza: guía completa para nuevos residentes",
        description: "Guía completa sobre Suiza: organización federal, 26 cantones, sistema político, 4 lenguas, diferencias regionales, educación y vida cotidiana. Esencial antes de instalarse.",
        keywords: "suiza como funciona, cantones suiza, federalismo, democracia directa, lenguas suiza, sistema escolar suizo, diferencias cantones",
        audience: 'newcomer',
        category: 'País',
        hub: 'vivir-en-suiza',
        slug: "introduccion-suiza-como-funciona",
        readingTime: 10,
        dateUpdated: "Marzo 2026",
        summary: "Suiza no es un país convencional. Es una Confederación de 26 cantones autónomos, 4 lenguas oficiales, democracia directa y un federalismo que afecta tu vida diaria desde el primer día.",
        imageAlt: "Personas integrándose en la comunidad suiza frente a edificios públicos",
        content: `
            <div class="article-content">
                <p>Si estás pensando en mudarte en Suisse, o acabas de llegar, entender cómo funciona el país es el primer paso. Suiza no funciona como España, ni como Francia, ni como ningún otro país europeo. Su sistema político, su organización territorial y su cultura administrativa son únicos — y afectan a tu vida diaria desde el momento en que firmas un contrato, eliges un seguro médico o te registras en la commune.</p>

                <div class="callout info">
                    <strong>¿Por qué importa entender la organización del país?</strong> Porque en Suisse, las reglas de los impuestos, los seguros, la escolaridad y los trámites de residencia <strong>dependen del cantón donde vives</strong>, no solo del gobierno federal.
                </div>

                <h2>Suiza en cifras</h2>
                <ul>
                    <li><strong>Capital:</strong> Berna (sede del gobierno federal)</li>
                    <li><strong>Superficie:</strong> 41.285 km²</li>
                    <li><strong>Población:</strong> ~8,9 millones de habitantes</li>
                    <li><strong>Moneda:</strong> Franco suizo (CHF)</li>
                    <li><strong>Fronteras:</strong> Alemania (norte), Austria y Liechtenstein (este), Italia (sur), Francia (oeste)</li>
                    <li><strong>Organización:</strong> Confederación Helvética — 26 cantones autónomos</li>
                    <li><strong>Lenguas nacionales:</strong> Alemán, Francés, Italiano, Romanche</li>
                    <li><strong>Miembro de la ONU y AELC</strong>, pero <strong>no de la Unión Europea</strong></li>
                </ul>

                <h2 id="organizacion">Sección 1 — Cantones y organización territorial</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-politico-cantones.png"
                         alt="Mapa político de Suisse con los 26 cantones y los tres niveles de gobierno"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Cada cantón tiene una historia y competencias propias dentro del Estado federal suizo.
                    </figcaption>
                </figure>

                <p>Suiza es una <strong>Confederación Helvética</strong> formada por <strong>26 cantones</strong>. Esta estructura existe desde el siglo XIII y es la razón por la que el país tiene un funcionamiento tan peculiar. Cada cantón es, en esencia, un mini-estado con su propio gobierno, su propio parlamento y sus propias leyes.</p>

                <p>La estructura administrativa tiene tres niveles:</p>
                <ul>
                    <li><strong>Confederación (nivel federal):</strong> El gobierno federal con sede en Berna. Gestiona la política exterior, la defensa, la moneda, el derecho civil y constitucional, y las grandes líneas de legislación comunes a todo el país.</li>
                    <li><strong>Cantones (26):</strong> Unidades autónomas con amplia competencia en fiscalidad, educación, sanidad, policía y administración local. "Cantón" equivale a una región o comunidad autónoma, pero con mucho más poder que en la mayoría de los países.</li>
                    <li><strong>Comunas (más de 2.000 municipios):</strong> El nivel más cercano al ciudadano. Gestionan el registro de habitantes (Contrôle des habitants), los impuestos locales, los servicios de proximidad y algunas competencias educativas.</li>
                </ul>

                <div class="callout">
                    <strong>Ejemplo práctico:</strong> Cuando llegas en Suisse, no te registras en el Estado. Te registras en <em>tu commune</em> (municipio). Desde allí, te empadronan, gestionan tu permiso de residencia y determinan parte de tus impuestos.
                </div>

                <p>Los 26 cantones son, por orden de entrada en la Confederación: Uri, Schwyz, Obwalden, Nidwalden, Glaris, Zug, Friburgo, Soleura, Basilea-Ciudad, Basilea-Campo, Schaffhausen, Appenzell Rodas Exteriores, Appenzell Rodas Interiores, San Galo, Grisones, Argovia, Turgovia, Ticino, Vaud, Valais, Neuchâtel, Ginebra, Jura, Berna, Lucerna y Zúrich.</p>

                <p><a href="https://www.ch.ch/en/cantons/" target="_blank" rel="noopener noreferrer">→ Ver portales oficiales de los 26 cantones en ch.ch</a></p>

                <h2 id="politica">Sección 2 — Sistema político suizo</h2>

                <p>Suiza posee una de las democracias más participativas del mundo. Los ciudadanos no solo eligen representantes: <strong>votan directamente sobre las leyes</strong>, varias veces al año.</p>

                <h3>Democracia directa</h3>
                <p>Cuatro veces al año, los suizos son convocados para votar en <strong>referéndums</strong>. Estos pueden afectar desde el aumento del impuesto del tabaco hasta grandes reformas constitucionales. No es solo simbólico: los resultados son vinculantes y pueden anular leyes aprobadas por el parlamento.</p>

                <h3>Iniciativas populares</h3>
                <p>Si 100.000 ciudadanos recogen firmas en 18 meses, pueden proponer un cambio en la Constitución federal. El pueblo vota y, si hay mayoría, el cambio se incorpora. Esta herramienta ha modelado decisiones importantes como la adopción de la jornada laboral de 42 horas o la prohibición de minaretes (2009).</p>

                <h3>Referéndum facultativo</h3>
                <p>Si 50.000 ciudadanos recogen firmas en 100 días contra una ley aprobada por el parlamento, esa ley debe someterse a votación popular. Es el principal freno del pueblo sobre el legislativo.</p>

                <h3>El Consejo Federal (gobierno)</h3>
                <p>Suiza no tiene un presidente con poder ejecutivo fuerte. El gobierno es un colegio de <strong>7 consejeros federales</strong>, elegidos por el parlamento para períodos de 4 años. Las decisiones se toman por consenso. La presidencia de la Confederación rota cada año entre los miembros del Consejo (es un cargo principalmente ceremonial).</p>

                <div class="callout info">
                    <strong>Nota para residentes extranjeros:</strong> Como residente no naturalizado, no puedes votar en elecciones federales. Sin embargo, algunos cantones como Neuchâtel, Vaud o Jura permiten participar en votaciones locales y comunales una vez cumplidos los requisitos de residencia.
                </div>


                <h2 id="lenguas">Sección 3 — Las 4 lenguas de Suisse</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/lenguas-suiza.png"
                         alt="Mapa lingüístico de Suisse con las 4 regiones de lenguas oficiales: alemán, francés, italiano y romanche"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Mapa lingüístico de Suisse. El idioma que necesitarás depende del cantón donde te instales.
                    </figcaption>
                </figure>

                <p>Suiza tiene <strong>4 lenguas nacionales</strong>. El idioma que usarás en tu vida diaria, en el trabajo y en la administración depende directamente de dónde vivas.</p>

                <h3>🇩🇪 Alemán — Suiza alemana (Deutschschweiz)</h3>
                <p>Lo hablan en unos <strong>17-18 cantones</strong>, representando el 63% de la población. Pero hay un matiz importante: en la vida cotidiana, los suizos hablan <em>Schweizerdeutsch</em>, un dialecto oral que no es alemán estándar. Lo entienden pero prácticamente no lo escriben. Los textos oficiales, contratos y cartas se redactan en <em>Hochdeutsch</em> (alemán estándar).</p>
                <p>Si te instalas en Zúrich, Berna, Basilea, Lucerna o la mayoría de cantones del centro y este del país, el alemán es imprescindible.</p>

                <h3>🇫🇷 Francés — La Romandie</h3>
                <p>Lo hablan aproximadamente el <strong>23% de la población</strong>, en los cantones de Ginebra, Vaud, Neuchâtel, Jura, y de forma principal en Valais y parte de Friburgo y Berna. Esta región se llama informalmente <em>La Romandie</em>. El francés suizo es casi idéntico al francés estándar (con algunas diferencias léxicas, como <em>huitante</em> en lugar de <em>quatre-vingts</em>).</p>

                <h3>🇮🇹 Italiano — El Ticino</h3>
                <p>Lo habla el <strong>8% de la población</strong>, principalmente en el cantón del Ticino y en algunos valles de los Grisones. Es el único cantón completamente italófono y tiene una personalidad cultural muy distinta al resto del país.</p>

                <h3>🏔️ Romanche</h3>
                <p>Lengua reto-románica hablada por aproximadamente el <strong>0,5%</strong> de la población, en partes del cantón de los Grisones (Graubünden). Tiene estatus de lengua nacional pero su uso administrativo está limitado a las regiones donde se habla.</p>

                <h3>Cantones bilingües y trilingües</h3>
                <ul>
                    <li><strong>Friburgo (FR):</strong> Bilingüe francés/alemán. La administración opera en ambas lenguas.</li>
                    <li><strong>Berna (BE):</strong> Principalmente alemán, con una minoría francófona en el Jura bernés.</li>
                    <li><strong>Valais (VS):</strong> Bilingüe francés/alemán según la zona.</li>
                    <li><strong>Grisones (GR):</strong> Trilingüe alemán/romanche/italiano. Único cantón con 3 lenguas oficiales.</li>
                </ul>

                <div class="callout">
                    <strong>Consejo práctico:</strong> Aprender el idioma del cantón donde vives es la inversión más importante que puedes hacer. En Suisse, el idioma no es solo comunicación: es integración, empleo y acceso a todos los servicios. Muchos empleadores lo exigen incluso para puestos básicos.
                </div>

                <h2 id="cantones">Sección 4 — Las diferencias entre cantones</h2>

                <p>Esta sección es esencial para los recién llegados. En Suisse, <strong>el cantón donde vives lo cambia casi todo</strong>. No es una exageración.</p>

                <h3>Impuestos</h3>
                <p>Es el ejemplo más llamativo. La carga fiscal total (federal + cantonal + comunal) puede variar entre un <strong>15% y un 45%</strong> del salario bruto, dependiendo del cantón. Algunos extremos:</p>
                <ul>
                    <li><strong>Zug, Schwyz, Nidwalden:</strong> Los cantones más baratos fiscalmente del país. Atraen a muchos empresarios y personas de alta renta.</li>
                    <li><strong>Ginebra, Vaud, Berna:</strong> Cantones con mayor presión fiscal.</li>
                </ul>
                <p>La diferencia entre vivir en Ginebra o en Zug, ganando el mismo salario, puede suponer miles de francos al año en impuestos.</p>
                <p>→ <a href="#/impuesto-fuente-suiza">Leer: Cómo funciona el impuesto a la fuente (Quellensteuer)</a></p>

                <h3>Seguro médico (primas LAMal)</h3>
                <p>El seguro de salud es obligatorio en toda Suisse, pero las <strong>primas varían por cantón y por región</strong>, incluso con la misma aseguradora. Las primas más altas se encuentran en Basilea-Ciudad y Ginebra. Las más bajas, en Appenzell Rodas Interiores y Glaris.</p>
                <p>→ <a href="#/seguro-medico-lamal-suiza">Leer: El seguro médico LAMal explicado</a></p>

                <h3>Educación y escolaridad</h3>
                <p>El sistema escolar está en manos de los cantones. Esto significa que el calendario escolar, la edad de inicio de la escolarización obligatoria, los libros de texto, los horarios y las lenguas que se enseñan varían significativamente. Los cantones coordinan a través del Concordato HarmoS, pero las diferencias persisten.</p>
                <p>→ <a href="#/sistema-escolar-suiza">Leer: El sistema educativo suizo</a></p>

                <h3>Trámites de residencia y administración</h3>
                <p>El registro al llegar, los plazos, los formularios y los horarios de atención varían de una commune a otra. No hay un proceso uniforme para todos los extranjeros: depende de dónde te instales.</p>
                <p>→ <a href="#/registrarse-en-suiza">Leer: Cómo registrarse en Suisse al llegar</a></p>

                <div class="callout">
                    <strong>Conclusión práctica:</strong> Antes de decidir en qué cantón te instalas, investiga la carga fiscal, las primas del seguro médico y las ofertas de empleo en la zona. Son decisiones que tendrán un impacto importante en tu economía durante años.
                </div>

                <h2 id="educacion">Sección 5 — El sistema educativo suizo</h2>

                <p>El sistema educativo suizo es público, gratuito y de alta calidad. Lo que lo distingue es su <strong>orientación profesional temprana</strong> y el papel central del aprendizaje dual en la formación de toda la población activa.</p>

                <h3>Estructura general (HarmoS)</h3>
                <ul>
                    <li><strong>Escuela infantil (2 años):</strong> Obligatoria a partir de los 4 años en la mayoría de cantones.</li>
                    <li><strong>Escuela primaria (6 años):</strong> De los 6 a los 12 años. Se introducen el segundo idioma nacional y el inglés.</li>
                    <li><strong>Secundaria I (3 años):</strong> De los 12 a los 15 años. Al final de esta etapa se produce la <strong>orientación</strong>.</li>
                </ul>

                <h3>La orientación profesional (Secondaire II)</h3>
                <p>A los 15-16 años, los alumnos se orientan hacia una de dos vías:</p>
                <ol>
                    <li><strong>Formación profesional dual (CFC / EFZ):</strong> La opción mayoritaria. Más del 60% de los jóvenes suizos hacen un aprendizaje en una empresa (3-4 días/semana en la empresa + 1-2 días en clase). Al terminar, obtienen el Certificado Federal de Capacidad (CFC). Es una vía muy respetada y bien remunerada desde el inicio.</li>
                    <li><strong>Vía académica (Maturité / Matura / Gymnasio):</strong> Para alumnos con altas calificaciones académicas. Prepara para la universidad o para las Escuelas Politécnicas Federales (ETH Zürich / EPFL Lausanne), dos de las mejores universidades del mundo.</li>
                </ol>

                <h3>Universidades</h3>
                <p>Suiza cuenta con universidades públicas de primer nivel en Zúrich (UZH), Berna, Basilea, Ginebra, Lausana y Neuchâtel. Las dos escuelas politécnicas federales ETH Zürich y EPFL Lausana están entre las mejores del mundo en ciencias e ingeniería.</p>

                <div class="callout info">
                    <strong>Para familias recién llegadas:</strong> Si tienes hijos en edad escolar, regístralos en la escuela pública de tu commune desde el primer mes. El proceso es gratuito y la integración lingüística se gestiona con apoyo escolar.
                </div>

                <h2 id="regiones">Sección 6 — Diferencias culturales y regionales</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-regiones-suiza.png"
                         alt="Mapa de regiones culturales y lingüísticas de Suisse con marcados Deutschschweiz, Romandie y Ticino"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Las tres grandes regiones culturales de Suisse tienen identidades muy distintas.
                    </figcaption>
                </figure>

                <p>Más allá de las fronteras administrativas, Suiza tiene tres grandes regiones culturales con identidades muy marcadas. Conocerlas te ayudará a entender las diferencias de mentalidad, ritmo de vida y expectativas sociales.</p>

                <h3>🔵 Suiza alemana (Deutschschweiz)</h3>
                <p>Es la región más grande y la de mayor peso económico. Aquí se concentran las sedes de los grandes bancos, aseguradoras y multinacionales (Zúrich, Basilea, Zug). La cultura es más formal, puntual y directa. La puntualidad es casi una norma cultural. El ritmo de vida puede parecer más frío al principio, pero la integración es posible si hay esfuerzo lingüístico.</p>

                <h3>🟢 La Romandie (Suiza francófona)</h3>
                <p>Comprende los cantones de Ginebra, Vaud, Neuchâtel, Jura y partes de Valais, Friburgo y Berna. El ambiente es más mediterráneo en comparación con la Suiza alemana: más abierto, con una vida social más visible en los espacios públicos. Ginebra y Lausana son ciudades internacionales con una enorme presencia de organismos internacionales (ONU, OMS, Cruz Roja). Para hispanohablantes, el francés resulta más accesible que el alemán.</p>

                <h3>🟡 Ticino (Suiza italiana)</h3>
                <p>El cantón más al sur, con clima mediterráneo y paisajes de lago. La vida es más lenta y abierta. El Ticino tiene una economía importante ligada al turismo, los servicios financieros y la proximidad con Italia. Muchos trabajadores que viven en Italia cruzan a diario para trabajar aquí (frontaliers). El coste de vida es algo inferior al de Ginebra o Zúrich, pero los salarios también pueden ser más bajos en sectores no especializados.</p>

                <h2>Resumen: lo que tienes que saber antes de llegar</h2>
                <ul>
                    <li>Suiza <strong>no pertenece a la UE</strong>, tiene sus propias normas y acuerdos bilaterales.</li>
                    <li>Cada cantón funciona de forma diferente: investiga el tuyo antes de instalarte.</li>
                    <li>El idioma de tu cantón es clave para integrarte: alemán, francés o italiano según la zona.</li>
                    <li>El registro en la commune es el primer trámite que debes hacer al llegar.</li>
                    <li>El seguro médico es obligatorio desde el primer día de residencia.</li>
                    <li>La democracia directa hace que el ciudadano tenga más peso y responsabilidad que en otros países.</li>
                </ul>

                <h2>Artículos esenciales para nuevos residentes</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 1rem;">
                    <a href="#/registrarse-en-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">📋 Registrarse en Suisse</a>
                    <a href="#/tramites-llegada-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🪪 Permisos de residencia</a>
                    <a href="#/buscar-empleo-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💼 Buscar empleo</a>
                    <a href="#/seguro-medico-lamal-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏥 Seguro médico LAMal</a>
                    <a href="#/alquilar-vivienda-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏠 Alquilar vivienda</a>
                    <a href="#/impuesto-fuente-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💰 Impuestos en Suisse</a>
                    <a href="#/sistema-escolar-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🎓 Sistema educativo</a>
                    <a href="#/presupuesto-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💶 Costo de vida</a>
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
        title: "Checklist completo: trámites al llegar en Suisse el primer mes",
        description: "Todo lo que debes hacer el primer mes en Suisse ordenado por urgencia: registro, seguro médico, cuenta bancaria, transporte, basura y más.",
	        keywords: "tramites llegada suiza, checklist llegada suiza, primeros pasos suiza, recien llegado suiza, que hacer al llegar suiza",
	        category: "Trámites Iniciales",
	        hub: "tramites",
	        slug: "checklist-tramites-llegada-suiza",
	        readingTime: 7,
	        dateUpdated: "Marzo 2026",
	        featuredImage: "media/guides/checklist-llegada-suiza.jpg",
        imageAlt: "Documentos suizos: permiso de residencia, tarjeta de seguro médico, llaves y checklist",
        summary: "Dos situaciones, dos circuitos distintos: si vienes a buscar trabajo no tienes ninguna obligación administrativa; si te instalas con contrato, el registro en la comuna es el primer paso obligatorio.",
        content: `
            <div class="article-content">

                <div class="callout warning">
                    <strong>Importante:</strong> si vienes en Suisse como turista o para buscar trabajo, no tienes que registrarte en el ayuntamiento ni solicitar ningún permiso de residencia. Esta obligación solo existe cuando te instalas en el país, normalmente tras firmar un contrato de trabajo o establecer tu residencia de forma efectiva.
                </div>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Si vienes como turista o a buscar trabajo</h2>
                <p>Como ciudadano de la UE/EFTA, tienes derecho a entrar en Suisse y permanecer sin ningún trámite administrativo durante un periodo de búsqueda de empleo. No hay obligación de registrarse, no hay permiso que solicitar, no hay plazo que respetar en esa fase.</p>
                <p>Lo que sí conviene tener en orden antes de viajar o durante la estancia:</p>

                <h3>Documentación personal</h3>
                <p>Lleva el DNI o pasaporte en vigor. No necesitas ningún otro documento para entrar ni para moverte por el país.</p>

                <h3>Alojamiento y movilidad</h3>
                <p>Define dónde te vas a alojar desde el primer día, aunque sea de forma provisional. Para desplazarte, el transporte público suizo es eficiente y puntual. Si planeas usarlo intensivamente, el <strong>Demi-tarif / Halbtax</strong> (unos 190 CHF anuales) divide a la mitad el precio de todos los billetes en el país. Se amortiza en pocas semanas y se compra en <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">sbb.ch</a> o en cualquier taquilla CFF/SBB.</p>

                <h3>CV y búsqueda de empleo</h3>
                <p>El mercado laboral suizo tiene sus propias convenciones. El CV estándar incluye foto, fecha de nacimiento y estado civil. Las principales plataformas son <a href="https://www.jobs.ch" target="_blank" rel="noopener noreferrer">jobs.ch</a>, <a href="https://www.jobup.ch" target="_blank" rel="noopener noreferrer">jobup.ch</a> y LinkedIn. Busca en el idioma del cantón donde quieres trabajar: aumenta significativamente las respuestas.</p>

                <h3>Seguro médico durante la búsqueda</h3>
                <p>Mientras no resides oficialmente en Suisse, la LAMal (seguro médico obligatorio suizo) no te es aplicable. Si tienes tarjeta sanitaria europea o un seguro de viaje, eso es suficiente para una estancia de búsqueda. La obligación de contratar LAMal empieza solo cuando te registras como residente.</p>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Si vienes a instalarte (con contrato o residencia)</h2>
                <p>En cuanto firmas un contrato de trabajo o estableces tu residencia efectiva en Suisse, el circuito administrativo se activa. Los plazos son reales y su incumplimiento puede acarrear multas.</p>

                <div class="callout info">
                    <strong>Regla general:</strong> el registro en la comuna debe hacerse en un plazo de <strong>14 días</strong> desde la llegada, y en muchos cantones <strong>antes del primer día de trabajo</strong>. El plazo exacto varía por cantón: consulta siempre la web de tu municipio.
                </div>

                <h3>1. Regístrate en la comuna (Control de Habitantes)</h3>
                <p>Es el primer trámite y desbloquea todos los demás. Al registrarte, recibes en el acto un certificado provisional de residencia ("Attestation de résidence" / "Meldebestätigung") que tiene plena validez legal: con él puedes empezar a trabajar, abrir cuenta bancaria y contratar el seguro médico, aunque la tarjeta física del permiso tarde semanas en llegar.</p>
                <p><strong>Qué llevar:</strong> DNI o pasaporte, contrato de trabajo o de alquiler, dirección donde resides (aunque sea provisional).</p>
                <p><strong>Coste:</strong> entre 65 y 100 CHF según el cantón y el tipo de permiso solicitado.</p>

                <h3>2. Abre una cuenta bancaria</h3>
                <p>Tu empleador necesita un IBAN suizo para pagarte el salario. Con el certificado de registro ya puedes ir al banco. Si necesitas una cuenta operativa desde el primer día, las opciones digitales como Neon, Yuh o Revolut (cuenta suiza) se activan en menos de 24 horas sin desplazamiento. Las tradicionales — PostFinance, UBS, Raiffeisen, Migros Bank — requieren cita previa pero ofrecen más servicios.</p>

                <h3>3. Contrata el seguro médico LAMal</h3>
                <p>Tienes un plazo de <strong>3 meses</strong> desde la fecha de registro para contratar el seguro obligatorio (LAMal), con efecto retroactivo al día 1. No esperes al último momento: si sufres cualquier incidente antes de tenerlo, pagarás igualmente las primas desde el inicio. La cobertura básica es idéntica en todas las aseguradoras; solo varía el precio. Compara en <a href="https://www.priminfo.admin.ch" target="_blank" rel="noopener noreferrer">Priminfo.admin.ch</a> (comparador oficial federal). La decisión más importante es la franquicia: 300 CHF mínimo (prima alta) o hasta 2.500 CHF (prima baja). Si estás sano, la franquicia alta suele resultar más rentable.</p>

                <h3>4. Comunica tu situación familiar al empleador</h3>
                <p>Si tienes pareja o hijos a cargo, el empleador necesita esos datos para aplicar la tarifa correcta del impuesto a la fuente. Un error en este punto es difícil de corregir retroactivamente.</p>

                <h3>5. Pon tu nombre en el buzón de correo</h3>
                <p>En Suisse, la administración funciona principalmente por correo postal. Recibirás la tarjeta del permiso, las facturas del seguro y las cartas fiscales en papel. Si el buzón no tiene tu nombre desde el primer día, esas comunicaciones pueden perderse o devolverse.</p>

                <h3>6. Aprende el sistema de basura de tu municipio</h3>
                <p>En muchos cantones solo se permiten bolsas de basura oficiales de pago, que incluyen la tasa de recogida. Usar bolsas ordinarias puede acarrear multas. Pregunta en tu edificio o en la commune desde el primer día.</p>

                <h3>7. Obtén el Demi-tarif para el transporte</h3>
                <p>Si usas trenes o transporte público con regularidad, el <strong>Demi-tarif / Halbtax</strong> (unos 190 CHF anuales) divide el precio de todos los billetes a la mitad en todo el país. Se amortiza en pocas semanas. Se compra en <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">sbb.ch</a> o en cualquier taquilla CFF/SBB.</p>

                <h3>En los primeros 3 meses</h3>
                <p>Una vez resuelto lo urgente, conviene informarse sobre los seguros complementarios (el LAMal básico no cubre dentista, gafas ni hospitalización privada) y sobre el tercer pilar (3a), que es un ahorro para la jubilación con importantes ventajas fiscales. Cuanto antes se empiece, más se acumula.</p>

                <div class="callout tip">
                    <strong>Orden recomendado:</strong> registro en la comuna → cuenta bancaria → LAMal → comunicación al empleador → buzón y basura → Demi-tarif. Cada paso desbloquea el siguiente.
                </div>

                <h2>Errores frecuentes al instalarse</h2>
                <p>Dejar el registro para "cuando esté todo listo" y pasarse del plazo es el error más habitual y tiene consecuencias directas. No entender la retroactividad de LAMal genera facturas inesperadas. Olvidar poner el nombre en el buzón puede hacer que la tarjeta del permiso o cartas fiscales no lleguen. No preguntar el sistema de bolsas de basura desde el primer día expone a multas evitables.</p>

                <h2>Fuentes oficiales</h2>
                <ul>
                    <li><a href="https://www.ch.ch/es/entrar-y-vivir-en-suiza/" target="_blank" rel="noopener noreferrer">ch.ch — Entrar y vivir en Suisse</a></li>
                    <li><a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo — comparador oficial LAMal</a></li>
                    <li><a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">SBB/CFF/FFS — transporte público</a></li>
                </ul>
            </div>
        `
    },
        "articulo-trabajar-sin-permiso-fisico": {
        title: "¿Puedo trabajar en Suisse antes de tener el permiso físico?",
        description: "Sí, puedes trabajar legalmente en Suisse aunque el permiso físico tarde semanas en llegar. Explicamos cómo funciona el certificado provisional.",
        keywords: "trabajar sin permiso suiza, permiso provisional suiza, attestation residence suiza, esperar permiso suiza",
        category: "Trámites Ordinarios",
        hub: "tramites",
        slug: "trabajar-antes-permiso-fisico-suiza",
        readingTime: 3,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/trabajar-antes-permiso-fisico-suiza.jpg",
        imageAlt: "Persona trabajando en Suisse en un entorno profesional",
        summary: "Puedes empezar a trabajar desde el primer día tras registrarte en la comuna. El permiso físico puede tardar semanas, pero el comprobante de registro ya tiene validez legal.",
        content: `
            <div class="article-content">
                <p>Esta es una de las dudas más frecuentes de los recién llegados y la respuesta genera mucha confusión: <strong>sí, puedes trabajar legalmente en Suisse aunque la tarjeta física del permiso no haya llegado todavía</strong>.</p>

                <h2>Cómo funciona el proceso</h2>
                <p>Cuando te registras en la oficina del Control de Habitantes, recibes en el acto un <strong>certificado provisional de residencia</strong> ("Attestation de résidence" en francés, "Meldebestätigung" en alemán). Este documento acredita legalmente que estás registrado y autorizado a residir y trabajar en Suisse.</p>
                <p>El permiso físico (tarjeta plastificada con tu foto) lo emite el servicio cantonal de migración y puede tardar entre 4 y 12 semanas en llegar por correo. Ese retraso es completamente normal y ningún empleador serio lo desconoce.</p>

                <h2>¿Qué documento usa el empleado mientras espera?</h2>
                <p>Durante el periodo de espera, el trabajador utiliza el certificado provisional como justificante. Para la empresa, esto es suficiente para procesar la nómina y cumplir con sus obligaciones administrativas.</p>

                <div class="callout info">
                    <strong>Caso típico:</strong> Muchos trabajadores empiezan un lunes y van a la commune el viernes anterior. Con el certificado provisional en mano, se incorporan sin problema. El permiso físico llega semanas después por carta.
                </div>

                <h2>¿Y si el empleador me pide el permiso físico?</h2>
                <p>Si un empleador te pone problemas, puedes explicarle que el proceso es estándar y que el certificado provisional tiene plena validez legal. En grandes empresas con RRHH esto es rutinario. Si hay dudas, tanto empleador como empleado pueden llamar al servicio cantonal de migración para confirmar el estado de la solicitud.</p>

                <h2>¿Cuándo llega el permiso físico?</h2>
                <ul>
                    <li>Cantones con menos demanda: 3–5 semanas.</li>
                    <li>Ginebra, Zúrich (alta demanda): 8–12 semanas o más.</li>
                </ul>
                <p>Recibirás la tarjeta en el buzón de tu domicilio registrado. Por eso es importante que el buzón tenga tu nombre desde el primer día.</p>

                <div class="callout warning">
                    <strong>Importante:</strong> El permiso físico tiene fecha de caducidad. Cuando se acerque al vencimiento, recibirás una notificación para la renovación. No esperes a que venza para iniciar el trámite.
                </div>
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
        title: "El impuesto a la fuente (Quellensteuer) explicado",
        description: "Qué es el impuesto a la fuente, a quiénes afecta y cómo se calcula en Suisse para extranjeros.",
        keywords: "impuesto fuente suiza, quellensteuer, impot a la source",
        audience: 'worker',
        category: 'Retenciones',
        hub: 'impuestos',
        slug: "impuesto-fuente-suiza",
        readingTime: 3,
        dateUpdated: 'Actualizado recientemente',
        featuredImage: "media/guides/impuesto-fuente-suiza.jpg",
        imageAlt: "Persona revisando el cálculo de su impuesto a la fuente en una oficina suiza",
        summary: 'Si tienes Permiso B o L, la empresa descuenta tu impuesto a la fuente directamente. La tarifa depende del cantón, estado civil e hijos.',
        content: `
            <div class="article-content">
                <p>La mayoría de los ciudadanos suizos y residentes permanentes (Permiso C) rellenan una vez al año su declaración de la renta y pagan los impuestos a posteriori. Sin embargo, para los extranjeros recién llegados existe el <strong>Impuesto a la Fuente</strong>.</p>

                <h2>¿Quiénes están sometidos?</h2>
                <p>Principalmente afecta a los trabajadores extranjeros que poseen un permiso de residencia <strong>L o B</strong> y a los trabajadores fronterizos (Permiso G) de algunos países.</p>

                <h2>¿Cómo funciona?</h2>
                <p>Tu empleador suizo deduce este impuesto directamente de tu salario bruto cada mes, de la misma forma que en España funciona la retención del IRPF en la nómina. Luego, el empleador transfiere ese dinero a la administración fiscal del cantón. Las tarifas aplicadas dependen de tu Estado Civil, el número de hijos a cargo, si tu cónyuge trabaja, y las tablas del cantón correspondiente (tarifas A, B, C...).</p>

                <h2>Declaración de impuestos rectificativa</h2>
                <p>Dependiendo de tu cantón, hasta marzo del año siguiente podrías tener derecho a solicitar una <em>corrección del impuesto a la fuente</em> si has incurrido en gastos que son deducibles (como planes de pensiones 3er pilar, gastos de cuidado de hijos, donaciones, reciclaje educacional).<br/>
                <strong>Límite importante:</strong> Aquellas personas con permiso B que superen un umbral de sueldo bruto anual de 120.000 CHF están obligadas por defecto a realizar la declaración de la renta ordinaria, aunque se les siga reteniendo mes a mes a cuenta de lo definitivo.</p>
            </div>
        `
    },
        "articulo-rav-paro": {
        title: "RAV y paro en Suisse: cómo funciona el desempleo, requisitos y pasos",
        description: "Guía práctica del seguro de desempleo suizo (ALV/AC): requisitos, plazos, inscripción en el RAV, obligaciones y sanciones.",
        keywords: "RAV suiza, paro suiza, desempleo suiza, ALV AC, seguro desempleo suiza",
        audience: "worker",
        category: "Trabajo",
        hub: "trabajo",
        slug: "rav-paro-suiza",
        readingTime: 12,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        imageAlt: "Oficina del RAV en Suisse con asesores ayudando a candidatos en su búsqueda de empleo",
        summary: "Si pierdes tu empleo en Suisse, el RAV (y la caja de paro) puede cubrir parte de tu salario, pero exige plazos y una búsqueda de empleo demostrable.",
        content: `
            <div class="article-content">
                <h2>Introducción</h2>
                <p>En Suisse, el "paro" (seguro de desempleo ALV/AC) es un sistema muy útil, pero <strong>exigente</strong>. No se trata solo de "apuntarte": se basa en documentación, plazos y una búsqueda de empleo demostrable. Además, hay dos actores distintos y conviene entenderlos desde el primer día:</p>
                <ul>
                    <li><strong>RAV / ORP:</strong> la oficina regional de colocación (seguimiento, estrategia, citas y control).</li>
                    <li><strong>Caja de desempleo (Kasse / caisse):</strong> evalúa tu derecho y <strong>paga</strong> la prestación.</li>
                </ul>
                <p>Los detalles (por ejemplo, cómo pedir cita, formularios específicos o ritmo de seguimiento) pueden variar según <strong>cantón</strong> y oficina. La lógica general es común en toda Suisse.</p>

                <div class="callout warning">
                    <strong>Mensaje claro:</strong> si tu contrato termina en 2–4 semanas, empieza hoy mismo a guardar pruebas de búsqueda. Muchos expedientes se complican por no poder demostrar "qué hiciste" antes del último día.
                </div>

                <h2>Cómo funciona el sistema</h2>
                <h3>1) Qué se paga (explicación práctica)</h3>
                <p>La prestación se calcula en función de tu salario asegurado y se paga normalmente en forma de <strong>indemnizaciones diarias</strong>. Como orden de magnitud, se suele hablar de una tasa del <strong>70%</strong> del salario asegurado, o <strong>80%</strong> en ciertos casos (por ejemplo, con hijos a cargo). Hay límites máximos y reglas específicas sobre bonus, pagas extras, jornada parcial, etc.</p>
                <p>La caja de paro es quien hace el cálculo exacto con tus documentos. No tomes porcentajes como "promesa": úsalos para planificar tu presupuesto.</p>

                <h3>2) RAV (control y reinserción) vs caja (pago)</h3>
                <p>El RAV controla que cumplas obligaciones: candidaturas, disponibilidad, entrevistas y medidas (cursos, programas, prácticas). La caja verifica el derecho y realiza el pago. Puedes estar inscrito en el RAV y, al mismo tiempo, tener el pago bloqueado si faltan documentos o si hay sanciones.</p>

                <h3>3) El ciclo mensual (lo que realmente te piden)</h3>
                <p>En muchos casos, el "ritmo" del sistema se siente así:</p>
                <ul>
                    <li>Entregas una <strong>lista de candidaturas</strong> con pruebas (y, a veces, formularios de control) en el plazo indicado.</li>
                    <li>Tienes <strong>citas</strong> con tu consejero RAV y debes presentarte preparado (CV actualizado, ofertas trabajadas, estrategia).</li>
                    <li>Si trabajas unos días o a tiempo parcial, informas y se ajusta la prestación según ingresos.</li>
                </ul>
                <p>Además, puede haber <strong>días de espera</strong> o particularidades de inicio según tu situación. No lo dejes a la intuición: pregunta a tu caja qué fechas y documentos determinan el primer pago.</p>

                <h3>4) Ingresos intermedios (Zwischenverdienst)</h3>
                <p>Un punto clave: aceptar trabajos temporales o parciales durante el paro puede ser positivo. En algunos casos, el sistema compensa parte de la diferencia entre tu salario anterior y el nuevo ingreso. Pregunta siempre a la caja cómo declarar estos ingresos y qué impacto tiene en tu derecho.</p>

                <h2>Requisitos y reglas</h2>
                <h3>1) Requisitos típicos (visión general)</h3>
                <p>El derecho exacto depende del caso, pero normalmente gira en torno a:</p>
                <ul>
                    <li>Haber <strong>cotizado</strong> el tiempo mínimo requerido dentro del periodo de referencia.</li>
                    <li>Estar <strong>desempleado</strong> o con reducción reconocida, y estar <strong>apto</strong> para trabajar.</li>
                    <li>Ser <strong>colocable</strong>: estar disponible y dispuesto a aceptar trabajo razonable.</li>
                    <li>Realizar una <strong>búsqueda activa</strong> y demostrable.</li>
                </ul>

                <h3>2) Documentos que suelen pedirte</h3>
                <p>Prepara un "dossier de paro" con:</p>
                <ul>
                    <li>Documento de identidad y permiso de residencia.</li>
                    <li>Contrato de trabajo y <strong>carta de despido</strong> o confirmación de fin de contrato.</li>
                    <li>Nóminas recientes, certificados salariales si aplica, datos bancarios (IBAN).</li>
                    <li>Formulario(s) de la caja y justificantes de tu búsqueda.</li>
                    <li>Documentos de situaciones especiales (por ejemplo, enfermedad, maternidad, reducción de jornada, etc.).</li>
                </ul>
                <p>Si estás enfermo durante el proceso, suele ser imprescindible aportar un <strong>certificado médico</strong> y comunicarlo inmediatamente: afecta a tu disponibilidad y a tus obligaciones.</p>

                <h3>3) Búsqueda de empleo: cantidad y calidad</h3>
                <p>En Suiza se espera una búsqueda <strong>regular</strong> y organizada. El número mínimo de candidaturas puede variar por situación y cantón. Lo que suele importar no es solo la cantidad, sino:</p>
                <ul>
                    <li>Que las candidaturas sean <strong>razonables</strong> (puestos compatibles con tu perfil y mercado).</li>
                    <li>Que guardes <strong>pruebas</strong> (emails, PDFs, capturas de portales).</li>
                    <li>Que respondas a ofertas "asignadas" por el RAV y no dejes mensajes sin contestar.</li>
                </ul>

                <h3>4) Dimisión, "despido pactado" y sanciones</h3>
                <p>Si renuncias voluntariamente o hay un fin de contrato "pactado" sin causa objetiva, puede haber <strong>días de sanción</strong> (periodos sin cobro). No significa que "nunca cobras", pero sí que el sistema penaliza decisiones evitables. Si hay un motivo serio (salud, acoso, cambios sustanciales), documenta y consulta antes de actuar.</p>

                <h2>Ejemplos concretos</h2>
                <h3>Ejemplo 1 — Despido con preaviso</h3>
                <p>Te avisan hoy de que en un mes terminas. Empiezas ya con candidaturas, guardas pruebas, pides tu certificado de trabajo (Arbeitszeugnis) y preparas el dossier. Cuando te inscribes, puedes demostrar búsqueda previa y evitas discusiones sobre "inactividad".</p>

                <h3>Ejemplo 2 — Fin de contrato temporal</h3>
                <p>Aunque sea "fin de contrato" y no "despido", el sistema espera la misma lógica: búsqueda documentada, inscripción a tiempo, disponibilidad y respeto de plazos.</p>

                <h3>Ejemplo 3 — Encuentras un trabajo parcial de 2 meses</h3>
                <p>Aceptas un trabajo temporal mientras sigues buscando algo estable. Informas al RAV/caja, declaras ingresos y mantienes obligaciones. En muchos casos, es mejor para tu expediente que rechazar oportunidades por "no ser perfectas".</p>

                <h2>Errores comunes</h2>
                <ul>
                    <li><strong>Inscribirte tarde:</strong> esperar "a ver si sale algo" y perder días o complicar el expediente.</li>
                    <li><strong>No tener pruebas:</strong> decir "mandé CVs" sin capturas ni emails suele acabar en sanciones.</li>
                    <li><strong>No acudir a citas:</strong> faltar a una cita sin justificante puede costar días de sanción.</li>
                    <li><strong>Viajar sin permiso:</strong> salir del país sin coordinarlo puede considerarse falta de disponibilidad.</li>
                    <li><strong>No contestar</strong> a propuestas del RAV o rechazar trabajo "razonable" sin razón sólida.</li>
                </ul>

                <h2>Consejos prácticos</h2>
                <ul>
                    <li>Organiza tu búsqueda como un trabajo: calendario, horas fijas y seguimiento en hoja de cálculo.</li>
                    <li>Prepara el dossier "suizo": CV, carta, diplomas y certificados. Apóyate en <a href="#/buscar-empleo-suiza">Buscar empleo en Suisse</a>.</li>
                    <li>Reserva dinero: la primera liquidación puede tardar y puede haber ajustes. Evita quedarte sin colchón.</li>
                    <li>Haz "pruebas a prueba de RAV": guarda PDFs, emails y capturas con fecha. Una candidatura sin prueba suele contar como "no hecha".</li>
                    <li>Conecta tu situación de paro con permisos y trámites: <a href="#/tramites-llegada-suiza">permisos</a>, <a href="#/impuesto-fuente-suiza">impuesto a la fuente</a> si aplica.</li>
                </ul>

                <h2>Fuentes oficiales</h2>
                <ul>
                    <li><a href="https://www.ch.ch/es/trabajo/desempleo/" target="_blank" rel="noopener noreferrer">ch.ch — Desempleo</a></li>
                    <li><a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer">SECO — Secretaría de Estado de Economía</a></li>
                </ul>

                <h2>Artículos relacionados</h2>
                <ul>
                    <li><a href="#/buscar-empleo-suiza">Buscar empleo en Suisse</a></li>
                    <li><a href="#/contratos-de-trabajo-suiza">Contratos de trabajo en Suisse</a></li>
                    <li><a href="#/seguros-sociales-suiza">Seguros sociales en Suisse</a></li>
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
        title: "Contratos de trabajo en Suisse: derechos y obligaciones",
        description: "Todo sobre el contrato de trabajo suizo (CDI, CDD), las vacaciones legales y el pago de sueldo completo en caso de enfermedad.",
        keywords: "contrato trabajo suiza, derechos trabajador suiza, vacaciones suiza, code des obligations",
        category: 'Contratos',
        hub: 'trabajo',
        slug: "contratos-de-trabajo-suiza",
        readingTime: 4,
        featuredImage: "media/guides/contratos-de-trabajo-suiza.jpg",
        imageAlt: "Dos personas estrechándose la mano al firmar un contrato de trabajo, representando el acuerdo laboral",
        summary: 'El mercado laboral suizo es muy liberal. El despido es libre (respetando los plazos de preaviso) y las vacaciones mínimas son 4 semanas.',
        content: `
            <div class="article-content">
                <p>El mercado laboral suizo es muy flexible y las condiciones están reguladas fundamentalmente por el Código de Obligaciones (CO) y los convenios colectivos de trabajo (CCT).</p>

                <h2>Tipos de contrato</h2>
                <ul>
                    <li><strong>Contrato indefinido (CDI):</strong> es el más común. No tiene fecha de finalización y permite al empleador o al empleado terminarlo, siempre respetando el plazo de preaviso acordado o legal.</li>
                    <li><strong>Contrato de duración determinada (CDD):</strong> se firma por un tiempo específico (por ejemplo, temporada de invierno, sustitución por maternidad).</li>
                    <li><strong>Trabajo temporal:</strong> a través de agencias (Adecco, Manpower...), sujeto a reglas específicas de cotización y preaviso muy flexible.</li>
                </ul>

                <h2>Jornada y vacaciones</h2>
                <p>Por ley, todo trabajador en Suisse tiene derecho a un <strong>mínimo de 4 semanas</strong> de vacaciones pagadas al año (5 semanas si es menor de 20 años). La jornada laboral a "tiempo completo" suele variar entre 40 y 45 horas semanales.</p>

                <h2>Enfermedad y accidentes</h2>
                <p>Casi todos los grandes empleadores cuentan con un seguro de pérdida de ganancia por enfermedad que garantiza que recibas tu salario mientras te recuperas. Además, el empleador paga obligatoriamente un <strong>seguro contra accidentes laborales</strong>.</p>
            </div>
        `
    },
        "articulo-periodo-prueba": {
        title: "El periodo de prueba y los plazos de preaviso en Suisse",
        description: "Conoce tus derechos durante el periodo de prueba suizo y cuánto tiempo de preaviso necesitas para renunciar o ser despedido.",
        keywords: "periodo prueba suiza, preaviso despido suiza, probezeit",
        audience: 'worker',
        category: 'Trabajo',
        hub: 'trabajo',
        slug: "periodo-prueba-preaviso-suiza",
        readingTime: 3,
        featuredImage: "media/guides/periodo-prueba-preaviso-suiza.jpg",
        imageAlt: "Reunión profesional de revisión al finalizar el periodo de prueba en una oficina con vistas a las montañas suizas",
        summary: 'El periodo de prueba estándar es de 1 a 3 meses. Durante este tiempo, cualquiera de las partes puede rescindir el contrato con 7 días de preaviso.',
        content: `
            <div class="article-content">
                <h2>El Periodo de Prueba (Probezeit / Temps d'essai)</h2>
                <p>El primer mes de un contrato por tiempo indeterminado siempre se considera periodo de prueba por ley, a no ser que el contrato especifique otra cosa. Este periodo puede extenderse por escrito hasta un <strong>máximo de tres meses</strong>.</p>
                <p>Durante este tiempo, ambas partes pueden cancelar el contrato con un <strong>preaviso de siete días</strong> (naturales) y no es necesario dar mayor justificación.</p>

                <h2>Los Plazos de Preaviso (Kündigungsfrist / Délai de congé)</h2>
                <p>Una vez superado el periodo de prueba, se aplican los plazos legales o los convenidos por contrato escrito (o CCT). Según el Código de Obligaciones, el marco general es:</p>
                <ul>
                    <li><strong>1er año de servicio:</strong> 1 mes (cancelación para finales de mes).</li>
                    <li><strong>Del 2º al 9º año de servicio:</strong> 2 meses (cancelación para finales de mes).</li>
                    <li><strong>A partir del 10º año de servicio:</strong> 3 meses (cancelación para finales de mes).</li>
                </ul>

                <div class="callout info">
                    <strong>Importante:</strong> El preaviso debe llegar siempre a manos de tu jefe ANTES del último día laboral del mes para que comience a contar el mes siguiente.
                </div>
            </div>
        `
    },
        "articulo-buscar-empleo": {
        title: "Búsqueda de empleo en Suisse: Plataformas y Estrategias",
        description: "Dónde buscar trabajo, cómo hacer tu CV estilo suizo (foto, certificados) y principales portales de empleo.",
        keywords: "buscar empleo suiza, cv suiza, jobup, jobs.ch",
        category: 'Candidaturas',
        hub: 'trabajo',
        slug: "buscar-empleo-suiza",
        readingTime: 4,
        featuredImage: "media/guides/buscar-empleo-suiza.jpg",
        imageAlt: "Persona buscando trabajo en Suisse en un café con vistas a Zúrich repasando su CV",
        summary: 'El CV al estilo suizo debe incluir foto, fecha de nacimiento y estado civil. Las plataformas más usadas son Jobup, Jobs.ch y LinkedIn.',
        content: `
            <div class="article-content">
                <p>En Suisse, una parte enorme de las ofertas se publica en portales locales y en el idioma del cantón. Tener una lista clara de webs y adaptar palabras clave suele marcar la diferencia.</p>
                <p>Si estás planificando el salto, mira también <a href="#/mudarse-a-suiza-desde-espana">Mudarse en Suisse desde España: guía paso a paso</a>.</p>

                <h2>Principales portales de empleo en Suisse</h2>
                <ul>
                    <li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
                    <li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
                    <li><a href="https://ch.indeed.com/" target="_blank" rel="noopener noreferrer">indeed.ch</a></li>
                    <li><a href="https://www.job-room.ch/" target="_blank" rel="noopener noreferrer">job-room.ch</a> (portal del RAV)</li>
                </ul>

                <div class="callout info">
                    <strong>Consejo práctico</strong>
                    <p>En Suiza suele ser más eficaz buscar trabajo en el idioma local. Por ejemplo, en lugar de buscar en español, puedes buscar directamente en alemán, francés o italiano.</p>
                    <p><strong>Ejemplo de búsqueda en Google:</strong> <code>Glaser Arbeit Zürich</code></p>
                </div>

                <h3>Enlaces útiles</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.arbeit.swiss/" target="_blank" rel="noopener noreferrer">arbeit.swiss</a> (RAV / SECO)</li>
                </ul>
            </div>
            `
    },
        "articulo-alquiler": {
        title: "Alquilar una vivienda en Suisse: el proceso paso a paso",
        description: "Documentos necesarios (Betreibungsauszug) y el dosier que necesitas para conseguir un alquiler suizo en un mercado competitivo.",
        keywords: "alquilar piso suiza, apartamento ginebra zarich, dossier alquiler suiza",
        category: 'Contrato de Alquiler',
        hub: 'vivienda',
        slug: "alquilar-vivienda-suiza",
        readingTime: 12,
        featuredImage: "media/guides/alquilar-vivienda-suiza.jpg",
        imageAlt: "Persona recibiendo las llaves de su apartamento de manos de un agente inmobiliario en Suisse",
        summary: 'El mercado de alquiler es muy competitivo. Necesitas un dosier impecable: extracto de no deudas (poursuites), contrato y 3 últimas nóminas.',
        content: `
            <div class="article-content">
                <h2>Introducción</h2>
                <p>Alquilar vivienda en Suisse suele sorprender por dos motivos: (1) la <strong>competencia</strong> en ciertas zonas y (2) la importancia del <strong>dosier</strong>. No basta con "poder pagar": las agencias (régies/Verwaltungen) buscan perfiles estables, con documentación completa y sin historial de impagos. La buena noticia es que, si entiendes el proceso y te organizas, aumenta mucho tu probabilidad de éxito.</p>

                <div class="callout info">
                    <strong>Puntos clave:</strong>
                    <ul>
                        <li>Prepara tu dosier <strong>antes</strong> de empezar a visitar pisos.</li>
                        <li>El documento estrella es el <strong>Betreibungsauszug / extrait des poursuites</strong> (certificado de deudas en Suisse).</li>
                        <li>Planifica el "coste de entrada": fianza (hasta 3 meses), primer mes y mudanza.</li>
                    </ul>
                </div>

                <h2>Cómo funciona el sistema</h2>
                <h3>1) Dónde se publican los pisos</h3>
                <p>La mayor parte de la oferta se mueve en portales como <a href="https://www.homegate.ch/" target="_blank" rel="noopener noreferrer">Homegate</a> o <a href="https://www.immoscout24.ch/" target="_blank" rel="noopener noreferrer">ImmoScout24</a>. También existen webs de agencias y, en algunas zonas, grupos locales. Consejo práctico: crea alertas por zona, rango de precio y "Zimmer" (habitaciones) para reaccionar rápido.</p>

                <h3>2) Visita y candidatura</h3>
                <p>En Suisse, visitar un piso no significa "reservarlo". Normalmente visitas y después presentas una <strong>candidatura</strong> formal con dosier. En visitas colectivas, puede haber decenas de candidatos. Quien entrega dosier completo y rápido suele tener ventaja.</p>

                <h3>3) Selección y contrato</h3>
                <p>La agencia revisa solvencia y perfil del hogar. Si te seleccionan, te envían contrato o confirmación. Si no, es habitual no recibir explicación detallada.</p>

                <h3>4) Entrada: fianza, inventario y seguros</h3>
                <p>Antes de entregar llaves, suele formalizarse:</p>
                <ul>
                    <li><strong>Fianza (garantía):</strong> en vivienda, suele estar limitada a un máximo de 3 meses de alquiler y se deposita en una cuenta bloqueada a tu nombre (o con seguro de caución).</li>
                    <li><strong>Inventario/estado del piso:</strong> el "état des lieux" es crucial. Se registran defectos; si no lo haces, te los pueden imputar al salir.</li>
                    <li><strong>Responsabilidad civil (RC):</strong> muy frecuente para cubrir daños a terceros (por ejemplo, una fuga de agua).</li>
                </ul>

                <h2>Requisitos y reglas</h2>
                <h3>El dosier del inquilino (qué suelen pedir)</h3>
                <p>Las inmobiliarias suelen pedir documentación para verificar identidad, ingresos y "historial de pagos". Un dosier típico incluye:</p>
                <ul>
                    <li>Copia de DNI/pasaporte y, si lo tienes, permiso de residencia (si no, contrato de trabajo + justificante de registro puede ayudar).</li>
                    <li>Las <strong>3 últimas nóminas</strong> (si acabas de llegar: contrato + carta de la empresa con salario/fecha de inicio).</li>
                    <li><strong>Betreibungsauszug / extrait des poursuites</strong> (certificado de no deudas en Suisse). Suele costar unas <strong>decenas de CHF</strong> y se solicita con tu domicilio.</li>
                    <li>Formulario de la agencia (personas que vivirán, salario, contacto, etc.).</li>
                    <li>En algunos casos: RC, referencias o carta breve de presentación.</li>
                </ul>

                <h3>Regla de oro: el tercio del salario</h3>
                <p>Muchas agencias aplican una regla de prudencia: el alquiler mensual no debería superar ~<strong>1/3</strong> del ingreso bruto del hogar. Si lo supera, pueden rechazar aunque "en tu presupuesto" te cuadre. Por eso, a veces conviene ampliar zona o ajustar expectativas al inicio.</p>

                <h3>"Zimmer" y "Nebenkosten/charges"</h3>
                <p>Dos detalles que causan malentendidos:</p>
                <ul>
                    <li><strong>Zimmer:</strong> el salón cuenta como habitación. Un "3.5" suele ser salón + 2 dormitorios + un espacio "medio".</li>
                    <li><strong>Charges/Nebenkosten:</strong> pueden incluir calefacción/agua caliente y gastos comunes, pero no siempre. Pregunta qué entra y qué no.</li>
                </ul>

                <h3>El contrato: preaviso, fechas y rescisión</h3>
                <p>La parte legal cambia por contrato y cantón, pero hay patrones muy comunes: el contrato suele tener <strong>fechas de rescisión</strong> específicas (por ejemplo, finales de trimestre) y un <strong>preaviso</strong> (a menudo varios meses). Además, en algunos cantones se usan formularios oficiales para comunicar subidas de alquiler o rescisión. Traducción práctica: no asumas que puedes irte "cuando quieras" con 30 días.</p>

                <h3>Entrada y salida: el inventario (état des lieux) es tu seguro</h3>
                <p>El día de entrega de llaves (entrada) se realiza un inventario del estado del piso. Haz fotos y apunta cualquier defecto (rayas, manchas, electrodomésticos, humedad). Al salir, se compara el estado y se decide qué corresponde a desgaste normal y qué se te imputa. Muchísimas disputas nacen de no documentar bien la entrada.</p>

                <h2>Ejemplos concretos</h2>
                <h3>Ejemplo 1 — Llegas sin nóminas suizas aún</h3>
                <p>Si aún no tienes 3 nóminas, refuerza el dosier con: contrato indefinido, carta de la empresa con salario y fecha de inicio, y un breve texto explicativo. No garantiza éxito, pero mejora tus opciones.</p>

                <h3>Ejemplo 2 — Pareja: uno trabaja, otro todavía no</h3>
                <p>En muchos casos cuenta el ingreso total, pero también la estabilidad. Adjunta el contrato del que trabaja y explica el plan (búsqueda del otro, idioma, etc.). Algunas agencias aceptan garantes, otras no.</p>

                <h3>Ejemplo 3 — Te ofrecen "seguro de caución" en lugar de fianza</h3>
                <p>En vez de bloquear varios miles de CHF, puedes pagar una prima anual a una empresa que actúa como avalista. Es útil si llegas sin liquidez, pero no es un "depósito recuperable": es un coste anual. Compara pros y contras con <a href="#/fianzas-alquiler-suiza">Fianzas</a>.</p>

                <h3>Ejemplo 4 — Subalquiler (Untermiete) para empezar</h3>
                <p>Muchos recién llegados empiezan con una habitación o un subalquiler para poder registrarse y cobrar el primer sueldo. Es una estrategia realista si te falta historial suizo. Aun así, pide contrato, reglas claras y evita acuerdos "de palabra".</p>

                <h2>Errores comunes</h2>
                <ul>
                    <li><strong>Dosier incompleto:</strong> en un mercado competitivo, es casi un "no automático".</li>
                    <li><strong>No pedir el Betreibungsauszug a tiempo:</strong> solicítalo en cuanto tengas dirección.</li>
                    <li><strong>No revisar el estado del piso:</strong> no apuntar defectos al entrar es uno de los errores más caros al salir.</li>
                    <li><strong>Caer en estafas:</strong> no envíes dinero por adelantado sin contrato real y verificación (y ojo con "llaves por correo").</li>
                    <li><strong>No verificar al anunciante:</strong> si el precio es irreal o te presionan, desconfía y verifica la agencia/propietario.</li>
                    <li><strong>Ignorar costes de entrada:</strong> fianza + primer mes + mudanza + seguros se acumulan rápido.</li>
                </ul>

                <h2>Consejos prácticos</h2>
                <ul>
                    <li>Ten tu dosier en un único PDF, bien ordenado y listo para enviar el mismo día.</li>
                    <li>Escribe una mini presentación profesional (3–4 líneas) para acompañar la candidatura.</li>
                    <li>En visitas colectivas: llega puntual, sé breve y profesional, y envía la candidatura ese mismo día (si te interesa).</li>
                    <li>Si dudas de cláusulas del contrato o devolución de fianza, busca apoyo (por ejemplo, asociaciones de inquilinos) y revisa <a href="#/fianzas-alquiler-suiza">Fianzas y derechos</a>.</li>
                    <li>Conecta vivienda con presupuesto y trámites: <a href="#/presupuesto-suiza">coste de vida</a> y <a href="#/tramites-llegada-suiza">primer mes</a>.</li>
                </ul>

                <h2>Fuentes oficiales</h2>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portal oficial suizo</a></li>
                </ul>
            </div>
        `
    },
        "articulo-fianzas": {
        title: "Fianzas de alquiler y derechos del inquilino (ASLOCA/MV)",
        description: "Descubre cómo funcionan las garantías de alquiler suizas, alternativas con aseguradoras (SwissCaution) y asociaciones de defensa del inquilino.",
        keywords: "fianza alquiler suiza, swisscaution, asloca, mieterverband",
        audience: 'resident',
        category: 'Vivienda',
        hub: 'vivienda',
        slug: "fianzas-alquiler-suiza",
        readingTime: 3,
        featuredImage: "media/guides/fianzas-alquiler-suiza.jpg",
        imageAlt: "Documento de garantía bancaria de alquiler suiza con las llaves de casa en un escritorio profesional",
        summary: 'La fianza máxima legal es de 3 meses de alquiler. Puedes depositarla en un banco o usar seguros como SwissCaution.',
        content: `
            <div class="article-content">
                <h2>La Fianza (Garantie de Loyer / Mietkaution)</h2>
                <p>Por ley, un propietario puede pedir hasta un <strong>máximo de 3 meses de alquiler</strong> de fondo como fianza para una vivienda (en locales comerciales no hay límite). Este dinero no se le entrega nunca en mano al arrendador.</p>
                <p>El dinero se deposita en una "Cuenta bancaria de garantía de alquiler" que está a tu nombre, pero bloqueada. Solo podrá liberarse con la firma conjunta del inquilino y el arrendador tras la entrega de llaves o rescisión de contrato.</p>

                <h2>Seguros de Caución (Alternativa a depositar capital)</h2>
                <p>Si no dispones de los 3 meses en efectivo (lo que podría representar 6.000 o 9.000 CHF de golpe), existen empresas como <a href="https://www.swisscaution.ch/" target="_blank">SwissCaution</a> que actúan como avalistas. Tú les pagas una prima anual no reembolsable (normalmente el 5% de la fianza), y ellos emiten a la agencia el certificado de cobertura como si fuera dinero real.</p>

                <h2>Defensa de tus derechos: ASLOCA / Mieterverband</h2>
                <p>El sistema protege bastante al inquilino pero puede ser complejo. Si tu agencia trata de imputar te gastos abusivos al abando ar el piso o se niega a devolver la fianza, es muy recomendable estar afiliado a la <a href="https://www.asloca.ch/" target="_blank">Asociación Suiza de Inquilinos</a> (ASLOCA en la zona francesa, Mieterverband en la alemana) por una pequeña cuota anual (aprox. 85 CHF). Ellos ofrecen revisión de contratos gratuita y apoyo judicial si fuera necesario.</p>
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
        title: "Reconocimiento de diplomas extranjeros en Suisse",
        description: "Cómo convalidar tu título universitario o de formación profesional español o latinoamericano en Suisse (SEFRI, Cruz Roja).",
        keywords: "homologar titulo suiza, reconocimiento diplomas suiza, sefri, convalidar titulo",
        audience: 'newcomer',
        category: 'Trámites Avanzados',
        hub: 'tramites',
        slug: "homologar-titulos-suiza",
        readingTime: 3,
        featuredImage: "media/guides/homologar-titulos-suiza.jpg",
        imageAlt: "Manos sosteniendo un diploma con un sello oficial suizo, simbolizando la convalidación",
        summary: 'Solo las profesiones reguladas (médicos, profesores) necesitan reconocimiento obligatorio ante el SEFRI o MEBEKO.',
        content: `
            <div class="article-content">
                <p>Si tienes una titulación extranjera y quieres ejercer en Suisse, el primer paso es saber si tu profesión está regulada (ej. medicina, enfermería, abogacía, docencia). Si no está regulada, no es obligatorio el reconocimiento oficial, y el mercado laboral decidirá el valor de tu título.</p>

                <h2>Profesiones Reguladas y Entidades Competentes</h2>
                <p>Para las profesiones reguladas, el reconocimiento es imperativo. Dependiendo de tu sector, el reconocimiento se solicita a una entidad distinta:</p>
                <ul>
                    <li><strong>SEFRI (Secretaría de Estado para la Formación, la Investigación y la Innovación):</strong> Para profesiones de formación profesional, comercio y educación pedagógica (muchos grados universitarios).</li>
                    <li><strong>MEBEKO (Comisión de Profesiones Médicas):</strong> Para médicos, odontólogos, veterinarios y farmacéuticos. Requiere el dominio de un idioma nacional (B2/C1).</li>
                    <li><strong>Cruz Roja Suiza (CRS):</strong> Para profesiones paramédicas y de salud no universitaria (enfermería, fisioterapia).</li>
                </ul>

                <p>Los trámites incurren en gastos administrativos (centenares de francos) y suelen requerir traducciones juradas de tu expediente académico.</p>

                <div class="callout info">
                    <strong>Fuente:</strong> Comprueba qué autoridad evalúa tu diploma en el <a href="https://www.sbfi.admin.ch/sbfi/en/home/education/recognition-of-foreign-qualifications.html" target="_blank">portal del SEFRI</a>.
                </div>
            </div>
        `
    },
        "articulo-sistema-escolar": {
        title: "El sistema escolar en Suisse explicado",
        description: "Guía sobre cómo funciona el colegio en Suisse, la escuela pública, los idiomas y la segregación temprana (filières).",
        keywords: "colegio suiza, educacion suiza, sistema escolar suizo, escuela infantil suiza",
        audience: 'family',
        category: 'Familia',
        hub: 'vivir-en-suiza',
        slug: "sistema-escolar-suiza",
        readingTime: 5,
        featuredImage: "media/guides/sistema-escolar-suiza.jpg",
        imageAlt: "Edificio moderno de una escuela primaria pública en Suisse con zona de juegos y montañas al fondo",
        summary: 'El sistema escolar orienta (segrega) a los alumnos rápido: más del 60% hace formación profesional dual (CFC) en lugar de bachillerato.',
        content: `
            <div class="article-content">
                <p>La educación pública en Suisse es gratuita, obligatoria integralmente durante 11 años y de excelente calidad. Sin embargo, su estructura es muy cantonal (cada cantón define su plan de estudios) y tiene una particularidad: la orientación profesional temprana.</p>

                <h2>Estructura General (Modelo HarmoS)</h2>
                <ul>
                    <li><strong>Escuela Infantil (Ecole Enfantine / Kindergarten):</strong> Empieza a los 4 años. Son 2 años obligatorios de preparación.</li>
                    <li><strong>Escuela Primaria (Ecole Primaire / Primarschule):</strong> De los 6 a los 12 años (grados 3 a 8). Se introduce rápidamente un segundo y tercer idioma (otro idioma nacional e inglés).</li>
                    <li><strong>Grado Secundario I (Cycle d'Orientation / Sekundarstufe I):</strong> De los 12 a los 15 años (grados 9 a 11).</li>
                </ul>

                <h2>La Segregación o "Filières"</h2>
                <p>A diferencia de España, en Suisse entorno a los 12 o 15 años los alumnos son orientados ("segregados") según sus calificaciones y aptitudes hacia dos vías muy diferenciadas:</p>
                <ol>
                    <li><strong>La vía vocacional (Formación Profesional / Aprendizaje dual):</strong> Más del 60% de los jóvenes suizos optan por hacer un "CFC" (Certificado Federal de Capacidad). Trabajan 3 o 4 días en una empresa aprendiendo un oficio y van 1 o 2 días a clase. Es una vía muy prestigiosa y remunerada desde el inicio.</li>
                    <li><strong>La vía académica (Gimnasio / Collège / Maturité / Matura):</strong> Para aquellos con mejores notas académicas, preparándolos para entrar directamente a la Universidad o a las Escuelas Politécnicas Federales.</li>
                </ol>
                <p><em>Nota:</em> El sistema es permeable; un estudiante de formación profesional puede acabar logrando accesos a la universidad en el futuro mediante "pasarelas".</p>
            </div>
        `
    },
        "articulo-transporte": {
        title: "Transporte público en Suisse: CFF/SBB, Halbtax y Abono General (AG)",
        description: "Suiza tiene la red de trenes más densa y puntual. Descubre los abonos Demi-tarif / Halbtax, el Abono general y cómo moverte.",
        keywords: "trenes suiza, SBB CFF FFS, abono medio precio suiza, halbtax, demi tarif, abono general AG",
        category: 'Transporte Público',
        hub: 'vivir-en-suiza',
        slug: "transporte-publico-suiza",
        readingTime: 4,
        summary: 'El abono Demi-tarif / Halbtax (mitad de precio) es casi obligatorio para cualquier residente si planea usar el transporte público ocasionalmente.',
        featuredImage: "media/guides/transporte-publico-suiza.jpg",
        imageAlt: "Mapa articulado de la red ferroviaria suiza",
        content: `
            <div class="article-content">
                <p>La Confederación Suiza está orgullosa de poseer uno de los sistemas de transporte público más densos, puntuales e integrados del mundo (trenes, autobuses, tranvías y barcos están en un solo reloj).</p>

                <h2>El Swisspass</h2>
                <p>Es una tarjeta roja física (y digital en la app SBB Mobile) que actúa como soporte para todos tus abonos y forfaits de esquí.</p>

                <h2>La suscripción imprescindible: El Demi-tarif / Halbtax</h2>
                <p>Comprar un billete de tren suelto es muy caro. La inmensa mayoría de residentes compra un <strong>abono de medio precio anual (Demi-tarif)</strong>. Cuesta poco menos de 200 CHF al año y te da derecho a comprar billetes al 50% de descuento en trenes suizos, autobuses, barcos y en el transporte urbano de casi todas las ciudades. Se amortiza muy fácilmente.</p>

                <h2>El Abono General (AG / GA)</h2>
                <p>Si eres un <em>commuter</em> extremo que viaja en tren para ir al trabajo cada día, el <strong>Abono General</strong> te permite viajar ilimitadamente en cualquier tren interurbano, urbano, barcos y postbus del país. Es caro (casi 4.000 CHF anuales para adultos en 2ª clase, pero los empleadores a veces subvencionan parte), pero ofrece libertad total ("Sube al tren y olvídate del billete").</p>

                <h2>Billetes Super Saver y Billetes de Comunidad</h2>
                <p>Si compras tus billetes de tren en la app (SBB Mobile) con varias semanas de antelación, puedes encontrar <em>billetes super-réduits / supersaver tickets</em> con hasta un 70% de descuento, válidos exclusivamente para la hora exacta marcada.</p>
                <p>Además, muchas comunas venden localmente <em>Cartes Journalières / Tageskarten</em> muy subvencionadas para sus vecinos.</p>
            </div>
        `
    },
        "articulo-ciudadania": {
        title: "Ciudadanía suiza y el proceso de naturalización por residencia",
        description: "Requisitos para conseguir el pasaporte suizo. Años de residencia, nivel de idioma y la prueba de integración (la naturalización ordinaria).",
        keywords: "nacionalidad suiza, naturalizacion suiza, ciudadania suiza, pasaporte suizo",
        audience: 'newcomer',
        category: 'Trámites Avanzados',
        hub: 'tramites',
        slug: "nacionalidad-suiza-pasaporte",
        readingTime: 5,
        featuredImage: "media/guides/nacionalidad-suiza-pasaporte.jpg",
        imageAlt: "Simbólico pasaporte rojo suizo descansando sobre un escritorio de madera profesional",
        summary: 'La naturalización ordinaria requiere 10 años de residencia, un Permiso C, nivel de idioma (B1/A2) y superar un examen comunal de integración.',
        content: `
            <div class="article-content">
                <p>Obtener el pasaporte con la cruz blanca no es un trámite puramente burocrático, sino que los suizos lo entienden como la constatación final de un nivel de integración óptimo.</p>

                <h2>Requisitos de la Naturalización Ordinaria</h2>
                <p>Si no estás casado con un/una ciudadana suiza, deberás seguir la ruta de naturalización ordinaria, cuyo principal requisito son <strong>10 años de residencia en Suisse</strong> (los años entre los 8 y los 18 años cuentan el doble).</p>

                <ul>
                    <li>Poseer un Permiso de Establecimiento (<strong>Permiso C</strong>).</li>
                    <li>Haber residido ininterrumpidamente en el mismo cantón o en la misma comuna por el tiempo mínimo específico que ellos marquen (varía entre 2 y 5 años según la región).</li>
                    <li><strong>Integración y dominio del idioma:</strong> Demostrar capacidad escrita y oral en el idioma nacional del cantón (normalmente nivel B1 en habla y A2 en escritura acreditado).</li>
                    <li>No haber dependido de la asistencia social en los últimos 3 años (o haber restituido el dinero).</li>
                    <li>No tener antecedentes penales ni deudas (los impagos o Betreibung paralizan el proceso).</li>
                </ul>

                <h2>El proceso de examen</h2>
                <p>El trámite involucra tres niveles de gobierno (Comuna, Cantón y Confederación). En la mayoría de las comunas, debes realizar un examen escrito y una entrevista oral donde se evalúa tu conocimiento cívico suizo, geografía, cultura cantonal y, en ocasiones, tu relación con los vecinos. Es en la comuna donde se decide fundamentalmente si tu "grado de asimilación e integración local" es suficiente.</p>
                
                <div class="callout info">
                    <strong>Información del SEM:</strong> Todos los cantones tienen sus propios procedimientos pero respetan la ley federal de la <a href="https://www.sem.admin.ch/sem/es/home/themen/buergerrecht/einbuergerung/ordentliche_einbuergerung.html" target="_blank">SEM</a>.
                </div>
            </div>
        `
    },
        "articulo-consulados": {
        title: "Consulados españoles en Suisse: dónde están y qué trámites hacen",
        description: "Guía completa de los tres consulados españoles en Suisse (Ginebra, Berna, Zúrich): servicios, citas, pasaportes, padrón y registro consular.",
        keywords: "consulado español suiza, consulado ginebra, consulado zurich, consulado berna, registro consular, pasaporte suiza, MAEC",
        audience: 'newcomer',
        category: 'Recursos Oficiales',
        hub: 'tramites',
        slug: "consulados-espanoles-suiza",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        summary: "España tiene tres consulados en Suisse: Ginebra, Berna y Zúrich. El registro consular es el primer trámite que debes hacer al llegar. Sin él, no puedes renovar el pasaporte ni votar.",
        featuredImage: "media/guides/consulados-espanoles-suiza.png",
        imageAlt: "Sede de un consulado español en Suisse con la bandera oficial",
        content: `
            <div class="article-content">
                <p>Si eres ciudadano español viviendo en Suisse, el consulado es tu ventanilla oficial para todos los trámites que vinculan tu vida en el extranjero con la administración española. Hay tres consulados generales de España en Suisse, y debes dirigirte al que corresponde a tu cantón de residencia.</p>

                <div class="callout info">
                    <strong>Primer paso obligatorio:</strong> Al instalarte en Suisse, el trámite más importante es <strong>inscribirte en el Registro de Matrícula Consular</strong>. Sin este registro, no podrás renovar tu DNI o pasaporte, ni votar en elecciones españolas desde el exterior.
                </div>

                <h2>Los 3 consulados españoles en Suisse</h2>

                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1.25rem; margin:1.5rem 0;">
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Consulado General en Ginebra</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantones:</strong> Ginebra, Vaud, Valais, Friburgo, Neuchâtel, Jura</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Dirección:</strong> Avenue Blanc 53, 1202 Ginebra</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Teléfono:</strong><br>+41 22 749 14 60</p>
                        <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portal oficial →</a>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Consulado General en Berna</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantones:</strong> Berna, Solothurn, Friburgo (parte), Valais (parte)</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Dirección:</strong> Marienstrasse 12, 3005 Berna</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Teléfono:</strong><br>+41 31 356 22 20</p>
                        <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portal oficial →</a>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Consulado General en Zúrich</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantones:</strong> Zúrich, Argovia, Basilea, Lucerna, San Galo, Grisones, Schaffhausen, Turgovia, Ticino, Zug y otros</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Dirección:</strong> Riedtlistrasse 17, 8006 Zúrich</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Teléfono:</strong><br>+41 44 368 61 00</p>
                        <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portal oficial →</a>
                    </div>
                </div>

                <h2>¿Qué trámites puedes hacer en el consulado?</h2>

                <h3>Registro de Matrícula Consular (RECA)</h3>
                <p>Es el <strong>primer trámite que debes realizar</strong> al instalarte en Suisse. Sirve para inscribirte formalmente como residente español en el exterior. A partir de este registro:</p>
                <ul>
                    <li>Puedes renovar tu DNI y pasaporte desde Suisse.</li>
                    <li>Puedes ejercer tu derecho a voto en elecciones españolas (CERA — Censo Electoral de Residentes Ausentes).</li>
                    <li>La administración española tiene constancia de tu lugar de residencia.</li>
                </ul>
                <p>El registro es gratuito. Necesitarás: pasaporte o DNI en vigor, prueba de residencia en Suisse (contrato de alquiler, registro de la commune) y en algunos casos el permiso de residencia suizo.</p>

                <h3>DNI y Pasaporte</h3>
                <p>Puedes renovar o solicitar tu DNI y pasaporte en el consulado de tu demarcación. Es <strong>imprescindible pedir cita previa</strong> a través del portal de cita consular del Ministerio de Asuntos Exteriores. Los tiempos de espera pueden ser de varias semanas, especialmente en Ginebra y Zúrich.</p>

                <div class="callout">
                    <strong>Consejo:</strong> Solicita la cita con al menos 2-3 meses de antelación a la caducidad de tu documento. No esperes al último momento.
                </div>

                <h3>Registro Civil: nacimientos, matrimonios, defunciones</h3>
                <p>Si has tenido un hijo en Suisse, te has casado o ha fallecido un familiar español, debes inscribir el hecho en el Registro Civil consular. El consulado inscribirá el evento en el Registro Civil español.</p>

                <h3>Pensiones y Seguridad Social</h3>
                <p>El consulado puede orientarte sobre convenios de Seguridad Social entre España y Suisse, tramitación de pensiones, acumulación de cotizaciones y otros trámites relacionados con la Seguridad Social española.</p>

                <h3>Asistencia consular</h3>
                <p>En caso de emergencia (robo de documentos, accidente grave, fallecimiento), el consulado puede proporcionar asistencia consular de emergencia. Para urgencias fuera de horario, cada consulado tiene una línea de guardia.</p>

                <h2>Cómo pedir cita consular</h2>
                <p>La mayoría de trámites se gestionan exclusivamente con cita previa. Consulta los enlaces oficiales de cada consulado para instrucciones actualizadas:</p>
                <ul>
                    <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consulado en Ginebra</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consulado en Berna</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consulado en Zúrich</a></li>
                </ul>

                <h2>Portal del Ministerio de Exteriores</h2>
                <p>Toda la información actualizada sobre trámites, requisitos y noticias para españoles en Suisse se encuentra en:</p>
                <ul>
                    <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consulado en Ginebra</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consulado en Berna</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consulado en Zúrich</a></li>
                </ul>

                <h2>Artículos relacionados</h2>
                <ul>
                    <li><a href="#/registrarse-en-suiza">Registrarse en Suisse al llegar</a></li>
                    <li><a href="#/tramites-llegada-suiza">Permisos de residencia L, B y C</a></li>
                    <li><a href="#/tramites-llegada-suiza">Trámites al llegar: lista completa</a></li>
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
