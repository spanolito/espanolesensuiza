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
                <p>In Svizzera esistono diversi permessi di soggiorno per i cittadini dell'Unione Europea.<br>
                I più comuni sono i permessi L, B e C.<br>
                Ognuno corrisponde a una situazione diversa in base al tipo di contratto e alla durata del soggiorno.<br>
                La tabella seguente riassume le principali caratteristiche. Se stai pianificando il tuo trasferimento, vedi anche <a href="#/mudarse-a-suiza-desde-espana">la guida passo dopo passo</a>.</p>
                <table class="info-table">
                    <thead><tr><th>Permesso</th><th>Per chi (tipico)</th><th>Durata</th><th>Note</th></tr></thead>
                    <tbody>
                        <tr><td><strong>L</strong></td><td>Contratto temporaneo</td><td>Legata al contratto</td><td>Più restrizioni; dipende dal caso/cantone</td></tr>
                        <tr><td><strong>B</strong></td><td>Soggiorno con lavoro/studio</td><td>Solitamente diversi anni</td><td>Imposta alla fonte frequente all'inizio</td></tr>
                        <tr><td><strong>C</strong></td><td>Domicilio</td><td>Rinnovabile</td><td>Maggiore stabilità amministrativa</td></tr>
                        <tr><td><strong>G</strong></td><td>Frontalieri</td><td>Solitamente diversi anni</td><td>Regole fiscali speciali secondo gli accordi</td></tr>
                    </tbody>
                </table>
                <div class="callout info">
                    <strong>Consiglio pratico</strong>
                    <p>Con un permesso L può essere più difficile affittare un alloggio tramite un'agenzia immobiliare. Molte organizzazioni preferiscono inquilini con permesso B o con un contratto di lavoro a tempo indeterminato.</p>
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
        title: "Tasse in Svizzera: federale, cantonale e comunale",
        description: "Comprendi il sistema di tripla tassazione in Svizzera: della Confederazione, dei cantoni e dei comuni.",
        keywords: "tasse svizzera, fiscalità svizzera, cantoni imposte",
        audience: 'worker',
        category: 'Sistema Tributario',
        hub: 'impuestos',
        slug: "tasse-svizzera",
        readingTime: 12,
        featuredImage: "media/guides/impuestos-suiza.png",
        imageAlt: "Moduli fiscali, calcolatrice e monete svizzere su una scrivania ordinata",
        summary: 'In Svizzera paghi le tasse a 3 livelli. Le cantonali e comunali costituiscono il carico maggiore e variano drasticamente anche attraversando la strada.',
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>In Svizzera, le tasse non si capiscono guardando un "tipo nazionale" e basta. Il paese è federale e il tuo carico fiscale dipende molto da <strong>dove vivi</strong> (cantone e comune), dal tuo stato civile, dai figli e dal livello di reddito. Due persone con lo stesso stipendio possono pagare diversamente solo per vivere in comuni diversi.</p>

                <div class="callout info">
                    <strong>Punti chiave:</strong>
                    <ul>
                        <li>Paghi le tasse a <strong>tre livelli</strong>: Confederazione, cantone e comune.</li>
                        <li>La parte cantonale e comunale di solito è quella che varia di più (e quella che conta più nel tuo budget).</li>
                        <li>Molti neo-arrivati con permesso L/B cominciano con <a href="#/imposta-fonte-svizzera">imposta alla fonte</a> (ritenuta in busta paga).</li>
                    </ul>
                </div>

                <h2>Come funziona il sistema</h2>
                <h3>1) Imposta federale diretta</h3>
                <p>È il componente nazionale. Si applica uniformemente su tutto il territorio, con scale progressive. Di solito è una parte minore della tua fattura totale rispetto a cantone e comune.</p>

                <h3>2) Imposte cantonali</h3>
                <p>Ogni cantone definisce scale, detrazioni e regole. Oltre all'imposta sul reddito, in molti cantoni esiste un'imposta sul <strong>patrimonio/fortuna</strong> (con soglie e regole proprie). Ecco perché parlare di "tasse in Svizzera" senza menzionare il cantone è fermarsi a metà.</p>

                <h3>3) Imposte comunali</h3>
                <p>In molti cantoni, il comune applica un coefficiente o moltiplicatore sulla base dell'imposta cantonale. Risultato: trasferirsi "un paio di chilometri" può cambiare la tua fiscalità senza cambiare lavoro.</p>

                <h3>4) Ritenuta vs dichiarazione annuale</h3>
                <p>Ci sono due grandi forme di pagamento:</p>
                <ul>
                    <li><strong>Imposta alla fonte:</strong> il tuo datore di lavoro trattiene mensilmente sulla busta paga (molto comune con permessi L/B).</li>
                    <li><strong>Dichiarazione ordinaria:</strong> dichiari annualmente e paghi/adegui in base al calcolo (frequente con permesso C e in altri casi).</li>
                </ul>
                <p>In determinati casi, anche se sei a ritenuta, potresti essere obbligato a una dichiarazione ordinaria o a una regolarizzazione (a seconda del cantone e della situazione). Se hai dubbi, non rimandare a "quando arriverà la lettera": consulta presto.</p>

                <h3>5) Anno fiscale, fatture e "sorprese"</h3>
                <p>Nella dichiarazione ordinaria, è normale che esistano pagamenti provvisori o fatture su conto (a seconda del cantone) e successivi conguagli. Per questo, anche se lo stipendio è stabile, può arrivare un calcolo finale mesi dopo. La raccomandazione pratica è semplice: <strong>mettere da parte un margine</strong> e non pianificare le finanze al centesimo.</p>

                <h3>6) Imposta ecclesiastica (a seconda del cantone e dell'affiliazione)</h3>
                <p>In alcuni cantoni esiste un'imposta legata all'affiliazione religiosa (chiesa). Se non sei membro, in linea di principio non dovrebbe applicarsi. Poiché è un argomento sensibile e cantonale, consultalo nella documentazione del tuo cantone se vedi un concetto che non capisci.</p>

                <h2>Requisiti e regole</h2>
                <h3>Documenti che di solito sono la base della tua fiscalità</h3>
                <ul>
                    <li><strong>Lohnausweis / certificato salariale:</strong> il documento annuale con il tuo salario e le voci.</li>
                    <li><strong>Stato civile e figli:</strong> influiscono sulle tariffe alla fonte e sulle detrazioni.</li>
                    <li><strong>Domicilio fiscale (comune):</strong> determina gran parte della fattura.</li>
                    <li><strong>Patrimonio e debiti:</strong> se applicabili (particolarmente rilevante nei cantoni con imposta di fortuna).</li>
                </ul>

                <h3>Cosa significa "essere a ritenuta" in pratica</h3>
                <p>Se sei a ritenuta, l'amministrazione fiscale applica una tariffa standard basata su categorie (stato civile, figli, ecc.). L'importante per te è:</p>
                <ul>
                    <li>Verificare che la tua categoria sia corretta (i cambiamenti familiari contano).</li>
                    <li>Sapere se il tuo cantone consente <strong>correzioni</strong> o regolarizzazioni per detrazioni (ad esempio, contributi al 3o pilastro, spese di formazione, ecc.).</li>
                    <li>Capire che alcune situazioni/soglie potrebbero portarti a una dichiarazione ordinaria (secondo le regole cantonali e federali).</li>
                </ul>

                <h3>Cosa succede se fai una dichiarazione ordinaria</h3>
                <p>Nella dichiarazione, il cantone e il comune ti applicano regole di detrazioni e scale. Possono esistere detrazioni per:</p>
                <ul>
                    <li>Contributi previdenziali (ad esempio, 3o pilastro).</li>
                    <li>Spese professionali (secondo le regole cantonali).</li>
                    <li>Spese per cura dei figli (secondo il cantone).</li>
                    <li>Interessi su debiti (secondo il cantone).</li>
                </ul>
                <p>L'elenco esatto delle detrazioni e dei limiti è <strong>dipendente dal cantone</strong>. Per questo motivo, non copiare consigli fiscali da un cantone all'altro senza verifica.</p>

                <h3>Ti trasferisci dentro la Svizzera: perché cambia tutto</h3>
                <p>In Svizzera, il domicilio fiscale è fondamentale. Se ti trasferisci di comune o cantone, non solo cambiano i percentuali: possono cambiare detrazioni, moduli, termini e la forma di pagamento. Non è raro che il primo anno dopo un trasferimento appaiano conguagli perché il sistema "si ricalcola" con il tuo nuovo domicilio.</p>

                <h2>Esempi concreti</h2>
                <h3>Esempio 1 — Stesso stipendio, comune diverso</h3>
                <p>Ti viene offerto lo stesso stipendio nella stessa azienda, ma stai dubitando tra due comuni vicini. Se un comune ha un moltiplicatore alto e l'altro basso, il tuo "netto reale" cambia. Per questo, quando confronti gli affitti, confronta anche le tasse (in Svizzera vanno insieme).</p>

                <h3>Esempio 2 — Ti sposi a metà anno</h3>
                <p>Un cambio di stato civile può cambiare la tariffa alla fonte o le tue detrazioni. In pratica, bisogna notificare i cambiamenti e conservare la documentazione. L'errore tipico è rimandare alla fine e poi sorprendersi dei conguagli.</p>

                <h3>Esempio 3 — Reddito extra (autonomo, affitto, investimenti)</h3>
                <p>Se hai redditi aggiuntivi, la ritenuta standard potrebbe non riflettere la tua situazione finale. È un caso tipico in cui potrebbe esserci un obbligo di dichiarare o regolarizzare. Il consiglio pratico: prevedi e metti da parte denaro.</p>

                <h3>Esempio 4 — Ti trasferisci di cantone in estate</h3>
                <p>Lavori tutto l'anno, ma cambi cantone a metà. Sebbene sia "lo stesso paese", fiscalmente è un cambio importante: comunicalo nei tuoi adempimenti di domicilio e assumi che il calcolo finale potrebbe variare rispetto alle tue aspettative.</p>

                <h2>Errori comuni</h2>
                <ul>
                    <li><strong>Credere che "in Svizzera si paga poco" senza guardare cantone/comune:</strong> la differenza può essere grande.</li>
                    <li><strong>Non rivedere la categoria a ritenuta:</strong> un errore di categoria può farti pagare male tutto l'anno.</li>
                    <li><strong>Non conservare il certificato salariale:</strong> è il pezzo centrale di qualsiasi correzione o dichiarazione.</li>
                    <li><strong>Non pianificare la liquidità:</strong> in Svizzera possono arrivare conguagli e fatture successive; non vivere al limite.</li>
                </ul>

                <h2>Consigli pratici</h2>
                <ul>
                    <li>Se sei appena arrivato, cominci a capire <a href="#/imposta-fonte-svizzera">imposta alla fonte</a>.</li>
                    <li>Quando scegli dove vivere, guarda il "pacchetto completo": affitto + tasse + trasporto.</li>
                    <li>Se cambi comune o cantone, assumi che cambiano le regole e rivedi il tuo budget.</li>
                    <li>Crea una cartella fiscale annuale (PDF e lettere): Lohnausweis, contratti, ricevute del 3o pilastro e comunicazioni del cantone.</li>
                    <li>Se hai dubbi, consulta l'autorità fiscale del tuo cantone: una chiamata tempestiva evita errori costosi.</li>
                    <li>Collegati a questa guida con <a href="#/costo-vita-svizzera">costo della vita</a> e <a href="#/lavoratori-frontalieri-svizzera">lavoratori frontalieri</a> se applicabile.</li>
                </ul>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href="https://www.estv.admin.ch/" target="_blank" rel="noopener noreferrer">AFC / ESTV — Amministrazione federale delle contribuzioni</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portale ufficiale svizzero</a></li>
                </ul>
            </div>
        `
    },


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
        title: "RAV e disoccupazione in Svizzera: come funziona, requisiti e procedure",
        description: "Guida pratica del sistema di assicurazione contro la disoccupazione svizzera (ALV/AC): requisiti, termini, iscrizione al RAV, obblighi e sanzioni.",
        keywords: "RAV svizzera, disoccupazione svizzera, assicurazione disoccupazione svizzera, ALV AC, sistema disoccupazione svizzera",
        audience: "worker",
        category: "Lavoro",
        hub: "trabajo",
        slug: "disoccupazione-svizzera",
        readingTime: 12,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        imageAlt: "Ufficio RAV in Svizzera con consulenti che aiutano i candidati nella loro ricerca di lavoro",
        summary: "Se perdi il lavoro in Svizzera, il RAV (e il fondo disoccupazione) può coprire parte del tuo salario, ma richiede termini e una ricerca di lavoro dimostrabile.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>In Svizzera, la "disoccupazione" (assicurazione ALV/AC) è un sistema molto utile, ma <strong>esigente</strong>. Non si tratta solo di "iscriversi": si basa su documentazione, termini e una ricerca di lavoro dimostrabile. Inoltre, ci sono due attori distinti e conviene capirli dal primo giorno:</p>
                <ul>
                    <li><strong>RAV / ORP:</strong> l'ufficio regionale di collocamento (follow-up, strategia, appuntamenti e controllo).</li>
                    <li><strong>Cassa disoccupazione (Kasse / caisse):</strong> valuta il tuo diritto e <strong>paga</strong> la prestazione.</li>
                </ul>
                <p>I dettagli (ad esempio, come richiedere un appuntamento, moduli specifici o ritmo di follow-up) possono variare a seconda del <strong>cantone</strong> e dell'ufficio. La logica generale è comune in tutta la Svizzera.</p>

                <div class="callout warning">
                    <strong>Messaggio chiaro:</strong> se il tuo contratto termina tra 2–4 settimane, inizia già oggi a conservare prove di ricerca. Molti fascicoli si complicano perché non riesci a dimostrare "cosa hai fatto" prima dell'ultimo giorno.
                </div>

                <h2>Come funziona il sistema</h2>
                <h3>1) Cosa si paga (spiegazione pratica)</h3>
                <p>La prestazione si calcola in base al tuo salario assicurato e viene normalmente pagata sotto forma di <strong>indennità giornaliere</strong>. Come ordine di grandezza, di solito si parla di un tasso del <strong>70%</strong> del salario assicurato, o <strong>80%</strong> in certi casi (ad esempio, con figli a carico). Ci sono limiti massimi e regole specifiche su bonus, tredicesime, lavoro a tempo parziale, ecc.</p>
                <p>La cassa disoccupazione è chi fa il calcolo esatto con i tuoi documenti. Non prendere i percentuali come "promessa": usali per pianificare il tuo budget.</p>

                <h3>2) RAV (controllo e reinserimento) vs cassa (pagamento)</h3>
                <p>Il RAV controlla che tu stia adempiendo ai tuoi obblighi: candidature, disponibilità, colloqui e misure (corsi, programmi, tirocini). La cassa verifica il diritto e effettua il pagamento. Puoi essere iscritto al RAV e, allo stesso tempo, avere il pagamento bloccato se mancano documenti o se ci sono sanzioni.</p>

                <h3>3) Il ciclo mensile (quello che veramente ti chiedono)</h3>
                <p>In molti casi, il "ritmo" del sistema è così:</p>
                <ul>
                    <li>Consegni un <strong>elenco di candidature</strong> con prove (e a volte moduli di controllo) entro il termine indicato.</li>
                    <li>Hai <strong>appuntamenti</strong> con il tuo consulente RAV e devi presentarti preparato (CV aggiornato, offerte elaborate, strategia).</li>
                    <li>Se lavori alcuni giorni o a tempo parziale, informi e la prestazione si adegua in base ai redditi.</li>
                </ul>
                <p>Inoltre, potrebbero esserci <strong>giorni di attesa</strong> o particolarità iniziali a seconda della tua situazione. Non lasciarlo all'intuizione: chiedi alla tua cassa quali date e documenti determinano il primo pagamento.</p>

                <h3>4) Redditi intermedi (Zwischenverdienst)</h3>
                <p>Un punto chiave: accettare lavori temporanei o a tempo parziale durante la disoccupazione può essere positivo. In alcuni casi, il sistema compensa parte della differenza tra il tuo salario precedente e il nuovo reddito. Chiedi sempre alla cassa come dichiarare questi redditi e qual è l'impatto sul tuo diritto.</p>

                <h2>Requisiti e regole</h2>
                <h3>1) Requisiti tipici (visione generale)</h3>
                <p>Il diritto esatto dipende dal caso, ma normalmente ruota intorno a:</p>
                <ul>
                    <li>Avere <strong>versato i contributi</strong> per il tempo minimo richiesto nel periodo di riferimento.</li>
                    <li>Essere <strong>disoccupato</strong> o con riduzione riconosciuta e <strong>idoneo</strong> al lavoro.</li>
                    <li>Essere <strong>collocabile</strong>: essere disponibile e disposto ad accettare un lavoro ragionevole.</li>
                    <li>Condurre una <strong>ricerca attiva</strong> e dimostrabile.</li>
                </ul>

                <h3>2) Documenti che solitamente ti chiedono</h3>
                <p>Prepara un "dossier disoccupazione" con:</p>
                <ul>
                    <li>Documento di identità e permesso di residenza.</li>
                    <li>Contratto di lavoro e <strong>lettera di licenziamento</strong> o conferma di fine contratto.</li>
                    <li>Cedolini recenti, certificati salariali se applicabili, dati bancari (IBAN).</li>
                    <li>Moduli della cassa e giustificativi della tua ricerca.</li>
                    <li>Documenti di situazioni speciali (ad esempio, malattia, maternità, riduzione di orario, ecc.).</li>
                </ul>
                <p>Se sei malato durante il processo, di solito è essenziale fornire un <strong>certificato medico</strong> e comunicarlo immediatamente: influisce sulla tua disponibilità e sui tuoi obblighi.</p>

                <h3>3) Ricerca di lavoro: quantità e qualità</h3>
                <p>In Svizzera ci si aspetta una ricerca <strong>regolare</strong> e organizzata. Il numero minimo di candidature può variare per situazione e cantone. Quello che di solito conta non è solo la quantità, ma:</p>
                <ul>
                    <li>Che le candidature siano <strong>ragionevoli</strong> (posizioni compatibili con il tuo profilo e il mercato).</li>
                    <li>Che tu conservi <strong>prove</strong> (email, PDF, screenshot di portali).</li>
                    <li>Che rispondi alle offerte "assegnate" dal RAV e non lasci messaggi senza risposta.</li>
                </ul>

                <h3>4) Dimissioni, "licenziamento concordato" e sanzioni</h3>
                <p>Se rassegni le dimissioni volontariamente o c'è una fine del contratto "concordata" senza una causa oggettiva, ci potrebbero essere <strong>giorni di sanzione</strong> (periodi senza pagamento). Non significa che "non ricevi mai", ma il sistema penalizza le decisioni evitabili. Se c'è un motivo serio (salute, molestie, cambiamenti sostanziali), documenta e consulta prima di agire.</p>

                <h2>Esempi concreti</h2>
                <h3>Esempio 1 — Licenziamento con preavviso</h3>
                <p>Ti dicono oggi che in un mese finisci. Cominci subito con le candidature, conservi le prove, richiedi il tuo certificato di lavoro (Arbeitszeugnis) e prepari il dossier. Quando ti iscrivi, puoi dimostrare la ricerca precedente ed eviti discussioni sull'inattività.</p>

                <h3>Esempio 2 — Fine del contratto temporaneo</h3>
                <p>Anche se è "fine del contratto" e non "licenziamento", il sistema aspetta la stessa logica: ricerca documentata, iscrizione in tempo, disponibilità e rispetto dei termini.</p>

                <h3>Esempio 3 — Trovi un lavoro a tempo parziale di 2 mesi</h3>
                <p>Accetti un lavoro temporaneo mentre continui a cercare qualcosa di stabile. Informi il RAV/cassa, dichiari i redditi e mantieni gli obblighi. In molti casi, è meglio per il tuo fascicolo che rifiutare opportunità perché "non sono perfette".</p>

                <h2>Errori comuni</h2>
                <ul>
                    <li><strong>Iscriverti tardi:</strong> aspettare "a vedere se esce qualcosa" e perdere giorni o complicare il fascicolo.</li>
                    <li><strong>Non avere prove:</strong> dire "ho inviato CV" senza screenshot o email di solito finisce in sanzioni.</li>
                    <li><strong>Non andare agli appuntamenti:</strong> mancare a un appuntamento senza giustificazione può costare giorni di sanzione.</li>
                    <li><strong>Viaggiare senza permesso:</strong> uscire dal paese senza coordinamento può essere considerato mancanza di disponibilità.</li>
                    <li><strong>Non rispondere</strong> alle proposte del RAV o rifiutare un lavoro "ragionevole" senza una ragione solida.</li>
                </ul>

                <h2>Consigli pratici</h2>
                <ul>
                    <li>Organizza la tua ricerca come un lavoro: calendario, orari fissi e monitoraggio in foglio di calcolo.</li>
                    <li>Prepara il dossier "svizzero": CV, lettera, diplomi e certificati. Appoggiati a <a href="#/cercare-lavoro-svizzera">Cercare lavoro in Svizzera</a>.</li>
                    <li>Metti da parte denaro: il primo pagamento può tardare e potrebbero esserci conguagli. Evita di rimanere senza margini.</li>
                    <li>Fai "candidature a prova di RAV": conserva PDF, email e screenshot con data. Una candidatura senza prova di solito conta come "non fatta".</li>
                    <li>Collegati alla tua situazione di disoccupazione con permessi e procedure: <a href="#/tramites-llegada-suiza">permessi</a>, <a href="#/imposta-fonte-svizzera">imposta alla fonte</a> se applicabile.</li>
                </ul>

                <h2>Fonti ufficiali</h2>
                <ul>
                    <li><a href="https://www.ch.ch/it/lavoro/disoccupazione/" target="_blank" rel="noopener noreferrer">ch.ch — Disoccupazione</a></li>
                    <li><a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer">SECO — Segreteria di Stato dell'Economia</a></li>
                </ul>

                <h2>Articoli correlati</h2>
                <ul>
                    <li><a href="#/cercare-lavoro-svizzera">Cercare lavoro in Svizzera</a></li>
                    <li><a href="#/contratti-di-lavoro-svizzera">Contratti di lavoro in Svizzera</a></li>
                    <li><a href="#/assicurazioni-sociali-svizzera">Assicurazioni sociali in Svizzera</a></li>
                </ul>
            </div>
        `
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
        featuredImage: "media/guides/buscar-empleo-heramientas.jpg",
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
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/medicos-urgencias-suiza.jpg",
        imageAlt: "Medico e paziente in uno studio medico svizzero",
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
        title: "Posso lavorare in Svizzera prima di ricevere il permesso fisico?",
        description: "Sì, puoi lavorare legalmente in Svizzera anche se la tessera del permesso impiega settimane ad arrivare. Spieghiamo come funziona il certificato provvisorio.",
        keywords: "lavorare senza permesso svizzera, permesso provvisorio svizzera, attestazione residenza svizzera, aspettare permesso svizzera",
        category: "Procedure Ordinarie",
        hub: "tramites",
        slug: "lavorare-senza-permesso-fisico",
        readingTime: 3,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/trabajar-antes-permiso-fisico-suiza.jpg",
        imageAlt: "Persona che lavora in Svizzera in un ambiente professionale",
        summary: "Puoi iniziare a lavorare dal primo giorno dopo la registrazione al comune. La tessera del permesso può richiedere settimane, ma il certificato di registrazione ha già valore legale.",
        content: `
            <div class="article-content">
                <p>Questa è una delle domande più frequenti dei neo-arrivati e la risposta genera molta confusione: <strong>sì, puoi lavorare legalmente in Svizzera anche se la tessera fisica del permesso non è ancora arrivata</strong>.</p>

                <h2>Come funziona il processo</h2>
                <p>Quando ti registri presso l'ufficio del Controllo abitanti, ricevi subito un <strong>certificato provvisorio di residenza</strong> ("Attestation de résidence" in francese, "Meldebestätigung" in tedesco). Questo documento attesta legalmente che sei registrato e autorizzato a risiedere e lavorare in Svizzera.</p>
                <p>La tessera fisica (carta plastificata con la tua foto) viene emessa dal servizio cantonale di migrazione e può impiegare tra 4 e 12 settimane per arrivare per posta. Questo ritardo è completamente normale e nessun datore di lavoro serio lo ignora.</p>

                <h2>Quale documento usa il lavoratore nel frattempo?</h2>
                <p>Durante il periodo di attesa, il lavoratore utilizza il certificato provvisorio come comprovante. Per l'azienda, è sufficiente per processare lo stipendio e adempiere ai propri obblighi amministrativi.</p>

                <div class="callout info">
                    <strong>Caso tipico:</strong> Molti lavoratori iniziano un lunedì e si registrano al comune il venerdì precedente. Con il certificato provvisorio in mano, si inseriscono senza problemi. La tessera del permesso arriva settimane dopo per posta.
                </div>

                <h2>E se il datore di lavoro mi chiede il permesso fisico?</h2>
                <p>Se un datore di lavoro crea problemi, puoi spiegargli che il processo è standard e che il certificato provvisorio ha piena validità legale. Nelle grandi aziende con HR questo è routine. Se ci sono dubbi, sia il datore che il dipendente possono contattare il servizio cantonale di migrazione per verificare lo stato della richiesta.</p>

                <h2>Quando arriva la tessera del permesso?</h2>
                <ul>
                    <li>Cantoni con meno richieste: 3–5 settimane.</li>
                    <li>Ginevra, Zurigo (alta domanda): 8–12 settimane o più.</li>
                </ul>
                <p>Riceverai la tessera nella cassetta postale del tuo domicilio registrato. Per questo è importante che il campanello abbia il tuo nome dal primo giorno.</p>

                <div class="callout warning">
                    <strong>Importante:</strong> La tessera del permesso ha una data di scadenza. Quando si avvicina, riceverai una notifica per il rinnovo. Non aspettare che scada per avviare la procedura.
                </div>
            </div>
        `
    },


    "articulo-reagrupacion-familiar": {
        title: "Ricongiungimento familiare in Svizzera: come portare la famiglia",
        description: "Guida completa per portare il coniuge e i figli in Svizzera. Condizioni, documentazione, termini e diritti dei familiari ricongiuntí.",
        keywords: "ricongiungimento familiare svizzera, portare famiglia svizzera, permesso familiare svizzera, coniuge svizzera, apostilla svizzera",
        category: "Procedure Ordinarie",
        hub: "tramites",
        slug: "ricongiungimento-familiare-svizzera",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/reagrupacion-familiar-suiza.jpg",
        imageAlt: "Famiglia felice in arrivo in Svizzera con valigie in una stazione ferroviaria con le Alpi sullo sfondo",
        summary: "Se possiedi un Permesso B o C puoi portare il tuo coniuge e i figli minori di 18 anni. I familiari ottengono il loro permesso e hanno diritto a lavorare dal primo giorno.",
        content: `
            <div class="article-content">
                <p>Uno dei momenti più importanti nella vita di un emigrante è poter portare la sua famiglia. In Svizzera, il processo di ricongiungimento familiare è ben regolamentato ed è fattibile per i cittadini dell'UE, ma ha le sue regole e tempi specifici.</p>

                <h2>Chi può richiedere il ricongiungimento?</h2>
                <p>Possono richiederlo i titolari di un <strong>Permesso B o C in vigore</strong>. Con Permesso L (breve durata) le possibilità sono molto limitate. I familiari che possono essere ricongiuntí sono:</p>
                <ul>
                    <li>Coniuge (matrimonio ufficiale riconosciuto).</li>
                    <li>Partner di fatto registrato.</li>
                    <li>Figli minori di 18 anni (inclusi i figli adottivi).</li>
                    <li>In alcuni casi, genitori o familiari a carico con necessità accertate.</li>
                </ul>

                <h2>Condizioni che deve soddisfare il residente in Svizzera</h2>
                <ul>
                    <li><strong>Abitazione adeguata:</strong> L'appartamento deve avere spazio sufficiente per tutta la famiglia. Le autorità verificano questo aspetto.</li>
                    <li><strong>Mezzi economici sufficienti:</strong> Non dipendere dall'assistenza sociale.</li>
                    <li><strong>Permesso in vigore:</strong> Senza sanzioni e il permesso non in processo di revoca.</li>
                </ul>

                <h2>Documentazione necessaria</h2>
                <ul>
                    <li>Modulo ufficiale di ricongiungimento familiare (ufficio cantonale di migrazione).</li>
                    <li>Passaporti di tutti i familiari.</li>
                    <li>Certificato di matrimonio o unione di fatto <strong>apostillato e tradotto</strong>.</li>
                    <li>Certificati di nascita dei figli apostillati e tradotti.</li>
                    <li>Contratto di affitto dell'appartamento con spazio sufficiente.</li>
                    <li>Ultimi cedolini paga o giustificativo di reddito.</li>
                </ul>

                <div class="callout info">
                    <strong>L'Apostilla dell'Aia:</strong> I documenti ufficiali spagnoli devono recare l'Apostilla per essere validi in Svizzera. Si ottiene presso il Ministero degli Affari Esteri spagnolo o presso i Delegati del Governo. Richiedila in anticipo perché può richiedere diversi giorni.
                </div>

                <h2>Termini importanti</h2>
                <ul>
                    <li><strong>Cittadini UE con Permesso B:</strong> Entro 5 anni dal conseguimento del permesso.</li>
                    <li><strong>Titolari di Permesso C:</strong> Senza limite di tempo.</li>
                </ul>
                <p>Il processo richiede tra 4 e 12 settimane a seconda del cantone e del carico di lavoro.</p>

                <h2>Quale permesso ricevono i familiari?</h2>
                <ul>
                    <li>Principale con Permesso B → familiari ottengono Permesso B.</li>
                    <li>Principale con Permesso C → familiari ottengono Permesso C.</li>
                </ul>
                <p><strong>Diritto a lavorare:</strong> Sì. Il coniuge ha pieno diritto a lavorare con il permesso ottenuto. I figli accedono automaticamente al sistema scolastico pubblico svizzero.</p>

                <div class="callout tip">
                    <strong>Consiglio pratico:</strong> Se devi cercare un appartamento più grande per soddisfare il requisito di abitazione adeguata, fallo prima di presentare la domanda. È uno dei motivi più comuni di ritardo nel processo.
                </div>
            </div>
        `
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
        title: "Pensione in Svizzera: quanto prenderai in base all'età di arrivo",
        description: "Analisi della pensione in Svizzera (AVS e LPP) con esempi concreti per chi arriva a 30, 40 o 50 anni.",
        keywords: "pensione svizzera, rendita svizzera, AVS, LPP, quanto prenderò di pensione in Svizzera",
        featuredImage: "media/guides/jubilacion-pension-suiza.jpg",
        category: "Previdenza Sociale",
        hub: "trabajo",
        readingTime: 5,
        summary: "La pensione svizzera si basa su tre pilastri. Gli anni di contribuzione fanno la differenza: prima arrivi, più solida sarà la tua rendita.",
        content: `
            <div class="article-content">
                <p>Una delle domande più frequenti è quale pensione si ottenga dopo una vita lavorativa in Svizzera. Il sistema si basa soprattutto su due pilastri: AVS e LPP.</p>
                
                <h2>I pilastri fondamentali</h2>
                <ul>
                    <li><strong>1° pilastro (AVS):</strong> Pensione statale. Il minimo si aggira intorno ai 1.200 CHF e il massimo ai 2.450 CHF mensili. Dipende dagli anni di contribuzione senza interruzioni.</li>
                    <li><strong>2° pilastro (LPP):</strong> Cassa pensione professionale. È il capitale accumulato durante il lavoro. Al pensionamento puoi scegliere tra una rendita mensile o il ritiro del capitale.</li>
                </ul>

                <h2>Esempi in base all'età di arrivo</h2>
                <p>Le prospettive cambiano molto a seconda di quando inizi a contribuire nel paese:</p>
                <ul>
                    <li><strong>Arrivo a 30 anni:</strong> Scenario ideale. Dopo 35 anni di contributi, è realistico puntare a una pensione totale tra 4.000 e 5.500 CHF (AVS + LPP).</li>
                    <li><strong>Arrivo a 40 anni:</strong> Il tempo inizia a essere più stretto. L'AVS sarà parziale e la LPP più contenuta. La pensione potrebbe aggirarsi tra 3.000 e 4.000 CHF.</li>
                    <li><strong>Arrivo a 50 anni:</strong> Caso delicato. Senza stipendi molto alti, la pensione totale potrebbe fermarsi tra 2.000 e 3.000 CHF, rendendo necessario un risparmio privato aggiuntivo.</li>
                </ul>

                <div class="callout tip">
                    <strong>Nota sugli accordi bilaterali:</strong> Gli anni lavorati in Spagna non si perdono; ogni paese pagherà la propria quota proporzionale al raggiungimento dell'età pensionabile.
                </div>
            </div>
        `
    },

    "articulo-vivir-sin-trabajar": {
        title: "Vivere in Svizzera senza lavorare: requisiti per residenti UE/AELS",
        description: "Guida su come risiedere in Svizzera senza attività lucrativa, con risparmi, rendite o pensione, e quali permessi servono.",
        keywords: "vivere in svizzera senza lavorare, permesso di soggiorno con risparmi, permesso B senza attività lucrativa",
        featuredImage: "media/guides/residir-en-suiza-sin-trabajo.jpg",
        category: "Procedure Ordinarie",
        hub: "tramites",
        readingTime: 4,
        summary: "È possibile vivere in Svizzera senza lavorare, ma devi dimostrare mezzi economici sufficienti e disporre di un'assicurazione sanitaria completa (LAMal).",
        content: `
            <div class="article-content">
                <p>Molti si chiedono se sia possibile stabilirsi in Svizzera senza avere un contratto di lavoro. La risposta è sì, soprattutto per i cittadini UE/AELS, ma a condizioni rigorose.</p>
                
                <h2>Regole per cittadini UE/AELS</h2>
                <p>Se sei spagnolo o cittadino di un altro paese UE e prevedi di restare più di 90 giorni senza lavorare, devi registrarti e richiedere un permesso di soggiorno dimostrando:</p>
                <ul>
                    <li><strong>Mezzi economici sufficienti:</strong> Devi provare di avere risorse proprie, come risparmi, rendite o una pensione estera, per vivere senza ricorrere all'assistenza sociale svizzera.</li>
                    <li><strong>Assicurazione sanitaria (LAMal):</strong> È obbligatorio stipulare un'assicurazione sanitaria svizzera completa. Le assicurazioni di viaggio temporanee non bastano.</li>
                    <li><strong>Registrazione ufficiale:</strong> Devi iscriverti al controllo abitanti del comune in cui risiedi.</li>
                </ul>

                <h2>E per i cittadini extra UE?</h2>
                <p>In questo caso le regole sono molto più restrittive. In generale, la residenza senza attività lucrativa viene autorizzata solo in situazioni molto specifiche, come pensionamento, studi o motivi medici giustificati, sempre con solide garanzie finanziarie.</p>

                <div class="callout warning">
                    <strong>Importante:</strong> Essere registrato all'indirizzo di un amico non sostituisce il permesso di soggiorno. I controlli possono portare a multe o all'obbligo di lasciare il paese se la procedura non viene rispettata.
                </div>
            </div>
        `
    },

    "articulo-ai-invalidez": {
        title: "L'AI svizzera (Assicurazione invalidità): sostegno e reinserimento",
        description: "Capisci come funziona l'assicurazione invalidità in Svizzera. Il suo obiettivo principale è il reinserimento professionale prima della rendita.",
        keywords: "AI svizzera, invalidità svizzera, assicurazione incapacità lavorativa, rendita AI",
        featuredImage: "media/guides/seguro-invalidez-ai-suiza.jpg",
        category: "Assicurazioni Sociali",
        hub: "salud",
        readingTime: 4,
        summary: "L'AI non è un pensionamento anticipato. La sua filosofia è: prima la riabilitazione, poi la rendita. L'obiettivo è mantenere la persona attiva nel mondo del lavoro.",
        content: `
            <div class="article-content">
                <p>L'<i>Assicurazione invalidità</i> (AI) è una parte fondamentale del sistema di sicurezza sociale svizzero. Tuttavia, il suo funzionamento viene spesso frainteso da chi arriva da altri sistemi.</p>
                
                <h2>Riabilitazione prima della rendita</h2>
                <p>A differenza di altri paesi, l'obiettivo principale dell'AI non è pagare subito una pensione vitalizia, ma cercare di far recuperare alla persona la capacità lavorativa. Le misure possono includere:</p>
                <ul>
                    <li>Riabilitazione medica e professionale.</li>
                    <li>Adattamento del posto di lavoro o ausili tecnici.</li>
                    <li>Riqualificazione professionale, cioè formazione per un nuovo mestiere.</li>
                </ul>

                <h2>Quando si riceve la rendita?</h2>
                <p>La rendita d'invalidità viene concessa solo quando si dimostra che, dopo aver esaurito le misure di riabilitazione, la persona continua ad avere una perdita duratura della capacità di guadagno. La rendita può essere parziale o totale, a seconda del grado d'invalidità stabilito dagli esperti.</p>

                <h2>Domanda precoce</h2>
                <p>È fondamentale richiedere l'AI non appena si prevede che una malattia o un incidente causeranno un'incapacità prolungata, in genere superiore a un anno. Non aspettare che la situazione diventi critica: la procedura è lunga e richiede numerose valutazioni mediche e professionali.</p>
            </div>
        `
    },

    "articulo-vacunas": {
        title: "Vaccini in Svizzera: raccomandazioni e libertà di scelta",
        description: "Tutto sul calendario vaccinale svizzero. Non sono obbligatori per legge, ma sono ufficialmente raccomandati.",
        keywords: "vaccini svizzera, calendario vaccinale svizzero, UFSP vaccini, scuola vaccini svizzera",
        featuredImage: "media/guides/vacunacion-en-suiza.jpg",
        category: "Salute Pubblica",
        hub: "salud",
        readingTime: 4,
        summary: "In Svizzera non esistono vaccini obbligatori. Il sistema si basa sulle raccomandazioni dell'Ufficio federale della sanità pubblica (UFSP) e sulla responsabilità individuale.",
        content: `
            <div class="article-content">
                <p>Quando arrivano in Svizzera, molte famiglie si sorprendono nel vedere che il sistema vaccinale funziona in modo diverso rispetto ad altri paesi europei. Qui prevale la libertà di scelta del cittadino.</p>
                
                <h2>I vaccini sono obbligatori?</h2>
                <p><strong>No. In Svizzera non ci sono vaccini obbligatori</strong>, né per i bambini né per gli adulti. Nemmeno per entrare nella scuola pubblica. Il sistema si basa sul fatto che le famiglie si informino con il pediatra e decidano in base alle raccomandazioni ufficiali.</p>

                <h2>Raccomandazioni dell'UFSP (BAG)</h2>
                <p>L'Ufficio federale della sanità pubblica pubblica un calendario raccomandato che include i vaccini standard, come difterite, tetano, pertosse, polio, morbillo e altri. Inoltre, in Svizzera vengono raccomandati in particolare:</p>
                <ul>
                    <li><strong>Encefalite da zecche:</strong> Molto importante se fai attività all'aperto o frequenti boschi e zone verdi.</li>
                    <li><strong>Influenza e HPV:</strong> A seconda dell'età e dei gruppi a rischio.</li>
                </ul>

                <h2>Costo e assicurazione</h2>
                <p>I vaccini raccomandati nel calendario ufficiale sono coperti dall'assicurazione di base (LAMal), anche se possono essere soggetti alla franchigia scelta dall'assicurato.</p>
            </div>
        `
    },

    "articulo-danza-patos": {
        title: "Lo sapevi? La danza degli anatroccoli ha origini svizzere",
        description: "Scopri la storia di \"Der Ententanz\", la canzone contagiosa nata in Svizzera e diventata famosa in tutto il mondo.",
        keywords: "danza degli anatroccoli svizzera, Bobby Setter, Werner Thomas, curiosità svizzere",
        featuredImage: "media/guides/origen-danza-de-los-patos-suiza.jpg",
        category: "Cultura e Vita",
        hub: "vivir-en-suiza",
        readingTime: 3,
        summary: "Anche se sembra una canzone universale, la celebre danza degli anatroccoli fu composta da un fisarmonicista svizzero a Davos negli anni '50.",
        content: `
            <div class="article-content">
                <p>È quasi impossibile non averla mai sentita a un matrimonio, a una festa di paese o persino all'Oktoberfest. Quello che pochi sanno, però, è che la <strong>danza degli anatroccoli</strong> (<i>Der Ententanz</i>) ha un passaporto 100% svizzero.</p>
                
                <h2>Werner Thomas: il padre della melodia</h2>
                <p>La melodia fu composta alla fine degli anni '50 da <strong>Werner Thomas</strong>, un fisarmonicista di Davos. In origine la chiamò "Der Ententanz" e si ispirò ai movimenti degli uccelli mentre suonava in hotel e ristoranti della zona sciistica.</p>

                <h2>Da Davos al resto del mondo</h2>
                <p>Curiosamente, la canzone non diventò famosa subito. Fu negli anni '70 e '80 che diversi gruppi europei iniziarono a reinterpretarla, trasformandola in un successo globale con nomi come "The Birdie Song" o "La danse des canards".</p>

                <div class="callout info">
                    <strong>Lo sapevi?</strong> Werner Thomas compose questo brano semplicemente per invitare la gente a ballare in modo divertente e senza complicazioni. Missione compiuta.
                </div>
            </div>
        `
    },

    "articulo-introduccion-suiza": {
        featuredImage: "media/guides/introduccion-suiza-como-funciona.png",
        title: "Come funziona la Svizzera: guida completa per i nuovi residenti",
        description: "Guida completa sulla Svizzera: organizzazione federale, 26 cantoni, sistema politico, 4 lingue, differenze regionali, educazione e vita quotidiana. Essenziale prima di trasferirsi.",
        keywords: "svizzera come funziona, cantoni svizzera, federalismo, democrazia diretta, lingue svizzera, sistema scolastico svizzero, differenze cantoni",
        audience: 'newcomer',
        category: 'Paese',
        hub: 'vivir-en-suiza',
        slug: "introduzione-svizzera-come-funziona",
        readingTime: 10,
        dateUpdated: "Marzo 2026",
        summary: "La Svizzera non è un paese convenzionale. È una Confederazione di 26 cantoni autonomi, 4 lingue ufficiali, democrazia diretta e un federalismo che influisce sulla tua vita quotidiana dal primo giorno.",
        imageAlt: "Persone che si integrano nella comunità svizzera davanti a edifici pubblici",
        content: `
            <div class="article-content">
                <p>Se stai pensando di trasferirti in Svizzera, o sei appena arrivato, capire come funziona il paese è il primo passo. La Svizzera non funziona come la Spagna, né come la Francia, né come nessun altro paese europeo. Il suo sistema politico, la sua organizzazione territoriale e la sua cultura amministrativa sono unici — e influiscono sulla tua vita quotidiana dal momento in cui firmi un contratto, scegli un'assicurazione medica o ti registri nel comune.</p>

                <div class="callout info">
                    <strong>Perché è importante capire l'organizzazione del paese?</strong> Perché in Svizzera, le regole delle imposte, delle assicurazioni, della scolarità e delle procedure di residenza <strong>dipendono dal cantone in cui vivi</strong>, non solo dal governo federale.
                </div>

                <h2>La Svizzera in cifre</h2>
                <ul>
                    <li><strong>Capitale:</strong> Berna (sede del governo federale)</li>
                    <li><strong>Superficie:</strong> 41.285 km²</li>
                    <li><strong>Popolazione:</strong> ~8,9 milioni di abitanti</li>
                    <li><strong>Moneta:</strong> Franco svizzero (CHF)</li>
                    <li><strong>Confini:</strong> Germania (nord), Austria e Liechtenstein (est), Italia (sud), Francia (ovest)</li>
                    <li><strong>Organizzazione:</strong> Confederazione Elvetica — 26 cantoni autonomi</li>
                    <li><strong>Lingue nazionali:</strong> Tedesco, Francese, Italiano, Romancio</li>
                    <li><strong>Membro delle Nazioni Unite e EFTA</strong>, ma <strong>non dell'Unione Europea</strong></li>
                </ul>

                <h2 id="organizzazione">Sezione 1 — Cantoni e organizzazione territoriale</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-politico-cantones.png"
                         alt="Mappa politica della Svizzera con i 26 cantoni e i tre livelli di governo"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Ogni cantone ha una storia e competenze proprie all'interno dello Stato federale svizzero.
                    </figcaption>
                </figure>

                <p>La Svizzera è una <strong>Confederazione Elvetica</strong> formata da <strong>26 cantoni</strong>. Questa struttura esiste dal XIII secolo ed è la ragione per cui il paese ha un funzionamento così peculiare. Ogni cantone è, in essenza, un mini-stato con il proprio governo, il proprio parlamento e le proprie leggi.</p>

                <p>La struttura amministrativa ha tre livelli:</p>
                <ul>
                    <li><strong>Confederazione (livello federale):</strong> Il governo federale con sede a Berna. Gestisce la politica estera, la difesa, la moneta, il diritto civile e costituzionale, e le grandi linee della legislazione comuni a tutto il paese.</li>
                    <li><strong>Cantoni (26):</strong> Unità autonome con ampia competenza in fiscalità, educazione, sanità, polizia e amministrazione locale. "Cantone" equivale a una regione o comunità autonoma, ma con molto più potere che nella maggior parte dei paesi.</li>
                    <li><strong>Comuni (più di 2.000 municipalità):</strong> Il livello più vicino al cittadino. Gestiscono il registro degli abitanti (Contrôle des habitants), le imposte locali, i servizi di prossimità e alcune competenze educative.</li>
                </ul>

                <div class="callout">
                    <strong>Esempio pratico:</strong> Quando arrivi in Svizzera, non ti registri nello Stato. Ti registri nel <em>tuo comune</em> (municipio). Da lì, ti iscrivono, gestiscono il tuo permesso di residenza e determinano parte delle tue imposte.
                </div>

                <p>I 26 cantoni sono, in ordine di ingresso nella Confederazione: Uri, Svitto, Obvaldo, Nidvaldo, Glarona, Zugo, Friburgo, Soletta, Basilea-Città, Basilea-Campagna, Sciaffusa, Appenzello Esteriori, Appenzello Interiori, San Gallo, Grigioni, Argovia, Turgovia, Ticino, Vaud, Vallese, Neuchâtel, Ginevra, Giura, Berna, Lucerna e Zurigo.</p>

                <p><a href="https://www.ch.ch/en/cantons/" target="_blank" rel="noopener noreferrer">→ Vedi i portali ufficiali dei 26 cantoni su ch.ch</a></p>

                <h2 id="politica">Sezione 2 — Sistema politico svizzero</h2>

                <p>La Svizzera possiede una delle democrazie più partecipative del mondo. I cittadini non solo eleggono rappresentanti: <strong>votano direttamente sulle leggi</strong>, diverse volte all'anno.</p>

                <h3>Democrazia diretta</h3>
                <p>Quattro volte all'anno, gli svizzeri sono convocati per votare nei <strong>referendum</strong>. Questi possono influenzare dall'aumento dell'imposta sul tabacco fino a grandi riforme costituzionali. Non è solo simbolico: i risultati sono vincolanti e possono annullare le leggi approvate dal parlamento.</p>

                <h3>Iniziative popolari</h3>
                <p>Se 100.000 cittadini raccolgono firme in 18 mesi, possono proporre un cambio della Costituzione federale. Il popolo vota e, se c'è una maggioranza, il cambio si incorpora. Questo strumento ha modellato decisioni importanti come l'adozione della giornata lavorativa di 42 ore o il divieto di minareti (2009).</p>

                <h3>Referendum facoltativo</h3>
                <p>Se 50.000 cittadini raccolgono firme in 100 giorni contro una legge approvata dal parlamento, quella legge deve essere sottoposta a votazione popolare. È il principale freno del popolo sul legislativo.</p>

                <h3>Il Consiglio Federale (governo)</h3>
                <p>La Svizzera non ha un presidente con potere esecutivo forte. Il governo è un collegio di <strong>7 consiglieri federali</strong>, eletti dal parlamento per periodi di 4 anni. Le decisioni si prendono per consenso. La presidenza della Confederazione ruota ogni anno tra i membri del Consiglio (è una carica principalmente cerimoniale).</p>

                <div class="callout info">
                    <strong>Nota per residenti stranieri:</strong> Come residente non naturalizzato, non puoi votare nelle elezioni federali. Tuttavia, alcuni cantoni come Neuchâtel, Vaud o Giura consentono di partecipare alle votazioni locali e comunali una volta soddisfatti i requisiti di residenza.
                </div>

                <h2 id="lingue">Sezione 3 — Le 4 lingue della Svizzera</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/lenguas-suiza.png"
                         alt="Mappa linguistica della Svizzera con le 4 regioni di lingue ufficiali: tedesco, francese, italiano e romancio"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Mappa linguistica della Svizzera. La lingua che avrai bisogno dipende dal cantone dove ti insedierai.
                    </figcaption>
                </figure>

                <p>La Svizzera ha <strong>4 lingue nazionali</strong>. La lingua che userai nella tua vita quotidiana, al lavoro e nell'amministrazione dipende direttamente da dove vivi.</p>

                <h3>🇩🇪 Tedesco — Svizzera tedesca (Deutschschweiz)</h3>
                <p>Lo parlano in circa <strong>17-18 cantoni</strong>, rappresentando il 63% della popolazione. Ma c'è un dettaglio importante: nella vita quotidiana, gli svizzeri parlano <em>Schweizerdeutsch</em>, un dialetto orale che non è il tedesco standard. Lo capiscono ma praticamente non lo scrivono. I testi ufficiali, i contratti e le lettere si redigono in <em>Hochdeutsch</em> (tedesco standard).</p>
                <p>Se ti insedi a Zurigo, Berna, Basilea, Lucerna o nella maggior parte dei cantoni del centro e dell'est del paese, il tedesco è indispensabile.</p>

                <h3>🇫🇷 Francese — La Romandia</h3>
                <p>Lo parlano approssimativamente il <strong>23% della popolazione</strong>, nei cantoni di Ginevra, Vaud, Neuchâtel, Giura, e in maniera principale in Vallese e parte di Friburgo e Berna. Questa regione si chiama informalmente <em>La Romandia</em>. Il francese svizzero è quasi identico al francese standard (con alcune differenze lessicali, come <em>septante</em> al posto di <em>soixante-dix</em>).</p>

                <h3>🇮🇹 Italiano — Il Ticino</h3>
                <p>Lo parlano l'<strong>8% della popolazione</strong>, principalmente nel cantone del Ticino e in alcuni valui dei Grigioni. È l'unico cantone completamente italofono e ha una personalità culturale molto distinta dal resto del paese.</p>

                <h3>🏔️ Romancio</h3>
                <p>Lingua reto-romanza parlata da approssimativamente lo <strong>0,5%</strong> della popolazione, in parti del cantone dei Grigioni (Graubünden). Ha lo status di lingua nazionale ma il suo uso amministrativo è limitato alle regioni dove si parla.</p>

                <h3>Cantoni bilingui e trilingui</h3>
                <ul>
                    <li><strong>Friburgo (FR):</strong> Bilingue francese/tedesco. L'amministrazione opera in entrambe le lingue.</li>
                    <li><strong>Berna (BE):</strong> Principalmente tedesco, con una minoranza francofona nel Giura bernese.</li>
                    <li><strong>Vallese (VS):</strong> Bilingue francese/tedesco a seconda della zona.</li>
                    <li><strong>Grigioni (GR):</strong> Trilingue tedesco/romancio/italiano. Unico cantone con 3 lingue ufficiali.</li>
                </ul>

                <div class="callout">
                    <strong>Consiglio pratico:</strong> Imparare la lingua del cantone dove vivi è l'investimento più importante che puoi fare. In Svizzera, la lingua non è solo comunicazione: è integrazione, occupazione e accesso a tutti i servizi. Molti datori di lavoro la richiedono anche per posizioni di base.
                </div>

                <h2 id="cantones">Sezione 4 — Le differenze tra cantoni</h2>

                <p>Questa sezione è essenziale per i neo-arrivati. In Svizzera, <strong>il cantone in cui vivi cambia quasi tutto</strong>. Non è un'esagerazione.</p>

                <h3>Imposte</h3>
                <p>È l'esempio più evidente. Il carico fiscale totale (federale + cantonale + comunale) può variare tra il <strong>15% e il 45%</strong> dello stipendio lordo, a seconda del cantone. Alcuni estremi:</p>
                <ul>
                    <li><strong>Zugo, Svitto, Nidvaldo:</strong> I cantoni più convenienti fiscalmente del paese. Attraggono molti imprenditori e persone ad alto reddito.</li>
                    <li><strong>Ginevra, Vaud, Berna:</strong> Cantoni con maggiore pressione fiscale.</li>
                </ul>
                <p>La differenza tra vivere a Ginevra o a Zugo, guadagnando lo stesso stipendio, può significare migliaia di franchi all'anno in imposte.</p>
                <p>→ <a href="#/imposta-fonte-svizzera">Leggi: Come funziona l'imposta alla fonte (Quellensteuer)</a></p>

                <h3>Assicurazione medica (premi LAMal)</h3>
                <p>L'assicurazione sanitaria è obbligatoria in tutta la Svizzera, ma i <strong>premi variano per cantone e per regione</strong>, anche con la stessa assicurazione. I premi più alti si trovano a Basilea-Città e Ginevra. I più bassi, ad Appenzello Interiori e Glarona.</p>
                <p>→ <a href="#/seguro-medico-lamal-suiza">Leggi: L'assicurazione medica LAMal spiegata</a></p>

                <h3>Educazione e scolarità</h3>
                <p>Il sistema scolastico è nelle mani dei cantoni. Questo significa che il calendario scolastico, l'età di inizio dell'obbligo scolastico, i libri di testo, gli orari e le lingue che si insegnano variano significativamente. I cantoni si coordinano attraverso il Concordato HarmoS, ma le differenze persistono.</p>
                <p>→ <a href="#/sistema-escolar-suiza">Leggi: Il sistema educativo svizzero</a></p>

                <h3>Procedure di residenza e amministrazione</h3>
                <p>La registrazione all'arrivo, i termini, i moduli e gli orari di apertura variano da un comune all'altro. Non c'è un processo uniforme per tutti gli stranieri: dipende da dove ti insedi.</p>
                <p>→ <a href="#/registrarse-en-suiza">Leggi: Come registrarsi in Svizzera all'arrivo</a></p>

                <div class="callout">
                    <strong>Conclusione pratica:</strong> Prima di decidere in quale cantone insediarsi, investiga il carico fiscale, i premi dell'assicurazione medica e le offerte di lavoro nella zona. Sono decisioni che avranno un impatto importante sulla tua economia per anni.
                </div>

                <h2 id="educacion">Sezione 5 — Il sistema educativo svizzero</h2>

                <p>Il sistema educativo svizzero è pubblico, gratuito e di alta qualità. Quello che lo distingue è il suo <strong>orientamento professionale precoce</strong> e il ruolo centrale dell'apprendistato duale nella formazione di tutta la popolazione attiva.</p>

                <h3>Struttura generale (HarmoS)</h3>
                <ul>
                    <li><strong>Scuola dell'infanzia (2 anni):</strong> Obbligatoria a partire dai 4 anni nella maggior parte dei cantoni.</li>
                    <li><strong>Scuola primaria (6 anni):</strong> Dai 6 ai 12 anni. Si introducono la seconda lingua nazionale e l'inglese.</li>
                    <li><strong>Secondaria I (3 anni):</strong> Dai 12 ai 15 anni. Alla fine di questa fase avviene l'<strong>orientamento</strong>.</li>
                </ul>

                <h3>L'orientamento professionale (Secondaria II)</h3>
                <p>A 15-16 anni, gli studenti si orientano verso una di due vie:</p>
                <ol>
                    <li><strong>Formazione professionale duale (CFC / EFZ):</strong> L'opzione maggioritaria. Più del 60% dei giovani svizzeri fanno un apprendistato in un'azienda (3-4 giorni/settimana in azienda + 1-2 giorni a scuola). Al termine, ottengono il Certificato Federale di Competenza (CFC). È una via molto rispettata e ben remunerata fin dall'inizio.</li>
                    <li><strong>Via accademica (Maturità / Matura / Liceo):</strong> Per studenti con alte valutazioni accademiche. Prepara per l'università o per le Scuole Politecniche Federali (ETH Zurigo / EPFL Losanna), due delle migliori università del mondo.</li>
                </ol>

                <h3>Università</h3>
                <p>La Svizzera conta con università pubbliche di primo livello a Zurigo (UZH), Berna, Basilea, Ginevra, Losanna e Neuchâtel. Le due scuole politecniche federali ETH Zurigo ed EPFL Losanna sono tra le migliori del mondo in scienze e ingegneria.</p>

                <div class="callout info">
                    <strong>Per famiglie neo-arrivate:</strong> Se hai figli in età scolare, registrali nella scuola pubblica del tuo comune dal primo mese. Il processo è gratuito e l'integrazione linguistica è gestita con supporto scolastico.
                </div>

                <h2 id="regiones">Sezione 6 — Differenze culturali e regionali</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-regiones-suiza.png"
                         alt="Mappa delle regioni culturali e linguistiche della Svizzera con marcati Deutschschweiz, Romandia e Ticino"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Le tre grandi regioni culturali della Svizzera hanno identità molto distinte.
                    </figcaption>
                </figure>

                <p>Oltre ai confini amministrativi, la Svizzera ha tre grandi regioni culturali con identità molto marcate. Conoscerle ti aiuterà a capire le differenze di mentalità, ritmo di vita e aspettative sociali.</p>

                <h3>🔵 Svizzera tedesca (Deutschschweiz)</h3>
                <p>È la regione più grande e di maggior peso economico. Qui si concentrano le sedi dei grandi banche, assicurazioni e multinazionali (Zurigo, Basilea, Zugo). La cultura è più formale, puntuale e diretta. La puntualità è quasi una norma culturale. Il ritmo di vita può sembrare più freddo all'inizio, ma l'integrazione è possibile se c'è uno sforzo linguistico.</p>

                <h3>🟢 La Romandia (Svizzera francofona)</h3>
                <p>Comprende i cantoni di Ginevra, Vaud, Neuchâtel, Giura e parti di Vallese, Friburgo e Berna. L'atmosfera è più mediterranea rispetto alla Svizzera tedesca: più aperta, con una vita sociale più visibile negli spazi pubblici. Ginevra e Losanna sono città internazionali con un'enorme presenza di organizzazioni internazionali (ONU, OMS, Croce Rossa). Per gli ispanofoni, il francese risulta più accessibile del tedesco.</p>

                <h3>🟡 Ticino (Svizzera italiana)</h3>
                <p>Il cantone più a sud, con clima mediterraneo e paesaggi lacustri. La vita è più lenta e aperta. Il Ticino ha un'economia importante legata al turismo, ai servizi finanziari e alla vicinanza con l'Italia. Molti lavoratori che vivono in Italia incrociano quotidianamente per lavorare qui (frontaliers). Il costo della vita è leggermente inferiore a quello di Ginevra o Zurigo, ma gli stipendi possono essere più bassi in settori non specializzati.</p>

                <h2>Riepilogo: quello che devi sapere prima di arrivare</h2>
                <ul>
                    <li>La Svizzera <strong>non appartiene all'UE</strong>, ha le sue proprie norme e accordi bilaterali.</li>
                    <li>Ogni cantone funziona diversamente: investiga il tuo prima di insediar.ti</li>
                    <li>La lingua del tuo cantone è cruciale per integrarsi: tedesco, francese o italiano a seconda della zona.</li>
                    <li>La registrazione nel comune è la prima procedura che devi fare all'arrivo.</li>
                    <li>L'assicurazione medica è obbligatoria dal primo giorno di residenza.</li>
                    <li>La democrazia diretta fa sì che il cittadino abbia più peso e responsabilità che in altri paesi.</li>
                </ul>

                <h2>Articoli essenziali per i nuovi residenti</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 1rem;">
                    <a href="#/registrarse-en-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">📋 Registrarsi in Svizzera</a>
                    <a href="#/tramites-llegada-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🪪 Permessi di residenza</a>
                    <a href="#/buscar-empleo-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💼 Cercare lavoro</a>
                    <a href="#/seguro-medico-lamal-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏥 Assicurazione medica LAMal</a>
                    <a href="#/alquilar-vivienda-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏠 Affittare abitazione</a>
                    <a href="#/impuesto-fuente-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💰 Imposte in Svizzera</a>
                    <a href="#/sistema-escolar-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🎓 Sistema educativo</a>
                    <a href="#/presupuesto-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💶 Costo della vita</a>
                </div>
            </div>
        `
    },


    "articulo-cantones": {
        title: "I 26 cantoni della Svizzera: mappa, capitali e lingue",
        description: "Guida completa dei 26 cantoni svizzeri: mappa politica, capitale, lingua ufficiale e particolarità. Essenziale per capire la Svizzera prima di trasferirsi.",
        keywords: "cantoni svizzera, mappa cantoni svizzera, 26 cantoni, cantone svizzero, differenze cantoni",
        audience: 'newcomer',
        category: 'Paese',
        hub: 'vivir-en-suiza',
        slug: "cantoni-svizzeri",
        readingTime: 8,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/guides/cantones-suiza.png",
        imageAlt: "Mappa politica della Svizzera con i 26 cantoni etichettati e il colore per regione linguistica",
        summary: "La Svizzera è divisa in 26 cantoni, ognuno con storia, cultura, lingua e governi propri. Conoscerli è essenziale per capire come la Svizzera funziona e dove potrai vivere.",
        content: `
            <div class="article-content">
                <h2>Introduzione</h2>
                <p>La Svizzera è una Confederazione di 26 cantoni autogovernarsi. Ognuno ha il proprio governo, parlamento, sistema di imposte e leggi (nei limiti della Costituzione federale). Per i nuovi residenti, capire ogni cantone è vitale: perché il tuo cantone determinà molti aspetti della tua vita (imposte, assicurazione medica, lingue, scuola, amministrazione).</p>

                <h2>Mappa dei 26 cantoni</h2>
                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/cantones-suiza.png"
                         alt="Mappa politica della Svizzera con i 26 cantoni"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        I 26 cantoni della Svizzera: ognuno autonomo ma unito federalmente.
                    </figcaption>
                </figure>

                <h2>I 26 cantoni in ordine alfabetico</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <h3>Svizzera tedesca</h3>
                        <ul>
                            <li><strong>Appenzello Esteriori (AR)</strong> — Capitale: Herisau. Tedesco. Cantone tradizionale.</li>
                            <li><strong>Appenzello Interiori (AI)</strong> — Capitale: Appenzello. Tedesco. Rinomat per democrazia diretta.</li>
                            <li><strong>Argovia (AG)</strong> — Capitale: Aarau. Tedesco. Altamente popolato.</li>
                            <li><strong>Basilea-Campagna (BL)</strong> — Capitale: Liesthal. Tedesco. Agricoltura e industria.</li>
                            <li><strong>Basilea-Città (BS)</strong> — Capitale: Basilea. Tedesco. Centro finanziario importante.</li>
                            <li><strong>Berna (BE)</strong> — Capitale: Berna. Tedesco/Francese. Capitale federale, secondo cantone per grandezza.</li>
                            <li><strong>Glarona (GL)</strong> — Capitale: Glarona. Tedesco. Cantone montano, minore per popolazione.</li>
                            <li><strong>Grigioni (GR)</strong> — Capitale: Coira. Tedesco/Romancio/Italiano. Cantone più grande per area, montuoso.</li>
                            <li><strong>Lucerna (LU)</strong> — Capitale: Lucerna. Tedesco. Cantone centrale importante.</li>
                            <li><strong>Nidvaldo (NW)</strong> — Capitale: Stans. Tedesco. Piccolo cantone, tax-friendly.</li>
                            <li><strong>Obvaldo (OW)</strong> — Capitale: Sarnen. Tedesco. Minore, tradizionale.</li>
                            <li><strong>San Gallo (SG)</strong> — Capitale: San Gallo. Tedesco. Industria tessile storica.</li>
                            <li><strong>Sciaffusa (SH)</strong> — Capitale: Sciaffusa. Tedesco. Nord della Svizzera, vicino a Germania.</li>
                            <li><strong>Soletta (SO)</strong> — Capitale: Soletta. Tedesco. Confina con Francia.</li>
                            <li><strong>Svitto (SZ)</strong> — Capitale: Schwyz. Tedesco. Piccolo, tax-friendly, culturalmente tradizionale.</li>
                            <li><strong>Turgovia (TG)</strong> — Capitale: Frauenfeld. Tedesco. Agricola, sul Lago di Costanza.</li>
                            <li><strong>Uri (UR)</strong> — Capitale: Altdorf. Tedesco. Montano, storico, piccolo.</li>
                            <li><strong>Zurigo (ZH)</strong> — Capitale: Zurigo. Tedesco. Più grande e ricco, centro economico principale.</li>
                            <li><strong>Zugo (ZG)</strong> — Capitale: Zugo. Tedesco. Piccolo, tax paradise, molto ricco.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Romandia (Francese)</h3>
                        <ul>
                            <li><strong>Friburgo (FR)</strong> — Capitale: Friburgo. Francese/Tedesco. Bilingue, carattere latino.</li>
                            <li><strong>Ginevra (GE)</strong> — Capitale: Ginevra. Francese. Sede di organizzazioni internazionali.</li>
                            <li><strong>Giura (JU)</strong> — Capitale: Delémont. Francese. Più giovane cantone (1979), indipendentista.</li>
                            <li><strong>Neuchâtel (NE)</strong> — Capitale: Neuchâtel. Francese. Horlogers, ha salario minimo.</li>
                            <li><strong>Vallese (VS)</strong> — Capitale: Sitten. Francese/Tedesco. Montuoso, turismo.</li>
                            <li><strong>Vaud (VD)</strong> — Capitale: Losanna. Francese. Secondo cantone per grandezza, ONU.</li>
                        </ul>

                        <h3>Ticino (Italiano)</h3>
                        <ul>
                            <li><strong>Ticino (TI)</strong> — Capitale: Bellinzona. Italiano. Sud della Svizzera, clima temperato.</li>
                        </ul>
                    </div>
                </div>

                <h2>Mappa linguistica</h2>
                <p>La Svizzera ha 4 lingue nazionali. La tua principale dipenderà dal cantone:</p>
                <ul>
                    <li><strong>Tedesco:</strong> Dominante nella Svizzera settentrionale, centrale e orientale (circa 63% della popolazione).</li>
                    <li><strong>Francese:</strong> Romandia occidentale (circa 23%).</li>
                    <li><strong>Italiano:</strong> Ticino e alcuni valui dei Grigioni (circa 8%).</li>
                    <li><strong>Romancio:</strong> Parti dei Grigioni orientali (meno dell'1%).</li>
                </ul>

                <h2>Cantoni con reddito pro capite e fiscalità varieI</h2>
                <ul>
                    <li><strong>Più ricchi (fiscalità bassa):</strong> Zurigo, Zugo, Svitto, Nidvaldo, Basilea-Città.</li>
                    <li><strong>Reddito medio-alto:</strong> Grigioni, San Gallo, Appenzello Esteriori.</li>
                    <li><strong>Fiscalità media-alta:</strong> Ginevra, Vaud, Neuchâtel, Friburgo.</li>
                    <li><strong>Cantoni minori:** Uri, Obvaldo, Glarona — generalmente con population bassa e economie locali.</li>
                </ul>

                <div class="callout info">
                    <strong>Consiglio per neo-arrivati:</strong> Prima di scegliere un cantone, ricerca:
                    <ul>
                        <li>La lingua principale (parlerai tedesco? francese? italiano?)</li>
                        <li>Opportunità di lavoro nel tuo settore.</li>
                        <li>Costo della vita (affitto, assicurazione medica, imposte).</li>
                        <li>Se hai figli, qualità del sistema scolastico locale.</li>
                    </ul>
                </div>

                <h2>Riferimenti ufficiali</h2>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Portale ufficiale della Svizzera con link a tutti i cantoni</a></li>
                </ul>
            </div>
        `
    },


    "articulo-lenguas": {
        title: "Le lingue in Svizzera: tedesco, francese, italiano e romancio",
        description: "Guida alle 4 lingue nazionali della Svizzera: regioni linguistiche, cantoni bilingui e consigli pratici per chi arriva nel paese.",
        keywords: "lingue svizzera, idiomi svizzera, tedesco svizzera, francese svizzera, italiano ticino, romancio, regioni linguistiche",
        audience: "newcomer",
        featuredImage: "media/guides/lenguas-suiza.png",
        category: "Cultura & Lingue",
        hub: "vivir-en-suiza",
        readingTime: 5,
        summary: "La Svizzera ha 4 lingue nazionali. La lingua che dovrai imparare dipende interamente dal cantone in cui ti stabilisci: tedesco a est e al centro, francese a ovest, italiano in Ticino.",
        content: `
            <div class="article-content">
                <p>La Svizzera è uno dei pochi paesi al mondo con quattro lingue nazionali ufficiali. Tuttavia, c'è un errore molto comune all'arrivo: credere che l'inglese sia sufficiente per l'integrazione. Non è così. La lingua del tuo cantone di residenza è la chiave per il lavoro, le procedure amministrative e l'integrazione sociale.</p>

                <h2>Le 4 lingue nazionali</h2>

                <h3>🇩🇪 Tedesco — Svizzera tedesca</h3>
                <p>Parlato da circa il <strong>63%</strong> della popolazione. Copre gran parte della Svizzera centrale e orientale: Zurigo, Berna, Basilea, Lucerna, Zugo, Svitto, San Gallo e la maggior parte dei cantoni interni.</p>

                <p>Ma c'è una sfumatura fondamentale: nella vita quotidiana, gli svizzeri germanofoni non parlano tedesco standard. Parlano <strong>Schweizerdeutsch</strong>, un insieme di dialetti orali che varia da cantone a cantone e che può risultare del tutto incomprensibile per chi ha studiato solo il tedesco standard. I testi scritti, come contratti, lettere e formulari, invece, sono redatti in tedesco standard (<em>Hochdeutsch</em>).</p>

                <div class="callout">
                    <strong>Per chi parla una lingua latina:</strong> Il tedesco è impegnativo, ma assolutamente raggiungibile. Con un livello B1 puoi già lavorare nella maggior parte degli impieghi non specializzati. Molti corsi di tedesco in Svizzera sono gratuiti o sovvenzionati per i residenti.
                </div>

                <h3>🇫🇷 Francese — Romandia</h3>
                <p>Parlato da circa il <strong>23%</strong> della popolazione. Corrisponde ai cantoni dell'ovest: Ginevra, Vaud, Neuchâtel, Giura e, in parte, Vallese, Friburgo e Berna. Questa zona è chiamata informalmente <em>Romandia</em>.</p>

                <p>Il francese svizzero è molto simile al francese standard, con alcune differenze lessicali che non costituiscono una vera barriera. Per esempio, in alcuni cantoni della Romandia si usa <em>huitante</em> invece di <em>quatre-vingts</em> per indicare il numero 80.</p>

                <div class="callout info">
                    <strong>Per chi parla una lingua latina:</strong> Il francese è spesso l'opzione più accessibile. La parentela linguistica rende l'apprendimento sensibilmente più rapido rispetto al tedesco.
                </div>

                <h3>🇮🇹 Italiano — Ticino</h3>
                <p>Parlato da circa l'<strong>8%</strong> della popolazione, principalmente nel Canton Ticino (TI) e in alcune valli meridionali del Canton Grigioni. Il Ticino è l'unico cantone puramente italofono e ha un'identità culturale molto mediterranea.</p>

                <p>Per chi parla spagnolo, l'italiano è la lingua svizzera più vicina. Tuttavia, il mercato del lavoro ticinese è più piccolo e molte posizioni richiedono anche il tedesco o l'inglese per collaborare con il resto del paese.</p>

                <h3>🏔️ Romancio (Rumantsch)</h3>
                <p>Parlato da meno dell'<strong>1%</strong> della popolazione, esclusivamente in alcune zone del Canton Grigioni. È una lingua romanza con cinque varianti scritte diverse, nate da secoli di isolamento nelle valli alpine. Ha lo status di lingua nazionale ed è co-ufficiale nelle regioni in cui viene parlata, ma non viene usata a livello amministrativo federale se non per comunicare con i cittadini romanci.</p>

                <h2>Cantoni bilingui e trilingui</h2>

                <p>Tre cantoni hanno due o più lingue ufficiali:</p>

                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:1rem; margin:1.5rem 0;">
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Friburgo (FR)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingue francese / tedesco. L'amministrazione opera in entrambe le lingue. La città di Friburgo stessa è un punto di contatto tra le due culture.</p>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Vallese / Wallis (VS)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingue francese / tedesco a seconda della zona. Il Vallese romando è francofono, mentre l'Alto Vallese è germanofono.</p>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Grigioni (GR)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Trilingue tedesco / romancio / italiano. È l'unico cantone con tre lingue ufficiali. Ogni valle può avere una lingua dominante diversa.</p>
                    </div>
                </div>

                <h2>Quale lingua imparare?</h2>

                <p>La risposta è sempre la stessa: <strong>la lingua del cantone in cui vivi</strong>. Ma se non hai ancora deciso dove stabilirti, ecco alcuni orientamenti utili:</p>

                <ul>
                    <li><strong>Francese:</strong> È spesso il miglior punto di partenza per chi parla una lingua latina. Si impara più in fretta e apre le porte della Romandia e di città internazionali come Ginevra e Losanna.</li>
                    <li><strong>Tedesco:</strong> È la lingua che apre più porte sul mercato del lavoro, perché copre circa il 63% del paese. È più difficile, ma l'offerta formativa è ampia e gli svizzeri apprezzano molto lo sforzo.</li>
                    <li><strong>Italiano:</strong> Se lo conosci già, il Ticino può essere un ingresso più morbido. Se invece devi impararlo da zero, ricorda che il mercato del lavoro locale è più limitato.</li>
                </ul>

                <div class="callout">
                    <strong>Investimento chiave:</strong> Molti cantoni offrono corsi di lingua sovvenzionati o persino gratuiti per i residenti stranieri. Anche alcuni datori di lavoro finanziano corsi linguistici. Informati già dal primo mese nel tuo comune.
                </div>

                <h2>L'inglese in Svizzera</h2>
                <p>L'inglese è molto diffuso negli ambienti tecnici, finanziari e internazionali, soprattutto a Zurigo e Ginevra. Molte multinazionali lavorano quasi esclusivamente in inglese. Tuttavia, per le pratiche amministrative, per cercare lavoro nel settore pubblico o nelle PMI e per una vera integrazione sociale, la lingua locale resta indispensabile.</p>

                <h2>Articoli correlati</h2>
                <ul>
                    <li><a href="#/introduccion-suiza-como-funciona">Come funziona la Svizzera</a></li>
                    <li><a href="#/cantones-suiza">I 26 cantoni della Svizzera</a></li>
                    <li><a href="#/registrarse-en-suiza">Registrarsi in Svizzera all'arrivo</a></li>
                    <li><a href="#/buscar-empleo-suiza">Cercare lavoro in Svizzera</a></li>
                </ul>
            </div>`
    },

    "articulo-consulados": {
        title: "Consolati spagnoli in Svizzera: dove si trovano e quali servizi forniscono",
        description: "Guida completa dei tre consolati spagnoli in Svizzera (Ginevra, Berna, Zurigo): servizi, appuntamenti, passaporti, registro consolare.",
        keywords: "consolato spagnolo svizzera, consolato ginevra, consolato zurigo, consolato berna, registro consolare, passaporto svizzera, MAE",
        audience: 'newcomer',
        category: 'Risorse Ufficiali',
        hub: 'tramites',
        slug: "consolati-spagna-svizzera",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        summary: "La Spagna ha tre consolati in Svizzera: Ginevra, Berna e Zurigo. La registrazione consolare è la prima procedura che devi fare all'arrivo. Senza di essa, non puoi rinnovare il passaporto né votare.",
        featuredImage: "media/guides/consulados-espanoles-suiza.png",
        imageAlt: "Sede di un consolato spagnolo in Svizzera con la bandiera ufficiale",
        content: `
            <div class="article-content">
                <p>Se sei un cittadino spagnolo che vive in Svizzera, il consolato è la tua finestra ufficiale per tutti i procedimenti che collegano la tua vita all'estero con l'amministrazione spagnola. Ci sono tre consolati generali della Spagna in Svizzera, e devi recarti a quello che corrisponde al tuo cantone di residenza.</p>

                <div class="callout info">
                    <strong>Primo passo obbligatorio:</strong> Al trasferirti in Svizzera, il procedimento più importante è <strong>iscriverti nel Registro di Matricola Consolare</strong>. Senza questa registrazione, non potrai rinnovare il tuo DNI o passaporto, né votare alle elezioni spagnole dall'estero.
                </div>

                <h2>I 3 consolati spagnoli in Svizzera</h2>

                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1.25rem; margin:1.5rem 0;">
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Consolato Generale a Ginevra</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantoni:</strong> Ginevra, Vaud, Vallese, Friburgo, Neuchâtel, Giura</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Indirizzo:</strong> Avenue Blanc 53, 1202 Ginevra</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Telefono:</strong><br>+41 22 749 14 60</p>
                        <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portale ufficiale →</a>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Consolato Generale a Berna</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantoni:</strong> Berna, Soletta, Friburgo (parte), Vallese (parte)</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Indirizzo:</strong> Marienstrasse 12, 3005 Berna</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Telefono:</strong><br>+41 31 356 22 20</p>
                        <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portale ufficiale →</a>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                        <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Consolato Generale a Zurigo</h3>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Cantoni:</strong> Zurigo, Argovia, Basilea, Lucerna, San Gallo, Grigioni, Sciaffusa, Turgovia, Ticino, Zugo e altri</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Indirizzo:</strong> Riedtlistrasse 17, 8006 Zurigo</p>
                        <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Telefono:</strong><br>+41 44 368 61 00</p>
                        <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Portale ufficiale →</a>
                    </div>
                </div>

                <h2>Quali procedure puoi fare al consolato?</h2>

                <h3>Registrazione di Matricola Consolare (RECA)</h3>
                <p>È la <strong>prima procedura che devi fare</strong> quando ti insedi in Svizzera. Serve per iscriverti formalmente come residente spagnolo all'estero. Da questa registrazione:</p>
                <ul>
                    <li>Puoi rinnovare il tuo DNI e passaporto dalla Svizzera.</li>
                    <li>Puoi esercitare il tuo diritto di voto alle elezioni spagnole (CERA — Censo Electoral de Residentes Ausentes).</li>
                    <li>L'amministrazione spagnola ha la certezza del tuo luogo di residenza.</li>
                </ul>
                <p>La registrazione è gratuita. Avrai bisogno di: passaporto o DNI in vigore, prova di residenza in Svizzera (contratto di affitto, registrazione del comune) e in alcuni casi il permesso di residenza svizzero.</p>

                <h3>DNI e Passaporto</h3>
                <p>Puoi rinnovare o richiedere il tuo DNI e passaporto al consolato della tua demarcazione. È <strong>indispensabile richiedere un appuntamento in anticipo</strong> attraverso il portale di prenotazione del Ministero degli Affari Esteri. I tempi di attesa possono essere di diverse settimane, specialmente a Ginevra e Zurigo.</p>

                <div class="callout">
                    <strong>Consiglio:</strong> Richiedi l'appuntamento con almeno 2-3 mesi di anticipo rispetto alla scadenza del tuo documento. Non aspettare l'ultimo momento.
                </div>

                <h3>Registro Civile: nascite, matrimoni, morti</h3>
                <p>Se hai avuto un figlio in Svizzera, ti sei sposato o è deceduto un familiare spagnolo, devi inscrivere il fatto nel Registro Civile consolare. Il consolato iscriverà l'evento nel Registro Civile spagnolo.</p>

                <h3>Pensioni e Previdenza Sociale</h3>
                <p>Il consolato può orientarti su accordi di Previdenza Sociale tra Spagna e Svizzera, tramitazione di pensioni, accumulo di contributi e altri procedimenti legati alla Previdenza Sociale spagnola.</p>

                <h3>Assistenza consolare</h3>
                <p>In caso di emergenza (furto di documenti, incidente grave, decesso), il consolato può fornire assistenza consolare di emergenza. Per urgenze fuori dagli orari di apertura, ogni consolato ha una linea di guardia.</p>

                <h2>Come richiedere un appuntamento consolare</h2>
                <p>La maggior parte dei procedimenti si gestisce esclusivamente su appuntamento. Consulta i link ufficiali di ogni consolato per le istruzioni aggiornate:</p>
                <ul>
                    <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consolato a Ginevra</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consolato a Berna</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consolato a Zurigo</a></li>
                </ul>

                <h2>Portale del Ministero degli Affari Esteri</h2>
                <p>Tutte le informazioni aggiornate su procedure, requisiti e notizie per spagnoli in Svizzera si trovano in:</p>
                <ul>
                    <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consolato a Ginevra</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consolato a Berna</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consolato a Zurigo</a></li>
                </ul>

                <h2>Articoli correlati</h2>
                <ul>
                    <li><a href="#/registrarse-en-suiza">Registrarsi in Svizzera all'arrivo</a></li>
                    <li><a href="#/tramites-llegada-suiza">Permessi di residenza L, B e C</a></li>
                    <li><a href="#/tramites-llegada-suiza">Procedure all'arrivo: elenco completo</a></li>
                </ul>
            </div>
        `
    }
};

    const slugMap = {
        "articulo-permisos": "permessi-soggiorno-svizzera-l-b-c",
        "articulo-mudarse-suiza": "trasferirsi-svizzera-dalla-spagna",
        "articulo-registro": "registrarsi-svizzera-comune",
        "articulo-lamal": "assicurazione-malattia-svizzera-lamal",
        "articulo-franquicia": "franchigia-partecipazione-costi-salute",
        "articulo-impuestos": "tasse-svizzera",
        "articulo-impuesto-fuente": "imposta-fonte-svizzera",
        "articulo-seguros-sociales": "assicurazioni-sociali-svizzera-avs-ai-lpp",
        "articulo-rav-paro": "disoccupazione-svizzera",
        "articulo-salarios": "salari-stipendio-svizzera",
        "articulo-contratos": "contratti-di-lavoro-svizzera",
        "articulo-periodo-prueba": "periodo-prova-preavviso-svizzera",
        "articulo-buscar-empleo": "cercare-lavoro-svizzera",
        "articulo-alquiler": "affittare-casa-svizzera",
        "articulo-fianzas": "cauzione-affitto-svizzera",
        "articulo-costo-vida": "costo-della-vita-svizzera",
        "articulo-frontaliers": "lavoratori-frontalieri-svizzera",
        "articulo-diplomas": "riconoscimento-diplomi-stranieri-svizzera",
        "articulo-sistema-escolar": "sistema-scolastico-svizzero",
        "articulo-sistema-salud": "sistema-sanitario-medici-emergenze",
        "articulo-transporte": "trasporti-pubblici-ffs-metaprezzo",
        "articulo-ciudadania": "cittadinanza-svizzera-naturalizzazione",
        "articulo-consulados": "consolati-spagna-svizzera",
        "articulo-tramites-llegada": "checklist-primi-passi-in-svizzera",
        "articulo-trabajar-sin-permiso-fisico": "lavorare-senza-permesso-fisico",
        "articulo-reagrupacion-familiar": "ricongiungimento-familiare-svizzera",
        "articulo-subalquiler": "subaffitto-svizzera-regole-contratti",
        "articulo-jubilacion": "pensione-svizzera-avs-lpp-3-pilastri",
        "articulo-vivir-sin-trabajar": "vivere-svizzera-senza-lavorare",
        "articulo-ai-invalidez": "assicurazione-invalidita-ai-svizzera",
        "articulo-vacunas": "vaccini-svizzera-raccomandazioni",
        "articulo-danza-patos": "danza-anatroccoli-origine-svizzera",
        "articulo-introduccion-suiza": "introduzione-svizzera-come-funziona",
        "articulo-cantones": "cantoni-svizzeri",
        "articulo-lenguas": "lingue-svizzera"
    };

    Object.entries(slugMap).forEach(([key, slug]) => {
        if (window.siteContent.it.articles[key]) window.siteContent.it.articles[key].slug = slug;
    });
})();
