(function() {
/**
 * content-articles.js
 * Contains the 20 SEO optimized deep-dive articles.
 */

window.siteContent = window.siteContent || {};
window.siteContent.de = window.siteContent.de || { global: {}, pages: {}, articles: {} };

window.siteContent.de.articles = {
	    // 1. Permisos de residencia
    "articulo-permisos": {
        title: "Aufenthaltsbewilligungen in der Schweiz: L, B, C und Unterschiede",
        description: "Alles über Schweizer Aufenthaltsbewilligungen für Ausländer: L, B, C und ihre Unterschiede.",
        keywords: "aufenthaltsbewilligung schweiz, ausweis L, ausweis B, ausweis C, leben in der schweiz, SEM",
        category: 'Verwaltungsverfahren',
        hub: 'tramites',
        slug: "aufenthaltsbewilligungen-schweiz",
        readingTime: 4,
        featuredImage: "media/guides/tramites-llegada-suiza.jpg",
        imageAlt: "Die drei Arten von Schweizer Aufenthaltsbewilligungen (L, B, C) auf Karten über einer Schweizer Karte",
        summary: "Es gibt drei Hauptbewilligungen (L, B und C). Welche Sie erhalten, hängt von Ihrer Nationalität, dem Aufenthaltsgrund und der Vertragsdauer ab. Oft können Sie bereits mit der Anmeldebestätigung arbeiten, bevor die physische Karte eintrifft.",
        content: `
            <div class="article-content">
                <h2>Einführung</h2>
                <p>Wer in der Schweiz leben will, braucht in der Regel einen <strong>Aufenthaltstitel</strong>. Für Spanier und andere EU/EFTA-Bürger ist der Ablauf meist relativ geradlinig, wenn ein klarer Aufenthaltsgrund vorliegt, etwa ein Arbeitsvertrag, ein Studium oder genügend eigene Mittel. Für Staatsangehörige aus Drittstaaten gelten dagegen strengere Regeln und oft vorgängige Bewilligungen.</p>

                <div class="callout info">
                    <strong>Das Wichtigste zuerst:</strong> Die physische Bewilligungskarte kann in der Schweiz einige Wochen auf sich warten lassen. In der Praxis reicht die <strong>Anmeldebestätigung Ihrer Gemeinde</strong> oft aus, um mit der Arbeit zu beginnen und weitere Formalitäten zu erledigen.
                </div>

                <h2>Wie das System funktioniert</h2>
                <p>Die Bewilligung wird in den meisten Fällen nicht zentral online beantragt. Der praktische Ablauf sieht meist so aus:</p>
                <ol>
                    <li><strong>Adresse in der Schweiz</strong> organisieren, sei es Miete, Untermiete oder eine vorübergehende Unterkunft.</li>
                    <li><strong>Anmeldung bei der Gemeinde</strong> bzw. Einwohnerkontrolle.</li>
                    <li>Die Akte geht an die <strong>zuständige kantonale Behörde</strong> für Migration.</li>
                    <li>Sie erhalten zuerst eine Bestätigung und später die <strong>Bewilligungskarte</strong> per Post.</li>
                </ol>
                <p>Dokumente, Fristen und Gebühren <strong>variieren je nach Kanton und Gemeinde</strong>. Die Logik des Verfahrens bleibt jedoch landesweit ähnlich.</p>

                <h2>Voraussetzungen und Regeln</h2>
                <h3>Typische Unterlagen für die Anmeldung</h3>
                <p>Je nach Kanton und persönlicher Situation werden meist folgende Dokumente verlangt:</p>
                <ul>
                    <li>Personalausweis oder Reisepass.</li>
                    <li><strong>Aufenthaltsgrund:</strong> Arbeitsvertrag, Zulassung zum Studium oder Nachweis eigener Mittel.</li>
                    <li>Mietvertrag oder eine <strong>Wohnbestätigung</strong>, wenn Sie bei jemandem wohnen.</li>
                    <li>Passfoto, falls die Gemeinde keines vor Ort aufnimmt.</li>
                    <li>Zivilstandsdokumente und Familiennachweise, wenn diese für Ihren Fall relevant sind.</li>
                </ul>
                <p>Hinzu kommt in vielen Gemeinden eine <strong>Verwaltungsgebühr</strong>, deren Höhe nach Kanton und Bewilligungsart unterschiedlich ist.</p>

                <h3>Welche Bewilligung ist die richtige?</h3>
                <p>Für Neuankömmlinge sind vor allem folgende Bewilligungen relevant:</p>
                <ul>
                    <li><strong>L-Bewilligung:</strong> für einen kurzen oder befristeten Aufenthalt, oft bei Verträgen unter 12 Monaten.</li>
                    <li><strong>B-Bewilligung:</strong> die klassische Aufenthaltsbewilligung, sehr häufig bei Verträgen ab 12 Monaten oder unbefristeten Arbeitsverträgen für EU/EFTA-Bürger.</li>
                    <li><strong>C-Bewilligung:</strong> Niederlassungsbewilligung nach mehreren Jahren ordnungsgemäßem Aufenthalt.</li>
                    <li><strong>G-Bewilligung:</strong> für Grenzgänger, die außerhalb der Schweiz wohnen und in der Schweiz arbeiten.</li>
                </ul>

                <h3>Kurzer Vergleich</h3>
                <p>In der Schweiz gibt es mehrere Aufenthaltsbewilligungen für Bürger der Europäischen Union.<br>
                Am häufigsten sind die Bewilligungen L, B und C.<br>
                Jede passt zu einer anderen Situation, je nach Vertragsart und Aufenthaltsdauer.<br>
                Die folgende Tabelle fasst die wichtigsten Merkmale zusammen. Wenn Sie Ihren Umzug planen, hilft auch <a href="#/mudarse-a-suiza-desde-espana">der Schritt-für-Schritt-Leitfaden</a>.</p>

                <table class="info-table">
                    <thead><tr><th>Bewilligung</th><th>Typische Situation</th><th>Dauer</th><th>Hinweise</th></tr></thead>
                    <tbody>
                        <tr><td><strong>L</strong></td><td>Befristeter Vertrag</td><td>An den Vertrag gebunden</td><td>Mehr Einschränkungen; je nach Fall/Kanton</td></tr>
                        <tr><td><strong>B</strong></td><td>Aufenthalt mit Arbeit/Studium</td><td>Meist mehrere Jahre</td><td>Quellensteuer am Anfang üblich</td></tr>
                        <tr><td><strong>C</strong></td><td>Niederlassung</td><td>Erneuerbar</td><td>Höhere administrative Stabilität</td></tr>
                        <tr><td><strong>G</strong></td><td>Grenzgänger</td><td>Meist mehrere Jahre</td><td>Spezielle Steuerregeln je nach Abkommen</td></tr>
                    </tbody>
                </table>

                <div class="callout info">
                    <strong>Praxistipp</strong>
                    <p>Mit einer L-Bewilligung kann es schwieriger sein, eine Wohnung über eine Immobilienverwaltung zu mieten. Viele Agenturen bevorzugen Mieter mit einer B-Bewilligung oder einem unbefristeten Arbeitsvertrag.</p>
                </div>

                <h3>Nützliche Links</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                </ul>

                <h3>Fristen, Gebühren und provisorische Bestätigung</h3>
                <p>Entscheidend für den Alltag ist meist die <strong>Anmeldung bei der Gemeinde</strong>. Dort erhalten Sie oft eine <strong>provisorische Bestätigung</strong>, die bis zum Eintreffen der Karte gilt. Dieses Dokument genügt in vielen Fällen, um:</p>
                <ul>
                    <li>eine Stelle anzutreten,</li>
                    <li>ein Bankkonto zu eröffnen,</li>
                    <li>Versicherungen und andere Basisdienste zu organisieren.</li>
                </ul>
                <p>Die Gebühren unterscheiden sich nach Kanton und Bewilligungsart. Häufig zahlen Sie bei der Anmeldung eine moderate Verwaltungsgebühr; Biometrie oder Fotos können separat verrechnet werden.</p>

                <h3>Verlängerung und Änderungen im Alltag</h3>
                <p>Bewilligungen begleiten Ihre Lebenssituation. Deshalb sollten Sie Änderungen immer sauber melden:</p>
                <ul>
                    <li><strong>Adresswechsel:</strong> Beim Umzug müssen Sie sich ab- und wieder anmelden, je nach Gemeinde innerhalb einer Frist.</li>
                    <li><strong>Arbeitgeberwechsel:</strong> Bei EU/EFTA-Bewilligungen ist Mobilität meist möglich, doch Meldepflichten können nach Kanton und Ausweisart variieren.</li>
                    <li><strong>Änderung des Zivilstands oder Kinder:</strong> Das wirkt sich oft auf Verfahren und Steuern aus. Halten Sie Ihre Unterlagen aktuell.</li>
                </ul>

                <h3>Familie und Nachzug in Kürze</h3>
                <p>Wenn Sie mit Partner oder Kindern kommen oder diese später nachholen möchten, prüft die Behörde vor allem:</p>
                <ul>
                    <li><strong>ausreichendes Einkommen</strong> für den Haushalt,</li>
                    <li><strong>geeigneten Wohnraum</strong>,</li>
                    <li><strong>vollständige Unterlagen</strong> wie Geburts- oder Heiratsurkunden, gegebenenfalls mit Apostille und Übersetzung.</li>
                </ul>
                <p>Praktisch ist es sinnvoll, diese Dokumente möglichst schon vor dem Umzug vorzubereiten.</p>

                <h2>Konkrete Beispiele</h2>
                <h3>Beispiel 1: Sie kommen mit einem unbefristeten Arbeitsvertrag</h3>
                <p>Sie melden sich mit Ausweis, Arbeitsvertrag und Adresse bei der Gemeinde an. Nach Zahlung der Gebühr erhalten Sie meist eine provisorische Bestätigung und können Ihre Arbeit aufnehmen. Damit lassen sich häufig auch Bankkonto und Krankenversicherung organisieren.</p>

                <h3>Beispiel 2: Sie kommen ohne Arbeitsvertrag (EU/EFTA)</h3>
                <p>Unter Umständen können Sie sich mit <strong>genügend eigenen Mitteln</strong> und Krankenversicherung anmelden. In der Praxis sind Wohnung und Bank ohne Arbeitsvertrag oft schwieriger. Dafür braucht es eine realistische finanzielle Planung.</p>

                <h3>Beispiel 3: Sie verlieren Ihren Job mit einer B-Bewilligung</h3>
                <p>Der Verlust der Stelle bedeutet nicht automatisch den Verlust der Bewilligung. Wichtig ist aber, korrekt zu handeln: Falls relevant, melden Sie sich beim <a href="#/arbeitslosigkeit-rav-schweiz">RAV</a>, suchen aktiv eine neue Stelle und halten Ihre Anmeldung aktuell.</p>

                <h3>Beispiel 4: Sie kommen als Student</h3>
                <p>Bei der Anmeldung werden Zulassung oder Immatrikulation sowie je nach Kanton auch <strong>Nachweise über finanzielle Mittel</strong> verlangt. Zusätzlich sollten Sie Ihre Krankenversicherung früh planen und allfällige kantonale Sonderregeln prüfen.</p>

                <h3>Beispiel 5: Sie sind Grenzgänger</h3>
                <p>Wer in Frankreich, Deutschland oder Italien wohnt und in der Schweiz arbeitet, fällt unter die <strong>G-Bewilligung</strong>. Diese folgt eigenen Regeln und hat wichtige steuerliche Folgen. Behandeln Sie sie nicht einfach als „B-Bewilligung mit Adresse im Ausland“.</p>

                <h2>Häufige Fehler</h2>
                <ul>
                    <li><strong>Auf die endgültige Wohnung warten:</strong> Auch mit vorübergehender Unterkunft sollten Sie sich anmelden und die Adresse später aktualisieren.</li>
                    <li><strong>Davon ausgehen, dass überall dieselben Regeln gelten:</strong> Fristen, Termine und Dokumente ändern sich von Kanton zu Kanton.</li>
                    <li><strong>Familiendokumente zu spät vorbereiten:</strong> Geburts- und Heiratsurkunden mit Apostille können Zeit kosten.</li>
                    <li><strong>Die Bewilligung isoliert betrachten:</strong> Kurz danach folgen Krankenversicherung, Steuern und Adressmeldungen.</li>
                </ul>

                <h2>Praktische Tipps</h2>
                <ul>
                    <li>Buchen Sie einen Termin bei der Gemeinde, sobald Sie eine Adresse haben.</li>
                    <li>Nehmen Sie alle Dokumente digital und ausgedruckt mit.</li>
                    <li>Melden Sie Adressänderungen fristgerecht.</li>
                    <li>Wenn Sie mit Familie kommen, organisieren Sie Urkunden, Apostillen und Übersetzungen mit Zeitreserve.</li>
                    <li>Für den ersten Monat hilft die <a href="#/checkliste-die-wichtigsten-schritte-im-ersten-monat-in-der-schweiz">Checkliste der wichtigsten Schritte</a>.</li>
                </ul>

                <h2>Offizielle Quellen</h2>
                <ul>
                    <li><a href="https://www.sem.admin.ch/sem/de/home/themen/aufenthalt.html" target="_blank" rel="noopener noreferrer">SEM — Aufenthalt</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Offizielles Schweizer Portal</a></li>
                    <li>Die kantonale Migrationsbehörde Ihres Wohnkantons.</li>
                </ul>
            </div>
        `
    },

    "articulo-mudarse-suiza": {
        title: "Aus Spanien in die Schweiz ziehen: Schritt-für-Schritt-Leitfaden",
        description: "Praktische Checkliste für Spanier, die einen Umzug in die Schweiz planen: Jobs, Anmeldung, Bewilligungen, Versicherung, Wohnen und Budget.",
        keywords: "aus spanien in die schweiz ziehen, in der schweiz leben als spanier, umzug schweiz",
        category: 'Verwaltungsverfahren',
        hub: 'tramites',
        slug: "aus-spanien-in-die-schweiz-ziehen",
        readingTime: 5,
        featuredImage: "media/guides/mudarse-a-suiza-desde-espana.jpg",
        imageAlt: "Eine Person mit Koffer blickt auf eine Schweizer Landschaft, Repräsentation des Migrationsprojekts",
        summary: "Kurze, praktische Schritte für den Umzug in die Schweiz mit Links zu den wichtigsten Seiten.",
        content: `
            <div class="article-content">
                <p>Viele Spanier möchten wegen der Löhne, Stabilität und Chancen in der Schweiz leben oder arbeiten. Diese Seite fasst die <strong>wichtigsten Schritte</strong> zur Niederlassung zusammen, mit kurzen Blöcken und direkten Links.</p>

                <h2>1) Vor der Abreise</h2>
                <ul>
                    <li><strong>Jobsuche</strong> und Verständnis des Marktes nach Kanton/Sprache.</li>
                    <li>Vorbereitung eines <strong>Schweizer Lebenslaufs</strong> (vollständiges Bewerbungsdossier).</li>
                    <li>Prüfen der <a href="#/lebenshaltungskosten-in-der-schweiz">Lebenshaltungskosten</a> und Anpassung der Erwartungen.</li>
                    <li>Einige <strong>Ersparnisse</strong> für die ersten Monate einplanen (Miete, Versicherung, Gebühren).</li>
                </ul>
                <div class="callout info">
                    <strong>Praxtipp</strong>
                    <p>Viele Arbeitgeber bevorzugen Kandidaten, die bereits in der Schweiz sind oder leicht zu einem Vorstellungsgespräch anreisen können.</p>
                </div>

                <h2>2) Ankommen in der Schweiz</h2>
                <ul>
                    <li><strong>Temporäre Unterkunft</strong> finden, um sich anmelden zu können.</li>
                    <li>Anmeldung bei der Gemeinde: <a href="#/anmeldung-gemeinde-schweiz">Gemeindeanmeldung</a>.</li>
                    <li>Die passende <a href="#/aufenthaltsbewilligungen-schweiz">Aufenthaltsbewilligung</a> für Ihre Situation beantragen.</li>
                </ul>

                <h2>3) Krankenversicherung</h2>
                <ul>
                    <li>Die Krankenversicherung ist <strong>obligatorisch</strong>.</li>
                    <li>Abschluss innerhalb der <strong>ersten 3 Monate</strong> (oft rückwirkend).</li>
                    <li>Sie wählen Ihren Versicherer: vergleichen und entscheiden.</li>
                </ul>
                <p>Guide: <a href="#/krankenversicherung-schweiz-kvg">Krankenversicherung (KVG/LAMal)</a>.</p>

                <h2>4) Suche nach einem Job</h2>
                <p>Wo man sucht und wie man sich bewirbt: <a href="#/jobsuche-plattformen-und-strategien">Jobsuche in der Schweiz</a>.</p>
                <h3>Wichtigste Portale</h3>
                <ul>
                    <li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
                    <li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
                    <li><a href="https://ch.indeed.com/" target="_blank" rel="noopener noreferrer">indeed.ch</a></li>
                    <li><a href="https://www.job-room.ch/" target="_blank" rel="noopener noreferrer">job-room.ch</a></li>
                </ul>
                <div class="callout info">
                    <strong>Praxtipp</strong>
                    <p>In der Schweiz ist es oft effektiver, in der Landessprache zu suchen (Deutsch, Französisch oder Italienisch).</p>
                    <p><strong>Google-Beispiel:</strong> <code>Glaser Arbeit Zürich</code></p>
                </div>

                <h2>5) Wohnen</h2>
                <ul>
                    <li>Sie benötigen <strong>Unterlagen</strong> (ID, Lohnabrechnungen/Vertrag usw.).</li>
                    <li>Ein starkes <strong>Mietdossier</strong> ist wichtig, da der Wettbewerb hoch ist.</li>
                    <li>Mit einer <strong>L-Bewilligung</strong> kann es schwieriger sein, über eine Agentur zu mieten.</li>
                </ul>
                <p>Guide: <a href="#/wohnung-mieten-schweiz">Wohnen in der Schweiz</a>.</p>

                <h2>6) Lebenshaltungskosten</h2>
                <p>Die Kosten variieren je nach Kanton (und Stadt). Als kurze Referenz:</p>
                <table class="info-table">
                    <thead><tr><th>Ausgabe</th><th>Indikativer Bereich</th><th>Hinweise</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Miete</strong></td><td>1'500 – 2'200 CHF</td><td>Höher in Genf/Zürich; abhängig von Lage und Größe</td></tr>
                        <tr><td><strong>Krankenversicherung</strong></td><td>350 – 450 CHF</td><td>Variiert nach Kanton/Alter/Modell/Franchise</td></tr>
                        <tr><td><strong>Verpflegung</strong></td><td>400 – 600 CHF</td><td>Händler und persönliche Gewohnheiten spielen eine Rolle</td></tr>
                        <tr><td><strong>Transport</strong></td><td>70 – 150 CHF</td><td>Abhängig von Stadtabos; Intercity-Züge erhöhen die Kosten</td></tr>
                    </tbody>
                </table>
                <p>Mehr Details: <a href="#/lebenshaltungskosten-in-der-schweiz">Lebenshaltungskosten in der Schweiz</a>.</p>

                <div class="callout info">
                    <strong>Abschließender Tipp</strong>
                    <p>Der Umzug in die Schweiz erfordert Planung, aber mit den richtigen Informationen wird der Prozess viel einfacher.</p>
                </div>

                <h3>Nützliche Links</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.sem.admin.ch/" target="_blank" rel="noopener noreferrer">sem.admin.ch</a></li>
                </ul>
            </div>
        `
    },

    // 2. Registro en la comuna
    "articulo-registro": {
        title: "Wie man sich nach der Ankunft in der Schweiz anmeldet",
        description: "Alles über den Anmeldeprozess bei der Gemeinde (Einwohnerkontrolle) nach Ihrer Ankunft in der Schweiz.",
        keywords: "anmeldung schweiz, gemeindeanmeldung, einwohnerkontrolle, aufenthaltsbewilligung beantragen",
        category: 'Inbetriebnahme',
        hub: 'tramites',
        slug: "anmeldung-gemeinde-schweiz",
        readingTime: 3,
        featuredImage: "media/guides/registrarse-en-suiza.jpg",
        imageAlt: "Der Eingang zu einer Schweizer Gemeindeverwaltung (Einwohnerkontrolle) mit der Schweizer Flagge",
        summary: "Wenn Sie in die Schweiz ziehen, müssen Sie sich in der Regel innerhalb weniger Tage bei Ihrer Gemeinde anmelden, oft innerhalb von 14 Tagen. Die Anmeldebestätigung reicht meist aus, um zu arbeiten und die ersten Formalitäten zu erledigen, während die Bewilligungskarte noch produziert wird.",
        content: `
            <div class="article-content">
                <h2>Einführung</h2>
                <p>Die <strong>Anmeldung bei der Gemeinde</strong> (Einwohnerkontrolle / <i>Contrôle des habitants</i>) ist der Schritt, der Ihren Wohnsitz in der Schweiz offiziell macht. Damit beginnt die administrative Kette: Aufenthaltsbewilligung, Krankenversicherung, Steuern, Schule und viele weitere Formalitäten.</p>
                <p>Wichtig: Nicht jede Person, die in die Schweiz einreist, muss sich anmelden. Dieser Artikel richtet sich an Menschen, die <strong>zum Wohnen</strong> in die Schweiz ziehen und deshalb eine offizielle Adresse benötigen.</p>

                <h2>Wie das System funktioniert</h2>
                <ol>
                    <li><strong>Sie wählen Ihre Gemeinde</strong> bzw. die tatsächliche Wohnadresse und finden das zuständige Büro.</li>
                    <li><strong>Sie buchen einen Termin</strong>, falls das lokal verlangt wird.</li>
                    <li><strong>Sie reichen die Unterlagen ein</strong>, zahlen die Gebühr und melden Ihre Adresse an.</li>
                    <li>Die Gemeinde stellt eine <strong>Anmeldebestätigung</strong> aus, je nach Kanton und Fall.</li>
                    <li>Ihre Akte geht an die <strong>kantonale Migrationsbehörde</strong>; die Bewilligungskarte folgt später per Post.</li>
                </ol>
                <div class="callout warning">
                    <strong>Fristen:</strong> In vielen Kantonen muss die Anmeldung innerhalb von <strong>14 Tagen</strong> erfolgen, manchmal sogar früher. Wer zum Arbeiten kommt, muss sich meist <strong>vor dem ersten Arbeitstag</strong> anmelden. Prüfen Sie immer die Regeln Ihrer Gemeinde.
                </div>

                <h2>Voraussetzungen und Regeln</h2>
                <h3>1) Wer muss sich anmelden und wer nicht?</h3>
                <ul>
                    <li><strong>Touristen oder kurze Aufenthalte bis etwa 90 Tage:</strong> In der Regel <strong>keine Anmeldung als Einwohner</strong>.</li>
                    <li><strong>Umzug zum Wohnen</strong> wegen Arbeit, Studium oder Familie: In der Praxis <strong>ja</strong>, eine Anmeldung innerhalb der lokalen Frist ist Standard.</li>
                    <li><strong>Arbeitssuchende aus EU/EFTA-Staaten:</strong> Ein gewisser Aufenthalt zur Stellensuche ist möglich. Sobald Sie sich niederlassen oder die zulässige Dauer überschreiten, müssen Sie Ihre Situation regularisieren.</li>
                    <li><strong>Grenzgänger mit G-Bewilligung:</strong> Sie wohnen außerhalb der Schweiz. Das läuft nicht wie eine normale Wohnsitzanmeldung, auch wenn es kantonale und arbeitsbezogene Formalitäten gibt.</li>
                </ul>
                <p>Wenn Ihr Fall gemischt ist, etwa zunächst Kurzaufenthalt und später Arbeitsvertrag, lautet die praktische Regel: <strong>Sobald Sie einen Aufenthaltsgrund und eine Adresse haben, handeln Sie rasch</strong>.</p>

                <h3>2) Adresse und Unterkunft: auch provisorisch möglich</h3>
                <p>Wenn Sie anfangs im Hotel, Airbnb oder bei Bekannten wohnen, können Sie sich in vielen Gemeinden trotzdem mit einer <strong>provisorischen Adresse</strong> anmelden und diese später ändern. Wenn Sie privat untergebracht sind, wird oft eine <strong>Wohnbestätigung</strong> der hauptmietenden oder beherbergenden Person verlangt.</p>

                <h3>3) Übliche Dokumente</h3>
                <ul>
                    <li>Reisepass oder Personalausweis.</li>
                    <li><strong>Aufenthaltsgrund:</strong> Arbeitsvertrag, Studienzulassung oder Nachweis ausreichender finanzieller Mittel.</li>
                    <li>Mietvertrag oder Unterkunftsbestätigung.</li>
                    <li>Passfoto, falls die Gemeinde keines vor Ort aufnimmt.</li>
                    <li>Familiendokumente, falls relevant, etwa Heirats- oder Geburtsurkunden.</li>
                </ul>
                <p>Hinzu kommt in vielen Gemeinden eine <strong>Verwaltungsgebühr</strong>, deren Höhe von Kanton und Bewilligungsart abhängt.</p>

                <h2>Konkrete Beispiele</h2>
                <h3>Beispiel 1: Sie kommen mit Job und provisorischer Unterkunft</h3>
                <p>Sie melden sich mit Arbeitsvertrag, Ausweis und vorläufiger Adresse an. Mit der Bestätigung können Sie Bankkonto und Krankenversicherung anschieben, bis die Bewilligungskarte eintrifft. Sobald Sie die definitive Wohnung haben, melden Sie die neue Adresse.</p>

                <h3>Beispiel 2: Sie kommen als Student</h3>
                <p>Sie reichen Zulassung oder Immatrikulation sowie die geforderten Nachweise über finanzielle Mittel und Versicherung ein. Mit der Anmeldung werden die weiteren Formalitäten aktiviert.</p>

                <h3>Beispiel 3: Sie sind Grenzgänger</h3>
                <p>Hier läuft der Prozess anders als bei einem Einwohner. Bewilligung und Pflichten werden stärker über Arbeitgeber und Kanton abgewickelt. Behandeln Sie diesen Fall nicht wie eine B-Bewilligung mit Adresse im Ausland.</p>

                <h2>Häufige Fehler</h2>
                <ul>
                    <li><strong>Einreise mit Wohnsitz verwechseln:</strong> Ein Besuch in der Schweiz löst keine Anmeldung aus, ein Umzug schon.</li>
                    <li><strong>Auf die endgültige Wohnung warten</strong> und dadurch die Frist verpassen.</li>
                    <li><strong>Den Termin zu spät buchen</strong> in Gemeinden mit überlasteten Schaltern.</li>
                    <li><strong>Adressänderungen nicht melden</strong>, obwohl Umzüge in der Schweiz administrativ zentral sind.</li>
                    <li><strong>Familiendokumente nicht vorbereiten</strong>, wenn Apostille oder Übersetzung nötig sind.</li>
                </ul>

                <h2>Praktische Ratschläge</h2>
                <ul>
                    <li>Prüfen Sie die offizielle Website Ihrer Gemeinde unter „Anmeldung“, „Einwohnerkontrolle“ oder „Contrôle des habitants“.</li>
                    <li>Bereiten Sie ein PDF mit allen Unterlagen plus ausgedruckte Kopien vor.</li>
                    <li>Wenn Ihr Fall speziell ist, bitten Sie die Gemeinde schriftlich um die exakte Dokumentenliste.</li>
                    <li>Nach der Anmeldung sollten Sie zuerst <a href="#/krankenversicherung-schweiz-kvg">die Krankenversicherung</a> und Ihr Bankkonto organisieren.</li>
                    <li>Für den ersten Monat ist die <a href="#/checkliste-die-wichtigsten-schritte-im-ersten-monat-in-der-schweiz">komplette Ankommens-Checkliste</a> hilfreich.</li>
                </ul>

                <h2>Offizielle Schweizer Quellen</h2>
                <ul>
                    <li><a href="https://www.ch.ch/de/auslander-in-der-schweiz/" target="_blank" rel="noopener noreferrer">ch.ch — Leben in der Schweiz</a></li>
                    <li><a href="https://www.sem.admin.ch/sem/de/home/themen/aufenthalt.html" target="_blank" rel="noopener noreferrer">SEM — Aufenthalt</a></li>
                    <li>Die offizielle Website Ihrer Gemeinde bzw. Einwohnerkontrolle.</li>
                </ul>
            </div>
        `
    },

    // 3. Seguro de salud (LAMal)
    "articulo-lamal": {
        title: "Krankenversicherung in der Schweiz (KVG): Ein praktischer Leitfaden",
        description: "Alles, was Sie über die obligatorische Schweizer Krankenversicherung (KVG) wissen müssen: Leistungen, Modellanforderungen, Fristen und Prämien sparen.",
        keywords: "krankenversicherung schweiz, KVG, LAMal, krankenkasse, prämienverbilligung, HMO modell",
        audience: 'resident',
        featuredImage: "media/guides/seguro-medico-lamal-suiza.jpg",
        imageAlt: "Eine Schweizer Krankenversicherungskarte und ein Stethoskop, die das KVG-System repräsentieren",
        category: "Krankenversicherung",
        hub: "salud",
        slug: "krankenversicherung-schweiz-kvg",
        readingTime: 6,
        summary: "Die Krankenversicherung in der Schweiz ist obligatorisch, privat und individuell. Sie haben nach der Ankunft drei Monate Zeit für den Abschluss, zahlen aber rückwirkend ab dem ersten Tag Ihres Wohnsitzes.",
        content: `
            <div class="article-content">
                <h2>Einführung</h2>
                <p>Eine der größten Umstellungen beim Zuzug in die Schweiz ist, dass das Gesundheitssystem nicht wie eine automatische staatliche Absicherung funktioniert. Die medizinische Grundversorgung wird bei einem privaten Versicherer abgeschlossen, ist aber gesetzlich geregelt: das <strong>KVG</strong> bzw. die <strong>LAMal</strong>. Kurz gesagt: <strong>obligatorisch, privat und in der Grunddeckung standardisiert</strong>.</p>

                <div class="callout warning">
                    <strong>Kritische Frist:</strong> Sie haben <strong>drei Monate</strong> ab Ankunft bzw. Anmeldung Zeit, die Grundversicherung abzuschließen. Der Schutz gilt <strong>rückwirkend</strong> ab dem ersten Tag Ihres Aufenthalts. Wenn Sie spät abschließen, zahlen Sie die Prämien trotzdem ab Tag 1 nach.
                </div>

                <h2>Wie das System funktioniert</h2>
                <h3>1) Grundversicherung versus Zusatzversicherungen</h3>
                <p>Die <strong>Grundversicherung</strong> deckt die gesetzlich definierten Basisleistungen ab und ist bei allen Kassen inhaltlich gleich. <strong>Zusatzversicherungen</strong> decken Extras wie Zahnbehandlungen, halbprivate oder private Spitalzimmer, Brillen oder alternative Leistungen. Sie sind freiwillig und nicht garantierte Aufnahmeprodukte: Versicherer dürfen Gesundheitsfragen stellen, Ausschlüsse machen oder ablehnen.</p>

                <h3>2) Wofür Sie zahlen: Prämie, Franchise und Selbstbehalt</h3>
                <p>Versichert zu sein bedeutet in der Schweiz nicht „alles inklusive“. Ihre Kosten setzen sich in der Regel aus Folgendem zusammen:</p>
                <ul>
                    <li><strong>Monatsprämie:</strong> fixer Betrag, abhängig von Kanton, Gemeinde, Alter und Modell.</li>
                    <li><strong>Franchise:</strong> Jahresbetrag, den Sie zuerst selbst bezahlen.</li>
                    <li><strong>Selbstbehalt:</strong> Danach tragen Sie einen Prozentsatz der Kosten bis zu einer Obergrenze.</li>
                    <li><strong>Spitalbeitrag:</strong> Bei stationären Aufenthalten fällt für Erwachsene meist ein Tagesbeitrag an.</li>
                </ul>
                <p>Für die Entscheidung zwischen hoher oder tiefer Franchise lohnt sich der Vergleich mit <a href="#/franchise-und-selbstbehalt-schweiz">Franchise und Selbstbehalt</a>.</p>

                <h3>3) Versicherungsmodelle</h3>
                <p>Ein wichtiger Hebel bei der Prämie ist das <strong>Versicherungsmodell</strong>. Bei manchen Modellen müssen Sie zuerst die Telemedizin anrufen oder immer den Hausarzt konsultieren, bevor Sie zu einem Spezialisten gehen. Wer die Regeln des gewählten Modells nicht einhält, riskiert gekürzte Leistungen.</p>

                <h3>4) Kasse wählen und wechseln</h3>
                <p>Die Grundversicherung kann nach festen Fristen gewechselt werden. Üblich ist der Vergleich der Prämien im Herbst für das Folgejahr. Die genauen Termine und Bedingungen hängen vom Produkt und vom Kalenderjahr ab, deshalb sollten Sie sich immer an die offiziellen Angaben und Ihre Vertragsbedingungen halten.</p>

                <h3>5) Rechnungen: Warum Sie manchmal zuerst selbst zahlen</h3>
                <p>In der Schweiz ist es normal, Rechnungen vom Arzt oder Spital zu erhalten. Je nach Abrechnungssystem bezahlen Sie die Rechnung selbst und reichen sie ein oder der Leistungserbringer rechnet direkt mit der Kasse ab. Solange Sie die Franchise nicht ausgeschöpft haben, tragen Sie die Kosten ohnehin selbst. Darum fühlt sich das System trotz Prämien oft teuer an.</p>

                <h2>Voraussetzungen und Regeln</h2>
                <h3>1) Wer sich versichern muss</h3>
                <p>Grundsätzlich muss jede Person mit Wohnsitz in der Schweiz versichert sein. Es gibt Ausnahmen und Sonderregeln, etwa für gewisse Studierende oder Grenzgänger. Wenn Ihr Fall speziell ist, lassen Sie sich die anwendbare Regel schriftlich vom Kanton bestätigen.</p>

                <h3>2) Unfallversicherung: der teuerste Denkfehler</h3>
                <p>Wenn Sie angestellt sind, deckt Ihr Arbeitgeber oft die <strong>Unfallversicherung</strong> ab, je nach Pensum auch für Nichtberufsunfälle. In diesem Fall können Sie den Unfallschutz in der Grundversicherung meist ausschließen und Prämie sparen. Wenn Sie die Stelle verlieren, müssen Sie diese Deckung wieder aktivieren. Genau hier passieren viele teure Lücken.</p>

                <h3>3) Prämienverbilligung und Unterstützung</h3>
                <p>Für Personen und Familien mit tieferem Einkommen gibt es eine <strong>Prämienverbilligung</strong>. Sie wird kantonal geregelt: Kriterien, Einkommensgrenzen und Verfahren unterscheiden sich stark. Viele Neuzuzüger beantragen sie nicht, obwohl sie Anspruch hätten.</p>

                <h3>4) Was die Grundversicherung abdeckt</h3>
                <p>Die Leistungen der Grundversicherung sind bei allen Kassen gesetzlich identisch. Typischerweise umfasst sie:</p>
                <ul>
                    <li>Hausarzt- und Spezialistenkonsultationen, abhängig vom gewählten Modell.</li>
                    <li>Ärztlich verschriebene Medikamente aus den offiziellen Listen.</li>
                    <li>Spitalaufenthalte in der <strong>allgemeinen Abteilung</strong>, in der Regel im Wohnkanton, außer bei Notfällen oder besonderen Regeln.</li>
                    <li>Mutterschaftsleistungen unter eigenen gesetzlichen Bedingungen.</li>
                </ul>

                <h3>5) Was nicht oder nur begrenzt gedeckt ist</h3>
                <ul>
                    <li><strong>Zahnbehandlungen:</strong> Routinebehandlungen werden meist separat bezahlt oder über Zusatzversicherungen gedeckt.</li>
                    <li><strong>Brillen und Kontaktlinsen:</strong> oft nur begrenzt oder gar nicht in der Grundversicherung.</li>
                    <li><strong>Privat- oder Halbprivatzimmer im Spital:</strong> normalerweise nur mit Zusatzversicherung.</li>
                </ul>

                <h2>Konkrete Beispiele</h2>
                <h3>Beispiel 1: Gesunde Person, die die Monatskosten senken will</h3>
                <p>Wer selten zum Arzt geht, wählt häufig eine hohe Franchise, um die Prämie zu senken. Das Risiko: In einem Jahr mit Unfall oder teurer Behandlung zahlen Sie zunächst deutlich mehr aus eigener Tasche.</p>

                <h3>Beispiel 2: Familie mit kleinen Kindern</h3>
                <p>Mit Kindern sind Arztbesuche häufiger. Viele Familien bevorzugen tiefere Franchisen, um die Ausgaben besser planbar zu halten. Ebenso wichtig ist ein Modell, das mit Pädiatrie und Notfällen alltagstauglich ist.</p>

                <h3>Beispiel 3: Sie schließen die Versicherung nicht rechtzeitig ab</h3>
                <p>Wenn Sie die Dreimonatsfrist verpassen, sparen Sie nichts. Die Prämien werden in der Regel rückwirkend ab Tag 1 geschuldet, und der Kanton kann Ihnen sogar eine Kasse zuteilen. Planen Sie diesen Schritt deshalb in den <a href="#/checkliste-die-wichtigsten-schritte-im-ersten-monat-in-der-schweiz">ersten Wochen</a> fest ein.</p>

                <h3>Beispiel 4: Worst-Case-Rechnung für die Franchise</h3>
                <p>Eine praktische Methode bei der Wahl der Franchise ist die Berechnung des schlimmsten Falls: Jahresprämie + Franchise + maximaler Selbstbehalt. So sehen Sie, ob eine tiefe oder hohe Franchise besser zu Ihrer finanziellen Situation passt.</p>

                <h2>Häufige Fehler</h2>
                <ul>
                    <li><strong>Nur auf die Prämie schauen:</strong> Wer das Modell nicht versteht, zahlt später unter Umständen nicht erstattete Rechnungen.</li>
                    <li><strong>Grund- und Zusatzversicherung verwechseln:</strong> Zahnbehandlungen oder Privatabteilungen sind nicht automatisch enthalten.</li>
                    <li><strong>Die Franchise falsch wählen:</strong> Eine tiefe Prämie hilft wenig, wenn jedes Jahr planbare medizinische Kosten anfallen.</li>
                    <li><strong>Unfalldeckung bei Jobwechsel vergessen:</strong> Das führt zu Doppeldeckung oder gefährlichen Lücken.</li>
                </ul>

                <h2>Praktische Tipps</h2>
                <ul>
                    <li>Vergleichen Sie Prämien auf <a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo</a>, dem offiziellen Prämienrechner.</li>
                    <li>Berechnen Sie Ihren <strong>jährlichen Worst Case</strong>, nicht nur die Monatsprämie.</li>
                    <li>Wenn Sie Zusatzversicherungen möchten, ist der Abschluss oft einfacher, solange Sie gesund sind und noch keine Diagnosen vorliegen.</li>
                    <li>Bei knapperem Budget prüfen Sie die <strong>Prämienverbilligung</strong> Ihres Kantons.</li>
                    <li>Diese Seite ergänzt die Artikel zu <a href="#/franchise-und-selbstbehalt-schweiz">Franchise und Selbstbehalt</a> sowie zu den <a href="#/lebenshaltungskosten-in-der-schweiz">Lebenshaltungskosten</a>.</li>
                </ul>

                <h2>Offizielle Quellen</h2>
                <ul>
                    <li><a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo — offizieller Prämienvergleich</a></li>
                    <li><a href="https://www.bag.admin.ch/" target="_blank" rel="noopener noreferrer">BAG — Bundesamt für Gesundheit</a></li>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Offizielles Schweizer Portal</a></li>
                </ul>
            </div>
        `
    },

    // 4. Franquicia y copago en el sistema de salud
    "articulo-franquicia": {
        title: "Franchise und Kostenbeteiligung im Schweizer Gesundheitssystem",
        description: "Eine detaillierte Erklärung von Franchise und Selbstbehalt (Quote-part) in der Schweizer Krankenversicherung (KVG/LAMal).",
        keywords: "krankenversicherung franchise schweiz, selbstbehalt, quote-part, medizinische kosten schweiz",
        audience: 'resident',
        featuredImage: "media/guides/franquicia-seguro-medico-suiza.jpg",
        imageAlt: "Eine konzeptionelle Illustration von Ersparnissen und Gesundheitskosten in der Schweiz",
        category: "Medizinische Kosten",
        hub: "salud",
        slug: "franchise-selbstbehalt-schweiz-ererklaert",
        readingTime: 4,
        summary: "In der Schweiz zahlen Sie 100 % Ihrer anfänglichen medizinischen Kosten selbst, bis Ihr gewählter Selbstbehalt (Franchise) erreicht ist. Danach zahlen Sie einen Selbstbehalt von 10 % bis zu einer jährlichen Obergrenze.",
        content: `
            <div class="article-content">
                <h2>Einleitung</h2>
                <p>Auch nach Zahlung Ihrer monatlichen Prämie müssen Sie sich persönlich an den Kosten der meisten medizinischen Leistungen beteiligen. Ihr jährlicher Eigenanteil besteht aus drei Elementen: der Franchise, dem Selbstbehalt (Quote-part / Selbstbehalt) und dem Spitalbeitrag.</p>

                <h2>1) Die Franchise</h2>
                <p>Die Franchise ist der fixe jährliche Betrag, den Sie komplett selbst bezahlen müssen, bevor die Versicherung beginnt, Kosten zu übernehmen. Es handelt sich um einen „Vorschuss«, der jedes Kalenderjahr zurückgesetzt wird.</p>
                <ul>
                    <li><strong>Erwachsene:</strong> Sie können zwischen verschiedenen Stufen wählen: 300, 500, 1000, 1500, 2000 oder 2500 CHF pro Jahr.</li>
                    <li><strong>Kinder:</strong> In der Regel 0 CHF, kann aber bis auf 600 CHF erhöht werden, um die Prämie zu senken.</li>
                    <li><strong>Die Regel:</strong> Je höher die gewählte Franchise, desto niedriger ist Ihre monatliche Prämie.</li>
                </ul>

                <h2>2) Der Selbstbehalt (Quote-part / Selbstbehalt)</h2>
                <p>Sobald Sie Ihre Franchise erreicht haben (d. h. Sie haben den gewählten Betrag bereits aus eigener Tasche bezahlt), übernimmt die Versicherung Ihre Arztrechnungen. Sie müssen jedoch weiterhin <strong>10 %</strong> jeder Rechnung über der Franchise bezahlen.</p>
                <p>Dieser 10 %ige Selbstbehalt ist <strong>jährlich begrenzt</strong>:</p>
                <ul>
                    <li><strong>Erwachsene:</strong> Maximal 700 CHF pro Jahr.</li>
                    <li><strong>Kinder:</strong> Maximal 350 CHF pro Jahr.</li>
                </ul>
                <p>Sobald Sie diese Obergrenze erreicht haben, übernimmt Ihre Versicherung 100 % weiterer medizinischer Kosten für den Rest des Jahres.</p>

                <h2>3) Spitalbeitrag</h2>
                <p>Im Falle eines Spitalaufenthalts müssen Erwachsene einen fixen Beitrag von <strong>15 CHF pro Tag</strong> leisten, ohne zeitliche Begrenzung. Dieser Betrag ist separat von Franchise und Selbstbehalt (mit einigen Ausnahmen, wie z. B. bei Mutterschaftsleistungen).</p>

                <h2>Maximale jährliche Kosten (Worst-Case-Szenario)</h2>
                <p>Wenn Sie im Laufe eines Jahres hohe medizinische Bedürfnisse oder einen schweren Unfall haben, ist der maximale Betrag, den Sie selbst zahlen müssten (neben den Prämien):</p>
                <div class="callout">
                    <strong>Erwachsener mit 2500er Franchise:</strong> 2500 (Franchise) + 700 (10 % max.) = <strong>3200 CHF/Jahr</strong> (+ Prämien + Spital).<br>
                    <strong>Erwachsener mit 300er Franchise:</strong> 300 (Franchise) + 700 (10 % max.) = <strong>1000 CHF/Jahr</strong> (+ Prämien + Spital).
                </div>

                <h2>Welche Franchise sollten Sie wählen?</h2>
                <p>Statistisch und finanziell ist es meist nur sinnvoll, eines der beiden Extreme zu wählen:</p>
                <ul>
                    <li><strong>2500er Franchise:</strong> Wenn Sie gesund sind, selten zum Arzt gehen und über genügend Ersparnisse verfügen, um im Notfall 3'200 CHF zu decken. Diese Option bietet auf lange Sicht die größte Ersparnis aufgrund der niedrigen monatlichen Prämie.</li>
                    <li><strong>300er Franchise:</strong> Wenn Sie häufig zum Arzt gehen (mit Kosten über 1'800–2'000 CHF/Jahr rechnen) oder wenn Ihnen sofortige Ersparnisse fehlen und Sie die Sicherheit hoher monatlicher Prämien, aber geringer unerwarteter Kosten bevorzugen.</li>
                    <li><strong>Zwischenfranchisen:</strong> Diese sind mathematisch im Vergleich zu den beiden obigen Optionen selten vorteilhaft.</li>
                </ul>
            </div>
        `
    },

    // 5. Impuestos en Suiza: federal, cantonal y comunal
        "articulo-impuestos": {
        title: "Steuern in der Schweiz: Bund, Kanton und Gemeinde",
        description: "Verstehen Sie das System der dreifachen Besteuerung in der Schweiz: von der Bundesebene, von den Kantonen und von den Gemeinden.",
        keywords: "steuern schweiz, steuersystem schweiz, kantone steuern",
        audience: 'worker',
        category: 'Steuersystem',
        hub: 'impuestos',
        slug: "steuern-in-der-schweiz",
        readingTime: 12,
        featuredImage: "media/guides/impuestos-suiza.png",
        imageAlt: "Steuerformulare, Rechner und Schweizer Muenzen auf einem geordneten Schreibtisch",
        summary: 'In der Schweiz zahlst du Steuern auf 3 Ebenen. Die kantonalen und kommunalen machen die groesste Last aus und variieren dramatisch, selbst wenn du nur die Strasse ueberquerst.',
        content: `
            <div class="article-content">
                <h2>Einfuehrung</h2>
                <p>In der Schweiz verstehst du Steuern nicht, indem du auf einen "nationalen Satz" schaust. Das Land ist foederal, und deine Steuerlast haengt stark davon ab, <strong>wo du lebst</strong> (Kanton und Gemeinde), deinen Familienstand, Kinder und Einkommensniveau. Zwei Personen mit demselben Gehalt koennen unterschiedliche Steuern zahlen, nur weil sie in verschiedenen Gemeinden wohnen.</p>

                <div class="callout info">
                    <strong>Schluesselaussagen:</strong>
                    <ul>
                        <li>Du zahlst Steuern auf <strong>drei Ebenen</strong>: Bund, Kanton und Gemeinde.</li>
                        <li>Die kantonalen und kommunalen Steuern varieren meist am meisten (und sind am wichtigsten fuer deinen Haushalt).</li>
                        <li>Viele Neuankoemmling mit Permit L/B beginnen mit <a href="#/impuesto-fuente-suiza">Quellensteuer</a> (Einbehalt in der Lohnabrechnung).</li>
                    </ul>
                </div>

                <h2>Wie das System funktioniert</h2>
                <h3>1) Direkte Bundessteuer</h3>
                <p>Dies ist die nationale Komponente. Sie wird einheitlich im ganzen Land mit progressiven Tarifskalen angewendet. Dies ist normalerweise ein kleinerer Teil deiner Gesamtrechnung im Vergleich zu Kanton und Gemeinde.</p>

                <h3>2) Kantonalsteuern</h3>
                <p>Jeder Kanton definiert Tarifskalen, Abzuege und Regeln. Neben der Einkommensteuer gibt es in vielen Kantonen eine Steuer auf <strong>Vermogen / Kapital</strong> (mit Schwellwerten und eigenen Regeln). Deshalb ist es unvollstaendig, von "Steuern in der Schweiz" zu sprechen, ohne den Kanton zu erwaehnen.</p>

                <h3>3) Gemeindesteuern</h3>
                <p>In vielen Kantonen wendet die Gemeinde einen Faktor oder Multiplikator auf die Grundkantonalsteuer an. Ergebnis: Ein Umzug "ein paar Kilometer" kann deine Steuerlast aendern, ohne deinen Arbeitsplatz zu wechseln.</p>

                <h3>4) Quellensteuer vs. jaehrliche Erklaerung</h3>
                <p>Es gibt zwei grosse Zahlungsformen:</p>
                <ul>
                    <li><strong>Quellensteuer:</strong> Dein Arbeitgeber behaelt monatlich in der Lohnabrechnung ein (sehr verbreitet bei Permits L/B).</li>
                    <li><strong>Jaehrliche Erklaerung:</strong> Du reichst ein Steuererklaerung ein und zahlst am Ende des Jahres (oder erhaeltst eine Erstatung).</li>
                </ul>

                <h2>Wer muss Steuern zahlen?</h2>
                <p>In der Schweiz zahlst du Steuern, wenn du:</p>
                <ul>
                    <li><strong>Ansaessig bist</strong> (Wohnsitz registriert bei der Gemeinde).</li>
                    <li><strong>Einkommen hast</strong> (aus Arbeit, freiberuflicher Taetigkeit, Kapital usw.).</li>
                    <li><strong>Ein Mindesteinkommensniveau erreichst</strong> (es gibt Schwellwerte, unter denen man nicht zahlt, aber sie sind sehr niedrig).</li>
                </ul>

                <p>Touristen und Arbeitssuchende ohne Ansaessigkeit zahlen normalerweise keine Steuern in der Schweiz.</p>

                <h2>Berechnung und Beispiel</h2>
                <p>Die Berechnung ist komplex, weil sie von mehreren Faktoren abhaengt:</p>
                <ul>
                    <li>Bruttoeinkommen.</li>
                    <li>Zahl der Unterhaltsberechtigten (Ehepartner, Kinder).</li>
                    <li>Vermogen (Haus, Ersparnisse).</li>
                    <li>Abzuege (Hypothekenzinsen, Beitraege zu Altersvorsorge usw.).</li>
                </ul>

                <div class="callout info">
                    <strong>Orientierungswert:</strong> Ein alleinstehender Arbeitnehmer mit 50.000 CHF Jahresgehalt zahlt in Zuerich (Kanton mit moderaten Steuern) insgesamt etwa 5.000-5.500 CHF Steuern (Bund + Kanton + Gemeinde). In Genf oder Appenzell (hohe Steuern) kann es 5.500-6.500 CHF sein. Die Differenz ist erheblich.
                </div>

                <h2>Quellensteuer: Erste Ankunft</h2>
                <p>Wenn du gerade in der Schweiz ankommst und einen Job beginnst, wirst du haeufig zur <strong>Quellensteuer</strong> eingestuft. Dies ist ein System der Lohnsteuererstellung, das bei kuerzeren oder internationalen Aufenthaelten verwendet wird.</p>

                <h3>Wie funktioniert die Quellensteuer?</h3>
                <ul>
                    <li>Dein Arbeitgeber behaelt einen Prozentsatz deines Lohns ein (typisch 8-20%, je nach Kanton und Einkommensniveau).</li>
                    <li>Dieser Betrag wird monatlich an die Steuerbehoen uebermittelt.</li>
                    <li>Du schuldest keine zusaetzliche Steuererklaerung am Jahresende (in den meisten Faellen).</li>
                </ul>

                <h3>Durchschnittliche Quellensteuerquoten</h3>
                <p>Dies ist ein grobes Beispiel fuer einen Arbeitnehmer mit 60.000 CHF Jahresgehalt, alleinstehend:</p>
                <ul>
                    <li>Zuerich: ca. 18% (10.800 CHF).</li>
                    <li>Bern: ca. 16% (9.600 CHF).</li>
                    <li>Genf: ca. 22% (13.200 CHF).</li>
                    <li>Basel-Stadt: ca. 17% (10.200 CHF).</li>
                </ul>

                <p>Diese Quoten sind groben Durchschnittswerten; die genauen Steuern haengen von Dekduktionen und lokalen Verordnungen ab.</p>

                <h2>Uebergang zur normalen Besteuerung</h2>
                <p>Nach 1-2 Jahren (oder wenn dein Status sich aendert) kannst du die Quellensteuer verlassen und zur normalen jaehrlichen Steuererklarung uebergehen. Dies kann vorteilhaft sein, wenn:</p>
                <ul>
                    <li>Du berufliche Ausgaben hast, die du abziehen kannst.</li>
                    <li>Du eine Familie hast (Familienabzuege reduzieren deine Steuern).</li>
                    <li>Du ein niedriges Einkommensniveau erreichst.</li>
                </ul>

                <h2>Was zaehlt als abzugsf aehig?</h2>
                <p>In der Schweiz koennen einige Ausgaben deinen steuerpflichtigen Einkommen reduzieren:</p>
                <ul>
                    <li><strong>Altersvorsorge (Saeulen 2 und 3):</strong> Beitraege sind teilweise abzugsf aehig.</li>
                    <li><strong>Hypothekenzinsen:</strong> Wenn du Hausbesitzer bist.</li>
                    <li><strong>Schuldzinsen:</strong> In einigen Kantonen abzugsf aehig.</li>
                    <li><strong>Versicherungspraemien:</strong> Teilweise abzugsf aehig (haengt vom Kanton ab).</li>
                    <li><strong>Kinderbetreuung:</strong> Aufwendungen fuer Kinderbetreuung sind (in manchen Kantonen) abzugsf aehig.</li>
                </ul>

                <div class="callout warning">
                    <strong>Wichtig:</strong> Arbeitnehmerspezifische Ausgaben (Pendeln, Berufskleidung) sind in der Regel nicht abzugsf aehig. Das System beguenstigt Hausbesitzer und Unternehmer gegenueber Arbeitnehmern.
                </div>

                <h2>Kantonsvergleich</h2>
                <p>Zur Veranschaulichung: Drei Kanton mit unterschiedlicher Steuerbelastung:</p>

                <h3>Zuerich (moderat)</h3>
                <p>Kanton mit moderaten bis niedrigen Steuern. Beliebte Destination fuer hochverdienende Arbeitnehmer und Unternehmen.</p>

                <h3>Genf (hoch)</h3>
                <p>Haeheres Steuerniveau, aber auch hoeheres Gehaltsniveau. Der Wohnungsmarkt ist teuer.</p>

                <h3>Appenzell (Unterschied auf Steuerbasis)</h3>
                <p>Kleinere Kantone mit unterschiedlichen Steuergrundsaetzen. Manche sind sehr niedrig, andere moderat bis hoch.</p>

                <h2>Steuererklaerung ausfuellen</h2>
                <p>Wenn du die normale Besteuerung erreichst, musst du jaehrlich eine Steuererklaerung einreichen. Dies ist kompliziert und erfordert Details ueber:</p>
                <ul>
                    <li>Einkommenquellen (Lohn, Kapitalertraege, Miete).</li>
                    <li>Vermoegensstand (Sparbuch, Immobilien).</li>
                    <li>Abzuege (wie oben aufgelistet).</li>
                </ul>

                <p>Die meisten Menschen engagieren einen Steuerfachmann oder nutzen spezialisierte Software. Die Kosten betragen in der Regel 150-400 CHF fuer Arbeitnehmer.</p>

                <h2>Wichtige Hinweise</h2>
                <div class="callout warning">
                    <strong>Fristen einhalten:</strong> Die Frist fuer die Steuererklaerung ist je nach Kanton unterschiedlich, liegt aber normalerweise zwischen Mitte Februar und Ende Maerz des Folgejahres. Verspaetete Erklaerungen koennen zu Strafen fuehren.
                </div>

                <div class="callout tip">
                    <strong>Konserviere Quittungen:</strong> Behalte Belege fuer potenzielle Abzuege (Altersvorsorge, Versicherungen). Diese werden benoetigt, wenn du zum normalen Besteuerungssystem uebergehst.
                </div>

                <h2>Zusammenfassung</h2>
                <p>Das Schweizer Steuersystem ist verwirrend, weil es dreistufig ist und der Ort, an dem du lebst, einen grossen Unterschied macht. Aber:</p>
                <ul>
                    <li>In den ersten Monaten / Jahren zahlst du einfach die Quellensteuer (Arbeitgeber macht das fuer dich).</li>
                    <li>Nach ein bis zwei Jahren kannst du zur normalen Erklaerung uebergehen.</li>
                    <li>Die Schweizer erwarten von dir, dass du deine Steuern auf den Franken genau zahltst (Ehrlichkeit ist hier sehr wichtig).</li>
                </ul>
            </div>
        `
    },

    // 6. Impuesto a la fuente
    "articulo-impuesto-fuente": {
        title: "Die Quellensteuer (Impôt à la source) erklärt",
        description: "Was ist die Quellensteuer, wer ist betroffen und wie wird sie in der Schweiz für Ausländer berechnet.",
        keywords: "quellensteuer schweiz, steuerabzug vom lohn, quellensteuer-rechner, steuern ausländer",
        audience: 'worker',
        featuredImage: "media/guides/impuesto-fuente-suiza.jpg",
        category: `Quellensteuer`,
        hub: 'impuestos',
        readingTime: 3,
        dateUpdated: 'Actualizado recientemente',
        summary: `Wie der Quellensteuerabzug direkt vom monatlichen Lohn für Ausländer und Grenzgänger funktioniert.`,
        content: `<div class="article-content">
<p>Die Mehrheit der Schweizer Bürger und Personen mit ständigem Wohnsitz (Bewilligung C) füllen ihre Einkommenssteuererklärung einmal im Jahr aus und zahlen anschließend die Steuern. Für neu angekommene Ausländer gibt es jedoch die <strong>Quellensteuer</strong>.</p>

<h2>Wer ist betroffen?</h2>
<p>Betroffen sind vor allem ausländische Arbeitnehmer, die über eine Aufenthaltserlaubnis <strong>L oder B</strong> verfügen, sowie Grenzgänger (Ausweis G) aus einigen Ländern.</p>

<h2>Wie funktioniert es?</h2>
<p>Ihr Schweizer Arbeitgeber zieht diese Steuer jeden Monat direkt von Ihrem Bruttolohn ab, genauso wie die Einbehaltung der Einkommensteuer auf der Lohn- und Gehaltsabrechnung in Spanien funktioniert. Der Arbeitgeber überweist dieses Geld dann an die Steuerverwaltung des Kantons. Die anzuwendenden Tarife richten sich nach Ihrem Familienstand, der Anzahl unterhaltsberechtigter Kinder, der Erwerbstätigkeit Ihres Ehepartners und den Tabellen des entsprechenden Kantons (Tarife A, B, C...).</p>

<h2>Änderung der Steuererklärung</h2>
<p>Abhängig von Ihrem Kanton haben Sie möglicherweise bis März des Folgejahres das Recht, eine <em>Korrektur der Quellensteuer</em> zu beantragen, wenn Sie Ausgaben getätigt haben, die abzugsfähig sind (z. B. Vorsorge der 3. Säule, Kinderbetreuungskosten, Spenden, Bildungsrecycling).<br/>
<strong>Wichtige Grenze:</strong> Personen mit einer B-Bewilligung, die einen jährlichen Bruttolohn von 120.000 CHF überschreiten, sind standardmäßig zur Abgabe einer ordentlichen Einkommenssteuererklärung verpflichtet, die jedoch aufgrund der definitiven Steuererklärung weiterhin Monat für Monat einbehalten wird.</p>
</div>`
    },

    // 7. Seguros Sociales
    "articulo-seguros-sociales": {
        title: "Soziale Sicherheit in der Schweiz: AHV, IV, BVG und Arbeitslosenversicherung",
        description: "Eine umfassende Aufschlüsselung des Schweizer Sozialversicherungssystems: Die drei Säulen (AHV/IV und BVG) sowie die Arbeitslosenversicherung.",
        keywords: "sozialversicherungen schweiz, AHV, IV, BVG, arbeitslosigkeit schweiz, drei säulen system",
        audience: 'resident',
        featuredImage: "media/guides/seguros-sociales-suiza.jpg",
        imageAlt: "Eine Darstellung des Schweizer 3-Säulen-Vorsorgesystems",
        category: "Sozialversicherungen",
        hub: "trabajo",
        slug: "sozialversicherungen-schweiz-drei-saeulen",
        readingTime: 5,
        summary: "Das Schweizer Sozialsystem basiert auf dem „Drei-Säulen-Prinzip«. Diese kombinieren staatliche, berufliche und private Vorsorge, um Lebensstandard und Alter abzusichern.",
        content: `
            <div class="article-content">
                <p>Das Schweizer System der sozialen Sicherheit ist eines der stabilsten der Welt. Es ist darauf ausgelegt, die Existenz bei Alter, Invalidität, Tod oder Arbeitslosigkeit zu sichern. Das Herzstück ist das <strong>Drei-Säulen-Konzept</strong>.</p>

                <h2>Die 1. Säule: Staatliche Vorsorge (AHV/IV)</h2>
                <p>Dies ist die obligatorische Basisvorsorge für alle. Sie wird nach dem Umlageverfahren finanziert (die heutige Erwerbsgeneration bezahlt für die heutigen Rentner).</p>
                <ul>
                    <li><strong>AHV (Alters- und Hinterlassenenversicherung):</strong> Die Grundrente im Alter.</li>
                    <li><strong>IV (Invalidenversicherung):</strong> Unterstützung bei Erwerbsunfähigkeit durch Krankheit oder Unfall.</li>
                    <li><strong>EO (Erwerbsersatzordnung):</strong> Deckt den Verdienstausfall bei Militärdienst oder Mutterschaft/Vaterschaft ab.</li>
                </ul>

                <h2>Die 2. Säule: Berufliche Vorsorge (BVG / Pensionskasse)</h2>
                <p>Die 2. Säule ergänzt die AHV mit dem Ziel, den gewohnten Lebensstandard (insgesamt ca. 60 % des letzten Einkommens) zu sichern. Sie ist für alle Arbeitnehmer mit einem Mindesteinkommen obligatorisch.</p>
                <ul>
                    <li><strong>Finanzierung:</strong> Kapitaldeckungsverfahren. Jeder spart für sich selbst in einem individuellen Konto bei der Pensionskasse seines Arbeitgebers.</li>
                    <li><strong>Beiträge:</strong> Werden hälftig von Arbeitnehmer und Arbeitgeber getragen.</li>
                </ul>

                <h2>Die 3. Säule: Private Vorsorge</h2>
                <p>Dies ist die freiwillige individuelle Ergänzung. Die <strong>Säule 3a</strong> (gebundene Vorsorge) ist besonders attraktiv, da Einzahlungen bis zu einem jährlichen Höchstbetrag direkt vom steuerpflichtigen Einkommen abgezogen werden können.</p>

                <h2>Arbeitslosenversicherung (ALV)</h2>
                <p>Alle Arbeitnehmer sind obligatorisch gegen Arbeitslosigkeit versichert. Im Falle eines Stellenverlusts:</p>
                <ul>
                    <li><strong>Entschädigung:</strong> In der Regel 70 % bis 80 % Ihres letzten versicherten Verdienstes.</li>
                    <li><strong>Bedingung:</strong> Sie müssen innerhalb der letzten zwei Jahre mindestens 12 Monate lang in der Schweiz (oder EU/EFTA unter bestimmten Bedingungen) gearbeitet haben.</li>
                    <li><strong>Zuständigkeit:</strong> Die Anmeldung erfolgt über das regionale Arbeitsvermittlungszentrum (<strong>RAV</strong>).</li>
                </ul>

                <div class="callout info">
                    <strong>Tipp für Expats:</strong> Wenn Sie die Schweiz endgültig verlassen, können Sie sich unter bestimmten Bedingungen das Kapital Ihrer 2. Säule (BVG) bar auszahlen lassen oder auf ein Freizügigkeitskonto übertragen.
                </div>
            </div>
        `
    },

    // 7b. RAV / Arbeitslosigkeit
        "articulo-rav-paro": {
        title: "RAV und Arbeitslosigkeit in der Schweiz: wie es funktioniert, Anforderungen und Schritte",
        description: "Praktischer Leitfaden fuer Arbeitslosenversicherung in der Schweiz (ALV/AC): Anforderungen, Zeitplaene, Anmeldung bei der RAV, Pflichten und Sanktionen.",
        keywords: "RAV schweiz, arbeitslosigkeit schweiz, arbeitslosenversicherung schweiz, ALV AC, arbeitslosenversicherung",
        audience: "worker",
        category: "Arbeit",
        hub: "trabajo",
        slug: "rav-arbeitslosigkeit-schweiz",
        readingTime: 12,
        dateUpdated: "Maerz 2026",
        featuredImage: "media/guides/rav-paro-suiza.jpg",
        imageAlt: "Buero der RAV in der Schweiz mit Beratern, die Kandidaten bei ihrer Jobsuche helfen",
        summary: "Wenn du deinen Job in der Schweiz verlierst, kann die RAV (und die Arbeitslosenkasse) einen Teil deines Gehalts decken, erfordert aber Fristen und eine nachweisbare Jobsuche.",
        content: `
            <div class="article-content">
                <h2>Einfuehrung</h2>
                <p>In der Schweiz ist die "Arbeitslosigkeit" (Arbeitslosenversicherung ALV/AC) ein sehr nuetzliches System, aber <strong>anspruchsvoll</strong>. Es ist nicht nur "sich anmelden": Es basiert auf Dokumentation, Fristen und nachweisbarer Jobsuche. Darueber hinaus gibt es zwei verschiedene Akteure und es ist wichtig, sie vom ersten Tag an zu verstehen:</p>
                <ul>
                    <li><strong>RAV / ORP:</strong> Das regionale Arbeitsamt (Verfolgung, Strategie, Terminabsprache und Kontrolle).</li>
                    <li><strong>Arbeitslosenkasse (Kasse / caisse):</strong> Bewertet dein Recht und <strong>zahlt</strong> die Leistung.</li>
                </ul>
                <p>Die Details (z.B. wie man einen Termin vereinbart, spezifische Formulare oder Verfolgungsfrequenz) koennen je nach <strong>Kanton</strong> und Buero variieren. Die allgemeine Logik ist in der ganzen Schweiz gleich.</p>

                <div class="callout warning">
                    <strong>Klare Botschaft:</strong> Wenn dein Arbeitsvertrag in 2-4 Wochen endet, beginne heute damit, Nachweise ueber Jobsuche zu sammeln. Viele Faelle werden durch mangelnde Dokumentation kompliziert.
                </div>

                <h2>Wie das System funktioniert</h2>
                <h3>1) Was wird bezahlt (praktische Erklaerung)</h3>
                <p>Die Leistung wird basierend auf deinem versicherten Gehalt berechnet und normalerweise in Form von <strong>taeglichen Entschaedigungen</strong> gezahlt. Als Orientierungspunkt wird normalerweise eine Rate von <strong>70%</strong> des versicherten Gehalts oder <strong>80%</strong> in bestimmten Faellen erwaehnt.</p>

                <h3>2) Versicherungspflicht und Beitraege</h3>
                <p>Fast alle Arbeitnehmer in der Schweiz sind versichert (Beitraege automatisch in der Lohnabrechnung). Freiberufler und Unternehmer muessen sich freiwillig versichern (oder nicht). Die Beitraege sind in der Regel niedrig (etwa 1% des Gehalts zusammen Arbeitgeber und Arbeitnehmer).</p>

                <h3>3) Anspruchsdauer</h3>
                <p>Die Dauer, fuer die du Leistungen erhalten kannst, haengt ab von:</p>
                <ul>
                    <li><strong>Versichertenalter:</strong> Juengere erhalten weniger Tage, aeltere mehr (Beispiel: Mit 40 Jahren und 12 Monaten Versicherung: bis 250 Tage oder ca. 8 Monate).</li>
                    <li><strong>Versicherungsdauer:</strong> Je laenger du versichert bist, desto laenger die Leistung.</li>
                    <li><strong>Grund fuer Arbeitslosigkeit:</strong> Wenn du gekuendigt wurdest oder selbst kuendigst, gibt es Unterschiede.</li>
                </ul>

                <h2>Verfahren: Schritt fuer Schritt</h2>

                <h3>Schritt 1: Sofortmassnahmen (vor dem letzten Arbeitstag)</h3>
                <p><strong>Anmeldung in der RAV / ORP:</strong> Du musst dich moeglichst schnell bei der Arbeitsagentur anmelden, und das sollte <strong>vor oder am Tag der Kuendigung</strong> geschehen. Manche Kantone erlauben die Anmeldung erst nach dem Gespraech mit dem Arbeitgeber; andere akzeptieren sie frueher. Das Wichtigste ist, <strong>nicht zu warten</strong>.</p>

                <div class="callout info">
                    <strong>Tipp:</strong> Kontaktiere die RAV / ORP deines Kantons mehrere Tage vor Kuendigung und frage nach dem Anmeldeverfahren. Du bekommst eine Bestiaetigung (Dokument oder E-Mail), die dein Anmeldedatum dokumentiert.
                </div>

                <h3>Schritt 2: Anmeldung in der Arbeitslosenkasse</h3>
                <p>Gleichzeitig mit der Anmeldung in der RAV musst du dich auch bei deiner Arbeitslosenkasse anmelden. Dies ist eine separate Entitaet (oft ein Versicherer oder eine kooperative Kasse).</p>
                <p><strong>Wichtig:</strong> Arbeitgeber und Arbeitnehmer zahlen Beitraege in eine gemeinsame Kasse ein. Du brauchst normalerweise nicht zu zaehlen, welche "deine" Kasse ist; die Arbeitgeber verwalten das ueberwiegend.</p>

                <h3>Schritt 3: Kuendigung und Arbeitzeugnis</h3>
                <p>Dein Arbeitgeber muss dir bei Kündigung ein <strong>Zeugnis</strong> ausstellen (normalerweise kurz vor dem letzten Tag). Dieses Zeugnis wird von der Arbeitslosenkasse verlangt, um deinen Anspruch zu pruefen.</p>
                <p><strong>Wichtig:</strong> Das Zeugnis muss angeben:</p>
                <ul>
                    <li>Grund der Beendigung (Arbeitgeber gekuendigt, Arbeitnehmer gekuendigt, Laufzeit abgelaufen).</li>
                    <li>Loehne und Versicherungsbeitraege (fuer Berechnung).</li>
                    <li>Letzteres Arbeitsdatum.</li>
                </ul>

                <h3>Schritt 4: Jobsuche dokumentieren</h3>
                <p>Die RAV erwartet von dir, dass du <strong>aktiv</strong> nach einem neuen Job suchst. Das bedeutet:</p>
                <ul>
                    <li>Bewerbungen schreiben und senden (normalerweise ca. 2-3 pro Woche oder je nach Anforderung).</li>
                    <li>Termine in den Job-Portalen einrichten (z.B. Indeed, Linkedin, SES, Jobagent).</li>
                    <li>Eine Liste deiner Bemuhungen fuehren (Firma, Datum, Status).</li>
                    <li>Quittungen oder Screenshots aufbewahren (Bewerbungen, Absagen).</li>
                </ul>

                <h3>Schritt 5: Verpflichtende Terminkontakte</h3>
                <p>Die RAV wird dich monatlich oder alle zwei Wochen zu einem Termin einladen (haeufig als "Kontakt" oder "Verfolgungs-Interview" bezeichnet).</p>
                <p><strong>Pflichten bei der Termin:</strong></p>
                <ul>
                    <li>Pluenktlich und mit allen geforderten Dokumenten erscheinen.</li>
                    <li>Ueber deine Jobsuche berichten (mit Nachweisen).</li>
                    <li>Sich an Schulungs- oder Umschulungsprogramme anmelden, falls empfohlen.</li>
                    <li>Ablehnung von vertraeglich vergueneten Stellen erklaeren (wenn du eine Stelle anboten bekommen hast und abgelehnt hast, musst du dies rechtfertigen).</li>
                </ul>

                <h2>Sanktionen und Konsequenzen</h2>
                <p>Die RAV nimmt ihre Aufgaben ernst. Wenn du nicht mitarbeitest, kann die Leistung gekuerzt oder gestoppt werden.</p>

                <h3>Sanktionsgrunde</h3>
                <ul>
                    <li><strong>Nichterscheinen zu Terminen:</strong> 10-20% Kuerze fuer jede Verpaessung.</li>
                    <li><strong>Mangelnde Jobsuche dokumentiert:</strong> 10-20% Kuerze.</li>
                    <li><strong>Vertrauensbasis verletzt:</strong> Falsche Angaben ueber Jobsuche oder Einkommen koennen zu vollstaendiger Stundung fuehren.</li>
                    <li><strong>Weigerung, Arbeit anzunehmen:</strong> Wenn die RAV eine "vergoens Stelle" anbietet und du sie ablehns und keine guten Gruende hast, kann die Leistung stop.</li>
                </ul>

                <div class="callout warning">
                    <strong>Wichtig:</strong> Die Kommunikation muss schriftlich erfolgen. Wenn die RAV dir etwas mitteilt, bewaehre die Benachrichtigung auf. Wenn du dich nicht einig bist, kannst du eine schrittliche Begruendung anfordern (ueblich mit dem Begriff "Rekurs" / "Beschwerde").
                </div>

                <h2>Berechnung der Leistung: Praktische Beispiele</h2>

                <h3>Beispiel 1: 45 Jahre, 15 Jahre versichert, 5.500 CHF Monatsgehalt</h3>
                <ul>
                    <li><strong>Versicherter Betrag:</strong> ca. 5.000 CHF (normalerweise ist die Obergrenze etwa 148.000 CHF pro Jahr, aber individuelle Grenzen existieren).</li>
                    <li><strong>Taegliche Rate:</strong> 70% × 5.000 / 30 = ca. 116 CHF pro Tag.</li>
                    <li><strong>Anspruchstage:</strong> 200-250 Tage (etwa 7-8 Monate), je nach Alter und Versicherungsdauer.</li>
                    <li><strong>Gesamtbetrag:</strong> ca. 23.000 - 29.000 CHF.</li>
                </ul>

                <h3>Beispiel 2: 28 Jahre, 3 Jahre versichert, 4.000 CHF Monatsgehalt</h3>
                <ul>
                    <li><strong>Versicherter Betrag:</strong> ca. 4.000 CHF.</li>
                    <li><strong>Taegliche Rate:</strong> 70% × 4.000 / 30 = ca. 93 CHF pro Tag.</li>
                    <li><strong>Anspruchstage:</strong> 140 Tage (ca. 4,5 Monate).</li>
                    <li><strong>Gesamtbetrag:</strong> ca. 13.000 CHF.</li>
                </ul>

                <h2>Zusammenfassung der wichtigsten Punkte</h2>
                <ol>
                    <li><strong>Schnelle Anmeldung:</strong> Melde dich in der RAV an, bevor dein Arbeitsvertrag endet.</li>
                    <li><strong>Dokumente sammeln:</strong> Arbeitszeugnis, Versicherungsbescheinigung, Bewerbungsbestaetigungen.</li>
                    <li><strong>Jobsuche dokumentieren:</strong> Bewerbungen, Termine, Absagen aufbewahren.</li>
                    <li><strong>Termine einhalten:</strong> Verspaete dich nicht zu Kontrollterminen.</li>
                    <li><strong>Kommunikation:</strong> Alles schriftlich. Bewaehre Benachrichtigungen auf.</li>
                    <li><strong>Rekurs:** Falls du nicht einverstanden bist, kannst du schriftlich Einspruch erheben.</li>
                </ol>

                <div class="callout tip">
                    <strong>Tipp:</strong> Kontaktiere eine Arbeitsrechtsanwaeltin oder eine Fachstelle, wenn du Fragen hast oder die RAV dir ein Dokument nicht verstehen kannst. Manche Kantone bieten kostenlose Beratung an.
                </div>
            </div>
        `
    },

    // 8. Salarios por sector y región
    "articulo-salarios": {
        title: "Gehälter in der Schweiz nach Branche und Region",
        description: "Entdecken Sie Durchschnittsgehälter in der Schweiz nach Branche und Region und nutzen Sie den offiziellen Salarium-Rechner.",
        keywords: "gehälter schweiz, durchschnittslohn schweiz, salarium, mindestlohn genf",
        category: 'Arbeitsmarkt',
        hub: 'trabajo',
        slug: "gehaelter-schweiz-nach-branche",
        readingTime: 5,
        featuredImage: "media/guides/salarios-sueldo-suiza.jpg",
        imageAlt: "Ein Finanzdiagramm, das das Schweizer Lohnwachstum im Vergleich zu anderen europäischen Ländern zeigt",
        summary: "Die Schweiz hat hohe Gehälter, aber auch entsprechende Lebenshaltungskosten. Es ist entscheidend zu verstehen, dass Ihre reale Kaufkraft davon abhängt, was Sie verdienen im Verhältnis zu den Fixkosten Ihres Kantons.",
        content: `
            <div class="article-content">
                <p>Die Gehälter in der Schweiz gehören zu den höchsten der Welt, aber auch die Lebenshaltungskosten sind hoch. Es ist entscheidend zu verstehen, dass Ihre reale Kaufkraft davon abhängt, was Sie verdienen im Verhältnis zu den Fixkosten Ihres Kantons.</p>

                <h2>Gibt es in der Schweiz einen gesetzlichen Mindestlohn?</h2>
                <p>Auf Bundesebene <strong>gibt es keinen</strong> interprofessionellen Mindestlohn. Einige Kantone haben jedoch eigene Mindeststundenlöhne eingeführt. Zum Beispiel haben Genf oder Neuenburg gesetzliche Mindestlöhne von circa 23-24 CHF pro Stunde (ungefähr 4'100 CHF brutto pro Monat bei Vollzeit).</p>

                <h2>Der Salarium-Rechner</h2>
                <p>Wenn Sie wissen möchten, ob ein Stellenangebot für Ihre Branche, Ihre Erfahrung, Ihr Alter und Ihren Kanton fair ist, ist das zuverlässigste Tool das <strong>Salarium</strong>, ein offizieller statistischer Rechner des Bundesamtes für Statistik (BFS).</p>

                <div class="callout info">
                    <strong>Nützlicher Link:</strong> <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten/lohnniveau-schweiz/salarium.html" target="_blank">Salarium - Lohnrechner</a>
                </div>

                <h2>Gesamtarbeitsverträge (GAV)</h2>
                <p>Viele Branchen (Gastgewerbe, Baugewebe, Friseurhandwerk) unterliegen Gesamtarbeitsverträgen (GAV / CCT). Diese Verträge legen verbindliche Mindestlöhne, die Anzahl der Urlaubstage und die Bezahlung von Überstunden fest und bieten dem Arbeitnehmer einen soliden Schutz.</p>
            </div>
        `
    },

    // 9. Contratos de trabajo
    "articulo-contratos": {
        title: "Arbeitsverträge in der Schweiz: Rechte und Pflichten",
        description: "Alles, was Sie über Schweizer Arbeitsverträge, Rechte und gesetzliche Urlaubstage wissen müssen.",
        keywords: "arbeitsvertrag schweiz, arbeitnehmerrechte schweiz, ferienanspruch schweiz, obligationenrecht",
        category: 'Verträge',
        hub: 'trabajo',
        slug: "arbeitsvertraege-schweiz-rechte",
        readingTime: 4,
        featuredImage: "media/guides/contratos-de-trabajo-suiza.jpg",
        imageAlt: "Ein formeller Schweizer Arbeitsvertrag auf einem Holztisch mit einem Füllfederhalter",
        summary: "Der Schweizer Arbeitsmarkt ist sehr flexibel und die Bedingungen werden grundlegend durch das Obligationenrecht (OR) und Gesamtarbeitsverträge (GAV) geregelt.",
        content: `
            <div class="article-content">
                <p>Der Schweizer Arbeitsmarkt ist sehr flexibel und die Bedingungen werden grundlegend durch das Obligationenrecht (OR) und Gesamtarbeitsverträge (GAV) geregelt.</p>

                <h2>Art des Vertrags</h2>
                <ul>
                    <li><strong>Unbefristeter Vertrag (CDI):</strong> Am häufigsten. Er hat kein Enddatum und erlaubt es Arbeitgeber oder Arbeitnehmer, ihn unter Einhaltung der vereinbarten oder gesetzlichen Kündigungsfrist zu kündigen.</li>
                    <li><strong>Befristeter Vertrag (CDD):</strong> Er wird für eine bestimmte Dauer unterzeichnet (z. B. Wintersaison, Mutterschaftsvertretung).</li>
                    <li><strong>Temporärarbeit:</strong> Über Agenturen (Adecco, Manpower...), unterliegt spezifischen Beitragsregeln und sehr flexibler Kündigung.</li>
                </ul>

                <h2>Arbeitszeit und Urlaub</h2>
                <p>Gesetzlich hat jeder Arbeitnehmer in der Schweiz Anspruch auf <strong>mindestens 4 Wochen</strong> bezahlten Urlaub pro Jahr (5 Wochen bei Personen unter 20 Jahren). Der „Vollzeit«-Arbeitstag liegt in der Regel zwischen 40 und 45 Stunden pro Woche.</p>

                <h2>Krankheit und Unfälle</h2>
                <p>Fast alle großen Arbeitgeber verfügen über eine Erwerbsausfallversicherung im Krankheitsfall, die sicherstellt, dass Sie Ihren Lohn erhalten, während Sie genesen. Zudem zahlt der Arbeitgeber obligatorisch die <strong>Berufsunfallversicherung</strong>.</p>
            </div>
        `
    },

    // 10. Periodo de prueba
    "articulo-periodo-prueba": {
        title: "Probezeit und Kündigungsfristen in der Schweiz",
        description: "Verstehen Sie Ihre Rechte während der Probezeit und der Standard-Kündigungsfristen in der Schweiz.",
        keywords: "probezeit schweiz, kündigungsfrist schweiz, kündigung, arbeitsrecht",
        category: 'Arbeit',
        hub: 'trabajo',
        slug: "probezeit-kuendigungsfristen-schweiz",
        readingTime: 3,
        featuredImage: "media/guides/periodo-prueba-preaviso-suiza.jpg",
        imageAlt: "Eine Uhr und ein Kalender neben einem Arbeitsvertrag, als Symbol für den Ablauf der Kündigungsfrist in der Schweiz",
        summary: "Die reguläre Probezeit beträgt zwischen 1 und 3 Monaten. Während dieser Zeit können beide Parteien den Vertrag mit einer Frist von 7 Tagen kündigen.",
        content: `
            <div class="article-content">
                <h2>Die Probezeit (Probezeit / Temps d'essai)</h2>
                <p>Der erste Monat eines unbefristeten Vertrags gilt gesetzlich immer als Probezeit, sofern nicht anders vereinbart. Diese Frist kann schriftlich auf <strong>maximal drei Monate</strong> verlängert werden.</p>
                <p>Während dieser Zeit können beide Parteien den Vertrag mit einer <strong>Frist von sieben Tagen</strong> (Kalendertage) kündigen, ohne dass eine weitere Begründung erforderlich ist.</p>

                <h2>Kündigungsfristen (Kündigungsfrist / Délai de congé)</h2>
                <p>Nach Ablauf der Probezeit gelten die gesetzlichen Fristen oder die im schriftlichen Vertrag (oder GAV) vereinbarten Fristen. Gemäß Obligationenrecht ist der allgemeine Rahmen:</p>
                <ul>
                    <li><strong>1. Dienstjahr:</strong> 1 Monat (Kündigung auf das Monatsende).</li>
                    <li><strong>2. bis 9. Dienstjahr:</strong> 2 Monate (Kündigung auf das Monatsende).</li>
                    <li><strong>Ab dem 10. Dienstjahr:</strong> 3 Monate (Kündigung auf das Monatsende).</li>
                </ul>

                <div class="callout info">
                    <strong>Wichtig:</strong> Die Kündigung muss immer VOR dem letzten Arbeitstag des Monats bei Ihrem Chef eingegangen sein, damit der folgende Monat zu zählen beginnt.
                </div>
            </div>
        `
    },

    // 11. Búsqueda de empleo
    "articulo-buscar-empleo": {
        title: "Jobsuche in der Schweiz: Plattformen und Strategien",
        description: "Wo Sie Jobs in der Schweiz finden, wie man einen Schweizer Lebenslauf erstellt und die effektivsten Rekrutierungsplattformen.",
        keywords: "jobsuche schweiz, schweizer cv, jobup, jobs.ch, beschäftigungsplattformen",
        category: 'Bewerbungen',
        hub: 'trabajo',
        slug: "jobsuche-schweiz-plattformen",
        readingTime: 4,
        featuredImage: "media/guides/buscar-empleo-heramientas.jpg",
        imageAlt: "Eine person sucht auf einem Laptop in einem Café mit Blick auf Zürich nach Jobs in der Schweiz und prüft ihren Lebenslauf",
        summary: "In der Schweiz wird ein großer Teil der Angebote auf lokalen Portalen und in der Sprache des Kantons veröffentlicht. Eine klare Liste von Webseiten und die Anpassung von Stichworten machen oft den Unterschied.",
        content: `
            <div class="article-content">
                <p>In der Schweiz wird ein großer Teil der Angebote auf lokalen Portalen und in der Sprache des Kantons veröffentlicht. Eine klare Liste von Webseiten und die Anpassung von Stichworten machen oft den Unterschied.</p>
                <p>Wenn Sie einen Umzug planen, siehe auch <a href="#/mudarse-a-suiza-desde-espana">Aus Spanien in die Schweiz ziehen: Schritt-für-Schritt-Leitfaden</a>.</p>

                <h2>Wichtigste Jobportale in der Schweiz</h2>
                <ul>
                    <li><a href="https://www.jobs.ch/" target="_blank" rel="noopener noreferrer">jobs.ch</a></li>
                    <li><a href="https://www.jobup.ch/" target="_blank" rel="noopener noreferrer">jobup.ch</a></li>
                    <li><a href="https://ch.indeed.com/" target="_blank" rel="noopener noreferrer">indeed.ch</a></li>
                    <li><a href="https://www.job-room.ch/" target="_blank" rel="noopener noreferrer">job-room.ch</a> (Portal des RAV)</li>
                </ul>

                <div class="callout info">
                    <strong>Praxistipp</strong>
                    <p>In der Schweiz ist es oft effektiver, in der Landessprache zu suchen. Statt auf Spanisch zu suchen, versuchen Sie es direkt auf Deutsch, Französisch oder Italienisch.</p>
                    <p><strong>Google-Beispiel:</strong> <code>Glaser Arbeit Zürich</code></p>
                </div>

                <h3>Nützliche Links</h3>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch</a></li>
                    <li><a href="https://www.arbeit.swiss/" target="_blank" rel="noopener noreferrer">arbeit.swiss</a> (RAV / SECO)</li>
                </ul>
            </div>
        `
    },

    // 12. Alquiler de vivienda
    "articulo-alquiler": {
        title: "Wohnung mieten in der Schweiz: der Ablauf Schritt für Schritt",
        description: "Welche Unterlagen Sie für eine Schweizer Mietbewerbung brauchen und wie Sie Ihr Dossier in einem umkämpften Markt vorbereiten.",
        keywords: "wohnung mieten schweiz, immobilien schweiz, mietdossier, verwaltung, homegate, immoscout24",
        audience: 'resident',
        featuredImage: "media/guides/alquilar-vivienda-suiza.jpg",
        imageAlt: "Ein Schlüsselbund für eine Schweizer Wohnung auf einem Mietvertrag",
        category: "Mietvertrag",
        hub: "vivienda",
        slug: "wohnung-mieten-schweiz-prozess",
        readingTime: 5,
        summary: "Der Mietmarkt ist sehr kompetitiv. Sie brauchen ein sauberes Dossier mit Betreibungsauszug, Arbeitsvertrag und Einkommensnachweisen, um realistische Chancen zu haben.",
        content: `
            <div class="article-content">
                <h2>Einführung</h2>
                <p>Eine Wohnung in der Schweiz zu mieten überrascht viele Neuankömmlinge aus zwei Gründen: wegen des starken <strong>Wettbewerbs</strong> in vielen Regionen und wegen der zentralen Bedeutung des <strong>Mietdossiers</strong>. Es reicht nicht, sich die Wohnung leisten zu können. Verwaltungen suchen stabile Profile mit vollständigen Unterlagen und ohne Zahlungsausfälle. Wer den Prozess versteht und sich gut vorbereitet, verbessert seine Chancen deutlich.</p>

                <div class="callout info">
                    <strong>Wichtige Punkte:</strong>
                    <ul>
                        <li>Bereiten Sie Ihr Dossier <strong>vor</strong>, bevor Sie mit Besichtigungen beginnen.</li>
                        <li>Das zentrale Dokument ist der <strong>Betreibungsauszug</strong> bzw. in der Westschweiz der <strong>extrait des poursuites</strong>.</li>
                        <li>Planen Sie die Einstiegskosten ein: Kaution, erste Miete, Umzug und Versicherungen.</li>
                    </ul>
                </div>

                <h2>Wie das System funktioniert</h2>
                <h3>1) Wo Wohnungen inseriert werden</h3>
                <p>Der Großteil der Angebote erscheint auf Portalen wie <a href="https://www.homegate.ch/" target="_blank" rel="noopener noreferrer">Homegate</a> oder <a href="https://www.immoscout24.ch/" target="_blank" rel="noopener noreferrer">ImmoScout24</a>. Daneben gibt es Websites von Verwaltungen und in manchen Regionen lokale Gruppen. Ein praktischer Schritt ist das Einrichten von Suchalarmen nach Gebiet, Preis und Zimmerzahl, damit Sie schnell reagieren können.</p>

                <h3>2) Besichtigung und Bewerbung</h3>
                <p>Eine Wohnungsbesichtigung bedeutet in der Schweiz nicht, dass die Wohnung reserviert ist. Normalerweise besichtigen Sie zuerst und reichen danach eine <strong>formelle Bewerbung</strong> mit Dossier ein. Bei Sammelbesichtigungen gibt es oft Dutzende Bewerber. Wer vollständig und schnell einreicht, hat einen echten Vorteil.</p>

                <h3>3) Auswahl und Vertrag</h3>
                <p>Die Verwaltung prüft Bonität, Einkommen und die Stabilität des Haushalts. Wenn Sie ausgewählt werden, erhalten Sie den Vertrag oder eine Zusage. Im Ablehnungsfall ist es üblich, keine ausführliche Begründung zu bekommen.</p>

                <h3>4) Einzug: Kaution, Übergabeprotokoll und Versicherungen</h3>
                <p>Vor der Schlüsselübergabe werden meist folgende Punkte geregelt:</p>
                <ul>
                    <li><strong>Kaution:</strong> Bei Wohnungen ist sie gesetzlich auf maximal drei Monatsmieten begrenzt und wird meist auf ein Sperrkonto auf Ihren Namen einbezahlt oder über eine Mietkautionsversicherung abgedeckt.</li>
                    <li><strong>Übergabeprotokoll:</strong> Das Protokoll beim Einzug ist entscheidend. Alle Mängel müssen dokumentiert werden, sonst können sie Ihnen beim Auszug angerechnet werden.</li>
                    <li><strong>Privathaftpflicht:</strong> In der Praxis wird sie sehr häufig verlangt oder zumindest erwartet, weil sie Schäden an Dritten oder an der Mietsache mitabdeckt.</li>
                </ul>

                <h2>Voraussetzungen und Regeln</h2>
                <h3>Das Mietdossier: was typischerweise verlangt wird</h3>
                <p>Immobilienverwaltungen prüfen mit dem Dossier Ihre Identität, Ihr Einkommen und Ihre Zahlungshistorie. Typisch sind:</p>
                <ul>
                    <li>Kopie von Ausweis oder Reisepass und, falls vorhanden, Aufenthaltsbewilligung. Wenn Sie neu ankommen, helfen Arbeitsvertrag und Anmeldebestätigung.</li>
                    <li>Die <strong>letzten drei Lohnabrechnungen</strong> oder, bei Neueinreise, Arbeitsvertrag plus Bestätigung des Arbeitgebers mit Lohn und Startdatum.</li>
                    <li><strong>Betreibungsauszug / extrait des poursuites</strong>, meist nur wenige Monate alt und gegen eine kleine Gebühr erhältlich.</li>
                    <li>Das Formular der Verwaltung mit Angaben zu Haushaltsgröße, Einkommen und Kontaktinformationen.</li>
                    <li>Manchmal zusätzlich Haftpflichtnachweis, Referenzen oder ein kurzes Vorstellungsschreiben.</li>
                </ul>

                <h3>Die goldene Regel: ein Drittel des Einkommens</h3>
                <p>Viele Verwaltungen wenden eine Vorsichtsregel an: Die Monatsmiete sollte ungefähr <strong>ein Drittel</strong> des Bruttoeinkommens des Haushalts nicht überschreiten. Liegt die Wohnung darüber, ist eine Ablehnung häufig, selbst wenn Sie aus Ihrer Sicht genügend Budget hätten.</p>

                <h3>Zimmer und Nebenkosten</h3>
                <p>Zwei Punkte führen oft zu Missverständnissen:</p>
                <ul>
                    <li><strong>Zimmer:</strong> Das Wohnzimmer zählt mit. Eine Wohnung mit „3.5 Zimmern“ ist meist Wohnzimmer + zwei Schlafzimmer + ein kleiner zusätzlicher Raumanteil.</li>
                    <li><strong>Nebenkosten:</strong> Heizung, Warmwasser und allgemeine Kosten können enthalten sein, müssen es aber nicht. Fragen Sie immer genau nach, was eingeschlossen ist.</li>
                </ul>

                <h3>Der Vertrag: Kündigungsfristen und Termine</h3>
                <p>Die rechtlichen Details unterscheiden sich nach Vertrag und Kanton, aber es gibt typische Muster: Verträge haben oft <strong>bestimmte Kündigungstermine</strong> und eine <strong>Kündigungsfrist</strong> von mehreren Monaten. Man kann also nicht einfach mit 30 Tagen Frist „jederzeit“ ausziehen.</p>

                <h3>Einzug und Auszug: Das Protokoll ist Ihre Absicherung</h3>
                <p>Beim Einzug wird der Zustand der Wohnung dokumentiert. Machen Sie zusätzlich Fotos und notieren Sie Kratzer, Flecken, Schäden an Geräten oder Feuchtigkeitsprobleme. Sehr viele Streitfälle entstehen, weil der Zustand beim Einzug nicht sauber festgehalten wurde.</p>

                <h2>Konkrete Beispiele</h2>
                <h3>Beispiel 1: Sie haben noch keine Schweizer Lohnabrechnungen</h3>
                <p>Wenn die ersten drei Lohnabrechnungen fehlen, stärken Sie das Dossier mit einem unbefristeten Vertrag, einer Arbeitgeberbestätigung über Lohn und Startdatum sowie einem kurzen Begleittext. Das garantiert nichts, verbessert aber die Ausgangslage.</p>

                <h3>Beispiel 2: Paar, bei dem erst eine Person arbeitet</h3>
                <p>Oft zählt das Gesamteinkommen, aber Verwaltungen beurteilen auch die Stabilität. Legen Sie den Vertrag der arbeitenden Person bei und erklären Sie kurz den Plan der zweiten Person, etwa Sprachkurs oder laufende Stellensuche.</p>

                <h3>Beispiel 3: Angebot einer Mietkautionsversicherung statt Sperrkonto</h3>
                <p>Statt mehrere tausend Franken zu blockieren, können Sie eine Jahresprämie an eine Gesellschaft zahlen, die als Garant auftritt. Das ist hilfreich bei knapper Liquidität, aber kein rückzahlbares Depot. Vergleichen Sie die Vor- und Nachteile mit dem Leitfaden zu <a href="#/mietkaution-und-mieterrechte">Mietkaution und Mieterrechten</a>.</p>

                <h3>Beispiel 4: Start mit Untermiete</h3>
                <p>Viele Neuankömmlinge beginnen mit einem Zimmer oder einer Untermiete, um sich anmelden zu können und das erste Gehalt zu erhalten. Das ist oft realistischer als sofort eine eigene Wohnung zu bekommen. Trotzdem sollten Sie auf einen schriftlichen Vertrag und klare Regeln bestehen.</p>

                <h2>Häufige Fehler</h2>
                <ul>
                    <li><strong>Unvollständiges Dossier:</strong> In einem harten Markt ist das fast immer ein sofortiges Nein.</li>
                    <li><strong>Den Betreibungsauszug zu spät besorgen:</strong> Beantragen Sie ihn, sobald Sie eine Adresse haben.</li>
                    <li><strong>Den Zustand der Wohnung nicht zu dokumentieren:</strong> Das wird beim Auszug oft teuer.</li>
                    <li><strong>Auf Betrug hereinzufallen:</strong> Überweisen Sie kein Geld ohne echten Vertrag und überprüfbare Gegenpartei.</li>
                    <li><strong>Den Anbieter nicht zu prüfen:</strong> Wenn der Preis unrealistisch ist oder man Sie drängt, ist Vorsicht angebracht.</li>
                    <li><strong>Die Einstiegskosten zu unterschätzen:</strong> Kaution, erste Miete, Umzug und Versicherungen summieren sich schnell.</li>
                </ul>

                <h2>Praktische Tipps</h2>
                <ul>
                    <li>Halten Sie Ihr Dossier als sauberes PDF bereit, damit Sie noch am selben Tag einreichen können.</li>
                    <li>Fügen Sie eine kurze professionelle Vorstellung mit drei bis vier Zeilen hinzu.</li>
                    <li>Seien Sie bei Sammelbesichtigungen pünktlich, knapp und verbindlich.</li>
                    <li>Bei Fragen zu Vertragsklauseln oder zur Kautionsrückgabe helfen Mieterverbände und der Leitfaden zu <a href="#/mietkaution-und-mieterrechte">Kaution und Rechten</a>.</li>
                    <li>Verbinden Sie die Wohnungssuche mit Ihrem <a href="#/lebenshaltungskosten-in-der-schweiz">Budget</a> und den ersten <a href="#/tramites-llegada-suiza">Ankunftsformalitäten</a>.</li>
                </ul>

                <h2>Offizielle Quellen</h2>
                <ul>
                    <li><a href="https://www.ch.ch/" target="_blank" rel="noopener noreferrer">ch.ch — Offizielles Schweizer Portal</a></li>
                </ul>
            </div>
        `
    },

    "articulo-fianzas": {
        title: "Mietkaution und Mieterrechte in der Schweiz",
        description: "Wie Mietgarantien (Mietkaution) in der Schweiz funktionieren, Sicherheitsleistungen und wie Sie Ihre Rechte als Mieter beim Mieterverband schützen.",
        keywords: "mietkaution schweiz, swisscaution, mieterverband, mietgarantie, mieterrechte schweiz",
        audience: 'resident',
        featuredImage: "media/guides/fianzas-alquiler-suiza.jpg",
        imageAlt: "Ein Sparschwein und ein Hausschlüssel, die eine Mietkaution repräsentieren",
        category: "Wohnen",
        hub: "vivienda",
        slug: "mietkaution-mieterrechte",
        readingTime: 4,
        summary: "Die gesetzliche Maximalkaution für Wohnungsmieten beträgt 3 Monatsmieten. Sie können diese bar auf ein Sperrkonto einzahlen oder einen Mietkautionsdienst nutzen.",
        content: `
            <div class="article-content">
                <h2>Die Mietkaution (<i>Mietkaution / Garantie de Loyer</i>)</h2>
                <p>Nach Schweizer Recht kann ein Vermieter eine Kaution (Sicherheitsleistung) verlangen, um potenzielle Schäden oder unbezahlte Mieten abzudecken. Für Wohnimmobilien ist diese Kaution auf maximal <strong>3 Monatsmieten</strong> begrenzt.</p>
                <div class="callout info">
                    <strong>Wichtig:</strong> Dieses Geld wird niemals direkt an den Vermieter ausgehändigt. Es wird auf einem speziellen „Mietkautionssparkonto« hinterlegt, das auf Ihren Namen lautet, aber gesperrt ist. Es kann nur am Ende des Mietverhältnisses mit der gemeinsamen Unterschrift von Mieter und Vermieter freigegeben werden.
                </div>

                <h2>Mietkautionsversicherung: Eine Alternative zum Bargeld</h2>
                <p>Wenn Sie nicht mehrere tausend Franken auf einem Sperrkonto binden möchten, können Sie spezialisierte Versicherungsgesellschaften wie <strong>SwissCaution</strong>, <strong>Firstcaution</strong> oder <strong>goffrance</strong> nutzen.</p>
                <ul>
                    <li><strong>Funktionsweise:</strong> Sie zahlen eine nicht erstattungsfähige Jahresprämie (meist ca. 5 % der gesamten Kautionssumme).</li>
                    <li><strong>Vorteil:</strong> Die Firma stellt der Verwaltung ein Zertifikat als Garantie aus, sodass Sie Ihre Ersparnisse für andere Umzugskosten behalten können.</li>
                </ul>

                <h2>Verteidigung Ihrer Rechte: Mieterverband und ASLOCA</h2>
                <p>Das Schweizer Mietsystem ist stark reguliert, kann aber für Neulinge komplex sein. Uneinigkeiten über Reparaturen oder die Rückgabe der Kaution am Ende eines Mietverhältnisses sind keine Seltenheit.</p>
                <p>Es wird dringend empfohlen, Ihrem lokalen Mieterverband beizutreten:</p>
                <ul>
                    <li><strong><a href="https://www.mieterverband.ch/" target="_blank" rel="noopener noreferrer">Mieterverband</a>:</strong> Zuständig für die deutschsprachige Schweiz.</li>
                    <li><strong><a href="https://www.asloca.ch/" target="_blank" rel="noopener noreferrer">ASLOCA</a>:</strong> Zuständig für die französisch- und italienischsprachigen Regionen.</li>
                </ul>
                <p>Gegen einen geringen Jahresbeitrag (ca. 80-100 CHF) bieten sie Rechtsberatung, Vertragsprüfungen und Unterstützung bei Schlichtungsverhandlungen an.</p>
            </div>
        `
    },

    // 14. Costo de vida
    "articulo-costo-vida": {
        title: "Lebenshaltungskosten in der Schweiz: Monatsbudget und Preise",
        description: "Eine detaillierte Aufschlüsselung der Lebenshaltungskosten in der Schweiz. Beispiele für Monatsbudgets für Singles und Familien, einschließlich Miete, Versicherung und Verpflegung.",
        keywords: "lebenshaltungskosten schweiz, preise schweiz, monatsbudget schweiz, wie teuer ist die schweiz",
        audience: 'resident',
        featuredImage: "media/guides/presupuesto-suiza.png",
        imageAlt: "Eine Auswahl an Schweizer Produkten und Rechnungen, die die Lebenshaltungskosten repräsentieren",
        category: "Lebenshaltungskosten",
        hub: "vivir-en-suiza",
        slug: "lebenshaltungskosten-schweiz-budget",
        readingTime: 6,
        summary: "Die Schweizer Löhne sind hoch, aber ebenso die Fixkosten. Ein realistisches Budget für Miete, Versicherung, Verpflegung und Familie ist entscheidend, um den Umzug gut zu planen.",
        content: `
            <div class="article-content">
                <h2>Einführung</h2>
                <p>Die Schweiz gehört zu den Ländern mit den höchsten Lebenshaltungskosten Europas. Gerade deshalb ist es wichtig, jeden Franken bewusst zu planen. Ein Budget hilft, Überraschungen zu vermeiden, Ausgaben zu kontrollieren und ruhiger über Wohnung, Verpflegung, Kinderbetreuung oder Steuern zu entscheiden. Schweizer Budgetberatungsstellen veröffentlichen regelmäßig reale Beispiele, die als Orientierung im Alltag dienen.</p>

                <h2>Budget für eine alleinstehende Person</h2>
                <p>Wer allein lebt, muss die Fixkosten mit dem monatlichen Nettoeinkommen sauber ins Gleichgewicht bringen.</p>
                <ul>
                    <li><strong>Miete:</strong> Ein Studio oder eine kleine Wohnung kostet oft zwischen 1'400 und 2'200 CHF inklusive Nebenkosten, je nach Region.</li>
                    <li><strong>Lebensmittel:</strong> Wer zu Hause kocht und überwiegend bei Migros, Coop, Lidl oder Aldi einkauft, liegt oft bei 400 bis 500 CHF; häufiges Auswärtsessen verdoppelt diesen Posten schnell.</li>
                    <li><strong>Transport:</strong> Ein städtisches Monatsabo liegt oft zwischen 80 und 140 CHF. Wer nahe an der Arbeit wohnt oder jung ist, findet manchmal günstigere Lösungen.</li>
                    <li><strong>Krankenversicherung:</strong> Die Grundprämie liegt je nach Kanton, Alter und Modell oft zwischen 300 und 450 CHF. Hinzu kommen Franchise und Selbstbehalt, weshalb ein Reserveposten sinnvoll ist.</li>
                </ul>

                <h2>Budget für Paare ohne Kinder</h2>
                <p>Zwei Erwachsene teilen viele Fixkosten, brauchen aber trotzdem Platz für Freizeit, Rücklagen und mittelfristige Ziele.</p>
                <ul>
                    <li><strong>Wohnen:</strong> Eine Wohnung mit 2 bis 3 Zimmern kostet oft zwischen 2'300 und 3'200 CHF, je nach Lage und Standard.</li>
                    <li><strong>Freizeit:</strong> Restaurants, Fitness, Kurzreisen und Ausgehen summieren sich schnell auf 200 bis 400 CHF oder mehr im Monat.</li>
                    <li><strong>Versicherungen:</strong> Neben dem KVG kommen oft Haftpflicht- und Hausratversicherung hinzu, besonders wenn ein Auto oder Haustiere im Spiel sind.</li>
                    <li><strong>Sparen:</strong> Schweizer Budgetberater empfehlen häufig, mindestens 10 bis 15 % des Einkommens für Notfälle oder größere Ziele zurückzulegen.</li>
                </ul>

                <h2>Budget für Familien mit Kindern</h2>
                <p>Mit jedem Kind vervielfachen sich bestimmte Ausgabenblöcke deutlich.</p>
                <ul>
                    <li><strong>Kita:</strong> Ein Platz kostet oft zwischen 1'200 und 2'000 CHF pro Kind, wobei kantonale oder kommunale Subventionen den Betrag senken können.</li>
                    <li><strong>Schule und Material:</strong> Ausflüge, Schulmaterial, Sprachkurse oder Lager schlagen schnell mit 100 bis 200 CHF pro Kind und Monat zu Buche.</li>
                    <li><strong>Lebensmittel:</strong> Familienbudgets liegen häufig zwischen 700 und 900 CHF pro Monat oder mehr.</li>
                    <li><strong>Kleidung:</strong> Ohne Planung kann dieser Posten schnell aus dem Ruder laufen. Saisonwechsel und Rabatte helfen.</li>
                    <li><strong>Transport:</strong> Familienabos, Schulwege oder zusätzliche Fahrten erhöhen das Budget oft um 150 bis 250 CHF.</li>
                    <li><strong>Freizeitaktivitäten:</strong> Musik, Sport oder Nachhilfe kosten häufig weitere 100 bis 250 CHF pro Kind und Monat.</li>
                </ul>

                <h3>Familie mit einem Kind</h3>
                <p>Ein typisches Beispiel ist eine Wohnung für 2'400 CHF, eine teilweise finanzierte Kita um 1'000 CHF und Verpflegung um 650 CHF. Wer Fahrten bündelt oder öffentliche Angebote nutzt, kann Transportkosten reduzieren.</p>

                <h3>Familie mit zwei Kindern</h3>
                <p>Kita und Freizeitaktivitäten verdoppeln sich fast. Öffentliche oder gestaffelt bepreiste Angebote für Geschwister gewinnen stark an Bedeutung.</p>

                <h3>Familie mit drei Kindern</h3>
                <p>Hier wird Effizienz entscheidend: günstigeres Wohnen, clevere Transportlösungen, ein Notfallfonds und die volle Nutzung der öffentlichen Schule machen einen großen Unterschied.</p>

                <h2>Warum ein Budget so wichtig ist</h2>
                <p>Ein gutes Budget verwandelt Unsicherheit in informierte Entscheidungen.</p>
                <ul>
                    <li><strong>Ausgaben kontrollieren:</strong> Erst die Übersicht zeigt, wo sich sparen lässt, etwa bei Abos, Impulskäufen oder Mobilität.</li>
                    <li><strong>Zukunft planen:</strong> Wer weiß, was übrig bleibt, kann gezielt für Wohnen, Auto, Weiterbildung oder Ferien sparen.</li>
                    <li><strong>Notfallfonds aufbauen:</strong> Viele Berater empfehlen mindestens drei Monate Fixkosten für unerwartete Ereignisse wie Jobverlust oder Reparaturen.</li>
                    <li><strong>Mehr finanzielle Ruhe:</strong> Weniger Überraschungen bedeuten mehr Sicherheit bei Familien- oder Kantonswechseln.</li>
                </ul>

                <h2>Offizielle Quellen</h2>
                <ul>
                    <li><a href="https://budgetberatung.ch/" target="_blank" rel="noopener noreferrer">Budgetberatung Schweiz</a> — Budgetbeispiele und Beratungsangebote.</li>
                    <li><a href="https://budgetberatung.ch/budgetbeispiele/" target="_blank" rel="noopener noreferrer">Budgetvorlagen und Beispiele</a> zum Anpassen an den eigenen Haushalt.</li>
                </ul>
            </div>
        `
    },

    // 15. Trabajadores fronterizos (frontaliers)
    "articulo-frontaliers": {
        title: "Grenzgänger: Regeln und Steuern",
        description: "Alles, was Sie wissen müssen, wenn Sie im Ausland leben und in der Schweiz arbeiten.",
        keywords: "grenzgänger schweiz, ausweis G, grenzgängersteuern schweiz, wohnen in deutschland arbeiten in der schweiz",
        featuredImage: "media/guides/trabajadores-fronterizos-suiza.jpg",
        category: `Grenzgänger`,
        hub: 'fronterizos',
        readingTime: 4,
        summary: `Die Ausweis G erlaubt es Ihnen in der Schweiz zu arbeiten.`,
        
        content: `<div class="article-content">
<p>Die <em>Grenzgänger</em> sind Personen, die ihren ständigen Wohnsitz in einem Nachbarland (hauptsächlich Frankreich, Deutschland und Italien) haben und die Grenze überqueren, um in der Schweiz zu arbeiten.</p>

<h2>The G Permit</h2>
<p>Um in dieser Modalität arbeiten zu können, benötigen Sie eine <strong>G-Genehmigung (Grenzarbeitserlaubnis)</strong>. Eine wesentliche Voraussetzung für die Aufrechterhaltung ist, dass Sie mindestens einmal pro Woche (meist täglich) zu Ihrem Hauptwohnsitz im Ausland zurückkehren müssen.</p>

<h2>Grenzbesteuerung</h2>
<p>Die Steuervorschriften variieren stark je nach Kanton, in dem Sie arbeiten, und Ihrem Wohnsitzland (aufgrund von Doppelbesteuerungsabkommen).</p>
<ul>
<li><strong>Genf:</strong> Wenn Sie in Frankreich leben und in Genf arbeiten, behält der Kanton Genf die Steuer direkt von Ihnen ein.</li>
<li><strong>Waadt, Neuenburg, Jura:</strong> In diesen Kantonen wird die Steuer in der Regel vollständig in Frankreich abgeführt und der Schweizer Arbeitgeber behält Ihnen die Steuer nicht an der Quelle ein (bei fristgerechter Vorlage der steuerlichen Ansässigkeitsbescheinigung).</li>
</ul>

<h2>Krankenversicherung (das Recht auf Option)</h2>
<p>Wenn Sie in der Schweiz arbeiten, haben Sie 3 Monate Zeit, Ihr „Optionsrecht« auszuüben. Sie können wählen, ob Sie sich im Schweizer System (LAMal frontalier) oder im System Ihres Wohnsitzlandes (z. B. französische CMU) versichern möchten. <strong>Achtung:</strong> Diese Entscheidung ist unwiderruflich. Wenn Sie sich nicht entscheiden, werden Sie automatisch dem Schweizerischen LAMal angeschlossen.</p>
</div>`
    },

    // 16. Reconocimiento de diplomas
    "articulo-diplomas": {
        title: "Anerkennung ausländischer Diplome",
        description: "So lassen Sie Ihren Universitäts- oder Berufsabschluss in der Schweiz anerkennen (SBFI).",
        keywords: "diplomanerkennung schweiz, titel anerkennen suiza, sbfi, berufsabschluss",
        audience: 'newcomer',
        featuredImage: "media/guides/homologar-titulos-suiza.jpg",
        category: `Verwaltungsverfahren`,
        hub: 'tramites',
        readingTime: 3,
        summary: `Nur für reglementierte Berufe ist eine offizielle Anerkennung Pflicht.`,
        content: `<div class="article-content">
<p>Wenn Sie über einen ausländischen Abschluss verfügen und in der Schweiz praktizieren möchten, müssen Sie zunächst prüfen, ob Ihr Beruf reglementiert ist (z. B. Medizin, Krankenpflege, Jura, Lehramt). Sofern dies nicht geregelt ist, ist die offizielle Anerkennung nicht verpflichtend und der Arbeitsmarkt entscheidet über den Wert Ihres Abschlusses.</p>

<h2>Reglementierte Berufe und zuständige Stellen</h2>
<p>Für reglementierte Berufe ist die Anerkennung zwingend erforderlich. Abhängig von Ihrer Branche wird die Anerkennung bei einer anderen Stelle beantragt:</p>
<ul>
<li><strong>SEFRI (Staatssekretär für Ausbildung, Forschung und Innovation):</strong> Für Berufsausbildung, Handel und pädagogische Bildungsberufe (viele Universitätsabschlüsse).</li>
<li><strong>MEBEKO (Medizinische Berufskommission):</strong> Für Ärzte, Zahnärzte, Tierärzte und Apotheker. Erfordert die Beherrschung einer Landessprache (B2/C1).</li>
<li><strong>Schweizerisches Rotes Kreuz (CRS):</strong> Für paramedizinische und ausseruniversitäre Gesundheitsberufe (Pflege, Physiotherapie).</li>
</ul>

<p>Die Verfahren verursachen Verwaltungskosten (Hunderte von Franken) und erfordern in der Regel beglaubigte Übersetzungen Ihrer Studienunterlagen.</p>

<div class="callout info">
<strong>Quelle:</strong> Welche Behörde Ihr Diplom bewertet, erfahren Sie auf dem <a href="https://www.sbfi.admin.ch/sbfi/en/home/education/recognition-of-foreign-qualifications.html" target="_blank">SEFRI-Portal</a>. 
</div>
</div>`
    },

    // 17. Sistema escolar suizo
    "articulo-sistema-escolar": {
        title: "Das Schweizer Schulsystem erklärt",
        description: "Leitfaden zum Schweizer Schulsystem und der dualen Berufsbildung.",
        keywords: "schule schweiz, bildung schweiz, schulsystem schweiz, kindergarten schweiz",
        audience: 'family',
        featuredImage: "media/guides/sistema-escolar-suiza.jpg",
        category: `Familie`,
        hub: 'tramites',
        readingTime: 5,
        summary: `Das Schulsystem leitet Schüler oft früh in die Berufsbildung.`,
        content: `<div class="article-content">
<p>Die öffentliche Bildung in der Schweiz ist kostenlos, für 11 Jahre vollständig obligatorisch und von ausgezeichneter Qualität. Allerdings ist die Struktur sehr kantonal (jeder Kanton legt seinen Studienplan fest) und weist eine Besonderheit auf: die frühe Berufsorientierung.</p>

<h2>Allgemeine Struktur (HarmoS-Modell)</h2>
<ul>
<li><strong>Vorschule (Ecole Enfantine / Kindergarten):</strong> Beginnt im Alter von 4 Jahren. Es gibt zwei obligatorische Vorbereitungsjahre.</li>
<li><strong>Grundschule (Ecole Primaire / Primarschule):</strong> Von 6 bis 12 Jahren (Klassen 3 bis 8). Eine zweite und dritte Sprache (eine weitere Landessprache und Englisch) ist schnell eingeführt.</li>
<li><strong>Sekundarstufe I (Cycle d'Orientation / Sekundarstufe I):</strong> Von 12 bis 15 Jahren (Klasse 9 bis 11).</li>
</ul>

<h2>Segregation oder „Filières«</h2>
<p>Anders als in Spanien werden in der Schweiz Schüler im Alter von etwa 12 oder 15 Jahren entsprechend ihren Noten und Fähigkeiten auf zwei sehr unterschiedliche Wege ausgerichtet („segregiert«):</p>
<ol>
<li><strong>Der berufliche Weg (Berufsbildung/Duales Lernen):</strong> Mehr als 60 % der jungen Schweizerinnen und Schweizer entscheiden sich für den Abschluss „CFC« (Eidgenössischer Fähigkeitsausweis). Sie arbeiten 3 oder 4 Tage in einem Unternehmen, lernen einen Beruf und besuchen 1 oder 2 Tage den Unterricht. Es ist von Anfang an ein sehr prestigeträchtiger und lohnender Weg.</li>
<li><strong>Der akademische Weg (Gymnasium / Collège / Maturité / Matura):</strong> Für diejenigen mit besseren akademischen Noten, die sie auf den direkten Eintritt in die Universität oder die Eidgenössischen Polytechnischen Schulen vorbereiten.</li>
</ol>
<p><em>Hinweis:</em> Das System ist durchlässig; Ein Berufsausbildungsstudent kann in Zukunft über „Gateways« Zugang zur Universität erhalten.</p>
</div>`
    },

    // 18. Sistema de salud (médicos y urgencias)
    "articulo-sistema-salud": {
        title: "Gesundheitssystem: Ärzte und Notfälle",
        description: "Wie Sie Gesundheitsleistungen in der Schweiz nutzen und Arztrechnungen bezahlen.",
        keywords: "hausarzt schweiz, notfall schweiz, kinderarzt schweiz, gesundheitssystem schweiz",
        audience: 'resident',
        featuredImage: "media/guides/medicos-urgencias-suiza.jpg",
        category: `Medizinisches Netzwerk`,
        hub: 'salud',
        readingTime: 4,
        summary: `Vermeiden Sie Notaufnahmen für leichte Beschwerden.`,
        content: `<div class="article-content">
<p>Wenn Sie verstehen, wie Sie sich in der täglichen Praxis des Schweizer Gesundheitswesens zurechtfinden, ersparen Sie sich Ärger (und finanzielle Ängste).</p>

<h2>Wählen Sie einen Arzt entsprechend Ihrem Versicherungsmodell</h2>
<p>Das günstigste LAMal-Modell ist normalerweise das „HMO-Modell« oder „Family Doctor«. Das bedeutet, dass Sie nicht direkt zu einem Facharzt oder Krankenhaus gehen können, ohne vorher eine zentrale Telefonnummer anzurufen oder sich unbedingt an Ihren Hausarzt zu wenden. Wenn Sie dies überspringen, kann es sein, dass Ihre Versicherung die Zahlung der Rechnung verweigert.</p>

<h2>Die Notfälle (Urgences / Notfall)</h2>
<p>Der Gang in die Notaufnahme eines Krankenhauses sollte nur in schwerwiegenden Fällen erfolgen. Für eine schnelle, aber nicht lebensnotwendige Behandlung ist es in der Schweiz üblich, sich an die „Permanence Médicale« (Polikliniken) zu wenden, wo man schnell und in der Reihenfolge seines Eintreffens behandelt wird, und das zu deutlich geringeren Kosten als im Krankenhaus.</p>

<h2>Das Zahlungssystem: Das Tiers-garant vs. Tiers-payant</h2>
<p>Wenn Sie in die Apotheke gehen oder eine Arztrechnung erhalten, werden Sie mit zwei Modellen konfrontiert:</p>
<ul>
<li><strong>Tiers-garant (Direktzahlung):</strong> Sie erhalten die Rechnung zu Hause (oder bezahlen sie in der Apotheke), bezahlen sie aus eigener Tasche und senden dann den QR-Code oder die Quittung an Ihre Versicherung. Sollten Sie Ihren Selbstbehalt bereits überschritten haben, erstattet Ihnen die Versicherung das Geld zurück.</li>
<li><strong>Tiers-payant:</strong> Der Arzt oder die Apotheke sendet die Rechnung direkt an den Versicherer. Die Zahlung erfolgt durch die Versicherung, und wenn Sie Ihren Selbstbehalt nicht überschritten haben, stellt Ihnen die Versicherung eine Rechnung aus, damit Sie den entsprechenden Betrag bezahlen können.</li>
</ul>
</div>`
    },

    // 19. Transporte público y abonos
    "articulo-transporte": {
        title: "Öffentlicher Verkehr: SBB, Halbtax und GA",
        description: "Das dichteste Zugnetz der Welt. Abonnemente erklärt.",
        keywords: "züge schweiz, SBB CFF FFS, halbtax abo schweiz, ga abo, öffentlicher verkehr",
        featuredImage: "media/guides/transporte-publico-suiza.jpg",
        category: `Öffentlicher Verkehr`,
        hub: 'vivir-en-suiza',
        readingTime: 4,
        summary: `Das Halbtax-Abo ist für Anwohner fast zwingend erforderlich.`,
        
        content: `<div class="article-content">
<p>Die Schweizerische Eidgenossenschaft ist stolz darauf, über eines der dichtesten, pünktlichsten und integriertesten öffentlichen Verkehrssysteme der Welt zu verfügen (Züge, Busse, Straßenbahnen und Schiffe verkehren alle im selben Takt).</p>

<h2>Der Swisspass</h2>
<p>Es handelt sich um eine physische Rote Karte (und digital in der SBB Mobile App), die als Träger für alle Ihre Skipässe und Pässe dient.</p>

<h2>Das unverzichtbare Abo: Der Demi-Tarif / Halbtax</h2>
<p>Der Kauf einer Einzelfahrkarte ist sehr teuer. Die überwiegende Mehrheit der Einwohner kauft ein Jahresabonnement zum halben Preis (Demi-Tarif)</strong>. Es kostet knapp 200 CHF pro Jahr und berechtigt Sie zum Kauf von Fahrkarten mit 50 % Ermäßigung für Schweizer Züge, Busse, Schiffe und städtische Verkehrsmittel in fast allen Städten. Es amortisiert sich sehr schnell.</p>

<h2>Das allgemeine Abonnement (AG / GA)</h2>
<p>Wenn Sie ein extremer <em>Pendler</em> sind, der täglich mit der Bahn zur Arbeit fährt, können Sie mit dem <strong>General-Abo</strong> unlimitiert mit allen Fernzügen, S-Bahnen, Schiffen und Postautos im Land fahren. Es ist teuer (fast CHF 4.000 pro Jahr für Erwachsene in der 2. Klasse, aber Arbeitgeber subventionieren manchmal einen Teil davon), bietet aber völlige Freiheit („Steigen Sie in den Zug und vergessen Sie das Ticket«).</p>

<h2>Super Saver-Tickets und Community-Tickets</h2>
<p>Wenn Sie Ihre Bahntickets mehrere Wochen im Voraus in der App (SBB Mobile) kaufen, finden Sie <em>Super-Réduits-Bilette / Supersparbillette</em> mit bis zu 70 % Ermäßigung, gültig ausschließlich für die angegebene Zeit.</p>
<p>Darüber hinaus verkaufen viele Gemeinden hochsubventionierte <em>Cartes Journalières / Tageskarten</em> vor Ort an ihre Nachbarn.</p>
</div>`
    },

    // 20. Ciudadanía suiza
    "articulo-ciudadania": {
        title: "Schweizer Bürgerrecht und Einbürgerung",
        description: "Voraussetzungen für den Schweizer Pass: Aufenthaltsdauer und Integrationstest.",
        keywords: "nacionalidad suiza, naturalizacion suiza, ciudadania suiza, pasaporte suizo",
        audience: 'newcomer',
        featuredImage: "media/guides/nacionalidad-suiza-pasaporte.jpg",
        category: `Verwaltungsverfahren`,
        hub: 'tramites',
        readingTime: 5,
        summary: `Die Einbürgerung erfordert 10 Jahre Aufenthalt und einen Ausweis C.`,
        content: `<div class="article-content">
<p>Die Erlangung eines Reisepasses mit dem weißen Kreuz ist kein rein bürokratischer Vorgang, sondern wird von den Schweizern vielmehr als endgültige Bestätigung eines optimalen Integrationsgrades verstanden.</p>

<h2>Anforderungen für die ordentliche Einbürgerung</h2>
<p>Wenn Sie nicht mit einem Schweizer Staatsbürger verheiratet sind, müssen Sie den regulären Einbürgerungsweg einschlagen, dessen Hauptvoraussetzung ein <strong>10-jähriger Aufenthalt in der Schweiz</strong> ist (die Jahre zwischen 8 und 18 zählen doppelt).</p>

<ul>
<li>Besitzen Sie eine Niederlassungserlaubnis (<strong>C-Genehmigung).</li>
<li>Während der festgelegten Mindestdauer (variiert je nach Region zwischen 2 und 5 Jahren) ununterbrochen im selben Kanton oder in derselben Gemeinde gelebt haben.</li>
<li><strong>Integrations- und Sprachkenntnisse:</strong> Nachweis der schriftlichen und mündlichen Beherrschung der Landessprache des Kantons (in der Regel Niveau B1 im Sprechen und A2 im Schreiben anerkannt).</li>
<li>In den letzten 3 Jahren nicht auf Sozialhilfe angewiesen (oder das Geld zurückgezahlt) haben.</li>
<li>Keine Vorstrafen oder Schulden haben (Zahlungsausfälle oder Betreibung legen den Prozess lahm).</li>
</ul>

<h2>Der Prüfungsprozess</h2>
<p>Das Verfahren betrifft drei Regierungsebenen (Gemeinde, Kanton und Bund). In den meisten Gemeinden müssen Sie eine schriftliche Prüfung und ein mündliches Interview absolvieren, in denen Ihre Kenntnisse der Schweizer Staatsbürgerkunde, der Geographie, der kantonalen Kultur und manchmal auch Ihr Verhältnis zu Ihren Nachbarn bewertet werden. Ob Ihr „Grad der Assimilation und örtlichen Integration« ausreichend ist, wird grundsätzlich in der Gemeinde entschieden.</p>

<div class="callout info">
<strong>SEM-Informationen:</strong> Alle Kantone haben ihre eigenen Verfahren, respektieren jedoch das Bundesrecht der <a href="https://www.sem.admin.ch/sem/en/home/themen/buergerrecht/einbuergerung/ordentliche_einbuergerung.html" target="_blank">SEM</a>. 
</div>
</div>`
    },

    "articulo-tramites-llegada": {
        title: "Erster Monat in der Schweiz: komplette Ankommens-Checkliste",
        description: "Alles, was du im ersten Monat in der Schweiz nach Prioritaet erledigen musst: Anmeldung, Krankenversicherung, Bankkonto, Transport, Briefkasten und mehr.",
        keywords: "behoerdengaenge ankunft schweiz, checkliste ankunft schweiz, erste schritte schweiz, neuankoemmling schweiz, was tun nach ankunft schweiz",
        category: "Behoerdengaenge Erste Schritte",
        hub: "tramites",
        slug: "checkliste-behoerdengaenge-ankunft-schweiz",
        readingTime: 7,
        dateUpdated: "Maerz 2026",
        featuredImage: "media/guides/checklist-llegada-suiza.jpg",
        imageAlt: "Schweizer Dokumente: Aufenthaltserlaubnis, Krankenkassenkarte, Schluessel und Checkliste",
        summary: "Zwei Situationen, zwei verschiedene Wege: Wenn du zur Jobsuche kommst, hast du keine unmittelbaren administrativen Pflichten; wenn du dich mit Arbeitsvertrag oder festem Wohnsitz niederlaesst, ist die Anmeldung bei der Gemeinde der erste Pflichtschritt.",
        content: `
            <div class="article-content">

                <div class="callout warning">
                    <strong>Wichtig:</strong> Wenn du als Tourist oder zur Jobsuche in die Schweiz kommst, musst du dich nicht bei der Gemeinde anmelden und auch keine Aufenthaltsbewilligung beantragen. Diese Pflicht entsteht erst, wenn du dich tatsaechlich im Land niederlaesst, normalerweise nach der Unterzeichnung eines Arbeitsvertrags oder mit der Begruendung deines effektiven Wohnsitzes.
                </div>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Wenn du als Tourist oder zur Jobsuche kommst</h2>
                <p>Als EU/EFTA-Buerger hast du das Recht, in die Schweiz einzureisen und dich waehrend deiner Jobsuche ohne administrative Formalitaeten im Land aufzuhalten. In dieser Phase gibt es keine Anmeldepflicht, keine Bewilligung zu beantragen und keine Verwaltungsfrist, die du beachten musst.</p>
                <p>Trotzdem lohnt es sich, einige Dinge schon vor der Reise oder waehrend des Aufenthalts gut vorzubereiten:</p>

                <h3>Persoenliche Unterlagen</h3>
                <p>Nimm einen gueltigen Personalausweis oder Reisepass mit. Du brauchst kein weiteres Dokument, um in die Schweiz einzureisen oder dich im Land zu bewegen.</p>

                <h3>Unterkunft und Mobilitaet</h3>
                <p>Lege fest, wo du ab dem ersten Tag wohnen wirst, auch wenn es zunaechst nur eine provisorische Unterkunft ist. Der Schweizer oeffentliche Verkehr ist effizient und puenktlich. Wenn du ihn regelmaessig nutzen willst, lohnt sich das <strong>Halbtax / Demi-tarif</strong> fuer rund 190 CHF pro Jahr fast immer sehr schnell. Du bekommst es auf <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">sbb.ch</a> oder an jedem SBB/CFF-Schalter.</p>

                <h3>Lebenslauf und Jobsuche</h3>
                <p>Der Schweizer Arbeitsmarkt hat eigene Konventionen. Ein ueblicher Lebenslauf enthaelt oft ein Foto, Geburtsdatum und Zivilstand. Wichtige Plattformen sind <a href="https://www.jobs.ch" target="_blank" rel="noopener noreferrer">jobs.ch</a>, <a href="https://www.jobup.ch" target="_blank" rel="noopener noreferrer">jobup.ch</a> und LinkedIn. Suche moeglichst in der Sprache des Kantons, in dem du arbeiten willst. Das erhoeht die Rueckmeldungen deutlich.</p>

                <h3>Krankenversicherung waehrend der Jobsuche</h3>
                <p>Solange du nicht offiziell in der Schweiz wohnst, gilt die obligatorische Krankenversicherung KVG/LAMal fuer dich noch nicht. Wenn du eine europaeische Krankenversicherungskarte oder eine Reiseversicherung hast, reicht das fuer einen Aufenthalt zur Jobsuche in der Regel aus. Die Pflicht zum Abschluss der Schweizer Grundversicherung beginnt erst, wenn du dich als Bewohner anmeldest.</p>

                <hr style="border:none; border-top:1px solid var(--border-light); margin: 2rem 0;">

                <h2>Wenn du dich niederlaesst, mit Vertrag oder effektivem Wohnsitz</h2>
                <p>Sobald du einen Arbeitsvertrag unterschreibst oder deinen effektiven Wohnsitz in der Schweiz begruendest, beginnt der administrative Ablauf. Die Fristen sind real, und wenn du sie verpasst, kann das zu Bussen fuehren.</p>

                <div class="callout info">
                    <strong>Allgemeine Regel:</strong> Die Anmeldung bei der Gemeinde muss in der Regel innerhalb von <strong>14 Tagen</strong> nach der Ankunft erfolgen und in vielen Kantonen <strong>vor dem ersten Arbeitstag</strong>. Die genaue Frist ist kantonal unterschiedlich. Pruefe immer die Website deiner Gemeinde.
                </div>

                <h3>1. Bei der Gemeinde anmelden</h3>
                <p>Das ist der erste Schritt, und er schaltet praktisch alles Weitere frei. Bei der Anmeldung erhaeltst du haeufig sofort eine provisorische Wohnsitzbestaetigung, die administrativ voll gueltig ist: Damit kannst du anfangen zu arbeiten, ein Bankkonto eroeffnen und die Krankenversicherung abschliessen, auch wenn die physische Bewilligungskarte erst Wochen spaeter per Post ankommt.</p>
                <p><strong>Mitbringen:</strong> gueltigen Ausweis oder Reisepass, Arbeits- oder Mietvertrag und die Adresse, unter der du wohnst, auch wenn sie noch provisorisch ist.</p>
                <p><strong>Kosten:</strong> je nach Kanton und Bewilligungsart meist zwischen 65 und 100 CHF.</p>

                <h3>2. Ein Bankkonto eroeffnen</h3>
                <p>Dein Arbeitgeber braucht eine Schweizer IBAN, um dir den Lohn zu ueberweisen. Mit der Anmeldebestaetigung kannst du direkt zur Bank gehen. Wenn du besonders schnell ein einsatzfaehiges Konto brauchst, koennen digitale Optionen wie Neon, Yuh oder Revolut mit Schweizer Konto oft sehr rasch aktiviert werden. Traditionelle Banken wie PostFinance, UBS, Raiffeisen oder Migros Bank brauchen manchmal etwas mehr Zeit, bieten aber mehr klassische Dienstleistungen an.</p>

                <h3>3. Die obligatorische Krankenversicherung abschliessen</h3>
                <p>Ab dem Datum deiner Anmeldung hast du <strong>3 Monate</strong> Zeit, die obligatorische Grundversicherung abzuschliessen. Sie gilt rueckwirkend ab dem ersten Tag. Warte nicht bis zur letzten Minute: Auch wenn du spaeter abschliesst, zahlst du die Praemien ab Beginn. Die Grunddeckung ist bei allen Versicherern gesetzlich gleich, nur der Preis aendert sich. Vergleiche deshalb auf <a href="https://www.priminfo.admin.ch" target="_blank" rel="noopener noreferrer">Priminfo.admin.ch</a>, dem offiziellen Vergleichstool des Bundes.</p>

                <h3>4. Dem Arbeitgeber deine Familiensituation mitteilen</h3>
                <p>Wenn du einen Partner oder unterhaltsberechtigte Kinder hast, muss dein Arbeitgeber diese Angaben kennen, um die korrekte Quellensteuer anzuwenden. Ein Fehler an dieser Stelle ist spaeter oft muhsam zu korrigieren.</p>

                <h3>5. Deinen Namen am Briefkasten anbringen</h3>
                <p>In der Schweiz laeuft ein grosser Teil der Verwaltung immer noch ueber die Post. Du bekommst die Bewilligungskarte, Versicherungsrechnungen und Steuerbriefe schriftlich. Wenn dein Name nicht von Anfang an am Briefkasten steht, koennen wichtige Sendungen verloren gehen oder zurueckgeschickt werden.</p>

                <h3>6. Das Abfallsystem deiner Gemeinde verstehen</h3>
                <p>In vielen Kantonen sind fuer den Hausmuell nur offizielle gebuehrenpflichtige Saecke erlaubt. Normale Muellsaecke koennen zu Bussen fuehren. Frag deshalb in deinem Haus oder direkt bei der Gemeinde von Anfang an nach, wie das System funktioniert.</p>

                <h3>7. Halbtax fuer den Verkehr abschliessen</h3>
                <p>Wenn du regelmaessig mit Zug oder oeffentlichem Verkehr unterwegs bist, lohnt sich das <strong>Halbtax / Demi-tarif</strong> fast immer. Es reduziert die Billette im ganzen Land um rund die Haelfte und amortisiert sich oft schon nach wenigen Wochen.</p>

                <h3>In den ersten 3 Monaten</h3>
                <p>Wenn die dringendsten Schritte erledigt sind, lohnt es sich, sich mit Zusatzversicherungen und mit der Saeule 3a zu beschaeftigen. Die obligatorische Grundversicherung deckt weder Zahnarzt, noch Brillen oder Privatspital ab. Die Saeule 3a ist eine steuerbeguenstigte Altersvorsorge. Je frueher du anfaengst, desto staerker wirkt der Zinseszinseffekt.</p>

                <div class="callout tip">
                    <strong>Empfohlene Reihenfolge:</strong> Anmeldung bei der Gemeinde → Bankkonto → Krankenversicherung → Informationen an den Arbeitgeber → Briefkasten und Muell → Halbtax. Jeder Schritt erleichtert den naechsten.
                </div>

                <h2>Haeufige Fehler beim Einzug</h2>
                <p>Die Anmeldung aufzuschieben, bis "alles bereit ist", und dadurch die Frist zu verpassen, ist der haeufigste Fehler. Wer die Rueckwirkung der Krankenversicherung nicht versteht, erlebt spaeter oft unerwartete Rechnungen. Wenn der Name nicht am Briefkasten steht, koennen Bewilligungskarte oder Steuerpost verloren gehen. Und wer sich nicht sofort ueber das lokale Muellsystem informiert, riskiert vermeidbare Bussen.</p>

                <h2>Offizielle Quellen</h2>
                <ul>
                    <li><a href="https://www.ch.ch/de/umzug-in-die-schweiz/" target="_blank" rel="noopener noreferrer">ch.ch — In die Schweiz ziehen</a></li>
                    <li><a href="https://www.priminfo.admin.ch/" target="_blank" rel="noopener noreferrer">Priminfo — offizieller KVG/LAMal-Vergleich</a></li>
                    <li><a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer">SBB/CFF/FFS — oeffentlicher Verkehr</a></li>
                </ul>
            </div>
        `
    },

    "articulo-trabajar-sin-permiso-fisico": {
        title: "Kann ich in der Schweiz arbeiten, bevor ich die physische Bewilligungskarte habe?",
        description: "Ja, du kannst legal in der Schweiz arbeiten, auch wenn die physische Bewilligungskarte noch nicht angekommen ist. Wie die provisorische Bescheinigung funktioniert.",
        keywords: "arbeiten ohne bewilligungskarte, provisorische meldebestätigung, bewilligung karte warten, in der schweiz arbeiten vor permis",
        category: "Verwaltungsverfahren",
        hub: "tramites",
        slug: "arbeiten-bevor-die-bewilligungskarte-da-ist",
        readingTime: 3,
        dateUpdated: "Maerz 2026",
        featuredImage: "media/guides/trabajar-antes-permiso-fisico-suiza.jpg",
        imageAlt: "Person arbeitet in einem professionellen Umfeld in der Schweiz",
        summary: "Du kannst ab dem ersten Tag nach der Anmeldung in der Gemeinde arbeiten. Die physische Bewilligungskarte kann Wochen dauern, aber die Anmeldebescheinigung ist bereits rechtlich gueltig.",
        content: `
            <div class="article-content">
                <p>Dies ist einer der haeufigsten Zweifel von Neuankoemmlingen und die Antwort erzeugt viel Verwirrung: <strong>Ja, du kannst legal in der Schweiz arbeiten, auch wenn die physische Bewilligungskarte noch nicht angekommen ist</strong>.</p>

                <h2>Wie der Prozess funktioniert</h2>
                <p>Wenn du dich im Einwohnermeldeamt anmeldest, erhaeltst du sofort eine <strong>provisorische Wohnbestaetigung</strong> (auf Franzoesisch "Attestation de residence", auf Deutsch "Meldebestaetigung"). Dieses Dokument bescheinigt rechtlich, dass du registriert und berechtigt bist, in der Schweiz zu residieren und zu arbeiten.</p>
                <p>Die physische Bewilligungskarte (plastifizierte Karte mit Foto) wird vom kantonalen Migrationsdienst ausgegeben und kann zwischen 4 und 12 Wochen dauern, bis sie per Post ankommt. Diese Verzoegerung ist voellig normal und kein ernsthafter Arbeitgeber kennt das nicht.</p>

                <h2>Welches Dokument nutzt der Arbeitgeber waehrend der Wartezeit?</h2>
                <p>Waehrend der Wartezeit nutzt der Arbeitnehmer die provisorische Bestaetigung als Nachweis. Fuer das Unternehmen ist dies ausreichend, um das Gehalt zu verarbeiten und seinen administrativen Pflichten nachzukommen.</p>

                <div class="callout info">
                    <strong>Typischer Fall:</strong> Viele Arbeitnehmer fangen montags an und melden sich freitags davor in der Gemeinde an. Mit der provisorischen Bestaetigung in der Hand beginnen sie ohne Probleme. Die physische Karte kommt Wochen spaeter per Post an.
                </div>

                <h2>Was ist, wenn der Arbeitgeber die physische Karte verlangt?</h2>
                <p>Wenn ein Arbeitgeber dir Probleme macht, kannst du erklaeren, dass der Prozess Standard ist und die provisorische Bescheinigung volle rechtliche Gueltigkeit hat. In grossen Unternehmen mit Personalbereich ist dies Routine. Bei Zweifeln koennen sowohl Arbeitgeber als auch Arbeitnehmer den kantonalen Migrationsdienst anrufen, um den Status des Antrags zu bestaetigen.</p>

                <h2>Wann kommt die physische Bewilligungskarte an?</h2>
                <ul>
                    <li>Kantone mit geringerer Nachfrage: 3-5 Wochen.</li>
                    <li>Genf, Zuerich (hohe Nachfrage): 8-12 Wochen oder laenger.</li>
                </ul>
                <p>Du erhaeltst die Karte im Briefkasten deiner registrierten Adresse. Deshalb ist es wichtig, dass der Briefkasten von deinem Namen ab dem ersten Tag gekennzeichnet ist.</p>

                <div class="callout warning">
                    <strong>Wichtig:</strong> Die physische Bewilligungskarte hat ein Verfallsdatum. Wenn das Ablaufdatum naher rueckt, erhaeltst du eine Benachrichtigung zur Verlaengerung. Warte nicht, bis es ablaeuft, bevor du den Prozess einleitest.
                </div>
            </div>
        `
    },

        "articulo-reagrupacion-familiar": {
        title: "Familiennachzug in der Schweiz: So holst du deine Familie",
        description: "Vollstaendiger Leitfaden zur Beantragung des Familiennachzugs in der Schweiz. Bedingungen, Dokumentation, Zeitplaene und Rechte nachgezogener Familienmitiglieder.",
        keywords: "familiennachzug schweiz, familie in die schweiz bringen, familienpermis schweiz, ehepartner schweiz, apostille schweiz",
        category: "Verwaltungsverfahren",
        hub: "tramites",
        slug: "familiennachzug-schweiz",
        readingTime: 5,
        dateUpdated: "Maerz 2026",
        featuredImage: "media/guides/reagrupacion-familiar-suiza.jpg",
        imageAlt: "Glueckliche Familie kommt mit Koffern in einem Bahnhof in der Schweiz mit Alpen im Hintergrund an",
        summary: "Mit Permit B oder C kannst du deinen Ehepartner und Kinder unter 18 Jahren nachziehen. Die Familienmitiglieder erhalten ihr eigenes Permit und haben das Recht, vom ersten Tag an zu arbeiten.",
        content: `
            <div class="article-content">
                <p>Einer der wichtigsten Momente im Leben eines Auswanderers ist es, die Familie nachziehen zu koennen. In der Schweiz ist der Prozess des Familiennachzugs gut reguliert und ist fuer EU-Buerger machbar, aber hat seine eigenen Regeln und Zeitplaene.</p>

                <h2>Wer kann einen Familiennachzug anfordern?</h2>
                <p>Dies koennen Inhaber eines <strong>gueltigen Permits B oder C</strong> beantragen. Mit Permit L (Kurzaufenthalt) sind die Moeglichkeiten sehr begrenzt. Familienmitiglieder, die nachgezogen werden koennen, sind:</p>
                <ul>
                    <li>Ehepartner (offiziell anerkannte Ehe).</li>
                    <li>Eintragene Lebenspartnerschaft.</li>
                    <li>Kinder unter 18 Jahren (einschliesslich adoptierter).</li>
                    <li>In einigen Faellen Eltern oder unterhaengige Familienmitiglieder mit nachgewiesenen Beduerfnissen.</li>
                </ul>

                <h2>Bedingungen, die der in der Schweiz ansaessige Bewohner erfuellen muss</h2>
                <ul>
                    <li><strong>Angemessene Unterkunft:</strong> Die Wohnung muss ausreichend Platz fuer die gesamte Familie bieten. Die Behoerden verifizieren dies.</li>
                    <li><strong>Ausreichende finanzielle Mittel:</strong> Nicht auf Sozialhilfe angewiesen sein.</li>
                    <li><strong>Gueltiges Permit:</strong> Ohne Saktionen oder Permit, das widerrufen werden soll.</li>
                </ul>

                <h2>Erforderliche Dokumentation</h2>
                <ul>
                    <li>Offizielles Formulare fuer Familiennachzug (kantonales Migrationsamt).</li>
                    <li>Paesse aller Familienmitiglieder.</li>
                    <li>Eheurkunde oder Eingetragene Lebenspartnerschaft <strong>mit Haager Apostille und uebersetzt</strong>.</li>
                    <li>Geburtsregister der Kinder mit Apostille und uebersetzt.</li>
                    <li>Mietvertrag der Wohnung mit ausreichendem Platz.</li>
                    <li>Letzte Lohnabrechnung oder Einkommensnachweis.</li>
                </ul>

                <div class="callout info">
                    <strong>Die Haager Apostille:</strong> Offizielle spanische Dokumente muessen die Apostille haben, um in der Schweiz gueltig zu sein. Sie wird vom spanischen Aussenministerium oder bei Regierungsbueros erhalten. Beantrage sie rechtzeitig, da sie Tage dauern kann.
                </div>

                <h2>Wichtige Fristen</h2>
                <ul>
                    <li><strong>EU-Buerger mit Permit B:</strong> Innerhalb von 5 Jahren nach Erhalt des Permits.</li>
                    <li><strong>Permit-C-Inhaber:</strong> Keine Fristvorgabe.</li>
                </ul>
                <p>Der Prozess dauert zwischen 4 und 12 Wochen, abhaengig vom Kanton und der Arbeitslast.</p>

                <h2>Welches Permit erhalten die Familienmitiglieder?</h2>
                <ul>
                    <li>Principal mit Permit B → Familienmitiglieder erhalten Permit B.</li>
                    <li>Principal mit Permit C → Familienmitiglieder erhalten Permit C.</li>
                </ul>
                <p><strong>Arbeitsrecht:</strong> Ja. Der Ehepartner hat mit dem erhaltenen Permit volles Arbeitsrecht. Die Kinder werden automatisch in das Schweizer Schulsystem aufgenommen.</p>

                <div class="callout tip">
                    <strong>Praktischer Tipp:</strong> Wenn du eine groessere Wohnung brauchst, um die Anforderung angemessene Unterkunft zu erfuellen, tu das, bevor du den Antrag einreichst. Dies ist einer der haeufigsten Gruende fuer Verzoegerungen beim Prozess.
                </div>
            </div>
        `
    },

    "articulo-subalquiler": {
        title: "Untermiete in der Schweiz: Regeln, Rechte und Legalität",
        description: "Ein vollständiger Leitfaden zur Untermiete in der Schweiz: Wie Sie die Erlaubnis des Vermieters einholen, rechtliche Anforderungen und Vertragsvorlagen.",
        keywords: "untermiete schweiz, untervermietung, untermietvertrag, vermieterlaubnis schweiz",
        audience: 'resident',
        featuredImage: "media/guides/subalquiler-vivienda-suiza.jpg",
        imageAlt: "Eine Person unterzeichnet eine Untermietvereinbarung in einer Schweizer Wohnung",
        category: "Housing",
        hub: "vivienda",
        slug: "untermiete-schweiz-rechtlicher-leitfaden",
        readingTime: 4,
        summary: "Untervermietung ist in der Schweiz gängige Praxis und legal, aber streng reguliert. Sie müssen Ihren Vermieter informieren und spezifische Regeln bezüglich Preis und Dauer befolgen.",
        content: `
            <div class="article-content">
                <p>Untermiete (<i>Untermiete / Sous-location</i>) wird häufig von Personen genutzt, die für einige Monate ins Ausland gehen oder ein Zimmer frei haben. Obwohl es ein Recht des Mieters ist, muss es korrekt durchgeführt werden, um die Kündigung des Hauptmietvertrags zu vermeiden.</p>

                <h2>Ist Untermiete in der Schweiz legal?</h2>
                <p>Ja, sie ist durch das Schweizerische Obligationenrecht geschützt. Der Vermieter (oder die Verwaltung) kann die Zustimmung nur verweigern, wenn die Bedingungen missbräuchlich sind oder wenn dem Vermieter durch die Untermiete ein wesentlicher Nachteil entsteht.</p>

                <h2>Rechtliche Anforderungen</h2>
                <p>Um im Rahmen des Gesetzes zu bleiben, müssen Sie diese Schritte befolgen:</p>
                <ul>
                    <li><strong>Den Vermieter informieren:</strong> Sie müssen den Vermieter/die Verwaltung offiziell über Ihre Absicht zur Untervermietung informieren und die Bedingungen (Preis, Identität der Untermieter) offenlegen.</li>
                    <li><strong>Schriftliche Erlaubnis:</strong> Obwohl eine mündliche Zustimmung theoretisch möglich ist, sollten Sie diese zu Ihrem Schutz immer schriftlich einholen.</li>
                    <li><strong>Nicht-missbräuchliche Bedingungen:</strong> Sie dürfen einem Untermieter nicht wesentlich mehr berechnen, als Sie selbst zahlen, es sei denn, Sie stellen Möbel oder zusätzliche Dienstleistungen zur Verfügung (siehe unten).</li>
                </ul>

                <h2>Der Untermietvertrag</h2>
                <p>Selbst wenn Sie an einen Freund untervermieten, ist ein schriftlicher Vertrag <strong>unerlässlich</strong>. Er sollte Folgendes spezifizieren:</p>
                <ul>
                    <li>Mietbetrag und Anteil an den Nebenkosten (Heizung, Internet).</li>
                    <li>Mietkaution (kann auf einem Privatkonto oder einem Sperrkonto hinterlegt werden).</li>
                    <li>Kündigungsfrist (meist analog zum Hauptmietvertrag).</li>
                    <li>Inventarliste (falls das Zimmer/die Wohnung möbliert ist).</li>
                </ul>

                <h2>Der Preis: Darf ich Gewinn machen?</h2>
                <div class="callout warning">
                    <strong>Regel zum Gewinn:</strong> Es ist zulässig, einen kleinen Zuschlag für Möbel, Internet oder Strom zu erheben (meist 10-20 % über Ihrer Grundmiete). Wenn Sie jedoch einen übermäßigen „Gewinn« erzielen, hat der Vermieter das gesetzliche Recht, die Untermiete abzulehnen oder sogar Ihren Hauptvertrag zu kündigen.
                </div>

                <h2>Was passiert, wenn ich ohne Erlaubnis untervermiete?</h2>
                <p>Die „heimliche« Untervermietung (z. B. über Plattformen wie Airbnb ohne Genehmigung) gilt als Vertragsbruch. Falls dies entdeckt wird, kann der Vermieter eine offizielle Mahnung schicken und in hartnäckigen Fällen Ihren Mietvertrag mit einer Frist von 30 Tagen kündigen.</p>
            </div>
        `
    },

    "articulo-jubilacion": {
        title: "Rente in der Schweiz: was Sie erwarten können (AHV/AVS, BVG/LPP)",
        description: "Das 3-Säulen-System verständlich erklärt und warum das Ankunftsalter (30/40/50) einen Unterschied macht.",
        keywords: "rente schweiz ahv, bvg berufliche vorsorge, säule 3a, pension",
        featuredImage: "media/guides/jubilacion-pension-suiza.jpg",
        category: "Sozialversicherung",
        hub: "trabajo",
        readingTime: 5,
        summary: "Die Schweizer Altersvorsorge stützt sich auf drei Säulen. Entscheidend sind die Beitragsjahre: Wer früher in die Schweiz kommt, baut in der Regel eine deutlich solidere Rente auf.",
        content: `<div class="article-content">
<p>Eine der häufigsten Fragen nach einigen Jahren in der Schweiz lautet: Wie hoch wird meine Rente eigentlich sein? Die Altersvorsorge stützt sich vor allem auf zwei Säulen, nämlich <strong>AHV/AVS</strong> und <strong>BVG/LPP</strong>, ergänzt durch die freiwillige dritte Säule.</p>

<h2>Die grundlegenden Säulen</h2>
<ul>
  <li><strong>1. Säule (AHV/AVS):</strong> Staatliche Grundrente. Der Betrag hängt vor allem von lückenlosen Beitragsjahren ab. Bei vollen Beitragsjahren liegt die monatliche Rente ungefähr zwischen 1'200 und 2'450 CHF.</li>
  <li><strong>2. Säule (BVG/LPP):</strong> Berufliche Vorsorge über die Pensionskasse des Arbeitgebers. Hier wird Kapital aufgebaut, das später als Monatsrente oder teilweise als Kapitalbezug ausbezahlt werden kann.</li>
  <li><strong>3. Säule:</strong> Freiwilliges steuerbegünstigtes Sparen, um Lücken zu schließen oder den Lebensstandard im Alter zu stabilisieren.</li>
</ul>

<h2>Beispiele nach Alter bei Ankunft</h2>
<p>Die Erwartungen ändern sich stark, je nachdem, wann Sie anfangen, in der Schweiz Beiträge zu leisten:</p>
<ul>
  <li><strong>Ankunft mit 30 Jahren:</strong> Das ist ein relativ günstiges Szenario. Nach rund 35 Beitragsjahren ist eine gesamte Altersrente von etwa 4'000 bis 5'500 CHF realistisch, je nach Lohnverlauf und Pensionskasse.</li>
  <li><strong>Ankunft mit 40 Jahren:</strong> Die AHV wird bereits lückenhafter, und in der 2. Säule bleibt weniger Zeit zum Kapitalaufbau. Eine Gesamtrente von ungefähr 3'000 bis 4'000 CHF ist ein plausibler Rahmen.</li>
  <li><strong>Ankunft mit 50 Jahren:</strong> Das ist deutlich heikler. Ohne hohe Löhne oder zusätzliche private Vorsorge kann die gesamte Rente eher bei 2'000 bis 3'000 CHF liegen.</li>
</ul>

<div class="callout tip">
  <strong>Wichtig bei Spanien und der Schweiz:</strong> Die in Spanien gearbeiteten Jahre gehen nicht verloren. Jedes Land zahlt bei Erreichen des Rentenalters seinen proportionalen Anteil gemäss den Sozialversicherungsabkommen.
</div>
</div>`
    },

    "articulo-vivir-sin-trabajar": {
        title: "In der Schweiz leben ohne zu arbeiten (EU/EFTA): Voraussetzungen",
        description: "Wie EU/EFTA-Bürger ohne Erwerbstätigkeit in der Schweiz wohnen können: Nachweis Mittel, Versicherung und Anmeldung.",
        keywords: "in der schweiz leben ohne arbeit, ausreichende mittel, aufenthalt ohne erwerbstätigkeit",
        featuredImage: "media/guides/residir-en-suiza-sin-trabajo.jpg",
        category: "Verwaltungsverfahren",
        hub: "tramites",
        readingTime: 4,
        summary: "Ein Aufenthalt ohne Erwerbstätigkeit ist möglich, aber nur mit ausreichenden finanziellen Mitteln, einer vollwertigen Krankenversicherung und einer formellen Anmeldung bei der Gemeinde.",
        content: `<div class="article-content">
<p>Viele fragen sich, ob man sich in der Schweiz auch ohne Arbeitsvertrag niederlassen kann. Die Antwort lautet: ja, besonders für Bürger aus der EU/EFTA, allerdings nur unter recht strengen Bedingungen.</p>

<h2>Regeln für EU/EFTA-Bürger</h2>
<p>Wenn Sie Spanier sind oder aus einem anderen EU-Land kommen und länger als 90 Tage ohne Erwerbstätigkeit in der Schweiz bleiben möchten, müssen Sie sich anmelden und eine Aufenthaltsbewilligung beantragen. Dafür müssen Sie in der Regel nachweisen:</p>
<ul>
  <li><strong>Ausreichende finanzielle Mittel:</strong> Sie müssen zeigen, dass Sie von Ersparnissen, Renten oder anderen Einkünften leben können, ohne auf Schweizer Sozialhilfe angewiesen zu sein.</li>
  <li><strong>Krankenversicherung:</strong> Eine vollwertige Krankenversicherung ist obligatorisch. Reiseversicherungen für kurze Aufenthalte reichen dafür normalerweise nicht aus.</li>
  <li><strong>Offizielle Anmeldung:</strong> Sie müssen sich bei der Einwohnerkontrolle Ihrer Wohngemeinde registrieren.</li>
</ul>

<h2>Und für Bürger aus Drittstaaten?</h2>
<p>Dann sind die Regeln deutlich restriktiver. Ein Aufenthalt ohne Erwerbstätigkeit wird in der Regel nur in besonderen Fällen bewilligt, etwa bei Ruhestand, Studium oder medizinisch begründeten Situationen, und fast immer mit hohen finanziellen Anforderungen.</p>

<div class="callout warning">
  <strong>Wichtig:</strong> Bei Freunden gemeldet oder „einfach wohnhaft“ zu sein ersetzt keine Aufenthaltsbewilligung. Wer die Formalitäten ignoriert, riskiert Bussen oder eine zwangsweise Ausreise.
</div>
</div>`
    },

    "articulo-ai-invalidez": {
        title: "IV/AI in der Schweiz: Unterstützung und Wiedereingliederung",
        description: "Wie die Invalidenversicherung funktioniert: Fokus auf Rehabilitation und Rückkehr in den Beruf, bevor eine Rente geprüft wird.",
        keywords: "invalidenversicherung iv ai, invalidenrente, wiedereingliederung",
        featuredImage: "media/guides/seguro-invalidez-ai-suiza.jpg",
        category: "Sozialversicherung",
        hub: "salud",
        readingTime: 4,
        summary: "Die IV/AI folgt dem Prinzip «Eingliederung vor Rente». Eine Rente wird in der Regel erst geprüft, wenn medizinische und berufliche Maßnahmen ausgeschöpft sind.",
        content: `<div class="article-content">
<p>Die <i>Assurance-invalidité</i> bzw. Invalidenversicherung ist ein zentraler Bestandteil der Schweizer Sozialversicherung. Gleichzeitig wird sie von Menschen, die andere Systeme gewohnt sind, häufig missverstanden.</p>

<h2>Rehabilitation vor Rente</h2>
<p>Anders als in vielen Ländern ist das Hauptziel der IV nicht, möglichst schnell eine lebenslange Rente auszuzahlen. Zuerst versucht sie, die betroffene Person wieder in Arbeit zu bringen oder ihre Erwerbsfähigkeit zu erhalten. Typische Maßnahmen sind:</p>
<ul>
  <li>medizinische und berufliche Rehabilitation,</li>
  <li>Anpassungen am Arbeitsplatz oder technische Hilfsmittel,</li>
  <li>Umschulung oder Weiterbildung für einen neuen Beruf.</li>
</ul>

<h2>Wann wird eine Rente ausbezahlt?</h2>
<p>Eine Invalidenrente wird grundsätzlich erst zugesprochen, wenn nach Ausschöpfung der Eingliederungsmaßnahmen weiterhin eine dauerhafte Erwerbseinbuße besteht. Je nach Invaliditätsgrad kann die Rente teilweise oder vollständig ausfallen.</p>

<h2>Frühe Anmeldung</h2>
<p>Es ist wichtig, die IV früh zu kontaktieren, sobald absehbar ist, dass eine Krankheit oder ein Unfall zu einer langen Arbeitsunfähigkeit führen könnte. Warten Sie nicht, bis die Situation kritisch wird: Das Verfahren ist lang und umfasst mehrere medizinische und berufliche Abklärungen.</p>
</div>`
    },

    "articulo-vacunas": {
        title: "Impfungen in der Schweiz: Empfehlungen statt Pflicht",
        description: "Wie das Impfsystem funktioniert: meist keine gesetzliche Pflicht, aber offizielle Empfehlungen des BAG.",
        keywords: "impfen schweiz, bag impfplan, zecken encephalitis, impfempfehlung",
        featuredImage: "media/guides/vacunacion-en-suiza.jpg",
        category: "Öffentliche Gesundheit",
        hub: "salud",
        readingTime: 4,
        summary: "In der Schweiz gibt es grundsätzlich keine Impfpflicht. Das System basiert auf Empfehlungen des BAG und auf der Eigenverantwortung der Bevölkerung.",
        content: `<div class="article-content">
<p>Viele Familien stellen nach dem Umzug in die Schweiz fest, dass das Impfsystem anders funktioniert als in anderen europäischen Ländern. Im Vordergrund stehen hier Information und individuelle Entscheidung.</p>

<h2>Sind Impfungen obligatorisch?</h2>
<p><strong>Nein.</strong> In der Schweiz gibt es grundsätzlich keine gesetzlich vorgeschriebenen Impfungen, weder für Kinder noch für Erwachsene. Selbst für den Besuch der öffentlichen Schule besteht in der Regel keine Impfpflicht. Das System setzt darauf, dass Familien sich mit Kinderärzten oder Hausärzten informieren und auf Basis offizieller Empfehlungen entscheiden.</p>

<h2>Empfehlungen des BAG</h2>
<p>Das Bundesamt für Gesundheit veröffentlicht einen empfohlenen Impfplan mit den Standardimpfungen wie Diphtherie, Tetanus, Keuchhusten, Polio oder Masern. Darüber hinaus wird in der Schweiz besonders oft Folgendes empfohlen:</p>
<ul>
  <li><strong>FSME:</strong> besonders wichtig für Personen, die viel im Wald oder draußen unterwegs sind.</li>
  <li><strong>Grippe und HPV:</strong> je nach Risikogruppe und Alter.</li>
</ul>

<h2>Kosten und Versicherung</h2>
<p>Empfohlene Impfungen des offiziellen Impfplans werden in der Regel von der Grundversicherung übernommen, allerdings je nach gewählter Franchise und Kostenbeteiligung.</p>
</div>`
    },

    "articulo-danza-patos": {
        title: "Kuriosität: Der «Ententanz» hat Schweizer Ursprung",
        description: "Die Geschichte von «Der Ententanz», komponiert in der Schweiz und später weltweit als Partyhit bekannt.",
        keywords: "ententanz schweiz ursprung, werner thomas davos, birdie song",
        featuredImage: "media/guides/origen-danza-de-los-patos-suiza.jpg",
        category: "Kultur & Alltag",
        hub: "vivir-en-suiza",
        readingTime: 3,
        summary: "So generisch die Melodie heute wirkt, der berühmte Ententanz wurde in den 1950er Jahren von einem Schweizer Akkordeonisten in Davos komponiert.",
        content: `<div class="article-content">
<p>Man kennt die Melodie von Hochzeiten, Dorffesten oder dem Oktoberfest. Was viele nicht wissen: Der berühmte <strong>Ententanz</strong> (<i>Der Ententanz</i>) hat einen hundertprozentig Schweizer Ursprung.</p>

<h2>Werner Thomas: der Urheber</h2>
<p>Die Melodie wurde Ende der 1950er Jahre von <strong>Werner Thomas</strong>, einem Akkordeonisten aus Davos, komponiert. Ursprünglich nannte er sie „Der Ententanz“, inspiriert von den Bewegungen der Vögel, die er beim Musizieren in Hotels und Restaurants der Skiregion beobachtete.</p>

<h2>Von Davos in die ganze Welt</h2>
<p>Berühmt wurde das Lied zunächst gar nicht. Erst in den 1970er- und 1980er-Jahren griffen verschiedene europäische Gruppen die Melodie auf und machten daraus einen weltweiten Hit unter Namen wie „The Birdie Song“ oder „La danse des canards“.</p>

<div class="callout info">
  <strong>Schon gewusst?</strong> Werner Thomas schrieb das Stück ursprünglich nur, damit die Leute auf einfache und lustige Weise tanzen konnten. Das hat offensichtlich funktioniert.
</div>
</div>`
    },

    "articulo-introduccion-suiza": {
        featuredImage: "media/guides/introduccion-suiza-como-funciona.png",
        title: "Wie die Schweiz funktioniert: kompletter Leitfaden für neue Bewohner",
        description: "Umfassender Leitfaden zur Schweiz: Bundesstaat, 26 Kantone, politisches System, 4 Sprachen, regionale Unterschiede, Bildung und Alltag. Unverzichtbar vor dem Umzug.",
        keywords: "wie funktioniert die schweiz, kantone schweiz, föderalismus, direkte demokratie, sprachen schweiz, schweizer schulsystem, unterschiede zwischen kantonen",
        audience: 'newcomer',
        category: 'Land',
        hub: 'vivir-en-suiza',
        slug: "wie-schweiz-funktioniert",
        readingTime: 10,
        dateUpdated: "Maerz 2026",
        summary: "Die Schweiz ist kein gewöhnliches Land. Sie ist eine Eidgenossenschaft mit 26 autonomen Kantonen, vier Landessprachen, direkter Demokratie und einem Föderalismus, der Ihren Alltag ab dem ersten Tag prägt.",
        imageAlt: "Menschen, die sich in der Schweizer Gemeinschaft vor oeffentlichen Gebaeuden integrieren",
        content: `
            <div class="article-content">
                <p>Wenn Sie gerade in die Schweiz gezogen sind oder den Umzug erst planen, ist das Verständnis des Landes der erste große Schritt. Die Schweiz funktioniert weder wie Spanien noch wie Frankreich oder die meisten anderen europäischen Staaten. Ihr politisches System, ihre territoriale Organisation und ihre Verwaltungskultur sind eigenständig und beeinflussen Ihren Alltag ab dem Moment, in dem Sie einen Arbeitsvertrag unterschreiben, eine Krankenversicherung wählen oder sich bei der Gemeinde anmelden.</p>

                <div class="callout info">
                    <strong>Warum ist das wichtig?</strong> Weil in der Schweiz Regeln zu Steuern, Versicherungen, Schule oder Aufenthaltsfragen <strong>stark vom Wohnkanton abhängen</strong> und nicht nur vom Bund.
                </div>

                <h2>Die Schweiz in Zahlen</h2>
                <ul>
                    <li><strong>Hauptstadt:</strong> Bern, Sitz der Bundesbehörden</li>
                    <li><strong>Fläche:</strong> 41.285 km²</li>
                    <li><strong>Bevölkerung:</strong> rund 8,9 Millionen Einwohner</li>
                    <li><strong>Währung:</strong> Schweizer Franken (CHF)</li>
                    <li><strong>Nachbarländer:</strong> Deutschland, Österreich, Liechtenstein, Italien und Frankreich</li>
                    <li><strong>Staatsform:</strong> Schweizerische Eidgenossenschaft mit 26 autonomen Kantonen</li>
                    <li><strong>Landessprachen:</strong> Deutsch, Französisch, Italienisch und Rätoromanisch</li>
                    <li><strong>Mitglied der UNO und der EFTA</strong>, aber <strong>nicht der Europäischen Union</strong></li>
                </ul>

                <h2 id="organizacion">Abschnitt 1 — Kantone und territoriale Organisation</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-politico-cantones.png"
                         alt="Mapa político de Suiza con los 26 cantones y los tres niveles de gobierno"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Jeder Kanton hat seine eigene Geschichte und weitreichende Kompetenzen innerhalb des Schweizer Bundesstaats.
                    </figcaption>
                </figure>

                <p>Die Schweiz ist eine <strong>Eidgenossenschaft aus 26 Kantonen</strong>. Diese Struktur reicht bis ins Mittelalter zurück und erklärt, warum das Land so eigentümlich funktioniert. Jeder Kanton ist im Kern ein kleiner Staat mit eigener Regierung, eigenem Parlament und eigenen Regeln.</p>

                <p>Die administrative Organisation hat drei Ebenen:</p>
                <ul>
                    <li><strong>Bund:</strong> Die Bundesbehörden in Bern kümmern sich um Außenpolitik, Armee, Währung, Zivil- und Verfassungsrecht sowie um die großen gemeinsamen Rechtsrahmen.</li>
                    <li><strong>Kantone:</strong> 26 autonome Einheiten mit breiten Kompetenzen bei Steuern, Bildung, Gesundheit, Polizei und Verwaltung.</li>
                    <li><strong>Gemeinden:</strong> Mehr als 2.000 Gemeinden, die den Alltag der Einwohner am direktesten prägen. Dort laufen Anmeldung, lokale Steuern, Bürgerdienste und ein Teil der Bildungsaufgaben zusammen.</li>
                </ul>

                <div class="callout">
                    <strong>Praktisches Beispiel:</strong> Wenn Sie in die Schweiz kommen, melden Sie sich nicht „beim Staat“ an, sondern bei <em>Ihrer Gemeinde</em>. Dort werden Wohnsitz, erste Formalitäten zur Aufenthaltsbewilligung und ein Teil Ihrer Steuerrealität festgelegt.
                </div>

                <p>Die 26 Kantone heißen, in historischer Reihenfolge ihres Beitritts oder ihrer Entstehung: Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, Freiburg, Solothurn, Basel-Stadt, Basel-Landschaft, Schaffhausen, Appenzell Ausserrhoden, Appenzell Innerrhoden, St. Gallen, Graubünden, Aargau, Thurgau, Tessin, Waadt, Wallis, Neuenburg, Genf, Jura, Bern, Luzern und Zürich.</p>

                <p><a href="https://www.ch.ch/en/cantons/" target="_blank" rel="noopener noreferrer">→ Offizielle Portale der 26 Kantone auf ch.ch ansehen</a></p>

                <h2 id="politica">Abschnitt 2 — Das politische System der Schweiz</h2>

                <p>Die Schweiz besitzt eine der partizipativsten Demokratien der Welt. Bürger wählen nicht nur Parlamente, sondern stimmen <strong>mehrmals pro Jahr direkt über Gesetze</strong> ab.</p>

                <h3>Direkte Demokratie</h3>
                <p>Mehrmals jährlich finden Volksabstimmungen statt. Dabei kann es um sehr konkrete Themen gehen, von Steuerfragen bis zu Verfassungsänderungen. Die Ergebnisse sind verbindlich und können Gesetze kippen, die das Parlament bereits verabschiedet hat.</p>

                <h3>Volksinitiativen</h3>
                <p>Wenn 100.000 Bürger innerhalb von 18 Monaten Unterschriften sammeln, können sie eine Änderung der Bundesverfassung vorschlagen. Das Volk stimmt darüber ab. Dieses Instrument hat wichtige politische Entscheidungen des Landes geprägt.</p>

                <h3>Fakultatives Referendum</h3>
                <p>Wenn 50.000 Bürger innert 100 Tagen gegen ein Gesetz Unterschriften sammeln, muss dieses dem Volk vorgelegt werden. Das ist die wichtigste Bremse der Bevölkerung gegenüber dem Parlament.</p>

                <h3>Der Bundesrat</h3>
                <p>Die Schweiz hat keinen Präsidenten mit starker Exekutivmacht. Die Regierung besteht aus <strong>sieben Bundesräten</strong>, die gemeinsam entscheiden. Der Vorsitz rotiert jedes Jahr und ist vor allem repräsentativ.</p>

                <div class="callout info">
                    <strong>Wichtig für Ausländer:</strong> Ohne Einbürgerung können Sie auf Bundesebene nicht abstimmen. Einige Kantone wie Neuenburg, Waadt oder Jura erlauben jedoch ausländischen Einwohnern unter bestimmten Voraussetzungen die Teilnahme an kommunalen oder kantonalen Abstimmungen.
                </div>

                <h2 id="lenguas">Abschnitt 3 — Die vier Sprachen der Schweiz</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/lenguas-suiza.png"
                         alt="Mapa lingüístico de Suiza con las 4 regiones de lenguas oficiales: alemán, francés, italiano y romanche"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Welche Sprache Sie brauchen, hängt direkt vom Kanton ab, in dem Sie leben.
                    </figcaption>
                </figure>

                <p>Die Schweiz hat <strong>vier Landessprachen</strong>. Welche Sie im Alltag, bei Behörden und am Arbeitsplatz brauchen, hängt unmittelbar vom Wohnort ab.</p>

                <h3>Deutsch — Deutschschweiz</h3>
                <p>Deutsch wird in rund 17 bis 18 Kantonen gesprochen und ist die Sprache von etwa 63 % der Bevölkerung. Im Alltag hören Sie meist <em>Schweizerdeutsch</em>, also Dialekte. Offizielle Schreiben, Verträge und E-Mails laufen jedoch in <em>Hochdeutsch</em>.</p>
                <p>Wer in Zürich, Bern, Basel, Luzern oder generell in der Zentral- und Ostschweiz lebt, braucht Deutsch praktisch zwingend.</p>

                <h3>Französisch — die Romandie</h3>
                <p>Französisch ist die Alltagssprache für ungefähr 23 % der Bevölkerung. Es dominiert in Genf, Waadt, Neuenburg und Jura sowie in Teilen von Freiburg, Bern und Wallis. Für viele Spanischsprachige ist dieser Teil des Landes sprachlich leichter zugänglich als die Deutschschweiz.</p>

                <h3>Italienisch — das Tessin</h3>
                <p>Italienisch wird vor allem im Kanton Tessin und in einigen Tälern Graubündens gesprochen. Das Tessin hat kulturell einen deutlich mediterraneren Charakter als andere Regionen.</p>

                <h3>Rätoromanisch</h3>
                <p>Rätoromanisch ist eine Minderheitensprache mit stark regionalem Charakter in Graubünden. Sie hat den Status einer Landessprache, ist administrativ aber nur in den betroffenen Regionen relevant.</p>

                <h3>Zwei- und dreisprachige Kantone</h3>
                <ul>
                    <li><strong>Freiburg:</strong> offiziell zweisprachig, Französisch und Deutsch.</li>
                    <li><strong>Bern:</strong> überwiegend deutschsprachig, mit französischsprachigem Berner Jura.</li>
                    <li><strong>Wallis:</strong> deutsch und französisch, je nach Region.</li>
                    <li><strong>Graubünden:</strong> der einzige dreisprachige Kanton mit Deutsch, Italienisch und Rätoromanisch.</li>
                </ul>

                <div class="callout">
                    <strong>Praktischer Rat:</strong> Die wichtigste Investition für Ihre Integration ist das Lernen der Sprache Ihres Kantons. In der Schweiz bedeutet Sprache nicht nur Kommunikation, sondern auch Zugang zu Arbeit, Verwaltung und sozialem Leben.
                </div>

                <h2 id="cantones">Abschnitt 4 — Was sich von Kanton zu Kanton ändert</h2>

                <p>Für Neuankömmlinge ist das entscheidend: In der Schweiz <strong>ändert der Wohnkanton fast alles</strong>. Das ist keine Übertreibung.</p>

                <h3>Steuern</h3>
                <p>Die kombinierte Steuerbelastung aus Bund, Kanton und Gemeinde kann je nach Wohnort massiv variieren. Kantone wie Zug, Schwyz oder Nidwalden gelten als steuerlich besonders attraktiv. Genf, Waadt oder Bern liegen oft spürbar höher.</p>
                <p>→ <a href="#/quellensteuer-schweiz">Weiterlesen: Quellensteuer in der Schweiz</a></p>

                <h3>Krankenversicherung</h3>
                <p>Die Grundversicherung ist überall obligatorisch, aber die Prämien unterscheiden sich je nach Kanton und Region stark, selbst bei derselben Krankenkasse. Städte wie Genf oder Basel sind meist teurer als ländliche Kantone.</p>
                <p>→ <a href="#/krankenversicherung-schweiz-kvg">Weiterlesen: Das KVG-System erklärt</a></p>

                <h3>Bildung und Schule</h3>
                <p>Die Schule ist kantonal organisiert. Schulkalender, Beginn der obligatorischen Schulzeit, Lehrmittel, Unterrichtszeiten und Sprachmodelle unterscheiden sich, auch wenn es mit HarmoS gewisse Koordination gibt.</p>
                <p>→ <a href="#/das-schweizer-schulsystem-erklart">Weiterlesen: Das Schweizer Bildungssystem</a></p>

                <h3>Aufenthalt und Verwaltung</h3>
                <p>Anmeldung, Fristen, Formulare und Öffnungszeiten unterscheiden sich nicht nur zwischen Kantonen, sondern teils auch zwischen Gemeinden. Es gibt kein einheitliches Verfahren für alle Zuziehenden.</p>
                <p>→ <a href="#/anmeldung-gemeinde-schweiz">Weiterlesen: Anmeldung bei der Gemeinde</a></p>

                <div class="callout">
                    <strong>Praktisches Fazit:</strong> Bevor Sie sich für einen Kanton entscheiden, vergleichen Sie Steuerbelastung, Krankenkassenprämien und Arbeitsmarkt. Diese Wahl wirkt sich über Jahre auf Ihr Budget aus.
                </div>

                <h2 id="educacion">Abschnitt 5 — Das Schweizer Bildungssystem</h2>

                <p>Das Schweizer Bildungssystem ist öffentlich, kostenlos und qualitativ sehr stark. Besonders typisch sind die frühe Berufsorientierung und die zentrale Rolle der dualen Ausbildung.</p>

                <h3>Grundstruktur</h3>
                <ul>
                    <li><strong>Kindergarten:</strong> In den meisten Kantonen zwei Jahre, oft ab vier Jahren obligatorisch.</li>
                    <li><strong>Primarschule:</strong> In der Regel sechs Jahre.</li>
                    <li><strong>Sekundarstufe I:</strong> Meist drei Jahre, danach folgt die eigentliche Weichenstellung.</li>
                </ul>

                <h3>Berufsorientierung in der Sekundarstufe II</h3>
                <p>Mit 15 oder 16 Jahren gehen viele Jugendliche in eine von zwei Hauptrichtungen:</p>
                <ol>
                    <li><strong>Duale Berufsbildung:</strong> Die Mehrheit der Jugendlichen macht eine Lehre in einem Unternehmen und besucht gleichzeitig die Berufsschule. Das führt zum eidgenössischen Fähigkeitszeugnis und ist gesellschaftlich anerkannt.</li>
                    <li><strong>Akademischer Weg:</strong> Wer sehr gute schulische Leistungen hat, geht an ein Gymnasium und bereitet sich auf Universität oder ETH/EPFL vor.</li>
                </ol>

                <h3>Universitäten</h3>
                <p>Die Schweiz verfügt über mehrere starke öffentliche Universitäten, darunter Zürich, Bern, Basel, Genf und Lausanne. ETH Zürich und EPFL Lausanne gehören im Bereich Naturwissenschaften und Technik weltweit zur Spitzengruppe.</p>

                <div class="callout info">
                    <strong>Für neu zugezogene Familien:</strong> Melden Sie schulpflichtige Kinder möglichst im ersten Monat an der öffentlichen Schule Ihrer Gemeinde an. Die Integration in Sprache und Unterricht wird dort aktiv begleitet.
                </div>

                <h2 id="regiones">Abschnitt 6 — Kulturelle und regionale Unterschiede</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="media/guides/mapa-regiones-suiza.png"
                         alt="Mapa de regiones culturales y lingüísticas de Suiza con marcados Deutschschweiz, Romandie y Ticino"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Deutschschweiz, Romandie und Tessin unterscheiden sich deutlich in Rhythmus, Mentalität und sozialem Stil.
                    </figcaption>
                </figure>

                <p>Jenseits der administrativen Grenzen gibt es in der Schweiz drei große Kulturregionen mit stark unterschiedlichem Charakter. Wer das versteht, interpretiert Verhalten, Arbeitswelt und Alltag realistischer.</p>

                <h3>Deutschschweiz</h3>
                <p>Die Deutschschweiz ist wirtschaftlich am stärksten und kulturell oft formeller. Pünktlichkeit, Planbarkeit und direkte Kommunikation zählen hier besonders viel. Der Einstieg kann zunächst kühler wirken, Integration gelingt aber gut mit Sprache und Verlässlichkeit.</p>

                <h3>Romandie</h3>
                <p>Die französischsprachige Schweiz wirkt in vielen Situationen offener und sozial sichtbarer. Städte wie Genf und Lausanne sind stark international geprägt und beherbergen viele Organisationen wie UNO, WHO oder Rotes Kreuz.</p>

                <h3>Tessin</h3>
                <p>Das Tessin hat mediterranes Klima, eine entspanntere Alltagskultur und enge wirtschaftliche Beziehungen zu Italien. Die Lebenshaltungskosten sind oft etwas tiefer als in Zürich oder Genf, allerdings auch die Löhne in manchen Branchen.</p>

                <h2>Zusammenfassung: Was Sie vor der Ankunft wissen sollten</h2>
                <ul>
                    <li>Die Schweiz gehört <strong>nicht zur EU</strong> und hat eigene bilaterale Regeln.</li>
                    <li>Jeder Kanton funktioniert anders. Recherchieren Sie Ihren Kanton vor dem Umzug.</li>
                    <li>Die Sprache des Kantons ist entscheidend für Integration und Arbeit.</li>
                    <li>Die Anmeldung bei der Gemeinde ist meist der erste Schritt nach der Ankunft.</li>
                    <li>Die Krankenversicherung ist ab dem ersten Tag des Wohnsitzes relevant.</li>
                    <li>Die direkte Demokratie gibt Bürgern mehr Einfluss, aber auch mehr Verantwortung.</li>
                </ul>

                <h2>Wichtige Artikel für neue Bewohner</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 1rem;">
                    <a href="#/anmeldung-gemeinde-schweiz" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">📋 Anmeldung in der Schweiz</a>
                    <a href="#/tramites-llegada-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🪪 Aufenthaltsbewilligungen</a>
                    <a href="#/jobsuche-plattformen-und-strategien" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💼 Jobsuche</a>
                    <a href="#/krankenversicherung-schweiz-kvg" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏥 Krankenversicherung KVG</a>
                    <a href="#/wohnung-mieten-schweiz" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏠 Wohnung mieten</a>
                    <a href="#/quellensteuer-schweiz" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💰 Steuern in der Schweiz</a>
                    <a href="#/das-schweizer-schulsystem-erklart" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🎓 Bildungssystem</a>
                    <a href="#/lebenshaltungskosten-in-der-schweiz" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💶 Lebenshaltungskosten</a>
                </div>
            </div>
        `
    },

    "articulo-cantones": {
        title: "Die 26 Kantone der Schweiz: Karte, Hauptstadte und Sprachen",
        description: "Vollstaendiger Leitfaden der 26 Schweizer Kantone: politische Karte, Hauptstadt, Amtssprache und Besonderheiten. Essentiell zum Verstaendnis der Schweiz vor der Ansiedelung.",
        keywords: "kantone schweiz, karte kantone schweiz, 26 kantone, schweizer kanton, unterschiede kantone",
        audience: 'newcomer',
        category: 'Territoriale Organisation',
        hub: 'vivir-en-suiza',
        slug: "kantone-schweiz",
        readingTime: 7,
        dateUpdated: "Maerz 2026",
        summary: "Die Schweiz besteht aus 26 autonomen Kantonen, jeder mit eigenem Steuersystem, Bildungssystem und Verwaltung. Der Kanton, in dem du lebst, aendert fast alles.",
        featuredImage: "media/guides/cantones-suiza.png",
        imageAlt: "Politische Karte der 26 Kantone der Schweiz mit Hauptstaedten und Sprachen",
        content: `
                <p>In der Schweiz ist der Kanton, in dem du dich niederlaesst, genauso wichtig wie das Land selbst. Jeder der 26 Kantone hat seine eigene Regierung, seine eigenen Steuergesetze, sein eigenes Bildungssystem und seine eigene kulturelle Identitaet. Das Verstaendnis dieser Struktur ist essentiell, bevor du dich entscheidest, wo du leben willst.</p>

                <h2>Was ist ein Kanton?</h2>
                <p>Ein Kanton ist die Grundlageneinheit der Helvetischen Konfederation. Es ist das Aequivalent zu dem, was in Spanien eine Autonome Gemeinschaft waere, aber mit viel mehr Befugnissen. Die Kantone existierten vor der Konfederation: Sie vereinigten sich durch gegenseitige Verteidigungspakte, nicht durch zentrale Verpflichtung. Dies erklaert, warum jeder so viel Autonomie behaelt.</p>

                <p>Jeder Kanton hat:</p>
                <ul>
                    <li>Seine eigene Regierung (<em>Conseil d'Etat / Regierungsrat</em>) und sein Kantonalparlament</li>
                    <li>Seine eigenen Gesetze und Steuersaetze (Kanton + Gemeinde)</li>
                    <li>Sein Bildungssystem</li>
                    <li>Seine Kantonalpolizei</li>
                </ul>

                <h2>Die 26 Kantone nach Sprachregion</h2>

                <h3>DEUTSCHSPRACHIGE KANTONE (63% der Bevoelkerung)</h3>

                <h4>Zuerich (Zuerich)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~1,7 Millionen (groesster Kanton)</li>
                    <li><strong>Merkmale:</strong> Wirtschaftszentrum, Bankensektor, Finanzplatz. Sehr international, aber Deutsch ist obligatorisch fuer die Integration.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h4>Bern (Bern)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch (Norden und Zentrum), Franzoesisch (Jura / Sueden)</li>
                    <li><strong>Bevoelkerung:</strong> ~1 Million</li>
                    <li><strong>Merkmale:</strong> Zwei Sprachregionen. Sitz der Bundeshauptstadt. Staedtisch im Norden, laendlich im Sueden.</li>
                    <li><strong>Steuern:</strong> Moderat bis niedrig.</li>
                </ul>

                <h4>Basel-Stadt (Basel)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~196.000</li>
                    <li><strong>Merkmale:</strong> Schweizer Bankenzentrum (mit Zuerich). Sehr international. Pharmazie-Industrie. Kulturell liberal.</li>
                    <li><strong>Steuern:</strong> Sehr niedrig (einer der tiefsten in der Schweiz, daher attraktiv fuer Unternehmen).</li>
                </ul>

                <h4>Luzern (Luzern)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~430.000</li>
                    <li><strong>Merkmale:</strong> Schoene Altstadt, See, zentrale Lage. Touristisch. Kulturell aktiv.</li>
                    <li><strong>Steuern:</strong> Moderat bis hoch.</li>
                </ul>

                <h4>Zug (Zug)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~130.000</li>
                    <li><strong>Merkmale:</strong> Reichster Kanton pro Kopf. Sehr niedrige Steuern. Beliebter fuer Unternehmen und Unternehmer. Teuer zum Leben.</li>
                    <li><strong>Steuern:</strong> Sehr niedrig (fuer Unternehmen und reiche Privatpersonen attraktiv).</li>
                </ul>

                <h4>Schwyz (Schwyz)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~165.000</li>
                    <li><strong>Merkmale:</strong> Rurale, tradicionell. Nahe Zuerich. Ländlich, aber mit guter Infrastruktur.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h4>Appenzell Innerrhoden und Appenzell Ausserrhoden (Appenzell)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch (Schwyzertoetsch-Dialekt)</li>
                    <li><strong>Bevoelkerung:</strong> ~77.000 (Innerrhoden) und ~75.000 (Ausserrhoden)</li>
                    <li><strong>Merkmale:</strong> Klein, sehr tradicionell. Appenzell Innerrhoden ist sehr konservativ. Schoenlandschaft, Textilindustrie historisch.</li>
                    <li><strong>Steuern:</strong> Sehr unterschiedlich. Innerrhoden niedrig, Ausserrhoden moderat.</li>
                </ul>

                <h4>St. Gallen (St. Gallen)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~520.000</li>
                    <li><strong>Merkmale:</strong> Textilhistorie, Industrie. Osten der Schweiz. Kulturelles Zentrum.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h4>Glarus (Glarus)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~41.000</li>
                    <li><strong>Merkmale:</strong> Klein, bergig, bergsteiger-freundlich. Demokratische Traditionen (Landsgemeinde).</li>
                    <li><strong>Steuern:</strong> Niedrig.</li>
                </ul>

                <h4>Nidwalden und Obwalden (Nidwalden / Obwalden)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~43.000 (Nidwalden) und ~48.000 (Obwalden)</li>
                    <li><strong>Merkmale:</strong> Klein, zentral, bergig. Tradicionell. Laendlich.</li>
                    <li><strong>Steuern:</strong> Moderat bis hoch.</li>
                </ul>

                <h4>Uri (Uri)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~37.000</li>
                    <li><strong>Merkmale:</strong> Berg-Kanton (Gotthard-Pass). Sehr Berg-zentriert. Tourismus.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h4>Schaffhausen (Schaffhausen)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~82.000</li>
                    <li><strong>Merkmale:</strong> Norden, an Deutschland grenzend. Rheinfaelle (Touristenattraktion). Industrie.</li>
                    <li><strong>Steuern:</strong> Niedrig bis moderat.</li>
                </ul>

                <h4>Thurgau (Frauenfeld)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch</li>
                    <li><strong>Bevoelkerung:</strong> ~290.000</li>
                    <li><strong>Merkmale:</strong> Osten, an Deutschland grenzend. Landwirtschaft und Industrie. Seen.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h4>Graubuenden (Chur)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch (60%), Italienisch (10%), Romanisch (10%), andere Sprachen (20%)</li>
                    <li><strong>Bevoelkerung:</strong> ~200.000</li>
                    <li><strong>Merkmale:</strong> Groesster Kanton nach Flaeche, aber dank Bergen duenn besiedelt. Drei Sprachen. Bergsteigen-Paradies. Laendlich, touristisch.</li>
                    <li><strong>Steuern:</strong> Niedrig.</li>
                </ul>

                <h3>FRANZOESISCHSPRACHIGE KANTONE (23% - "ROMANDIE")</h3>

                <h4>Genf (Genf)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Franzoesisch</li>
                    <li><strong>Bevoelkerung:</strong> ~525.000</li>
                    <li><strong>Merkmale:</strong> Sitz internationaler Organisationen (UN, Red Crescent, WHO, CERN etc.). Sehr international. Banken. Pharmazie. Teuer.</li>
                    <li><strong>Steuern:</strong> Hoch.</li>
                </ul>

                <h4>Waadt (Lausanne)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Franzoesisch</li>
                    <li><strong>Bevoelkerung:</strong> ~870.000</li>
                    <li><strong>Merkmale:</strong> Wein, See (Lac Leman), Bergion. Kulturzentrum (Theater, Musik). Offen, liberal.</li>
                    <li><strong>Steuern:</strong> Moderat bis hoch.</li>
                </ul>

                <h4>Neuenburg (Neuenburg)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Franzoesisch</li>
                    <li><strong>Bevoelkerung:</strong> ~177.000</li>
                    <li><strong>Merkmale:</strong> Klein, See, Uhren-Industrie historisch. Ort fuer Italiener und andere Einwanderer. Weniger teuer als Genf.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h4>Jura (Delemont)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Franzoesisch</li>
                    <li><strong>Bevoelkerung:</strong> ~73.000</li>
                    <li><strong>Merkmale:</strong> Jungster Kanton (1979 gegruendet, vom Kanton Bern getrennt). Klein, landwirtschaftlich, traditionell, aber modern.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h3>ITALIENISCHSPRACHIG (8% - TESSIN)</h3>

                <h4>Tessin (Bellinzona)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Italienisch</li>
                    <li><strong>Bevoelkerung:</strong> ~355.000</li>
                    <li><strong>Merkmale:</strong> Einziger Kanton suedlich der Alpen. italienische Kultur und Architektur. Wein, Kastanien. Seen. Touristisch, aber weniger teuer als Genf. Warmes Klima.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h3>ZWEISPRACHIGE KANTONE</h3>

                <h4>Wallis (Sion)</h4>
                <ul>
                    <li><strong>Sprache:</strong> Deutsch (Oberwallis), Franzoesisch (Unterwallis)</li>
                    <li><strong>Bevoelkerung:</strong> ~363.000</li>
                    <li><strong>Merkmale:</strong> Alpine Taeler, Weinbau, Tourismus. Interessantes Klima-Verhaeltnis (trocken und warm). Zwei Kulturen in einem Kanton.</li>
                    <li><strong>Steuern:</strong> Moderat.</li>
                </ul>

                <h2>Zusammenfassung: Was sind die Unterschiede?</h2>

                <h3>Steuern</h3>
                <p>Die Unterschiede sind erheblich. Zug und Basel-Stadt sind bekannt fuer ihre niedrigen Steuern. Genf, Zuerich und Luzern sind teurer. Dies ist ein GROSSER Faktor bei der Wahl, wo man lebt.</p>

                <h3>Sprache</h3>
                <p>Sprachregion ist nicht waehlbar. Wenn du in den deutschsprachigen Osten ziehst, musst du Deutsch lernen. Wenn du in den Westen ziehst, Franzoesisch. Es gibt keine Ausnahme.</p>

                <h3>Lebenshaltungskosten</h3>
                <p>Genf ist am teuersten (Wohnung, Lebensmittel). Graubuenden und andere laendliche Kantone sind billiger. Zug ist teuer, aber wenn dein Lohn entsprechend ist, kann es sich lohnen.</p>

                <h3>Bildung</h3>
                <p>Das Bildungsniveau ist hoch in allen Kantonen, aber der Lehrplan kann unterschiedlich sein. Wenn du Kinder hast, ist es wichtig zu beruecksichtigen, wie die Schulen organisiert sind.</p>

                <h3>Kultur und Mentalitaet</h3>
                <p>Deutschsprachige Kantone sind disziplinier und "praktisch". Franzoesischsprachige Kantone sind etwas "liberaler" in ihrer Mentalitaet. Tessin ist italienischer in seiner Kultur (offener, weniger formal). Dies sind Generalisierungen, aber es gibt reale Unterschiede.</p>

                <h2>Welcher Kanton passt zu mir?</h2>

                <p><strong>Fuer die Karriere:</strong> Zuerich (Finanzen, Technologie), Basel (Pharmazie, Chemie), Genf (internationale Organisationen).</p>

                <p><strong>Fuer Familien:</strong> Bern, Zuerich, Luzern (gute Schulen, gute Lebensqualitaet).</p>

                <p><strong>Fuer Sprache:</strong> Wenn Deutsch schwierig ist, Waadt oder Genf (Franzoesisch ist einfacher als Deutsch). Tessin fuer Italienisch-Sprecher (wahrscheinlich am leichtesten).</p>

                <p><strong>Fuer Kosten:</strong> Graubuenden, Jura, kleine laendliche Kantone (billiger). Zug, Genf zu vermeiden, wenn Budget limited.</p>

                <div class="callout tip">
                    <strong>Tipp:</strong> Der Kanton ist essentiell. Verbring Zeit damit, den Kanton auszuwaehlen, bevor du dich fuer eine Stadt entscheidest. Der Kanton bestimmt Steuern, Bildung und Kultur - das sind die Dinge, die am meisten zaehlen.
                </div>
            </div>
        `
    },

    "articulo-lenguas": {
        title: "Sprachen in der Schweiz: Deutsch, Franzoesisch, Italienisch und Romanisch",
        description: "Leitfaden zu den 4 Nationalsprachen der Schweiz: Sprachregionen, zweisprachige Kantone und Tipps fuer Hispanohablante, die ins Land kommen.",
        keywords: "sprachen schweiz, sprachen schweiz, deutsch schweiz, franzoesisch schweiz, italienisch tessin, romanisch, sprachregionen",
        audience: 'newcomer',
        category: 'Kultur und Sprachen',
        hub: 'vivir-en-suiza',
        slug: "sprachen-schweiz",
        readingTime: 5,
        dateUpdated: "Maerz 2026",
        summary: "Die Schweiz hat 4 Nationalsprachen. Die Sprache, die du lernen musst, haengt vollstaendig vom Kanton ab, in dem du dich niederlaesst: Deutsch im Osten und in der Mitte, Franzoesisch im Westen, Italienisch im Tessin.",
        featuredImage: "media/guides/lenguas-suiza.png",
        imageAlt: "Karte der vier Sprachregionen der Schweiz",
        content: `
            <div class="article-content">
                <p>Die Schweiz ist eines der wenigen Laender der Welt mit vier offiziellen Nationalsprachen. Aber es gibt einen haeufigen Fehler bei der Ankunft: zu glauben, dass Englisch ausreichend ist, um dich zu integrieren. Es ist nicht. Die Sprache deines Wohnkantons ist der Schluessel zu Arbeit, Verfahren und sozialer Integration.</p>

                <h2>Die 4 Nationalsprachen</h2>

                <h3>Deutsch — Deutschsprachige Schweiz (Deutschschweiz)</h3>
                <p>Gesprochen von etwa <strong>63%</strong> der Bevoelkerung. Sie umfasst einen grossen zentralen und oestlichen Streifen des Landes: Zuerich, Bern, Basel, Luzern, Zug, Schwyz, St. Gallen und die meisten Kantone des Innenlands.</p>

                <p>Aber es gibt eine grundlegende Nuance: Im taeglichen Leben sprechen deutschsprachige Schweizer nicht Standarddeutsch. Sie sprechen <strong>Schweizerdeutsch</strong>, eine Reihe von Mundarten, die von Kanton zu Kanton variiert und fuer jemanden, der Standarddeutsch gelernt hat, voellig unverstaendlich sein kann. Geschriebene Texte (Vertraege, Briefe, Formulare) sind in Standarddeutsch (<em>Hochdeutsch</em>) verfasst.</p>

                <div class="callout">
                    <strong>Fuer Hispanohablante:</strong> Deutsch ist schwierig, aber absolut erreichbar. Mit Niveau B1 kannst du in den meisten nicht spezialisierten Berufen arbeiten. Viele Deutschkurse in der Schweiz sind kostenlos oder subventioniert fuer Bewohner.
                </div>

                <h3>Franzoesisch — Die Romandie</h3>
                <p>Gesprochen von etwa <strong>23%</strong> der Bevoelkerung. Die Romandie umfasst die westlichen Kantone: Genf, Waadt, Neuchatel, Jura und einen Teil von Bern (die franzoesische Seite). Die Sprache ist vertrautes Franzoesisch, und es gibt hier weniger Variation als in der Deutschsprachigen Schweiz.</p>

                <div class="callout">
                    <strong>Fuer Hispanohablante:</strong> Franzoesisch lernen kann leichter sein als Deutsch, besonders wenn du bereits Latein oder Italienisch kennst. Die Romand (Franzoesischsprachige) sind oft "europaischer" eingestellt und offen gegenueber anderen Sprachen.
                </div>

                <h3>Italienisch — Das Tessin</h3>
                <p>Gesprochen von etwa <strong>8%</strong> der Bevoelkerung, hauptsaechlich im Tessin (Kanton suedlich der Alpen). Das Italienisch ist aehnlich wie das italienische Standard, mit lokalen Variationen und einigen Schweizer Eigenheiten.</p>

                <div class="callout">
                    <strong>Fuer Hispanohablante:</strong> Italienisch zu lernen ist wahrscheinlich das leichteste der vier Sprachen, besonders wenn du aus Spanien kommst. Die romanische Struktur ist aehnlich wie Spanisch.
                </div>

                <h3>Romanisch — Ein kleiner, aber wichtiger Schatz</h3>
                <p>Gesprochen von etwa <strong>0,5%</strong> der Bevoelkerung, fast ausschliesslich in Graubuenden (Kanton in der Ostschweizerischen Ecke). Es ist eine raetoromanische Sprache mit antiken Wurzeln. Es ist eine offizielle Sprache, hat aber praktisch sehr wenig Auswirkung fuer neue Ankoemmling.</p>

                <h2>Zweisprachige Kantone</h2>
                <p>Einige Kantone haben mehr als eine Amtssprache:</p>
                <ul>
                    <li><strong>Bern:</strong> Deutsch im Norden, Franzoesisch im Sueden (die "Jura-Region").</li>
                    <li><strong>Wallis:</strong> Deutsch (Oberwallis) und Franzoesisch (Unterwallis).</li>
                    <li><strong>Graubuenden:</strong> Deutsch, Italienisch und Romanisch (sehr fragmentiert nach Region).</li>
                </ul>

                <p>Wenn du in einen zweisprachigen Kanton zieht, muss du die dominante Sprache deiner Gegend lernen. Der Kanton oder die Gemeinde wird dir sagen, welche Sprache erforderlich ist.</p>

                <h2>Was muss ich lernen? Die praktische Frage</h2>
                <p>Das haengt von mehreren Faktoren ab:</p>

                <h3>1) Dein Kanton</h3>
                <p>Dies ist das Wichtigste. Wenn du in die Deutschsprachige Schweiz zieht, musst du Deutsch (oder zumindest Schweizerdeutsch) lernen. Es gibt kein "umgehen" dieser Anforderung, wenn du arbeiten, integriert sein und in deiner Gemeinde funktionieren willst.</p>

                <h3>2) Dein Arbeitgeber</h3>
                <p>Manche Arbeitsplaetze erfordern die lokale Sprache nicht (z.B. Arbeit in internationalen Organisationen, Technologieunternehmen mit englischsprachigen Teams). Die meisten tun es aber.</p>

                <h3>3) Deine persoenlichen Ziele</h3>
                <p>Wenn du planen, 2-3 Jahre zu bleiben, koennte ein B1 in der lokalen Sprache "genug" sein. Wenn du zum Bleiben planen, ist B2 oder hoeheres notwendig.</p>

                <div class="callout warning">
                    <strong>Wichtig:</strong> Englisch ist NICHT genug. Selbst in Zuerich, dem "internationalen" Zentrum, erwarten Arbeitgeber und Gemeinden mindestens B1 Deutsch von dir. Die Schweiz ist nicht wie Skandinavien, wo Englisch weit verbreitet ist.
                </div>

                <h2>Sprachlevel und Anforderungen</h2>

                <h3>Einstiegsanforderung: A2-B1</h3>
                <p>Um einen Job zu bekommen und in der taeglichen Kommunikation zu funktionieren, wird normalerweise B1 (unabhaengiger Sprecher) erwartet. Das bedeutet, dass du:</p>
                <ul>
                    <li>Arbeitsmeetings folgen kannst.</li>
                    <li>Basisfragen stellen und beantworten kannst.</li>
                    <li>Geschriebene Texte verstehen kannst (Anleitung, E-Mails).</li>
                </ul>

                <h3>Fortgeschritten: B2-C1</h3>
                <p>Fuer leitende Positionen oder Berufe, die starke sprachliche Faehigkeiten erfordern (z.B. Recht, Bildung, Gesundheit), wird B2 oder C1 erwartet.</p>

                <h2>Sprachen lernen in der Schweiz</h2>

                <h3>Kostenlose oder subventionierte Kurse</h3>
                <p>Viele Kantone und Gemeinden bieten kostenlose oder stark subventionierte Sprachkurse an:</p>
                <ul>
                    <li><strong>Volkshochschulen (VHS):</strong> Sehr guenstig (50-200 CHF pro Kurs), haeufig mit Gruppenkursen.</li>
                    <li><strong>Gemeinden:</strong> Viele bieten direktly Integrationskurse an.</li>
                    <li><strong>Arbeitgeber:</strong> Einige Unternehmen zahlen oder teilweise Sprachkurse fuer Mitarbeiter.</li>
                    <li><strong>Online-Ressourcen:</strong> Duolingo, Babbel und andere sind guenstig oder kostenlos.</li>
                </ul>

                <h3>Intensivkurse</h3>
                <p>Wenn du schnell Fortschritt brauchst, gibt es intensive 4-8 Wochen Programme (800-2000 CHF), die dich von A1 zu A2/B1 bringen.</p>

                <h2>Die Herausforderung: Schweizerdeutsch vs. Standarddeutsch</h2>
                <p>Dies ist ein kritischer Punkt. Wenn du Deutsch online lernst, lernst du Standarddeutsch. Aber im Allgemeinen sprechen Schweizer zu Hause und bei der Arbeit Schweizerdeutsch.</p>

                <p><strong>Was bedeutet das praktisch?</strong></p>
                <ul>
                    <li>Geschriebene Kommunikation ist in Standarddeutsch (verstehen kein Problem).</li>
                    <li>Arbeitsmeetings: Formal = Standarddeutsch, Casual = Schweizerdeutsch.</li>
                    <li>Intergration in die Gemeinde: Schweizerdeutsch ist der "In-Dialekt" fuer soziale Integration.</li>
                </ul>

                <p>Mit B1-B2 Standarddeutsch wirst du verstanden und kannst arbeiten. Aber um dich sozial zu integrieren, brauchst du auch etwas Schweizerdeutsch. Gluecklicherweise lernen die meisten Auslaender mit der Zeit durch Exposition ein wenig davon.</p>

                <h2>Zusammenfassung</h2>
                <ol>
                    <li><strong>Waehl deinen Kanton und die Sprache ist entschieden.</strong> Es gibt keine Wahl: es ist Deutsch, Franzoesisch, Italienisch oder Romanisch.</li>
                    <li><strong>Ziel B1 im ersten Jahr:</strong> Das ist erreichbar und ermoeglichst Arbeit und taegliches Leben.</li>
                    <li><strong>Nutze kostenlose Ressourcen:</strong> Viele Gemeinden bieten Kurse an; VHS ist sehr guenstig.</li>
                    <li><strong>Schweizerdeutsch kommt spaeter:</strong> Lerne zuerst Standarddeutsch (oder die jeweilige Standard-Sprache), dann "absorbiere" den lokalen Dialekt ueber die Zeit.</li>
                    <li><strong>Englisch ist nicht genug:</strong> Die Schweiz ist nicht Skandinavien. Englisch ist praktisch nicht nuetzlich fuer Integration.</li>
                </ol>

                <div class="callout tip">
                    <strong>Tipp:</strong> Finde Freunde oder einen Sprachaustausch-Partner in deinem Kanton. Die beste Art, eine Sprache zu lernen, ist durch taegliche Konversation mit echten Menschen.
                </div>
            </div>
        `
    },

    "articulo-consulados": {
        title: "Spanische Konsulate in der Schweiz: Standorte und Dienstleistungen",
        description: "Leitfaden zu den spanischen Konsulaten (Genf, Bern, Zürich): Dienstleistungen, Registrierung, Pass/DNI, Personenstand und Terminbuchung.",
        keywords: "spanisches konsulat schweiz, konsularische registrierung, pass erneuern",
        audience: "newcomer",
        featuredImage: "media/guides/consulados-espanoles-suiza.png",
        category: "Ressourcen",
        hub: "tramites",
        readingTime: 5,
        summary: "Spanien unterhält in der Schweiz drei Generalkonsulate: Genf, Bern und Zürich. Die konsularische Registrierung ist meist der erste wichtige Schritt, denn ohne sie sind Passerneuerung oder Wahlen aus dem Ausland erschwert oder unmöglich.",
        content: `<div class="article-content">
<p>Wenn Sie als spanischer Staatsbürger in der Schweiz leben, ist das Konsulat Ihre offizielle Anlaufstelle für alle Angelegenheiten, die Ihre Auslandslebenssituation mit der spanischen Verwaltung verbinden. Spanien hat drei Generalkonsulate in der Schweiz, und je nach Wohnkanton ist ein anderes zuständig.</p>

<div class="callout info">
  <strong>Erster wichtiger Schritt:</strong> Nach Ihrer Niederlassung in der Schweiz sollten Sie sich im <strong>Registro de Matrícula Consular</strong> eintragen. Ohne diese Registrierung können Sie weder Pass oder DNI aus der Schweiz erneuern noch problemlos an spanischen Wahlen aus dem Ausland teilnehmen.
</div>

<h2>Die drei spanischen Konsulate in der Schweiz</h2>

<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1.25rem; margin:1.5rem 0;">
  <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
    <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Generalkonsulat in Genf</h3>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Zuständige Kantone:</strong> Genf, Waadt, Wallis, Freiburg, Neuenburg, Jura</p>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Adresse:</strong> Avenue Blanc 53, 1202 Genf</p>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Telefon:</strong><br>+41 22 749 14 60</p>
    <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Offizielles Portal →</a>
  </div>
  <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
    <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Generalkonsulat in Bern</h3>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Zuständige Kantone:</strong> Bern, Solothurn, Teile von Freiburg, Teile des Wallis</p>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Adresse:</strong> Marienstrasse 12, 3005 Bern</p>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Telefon:</strong><br>+41 31 356 22 20</p>
    <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Offizielles Portal →</a>
  </div>
  <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
    <h3 style="margin-top:0; color:var(--swiss-red);">🏛️ Generalkonsulat in Zürich</h3>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Zuständige Kantone:</strong> Zürich, Aargau, Basel, Luzern, St. Gallen, Graubünden, Schaffhausen, Thurgau, Tessin, Zug und weitere</p>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Adresse:</strong> Riedtlistrasse 17, 8006 Zürich</p>
    <p style="font-size:0.9rem; margin:0.5rem 0;"><strong>Telefon:</strong><br>+41 44 368 61 00</p>
    <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:0.75rem; padding:0.5rem 1rem; background:var(--swiss-red); color:white; border-radius:var(--radius-sm); text-decoration:none; font-size:0.85rem;">Offizielles Portal →</a>
  </div>
</div>

<h2>Welche Verfahren erledigen Sie dort?</h2>

<h3>Konsularische Registrierung</h3>
<p>Das ist für viele Spanier in der Schweiz der <strong>erste formelle Schritt</strong>. Mit diesem Eintrag werden Sie als im Ausland wohnhafter spanischer Staatsbürger erfasst. Daraus ergeben sich mehrere praktische Folgen:</p>
<ul>
  <li>Sie können DNI und Reisepass in der Schweiz erneuern.</li>
  <li>Sie können bei spanischen Wahlen aus dem Ausland teilnehmen.</li>
  <li>Die spanische Verwaltung kennt Ihren aktuellen Wohnsitz.</li>
</ul>
<p>Die Registrierung ist kostenlos. Normalerweise brauchen Sie einen gültigen DNI oder Reisepass, einen Wohnsitznachweis in der Schweiz und je nach Fall auch die Schweizer Aufenthaltsbewilligung.</p>

<h3>DNI und Reisepass</h3>
<p>DNI und Pass können im zuständigen Konsulat beantragt oder erneuert werden. <strong>Ein Termin ist zwingend</strong>. Die Wartezeiten betragen gerade in Genf und Zürich oft mehrere Wochen.</p>

<div class="callout">
  <strong>Tipp:</strong> Buchen Sie den Termin zwei bis drei Monate vor Ablauf Ihres Dokuments. Kurzfristige Termine sind nicht garantiert.
</div>

<h3>Personenstandsangelegenheiten</h3>
<p>Geburten, Eheschließungen und Todesfälle spanischer Staatsbürger in der Schweiz müssen gegebenenfalls im konsularischen Zivilregister eingetragen werden, damit sie auch im spanischen Register erscheinen.</p>

<h3>Rente und Sozialversicherung</h3>
<p>Die Konsulate geben häufig Orientierung zu Abkommen zwischen Spanien und der Schweiz, zur Zusammenrechnung von Beitragszeiten und zu bestimmten Rentenverfahren.</p>

<h3>Konsularische Hilfe in Notfällen</h3>
<p>Bei Dokumentendiebstahl, schweren Unfällen oder Todesfällen können die Konsulate Notfallhilfe leisten. Für dringende Fälle außerhalb der Öffnungszeiten gibt es in der Regel Bereitschaftsnummern.</p>

<h2>Wie buchen Sie einen Termin?</h2>
<p>Die meisten Verfahren laufen ausschließlich nach Termin. Die offiziellen Portale enthalten die aktuellen Hinweise und Anforderungen:</p>
<ul>
  <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Konsulat in Genf</a></li>
  <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Konsulat in Bern</a></li>
  <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Konsulat in Zürich</a></li>
</ul>

<h2>Nützliche Artikel dazu</h2>
<ul>
  <li><a href="#/anmeldung-gemeinde-schweiz">Anmeldung in der Schweiz nach der Ankunft</a></li>
  <li><a href="#/tramites-llegada-suiza">Aufenthaltsbewilligungen L, B und C</a></li>
  <li><a href="#/checkliste-die-wichtigsten-schritte-im-ersten-monat-in-der-schweiz">Checkliste für den ersten Monat in der Schweiz</a></li>
</ul>
</div>`
    }
};

// Technical SEO: ensure every DE article has a stable, clean slug for canonical URLs and sitemap generation.
    const slugMap = {
	        "articulo-permisos": "tramites-llegada-suiza",
        "articulo-mudarse-suiza": "mudarse-a-suiza-desde-espana",
        "articulo-registro": "anmeldung-gemeinde-schweiz",
        "articulo-lamal": "krankenversicherung-schweiz-kvg",
        "articulo-franquicia": "franchise-und-selbstbehalt-schweiz",
        "articulo-impuestos": "steuern-schweiz",
        "articulo-impuesto-fuente": "quellensteuer-schweiz",
        "articulo-seguros-sociales": "sozialversicherungen-ahv-iv-bvg-und-alv",
        "articulo-rav-paro": "arbeitslosigkeit-rav-schweiz",
        "articulo-salarios": "lohne-in-der-schweiz-nach-branche-und-region",
        "articulo-contratos": "arbeitsvertrage-in-der-schweiz-rechte-und-pflichten",
        "articulo-periodo-prueba": "probezeit-und-kundigungsfristen",
        "articulo-buscar-empleo": "jobsuche-plattformen-und-strategien",
        "articulo-alquiler": "wohnung-mieten-schweiz",
        "articulo-fianzas": "mietkaution-und-mieterrechte",
        "articulo-costo-vida": "lebenshaltungskosten-in-der-schweiz",
        "articulo-frontaliers": "grenzganger-regeln-und-steuern",
        "articulo-diplomas": "anerkennung-auslandischer-diplome",
        "articulo-sistema-escolar": "das-schweizer-schulsystem-erklart",
        "articulo-sistema-salud": "gesundheitssystem-arzte-und-notfalle",
        "articulo-transporte": "offentlicher-verkehr-sbb-halbtax-und-ga",
        "articulo-ciudadania": "schweizer-burgerrecht-und-einburgerung",
        "articulo-tramites-llegada": "checkliste-die-wichtigsten-schritte-im-ersten-monat-in-der-schweiz",
        "articulo-trabajar-sin-permiso-fisico": "arbeiten-bevor-die-bewilligungskarte-da-ist",
        "articulo-reagrupacion-familiar": "familiennachzug-in-der-schweiz-partner-und-kinder-nachholen",
        "articulo-subalquiler": "untermiete-in-der-schweiz-das-wichtigste-rechtlich-and-praktisch",
        "articulo-jubilacion": "rente-in-der-schweiz-was-sie-erwarten-konnen-ahv-avs-bvg-lpp",
        "articulo-vivir-sin-trabajar": "in-der-schweiz-leben-ohne-zu-arbeiten-eu-efta-voraussetzungen",
        "articulo-ai-invalidez": "iv-ai-in-der-schweiz-unterstutzung-und-wiedereingliederung",
        "articulo-vacunas": "impfungen-in-der-schweiz-empfehlungen-statt-pflicht",
        "articulo-danza-patos": "kuriositat-der-ententanz-hat-schweizer-ursprung",
        "articulo-introduccion-suiza": "wie-die-schweiz-funktioniert-guide",
        "articulo-cantones": "die-26-kantone-der-schweiz-was-sich-von-kanton-zu-kanton-andert",
        "articulo-lenguas": "sprachen-in-der-schweiz-deutsch-franzosisch-italienisch-romanisch",
        "articulo-consulados": "spanische-konsulate-schweiz"
    };

    Object.entries(slugMap).forEach(([key, slug]) => {
        if (window.siteContent.de.articles[key]) window.siteContent.de.articles[key].slug = slug;
    });
})();
