(function() {
/**
 * content-articles.js
 * Contains the 20 SEO optimized deep-dive articles.
 */

window.siteContent = window.siteContent || {};
window.siteContent.it = window.siteContent.it || { global: {}, pages: {}, articles: {} };

window.siteContent.it.articles = {
    // 1. Permisos de residencia
    "articulo-permisos": {
        title: "Permessi di soggiorno in Svizzera: L, B, C e differenze",
        description: "Tutto sui permessi svizzeri per i residenti stranieri. Scopri le differenze tra permesso L, B e C.",
        keywords: "permessi Svizzera, permesso L, permesso B, permesso C, vivere in Svizzera, SEM",
        category: "Procedure Ordinarie",
        hub: "tramites",
        slug: "tramites-llegada-suiza",
        readingTime: 12,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/tramites-llegada-suiza.jpg",
        imageAlt: "Checklist di arrivo con documenti, chiavi e tessere svizzere",
        summary: "Esistono tre permessi principali (L, B, C). La tua nazionalità (UE vs Paesi Terzi) e la durata del contratto determinano quale riceverai. Puoi lavorare prima di avere la tessera fisica.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>Se vivrai in Svizzera, hai bisogno di un <strong>titolo di soggiorno</strong> (permesso). Per i cittadini UE/AELS (come gli italiani o gli spagnoli), il processo è solitamente diretto se si ha un motivo chiaro per la permanenza (ad esempio, un contratto di lavoro). Per i cittadini di paesi terzi, il sistema è diverso e solitamente richiede autorizzazioni preventive e condizioni più restrittive.</p>

                <div class="callout info">
                    <strong>La cosa più importante:</strong> in Svizzera il permesso fisico (la tessera) può richiedere settimane. In pratica, con la <strong>ricevuta/certificato di registrazione</strong> del comune, di solito puoi iniziare a lavorare e procedere con le altre pratiche mentre aspetti la tessera.
                </div>

                <h2>Come funziona il sistema</h2>
                <p>Il permesso non si "richiede via internet" in modo centralizzato. Nella maggior parte dei casi, il flusso reale è:</p>
                <ol>
                    <li><strong>Indirizzo in Svizzera</strong> (affitto, subaffitto, alloggio temporaneo).</li>
                    <li><strong>Registrazione al comune</strong> (Controllo abitanti / Einwohnerkontrolle).</li>
                    <li>La pratica passa all'<strong>autorità cantonale</strong> competente (migrazione).</li>
                    <li>Ricevi un certificato e successivamente la <strong>tessera</strong> per posta.</li>
                </ol>
                <p>I dettagli su documenti e tempistiche <strong>variano a seconda del cantone e del comune</strong> (appuntamento, tasse, requisiti per la foto, ecc.). La logica generale, tuttavia, è la stessa.</p>

                <h2>Requisiti e regole</h2>
                <h3>Documenti tipici per la registrazione</h3>
                <p>Per avviare la procedura, di solito ti verranno richiesti (a seconda del cantone e della situazione):</p>
                <ul>
                    <li>Documento d'identità/passaporto.</li>
                    <li><strong>Motivo della permanenza:</strong> contratto di lavoro, ammissione agli studi, o documentazione di mezzi propri.</li>
                    <li>Contratto di affitto o <strong>certificato di alloggio</strong> se sei ospite di qualcuno.</li>
                    <li>Foto formato tessera (a volte viene scattata sul posto).</li>
                    <li>Stato civile e documenti familiari se applicabile.</li>
                </ul>
                <p>Alla registrazione viene solitamente applicata una <strong>tassa amministrativa</strong> che varia a seconda del cantone e del tipo di permesso.</p>

                <h3>Quale permesso ti spetta (visione pratica)</h3>
                <p>I permessi più comuni per i nuovi arrivati sono:</p>
                <ul>
                    <li><strong>Permesso L</strong>: soggiorno di breve durata/temporaneo (spesso legato a un contrato inferiore a 12 mesi).</li>
                    <li><strong>Permesso B</strong>: dimora (molto comune con un contratto di almeno 12 mesi o a tempo indeterminato per i cittadini UE/AELS).</li>
                    <li><strong>Permesso C</strong>: domicilio (più stabile; solitamente arriva dopo diversi anni di residenza regolare).</li>
                    <li><strong>Permesso G</strong>: frontaliere (vivi fuori dalla Svizzera e lavori in Svizzera).</li>
                </ul>

                <h3>Tabella comparativa rapida</h3>
                <p>In Svizzera esistono diversi permessi di soggiorno per i cittadini dell’Unione Europea.<br>
                I più comuni sono i permessi L, B e C.<br>
                Ognuno corrisponde a una situazione diversa in base al tipo di contratto e alla durata del soggiorno.<br>
                La tabella seguente riassume le principali caratteristiche. Se stai pianificando il tuo trasferimento, vedi anche <a href="#/mudarse-a-suiza-desde-espana">la guida passo dopo passo</a>.</p>
                <table class="info-table">
                    <thead><tr><th>Permesso</th><th>Per chi (tipico)</th><th>Durata</th><th>Note</th></tr></thead>
                    <tbody>
                        <tr><td><strong>L</strong></td><td>Contratto temporaneo</td><td>Legata al contratto</td><td>Più restrizioni; dipende dal caso/cantone</td></tr>
                        <tr><td><strong>B</strong></td><td>Soggiorno con lavoro/studio</td><td>Solitamente diversi anni</td><td>Imposta alla fonte frequente all’inizio</td></tr>
                        <tr><td><strong>C</strong></td><td>Domicilio</td><td>Rinnovabile</td><td>Maggiore stabilità amministrativa</td></tr>
                        <tr><td><strong>G</strong></td><td>Frontalieri</td><td>Solitamente diversi anni</td><td>Regole fiscali speciali secondo gli accordi</td></tr>
                    </tbody>
                </table>
                <div class="callout info">
                    <strong>Consiglio pratico</strong>
                    <p>Con un permesso L può essere più difficile affittare un alloggio tramite un’agenzia immobiliare. Molte organizzazioni preferiscono inquilini con permesso B o con un contratto di lavoro a tempo indeterminato.</p>
                </div>

                <h3>Link utili</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                </ul>

                <h3>Scadenze, tasse e certificato provvisorio</h3>
                <p>In pratica, ciò che sblocca la tua vita amministrativa è la <strong>registrazione al comune</strong>. Al momento della registrazione, molti comuni rilasciano un <strong>certificato provvisorio</strong> (o ricevuta) che serve mentre aspetti la tessera. Quel documento è solitamente sufficiente per:</p>
                <ul>
                    <li>Iniziare a lavorare (il tuo datore di lavoro solitamente conosce la procedura).</li>
                    <li>Aprire un conto bancario.</li>
                    <li>Contratte servizi di base e procedere con altre pratiche.</li>
                </ul>
                <p>Le <strong>tasse</strong> variano a seconda del cantone e del tipo di permesso. Normalmente si paga una somma moderata alla registrazione e, a volte, si paga separatamente per la foto/biometria se non viene fatta in ufficio.</p>

                <h3>Rinnovi e cambiamenti (domicilio, lavoro, situazione familiare)</h3>
                <p>La vita reale cambia e il permesso "segue" questi cambiamenti:</p>
                <ul>
                    <li><strong>Cambio di domicilio:</strong> quando ti trasferisci, devi notificare la partenza/arrivo secondo il comune (ed entro i termini). Non è un dettaglio secondario: in Svizzera il domicilio è un elemento centrale.</li>
                    <li><strong>Cambio di datore di lavoro:</strong> con i permessi UE/AELS solitamente c'è mobilità, ma l'obbligo di notificare o aggiornare può dipendere dal cantone e dal tipo di permesso.</li>
                    <li><strong>Cambiamento di stato civile / figli:</strong> influisce sulle pratiche e, spesso, sulla fiscalità. Mantieni la documentazione aggiornata.</li>
                </ul>

                <h3>Famiglia (ricongiungimento) in due righe</h3>
                <p>Se vieni con partner e figli, o vuoi portarli in seguito, l'amministrazione valuterà soprattutto:</p>
                <ul>
                    <li><strong>Reddito sufficiente</strong> (secondo il cantone e le dimensioni del nucleo familiare).</li>
                    <li><strong>Alloggio adeguato</strong> (numero di stanze/spazio).</li>
                    <li><strong>Documentazione</strong> (certificati con apostille/traduzione se richiesto).</li>
                </ul>
                <p>Come regola pratica, prepara questi documenti <strong>prima</strong> di venire, se possibile: certificati di nascita e di matrimonio, con le relative traduzioni quando necessario.</p>

                <h2>Esempi concreti</h2>
                <h3>Esempio 1 — Arrivi con un contratto a tempo indeterminato</h3>
                <p>Ti registri al comune con il documento d'identità + contratto + indirizzo. Paghi la tassa, ricevi un certificato provvisorio e puoi iniziare a lavorare. Con quel certificato normalmente puoi aprire un conto bancario e stipulare l'assicurazione sanitaria.</p>

                <h3>Esempio 2 — Arrivi senza contratto (UE/AELS)</h3>
                <p>In alcuni casi puoi registrarti dimostrando di avere <strong>mezzi finanziari</strong> e copertura medica. La difficoltà pratica è che, senza un contratto, l'affitto e la banca possono essere più complicati. È uno scenario che richiede una pianificazione finanziaria realistica.</p>

                <h3>Esempio 3 — Perdi il lavoro con Permesso B</h3>
                <p>Perdere il posto di lavoro non implica automaticamente la "perdita del permesso", ma richiede di agire correttamente: iscriviti alla cassa disoccupazione (URC/RAV) se del caso, cerca lavoro attivamente e mantieni la tua registrazione in regola. Su questo punto è utile leggere <a href="#/rav-paro-suiza">RAV e disoccupazione in Svizzera</a>.</p>

                <h3>Esempio 4 — Vieni come studente</h3>
                <p>Al momento della registrazione ti verrà richiesta una prova di ammissione/iscrizione e, a seconda dei casi, i <strong>mezzi finanziari</strong> per il soggiorno. Come studente, ti interesserà anche pianificare l'assicurazione sanitaria e verificare se esistono regole specifiche o eccezioni cantonali.</p>

                <h3>Esempio 5 — Sei frontaliere (Permesso G)</h3>
                <p>Se vivi in Italia/Francia/Germania e lavori in Svizzera, il permesso G ha regole proprie e implicazioni fiscali importanti. Non trattarlo come "un B ma vivendo fuori": consulta la tua situazione presso fonti ufficiali e, se necessario, richiedi una consulenza fiscale.</p>

                <h2>Errori comuni</h2>
                <ul>
                    <li><strong>Aspettare di avere una casa definitiva:</strong> se sei in un alloggio temporaneo, registrati e aggiorna l'indirizzo in seguito.</li>
                    <li><strong>Assumere che tutto sia uguale in tutti i cantoni:</strong> scadenze, appuntamenti e documenti cambiano.</li>
                    <li><strong>Non preparare i documenti familiari:</strong> i certificati (nascita/matrimonio) possono richiedere tempo per essere ottenuti; se vieni con la famiglia, preparali in anticipo.</li>
                    <li><strong>Non collegare il permesso ad altri obblighi:</strong> LAMal, tasse e cambi di domicilio sono strettamente legati al permesso.</li>
                </ul>

                <h2>Consigli pratici</h2>
                <ul>
                    <li>Prenota un appuntamento (se necessario) al comune non appena hai un indirizzo.</li>
                    <li>Porta con te copie cartacee e digitali di tutto.</li>
                    <li>Se traslochi, effettua il cambio di domicilio entro i termini.</li>
                    <li>Se vieni con la famiglia, prepara i certificati (nascita/matrimonio) in anticipo: apostille e traduzioni possono richiedere tempo.</li>
                    <li>Per il "primo mese", usa la guida: <a href="#/tramites-llegada-suiza">Checklist delle pratiche</a>.</li>
                </ul>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href="https://www.sem.admin.ch/sem/it/home/themen/aufenthalt.html" target="_blank" rel="noopener noreferrer">SEM — Soggiorno / Aufenthalt</a></li>
                    <li><a href="https://www.ch.ch" target="_blank" rel="noopener noreferrer">ch.ch — Portale ufficiale svizzero</a></li>
                    <li>Autorità cantonali della migrazione (sito web del cantone in cui risiedi).</li>
                </ul>
            </div>
        `
    },

    "articulo-mudarse-suiza": {
        title: "Trasferirsi in Svizzera dalla Spagna: guida passo passo",
        description: "Guida rapida e pratica per gli spagnoli che vogliono vivere in Svizzera: passi, procedure e link utili.",
        keywords: "trasferirsi in svizzera dalla spagna, vivere in svizzera da spagnolo, come andare a vivere in svizzera",
        category: "Procedure Ordinarie",
        hub: "tramites",
        slug: "mudarse-a-suiza-desde-espana",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        summary: "Una chiara checklist dei passi per trasferirsi in Svizzera dalla Spagna: lavoro, registrazione, permessi, assicurazione sanitaria, alloggio e budget.",
        featuredImage: "media/guides/mudarse-a-suiza-desde-espana.jpg",
        imageAlt: "Camion dei traslochi che percorre una strada svizzera con le montagne sullo sfondo",
        content: `
            <div class="article-content">
                <p>Molti spagnoli desiderano vivere o lavorare in Svizzera per i salari, la stabilità e le opportunità. Questa guida riassume i <strong>passaggi principali</strong> per stabilirsi, senza testi lunghi e con link diretti alle pagine chiave del sito.</p>

                <h2>1) Prima di venire in Svizzera</h2>
                <ul>
                    <li><strong>Cercare lavoro</strong> e comprendere il mercato per cantone/lingua.</li>
                    <li>Preparare un <strong>CV adatto alla Svizzera</strong> (dossier completo).</li>
                    <li>Informarsi sul <a href="#/presupuesto-suiza">costo della vita</a> e regolare le aspettative.</li>
                    <li>Avere dei <strong>risparmi</strong> per i primi mesi (affitto, assicurazione, pratiche).</li>
                </ul>
                <div class="callout info">
                    <strong>Consiglio pratico</strong>
                    <p>Molti datori di lavoro preferiscono candidati che si trovano già in Svizzera o che possono spostarsi facilmente per un colloquio.</p>
                </div>

                <h2>2) Arrivare in Svizzera</h2>
                <ul>
                    <li>Trovare un <strong>alloggio temporaneo</strong> per potersi registrare.</li>
                    <li>Registrarsi presso il comune: <a href="#/registrarse-en-suiza">controllo degli abitanti</a>.</li>
                    <li>Richiedere il <a href="#/tramites-llegada-suiza">permesso di soggiorno</a> (a seconda della propria situazione).</li>
                </ul>

                <h2>3) Assicurazione sanitaria</h2>
                <ul>
                    <li>L'<strong>assicurazione sanitaria è obbligatoria</strong>.</li>
                    <li>Deve essere stipulata entro i <strong>primi 3 mesi</strong> (con effetto retroattivo).</li>
                    <li>Ogni persona sceglie la propria compagnia assicurativa: confronta e decidi.</li>
                </ul>
                <p>Guida: <a href="#/seguro-medico-lamal-suiza">Assicurazione sanitaria (LAMal)</a>.</p>

                <h2>4) Cercare lavoro</h2>
                <p>Dove cercare offerte e come preparare le candidature: <a href="#/buscar-empleo-suiza">Ricerca di lavoro in Svizzera</a>.</p>
                <h3>Portali principali</h3>
                <ul>
                    <li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
                    <li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
                    <li><a href="https://ch.indeed.com/" target="_blank" rel="noopener noreferrer">indeed.ch</a></li>
                    <li><a href="https://www.job-room.ch/" target="_blank" rel="noopener noreferrer">job-room.ch</a></li>
                </ul>
                <div class="callout info">
                    <strong>Consiglio pratico</strong>
                    <p>In Svizzera è solitamente più efficace cercare lavoro nella lingua locale (tedesco, francese o italiano).</p>
                    <p><strong>Esempio di ricerca su Google:</strong> <code>Glaser Arbeit Zürich</code></p>
                </div>

                <h2>5) Alloggio</h2>
                <ul>
                    <li>Ti verranno richiesti <strong>documenti</strong> (identità, buste paga/contratto, ecc.).</li>
                    <li>Il <strong>dossier di affitto</strong> è fondamentale e il mercato è competitivo.</li>
                    <li>Con un <strong>permesso L</strong> solitamente è più difficile affittare tramite un'agenzia immobiliare.</li>
                </ul>
                <p>Guida: <a href="#/alquilar-vivienda-suiza">Affittare una casa in Svizzera</a>.</p>

                <h2>6) Costo della vita</h2>
                <p>Il costo varia a seconda del cantone (e della città). Come riferimento rapido:</p>
                <table class="info-table">
                    <thead><tr><th>Spesa</th><th>Range indicativo</th><th>Note</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Affitto</strong></td><td>1.500 – 2.200 CHF</td><td>Più alto a Ginevra/Zurigo; dipende dalla zona e dalle dimensioni</td></tr>
                        <tr><td><strong>Assicurazione sanitaria</strong></td><td>350 – 450 CHF</td><td>Varia per cantone/età/modello/franchigia</td></tr>
                        <tr><td><strong>Cibo</strong></td><td>400 – 600 CHF</td><td>Migros/Coop vs discounters; abitudini personali</td></tr>
                        <tr><td><strong>Trasporti</strong></td><td>70 – 150 CHF</td><td>Dipende dalla città/abbonamenti; il treno interurbano aumenta il costo</td></tr>
                    </tbody>
                </table>
                <p>Maggiori dettagli: <a href="#/presupuesto-suiza">Costo della vita in Svizzera</a>.</p>

                <div class="callout info">
                    <strong>Consiglio finale</strong>
                    <p>Trasferirsi in Svizzera richiede pianificazione, ma con le informazioni adeguate il processo è molto più semplice.</p>
                </div>

                <h3>Link utili</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                    <li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
                    <li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
                </ul>
            </div>
        `
    },

    // 2. Registro en la comuna
    "articulo-registro": {
        title: "Come registrarsi all'arrivo in Svizzera (Controllo Abitanti)",
        description: "Guida passo dopo passo sulla registrazione nel tuo nuovo comune (Contrôle des habitants) dopo esserti trasferito in Svizzera. Scadenze, documenti e cosa succede dopo.",
        keywords: "registrazione comune svizzera, empadronamento svizzera, controle des habitants, vivere in Svizzera, primo mese svizzera",
        category: "Procedure Iniziali",
        hub: "tramites",
        slug: "registrarse-en-suiza",
        readingTime: 5,
        featuredImage: "media/guides/registrarse-en-suiza.jpg",
        imageAlt: "Persona che arriva al Rathaus (municipio) svizzero per registrarsi con la sua valigia",
        summary: "Se ti trasferisci in Svizzera per risiedere, normalmente devi registrarti nel tuo comune entro pochi giorni (spesso 14). La ricevuta di registrazione ti permette solitamente di iniziare a lavorare e procedere con le pratiche mentre aspetti la tessera del permesso.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>La <strong>registrazione al comune</strong> (Controllo abitanti / <i>Contrôle des habitants</i> / <i>Einwohnerkontrolle</i>) è la pratica che <strong>formalizza la tua residenza</strong> in Svizzera. È fondamentale per attivare il circuito amministrativo: permesso, assicurazione sanitaria, tasse, scuola, ecc.</p>
                <p>Importante: <strong>non tutti coloro che \"entrano in Svizzera\" si registrano</strong>. Questo articolo è rivolto a persone che <strong>si trasferiscono per vivere</strong> (per lavoro, studio o motivi familiari) e hanno bisogno di un domicilio ufficiale.</p>

                <h2>Come funziona il sistema</h2>
                <ol>
                    <li><strong>Scegli il tuo comune</strong> (il tuo domicilio reale) e individua l'ufficio di registrazione.</li>
                    <li><strong>Prenota un appuntamento</strong> se necessario (molto comune nelle grandi città).</li>
                    <li><strong>Presenta i documenti</strong>, paga una tassa e dichiara il tuo domicilio.</li>
                    <li>Il comune ti rilascia una <strong>ricevuta/certificato di registrazione</strong> (a seconda del cantone e della situazione).</li>
                    <li>La pratica passa all'<strong>autorità cantonale della migrazione</strong> e la <strong>tessera del permesso</strong> arriva per posta (dopo alcune settimane).</li>
                </ol>
                <div class="callout warning">
                    <strong>Scadenze:</strong> in molti cantoni la registrazione deve essere effettuata entro <strong>14 giorni</strong> (a volte meno) e, se vieni per lavorare, normalmente <strong>prima del primo giorno di lavoro</strong>. I dettagli cambiano a seconda del cantone e del comune: conferma sempre sul sito ufficiale del tuo municipio.
                </div>

                <h2>Requisiti e regole</h2>
                <h3>1) Chi deve registrarsi (e chi no)?</h3>
                <ul>
                    <li><strong>Turista / soggiorno breve (es. fino a 90 giorni):</strong> normalmente <strong>non c'è registrazione comunale</strong> come residente.</li>
                    <li><strong>Ti trasferisci per risiedere (lavoro, studio, famiglia):</strong> in pratica <strong>sì</strong>, devi registrarti al comune entro i termini locali.</li>
                    <li><strong>In cerca di lavoro UE/AELS:</strong> puoi rimanere un certo periodo a cercare lavoro (con regole specifiche). Se ti stabilisci e/o superi il periodo consentito senza permesso, <strong>devi regolarizzare</strong> la tua situazione secondo il cantone.</li>
                    <li><strong>Frontaliere (Permesso G):</strong> lavori in Svizzera ma <strong>vivi fuori</strong>. Non viene gestito come una registrazione di residenza \"normale\". Tuttavia, ci sono pratiche con il cantone/datore di lavoro e requisiti fiscali/assicurativi.</li>
                </ul>
                <p>Se il tuo caso è misto (es. inizi come soggiorno breve e poi vieni assunto), la regola pratica è: <strong>non appena hai un motivo di residenza e un domicilio, agisci rapidamente</strong> per evitare ritardi o sanzioni.</p>

                <h3>2) Indirizzo e alloggio: sì, può essere temporaneo</h3>
                <p>Se al tuo arrivo ti trovi in hotel, Airbnb o a casa di qualcuno, in molti casi puoi registrarti a un <strong>indirizzo provvisorio</strong> e aggiornarlo in seguito. Se alloggi presso un privato, solitamente è richiesto un <strong>certificato di alloggio</strong> firmato dal titolare del contratto di affitto.</p>

                <h3>3) Documenti abituali</h3>
                <ul>
                    <li>Documento d'identità (Carta d'identità/passaporto).</li>
                    <li><strong>Motivo del soggiorno:</strong> contratto di lavoro, ammissione agli studi, o documentazione di mezzi propri (a seconda della situazione).</li>
                    <li>Contratto di affitto o certificato di alloggio.</li>
                    <li>Foto formato tessera (o viene scattata sul posto, a seconda del comune).</li>
                    <li>Documentazione familiare se applicabile (matrimonio, nascita figli, ecc.).</li>
                </ul>
                <p>È inoltre frequente dover pagare una <strong>tasa amministrativa</strong>. L'importo dipende dal cantone e dal tipo di permesso.</p>

                <h2>Esempi concreti</h2>
                <h3>Esempio 1 — Arrivi con lavoro e alloggio temporaneo</h3>
                <p>Ti registri con il tuo contratto + documento + indirizzo temporaneo. Ottieni una ricevuta e puoi procedere con banca/assicurazione mentre aspetti la tessera del permesso. Quando firmi il contratto di affitto definitivo, effettui il cambio di domicilio.</p>

                <h3>Esempio 2 — Arrivi come studente</h3>
                <p>Presenti l'ammissione/iscrizione e la prova di mezzi/copertura a seconda del cantone. La registrazione attiva le altre procedure (assicurazione, tasse se lavori, ecc.).</p>

                <h3>Esempio 3 — Sei frontaliere</h3>
                <p>Non segui lo stesso percorso di un residente. Il tuo permesso e i tuoi obblighi sono solitamente gestiti con il datore di lavoro e l'autorità cantonale, con regole fiscali/assicurative specifiche.</p>

                <h2>Errori comuni</h2>
                <ul>
                    <li><strong>Confondere l'ingresso con la residenza:</strong> visitare la Svizzera non implica registrarsi; trasferirsi sì.</li>
                    <li><strong>Aspettare di avere una casa definitiva</strong> e superare i termini previsti.</li>
                    <li><strong>Non prenotare un appuntamento</strong> in tempo nei comuni con l'agenda satura.</li>
                    <li><strong>Non aggiornare il domicilio</strong> quando ti trasferisci (i traslochi e le partenze/arrivi sono molto importanti in Svizzera).</li>
                    <li><strong>Non preparare i documenti familiari</strong> in anticipo (apostille/traduzioni quando necessario).</li>
                </ul>

                <h2>Consigli pratici</h2>
                <ul>
                    <li>Cerca il sito ufficiale del tuo comune e controlla la sezione \"Anmeldung / Contrôle des habitants / Einwohnerkontrolle\".</li>
                    <li>Prepara un PDF con i documenti + copie cartacee.</li>
                    <li>Se la tua situazione non è standard (senza contratto, frontaliere, ricongiungimento), chiedi per iscritto l'elenco esatto dei requisiti.</li>
                    <li>Dopo la registrazione, dai priorità a: <a href=\"#/assicurazione-sanitaria-svizzera-lamal\">assicurazione sanitaria (LAMal)</a> e conto bancario.</li>
                    <li>Per il \"primo mese\", usa: <a href=\"#/checklist-tramites-llegada-suiza\">Checklist delle pratiche</a>.</li>
                </ul>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href=\"https://www.ch.ch/it/entrare-e-vivere-in-svizzera/\" target=\"_blank\" rel=\"noopener noreferrer\">ch.ch — Entrare e vivere in Svizzera</a></li>
                    <li><a href=\"https://www.sem.admin.ch/sem/it/home/themen/aufenthalt.html\" target=\"_blank\" rel=\"noopener noreferrer\">SEM — Soggiorno / Aufenthalt</a></li>
                    <li>Sito ufficiale del tuo comune (Controllo abitanti / Einwohnerkontrolle).</li>
                </ul>
            </div>
        `
    },

    // 3. Seguro de salud (LAMal)
    "articulo-lamal": {
        title: "Assicurazione sanitaria in Svizzera (LAMal): come funziona",
        description: "L'assicurazione medica è obbligatoria in Svizzera. Scopri come funziona la LAMal o assicurazione base per i residenti.",
        keywords: "assicurazione sanitaria svizzera, LAMal, KVG, vivere in Svizzera, sistema sanitario svizzero",
        category: "Assicurazione Sanitaria",
        hub: "salud",
        slug: "assicurazione-sanitaria-lamal-svizzera",
        readingTime: 12,
        featuredImage: "media/guides/seguro-medico-lamal-suiza.jpg",
        imageAlt: "Persona che controlla la sua tessera dell'assicurazione sanitaria svizzera insieme ai documenti della cassa malati",
        summary: "La LAMal è obbligatoria e privata, non è coperta automaticamente dallo Stato. Hai 3 mesi per stipularla, pagando gli arretrati dal primo giorno.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>Una delle maggiori differenze quando ci si trasferisce in Svizzera è che la sanità non funziona come una "previdenza sociale automatica". La copertura medica di base si stipula con un'assicuratore privato, ma è regolamentata dalla legge: la <strong>LAMal</strong> (KVG in tedesco). In parole povere: <strong>è obbligatoria, privata e standardizzata</strong> nella copertura.</p>

                <div class="callout warning">
                    <strong>Scadenza critica:</strong> hai tempo fino a <strong>3 mesi</strong> dal tuo arrivo/registrazione per stipulare l'assicurazione di base. La copertura è <strong>retroattiva</strong>: pagherai i premi dal giorno 1 anche se la stipuli in ritardo.
                </div>

                <h2>Come funziona il sistema</h2>
                <h3>1) Assicurazione di base (LAMal) vs complementare (LCA)</h3>
                <p>L'assicurazione di <strong>base</strong> copre l'essenziale e la sua copertura è identica per legge in tutte le compagnie assicurative. Le assicurazioni <strong>complementari</strong> (LCA/VVG) coprono gli extra (ad esempio, cure dentistiche, camera semiprivata/privata, occhiali, ecc.), ma non sono a accettazione obbligatoria: possono richiedere un questionario medico, imporre esclusioni o rifiutare la richiesta.</p>

                <h3>2) Cosa si paga: premio, franchigia e partecipazione ai costi</h3>
                <p>In Svizzera, essere assicurati non significa "tutto incluso". Il costo è composto da:</p>
                <ul>
                    <li><strong>Premio mensile:</strong> pagamento fisso (varia in base a cantone/comune, età e modello scelto).</li>
                    <li><strong>Franchigia:</strong> importo annuale che paghi tu prima che l'assicurazione inizi a rimborsare.</li>
                    <li><strong>Partecipazione ai costi (quote-part):</strong> dopo la franchigia, paghi una percentuale (con un tetto massimo annuale).</li>
                    <li><strong>Contributo ospedaliero:</strong> in caso di ricovero, solitamente si applica un importo giornaliero (per gli adulti).</li>
                </ul>
                <p>Per capire bene e scegliere la strategia (franchigia 300 vs 2500, ecc.), leggi: <a href="#/franquicia-seguro-medico-suiza">Franchigia e partecipazione ai costi</a>.</p>

                <h3>3) Modelli (libera scelta, medico di famiglia, telemedicina, HMO)</h3>
                <p>Una decisione che cambia molto il tuo premio è il <strong>modello</strong>. In alcuni modelli devi chiamare prima la telemedicina o andare dal tuo medico di famiglia prima di consultare uno specialista. Se non segui le regole del modello, puoi perdere i rimborsi. Per molti nuovi arrivati, il modello economico funziona bene… se si è disciplinati.</p>

                <h3>4) Scegliere e cambiare assicuratore (quando si fa)</h3>
                <p>Nella LAMal, l'assicurazione di base si rinnova e si può cambiare cassa malati seguendo regole di calendario precise. Di solito si confrontano i premi in autunno per l'anno successivo e si procede al cambio entro i termini. Le date esatte e le condizioni dipendono dal prodotto e dall'anno, quindi segui sempre le istruzioni ufficiali e le condizioni del tuo assicuratore.</p>

                <h3>5) Fatturazione: perché a volte "paghi prima"</h3>
                <p>È molto comune ricevere fatture dal medico o dall'ospedale. A seconda del sistema di fatturazione, potresti dover pagare tu e poi chiedere il rimborso, oppure il medico può fatturare direttamente all'assicurazione. In ogni caso, se non hai raggiunto la tua franchigia, il costo esce dalle tue tasche. Per questo il sistema viene percepito come "costoso" anche pagando i premi mensili.</p>

                <h2>Requisiti e regole</h2>
                <h3>1) Chi deve assicurarsi</h3>
                <p>In generale, ogni persona residente in Svizzera deve essere assicurata. Esistono eccezioni e regole specifiche (ad esempio, per alcuni casi di frontalieri o studenti). Se il tuo caso è "particolare", conferma per iscritto con il tuo cantone cosa si applica.</p>

                <h3>2) Infortuni: l'errore più costoso</h3>
                <p>Se lavori, è possibile che tu abbia un'<strong>assicurazione contro gli infortuni</strong> pagata dal datore di lavoro (a volte anche per infortuni non professionali, a seconda delle ore settimanali). In tal caso, normalmente puoi escludere la copertura infortuni dall'assicurazione di base e abbassare il premio. Se lasci il lavoro, devi <strong>riattivare</strong> gli infortuni nella tua LAMal per non rimanere scoperto. Molte persone se ne dimenticano proprio nel momento peggiore.</p>

                <h3>3) Riduzione dei premi (sussidio) e aiuti</h3>
                <p>Esiste un sistema di <strong>riduzione dei premi</strong> per persone e famiglie con redditi modesti, gestito a livello cantonale (le regole, le soglie e il processo <strong>variano per cantone</strong>). Se hai un budget limitato, questo punto è fondamentale: molte persone non lo richiedono per mancanza di informazioni.</p>

                <h3>4) Cosa copre l'assicurazione di base</h3>
                <p>L'assicurazione di base copre l'assistenza medica necessaria secondo la normativa. In termini pratici, solitamente include:</p>
                <ul>
                    <li>Consulti di medicina generale e specialistica (secondo il modello/invio).</li>
                    <li>Medicinali prescritti inclusi nelle liste ufficiali.</li>
                    <li>Ospedalizzazione in <strong>reparto comune</strong> (normalmente nel tuo cantone, salvo urgenze o regole specifiche).</li>
                    <li>Maternità con condizioni particolari.</li>
                </ul>

                <h3>5) Cosa non copre (o copre in modo limitato)</h3>
                <ul>
                    <li><strong>Dentista:</strong> la maggior parte dei trattamenti dentistici di routine si paga a parte o tramite assicurazione complementare.</li>
                    <li><strong>Occhiali/lenti a contatto:</strong> spesso con limiti o fuori dall'assicurazione di base.</li>
                    <li><strong>Camera privata/semiprivata</strong> in ospedale: normalmente richiede un'assicurazione complementare.</li>
                </ul>

                <h2>Esempi concreti</h2>
                <h3>Esempio 1 — Persona sana che vuole pagare meno al mese</h3>
                <p>Se solitamente vai poco dal medico, è comune scegliere una franchigia alta per ridurre il premio mensile. Il "rischio" è che, se in quell'anno hai un'urgenza o un trattamento costoso, pagherai di più all'inizio.</p>

                <h3>Esempio 2 — Famiglia con bambini piccoli</h3>
                <p>Con i bambini, le visite mediche sono più frequenti. Molte famiglie preferiscono franchigie più basse per avere prevedibilità. Conviene anche scegliere un modello che si adatti a pediatria e urgenze.</p>

                <h3>Esempio 3 — Arrivi e non stipuli entro i termini</h3>
                <p>Se lasci passare i 3 mesi, non "risparmi" sui premi: ti fattureranno retroattivamente dal giorno 1 e potrebbero persino assegnarti d'ufficio a una cassa malati. Pianifica questa pratica entro il <a href="#/tramites-llegada-suiza">primo mese</a>.</p>

                <h3>Esempio 4 — Calcolo del "peggiore dei casi annuale" (per decidere la franchigia)</h3>
                <p>Un modo pratico per scegliere la franchigia è calcolare il tuo "peggiore dei casi". Ad esempio: se paghi 350 CHF/mese di premio (4.200 CHF/anno) e scegli una franchigia di 2.500 CHF, il tuo anno peggiore potrebbe assomigliare a: premio annuale + franchigia + partecipazione ai costi massima. Questo ti dà una cifra limite per il tuo budget. Poi confrontala con lo scenario della franchigia 300 (premio più alto, franchigia più bassa) e decidi cosa ti dà più tranquillità.</p>

                <h2>Errori comuni</h2>
                <ul>
                    <li><strong>Scegliere solo in base al prezzo:</strong> senza capire il modello, potresti finire per pagare fatture non rimborsate.</li>
                    <li><strong>Confondere assicurazione di base e complementare:</strong> dentista e camera privata non sono "inclusi" di default.</li>
                    <li><strong>Sbagliare la scelta della franchigia:</strong> pagare un premio basso non conviene se ogni anno hai spese mediche prevedibili.</li>
                    <li><strong>Non aggiornare gli infortuni quando si cambia lavoro:</strong> duplichi la copertura o rimani senza quella corretta.</li>
                </ul>

                <h2>Consigli pratici</h2>
                <ul>
                    <li>Confronta sul portale ufficiale <a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo</a> (premi per cantone/comune e modelli).</li>
                    <li>Calcola il tuo "peggiore dei casi annuale": premio + franchigia + partecipazione ai costi, per decidere con la testa.</li>
                    <li>Se intendi stipulare assicurazioni complementari (dentista, ecc.), solitamente è più facile farlo quando si è sani e prima di eventuali diagnosi.</li>
                    <li>Se il tuo budget è limitato, verifica il tema della <strong>riduzione dei premi</strong> del tuo cantone (sussidio).</li>
                    <li>Collega questa guida con <a href="#/franquicia-seguro-medico-suiza">franchigia/partecipazione ai costi</a> e <a href="#/presupuesto-suiza">costo della vita</a>.</li>
                </ul>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo — Confronto ufficiale dei premi</a></li>
                    <li><a href="https://www.bag.admin.ch/" target="_blank" rel="noopener noreferrer">UFSP / BAG — Ufficio Federale della Sanità Pubblica</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portale ufficiale svizzero</a></li>
                </ul>
            </div>
        `
    },

    // 4. Franquicia y copago en el sistema de salud
    "articulo-franquicia": {
        title: "Franchigia e partecipazione ai costi nel sistema sanitario svizzero",
        description: "Spiegazione dettagliata della franchigia e del copagamento (partecipazione ai costi) nelle assicurazioni mediche svizzere (LAMal).",
        keywords: "franchigia LAMal, partecipazione ai costi svizzera, quote-part, selbstbehalt, assicurazione medica",
        audience: 'resident',
        featuredImage: "media/guides/franquicia-seguro-medico-suiza.jpg",
        imageAlt: "Immagine concettuale di risparmio e salute nel sistema svizzero",
        category: `Costi Medici`,
        hub: 'salud',
        slug: "franchigia-partecipazione-costi-svizzera",
        readingTime: 4,
        summary: "In Svizzera paghi il 100% delle prime spese mediche fino a coprire la franchigia scelta. Successivamente, paghi il 10% di partecipazione ai costi.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>Anche dopo aver pagato il premio mensile dell'assicurazione di base (LAMal), per la maggior parte delle prestazioni mediche dovrai partecipare ai costi. La tua partecipazione annuale si compone di tre elementi: la franchigia, la partecipazione ai costi (10%) e il contributo ospedaliero.</p>

                <h2>1) La Franchigia (Franchise)</h2>
                <p>La franchigia è l'importo annuale fisso che devi pagare interamente di tasca tua per le prestazioni coperte dall'assicurazione prima che quest'ultima inizi a pagare. È un sistema di "scoperto" annuale.</p>
                <ul>
                    <li><strong>Adulti:</strong> puoi scegliere tra diverse franchigie: 300, 500, 1000, 1500, 2000 o 2500 CHF all'anno.</li>
                    <li><strong>Bambini:</strong> solitamente la franchigia è 0 CHF, ma può essere aumentata fino a 600 CHF per ridurre il premio.</li>
                    <li><strong>Regola:</strong> più alta è la franchigia scelta, più basso sarà il tuo premio mensile (lo sconto sul premio è regolamentato).</li>
                </ul>

                <h2>2) La partecipazione ai costi (Quote-part / Selbstbehalt)</h2>
                <p>Una volta superata la tua franchigia (ovvero quando hai già pagato di tasca tua l'importo scelto), l'assicurazione inizia a coprire le spese. Tuttavia, dovrai ancora pagare il <strong>10%</strong> di ogni fattura che eccede la franchigia.</p>
                <p>Questa partecipazione al 10% ha un <strong>tetto massimo annuale</strong>:</p>
                <ul>
                    <li><strong>Adulti:</strong> massimo 700 CHF all'anno.</li>
                    <li><strong>Bambini:</strong> massimo 350 CHF all'anno.</li>
                </ul>
                <p>Una volta raggiunto questo tetto, la tua cassa malati copre il 100% dei costi medici (sempre per quanto riguarda le prestazioni della LAMal).</p>

                <h2>3) Contributo ospedaliero</h2>
                <p>In caso di ricovero ospedaliero, gli adulti devono pagare un contributo fisso di <strong>15 CHF al giorno</strong>, senza limiti di tempo. Questo importo non rientra né nella franchigia né nella partecipazione ai costi (con alcune eccezioni, ad esempio per la maternità).</p>

                <h2>Riepilogo dei costi massimi (Scenario peggiore)</h2>
                <p>Se hai una salute cagionevole o hai un incidente grave durante l'anno, il costo massimo annuale che dovrai sostenere oltre al premio sarà:</p>
                <div class="callout">
                    <strong>Adulto con franchigia 2500:</strong> 2.500 (franchigia) + 700 (10% max) = <strong>3.200 CHF/anno</strong> (+ premi + ospedale).<br>
                    <strong>Adulto con franchigia 300:</strong> 300 (franchigia) + 700 (10% max) = <strong>1.000 CHF/anno</strong> (+ premi + ospedale).
                </div>

                <h2>Quale franchigia scegliere?</h2>
                <p>Statisticamente e finanziariamente, in Svizzera ha senso scegliere solo le due franchigie estreme:</p>
                <ul>
                    <li><strong>Franchigia 2500:</strong> se sei sano, vai raramente dal medico e hai una riserva di risparmio per coprire i 3200 CHF in caso di emergenza. È l'opzione che fa risparmiare di più a lungo termine grazie al premio basso.</li>
                    <li><strong>Franchigia 300:</strong> se vai spesso dal medico (spese superiori a 1800-2000 CHF all'anno) o se non hai risparmi da parte e preferisci la tranquillità di un premio mensile più alto ma spese impreviste basse.</li>
                    <li><strong>Le franchigie intermedie:</strong> raramente sono vantaggiose dal punto di vista matematico rispetto alle due opzioni citate.</li>
                </ul>
            </div>
        `
    },

    // 5. Impuestos en Suiza: federal, cantonal y comunal
    "articulo-impuestos": {
        title: "Imposte in Svizzera: federali, cantonali e comunali",
        description: "Tutto sul sistema di tripla imposizione in Svizzera: imposta federale, cantonale e comunale.",
        keywords: "tasse svizzera, fiscalità svizzera, imposte cantoni, imposta alla fonte",
        audience: 'worker',
        featuredImage: "media/guides/impuestos-generales-suiza.jpg",
        category: `Sistema Fiscale`,
        hub: 'impuestos',
        readingTime: 5,
        summary: `In Svizzera, si pagano le tasse a 3 livelli.`,
        content: `<div class="page-header">
<h1>Imposte in Svizzera: fiscalità federale, cantonale e comunale</h1>
</div>
<div class="contenuto-articolo">
<p>La Svizzera è un paese federale, motivo per cui ha un sistema fiscale a tre livelli. A differenza di molti paesi in cui vengono raccolte a livello nazionale e poi distribuite, in Svizzera i cittadini pagano le tasse in tre ambiti diversi.</p>

<h2>1. L'imposta federale diretta</h2>
<p>È uguale in tutta la Svizzera e viene riscosso dalla Confederazione. Tassa il reddito degli individui (ma non i loro beni) e gli utili delle aziende. Ha aliquote marcatamente progressive, ma in generale non supera l'11,5% del reddito.</p>

<h2>2. L'imposta cantonale</h2>
<p>Ognuno dei 26 cantoni ha la propria legislazione fiscale. Stabiliscono le scale, le detrazioni e la scala della progressività. Per questo motivo, il carico fiscale varia enormemente se vivi a Ginevra (tassa elevata) rispetto a se vivi a Zugo o Svitto (tassa bassa). I cantoni tassano sia il reddito (reddito) che il patrimonio (patrimonio).</p>

<h2>3. L'imposta comunale</h2>
<p>Gli oltre 2.000 comuni svizzeri determinano ogni anno il loro coefficiente fiscale, spesso espresso come percentuale o moltiplicatore in base all'imposta cantonale di base. Pertanto, spostarsi di pochi chilometri verso il comune vicino può aumentare o ridurre notevolmente le tasse.</p>

<div class="callout">
<strong>Pilastro importante:</strong> in Svizzera prevale il "federalismo della concorrenza fiscale". I Cantoni competono tra loro attirando imprese e contribuenti attraverso le aliquote fiscali. 
</div>
</div>`
    },

    // 6. Impuesto a la fuente
    "articulo-impuesto-fuente": {
        title: "L'imposta alla fonte (Quellensteuer) spiegata",
        description: "Cos'è l'imposta alla fonte, chi riguarda e come viene calcolata in Svizzera per i lavoratori stranieri.",
        keywords: "imposta alla fonte svizzera, quellensteuer, tassazione stranieri svizzera",
        audience: 'worker',
        featuredImage: "media/guides/impuesto-fuente-suiza.jpg",
        category: `Ritenute`,
        hub: 'impuestos',
        readingTime: 3,
        dateUpdated: 'Actualizado recentemente',
        summary: `Come funziona la trattenuta sulle tasse direttamente dalla busta paga mensile per stranieri e frontalieri.`,
        content: `<div class="page-header">
<h1>Imposta alla fonte (Quellensteuer / Impôt à la source)</h1>
</div>
<div class="contenuto-articolo">
<p>La maggior parte dei cittadini svizzeri e dei residenti permanenti (permesso C) compila la dichiarazione dei redditi una volta all'anno e successivamente paga le tasse. Tuttavia, per gli stranieri appena arrivati è prevista l'<strong>imposta alla fonte</strong>.</p>

<h2>Chi è sottoposto?</h2>
<p>Colpisce principalmente i lavoratori stranieri in possesso di un permesso di soggiorno <strong>L o B</strong> e i lavoratori frontalieri (permesso G) provenienti da alcuni Paesi.</p>

<h2>Come funziona?</h2>
<p>Il tuo datore di lavoro svizzero detrae questa imposta direttamente dal tuo stipendio lordo ogni mese, allo stesso modo in cui funziona la ritenuta d'imposta sul reddito delle persone fisiche sulla busta paga in Spagna. Il datore di lavoro trasferisce poi il denaro all'amministrazione fiscale cantonale. Le tariffe applicate dipendono dal tuo stato civile, dal numero di figli a carico, dall'attività lavorativa del tuo coniuge e dalle tabelle del cantone corrispondente (tariffe A, B, C...).</p>

<h2>Modifica della dichiarazione dei redditi</h2>
<p>A seconda del cantone, fino a marzo dell'anno successivo potresti avere il diritto di chiedere una <em>correzione dell'imposta alla fonte</em> se hai sostenuto spese deducibili (come previdenza del 3° pilastro, spese per l'assistenza all'infanzia, donazioni, riciclaggio didattico).<br/>
<strong>Limite importante:</strong> Le persone con permesso B che superano la soglia salariale annua lorda di 120.000 CHF sono obbligate per impostazione predefinita a presentare la dichiarazione dei redditi ordinaria, anche se continuano a essere trattenute mese per mese a causa di quella definitiva.</p>
</div>`
    },

    // 7. Seguros Sociales
    "articulo-seguros-sociales": {
        title: "Assicurazioni sociali in Svizzera: AVS, AI, LPP e Assicurazione Disoccupazione",
        description: "Dettaglio delle assicurazioni sociali svizzere: primo pilastro (AVS/AI), secondo pilastro (LPP/Cassa pensioni) e disoccupazione.",
        keywords: "AVS svizzera, LPP, disoccupazione svizzera, sistema pensionistico svizzero, tre pilastri svizzera",
        audience: 'worker',
        category: 'Lavoro',
        hub: 'trabajo',
        slug: "assicurazioni-sociali-svizzera",
        readingTime: 6,
        featuredImage: "media/guides/seguros-sociales-suiza.jpg",
        imageAlt: "Illustrazione concettuale dei tre pilastri del sistema di previdenza svizzero (AVS, LPP, 3° pilastro)",
        summary: "Il sistema pensionistico svizzero si basa su 3 pilastri: l'AVS (statale), la LPP (assicurazione professionale obbligatoria) e il 3° pilastro (risparmio privato).",
        content: `<div class="page-header">
<h1>Assicurazioni sociali e sistema pensionistico svizzero</h1>
</div>
<div class="contenuto-articolo">
<p>Una parte dello stipendio lordo è obbligatoriamente destinata al sistema di previdenza sociale. La Svizzera basa la sua previdenza per la vecchiaia su un peculiare modello a tre pilastri.</p>

<h2>1° pilastro: AVS e AI (assicurazione per la vecchiaia e la sopravvivenza, assicurazione per l'invalidità)</h2>
<p>Si tratta di una tassa di distribuzione statale, obbligatoria per tutti i residenti o lavoratori. Il suo scopo è quello di garantire il minimo vitale in età avanzata o in caso di morte e invalidità.<br/>
<strong>Contributo:</strong> di norma ammonta al 10,6% circa del tuo stipendio, ma il datore di lavoro si assume la metà (5,3%) e tu l'altra metà. Sembra detratto direttamente dal libro paga.</p>

<h2>2° Pilastro: LPP o Fondo Pensione (Previdenza Professionale)</h2>
<p>A partire dal 1° gennaio, dopo aver compiuto 17 anni (per i rischi) e 24 anni (per l'avere di vecchiaia), e finché il salario supera una determinata soglia, i dipendenti contribuiscono a questo fondo di capitalizzazione privato. 
L'obiettivo è che, in aggiunta al primo pilastro, mantenete durante la pensione un tenore di vita vicino ai vostri ultimi anni di lavoro. Questo denaro è tuo e si accumula nel tuo conto individuale con i rendimenti. Se lasci permanentemente il paese fuori dall'Europa, a volte puoi recuperare parte di questo fondo.</p>

<h2>Assicurazione contro la disoccupazione (ALV/AC - Disoccupazione)</h2>
<p>È obbligatorio anche il contributo all'assicurazione contro la disoccupazione (metà pagato dal dipendente e metà dal datore di lavoro). Se sfortunatamente perdi il lavoro dopo aver contribuito per almeno 12 mesi, questa organizzazione pagherà circa il 70% o l'80% (se hai figli) del tuo ultimo stipendio, in base al tuo impegno attivo e dimostrato nella ricerca di un nuovo lavoro.</p>

<h2>Riepilogo generale:</h2>
<p>Quando il contratto arriva con una cifra mensile lorda, lo stipendio netto viene percepito al netto dell'AVS/AI, della pensione professionale, dell'assicurazione contro la disoccupazione e (in molti casi) dell'imposta alla fonte.</p>
</div>`
    },

    // 7b. RAV / disoccupazione
    "articulo-rav-paro": {
        title: "RAV e disoccupazione in Svizzera: requisiti, passi e obblighi",
        description: "Guida pratica all’assicurazione contro la disoccupazione (ALV/AC): iscrizione al RAV, documenti, obblighi e sanzioni.",
        keywords: "RAV svizzera, disoccupazione svizzera, assicurazione disoccupazione svizzera, ALV AC",
        audience: "worker",
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        category: "Lavoro",
        hub: "trabajo",
        slug: "rav-paro-suiza",
        readingTime: 7,
        dateUpdated: "Marzo 2026",
        summary: "Il RAV può aiutare dopo la perdita del lavoro, ma scadenze e prove della ricerca sono fondamentali.",
        content: `<div class="page-header">
<h1>RAV e disoccupazione in Svizzera</h1>
</div>
<div class="contenuto-articolo">
<p>In Svizzera la disoccupazione si gestisce tramite il <strong>RAV</strong> e una <strong>cassa di disoccupazione</strong> che paga l’indennità. È un sistema efficace ma rigoroso.</p>

<h2>Primi passi</h2>
<ol>
  <li>Iscriviti il prima possibile.</li>
  <li>Scegli una cassa e raccogli i documenti (contratto, lettera di licenziamento, permesso, buste paga).</li>
  <li>Traccia le candidature e conserva le prove.</li>
</ol>

<h2>Obblighi</h2>
<ul>
  <li>Ricerca di lavoro documentata</li>
  <li>Presenza agli appuntamenti RAV</li>
</ul>
</div>`
    },

    "articulo-salarios": {
        title: "Salari in Svizzera per settore e regione: quanto si guadagna?",
        description: "Scopri qual è il salario medio in Svizzera, le differenze per cantone, il calcolatore Salarium e se esiste il salario minimo.",
        keywords: "salario svizzera, stipendio medio svizzera, salarium, salario minimo ginevra",
        category: 'Mercato del Lavoro',
        hub: 'trabajo',
        slug: "salari-stipendio-svizzera",
        readingTime: 5,
        featuredImage: "media/guides/salarios-sueldo-suiza.jpg",
        imageAlt: "Certificado de salario suizo (Lohnausweis) con monete di franchi svizzeri su una scrivania professionale",
        summary: 'La Svizzera ha salari molto alti ma costi in proporzione. Solo pochi cantoni (es. Ginevra, Neuchâtel) hanno un salario minimo legale.',
        content: `
            <div class="article-content">
                <p>I salari in Svizzera sono tra i più alti al mondo, ma lo è anche il costo della vita. È fondamentale capire che il tuo reale potere d'acquisto dipenderà da quanto guadagni rispetto alle spese fisse del tuo cantone.</p>

                <h2>Esiste un salario minimo legale in Svizzera?</h2>
                <p>A livello federale <strong>non esiste</strong> un salario minimo interprofessionale. Tuttavia, alcuni cantoni hanno introdotto i propri salari minimi orari. Ad esempio, Ginevra o Neuchâtel hanno salari minimi legali che si aggirano intorno ai 23-24 CHF l'ora (circa 4.000 CHF lordi al mese a tempo pieno).</p>

                <h2>Il calcolatore Salarium</h2>
                <p>Se vuoi sapere se un'offerta di lavoro è equa per il tuo settore, esperienza, età e cantone, lo strumento più affidabile è il <strong>Salarium</strong>, un calcolatore statistico ufficiale gestito dall'Ufficio Federale di Statistica (UST).</p>
                
                <div class="callout info">
                    <strong>Link utile:</strong> <a href="https://www.bfs.admin.ch/bfs/it/home/statistiche/lavoro-remunerazione/salari-redditi-costo-lavoro/livello-salari-svizzera/salarium.html" target="_blank">Calcolatore dei Salari Salarium</a>
                </div>

                <h2>I Contratti Collettivi (CCL)</h2>
                <p>Molti settori (gastronomia, edilizia, parrucchieri) sono regolati da Contratti Collettivi di Lavoro (CCL / GAV). Questi contratti stabiliscono salari minimi obbligatori, numero di giorni di vacanza e pagamento degli straordinari, offrendo una solida protezione al lavoratore.</p>
            </div>
        `
    },

    "articulo-contratos": {
        title: "Contratti di lavoro in Svizzera: diritti e obblighi",
        description: "Tutto sul contratto di lavoro svizzero (CDI, CDD), le vacanze legali e il pagamento dello stipendio in caso di malattia.",
        keywords: "contratto lavoro svizzera, diritti lavoratore svizzera, vacanze svizzera, codice delle obbligazioni",
        category: 'Contratti',
        hub: 'trabajo',
        slug: "contratti-di-lavoro-svizzera",
        readingTime: 4,
        featuredImage: "media/guides/contratos-de-trabajo-suiza.jpg",
        imageAlt: "Due persone che si stringono la mano al momento della firma di un contratto di lavoro",
        summary: 'Il mercato del lavoro svizzero è molto liberale. Il licenziamento è libero (rispettando i termini di preavviso) e le vacanze minime sono 4 settimane.',
        content: `
            <div class="article-content">
                <p>Il mercato del lavoro svizzero è molto flessibile e le condizioni sono regolate fondamentalmente dal Codice delle Obbligazioni (CO) e dai contratti collettivi di lavoro (CCL).</p>

                <h2>Tipi di contratto</h2>
                <ul>
                    <li><strong>Contratto a tempo indeterminato (CDI):</strong> è il più comune. Non ha una data di scadenza e permette al datore di lavoro o al dipendente di interromperlo, sempre rispettando il termine di preavviso concordato o legale.</li>
                    <li><strong>Contratto a tempo determinato (CDD):</strong> viene firmato per un periodo specifico (ad esempio, stagione invernale, sostituzione maternità).</li>
                    <li><strong>Lavoro interinale:</strong> tramite agenzie (Adecco, Manpower...), soggetto a regole specifiche di contribuzione e preavviso molto flessibile.</li>
                </ul>

                <h2>Orario e vacanze</h2>
                <p>Per legge, ogni lavoratore in Svizzera ha diritto a un <strong>minimo di 4 settimane</strong> di vacanze pagate all'anno (5 settimane se ha meno di 20 anni). La giornata lavorativa a "tempo pieno" varia solitamente tra le 40 e le 45 ore settimanali.</p>

                <h2>Malattia e infortuni</h2>
                <p>Quasi tutti i grandi datori di lavoro dispongono di un'assicurazione per la perdita di guadagno in caso di malattia che garantisce la ricezione dello stipendio durante la convalescenza. Inoltre, il datore di lavoro paga obbligatoriamente un'<strong>assicurazione contro gli infortuni professionali</strong>.</p>
            </div>
        `
    },

    "articulo-periodo-prueba": {
        title: "Il periodo di prova e i termini di preavviso in Svizzera",
        description: "Conosci i tuoi diritti durante il periodo di prova svizzero e quanto tempo di preavviso devi dare per dimetterti o essere licenziato.",
        keywords: "periodo prova svizzera, preavviso licenziamento svizzera, probezeit",
        audience: 'worker',
        category: 'Trabajo',
        hub: 'trabajo',
        slug: "periodo-prova-preavviso-svizzera",
        readingTime: 3,
        featuredImage: "media/guides/periodo-prueba-preaviso-suiza.jpg",
        imageAlt: "Riunione professionale di revisione alla fine del periodo di prova in un ufficio con vista sulle montagne svizzere",
        summary: 'Il periodo di prova standard è di 1 a 3 mesi. Durante questo periodo, ciascuna delle parti può rescindere il contratto con un preavviso di 7 giorni.',
        content: `
            <div class="article-content">
                <h2>Il Periodo di Prova (Probezeit / Temps d'essai)</h2>
                <p>Il primo mese di un contratto a tempo indeterminato è sempre considerato periodo di prova dalla legge, a meno che il contratto non specifichi altrimenti. Questo periodo può essere esteso per iscritto fino a un <strong>massimo di tre mesi</strong>.</p>
                <p>Durante questo tempo, entrambe le parti possono annullare il contratto con un <strong>preavviso di sette giorni</strong> (naturali) e non è necessario fornire ulteriori giustificazioni.</p>

                <h2>I Termini di Preavviso (Kündigungsfrist / Délai de congé)</h2>
                <p>Una volta superato il periodo de prova, si applicano i termini legali o quelli concordati per contratto scritto (o CCL). Secondo il Codice delle Obbligazioni, il quadro generale è:</p>
                <ul>
                    <li><strong>1° anno di servizio:</strong> 1 mese (disdetta per la fine del mese).</li>
                    <li><strong>Dal 2° al 9° anno di servizio:</strong> 2 mesi (disdetta per la fine del mese).</li>
                    <li><strong>A partire dal 10° anno de servizio:</strong> 3 mesi (disdetta per la fine del mese).</li>
                </ul>

                <div class="callout info">
                    <strong>Importante:</strong> Il preavviso deve sempre arrivare nelle mani del tuo capo PRIMA dell'ultimo giorno lavorativo del mese affinché inizi a contare dal mese successivo.
                </div>
            </div>
        `
    },

    "articulo-buscar-empleo": {
        title: "Ricerca di un lavoro in Svizzera: Piattaforme e Strategie",
        description: "Dove cercare lavoro, come creare il tuo CV in stile svizzero (foto, certificati) e i principali portali di lavoro.",
        keywords: "cercare lavoro svizzera, cv svizzera, jobup, jobs.ch",
        category: 'Candidature',
        hub: 'trabajo',
        slug: "cercare-lavoro-svizzera",
        readingTime: 4,
        featuredImage: "media/guides/buscar-empleo-suiza.jpg",
        imageAlt: "Persona in cerca di lavoro in Svizzera in un caffè con vista su Zurigo che ripassa il proprio CV",
        summary: 'Il CV in stile svizzero deve includere foto, data di nascita e stato civile. Le piattaforme più utilizzate sono Jobup, Jobs.ch e LinkedIn.',
        content: `
            <div class="article-content">
                <p>La Svizzera ha un mercato del lavoro dinamico, guidato non solo da grandi aziende farmaceutiche, banche e orologiai, ma anche da migliaia di PMI.</p>
<p>Se stai pianificando il trasferimento, vedi anche <a href="#/mudarse-a-suiza-desde-espana">Trasferirsi in Svizzera dalla Spagna: guida passo passo</a>.</p>

<h2>Il curriculum (dossier di candidatura)</h2>
<p>Il modello svizzero è tradizionalmente formale e completo. Un dossier standard svizzero dovrebbe includere, se richiesto:</p>
<ul>
<li>Il tuo CV (con fotografia professionale, informazioni sulla nascita e permesso di soggiorno se ne hai uno).</li>
<li>Una lettera di motivazione strutturata nella lingua dell'offerta.</li>
<li>Copie dei diplomi di formazione.</li>
<li><strong>Certificati di lavoro precedenti</strong> (Arbeitszeugnis). Sono molto importanti in Svizzera; Sono lettere dei tuoi precedenti capi che valutano qualitativamente le tue capacità in un formato standardizzato.</li>
</ul>

<h2>Principali portali di lavoro in Svizzera</h2>
<ul>
<li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
<li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
<li><a href="https://ch.indeed.com/" target="_blank" rel="noopener noreferrer">indeed.ch</a></li>
<li><a href="https://www.job-room.ch/" target="_blank" rel="noopener noreferrer">job-room.ch</a> (portale del RAV)</li>
</ul>

<div class="callout info">
<strong>Consiglio pratico</strong>
<p>In Svizzera spesso è più efficace cercare lavoro nella lingua locale. Invece di cercare in spagnolo, puoi cercare direttamente in tedesco, francese o italiano.</p>
<p><strong>Esempio di ricerca su Google:</strong> <code>Glaser Arbeit Zürich</code></p>
</div>

                <h3>Link utili</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.arbeit.swiss/" target="_blank" rel="noopener noreferrer">arbeit.swiss</a> (RAV / SECO)</li>
                </ul>
            </div>
        `
    },

    // 12. Alquiler de vivienda
    "articulo-alquiler": {
        title: "Affittare una casa in Svizzera: il processo passo dopo passo",
        description: "Documenti necessari (Betreibungsauszug) e il dossier necessario per ottenere un affitto svizzero in un mercato competitivo.",
        keywords: "affittare appartamento svizzera, appartamento ginevra zurigo, dossier affitto svizzera",
        category: 'Contratto di Affitto',
        hub: 'vivienda',
        slug: "affittare-casa-svizzera",
        readingTime: 12,
        featuredImage: "media/guides/alquilar-vivienda-suiza.jpg",
        imageAlt: "Persona che riceve le chiavi del suo appartamento dalle mani di un agente immobiliare in Svizzera",
        summary: "Il mercato degli affitti è molto competitivo. Serve un dossier impeccabile: estratto esecuzioni (poursuites), contratto e le ultime 3 buste paga.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>Affittare una casa in Svizzera spesso sorprende per due motivi: (1) la <strong>concorrenza</strong> in certe zone e (2) l'importanza del <strong>dossier</strong>. Non basta "poter pagare": le agenzie (régies/Verwaltungen) cercano profili stabili, con documentazione completa e senza precedenti di morosità. La buona notizia è che, se capisci il processo e ti organizzi, la tua probabilità di successo aumenta notevolmente.</p>

                <div class="callout info">
                    <strong>Punti chiave:</strong>
                    <ul>
                        <li>Prepara il tuo dossier <strong>prima</strong> di iniziare a visitare gli appartamenti.</li>
                        <li>Il documento principale è il <strong>Betreibungsauszug / extrait des poursuites</strong> (certificato di esecuzioni/debiti in Svizzera).</li>
                        <li>Pianifica il "costo d'entrata": cauzione (fino a 3 mesi), primo mese e trasloco.</li>
                    </ul>
                </div>

                <h2>Come funziona il sistema</h2>
                <h3>1) Dove si pubblicano gli appartamenti</h3>
                <p>La maggior parte dell'offerta si trova su portali come <a href="https://www.homegate.ch/" target="_blank" rel="noopener noreferrer">Homegate</a> o <a href="https://www.immoscout24.ch/" target="_blank" rel="noopener noreferrer">ImmoScout24</a>. Esistono anche siti di singole agenzie e, in alcune zone, gruppi locali. Consiglio pratico: crea avvisi per zona, fascia di prezzo e "Zimmer" (locali) per reagire rapidamente.</p>

                <h3>2) Visita e candidatura</h3>
                <p>In Svizzera, visitare un appartamento non significa "prenotarlo". Normalmente si visita e poi si presenta una <strong>candidatura</strong> formale con il dossier. Nelle visite collettive possono esserci decine di candidati. Chi consegna un dossier completo e in tempi brevi ha solitamente un vantaggio.</p>

                <h3>3) Selezione e contratto</h3>
                <p>L'agenzia verifica la solvibilità e il profilo del nucleo familiare. Se vieni selezionato, ti inviano il contratto o la conferma. Altrimenti, è comune non ricevere spiegazioni dettagliate.</p>

                <h3>4) Consegna: cauzione, inventario e assicurazioni</h3>
                <p>Prima della consegna delle chiavi, solitamente si formalizza:</p>
                <ul>
                    <li><strong>Cauzione (garanzia):</strong> per le abitazioni, è limitata a un massimo di 3 mesi di affitto e viene depositata su un conto bloccato a tuo nome (o tramite assicurazione di cauzione).</li>
                    <li><strong>Inventario/stato dell'appartamento:</strong> l' "état des lieux" è fondamentale. Si registrano i difetti; se non lo fai, potrebbero esserti addebitati all'uscita.</li>
                    <li><strong>Responsabilità Civile (RC):</strong> molto frequente per coprire danni a terzi (ad esempio, una perdita d'acqua).</li>
                </ul>

                <h2>Requisiti e regole</h2>
                <h3>Il dossier dell'inquilino (cosa viene richiesto)</h3>
                <p>Le agenzie immobiliari richiedono documentazione per verificare identità, reddito e "storia di pagamenti". Un dossier tipico include:</p>
                <ul>
                    <li>Copia di Carta d'Identità/passaporto e, se in possesso, permesso di soggiorno (altrimenti, contratto di lavoro + prova di registrazione in comune).</li>
                    <li>Le <strong>ultime 3 buste paga</strong> (se sei appena arrivato: contratto di lavoro + lettera dell'azienda con stipendio e data d'inizio).</li>
                    <li><strong>Betreibungsauszug / extrait des poursuites</strong> (certificato di assenza di esecuzioni in Svizzera). Costa circa 18-20 CHF e si richiede al comune di residenza.</li>
                    <li>Modulo dell'agenzia (persone che vivranno nell'appartamento, stipendio, contatti, ecc.).</li>
                    <li>In alcuni casi: RC, referenze o una breve lettera di presentazione.</li>
                </ul>

                <h3>Regola d'oro: un terzo dello stipendio</h3>
                <p>Molte agenzie applicano una regola di prudenza: l'affitto mensile non dovrebbe superare circa <strong>1/3</strong> del reddito lordo familiare. Se lo supera, possono rifiutare la candidatura anche se "nel tuo budget" i conti quadrano. Per questo motivo, a volte conviene ampliare la zona di ricerca o regolare le aspettative all'inizio.</p>

                <h3>"Zimmer" e "Nebenkosten/charges"</h3>
                <p>Due dettagli che causano spesso malintesi:</p>
                <ul>
                    <li><strong>Zimmer:</strong> il soggiorno conta come un locale. Un "3.5 locali" solitamente è soggiorno + 2 camere + un mezzo locale.</li>
                    <li><strong>Charges/Nebenkosten:</strong> possono includere riscaldamento/acqua calda e spese comuni, ma non sempre. Chiedi cosa è incluso e cosa no.</li>
                </ul>

                <h3>Il contratto: preavviso, date e disdetta</h3>
                <p>La parte legale varia in base al contratto e al cantone, ma ci sono schemi comuni: il contratto ha spesso <strong>date di disdetta</strong> specifiche (ad esempio, fine trimestre) e un <strong>preavviso</strong> (spesso di diversi mesi). Inoltre, in alcuni cantoni si usano moduli ufficiali per comunicare aumenti d'affitto o disdetta. Traduzione pratica: non dare per scontato di potertene andare "quando vuoi" con 30 giorni di preavviso.</p>

                <h3>Entrata e uscita: l'inventario (état des lieux) è la tua assicurazione</h3>
                <p>Il giorno della consegna delle chiavi (entrata) si effettua un inventario dello stato dell'appartamento. Fai foto e annota ogni difetto (graffi, macchie, elettrodomestici, umidità). All'uscita, si confronta lo stato finale con l'inventario iniziale per decidere cosa rientra nell'usura normale e cosa ti viene addebitato. Moltissime dispute nascono dal non aver documentato bene l'entrata.</p>

                <h2>Esempi concreti</h2>
                <h3>Esempio 1 — Arrivi senza ancora buste paga svizzere</h3>
                <p>Se non hai ancora 3 buste paga, rafforza il dossier con: contratto a tempo indeterminato, lettera dell'azienda con stipendio e data d'inizio, e un breve testo esplicativo. Non garantisce il successo, ma migliora le tue opzioni.</p>

                <h3>Esempio 2 — Coppia: uno lavora, l'altro ancora no</h3>
                <p>In molti casi conta il reddito totale, ma anche la stabilità. Allega il contratto di chi lavora e spiega il piano (ricerca del lavoro dell'altro, studio lingua, ecc.). Alcune agenzie accettano garanti, altre no.</p>

                <h3>Esempio 3 — Ti offrono "assicurazione di cauzione" invece di deposito</h3>
                <p>Invece di bloccare diverse migliaia di franchi, puoi pagare un premio annuale a una società che funge da garante. È utile se arrivi senza molta liquidità, ma non è un "deposito recuperabile": è un costo annuale. Confronta i pro e contro nella guida sulle <a href="#/fianzas-alquiler-suiza">Cauzioni</a>.</p>

                <h3>Esempio 4 — Subaffitto (Untermiete) per iniziare</h3>
                <p>Molti nuovi arrivati iniziano con una stanza o un subaffitto per potersi registrare in comune e ricevere il primo stipendio. È una strategia realistica se ti manca lo storico svizzero. Comunque, richiedi un contratto, regole chiare ed evita accordi "a voce".</p>

                <h2>Errori comuni</h2>
                <ul>
                    <li><strong>Dossier incompleto:</strong> in un mercato competitivo, è quasi un "no automatico".</li>
                    <li><strong>Non richiedere il Betreibungsauszug per tempo:</strong> richiedilo non appena hai un indirizzo.</li>
                    <li><strong>Non verificare lo stato dell'appartamento:</strong> non annotare i difetti all'entrata è uno degli errori più costosi all'uscita.</li>
                    <li><strong>Cadere in truffe:</strong> non inviare mai denaro in anticipo senza un contratto reale e verificato (attenzione alle "chiavi per posta").</li>
                    <li><strong>Non verificare l'inserzionista:</strong> se il prezzo sembra troppo bello per essere vero o ti mettono pressione, diffida e verifica l'agenzia/proprietario.</li>
                    <li><strong>Ignorare i costi iniziali:</strong> cauzione + primo mese + trasloco + assicurazioni si accumulano velocemente.</li>
                </ul>

                <h2>Consigli pratici</h2>
                <ul>
                    <li>Tieni il tuo dossier in un unico PDF, ben ordinato e pronto per essere inviato il giorno stesso della visita.</li>
                    <li>Scrivi una mini presentazione professionale (3–4 righe) per accompagnare la candidatura.</li>
                    <li>Nelle visite collettive: arriva puntuale, sii breve e professionale, e invia la candidatura il giorno stesso (se ti interessa).</li>
                    <li>Se hai dubbi sulle clausole del contratto o sulla restituzione della cauzione, cerca supporto (ad esempio, associazioni inquilini) e consulta la guida su <a href="#/fianzas-alquiler-suiza">Cauzione e diritti</a>.</li>
                    <li>Collega l'alloggio con il budget e le pratiche: <a href="#/presupuesto-suiza">costo della vita</a> e <a href="#/tramites-llegada-suiza">primo mese</a>.</li>
                </ul>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portale ufficiale svizzero</a></li>
                </ul>
            </div>
        `
    },

    // 13. Fianzas de alquiler
    "articulo-fianzas": {
        title: "Cauzione d'affitto e diritti dell'inquilino (ASLOCA/MV)",
        description: "Scopri come funzionano le garanzie d'affitto svizzere, le alternative con le assicurazioni (SwissCaution) e le associazioni di difesa dell'inquilino.",
        keywords: "cauzione affitto svizzera, swisscaution, asloca, mieterverband, garanzia affitto",
        audience: 'resident',
        category: 'Alloggi',
        hub: 'vivienda',
        slug: "cauzione-affitto-svizzera",
        readingTime: 3,
        featuredImage: "media/guides/fianzas-alquiler-suiza.jpg",
        imageAlt: "Documento di garanzia bancaria d'affitto svizzera con le chiavi di casa su una scrivania professionale",
        summary: "La cauzione massima legale è pari a 3 mesi di affitto. Puoi depositarla in banca o usare assicurazioni come SwissCaution.",
        content: `
            <div class="article-content">
                <h2>La Cauzione (Garantie de Loyer / Mietkaution)</h2>
                <p>Per legge, un proprietario può richiedere fino a un <strong>massimo di 3 mesi di affitto</strong> come cauzione per un'abitazione (per i locali commerciali non c'è limite). Questo denaro non viene mai consegnato a mano al locatore.</p>
                <p>Il denaro viene depositato su un "Conto bancario di garanzia dell'affitto" (conto deposito) intestato a tuo nome, ma bloccato. Potrà essere liberato solo con la firma congiunta dell'inquilino e del locatore dopo la riconsegna delle chiavi o la risoluzione del contratto.</p>

                <h2>Assicurazioni di Cauzione (Alternativa al deposito di capitale)</h2>
                <p>Se non disponi dei 3 mesi in contanti (che potrebbero rappresentare 6.000 o 9.000 CHF in un colpo solo), esistono società come <a href="https://www.swisscaution.ch/" target="_blank">SwissCaution</a> che fungono da garanti. Paghi loro un premio annuale non rimborsabile (normalmente il 5% della cauzione) e loro emettono all'agenzia il certificato di copertura come se fosse denaro reale.</p>

                <h2>Difesa dei tuoi diritti: ASLOCA / Mieterverband</h2>
                <p>Il sistema protegge molto l'inquilino ma può essere complesso. Se la tua agenzia cerca di addebitarti spese abusive quando lasci l'appartamento o si rifiuta di restituire la cauzione, è vivamente consigliato affiliarsi all'<a href="https://www.asloca.ch/" target="_blank">Associazione Svizzera Inquilini</a> (ASLOCA nella zona francese, Mieterverband in quella tedesca) pagando una piccola quota annuale (circa 85 CHF). Offrono consulenza gratuita sui contratti e supporto legale se necessario.</p>
            </div>
        `
    },

    // 14. Costo de vida
    "articulo-costo-vida": {
        title: "Budget in Svizzera: Alloggio, Alimentazione e Imposte",
        description: "Pianificazione finanziaria in Svizzera con esempi di budget per single, coppie e famiglie che affrontano spese per alloggio, cibo e tasse.",
        keywords: "budget svizzera, pianificazione finanziaria svizzera, costo della vita svizzera, famiglie svizzera",
        category: 'Costo della Vita',
        hub: 'vivir-en-suiza',
        slug: "budget-svizzera",
        featuredImage: "media/guides/presupuesto-suiza.png",
        imageAlt: "Illustrazione di budget: portafoglio, calcolatrice e spese per vivere in Svizzera",
        supportingImages: [],
        readingTime: 5,
        summary: "Guida alla pianificazione finanziaria per la Svizzera con esempi di budget reali, dalle persone single alle famiglie con figli.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>La Svizzera è uno dei paesi con il costo della vita più elevato d'Europa, e per questo motivo organizzare ogni franco è fondamentale. La pianificazione finanziaria permette di evitare sorprese, controllare le spese e decidere con calma su alloggio, alimentazione e tasse. Il Servizio di Consulenza per il Budget Svizzero (Budget-Beratung / Conseil Budgetaire) pubblica esempi reali che aiutano a prendere riferimenti nella vita quotidiana.</p>

                <h2>Budget per una persona single</h2>
                <p>Vivere da soli richiede un equilibrio tra le spese fisse e il reddito netto mensile.</p>
                <ul>
                    <li><strong>Affitto:</strong> un monolocale o un appartamento di una camera costa solitamente tra 1.400 e 2.200 CHF, spese incluse. Pianifica i possibili aumenti annuali e condividi le spese quando possibile.</li>
                    <li><strong>Alimentazione:</strong> preparare il cibo a casa acquistando in catene come Migros o Coop mantiene la spesa tra 400 e 500 CHF; mangiare fuori raddoppia facilmente questa voce.</li>
                    <li><strong>Trasporto:</strong> l'abbonamento mensile urbano si aggira sui 80-140 CHF; chi ha meno di 25 anni o vive vicino al lavoro può optare per opzioni più economiche.</li>
                    <li><strong>Assicurazione sanitaria:</strong> il premio base LAMal varia da 300 a 450 CHF (a seconda del cantone e dell'età); definisci bene la franchigia e metti da parte un fondo per coprire i copagamenti.</li>
                </ul>

                <h2>Budget per coppie senza figli</h2>
                <p>Due adulti condividono le spese ma devono anche riservare spazio per il tempo libero e il futuro.</p>
                <ul>
                    <li><strong>Alloggio:</strong> un appartamento di 2-3 locali oscilla tra 2.300 e 3.200 CHF; si dividono elettricità, internet e manutenzione.</li>
                    <li><strong>Tempo libero:</strong> ristoranti, palestra e gite rappresentano 200-400 CHF; fissate un tetto mensile per non sacrificare il risparmio.</li>
                    <li><strong>Assicurazioni:</strong> oltre alla LAMal, si aggiungono responsabilità civile e assicurazione economia domestica, specialmente se si hanno animali o un'auto.</li>
                    <li><strong>Risparmio:</strong> mettete da parte almeno il 10-15% delle entrate per emergenze o obiettivi (stessa raccomandazione dei consulenti di budget svizzeri).</li>
                </ul>

                <h2>Budget per famiglie con bambini</h2>
                <p>Le famiglie devono affrontare voci di spesa che si moltiplicano con ogni bambino.</p>
                <ul>
                    <li><strong>Asilo nido/Custodia:</strong> un posto costa tra 1.200 e 2.000 CHF per bambino, anche se i sussidi cantonali possono ridurre l'importo.</li>
                    <li><strong>Istruzione:</strong> materiali, escursioni e corsi di lingua sommano 100-200 CHF al mese per bambino.</li>
                    <li><strong>Alimentazione:</strong> preparare menù familiari alza la voce di spesa a 700-900 CHF mensili.</li>
                    <li><strong>Abbigliamento:</strong> pianificate rinnovi e approfittate degli sconti per non esagerare con la spesa.</li>
                    <li><strong>Trasporto:</strong> abbonamenti familiari o spostamenti scolastici aggiungono 150-250 CHF.</li>
                    <li><strong>Attività extrascolastiche:</strong> musica, sport o lezioni private possono costare 100-250 CHF per bambino ogni mese.</li>
                </ul>

                <h3>Famiglia con 1 figlio</h3>
                <p>Un esempio tipico combina un affitto di 2.400 CHF, nido parziale di 1.000 CHF e alimentazione vicina ai 650 CHF. Condividere i tragitti aiuta a ridurre la spesa per il trasporto.</p>
                <h3>Famiglia con 2 figli</h3>
                <p>Le spese per asili e attività extrascolastiche si duplicano; conviene dare priorità alle opzioni pubbliche o ai centri con prezzi scalati per fratelli.</p>
                <h3>Famiglia con 3 figli</h3>
                <p>Il focus deve essere l'efficienza: energia e trasporti più economici, un fondo per gli imprevisti e sfruttare l'istruzione pubblica gratuita.</p>

                <h2>Perché è importante avere un budget?</h2>
                <p>Un budget ben pianificato trasforma l'incertezza in decisioni informate.</p>
                <ul>
                    <li><strong>Controllare le spese:</strong> registrare ogni voce rivela dove si può risparmiare (abbonamenti, acquisti impulsivi, mobilità).</li>
                    <li><strong>Pianificare il futuro:</strong> sapere quanto avanza permette di decidere se risparmiare per la casa, cambiare auto o investire in formazione.</li>
                    <li><strong>Creare un fondo per imprevisti:</strong> i consulenti raccomandano almeno tre mesi di spese fisse per emergenze come riparazioni o perdita del lavoro.</li>
                    <li><strong>Vivere con maggiore tranquillità finanziaria:</strong> meno sorprese significa più fiducia per adattarsi a cambiamenti di cantone, famiglia o lavoro.</li>
                </ul>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href="https://budgetberatung.ch/" target="_blank" rel="noopener noreferrer">Servizio di Consulenza per il Budget Svizzero (Budget-Beratung)</a> – esempi reali di budget e consulenza.</li>
                    <li><a href="https://budgetberatung.ch/info-service/budgetbeispiele" target="_blank" rel="noopener noreferrer">Modelli di budget</a> pronti da scaricare e adattare.</li>
                </ul>
            </div>
        `
    },

    // 15. Trabajadores fronterizos (frontaliers)
    "articulo-frontaliers": {
        title: "Lavoratori frontalieri: regole e fiscalità",
        description: "Guida per frontalieri: imposte, assicurazione sanitaria e regole per chi lavora in Svizzera e vive all'estero.",
        keywords: "frontaliere svizzera, permesso G, tasse frontalieri, vivere in italia lavorare in svizzera",
        featuredImage: "media/guides/trabajadores-fronterizos-suiza.jpg",
        category: `Frontalieri`,
        hub: 'fronterizos',
        readingTime: 4,
        summary: `Il permesso G ti permette di vivere all'estero e lavorare in Svizzera.`,
        
        content: `<div class="page-header">
<h1>Lavoratori frontalieri (frontalieri): permesso G e tassazione</h1>
</div>
<div class="contenuto-articolo">
<p>I <em>frontalieri</em> sono persone che risiedono permanentemente in un paese vicino (principalmente Francia, Germania e Italia) e attraversano il confine per lavorare in Svizzera.</p>

<h2>Il permesso G</h2>
<p>Per lavorare in questa modalità, è necessario un <strong>permesso G (permesso di lavoro frontaliero)</strong>. Una condizione fondamentale per mantenerlo è che devi tornare alla tua residenza principale all'estero almeno una volta alla settimana (la maggior parte lo fa quotidianamente).</p>

<h2>Tassazione frontaliera</h2>
<p>Le norme fiscali variano notevolmente a seconda del cantone in cui lavori e del paese di residenza (a causa dei trattati sulla doppia imposizione).</p>
<ul>
<li><strong>Ginevra:</strong> se vivi in Francia e lavori a Ginevra, il Cantone di Ginevra ti tratterrà l'imposta direttamente.</li>
<li><strong>Vaud, Neuchâtel, Giura:</strong> in questi cantoni l'imposta viene generalmente pagata per intero in Francia e il datore di lavoro svizzero non vi preleva l'imposta alla fonte (se presentate in tempo il certificato di residenza fiscale).</li>
</ul>

<h2>Assicurazione sanitaria (diritto di opzione)</h2>
<p>Quando inizi a lavorare in Svizzera, hai 3 mesi di tempo per esercitare il tuo "Diritto di opzione". Puoi scegliere di assicurarti nel sistema svizzero (LAMal frontalier) o nel sistema del tuo Paese di residenza (es. CMU francese). <strong>Attenzione:</strong> questa decisione è irrevocabile. Se non scegli, sarai automaticamente affiliato alla LAMal svizzera.</p>
</div>`
    },

    // 16. Reconocimiento de diplomas
    "articulo-diplomas": {
        title: "Riconoscimento dei diplomi stranieri",
        description: "Come ottenere il riconoscimento della laurea o del diploma professionale in Svizzera (SEFRI).",
        keywords: "riconoscimento titoli svizzera, equipollenza laurea svizzera, sefri, omologazione titoli",
        audience: 'newcomer',
        featuredImage: "media/guides/homologar-titulos-suiza.jpg",
        category: `Procedure Ordinarie`,
        hub: 'tramites',
        readingTime: 3,
        summary: `Solo le professioni regolamentate richiedono il riconoscimento.`,
        content: `<div class="page-header">
<h1>Riconoscimento dei diplomi esteri</h1>
</div>
<div class="contenuto-articolo">
<p>Se hai un titolo di studio estero e vuoi esercitare in Svizzera, il primo passo è sapere se la tua professione è regolamentata (es. medicina, infermieristica, diritto, insegnamento). Se non è regolamentato, il riconoscimento ufficiale non è obbligatorio e il mercato del lavoro deciderà il valore della tua laurea.</p>

<h2>Professioni regolamentate ed enti competenti</h2>
<p>Per le professioni regolamentate, il riconoscimento è imperativo. A seconda del settore, il riconoscimento viene richiesto a un ente diverso:</p>
<ul>
<li><strong>SEFRI (Segretario di Stato per la Formazione, la Ricerca e l'Innovazione):</strong> per le professioni della formazione professionale, del commercio e dell'istruzione pedagogica (molti titoli universitari).</li>
<li><strong>MEBEKO (Commissione delle professioni mediche):</strong> Per medici, dentisti, veterinari e farmacisti. Richiede la padronanza di una lingua nazionale (B2/C1).</li>
<li><strong>Croce Rossa Svizzera (CRS):</strong> per le professioni sanitarie paramediche e non universitarie (infermieristica, fisioterapia).</li>
</ul>

<p>Le procedure comportano costi amministrativi (centinaia di franchi) e solitamente richiedono traduzioni giurate del tuo curriculum accademico.</p>

<div class="informazioni callout">
<strong>Fonte:</strong> Controlla quale autorità valuta il tuo diploma sul <a href="https://www.sbfi.admin.ch/sbfi/it/home/education/recognition-of-foreign-qualifications.html" target="_blank">portale SEFRI</a>. 
</div>
</div>`
    },

    // 17. Sistema escolar suizo
    "articulo-sistema-escolar": {
        title: "Il sistema scolastico svizzero spiegato",
        description: "Guida al sistema scolastico svizzero: dai livelli dell'infanzia alla formazione professionale duale.",
        keywords: "scuola svizzera, istruzione svizzera, sistema scolastico svizzero, asilo svizzera",
        audience: 'family',
        featuredImage: "media/guides/sistema-escolar-suiza.jpg",
        category: `Famiglia`,
        hub: 'tramites',
        readingTime: 5,
        summary: `Il sistema scolastico indirizza spesso presto verso la formazione professionale.`,
        content: `<div class="page-header">
<h1>Il sistema educativo pubblico svizzero</h1>
</div>
<div class="contenuto-articolo">
<p>L'istruzione pubblica in Svizzera è gratuita, completamente obbligatoria per 11 anni e di ottima qualità. Tuttavia, la sua struttura è molto cantonale (ogni cantone definisce il proprio piano di studi) e presenta una particolarità: l'orientamento professionale precoce.</p>

<h2>Struttura generale (modello HarmoS)</h2>
<ul>
<li><strong>Scuola materna (Ecole Enfantine / Kindergarten):</strong> inizia a 4 anni. Sono previsti 2 anni obbligatori di preparazione.</li>
<li><strong>Scuola primaria (Ecole Primaire / Primarschule):</strong> dai 6 ai 12 anni (classi da 3 a 8). Viene rapidamente introdotta una seconda e una terza lingua (un'altra lingua nazionale e l'inglese).</li>
<li><strong>Grado secondario I (Ciclo d'Orientamento / Sekundarstufe I):</strong> Dai 12 ai 15 anni (classi da 9 a 11).</li>
</ul>

<h2>Segregazione o "Filières"</h2>
<p>A differenza della Spagna, in Svizzera intorno ai 12 o 15 anni gli studenti sono orientati ("segregati") a seconda dei voti e delle attitudini verso due percorsi molto diversi:</p>
<ol>
<li><strong>Il percorso professionale (Vocational Training / Dual Learning):</strong> Oltre il 60% dei giovani svizzeri sceglie di fare un "CFC" (Certificato federale di capacità). Lavorano 3 o 4 giorni in un'azienda imparando un mestiere e frequentano le lezioni per 1 o 2 giorni. È un percorso molto prestigioso e remunerativo fin dall'inizio.</li>
<li><strong>Il percorso accademico (Gymnasium / Collège / Maturité / Matura):</strong> per coloro che hanno titoli accademici migliori, preparandoli ad accedere direttamente all'Università o alle Scuole Politecniche Federali.</li>
</ol>
<p><em>Nota:</em> il sistema è permeabile; Uno studente di formazione professionale potrebbe finire per ottenere in futuro l'accesso all'università attraverso "gateway".</p>
</div>`
    },

    // 18. Sistema de salud (médicos y urgencias)
    "articulo-sistema-salud": {
        title: "Sistema sanitario in Svizzera: medici, ospedali e urgenze",
        description: "Come trovare un medico di famiglia in Svizzera, come funzionano le urgenze e come pagare le fatture mediche.",
        keywords: "medico famiglia svizzera, urgenze svizzera, pediatra svizzera, sistema sanitario svizzero",
        audience: 'resident',
        category: 'Rete Medica',
        hub: 'salud',
        readingTime: 4,
        summary: `Evita gli ospedali per i disturbi minori, vai alle guardie mediche.`,
        content: `<div class="page-header">
<h1>Medici, emergenze e fatture in Svizzera</h1>
</div>
<div class="contenuto-articolo">
<p>Capire come affrontare la pratica quotidiana dell'assistenza sanitaria svizzera ti farà risparmiare problemi (e preoccupazioni finanziarie).</p>

<h2>Scegli un medico in base al tuo modello assicurativo</h2>
<p>Il modello LAMal più economico è solitamente il "modello HMO" o il "medico di famiglia". Ciò significa che non è possibile recarsi direttamente presso uno specialista o in ospedale senza prima chiamare una linea centralizzata, o senza rivolgersi tassativamente al proprio medico di famiglia di riferimento. Se salti questa operazione, la tua assicurazione potrebbe rifiutarsi di pagare la fattura.</p>

<h2>Le Emergenze (Urgenze/Noncaduta)</h2>
<p>Andare al pronto soccorso di un ospedale dovrebbe essere riservato ai casi gravi. Per cure rapide ma non vitali, la cosa normale in Svizzera è andare alla "Permanence Médicale" (Policlinici), dove ti curano rapidamente in ordine di arrivo ad un costo molto inferiore rispetto all'ospedale.</p>

<h2>Il sistema di pagamento: Tiers-garant vs Tiers-payant</h2>
<p>Quando vai in farmacia o ricevi una fattura medica, ti troverai di fronte a due modelli:</p>
<ul>
<li><strong>Tiers-garant (Pagamento diretto):</strong> ricevi la fattura a casa (o la paghi in farmacia), la paghi di tasca tua e poi invii il codice QR o la ricevuta alla tua assicurazione. Se hai già superato la franchigia, l'assicurazione ti restituirà i soldi.</li>
<li><strong>Pagante:</strong> il medico o la farmacia invia la fattura direttamente all'assicuratore. La compagnia assicurativa lo paga e, se non hai superato la franchigia, la compagnia assicurativa ti emetterà una fattura in modo che tu possa pagare l'importo corrispondente.</li>
</ul>
</div>`
    },

    // 19. Transporte público y abonos
    "articulo-transporte": {
        title: "Trasporti pubblici: FFS, Metà-prezzo e AG",
        description: "Guida ai trasporti pubblici svizzeri: FFS, abbonamento metà-prezzo e abbonamento generale.",
        keywords: "treni svizzera, FFS SBB CFF, abbonamento metà prezzo, AG, trasporti pubblici",
        featuredImage: "media/guides/transporte-publico-suiza.jpg",
        category: `Trasporto Pubblico`,
        hub: 'vivir-en-suiza',
        readingTime: 4,
        summary: `L'abbonamento Metà-prezzo è quasi obbligatorio per i residenti.`,
        
        content: `<div class="page-header">
<h1>Trasporti pubblici svizzeri e abbonamenti FFS/CFF/FFS</h1>
</div>
<div class="contenuto-articolo">
<p>La Confederazione Svizzera è orgogliosa di avere uno dei sistemi di trasporto pubblico più densi, puntuali e integrati al mondo (treni, autobus, tram e battelli funzionano tutti in un unico orologio).</p>

<h2>Lo Swisspass</h2>
<p>Si tratta di una tessera rossa fisica (e digitale nell'app Mobile FFS) che funge da supporto per tutti i tuoi skipass e abbonamenti.</p>

<h2>L'abbonamento essenziale: la Demi-tarif / Halbtax</h2>
<p>L'acquisto di un biglietto ferroviario semplice è molto costoso. La stragrande maggioranza dei residenti acquista un <strong>abbonamento annuale a metà prezzo (Demi-tarif)</strong>. Costa poco meno di 200 franchi all'anno e dà diritto ad acquistare i biglietti scontati del 50% su treni, autobus, battelli e trasporti urbani svizzeri in quasi tutte le città. Si ripaga molto facilmente.</p>

<h2>L'Abbonamento Generale (AG / GA)</h2>
<p>Se sei un <em>pendolare</em> estremo che viaggia tutti i giorni in treno per andare al lavoro, l'<strong>Abbonamento Generale</strong> ti permette di viaggiare senza limiti su qualsiasi treno intercity, treno urbano, battello e autopostale del Paese. È costoso (quasi 4000 franchi all'anno per gli adulti in 2a classe, ma i datori di lavoro a volte ne sovvenzionano una parte), ma offre completa libertà ("Sali sul treno e dimentica il biglietto").</p>

<h2>Biglietti super risparmio e biglietti community</h2>
<p>Se acquistate i biglietti del treno nell'app (Mobile FFS) con diverse settimane di anticipo, troverete <em>biglietti super-réduits/biglietti risparmio</em> con uno sconto fino al 70%, validi esclusivamente per l'orario esatto indicato.</p>
<p>Inoltre, molti comuni vendono <em>Cartes Journalières / Tageskarten</em> a livello locale, altamente sovvenzionati, ai loro vicini.</p>
</div>`
    },

    // 20. Ciudadanía suiza
    "articulo-ciudadania": {
        title: "Cittadinanza svizzera e naturalizzazione",
        description: "Requisiti per ottenere il passaporto svizzero e gli esami.",
        keywords: "cittadinanza svizzera, naturalizzazione svizzera, passaporto svizzero",
        audience: 'newcomer',
        featuredImage: "media/guides/nacionalidad-suiza-pasaporte.jpg",
        category: `Procedure Ordinarie`,
        hub: 'tramites',
        readingTime: 5,
        summary: `La naturalizzazione richiede 10 anni di residenza e un Permesso C.`,
        content: `<div class="page-header">
<h1>Cittadinanza svizzera e processo di naturalizzazione</h1>
</div>
<div class="contenuto-articolo">
<p>Ottenere un passaporto con la croce bianca non è una procedura puramente burocratica, ma gli svizzeri lo intendono piuttosto come la conferma finale di un livello ottimale di integrazione.</p>

<h2>Requisiti per la naturalizzazione ordinaria</h2>
<p>Se non sei sposato con un cittadino svizzero, devi seguire il percorso ordinario di naturalizzazione, il cui requisito principale sono <strong>10 anni di residenza in Svizzera</strong> (gli anni tra gli 8 e i 18 anni contano doppio).</p>

<ul>
<li>Possedere un permesso di stabilimento (<strong>permesso C).</li>
<li>Aver risieduto ininterrottamente nello stesso Cantone o nello stesso Comune per il periodo minimo specifico da loro stabilito (varia tra 2 e 5 anni a seconda della regione).</li>
<li><strong>Integrazione e competenza linguistica:</strong> dimostrare capacità scritta e orale nella lingua nazionale del cantone (normalmente livello B1 nel parlato e A2 nello scritto accreditato).</li>
<li>Non aver dipeso dall'assistenza sociale negli ultimi 3 anni (o aver rimborsato i soldi).</li>
<li>Non avere precedenti penali o debiti (mancati pagamenti o Betreibung paralizzano il processo).</li>
</ul>

<h2>Il processo d'esame</h2>
<p>La procedura coinvolge tre livelli di governo (Comunità, Cantone e Confederazione). Nella maggior parte dei comuni, devi sostenere un esame scritto e un colloquio orale in cui vengono valutate le tue conoscenze dell'educazione civica svizzera, della geografia, della cultura cantonale e, talvolta, dei tuoi rapporti con i vicini. È nel comune che si decide fondamentalmente se il tuo "grado di assimilazione e integrazione locale" è sufficiente.</p>

<div class="informazioni callout">
<strong>Informazioni SEM:</strong> Tutti i cantoni hanno le proprie procedure, ma rispettano la legge federale del <a href="https://www.sem.admin.ch/sem/en/home/themen/buergerrecht/einbuergerung/ordentliche_einbuergerung.html" target="_blank">SEM</a>. 
</div>
</div>`
    },

    // Traduzioni mancanti aggiunte (2026-03-12)
    "articulo-tramites-llegada": {
        title: "Checklist completa: pratiche al tuo arrivo in Svizzera il primo mese",
        description: "Tutto quello che devi fare il primo mese in Svizzera in ordine di urgenza: registrazione, assicurazione sanitaria, conto bancario, trasporti, rifiuti e altro.",
        keywords: "pratiche arrivo svizzera, checklist arrivo svizzera, primi passi svizzera, nuovi arrivati svizzera, cosa fare all'arrivo svizzera",
        category: "Procedure Iniziali",
        hub: "tramites",
        slug: "checklist-tramites-llegada-suiza",
        readingTime: 7,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/checklist-llegada-suiza.jpg",
        imageAlt: "Documenti svizzeri: permesso di soggiorno, tessera dell'assicurazione sanitaria, chiavi e checklist",
        summary: "Due situazioni, due percorsi diversi: se vieni per cercare lavoro non hai alcun obbligo amministrativo; se ti stabilisci con un contratto, la registrazione al comune è il primo passo obbligatorio.",
        content: `
            <div class="article-content">

                <div class="callout warning">
                    <strong>Importante:</strong> se vieni in Svizzera come turista o per cercare lavoro, non devi registrarti in comune né richiedere alcun permesso di soggiorno. Questo obbligo esiste solo quando ti stabilisci nel Paese, solitamente dopo aver firmato un contratto di lavoro o aver stabilito la tua residenza in modo effettivo.
                </div>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Se vieni come turista o per cercare lavoro</h2>
                <p>Come cittadino dell'UE/AELS, hai il diritto di entrare in Svizzera e soggiornare senza alcuna formalità amministrativa durante un periodo di ricerca di lavoro. Non c'è obbligo di registrazione, non c'è permesso da richiedere, non c'è termine da rispettare in questa fase.</p>
                <p>Ciò che conviene avere in ordine prima di viaggiare o durante il soggiorno:</p>

                <h3>Documentazione personale</h3>
                <p>Porta con te la carta d'identità o il passaporto in corso di validità. Non hai bisogno di altri documenti per entrare o muoverti nel Paese.</p>

                <h3>Alloggio e mobilità</h3>
                <p>Definisci dove alloggerai dal primo giorno, anche se in modo provvisorio. Per spostarti, il trasporto pubblico svizzero è efficiente e puntuale. Se intendi usarlo intensivamente, il <strong>Metà-prezzo / Halbtax</strong> (circa 190 CHF all'anno) dimezza il prezzo di tutti i biglietti nel Paese. Si ammortizza in poche settimane e si acquista su <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">sbb.ch</a> o presso qualsiasi sportello FFS/CFF/SBB.</p>

                <h3>CV e ricerca di lavoro</h3>
                <p>Il mercato del lavoro svizzero ha le sue convenzioni. Il CV standard include foto, data di nascita e stato civile. Le principali piattaforme sono <a href="https://www.jobs.ch" target="_blank" rel="noopener noreferrer">jobs.ch</a>, <a href="https://www.jobup.ch" target="_blank" rel="noopener noreferrer">jobup.ch</a> e LinkedIn. Cerca nella lingua del cantone in cui vuoi lavorare: aumenta significativamente le risposte.</p>

                <h3>Assicurazione sanitaria durante la ricerca</h3>
                <p>Finché non risiedi ufficialmente in Svizzera, la LAMal (assicurazione sanitaria obbligatoria svizzera) non ti è applicabile. Se hai la tessera sanitaria europea o un'assicurazione di viaggio, è sufficiente per un soggiorno di ricerca. L'obbligo di stipulare la LAMal inizia solo quando ti registri come residente.</p>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Se vieni per stabilirti (con contratto o residenza)</h2>
                <p>Non appena firmi un contratto di lavoro o stabilisci la tua residenza effettiva in Svizzera, il circuito amministrativo si attiva. Le scadenze sono reali e il loro mancato rispetto può comportare multe.</p>

                <div class="callout info">
                    <strong>Regola generale:</strong> la registrazione al comune deve essere effettuata entro <strong>14 giorni</strong> dall'arrivo, e in molti cantoni <strong>prima del primo giorno di lavoro</strong>. Il termine esatto varia a seconda del cantone: consulta sempre il sito web del tuo municipio.
                </div>

                <h3>1. Registrati al comune (Controllo Abitanti)</h3>
                <p>È la prima pratica e sblocca tutte le altre. Al momento della registrazione, ricevi immediatamente un certificato di residenza provvisorio (\"Attestation de résidence\" / \"Meldebestätigung\") che ha piena validità legale: con esso puoi iniziare a lavorare, aprire un conto bancario e stipulare l'assicurazione sanitaria, anche se la tessera fisica del permesso richiede settimane per arrivare.</p>
                <p><strong>Cosa portare:</strong> Carta d'identità o passaporto, contratto di lavoro o di affitto, indirizzo di residenza (anche se provvisorio).</p>
                <p><strong>Costo:</strong> tra 65 e 100 CHF a seconda del cantone e del tipo di permesso richiesto.</p>

                <h3>2. Apri un conto bancario</h3>
                <p>Il tuo datore di lavoro ha bisogno di un IBAN svizzero per pagarti lo stipendio. Con il certificato di registrazione puoi già recarti in banca. Se hai bisogno di un conto operativo dal primo giorno, le opzioni digitali come Neon, Yuh o Revolut (conto svizzero) si attivano in meno di 24 ore senza spostamenti. Le banche tradizionali — PostFinance, UBS, Raiffeisen, Migros Bank — richiedono un appuntamento ma offrono più servizi.</p>

                <h3>3. Stipula l'assicurazione sanitaria LAMal</h3>
                <p>Hai un termine di <strong>3 mesi</strong> dalla data di registrazione per stipulare l'assicurazione obbligatoria (LAMal), con effetto retroattivo dal primo giorno. Non aspettare l'ultimo momento: se subisci un imprevisto prima di averla, pagherai comunque i premi dall'inizio. La copertura di base è identica in tutte le assicurazioni; varia solo il prezzo. Confronta su <a href=\"https://www.priminfo.admin.ch\" target=\"_blank\" rel=\"noopener noreferrer\">Priminfo.admin.ch</a> (comparatore ufficiale federale). La decisione più importante è la franchigia: 300 CHF minimo (premio alto) o fino a 2.500 CHF (premio basso). Se sei in salute, la franchigia alta solitamente risulta più vantaggiosa.</p>

                <h3>4. Comunica la tua situazione familiare al datore di lavoro</h3>
                <p>Se hai partner o figli a carico, il datore di lavoro ha bisogno di questi dati per applicare la tariffa corretta dell'imposta alla fonte. Un errore in questo punto è difficile da correggere retroattivamente.</p>

                <h3>5. Metti il tuo nome sulla cassetta delle lettere</h3>
                <p>In Svizzera, l'amministrazione funziona principalmente tramite posta cartacea. Riceverai la tessera del permesso, le fatture dell'assicurazione e le lettere fiscali su carta. Se la cassetta delle lettere non ha il tuo nome dal primo giorno, queste comunicazioni possono andare perse o essere restituite.</p>

                <h3>6. Impara il sistema dei rifiuti del tuo comune</h3>
                <p>In molti cantoni sono ammessi solo sacchi della spazzatura ufficiali a pagamento, che includono la tassa di raccolta. Usare sacchi ordinari può comportare multe. Chiedi nel tuo edificio o in comune fin dal primo giorno.</p>

                <h3>7. Ottieni il Metà-prezzo per il trasporto</h3>
                <p>Se usi i treni o i mezzi pubblici regolarmente, il <strong>Metà-prezzo / Halbtax</strong> (circa 190 CHF all'anno) dimezza il prezzo di tutti i biglietti in tutto il Paese. Si ammortizza in poche settimane. Si acquista su <a href=\"https://www.sbb.ch\" target=\"_blank\" rel=\"noopener noreferrer\">sbb.ch</a> o presso qualsiasi sportello FFS/CFF/SBB.</p>

                <h3>Nei primi 3 mesi</h3>
                <p>Una volta risolte le urgenze, conviene informarsi sulle assicurazioni complementari (la LAMal di base non copre dentista, occhiali né ospedalizzazione privata) e sul terzo pilastro (3a), che è un risparmio per la pensione con importanti vantaggi fiscali. Prima si inizia, più si accumula.</p>

                <div class="callout tip">
                    <strong>Ordine raccomandato:</strong> registrazione al comune → conto bancario → LAMal → comunicazione al datore di lavoro → cassetta delle lettere e rifiuti → Metà-prezzo. Ogni passo sblocca il successivo.
                </div>

                <h2>Errori frequenti al momento del trasferimento</h2>
                <p>Rimandare la registrazione a \"quando tutto sarà pronto\" e superare i termini è l'errore più comune e ha conseguenze dirette. Non comprendere la retroattività della LAMal genera fatture inaspettate. Dimenticare di mettere il nome sulla cassetta delle lettere può far sì che la tessera del permesso o le lettere fiscali non arrivino. Non informarsi sul sistema dei sacchi della spazzatura dal primo giorno espone a multe evitabili.</p>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href=\"https://www.ch.ch/it/entrare-e-vivere-in-svizzera/\" target=\"_blank\" rel=\"noopener noreferrer\">ch.ch — Entrare e vivere in Svizzera</a></li>
                    <li><a href=\"https://www.priminfo.admin.ch\" target=\"_blank\" rel=\"noopener noreferrer\">Priminfo — comparatore ufficiale LAMal</a></li>
                    <li><a href=\"https://www.sbb.ch\" target=\"_blank\" rel=\"noopener noreferrer\">FFS/CFF/SBB — trasporti pubblici</a></li>
                </ul>
            </div>
        `
    },

    "articulo-trabajar-sin-permiso-fisico": {
        title: "Posso lavorare prima di ricevere il permesso fisico?",
        description: "Sì. Dopo la registrazione al comune ricevi un certificato provvisorio valido mentre la tessera del permesso arriva per posta.",
        keywords: "lavorare senza permesso fisico, attestato provvisorio, permesso svizzera tessera",
        featuredImage: "media/guides/trabajar-antes-permiso-fisico-suiza.jpg",
        category: "Procedure Ordinarie",
        hub: "tramites",
        readingTime: 3,
        summary: "La tessera plastificata può richiedere settimane. Il certificato provvisorio di registrazione è di norma sufficiente per il datore di lavoro.",
        content: `<div class="page-header">
<h1>Lavorare in Svizzera senza tessera del permesso</h1>
</div>
<div class="contenuto-articolo">
<p><strong>Sì</strong>: in molti cantoni puoi iniziare a lavorare dopo la registrazione. La tessera del permesso arriva più tardi.</p>

<h2>Documento provvisorio</h2>
<p>Quando ti registri, spesso ricevi un <strong>attestato provvisorio</strong> (il nome cambia a seconda del cantone). Ha valore legale.</p>

<div class="informazioni callout">
<strong>Consiglio:</strong> metti il tuo nome sulla cassetta postale per ricevere la tessera senza problemi.
</div>
</div>`
    },

    "articulo-reagrupacion-familiar": {
        title: "Ricongiungimento familiare in Svizzera: come portare la famiglia",
        description: "Guida breve: requisiti, documenti, tempi e diritti per coniuge/partner e figli.",
        keywords: "ricongiungimento familiare svizzera, portare coniuge figli, apostille traduzioni",
        featuredImage: "media/guides/reagrupacion-familiar-suiza.jpg",
        category: "Procedure Ordinarie",
        hub: "tramites",
        readingTime: 5,
        summary: "Con un permesso B o C spesso è possibile ricongiungere coniuge/partner e figli minori, con alloggio adeguato e mezzi sufficienti.",
        content: `<div class="page-header">
<h1>Ricongiungimento familiare in Svizzera</h1>
</div>
<div class="contenuto-articolo">
<h2>Chi può essere ricongiunto?</h2>
<ul>
  <li>Coniuge o partner registrato</li>
  <li>Figli sotto i 18 anni</li>
</ul>

<h2>Requisiti tipici</h2>
<ul>
  <li><strong>Alloggio adeguato</strong> per la famiglia</li>
  <li><strong>Mezzi economici sufficienti</strong></li>
  <li><strong>Permesso valido</strong> (spesso B o C)</li>
</ul>

<h2>Documenti (di solito)</h2>
<ul>
  <li>Passaporti/ID</li>
  <li>Certificati di matrimonio/partnership e nascita</li>
  <li><strong>Apostille + traduzioni</strong> dove richiesto</li>
  <li>Contratto di affitto + prove di reddito</li>
</ul>
</div>`
    },

    "articulo-subalquiler": {
        title: "Subaffitto di una stanza o appartamento in Svizzera: guida legale",
        description: "Tutto sul subaffitto in Svizzera: contratti, cauzioni, diritti e obblighi per inquilini e subinquilini.",
        keywords: "subaffitto svizzera, affitto stanza svizzera, contratto subaffitto, cauzione subaffitto",
        category: "Alloggio",
        hub: "vivienda",
        slug: "subaffitto-vivienda-svizzera",
        readingTime: 4,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/subalquiler-vivienda-suiza.jpg",
        imageAlt: "Stanza accogliente in un appartamento condiviso (colocation) in una città svizzera",
        summary: "Il subaffitto è legale e comune in Svizzera. Richiede l'autorizzazione del proprietario e, preferibilmente, un contratto scritto per evitare malintesi.",
        content: `
            <div class="article-content">
                <p>Il subaffitto è una pratica molto diffusa in Svizzera, che permette a un inquilino principale di affittare una stanza o l'intera abitazione a un terzo. Tuttavia, affinché sia sicuro e legale, devono essere seguite alcune regole chiare.</p>
                
                <h2>1. Il Contratto di Subaffitto</h2>
                <p>Sebbene in Svizzera i contratti verbali possano avere validità, <strong>un contratto scritto è indispensabile</strong> per evitare dispute. Deve includere:</p>
                <ul>
                    <li>Identità dell'inquilino principale e del subinquilino.</li>
                    <li>Oggetto: È una stanza o l'intero appartamento? Specificare le zone comuni.</li>
                    <li>Durata: Data di inizio e fine (se determinata).</li>
                    <li>Prezzo e spese: Specificare se include elettricità, internet, ecc.</li>
                    <li>Preavviso: Tempo necessario per rescindere il contratto.</li>
                </ul>

                <h2>2. La Cauzione (Garanzia)</h2>
                <p>È comune richiedere tra 1 e 2 mesi di cauzione. È importante ricordare che:</p>
                <ul>
                    <li>La cauzione <strong>non può essere usata come pagamento dell'ultimo mese</strong>.</li>
                    <li>Deve essere restituita integralmente se non ci sono danni né debiti in sospeso.</li>
                    <li>Si raccomanda di effettuare un piccolo inventario con foto all'entrata per evitare discussioni all'uscita.</li>
                </ul>

                <h2>3. Autorizzazione del Proprietario</h2>
                <p>Questo è il punto più critico: <strong>il subaffitto deve essere autorizzato dal proprietario dell'immobile</strong>. Anche se solitamente non ci si oppone se non c'è abuso (come subaffittare a un prezzo molto superiore all'originale), farlo di nascosto può essere motivo di disdetta del contratto principale.</p>

                <div class="callout info">
                    <strong>Consiglio:</strong> Lascia sempre tutto messo "nero su bianco". In Svizzera, l'ambiguità gioca solitamente contro chi non ha prove scritte.
                </div>
            </div>
        `
    },

    "articulo-jubilacion": {
        title: "Pensione in Svizzera: cosa aspettarsi (AVS/AHV, LPP/BVG)",
        description: "Sistema dei 3 pilastri spiegato in modo semplice e perché l’età di arrivo (30/40/50) cambia le prospettive.",
        keywords: "pensione svizzera AVS, LPP previdenza professionale, pilastro 3a, rendita vecchiaia",
        featuredImage: "media/guides/jubilacion-pension-suiza.jpg",
        category: "Previdenza Sociale",
        hub: "trabajo",
        readingTime: 5,
        summary: "La previdenza svizzera si basa su tre pilastri. Arrivare prima significa più anni di contributi; pilastro 2 e 3 sono spesso cruciali.",
        content: `<div class="page-header">
<h1>Previdenza in Svizzera: i 3 pilastri</h1>
</div>
<div class="contenuto-articolo">
<h2>Pilastro 1: AVS/AHV</h2>
<p>Pensione statale di base. Anni mancanti possono ridurre l’importo.</p>

<h2>Pilastro 2: LPP/BVG</h2>
<p>Previdenza professionale tramite datore di lavoro.</p>

<h2>Pilastro 3: 3a (volontario)</h2>
<p>Risparmio volontario con vantaggi fiscali per colmare eventuali gap.</p>
</div>`
    },

    "articulo-vivir-sin-trabajar": {
        title: "Vivere in Svizzera senza lavorare (UE/AELS): requisiti",
        description: "Come risiedere senza attività lucrativa: mezzi sufficienti, assicurazione sanitaria e registrazione.",
        keywords: "vivere in svizzera senza lavoro, mezzi sufficienti, permesso senza attività lucrativa",
        featuredImage: "media/guides/residir-en-suiza-sin-trabajo.jpg",
        category: "Procedure Ordinarie",
        hub: "tramites",
        readingTime: 4,
        summary: "È possibile in alcuni casi, ma devi dimostrare risorse economiche e un’assicurazione sanitaria adeguata e registrarti ufficialmente.",
        content: `<div class="page-header">
<h1>Residenza in Svizzera senza contratto di lavoro</h1>
</div>
<div class="contenuto-articolo">
<ul>
  <li><strong>Mezzi economici sufficienti</strong> (risparmi, rendite, pensione)</li>
  <li><strong>Assicurazione sanitaria</strong> (LAMal o equivalente accettato a seconda dello status)</li>
  <li><strong>Registrazione</strong> al comune per soggiorni prolungati</li>
</ul>
</div>`
    },

    "articulo-ai-invalidez": {
        title: "Assicurazione invalidità (AI/IV) in Svizzera: reinserimento prima della rendita",
        description: "Come funziona l’AI/IV: priorità a riabilitazione e reinserimento lavorativo; la rendita arriva solo se necessario.",
        keywords: "AI IV svizzera, invalidità, reinserimento, rendita invalidità",
        featuredImage: "media/guides/seguro-invalidez-ai-suiza.jpg",
        category: "Assicurazioni Sociali",
        hub: "salud",
        readingTime: 4,
        summary: "Il principio è «reinserimento prima della rendita». L’AI finanzia misure di riabilitazione e adattamenti per tornare al lavoro.",
        content: `<div class="page-header">
<h1>AI/IV in Svizzera: supporto e reinserimento</h1>
</div>
<div class="contenuto-articolo">
<h2>Misure possibili</h2>
<ul>
  <li>Riabilitazione medica e professionale</li>
  <li>Adattamenti sul posto di lavoro e ausili</li>
  <li>Riqualificazione / formazione</li>
</ul>

<h2>Quando si parla di rendita?</h2>
<p>Di solito dopo aver tentato le misure di reinserimento e se permane una perdita di capacità di guadagno a lungo termine.</p>
</div>`
    },

    "articulo-vacunas": {
        title: "Vaccini in Svizzera: raccomandazioni, non obblighi",
        description: "In generale non sono obbligatori per legge, ma sono raccomandati dall’Ufficio federale della sanità pubblica (UFSP/BAG).",
        keywords: "vaccini svizzera, calendario vaccinale UFSP BAG, encefalite da zecche",
        featuredImage: "media/guides/vacunacion-en-suiza.jpg",
        category: "Salute Pubblica",
        hub: "salud",
        readingTime: 4,
        summary: "Il sistema svizzero si basa soprattutto su raccomandazioni ufficiali e scelta informata. L’encefalite da zecche è spesso evidenziata per chi fa attività all’aperto.",
        content: `<div class="page-header">
<h1>Vaccinazioni in Svizzera</h1>
</div>
<div class="contenuto-articolo">
<p>In Svizzera i vaccini sono in genere <strong>non obbligatori per legge</strong>. L’UFSP/BAG pubblica un calendario raccomandato.</p>

<ul>
  <li>Vaccini standard (DTP, polio, MPR, ecc.)</li>
  <li><strong>Encefalite da zecche (FSME/TBE):</strong> spesso raccomandata in alcune zone e per attività outdoor</li>
</ul>

<p>I vaccini raccomandati sono generalmente coperti dall’assicurazione di base, secondo franchigia/deduzione.</p>
</div>`
    },

    "articulo-danza-patos": {
        title: "Curiosità: la “Danza dei anatroccoli” è di origine svizzera",
        description: "La storia di “Der Ententanz”, melodia nata in Svizzera e diventata un classico mondiale delle feste.",
        keywords: "danza dei anatroccoli origine svizzera, der ententanz, werner thomas davos",
        featuredImage: "media/guides/origen-danza-de-los-patos-suiza.jpg",
        category: "Cultura e Vita",
        hub: "vivir-en-suiza",
        readingTime: 3,
        summary: "La famosa melodia fu composta da Werner Thomas, fisarmonicista svizzero, alla fine degli anni ’50 nella zona di Davos.",
        content: `<div class="page-header">
<h1>L’origine svizzera della Danza degli anatroccoli</h1>
</div>
<div class="contenuto-articolo">
<p>Molti l’hanno sentita a matrimoni e sagre. Ma <strong>“Der Ententanz”</strong> ha radici svizzere.</p>
<p>La melodia è attribuita a <strong>Werner Thomas</strong> e si è diffusa nel mondo con molte versioni negli anni ’70 e ’80.</p>
</div>`
    },

    "articulo-introduccion-suiza": {
        title: "Come funziona la Svizzera: essenziale per nuovi residenti",
        description: "Introduzione pratica: federalismo, 26 cantoni, democrazia diretta, lingue e perché il cantone in cui vivi cambia tasse, scuola e pratiche.",
        keywords: "come funziona la svizzera, cantoni, federalismo, democrazia diretta, lingue svizzera",
        audience: "newcomer",
        featuredImage: "media/guides/integracion-suiza.png",
        category: "Paese",
        hub: "vivir-en-suiza",
        readingTime: 7,
        summary: "La Svizzera è molto federale: cantoni e comuni hanno autonomia. Molte regole quotidiane dipendono dal luogo di residenza.",
        content: `<div class="page-header">
<h1>Come funziona la Svizzera (in modo semplice)</h1>
</div>
<div class="contenuto-articolo">
<p>La Svizzera è un paese <strong>federale</strong>: cantoni e comuni hanno competenze reali. Questo influisce su tasse, scuola e procedure.</p>

<h2>Perché ti riguarda subito</h2>
<ul>
  <li><strong>Tasse:</strong> variano molto tra cantoni e comuni</li>
  <li><strong>Scuola:</strong> organizzazione principalmente cantonale</li>
  <li><strong>Amministrazione:</strong> pratiche e tempi possono cambiare</li>
</ul>

<h2>Lingue</h2>
<p>Quattro lingue nazionali: tedesco, francese, italiano, romancio.</p>
</div>`
    },

    "articulo-cantones": {
        title: "I 26 cantoni svizzeri: cosa cambia da un cantone all’altro",
        description: "I cantoni non sono solo regioni: influenzano tasse, scuola e molte pratiche. Guida rapida per nuovi residenti.",
        keywords: "26 cantoni svizzera, differenze cantonali, tasse cantoni, scuola cantone",
        audience: "newcomer",
        featuredImage: "media/guides/cantones-suiza.jpg",
        category: "Organizzazione Territoriale",
        hub: "vivir-en-suiza",
        readingTime: 6,
        summary: "Scegliere un cantone significa scegliere molte regole: fiscalità, scuola e amministrazione possono variare notevolmente.",
        content: `<div class="page-header">
<h1>I cantoni della Svizzera: cosa sapere</h1>
</div>
<div class="contenuto-articolo">
<h2>Cosa varia spesso</h2>
<ul>
  <li>Carico fiscale e deduzioni</li>
  <li>Sistema scolastico e calendario</li>
  <li>Pratiche amministrative (appuntamenti, moduli, tempi)</li>
  <li>Lingua/e ufficiali</li>
</ul>
</div>`
    },

    "articulo-lenguas": {
        title: "Le lingue in Svizzera: Tedesco, Francese, Italiano e Romancio",
        description: "Guida alle 4 lingue nazionali: regioni linguistiche, cantoni bilingui e consigli per chi arriva.",
        keywords: "lingue svizzera, regioni linguistiche, svizzero tedesco, romandia, ticino, romancio",
        audience: "newcomer",
        featuredImage: "media/guides/lenguas-suiza.png",
        category: "Cultura & Lingue",
        hub: "vivir-en-suiza",
        readingTime: 5,
        summary: "La Svizzera ha 4 lingue nazionali. La lingua da imparare dipende esclusivamente dal cantone in cui decidi di stabilirti: tedesco a est e al centro, francese a ovest, italiano in Ticino.",
        content: `
            <div class="article-content">
                <p>La Svizzera è uno dei pochi paesi al mondo con quattro lingue nazionali ufficiali. Tuttavia, c'è un errore molto comune all'arrivo: credere che l'inglese sia sufficiente per l'integrazione. Non è così. La lingua del tuo cantone di residenza è la chiave per il lavoro, le procedure amministrative e l'integrazione sociale.</p>

                <h2>Le 4 lingue nazionali</h2>

                <h3>🇩🇪 Tedesco — Svizzera Tedesca</h3>
                <p>Parlato da circa il <strong>63%</strong> della popolazione. Copre gran parte della Svizzera centrale e orientale: Zurigo, Berna, Basilea, Lucerna, Zugo, Svitto, San Gallo e la maggior parte dei cantoni interni.</p>

                <p>Ma c'è una particolarità fondamentale: nella vita quotidiana, gli svizzeri tedeschi non parlano il tedesco standard. Parlano lo <strong>svizzero tedesco</strong> (<em>Schwiizertüütsch</em>), un insieme di dialetti orali che variano da cantone a cantone e che possono essere quasi incomprensibili per chi ha studiato il tedesco standard. I testi scritti (contratti, lettere, moduli), invece, sono in tedesco standard (<em>Hochdeutsch</em>).</p>

                <div class="callout">
                    <strong>Per chi non è di lingua tedesca:</strong> Il tedesco è impegnativo, ma assolutamente fattibile. Con un livello B1 puoi già lavorare nella maggior parte dei lavori non specializzati. Molti corsi di tedesco in Svizzera sono sovvenzionati o gratuiti per i residenti.
                </div>

                <h3>🇫🇷 Francese — Romandia</h3>
                <p>Parlato da circa il <strong>23%</strong> della popolazione. Corrisponde ai cantoni dell'ovest: Ginevra, Vaud, Neuchâtel, Giura e parte del Vallese, Friburgo e Berna. Quest'area è chiamata informalmente <em>Romandia</em>.</p>

                <p>Il francese svizzero è molto simile al francese standard, con alcune differenze lessicali che non rappresentano una vera barriera. Ad esempio, in alcuni cantoni della Romandia si usa <em>huitante</em> invece di <em>quatre-vingts</em> (80).</p>

                <div class="callout info">
                    <strong>Suggerimento pratico:</strong> Il francese è spesso l'opzione più accessibile per chi ha radici latine. Il tempo di apprendimento è significativamente più breve rispetto al tedesco.
                </div>

                <h3>🇮🇹 Italiano — Ticino</h3>
                <p>Parlato da circa l'<strong>8%</strong> della popolazione, principalmente nel Canton Ticino (TI) e in alcune valli meridionali del Canton Grigioni. Il Ticino è l'unico cantone puramente italofono e ha un'identità culturale molto mediterranea.</p>

                <p>L'italiano è molto vicino allo spagnolo e al francese. Tuttavia, il mercato del lavoro in Ticino è più piccolo e molte posizioni richiedono anche il tedesco o l'inglese per collaborare con il resto del paese.</p>

                <h3>🏔️ Romancio (Rumantsch)</h3>
                <p>Parlato da meno dell'<strong>1%</strong> della popolazione, esclusivamente in parti del Canton Grigioni. È una lingua romanza con cinque diverse varianti scritte. Ha lo status di lingua nazionale ed è co-ufficiale nelle regioni in cui viene parlata.</p>

                <h2>Cantoni bilingui e trilingui</h2>

                <p>Tre cantoni hanno due o più lingue ufficiali:</p>
                <ul>
                    <li><strong>Berna, Friburgo, Vallese:</strong> Francese e Tedesco.</li>
                    <li><strong>Grigioni:</strong> Tedesco, Italiano e Romancio.</li>
                </ul>

                <div class="callout warning">
                    <strong>Integrazione e lingua:</strong> Non sottovalutare l'importance della lingua locale. Anche se lavori in inglese, conoscere la lingua del tuo cantone è essenziale per capire il contratto d'affitto, le tasse e per farsi degli amici locali.
                </div>
            </div>`
    },

    "articulo-consulados": {
        title: "Consolati spagnoli in Svizzera: dove sono e cosa fanno",
        description: "Guida ai consolati spagnoli (Ginevra, Berna, Zurigo): servizi, iscrizione consolare, passaporti/DNI e appuntamenti.",
        keywords: "consolato spagnolo svizzera, iscrizione consolare, rinnovo passaporto",
        audience: "newcomer",
        featuredImage: "media/guides/consulados-espanoles-suiza.jpg",
        category: "Risorse",
        hub: "tramites",
        readingTime: 5,
        summary: "Se sei cittadino spagnolo residente in Svizzera, l’iscrizione consolare è fondamentale. Prenota gli appuntamenti con largo anticipo.",
        content: `<div class="page-header">
<h1>Consolati spagnoli in Svizzera</h1>
</div>
<div class="contenuto-articolo">
<h2>Indirizzi e telefoni</h2>
<ul>
  <li><strong>Ginevra:</strong> Avenue Blanc 53, 1202 Ginevra<br><strong>Telefono:</strong> +41 22 749 14 60</li>
  <li><strong>Berna:</strong> Marienstrasse 12, 3005 Berna<br><strong>Telefono:</strong> +41 31 356 22 20</li>
  <li><strong>Zurigo:</strong> Riedtlistrasse 17, 8006 Zurigo<br><strong>Telefono:</strong> +41 44 368 61 00</li>
</ul>

<h2>Servizi principali</h2>
<ul>
  <li>Iscrizione consolare (RECA/CERA)</li>
  <li>Passaporto e DNI (di solito su appuntamento)</li>
  <li>Stato civile</li>
  <li>Assistenza in emergenza</li>
</ul>

<h2>Appuntamenti</h2>
<p>Per la maggior parte delle pratiche serve un appuntamento. Consulta le pagine ufficiali per istruzioni aggiornate:</p>
<ul>
  <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consolato a Ginevra</a></li>
  <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consolato a Berna</a></li>
  <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consolato a Zurigo</a></li>
</ul>
</div>`
    }
};

    const slugMap = {
        "articulo-permisos": "permessi-soggiorno-svizzera-l-b-c",
        "articulo-alquiler": "affittare-appartamento-svizzera-processo",
        "articulo-fianzas": "deposito-affitto-diritti-inquilino",
        "articulo-costo-vida": "costo-della-vita-svizzera-budget",
        "articulo-lamal": "assicurazione-malattia-svizzera-lamal",
        "articulo-franquicia": "franchigia-partecipazione-costi-salute",
        "articulo-social-security": "sicurezza-sociale-svizzera-pilastri",
        "articulo-seguros-sociales": "sicurezza-sociale-svizzera-avs-ai-lpp",
        "articulo-frontaliers": "lavoratori-frontalieri-regole-tasse",
        "articulo-diplomas": "riconoscimento-diplomi-stranieri-svizzera",
        "articulo-sistema-escolar": "sistema-scolastico-svizzero-spiegato",
        "articulo-sistema-salud": "sistema-sanitario-medici-emergenze",
        "articulo-transporte": "trasporti-pubblici-fss-metaprezzo",
        "articulo-ciudadania": "cittadinanza-svizzera-naturalizzazione",
        "articulo-consulados": "consolati-spagna-svizzera",
        "articulo-tramites-llegada": "checklist-primi-passi-in-svizzera",
        "articulo-trabajar-sin-permiso-fisico": "lavorare-senza-permesso-fisico",
        "articulo-reagrupacion-familiar": "ricongiungimento-familiare-svizzera",
        "articulo-subalquiler": "subaffitto-svizzera-regole-contratti",
        "articulo-jubilacion": "pensione-svizzera-avs-lpp-3-pilastri"
    };

    Object.entries(slugMap).forEach(([key, slug]) => {
        if (window.siteContent.it.articles[key]) window.siteContent.it.articles[key].slug = slug;
    });
})();
