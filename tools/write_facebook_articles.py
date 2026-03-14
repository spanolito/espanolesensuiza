#!/usr/bin/env python3
from __future__ import annotations

import argparse
import textwrap
from pathlib import Path


def md(s: str) -> str:
    return textwrap.dedent(s).strip() + "\n"


ARTICLES: dict[str, dict[str, str]] = {
    "sistema-politico-suiza": {
        "es": md(
            """
            ---
            lang: es
            slug: sistema-politico-suiza
            hub: vivir-en-suiza
            seo_title: Cómo funciona el sistema político suizo: Confederación, cantones y comuna
            meta_description: Guía clara del sistema suizo para expatriados: qué decide la Confederación, qué cambia por cantón y qué gestiona tu comuna. Con ejemplos y fuentes oficiales.
            keywords: sistema político suizo, cantones suiza, comuna suiza, confederación suiza, vivir en suiza
            ---

            # Cómo funciona el sistema político suizo: Confederación, cantones y comuna

            ## Introducción
            Muchas confusiones al llegar a Suiza vienen de una idea equivocada: “el país funciona igual en todas partes”.
            Suiza es **federal y descentralizada**. Eso afecta a impuestos, escuela, ciertos trámites y hasta normas locales.

            ## Contexto
            En la práctica, tu vida se rige por **tres niveles**:
            - **Confederación (federal)**: reglas marco, migración (muchas bases), coordinación nacional.
            - **Cantón**: gran parte de la ejecución y normas concretas (impuestos, educación, salud pública, administración).
            - **Comuna (municipio)**: gestión local (registro, basura, ciertos permisos, servicios y tasas).

            ## Explicación detallada
            ### Qué suele ser “federal”
            - Marco legal general y portales nacionales.
            - Coordinación de migración y mercado laboral (con ejecución cantonal).
            - Infraestructura y estadísticas federales.

            ### Qué suele variar por cantón
            - **Impuestos** (carga real y deducciones).
            - **Escuela** (calendario, organización, criterios).
            - **Procedimientos** (citas, formularios, plazos, oficinas).

            ### Qué suele depender de tu comuna
            - Registro al llegar (control de habitantes).
            - Servicios locales (residuos, tasas, comunicación).
            - Reglas de convivencia muy concretas (ruidos, horarios, etc.).

            ## Información práctica
            1) Identifica tu cantón (GE, VD, ZH…) y tu comuna.  
            2) Consulta primero el nivel correcto: **ch.ch** para orientación + **portal cantonal** para reglas aplicables.  
            3) Guarda siempre pruebas: confirmaciones, cartas, emails.

            ## Consejos y alertas
            - Si alguien afirma “en Suiza es así”, pregunta: **¿en qué cantón? ¿en qué comuna?**
            - Para temas sensibles (permisos, impuestos, paro), prioriza fuentes oficiales y evita “atajos”.

            ## Fuentes
            - Portal suizo: https://www.ch.ch
            - Confederación: https://www.admin.ch
            - SEM (migración): https://www.sem.admin.ch
            - SECO (mercado laboral): https://www.seco.admin.ch

            ## Conclusión
            Entender el federalismo suizo te ahorra tiempo: sabrás dónde buscar la norma correcta y por qué dos personas en cantones distintos viven “Suizas” diferentes.

            **Relacionado:** `#/cantones-suiza`, `#/impuestos-en-suiza`, `#/registrarse-en-suiza`
            """
        ),
        "en": md(
            """
            ---
            lang: en
            slug: sistema-politico-suiza
            hub: vivir-en-suiza
            seo_title: How Switzerland works: Confederation, cantons and communes
            meta_description: A clear guide for newcomers: what the federal level decides, what changes by canton, and what your commune manages. With practical examples and official sources.
            keywords: swiss political system, cantons switzerland, commune switzerland, federalism switzerland
            ---

            # How Switzerland works: Confederation, cantons and communes

            ## Introduction
            Many newcomer mistakes come from assuming Switzerland is “the same everywhere”. It is not.
            Switzerland is **federal and highly decentralized**, and daily life depends on your canton and commune.

            ## Context
            Think in three layers:
            - **Federal (Confederation)**: framework rules and nationwide coordination.
            - **Canton**: many concrete rules and implementation (taxes, education, administration).
            - **Commune (municipality)**: local services and procedures (registration, waste, local fees).

            ## Detailed explanation
            ### What is often federal
            - National guidance portals and core frameworks.
            - Migration and labour-market coordination (often implemented cantonally).

            ### What often varies by canton
            - **Taxes** (real burden and deductions).
            - **School system** (structure and calendars).
            - **Administrative procedures** (forms, appointments, processing times).

            ### What often depends on your commune
            - Arrival registration / residents’ office.
            - Local services and fees.
            - Practical coexistence rules (noise, schedules) depending on local rules.

            ## Practical information
            1) Identify your canton and commune.  
            2) Start with **ch.ch** for orientation, then check the **official canton portal** for your exact rules.  
            3) Keep documentation (letters, confirmations, emails).

            ## Tips or warnings
            - If you hear “In Switzerland it’s like this”, ask: **which canton? which commune?**
            - For permits, taxes or unemployment, rely on official sources first.

            ## Sources
            - ch.ch: https://www.ch.ch
            - admin.ch: https://www.admin.ch
            - SEM: https://www.sem.admin.ch
            - SECO: https://www.seco.admin.ch

            ## Conclusion
            Once you understand Swiss federalism, you’ll know where to look and why “two Switzerlands” can coexist across cantons.

            Related: `#/cantones-suiza`, `#/impuestos-en-suiza`, `#/registrarse-en-suiza`
            """
        ),
        "fr": md(
            """
            ---
            lang: fr
            slug: sistema-politico-suiza
            hub: vivir-en-suiza
            seo_title: Comprendre la Suisse : Confédération, cantons et communes
            meta_description: Guide clair pour nouveaux arrivants : ce qui relève du fédéral, ce qui change selon le canton et ce que gère votre commune. Exemples + sources officielles.
            keywords: système politique suisse, fédéralisme suisse, cantons suisse, commune suisse
            ---

            # Comprendre la Suisse : Confédération, cantons et communes

            ## Introduction
            Beaucoup d’erreurs au début viennent d’une idée simple : « la Suisse fonctionne pareil partout ».
            En réalité, la Suisse est **fédérale et très décentralisée**.

            ## Contexte
            Au quotidien, trois niveaux comptent :
            - **Confédération** : cadre général, coordination nationale.
            - **Canton** : règles concrètes et mise en œuvre (impôts, école, administration).
            - **Commune** : démarches locales (inscription, déchets, taxes et services).

            ## Explication détaillée
            ### Ce qui est souvent fédéral
            - Cadre et portails nationaux.
            - Coordination migration / marché du travail (souvent exécutée au niveau cantonal).

            ### Ce qui varie souvent selon le canton
            - **Impôts** (charge réelle, déductions).
            - **École** (organisation, calendrier).
            - **Procédures** (rendez-vous, formulaires, délais).

            ### Ce qui dépend souvent de la commune
            - Inscription à l’arrivée (contrôle des habitants).
            - Services locaux (poubelles, taxes).
            - Règles de voisinage (bruit, horaires) selon règlements locaux.

            ## Infos pratiques
            1) Identifiez votre canton et votre commune.  
            2) Utilisez **ch.ch** pour vous orienter, puis vérifiez le **portail officiel cantonal**.  
            3) Conservez des preuves (courriers, confirmations, emails).

            ## Conseils & alertes
            - « En Suisse, c’est comme ça » n’a de sens qu’avec **canton + commune**.
            - Pour permis, impôts, chômage : priorité aux sources officielles.

            ## Sources
            - ch.ch : https://www.ch.ch
            - admin.ch : https://www.admin.ch
            - SEM : https://www.sem.admin.ch
            - SECO : https://www.seco.admin.ch

            ## Conclusion
            Comprendre le fédéralisme suisse vous fait gagner du temps : vous saurez où chercher la règle correcte.

            Liens : `#/cantones-suiza`, `#/impuestos-en-suiza`, `#/registrarse-en-suiza`
            """
        ),
        "de": md(
            """
            ---
            lang: de
            slug: sistema-politico-suiza
            hub: vivir-en-suiza
            seo_title: Die Schweiz verstehen: Bund, Kantone und Gemeinden
            meta_description: Klarer Leitfaden für Neuankömmlinge: Was der Bund regelt, was je nach Kanton variiert und was die Gemeinde macht. Beispiele + offizielle Quellen.
            keywords: schweizer föderalismus, kantone schweiz, gemeinde schweiz, politisches system schweiz
            ---

            # Die Schweiz verstehen: Bund, Kantone und Gemeinden

            ## Einleitung
            Viele Startprobleme entstehen, weil man denkt: „Die Schweiz ist überall gleich“.
            Die Schweiz ist jedoch **föderal und stark dezentralisiert**.

            ## Kontext
            Drei Ebenen sind entscheidend:
            - **Bund**: Rahmen, nationale Koordination.
            - **Kanton**: konkrete Regeln und Umsetzung (Steuern, Schule, Verwaltung).
            - **Gemeinde**: lokale Abläufe und Dienstleistungen (Anmeldung, Abfall, Gebühren).

            ## Detaillierte Erklärung
            ### Oft auf Bundesebene
            - Nationale Orientierung und Grundrahmen.
            - Koordination Migration/Arbeitsmarkt (häufig kantonal umgesetzt).

            ### Oft kantonal unterschiedlich
            - **Steuern** (Belastung, Abzüge).
            - **Schule** (Struktur, Kalender).
            - **Verfahren** (Termine, Formulare, Bearbeitungszeiten).

            ### Oft gemeindeabhängig
            - Anmeldung nach Zuzug.
            - Lokale Gebühren und Services.
            - Nachbarschaftsregeln (z. B. Lärm) gemäss lokalen Reglementen.

            ## Praktische Hinweise
            1) Kanton und Gemeinde identifizieren.  
            2) Für Überblick **ch.ch**, danach das **kantonale Portal** prüfen.  
            3) Alles dokumentieren (Briefe, Bestätigungen, E-Mails).

            ## Tipps & Warnungen
            - Aussagen wie „In der Schweiz ist das so“ sind ohne **Kanton/Gemeinde** wertlos.
            - Bei Bewilligungen, Steuern, Arbeitslosigkeit: offizielle Quellen zuerst.

            ## Quellen
            - ch.ch: https://www.ch.ch
            - admin.ch: https://www.admin.ch
            - SEM: https://www.sem.admin.ch
            - SECO: https://www.seco.admin.ch

            ## Fazit
            Wer den Föderalismus versteht, findet schneller die richtigen Regeln — und vermeidet teure Fehler.

            Links: `#/cantones-suiza`, `#/impuestos-en-suiza`, `#/registrarse-en-suiza`
            """
        ),
    },
    "democracia-directa-suiza": {
        "es": md(
            """
            ---
            lang: es
            slug: democracia-directa-suiza
            hub: vivir-en-suiza
            seo_title: Democracia directa en Suiza: referéndum, iniciativa y votaciones
            meta_description: Qué es la democracia directa suiza y cómo se decide: referéndums, iniciativas, votaciones y niveles (federal/cantonal/comunal). Guía para expatriados.
            keywords: democracia directa suiza, referéndum suiza, iniciativa suiza, votaciones suiza
            ---

            # Democracia directa en Suiza: referéndum, iniciativa y votaciones

            ## Introducción
            Suiza no solo vota “cada cuatro años”. La ciudadanía participa con frecuencia mediante **votaciones** a distintos niveles.

            ## Contexto
            Hay votaciones:
            - **Federales**
            - **Cantonales**
            - **Comunales**

            Y suelen convivir varios temas el mismo día.

            ## Explicación detallada
            ### Referéndum (idea general)
            Es un mecanismo para **confirmar o rechazar** una decisión normativa. En Suiza, según el tipo de norma, puede ser obligatorio o activarse por recogida de firmas (los detalles dependen del nivel).

            ### Iniciativa (idea general)
            Permite proponer un cambio: en la práctica abre un proceso político y termina en votación si cumple requisitos formales.

            ### Lo importante para un expatriado
            - Muchas decisiones que afectan a tu vida (movilidad, vivienda, reglas locales) pueden estar en votación.
            - El debate suele ser técnico y con material explicativo oficial.
            - No todo el mundo puede votar (depende de nacionalidad, nivel y reglas locales), pero **conviene entenderlo**.

            ## Información práctica
            - Sigue el calendario de votaciones de tu cantón/comuna.
            - Lee el folleto oficial (suele explicar argumentos a favor/en contra).
            - Si un tema te afecta (p. ej. transporte), revisa qué cambia exactamente y desde cuándo.

            ## Consejos y alertas
            - Evita informarte solo por redes: contrasta con el documento oficial.
            - Distingue: “opinión” vs “texto legal que se vota”.

            ## Fuentes
            - Portal suizo: https://www.ch.ch
            - Confederación: https://www.admin.ch

            ## Conclusión
            Entender la democracia directa te ayuda a interpretar noticias, cambios y debates que aparecen “de repente”. En Suiza, muchas cosas cambian por votación.

            Relacionado: `#/introduccion-suiza-como-funciona`, `#/cantones-suiza`
            """
        ),
        "en": md(
            """
            ---
            lang: en
            slug: democracia-directa-suiza
            hub: vivir-en-suiza
            seo_title: Direct democracy in Switzerland: referendums, initiatives and votes
            meta_description: What Swiss direct democracy is and how decisions are made: referendums, popular initiatives and multi-level voting (federal/cantonal/communal). A guide for expats.
            keywords: swiss direct democracy, referendum switzerland, popular initiative switzerland, voting switzerland
            ---

            # Direct democracy in Switzerland: referendums, initiatives and votes

            ## Introduction
            Switzerland does not only vote “every four years”. Citizens vote frequently on concrete topics.

            ## Context
            Votes exist at:
            - **Federal**
            - **Cantonal**
            - **Communal**
            levels — often with multiple questions on the same day.

            ## Detailed explanation
            ### Referendum (high-level)
            A mechanism to confirm or reject a legal/policy decision. Depending on the level and the type of act, it may be automatic or triggered via signature collection.

            ### Popular initiative (high-level)
            A tool to propose change. If formal requirements are met, it can lead to a vote and a broader political process.

            ### Why expats should care
            - Topics can directly affect daily life (transport, local rules, housing).
            - Official explanations are usually available and structured.
            - Voting rights vary (nationality, level, local rules), but understanding the process helps you navigate changes.

            ## Practical information
            - Follow your canton/commune voting calendar.
            - Read official brochures: they summarize arguments and legal effects.
            - Focus on “what changes, when, and for whom”.

            ## Tips or warnings
            - Don’t rely only on social media; verify with official documents.
            - Separate opinions from the actual text being voted on.

            ## Sources
            - ch.ch: https://www.ch.ch
            - admin.ch: https://www.admin.ch

            ## Conclusion
            Understanding Swiss direct democracy makes local debates and sudden policy changes easier to interpret: many changes happen via voting.

            Related: `#/introduccion-suiza-como-funciona`, `#/cantones-suiza`
            """
        ),
        "fr": md(
            """
            ---
            lang: fr
            slug: democracia-directa-suiza
            hub: vivir-en-suiza
            seo_title: Démocratie directe en Suisse : référendums, initiatives et votations
            meta_description: Comprendre la démocratie directe suisse : référendum, initiative populaire et votations aux niveaux fédéral/cantonal/communal. Guide pour expatriés.
            keywords: démocratie directe suisse, référendum suisse, initiative populaire suisse, votations suisse
            ---

            # Démocratie directe en Suisse : référendums, initiatives et votations

            ## Introduction
            En Suisse, on ne vote pas uniquement « tous les 4 ans ». Les citoyennes et citoyens votent régulièrement sur des sujets concrets.

            ## Contexte
            Il existe des votations :
            - **Fédérales**
            - **Cantonales**
            - **Communales**
            souvent le même jour, sur plusieurs objets.

            ## Explication détaillée
            ### Référendum (vue d’ensemble)
            Mécanisme pour accepter ou refuser une décision (souvent une norme). Selon le niveau, il peut être obligatoire ou déclenché par des signatures.

            ### Initiative (vue d’ensemble)
            Outil pour proposer un changement. Si les conditions formelles sont respectées, cela peut mener à une votation.

            ### Pourquoi c’est utile aux expatriés
            - Certaines décisions touchent la vie quotidienne (mobilité, règles locales, logement).
            - Les documents explicatifs officiels sont souvent très pédagogiques.
            - Les droits de vote varient, mais comprendre le système aide à anticiper les changements.

            ## Infos pratiques
            - Suivez le calendrier de votre canton/commune.
            - Lisez les brochures officielles (effets concrets + arguments).
            - Concentrez-vous sur « qui est concerné » et « à partir de quand ».

            ## Conseils & alertes
            - Ne vous informez pas uniquement via les réseaux : vérifiez le document officiel.
            - Distinguez l’opinion du texte réellement soumis au vote.

            ## Sources
            - ch.ch : https://www.ch.ch
            - admin.ch : https://www.admin.ch

            ## Conclusion
            Comprendre la démocratie directe aide à interpréter débats et changements : en Suisse, beaucoup de décisions passent par les urnes.

            Liens : `#/introduccion-suiza-como-funciona`, `#/cantones-suiza`
            """
        ),
        "de": md(
            """
            ---
            lang: de
            slug: democracia-directa-suiza
            hub: vivir-en-suiza
            seo_title: Direkte Demokratie in der Schweiz: Referendum, Initiative und Abstimmungen
            meta_description: Was direkte Demokratie in der Schweiz bedeutet: Referenden, Volksinitiativen und Abstimmungen auf Bundes-, Kantons- und Gemeindeebene. Guide für Expats.
            keywords: direkte demokratie schweiz, referendum schweiz, volksinitiative schweiz, abstimmungen schweiz
            ---

            # Direkte Demokratie in der Schweiz: Referendum, Initiative und Abstimmungen

            ## Einleitung
            In der Schweiz wird nicht nur „alle vier Jahre“ gewählt. Es gibt regelmässige Abstimmungen über konkrete Themen.

            ## Kontext
            Abstimmungen finden statt auf:
            - **Bundesebene**
            - **Kantonsebene**
            - **Gemeindeebene**
            oft mit mehreren Vorlagen am gleichen Tag.

            ## Detaillierte Erklärung
            ### Referendum (überblick)
            Ein Instrument, um eine Entscheidung (oft ein Gesetz) zu bestätigen oder abzulehnen. Je nach Ebene kann es automatisch sein oder durch Unterschriften ausgelöst werden.

            ### Volksinitiative (überblick)
            Ein Weg, Änderungen vorzuschlagen. Wenn formale Voraussetzungen erfüllt sind, kann es zu einer Abstimmung kommen.

            ### Warum Expats das verstehen sollten
            - Vorlagen betreffen oft den Alltag (Mobilität, lokale Regeln, Wohnen).
            - Offizielle Erklärungen sind häufig gut strukturiert.
            - Stimmrechte variieren, aber das Prozessverständnis hilft, Änderungen einzuordnen.

            ## Praktische Hinweise
            - Kalender des Kantons/der Gemeinde verfolgen.
            - Offizielle Broschüren lesen (Wirkung + Pro/Contra).
            - Fokus: „Was ändert sich? ab wann? für wen?“

            ## Tipps & Warnungen
            - Nicht nur Social Media: offizielle Dokumente prüfen.
            - Meinung vs. tatsächlicher Abstimmungstext trennen.

            ## Quellen
            - ch.ch: https://www.ch.ch
            - admin.ch: https://www.admin.ch

            ## Fazit
            Wer die direkte Demokratie versteht, kann Debatten und plötzliche Änderungen besser einordnen: Vieles wird in der Schweiz an der Urne entschieden.

            Links: `#/introduccion-suiza-como-funciona`, `#/cantones-suiza`
            """
        ),
    },
    # The remaining 8 slugs are written below in a compact but topic-specific way.
}


def add_remaining_articles() -> None:
    ARTICLES.update(
        {
            "rav-paro-suiza": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: rav-paro-suiza
                    hub: trabajo
                    seo_title: RAV y paro en Suiza: cómo funciona el desempleo, requisitos y pasos
                    meta_description: Guía práctica del seguro de desempleo en Suiza (ALV/AC): inscripción en el RAV, caja de paro, plazos, obligaciones, sanciones y documentación.
                    keywords: rav suiza, paro suiza, desempleo suiza, alv ac, seguro desempleo suiza
                    ---

                    # RAV y paro en Suiza: cómo funciona el desempleo, requisitos y pasos

                    ## Introducción
                    El “paro” en Suiza no es solo cobrar una prestación. Es un proceso con seguimiento, plazos y pruebas de búsqueda de empleo.

                    ## Contexto
                    Intervienen dos actores:
                    - **RAV**: acompañamiento, citas, medidas de reinserción.
                    - **Caja de desempleo**: evalúa el derecho y paga la prestación.

                    ## Explicación detallada
                    ### Pasos recomendados
                    1) Inscríbete lo antes posible (no esperes al último día).  
                    2) Elige una caja y reúne documentos (contrato, carta de fin, nóminas, permiso).  
                    3) Empieza a documentar candidaturas desde el primer día.  
                    4) Cumple citas y entregas de justificantes.

                    ### Obligaciones típicas
                    - búsqueda demostrable
                    - aceptar medidas razonables
                    - entregar documentación a tiempo

                    ### Errores frecuentes
                    - perder plazos
                    - no guardar pruebas
                    - dimitir sin entender consecuencias (puede haber sanciones)

                    ## Información práctica
                    - Usa una hoja de seguimiento (fecha, empresa, puesto, evidencia).
                    - Guarda emails y capturas.

                    ## Consejos y alertas
                    Si el RAV o la caja pide algo, responde por escrito y con margen. En Suiza, la documentación “manda”.

                    ## Fuentes
                    - ch.ch (desempleo): https://www.ch.ch/es/trabajo/desempleo/
                    - SECO: https://www.seco.admin.ch

                    ## Conclusión
                    Con método, el sistema funciona. Sin método, lo que se pierde suele ser tiempo… y dinero.

                    Relacionado: `#/buscar-empleo-suiza`, `#/contratos-de-trabajo-suiza`, `#/seguros-sociales-suiza`
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: rav-paro-suiza
                    hub: trabajo
                    seo_title: RAV and unemployment in Switzerland: how it works, steps and obligations
                    meta_description: Practical guide to Swiss unemployment insurance (ALV/AC): RAV registration, unemployment fund, deadlines, obligations, sanctions and documentation.
                    keywords: rav switzerland, unemployment switzerland, alv ac, unemployment insurance switzerland
                    ---

                    # RAV and unemployment in Switzerland: how it works, steps and obligations

                    ## Introduction
                    Unemployment support in Switzerland is not just a payment. It’s a structured process with deadlines and documented job search.

                    ## Context
                    Two key actors:
                    - **RAV**: coaching, appointments, reintegration measures.
                    - **Unemployment fund**: checks eligibility and pays benefits.

                    ## Detailed explanation
                    Recommended steps:
                    1) register early  
                    2) choose a fund and collect documents  
                    3) document job applications from day one  
                    4) attend appointments and submit evidence on time

                    Typical obligations: provable job search, reasonable measures, timely paperwork.
                    Common mistakes: missed deadlines, missing evidence, resigning without understanding consequences.

                    ## Practical information
                    Use an application tracker (date, company, role, evidence) and keep emails/screenshots.

                    ## Tips or warnings
                    In Switzerland, documentation wins. Reply in writing and ahead of deadlines.

                    ## Sources
                    - ch.ch: https://www.ch.ch/en/work/unemployment/
                    - SECO: https://www.seco.admin.ch

                    ## Conclusion
                    With a method, the system works. Without it, you often lose time—and money.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: rav-paro-suiza
                    hub: trabajo
                    seo_title: RAV et chômage en Suisse : fonctionnement, démarches et obligations
                    meta_description: Guide pratique (AC/ALV) : inscription au RAV, caisse de chômage, délais, obligations, sanctions et documents à conserver.
                    keywords: rav suisse, chômage suisse, alv ac, assurance chômage suisse
                    ---

                    # RAV et chômage en Suisse : fonctionnement, démarches et obligations

                    ## Introduction
                    Le chômage en Suisse est un processus encadré : délais, rendez-vous et preuves de recherche d’emploi.

                    ## Contexte
                    Deux acteurs :
                    - **RAV** : suivi, rendez-vous, mesures.
                    - **Caisse** : vérifie le droit et verse l’indemnité.

                    ## Explication détaillée
                    Démarches :
                    1) s’inscrire rapidement  
                    2) choisir une caisse + documents  
                    3) documenter les candidatures dès le début  
                    4) respecter les rendez-vous et délais

                    Obligations : recherche prouvable, démarches raisonnables, papiers à temps.
                    Erreurs : délais manqués, preuves perdues, démission sans mesurer l’impact.

                    ## Infos pratiques
                    Suivi des candidatures + conservation emails/captures.

                    ## Conseils & alertes
                    En Suisse, les preuves comptent : répondre par écrit et avec marge.

                    ## Sources
                    - ch.ch : https://www.ch.ch/fr/travail/chomage/
                    - SECO : https://www.seco.admin.ch

                    ## Conclusion
                    Avec méthode, ça marche. Sans méthode, on perd vite du temps… et parfois de l’argent.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: rav-paro-suiza
                    hub: trabajo
                    seo_title: RAV und Arbeitslosigkeit in der Schweiz: Ablauf, Schritte und Pflichten
                    meta_description: Praxisguide (ALV): Anmeldung beim RAV, Arbeitslosenkasse, Fristen, Pflichten, Sanktionen und Dokumentation.
                    keywords: rav schweiz, arbeitslosigkeit schweiz, alv, arbeitslosenversicherung schweiz
                    ---

                    # RAV und Arbeitslosigkeit in der Schweiz: Ablauf, Schritte und Pflichten

                    ## Einleitung
                    Arbeitslosigkeit in der Schweiz ist ein strukturierter Prozess: Fristen, Termine und nachweisbare Stellensuche.

                    ## Kontext
                    Zwei Stellen:
                    - **RAV**: Betreuung, Termine, Massnahmen.
                    - **Kasse**: prüft Anspruch und zahlt Leistungen.

                    ## Detaillierte Erklärung
                    Schritte:
                    1) früh anmelden  
                    2) Kasse wählen + Unterlagen sammeln  
                    3) Bewerbungen von Beginn an dokumentieren  
                    4) Termine/Fristen einhalten

                    Pflichten: nachweisbare Suche, zumutbare Massnahmen, pünktliche Abgabe.
                    Fehler: Fristen verpassen, Nachweise verlieren, kündigen ohne Folgen zu kennen.

                    ## Praktische Hinweise
                    Bewerbungs-Tracker führen und E-Mails/Screenshots sichern.

                    ## Tipps & Warnungen
                    In der Schweiz zählen Nachweise: schriftlich reagieren und mit Zeitreserve.

                    ## Quellen
                    - ch.ch: https://www.ch.ch/de/arbeit/arbeitslosigkeit/
                    - SECO: https://www.seco.admin.ch

                    ## Fazit
                    Mit Methode funktioniert es. Ohne Methode verliert man schnell Zeit—und manchmal Geld.
                    """
                ),
            },
            "seguro-medico-lamal-elegir": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: seguro-medico-lamal-elegir
                    hub: salud
                    seo_title: Cómo elegir seguro médico (LAMal) en Suiza: modelo, franquicia y prima
                    meta_description: Guía para elegir LAMal en Suiza: modelos (HMO/medico de cabecera/telmed), franquicia, copago, cambio anual y errores frecuentes. Con fuentes oficiales.
                    keywords: lamal suiza, seguro medico suiza, franquicia suiza, prima suiza, hmo telmed
                    ---

                    # Cómo elegir seguro médico (LAMal) en Suiza: modelo, franquicia y prima

                    ## Introducción
                    En Suiza, el seguro básico (LAMal/KVG) es obligatorio y **cubre lo mismo** en todas las aseguradoras. Lo que cambia es el precio, el modelo y el servicio.

                    ## Contexto
                    Para no equivocarte, separa tres decisiones:
                    1) **Aseguradora** (precio/servicio)  
                    2) **Modelo** (libre elección vs médico de cabecera vs telmed vs HMO)  
                    3) **Franquicia** (cuánto pagas tú antes de que el seguro empiece a reembolsar)

                    ## Explicación detallada
                    ### Modelos (idea práctica)
                    - **Standard**: más libertad, suele ser más caro.
                    - **Médico de cabecera**: coordinación por un médico principal.
                    - **Telmed**: primero llamas; luego te derivan.
                    - **HMO**: red/centro médico asignado.

                    ### Franquicia + copago (visión general)
                    - La franquicia es el “umbral” anual que pagas antes de reembolso.
                    - Después suele existir participación (copago) hasta un tope.
                    - Elegir franquicia alta baja la prima, pero aumenta tu riesgo de gasto.

                    ### Cambio de seguro
                    En general, el cambio se prepara con antelación y tiene plazos (por eso conviene comparar en otoño).

                    ## Información práctica
                    - Si casi no vas al médico y tienes colchón, una franquicia más alta puede tener sentido.
                    - Si tienes gastos previsibles, una franquicia más baja reduce incertidumbre.
                    - Revisa también: cobertura de accidentes (si tu empleo ya la cubre) y seguros complementarios (separados).

                    ## Consejos y alertas
                    - No elijas solo por prima: mira también la regla del modelo (telmed/HMO) y si encaja contigo.
                    - Complementarios: pueden tener cuestionario médico; no son “automáticos”.

                    ## Fuentes
                    - ch.ch (seguro): https://www.ch.ch
                    - Oficina Federal de Salud Pública (BAG/OFSP): https://www.bag.admin.ch
                    - Priminfo (comparador oficial, según disponibilidad): https://www.priminfo.admin.ch

                    ## Conclusión
                    Elegir bien LAMal es una combinación de riesgo + hábitos + disciplina: modelo adecuado, franquicia coherente y comparación anual.

                    Relacionado: `#/seguro-medico-lamal-suiza`, `#/franquicia-seguro-medico-suiza`
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: seguro-medico-lamal-elegir
                    hub: salud
                    seo_title: How to choose Swiss health insurance (LAMal/KVG): model, deductible and premium
                    meta_description: Practical guide to choosing LAMal in Switzerland: models (standard/GP/telmed/HMO), deductible, cost sharing, annual switching and common pitfalls. With official sources.
                    keywords: lamal switzerland, swiss health insurance, deductible switzerland, premium switzerland, hmo telmed
                    ---

                    # How to choose Swiss health insurance (LAMal/KVG): model, deductible and premium

                    ## Introduction
                    The basic mandatory insurance (LAMal/KVG) covers the same legally required benefits across insurers. What changes is the price, the care model and service quality.

                    ## Context
                    Split the choice into three decisions:
                    1) insurer (price/service)  
                    2) model (standard vs GP vs telmed vs HMO)  
                    3) deductible (how much you pay before reimbursements)

                    ## Detailed explanation
                    - **Models**: standard (more freedom), GP, telmed, HMO (network).
                    - **Deductible + cost sharing**: higher deductible lowers premium but increases out‑of‑pocket risk.
                    - **Switching**: typically planned ahead with deadlines (compare in autumn).

                    ## Practical information
                    - Low usage + financial buffer → higher deductible may fit.
                    - Predictable costs → lower deductible can reduce uncertainty.
                    - Accident coverage and complementary insurance are separate topics.

                    ## Tips or warnings
                    - Don’t choose only by premium; verify the model rules fit your habits.
                    - Complementary insurance may require health questionnaires.

                    ## Sources
                    - ch.ch: https://www.ch.ch
                    - FOPH (BAG): https://www.bag.admin.ch
                    - Priminfo (official comparator): https://www.priminfo.admin.ch

                    ## Conclusion
                    A good LAMal choice balances risk, habits and budget: pick the right model, a coherent deductible, and review yearly.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: seguro-medico-lamal-elegir
                    hub: salud
                    seo_title: Choisir l’assurance maladie en Suisse (LAMal) : modèle, franchise et prime
                    meta_description: Guide pratique : modèles (standard/médecin de famille/telmed/HMO), franchise, quote-part, changement annuel et pièges fréquents. Sources officielles.
                    keywords: lamal suisse, assurance maladie suisse, franchise suisse, prime suisse, hmo telmed
                    ---

                    # Choisir l’assurance maladie en Suisse (LAMal) : modèle, franchise et prime

                    ## Introduction
                    L’assurance de base (LAMal/KVG) est obligatoire. Les prestations obligatoires sont identiques entre assureurs ; ce qui change surtout : la prime, le modèle et le service.

                    ## Contexte
                    Trois décisions séparées :
                    1) assureur (prix/service)  
                    2) modèle (standard / médecin de famille / telmed / HMO)  
                    3) franchise (montant à payer avant remboursement)

                    ## Explication détaillée
                    - **Modèles** : standard (plus de liberté), médecin de famille, telmed, HMO (réseau/centre).
                    - **Franchise + quote-part** : franchise plus haute = prime plus basse mais plus de risque.
                    - **Changement** : généralement à planifier avec des délais (comparaison en automne).

                    ## Infos pratiques
                    - Peu de soins + marge financière → franchise plus haute possible.
                    - Coûts prévisibles → franchise plus basse pour limiter l’incertitude.
                    - Assurance accident et complémentaires sont des sujets séparés.

                    ## Conseils & alertes
                    - Ne choisissez pas uniquement la prime : vérifiez les règles du modèle.
                    - Les complémentaires peuvent exiger un questionnaire santé.

                    ## Sources
                    - ch.ch : https://www.ch.ch
                    - OFSP (BAG) : https://www.bag.admin.ch
                    - Priminfo : https://www.priminfo.admin.ch

                    ## Conclusion
                    Bien choisir LAMal = équilibre entre risque, habitudes et budget, avec une révision annuelle.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: seguro-medico-lamal-elegir
                    hub: salud
                    seo_title: Krankenversicherung in der Schweiz (LAMal/KVG) wählen: Modell, Franchise und Prämie
                    meta_description: Praxisguide: Modelle (Standard/Hausarzt/Telmed/HMO), Franchise, Kostenbeteiligung, Wechsel und typische Fehler. Mit offiziellen Quellen.
                    keywords: lamal schweiz, krankenkasse schweiz, franchise schweiz, prämie schweiz, hmo telmed
                    ---

                    # Krankenversicherung in der Schweiz (LAMal/KVG) wählen: Modell, Franchise und Prämie

                    ## Einleitung
                    Die Grundversicherung ist obligatorisch. Die gesetzlich vorgeschriebenen Leistungen sind gleich; Unterschiede gibt es bei Prämie, Modell und Service.

                    ## Kontext
                    Drei getrennte Entscheidungen:
                    1) Versicherer (Preis/Service)  
                    2) Modell (Standard/Hausarzt/Telmed/HMO)  
                    3) Franchise (Selbstbehalt vor Erstattung)

                    ## Detaillierte Erklärung
                    - **Modelle**: Standard (mehr Freiheit), Hausarzt, Telmed, HMO (Netzwerk).
                    - **Franchise + Kostenbeteiligung**: hohe Franchise senkt Prämie, erhöht aber Risiko.
                    - **Wechsel**: meist mit Fristen — Vergleich im Herbst sinnvoll.

                    ## Praktische Hinweise
                    - Wenig Arztbesuche + finanzielles Polster → höhere Franchise kann passen.
                    - Planbare Kosten → tiefere Franchise reduziert Unsicherheit.
                    - Unfalldeckung und Zusatzversicherungen separat prüfen.

                    ## Tipps & Warnungen
                    - Nicht nur nach Prämie entscheiden; Modellregeln prüfen.
                    - Zusatzversicherungen können Gesundheitsfragen enthalten.

                    ## Quellen
                    - ch.ch: https://www.ch.ch
                    - BAG: https://www.bag.admin.ch
                    - Priminfo: https://www.priminfo.admin.ch

                    ## Fazit
                    Gute Wahl = Modell passend + Franchise sinnvoll + jährlicher Vergleich.
                    """
                ),
            },
            "costo-de-vida-suiza": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: costo-de-vida-suiza
                    hub: vivir-en-suiza
                    seo_title: Costo de vida en Suiza: presupuesto realista y gastos invisibles
                    meta_description: Cómo estimar tu coste de vida en Suiza: alquiler, seguro médico, impuestos, transporte y “gastos invisibles”. Ejemplos por cantón y consejos.
                    keywords: costo de vida suiza, vivir en suiza, alquiler suiza, seguro medico suiza, presupuesto suiza
                    ---

                    # Costo de vida en Suiza: presupuesto realista y gastos invisibles

                    ## Introducción
                    El coste de vida en Suiza no es solo “caro”. Es **previsible** si haces un presupuesto correcto desde el inicio.

                    ## Contexto
                    Tus grandes variables son:
                    - cantón/ciudad (alquiler y primas LAMal)
                    - situación familiar
                    - transporte (abonos) y hábitos

                    ## Explicación detallada
                    ### Las 5 partidas que más mueven el presupuesto
                    1) **Alquiler + gastos** (y depósito/fianza inicial)  
                    2) **Seguro médico** (primas + franquicia)  
                    3) **Impuestos** (según cantón y situación)  
                    4) **Transporte** (Halbtax/AG, zona urbana)  
                    5) **Guardería/Kita** (si aplica)

                    ### Gastos invisibles típicos
                    - mudanza y mobiliario
                    - seguros (RC hogar), móvil/internet
                    - tasas comunales (según lugar)
                    - adelantos (depósitos, primeras facturas)

                    ## Información práctica
                    - Empieza por “mínimo seguro”: vivienda + salud + transporte básico.
                    - Reserva un colchón para el primer mes (depósitos y sorpresas).
                    - Ajusta por cantón: no tiene sentido comparar Zúrich y una ciudad pequeña igual.

                    ## Consejos y alertas
                    - No calcules solo con el salario bruto: mira el neto y retenciones.
                    - Si eres recién llegado, evita comprometerte con gastos fijos demasiado altos al principio.

                    ## Fuentes
                    - ch.ch: https://www.ch.ch
                    - Estadística (BFS): https://www.bfs.admin.ch

                    ## Conclusión
                    Un presupuesto realista convierte “Suiza es cara” en una lista concreta: qué pagas, cuándo y cómo optimizarlo.

                    Relacionado: `#/presupuesto-suiza`, `#/transporte-publico-suiza`, `#/seguro-medico-lamal-suiza`
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: costo-de-vida-suiza
                    hub: vivir-en-suiza
                    seo_title: Cost of living in Switzerland: a realistic budget and hidden costs
                    meta_description: How to budget for Switzerland: rent, health insurance, taxes, transport and “hidden costs”. Practical guidance for newcomers.
                    keywords: cost of living switzerland, budget switzerland, rent switzerland, health insurance switzerland
                    ---

                    # Cost of living in Switzerland: a realistic budget and hidden costs

                    ## Introduction
                    Switzerland is expensive, but it becomes manageable when your budget is realistic and structured.

                    ## Context
                    Main variables: canton/city (rent + insurance premiums), family situation, transport needs and habits.

                    ## Detailed explanation
                    Biggest budget drivers:
                    1) rent + utilities (plus initial deposits)  
                    2) health insurance premiums + deductible  
                    3) taxes (vary by canton)  
                    4) transport passes  
                    5) childcare (if relevant)

                    Typical “hidden” costs: moving, furniture, liability insurance, mobile/internet, municipal fees, upfront payments.

                    ## Practical information
                    - Build a baseline budget: housing + health + basic transport.
                    - Keep a buffer for the first month (deposits and surprises).
                    - Compare within similar regions; Zurich ≠ small-town budgets.

                    ## Tips or warnings
                    - Don’t plan with gross salary; focus on net and withholdings.
                    - Avoid locking in high fixed costs too early.

                    ## Sources
                    - ch.ch: https://www.ch.ch
                    - BFS: https://www.bfs.admin.ch

                    ## Conclusion
                    A good budget turns “it’s expensive” into a concrete plan: what you pay, when, and where you can optimize.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: costo-de-vida-suiza
                    hub: vivir-en-suiza
                    seo_title: Coût de la vie en Suisse : budget réaliste et dépenses cachées
                    meta_description: Comment budgéter en Suisse : loyer, assurance maladie, impôts, transports et dépenses “invisibles”. Conseils pour nouveaux arrivants.
                    keywords: cout de la vie suisse, budget suisse, loyer suisse, assurance maladie suisse
                    ---

                    # Coût de la vie en Suisse : budget réaliste et dépenses cachées

                    ## Introduction
                    La Suisse est chère, mais un budget bien construit rend les coûts plus prévisibles.

                    ## Contexte
                    Variables clés : canton/ville (loyer + primes), situation familiale, transports et habitudes.

                    ## Explication détaillée
                    Postes majeurs :
                    1) loyer + charges (avec dépôts)  
                    2) primes + franchise  
                    3) impôts (varient selon canton)  
                    4) abonnements de transport  
                    5) garde d’enfants (si nécessaire)

                    Dépenses cachées : déménagement, mobilier, assurance RC, mobile/internet, taxes communales, avances.

                    ## Infos pratiques
                    - Construire un budget “socle”.
                    - Prévoir un coussin pour le premier mois.
                    - Comparer des régions similaires (Zurich ≠ petite ville).

                    ## Conseils & alertes
                    - Travailler avec le salaire net.
                    - Éviter les charges fixes trop élevées au début.

                    ## Sources
                    - ch.ch : https://www.ch.ch
                    - BFS : https://www.bfs.admin.ch

                    ## Conclusion
                    Un budget réaliste transforme « c’est cher » en plan clair : quoi, quand, et comment optimiser.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: costo-de-vida-suiza
                    hub: vivir-en-suiza
                    seo_title: Lebenshaltungskosten in der Schweiz: realistisches Budget und versteckte Kosten
                    meta_description: Budgetieren in der Schweiz: Miete, Krankenkasse, Steuern, Transport und versteckte Kosten. Tipps für Neuankömmlinge.
                    keywords: lebenshaltungskosten schweiz, budget schweiz, miete schweiz, krankenkasse schweiz
                    ---

                    # Lebenshaltungskosten in der Schweiz: realistisches Budget und versteckte Kosten

                    ## Einleitung
                    Die Schweiz ist teuer, aber mit einem realistischen Budget werden Kosten planbarer.

                    ## Kontext
                    Hauptfaktoren: Kanton/Stadt (Miete + Prämien), Familie, Mobilität, Lebensstil.

                    ## Detaillierte Erklärung
                    Größte Budgettreiber:
                    1) Miete + Nebenkosten (inkl. Kaution)  
                    2) Krankenkassenprämie + Franchise  
                    3) Steuern (kantonal unterschiedlich)  
                    4) ÖV-Abos  
                    5) Kinderbetreuung (falls relevant)

                    Versteckte Kosten: Umzug, Möbel, Haftpflicht, Internet/Mobil, Gemeindegebühren, Vorauszahlungen.

                    ## Praktische Hinweise
                    - Basisbudget zuerst.
                    - Puffer für den ersten Monat.
                    - Region fair vergleichen.

                    ## Tipps & Warnungen
                    - Mit Nettolohn rechnen.
                    - Zu hohe Fixkosten am Anfang vermeiden.

                    ## Quellen
                    - ch.ch: https://www.ch.ch
                    - BFS: https://www.bfs.admin.ch

                    ## Fazit
                    Ein gutes Budget macht aus “teuer” einen konkreten Plan mit Optimierungspunkten.
                    """
                ),
            },
            "alquilar-en-suiza-evitar-estafas": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: alquilar-en-suiza-evitar-estafas
                    hub: vivienda
                    seo_title: Alquilar en Suiza: pasos, dossier, fianza y cómo evitar estafas
                    meta_description: Guía para alquilar piso en Suiza: cómo preparar el dossier, contrato, fianza/depósito y señales de estafa (alquiler). Consejos para recién llegados.
                    keywords: alquilar suiza, alquiler suiza, fianza suiza, asloca, estafa alquiler suiza
                    ---

                    # Alquilar en Suiza: pasos, dossier, fianza y cómo evitar estafas

                    ## Introducción
                    El alquiler en Suiza funciona con mucha documentación. Eso protege al propietario… y también puede protegerte a ti si sabes qué pedir.

                    ## Contexto
                    Los dos problemas típicos del recién llegado:
                    - no tener “dossier” convincente
                    - caer en estafas por prisa o desconocimiento

                    ## Explicación detallada
                    ### Paso a paso (visión realista)
                    1) Buscar (portales, agencias, anuncios).  
                    2) Visitar y postular con dossier.  
                    3) Revisión/selección (puede haber competencia).  
                    4) Firma + entrega de llaves + alta de servicios.

                    ### Qué suele llevar un dossier
                    - documento de identidad / permiso (si aplica)
                    - contrato de trabajo o prueba de ingresos
                    - extracto de deudas (Betreibung) si ya resides
                    - carta breve de presentación

                    ### Fianza / depósito
                    Suele bloquearse como garantía. Exige un procedimiento claro y comprobable.

                    ### Señales de estafa
                    - te piden dinero por adelantado sin contrato verificable
                    - “no se puede visitar” y hay presión por pagar hoy
                    - comunicación rara, cuentas en el extranjero, excusas inconsistentes

                    ## Información práctica
                    - Lleva un Excel/tabla de candidaturas.
                    - Guarda capturas y emails del anuncio.
                    - Si dudas, pide contrato y datos verificables antes de transferir.

                    ## Consejos y alertas
                    - En Suiza, la prisa es el enemigo: verifica.
                    - Si algo no cuadra, pasa al siguiente anuncio.

                    ## Fuentes
                    - ch.ch (vivienda): https://www.ch.ch
                    - Asociaciones de inquilinos (según cantón; p. ej. ASLOCA en Romandía).

                    ## Conclusión
                    Con dossier sólido + verificación, alquilar es un proceso repetible. Sin eso, el riesgo de estafa sube.

                    Relacionado: `#/alquilar-vivienda-suiza`, `#/fianzas-alquiler-suiza`
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: alquilar-en-suiza-evitar-estafas
                    hub: vivienda
                    seo_title: Renting in Switzerland: applications, deposit and how to avoid scams
                    meta_description: Practical guide: rental application dossier, contract, deposits and common scam signals. For newcomers renting a flat in Switzerland.
                    keywords: rent switzerland, rental deposit switzerland, rental scam switzerland, tenant association
                    ---

                    # Renting in Switzerland: applications, deposit and how to avoid scams

                    ## Introduction
                    Renting in Switzerland is documentation-heavy. That can work in your favour—if you know what to ask and what to verify.

                    ## Context
                    Newcomers often struggle with a weak application dossier and can become vulnerable to scam pressure.

                    ## Detailed explanation
                    - Typical process: search → visit → apply → selection → sign → keys.
                    - Dossier usually includes ID/permit, proof of income, debt register extract (if available), short introduction.
                    - Deposits must follow a clear, verifiable procedure.
                    - Scam signals: upfront money without a verifiable contract, “no visits”, urgency tactics, inconsistent payment details.

                    ## Practical information
                    - Track applications and keep evidence.
                    - Never transfer money without a solid contract and verified counterpart.

                    ## Tips or warnings
                    - Urgency is the scammer’s tool—verify first.
                    - If it feels wrong, move on.

                    ## Sources
                    - ch.ch: https://www.ch.ch

                    ## Conclusion
                    A strong dossier plus verification makes renting repeatable—and dramatically reduces scam risk.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: alquilar-en-suiza-evitar-estafas
                    hub: vivienda
                    seo_title: Louer en Suisse : dossier, dépôt et éviter les arnaques
                    meta_description: Guide pratique : dossier de location, contrat, dépôt/caution et signaux d’arnaque. Pour nouveaux arrivants.
                    keywords: louer suisse, caution suisse, arnaque location suisse, dossier location suisse
                    ---

                    # Louer en Suisse : dossier, dépôt et éviter les arnaques

                    ## Introduction
                    La location en Suisse demande beaucoup de documents. Bien maîtrisé, cela vous protège aussi.

                    ## Contexte
                    Deux risques fréquents : dossier faible et arnaques liées à l’urgence.

                    ## Explication détaillée
                    - Parcours typique : recherche → visite → candidature → sélection → signature → clés.
                    - Dossier : pièce d’identité/permis, preuve de revenus, extrait de poursuites (si disponible), courte présentation.
                    - Dépôt/caution : exigez une procédure claire et traçable.
                    - Signaux d’arnaque : paiement anticipé sans contrat vérifiable, pas de visite, pression, détails incohérents.

                    ## Infos pratiques
                    - Suivi des candidatures + conservation des preuves.
                    - Ne jamais verser d’argent sans contrat solide et vérification.

                    ## Conseils & alertes
                    - L’urgence est l’arme du fraudeur : vérifier d’abord.
                    - Si ça ne “colle” pas, passez votre chemin.

                    ## Sources
                    - ch.ch : https://www.ch.ch

                    ## Conclusion
                    Dossier solide + vérification = location plus simple et risque d’arnaque fortement réduit.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: alquilar-en-suiza-evitar-estafas
                    hub: vivienda
                    seo_title: Wohnung mieten in der Schweiz: Dossier, Kaution und Betrug vermeiden
                    meta_description: Praxisguide: Bewerbungsdossier, Vertrag, Kaution/Depot und typische Betrugszeichen. Für Neuankömmlinge.
                    keywords: wohnung mieten schweiz, kaution schweiz, mietbetrug schweiz, mietdossier
                    ---

                    # Wohnung mieten in der Schweiz: Dossier, Kaution und Betrug vermeiden

                    ## Einleitung
                    Mieten in der Schweiz ist dokumentenlastig. Mit der richtigen Vorgehensweise schützt Sie das auch vor Betrug.

                    ## Kontext
                    Häufige Probleme: schwaches Dossier und Betrug durch Zeitdruck.

                    ## Detaillierte Erklärung
                    - Ablauf: Suche → Besichtigung → Bewerbung → Auswahl → Vertrag → Schlüssel.
                    - Dossier: Ausweis/Bewilligung, Einkommensnachweis, Betreibungsregisterauszug (falls vorhanden), kurze Vorstellung.
                    - Kaution/Depot: nur mit klarer, nachvollziehbarer Abwicklung.
                    - Betrugszeichen: Vorkasse ohne verifizierbaren Vertrag, keine Besichtigung, Druck, widersprüchliche Zahlungsdetails.

                    ## Praktische Hinweise
                    - Bewerbungen tracken, Belege sichern.
                    - Nie Geld überweisen ohne Vertrag + Verifikation.

                    ## Tipps & Warnungen
                    - Zeitdruck ist ein Warnsignal.
                    - Wenn etwas nicht stimmt: weiter suchen.

                    ## Quellen
                    - ch.ch: https://www.ch.ch

                    ## Fazit
                    Starkes Dossier + Verifikation senkt das Betrugsrisiko massiv.
                    """
                ),
            },
            "normas-locales-ginebra": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: normas-locales-ginebra
                    hub: vivir-en-suiza
                    seo_title: Normas locales en Ginebra (GE): convivencia, multas y buenas prácticas
                    meta_description: Guía práctica de vida local en Ginebra: convivencia, ruido, movilidad, limpieza, multas frecuentes y hábitos que evitan problemas.
                    keywords: ginebra suiza normas, multas ginebra, vivir en ginebra, ge suiza
                    ---

                    # Normas locales en Ginebra (GE): convivencia, multas y buenas prácticas

                    ## Introducción
                    Ginebra es internacional y dinámica, pero también estricta con normas de convivencia y orden público. Conocer lo básico evita multas y conflictos.

                    ## Contexto
                    En GE, muchas reglas prácticas se aplican a nivel cantonal/comunal: ruido, residuos, uso de espacios, movilidad y ciertas sanciones.

                    ## Explicación detallada
                    ### Situaciones típicas que generan problemas
                    - ruido (horarios, fiestas, bricolaje)
                    - estacionamiento y normas de circulación
                    - residuos/reciclaje (bolsas, puntos, horarios)
                    - convivencia en edificios (uso de lavandería, zonas comunes)

                    ### Cómo actuar de forma “segura”
                    - Lee el reglamento del edificio.
                    - Usa fuentes oficiales del cantón/comuna para dudas recurrentes.
                    - Si recibes una multa, revisa el procedimiento y plazos; guarda copia.

                    ## Información práctica
                    - Apunta los contactos de tu régie/administración.
                    - Ten a mano tu contrato y reglamento interno.

                    ## Consejos y alertas
                    - Lo “normal” en otro país puede ser sancionable aquí (p. ej., ciertos hábitos de basura o ruido).
                    - Evita discusiones: documenta y usa canales formales.

                    ## Fuentes
                    - Cantón de Ginebra: https://www.ge.ch
                    - ch.ch: https://www.ch.ch

                    ## Conclusión
                    La vida en Ginebra es más fácil cuando juegas con reglas claras: reglamentos + hábitos preventivos + documentación.
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: normas-locales-ginebra
                    hub: vivir-en-suiza
                    seo_title: Geneva (GE) local rules: everyday norms, fines and practical habits
                    meta_description: Practical guide to daily rules in Geneva: noise, parking, waste, building rules, common fines and habits that prevent problems.
                    keywords: geneva rules, geneva fines, living in geneva, ge switzerland
                    ---

                    # Geneva (GE) local rules: everyday norms, fines and practical habits

                    ## Introduction
                    Geneva is international and lively, but local rules around coexistence and public order are enforced. Knowing the basics prevents avoidable fines.

                    ## Context
                    Many practical rules are cantonal/communal: noise, waste, parking and building regulations.

                    ## Detailed explanation
                    Common friction points:
                    - noise (hours, parties, DIY)
                    - parking and traffic rules
                    - waste/recycling practices
                    - building coexistence (laundry rooms, shared spaces)

                    Safer approach:
                    - read your building rules
                    - use official cantonal/communal sources
                    - keep copies and respect deadlines if you receive a fine

                    ## Practical information
                    - Keep your régie/administration contacts handy.
                    - Keep contract + building rules accessible.

                    ## Tips or warnings
                    - Some habits accepted elsewhere can be fined here.
                    - Document issues and use formal channels.

                    ## Sources
                    - Canton of Geneva: https://www.ge.ch
                    - ch.ch: https://www.ch.ch

                    ## Conclusion
                    Life in Geneva is smoother with clear rules: building regulations + preventive habits + documentation.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: normas-locales-ginebra
                    hub: vivir-en-suiza
                    seo_title: Règles locales à Genève (GE) : cohabitation, amendes et bonnes pratiques
                    meta_description: Guide pratique à Genève : bruit, stationnement, déchets, règles d’immeuble, amendes fréquentes et habitudes utiles.
                    keywords: geneve règles, amendes geneve, vivre à geneve, ge suisse
                    ---

                    # Règles locales à Genève (GE) : cohabitation, amendes et bonnes pratiques

                    ## Introduction
                    Genève est internationale, mais les règles de cohabitation et d’ordre public sont appliquées. Les connaître évite des amendes inutiles.

                    ## Contexte
                    Beaucoup de règles sont cantonales/communales : bruit, déchets, stationnement, règlements d’immeuble.

                    ## Explication détaillée
                    Situations classiques :
                    - bruit (horaires, fêtes, bricolage)
                    - stationnement / circulation
                    - déchets / recyclage
                    - vie en immeuble (buanderie, parties communes)

                    Bon réflexe :
                    - lire le règlement
                    - s’appuyer sur les sources officielles
                    - respecter délais et conserver copies en cas d’amende

                    ## Infos pratiques
                    - Garder les contacts de la régie.
                    - Avoir contrat + règlement à portée de main.

                    ## Conseils & alertes
                    - Certains comportements “normaux” ailleurs peuvent être sanctionnés.
                    - Documenter et privilégier les voies formelles.

                    ## Sources
                    - Canton de Genève : https://www.ge.ch
                    - ch.ch : https://www.ch.ch

                    ## Conclusion
                    Genève devient simple quand on connaît les règles : règlement + bonnes habitudes + preuves.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: normas-locales-ginebra
                    hub: vivir-en-suiza
                    seo_title: Lokale Regeln in Genf (GE): Alltag, Bussen und praktische Tipps
                    meta_description: Praxisguide Genf: Lärm, Parkieren, Abfall, Hausordnung, häufige Bussen und Gewohnheiten, die Probleme vermeiden.
                    keywords: genf regeln, busse genf, leben in genf, ge schweiz
                    ---

                    # Lokale Regeln in Genf (GE): Alltag, Bussen und praktische Tipps

                    ## Einleitung
                    Genf ist international, aber Regeln zu Nachbarschaft und Ordnung werden durchgesetzt. Grundwissen verhindert unnötige Bussen.

                    ## Kontext
                    Viele praktische Regeln sind kantonal/gemeindlich: Lärm, Abfall, Parkieren, Hausordnung.

                    ## Detaillierte Erklärung
                    Typische Konfliktpunkte:
                    - Lärm (Zeiten, Partys, Heimwerken)
                    - Parkieren/Verkehr
                    - Abfall/Recycling
                    - Hausleben (Waschküche, Gemeinschaftsräume)

                    Sicheres Vorgehen:
                    - Hausordnung lesen
                    - offizielle Quellen nutzen
                    - bei Busse Fristen beachten und Kopien behalten

                    ## Praktische Hinweise
                    - Kontakte der Verwaltung (Régie) speichern.
                    - Vertrag + Hausordnung griffbereit halten.

                    ## Tipps & Warnungen
                    - Gewohnheiten aus anderen Ländern können hier sanktioniert werden.
                    - Dokumentieren und formale Wege nutzen.

                    ## Quellen
                    - Kanton Genf: https://www.ge.ch
                    - ch.ch: https://www.ch.ch

                    ## Fazit
                    Mit Regeln + guten Gewohnheiten + Dokumentation wird der Alltag in Genf deutlich entspannter.
                    """
                ),
            },
            "fraudes-inmigrantes-suiza": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: fraudes-inmigrantes-suiza
                    hub: recursos
                    seo_title: Fraudes comunes contra inmigrantes en Suiza: señales y cómo protegerte
                    meta_description: Alertas prácticas: estafas de alquiler, falsas multas, phishing, “ofertas de trabajo” falsas y suplantación. Señales típicas y cómo actuar en Suiza.
                    keywords: estafas suiza, fraudes suiza, phishing suiza, estafa alquiler suiza, multas falsas
                    ---

                    # Fraudes comunes contra inmigrantes en Suiza: señales y cómo protegerte

                    ## Introducción
                    La mayoría de estafas no se basan en “tecnología”, sino en una cosa: **urgencia**. Si aprendes a frenar y verificar, reduces el riesgo de forma drástica.

                    ## Contexto
                    Recién llegados son un objetivo típico porque:
                    - necesitan vivienda y trabajo rápido
                    - no conocen procedimientos locales
                    - no saben cómo verificar documentos y pagos

                    ## Explicación detallada
                    ### Estafas frecuentes (patrones)
                    - **Alquiler**: pago por adelantado + “no se puede visitar”.
                    - **Phishing**: SMS/email que imita bancos o servicios con enlaces.
                    - **Falsas multas/QR**: códigos que llevan a webs de pago dudosas.
                    - **Ofertas de trabajo**: te piden dinero, documentos sensibles o “tasas” para empezar.

                    ### Qué hacer (protocolo simple)
                    1) No pagar ni enviar datos sensibles por prisa.  
                    2) Verificar por canal oficial (web oficial, teléfono oficial).  
                    3) Guardar pruebas (capturas, emails).  
                    4) Reportar si procede (policía, entidad afectada).

                    ## Información práctica
                    - Verifica dominios y remitentes; no confíes en “logos”.
                    - Usa números oficiales (no los del mensaje).

                    ## Consejos y alertas
                    - Si te presionan con “hoy o nunca”, es mala señal.
                    - Si te piden pago por “reservar” sin contrato verificable, sal.

                    ## Fuentes
                    - ch.ch: https://www.ch.ch
                    - Fedpol (seguridad, según campaña): https://www.fedpol.admin.ch

                    ## Conclusión
                    En Suiza, la verificación se hace con calma y con canales oficiales. La urgencia es el enemigo.
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: fraudes-inmigrantes-suiza
                    hub: recursos
                    seo_title: Common fraud targeting immigrants in Switzerland: red flags and protection
                    meta_description: Practical alerts: rental scams, fake fines/QR, phishing, fake job offers and impersonation. Red flags and what to do in Switzerland.
                    keywords: scams switzerland, fraud switzerland, phishing switzerland, rental scam switzerland
                    ---

                    # Common fraud targeting immigrants in Switzerland: red flags and protection

                    ## Introduction
                    Most scams are not “advanced tech”—they rely on **urgency**. If you slow down and verify, you reduce risk massively.

                    ## Context
                    Newcomers are targeted because they need housing/work fast and may not know local verification steps.

                    ## Detailed explanation
                    Typical patterns:
                    - rental: upfront payment + “no visit possible”
                    - phishing: SMS/email imitating banks/services
                    - fake fines/QR: suspicious payment websites
                    - fake jobs: requests for money, sensitive documents or “fees”

                    Simple protocol:
                    1) don’t pay or share sensitive data under pressure  
                    2) verify via official channels  
                    3) keep evidence  
                    4) report to the affected institution/police when appropriate

                    ## Practical information
                    - Verify domains and senders; logos prove nothing.
                    - Use official phone numbers (not the ones in the message).

                    ## Tips or warnings
                    - “Today or never” pressure is a red flag.
                    - Payments to “reserve” without a verifiable contract are risky.

                    ## Sources
                    - ch.ch: https://www.ch.ch
                    - fedpol: https://www.fedpol.admin.ch

                    ## Conclusion
                    In Switzerland, safe verification is calm and official-channel based. Urgency is the enemy.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: fraudes-inmigrantes-suiza
                    hub: recursos
                    seo_title: Fraudes visant les expatriés en Suisse : signaux et protections
                    meta_description: Alertes pratiques : arnaques de location, fausses amendes/QR, phishing, fausses offres d’emploi. Signaux typiques et conduite à tenir.
                    keywords: arnaques suisse, fraude suisse, phishing suisse, arnaque location suisse
                    ---

                    # Fraudes visant les expatriés en Suisse : signaux et protections

                    ## Introduction
                    La plupart des arnaques reposent sur l’**urgence**. Si vous ralentissez et vérifiez, le risque chute.

                    ## Contexte
                    Les nouveaux arrivants sont ciblés (logement/emploi rapides, procédures inconnues).

                    ## Explication détaillée
                    Schémas fréquents :
                    - location : paiement avant visite/contrat vérifiable
                    - phishing : SMS/email imitant banque/service
                    - fausses amendes/QR : sites de paiement douteux
                    - faux emplois : demandes d’argent, documents sensibles, “frais”

                    Protocole :
                    1) pas de paiement sous pression  
                    2) vérification via canal officiel  
                    3) conserver les preuves  
                    4) signaler si nécessaire

                    ## Infos pratiques
                    - Vérifier le domaine et l’expéditeur.
                    - Utiliser les numéros officiels (pas ceux du message).

                    ## Conseils & alertes
                    - “Aujourd’hui ou jamais” = signal d’alarme.
                    - “Réserver” contre paiement sans contrat clair = risque élevé.

                    ## Sources
                    - ch.ch : https://www.ch.ch
                    - fedpol : https://www.fedpol.admin.ch

                    ## Conclusion
                    La vérification doit être calme et basée sur des canaux officiels. L’urgence est l’ennemie.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: fraudes-inmigrantes-suiza
                    hub: recursos
                    seo_title: Häufige Betrugsmaschen gegen Expats in der Schweiz: Warnzeichen und Schutz
                    meta_description: Praktische Warnungen: Mietbetrug, falsche Bussen/QR, Phishing, Fake-Jobs. Warnzeichen und Vorgehen in der Schweiz.
                    keywords: betrug schweiz, phishing schweiz, mietbetrug schweiz, scams schweiz
                    ---

                    # Häufige Betrugsmaschen gegen Expats in der Schweiz: Warnzeichen und Schutz

                    ## Einleitung
                    Die meisten Betrugsfälle basieren auf **Zeitdruck**. Wer stoppt und verifiziert, senkt das Risiko stark.

                    ## Kontext
                    Neuankömmlinge sind oft Ziel, weil Wohnung/Job schnell gebraucht werden und Abläufe unbekannt sind.

                    ## Detaillierte Erklärung
                    Typische Muster:
                    - Miete: Vorkasse + “keine Besichtigung möglich”
                    - Phishing: SMS/E-Mail im Stil von Banken/Services
                    - Fake-Bussen/QR: dubiose Zahlungsseiten
                    - Fake-Jobs: Geld, sensible Dokumente oder “Gebühren”

                    Protokoll:
                    1) nicht unter Druck zahlen/teilen  
                    2) über offizielle Kanäle prüfen  
                    3) Belege sichern  
                    4) melden, wenn sinnvoll

                    ## Praktische Hinweise
                    - Absender/Domains prüfen; Logos sind kein Beweis.
                    - Offizielle Telefonnummern verwenden.

                    ## Tipps & Warnungen
                    - “Heute oder nie” ist ein Warnsignal.
                    - “Reservieren” gegen Zahlung ohne klaren Vertrag: hohes Risiko.

                    ## Quellen
                    - ch.ch: https://www.ch.ch
                    - fedpol: https://www.fedpol.admin.ch

                    ## Fazit
                    Sicher ist: ruhig bleiben, offiziell verifizieren, dokumentieren.
                    """
                ),
            },
            "consejos-vida-diaria-suiza": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: consejos-vida-diaria-suiza
                    hub: vivir-en-suiza
                    seo_title: Vida diaria en Suiza: 25 consejos prácticos para recién llegados
                    meta_description: Consejos prácticos para tu día a día en Suiza: administración, vecinos, compras, transporte, salud y hábitos que evitan problemas.
                    keywords: vivir en suiza consejos, vida diaria suiza, recien llegado suiza
                    ---

                    # Vida diaria en Suiza: 25 consejos prácticos para recién llegados

                    ## Introducción
                    No necesitas “saberlo todo”. Con buenas rutinas evitas la mayoría de problemas típicos del primer año.

                    ## Contexto
                    Suiza funciona con normas claras, plazos y documentación. El día a día mejora cuando adoptas esos hábitos.

                    ## Explicación detallada
                    ### 25 hábitos útiles
                    1) Guarda cartas oficiales (y escanéalas).  
                    2) Usa calendario para plazos (seguro, impuestos, citas).  
                    3) Pregunta siempre por cantón/comuna.  
                    4) Ten un “dossier” de documentos.  
                    5) Aprende lo básico del idioma local del cantón.  
                    6) Revisa tu contrato (alquiler/trabajo) con calma.  
                    7) Evita ruidos en horarios sensibles.  
                    8) Recicla según norma local.  
                    9) Ten RC/seguro de responsabilidad si aplica.  
                    10) Usa abonos de transporte si te compensa.  
                    11) Compara primas LAMal cada otoño.  
                    12) No pagues nada sin contrato verificable.  
                    13) Haz seguimiento de candidaturas.  
                    14) Guarda nóminas y certificados de trabajo.  
                    15) Controla gastos fijos el primer trimestre.  
                    16) Pregunta por deducciones si haces declaración.  
                    17) Respeta turnos y reglas en lavanderías comunes.  
                    18) Cierra el círculo: confirma por escrito.  
                    19) Planifica mudanzas con margen.  
                    20) Ten un fondo de emergencia.  
                    21) No te fíes de “lo vi en Facebook” sin fuente.  
                    22) Usa portales oficiales como referencia base.  
                    23) En caso de duda, documenta y consulta.  
                    24) Mantén tus datos actualizados (domicilio, etc.).  
                    25) Sé constante: Suiza premia la regularidad.

                    ## Información práctica
                    Convierte esta lista en una checklist y marca lo que ya tienes listo.

                    ## Consejos y alertas
                    El mejor consejo transversal: **menos improvisación, más proceso**.

                    ## Fuentes
                    - ch.ch: https://www.ch.ch

                    ## Conclusión
                    Con rutinas simples, la vida en Suiza se vuelve más ligera. Lo importante es la consistencia.
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: consejos-vida-diaria-suiza
                    hub: vivir-en-suiza
                    seo_title: Daily life in Switzerland: 25 practical tips for newcomers
                    meta_description: Practical day-to-day tips: admin, neighbours, transport, health insurance, budgeting and habits that prevent problems.
                    keywords: living in switzerland tips, daily life switzerland, newcomers switzerland
                    ---

                    # Daily life in Switzerland: 25 practical tips for newcomers

                    ## Introduction
                    You don’t need to know everything. With a few strong routines, most first‑year problems disappear.

                    ## Context
                    Switzerland runs on clear rules, deadlines and documentation. Your daily life improves when you adopt those habits.

                    ## Detailed explanation
                    25 practical habits (short list):
                    - archive official letters (and scan them)
                    - track deadlines in a calendar
                    - always ask “which canton/commune?”
                    - keep a document dossier
                    - learn basics of the local language
                    - review contracts calmly (work/rent)
                    - respect noise and recycling rules
                    - compare LAMal premiums yearly
                    - avoid payments without verifiable contracts
                    - document job applications, payslips and certificates
                    - keep fixed costs low early and build an emergency buffer

                    ## Practical information
                    Turn the list into a checklist and tick what you’ve completed.

                    ## Tips or warnings
                    The universal tip: less improvisation, more process.

                    ## Sources
                    - ch.ch: https://www.ch.ch

                    ## Conclusion
                    Simple routines make Switzerland easier. Consistency is the real superpower.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: consejos-vida-diaria-suiza
                    hub: vivir-en-suiza
                    seo_title: Vie quotidienne en Suisse : 25 conseils pratiques pour nouveaux arrivants
                    meta_description: Conseils pratiques : démarches, voisinage, transports, assurance maladie, budget et habitudes qui évitent les problèmes.
                    keywords: vivre en suisse conseils, vie quotidienne suisse, nouveaux arrivants suisse
                    ---

                    # Vie quotidienne en Suisse : 25 conseils pratiques pour nouveaux arrivants

                    ## Introduction
                    Pas besoin de tout savoir. Avec de bonnes routines, la plupart des soucis de la première année disparaissent.

                    ## Contexte
                    La Suisse fonctionne avec des règles, des délais et des preuves. Votre quotidien devient plus simple quand vous adoptez ces réflexes.

                    ## Explication détaillée
                    Idées clés :
                    - archiver les courriers officiels (et scanner)
                    - suivre les délais au calendrier
                    - demander “quel canton/quelle commune ?”
                    - garder un dossier de documents
                    - apprendre les bases de la langue locale
                    - relire les contrats calmement
                    - respecter bruit + déchets
                    - comparer la LAMal chaque automne
                    - éviter les paiements sans contrat vérifiable
                    - constituer un coussin d’urgence

                    ## Infos pratiques
                    Faites-en une checklist et cochez au fil du temps.

                    ## Conseils & alertes
                    Conseil transversal : moins d’impro, plus de méthode.

                    ## Sources
                    - ch.ch : https://www.ch.ch

                    ## Conclusion
                    Des routines simples rendent la Suisse plus légère. La constance est la clé.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: consejos-vida-diaria-suiza
                    hub: vivir-en-suiza
                    seo_title: Alltag in der Schweiz: 25 praktische Tipps für Neuankömmlinge
                    meta_description: Alltagstipps: Verwaltung, Nachbarn, ÖV, Krankenkasse, Budget und Gewohnheiten, die Probleme vermeiden.
                    keywords: leben in der schweiz tipps, alltag schweiz, neuankömmlinge schweiz
                    ---

                    # Alltag in der Schweiz: 25 praktische Tipps für Neuankömmlinge

                    ## Einleitung
                    Man muss nicht alles wissen. Mit guten Routinen lassen sich viele typische Startprobleme vermeiden.

                    ## Kontext
                    In der Schweiz zählen Regeln, Fristen und Nachweise. Wer diese Gewohnheiten übernimmt, lebt entspannter.

                    ## Detaillierte Erklärung
                    Kerngewohnheiten:
                    - offizielle Briefe archivieren (und scannen)
                    - Fristen im Kalender
                    - immer “welcher Kanton/welche Gemeinde?”
                    - Dokumentenmappe führen
                    - lokale Sprache basics
                    - Verträge ruhig prüfen
                    - Lärm- und Abfallregeln beachten
                    - Krankenkasse jährlich vergleichen
                    - keine Zahlungen ohne verifizierbaren Vertrag
                    - Notfallpuffer aufbauen

                    ## Praktische Hinweise
                    Als Checkliste nutzen und Schritt für Schritt abhaken.

                    ## Tipps & Warnungen
                    Universaltipp: weniger Improvisation, mehr Prozess.

                    ## Quellen
                    - ch.ch: https://www.ch.ch

                    ## Fazit
                    Einfache Routinen machen den Alltag leichter. Beständigkeit ist entscheidend.
                    """
                ),
            },
            "permisos-suiza-actualizacion": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: permisos-suiza-actualizacion
                    hub: tramites
                    seo_title: Permisos en Suiza (L, B, C): checklist, errores típicos y casos reales
                    meta_description: Guía práctica para recién llegados: diferencias L/B/C, checklist de llegada, cambios de situación y errores frecuentes, con enlaces oficiales.
                    keywords: permiso l suiza, permiso b suiza, permiso c suiza, permisos suiza, tramites suiza
                    ---

                    # Permisos en Suiza (L, B, C): checklist, errores típicos y casos reales

                    ## Introducción
                    Los permisos suizos dependen de tu situación (contrato, duración, familia) y del marco legal aplicable. No es solo “una tarjeta”.

                    ## Contexto
                    La base es federal, pero la tramitación práctica (citas, plazos, formularios) puede variar según el cantón.

                    ## Explicación detallada
                    - **L**: suele asociarse a contratos/estancias más cortas.
                    - **B**: residencia temporal de varios años; ojo con cambios de empleador, actividad o cantón (según caso).
                    - **C**: estatus más estable tras años; cambia el panorama de algunos trámites, pero no elimina obligaciones.

                    ## Información práctica
                    Checklist al llegar:
                    1) Registro en la comuna.  
                    2) Seguro médico dentro del plazo aplicable.  
                    3) Pruebas de domicilio y trabajo.  
                    4) Archivo de cartas oficiales y nóminas.

                    ## Consejos y alertas
                    - No esperes “a tener la tarjeta” para empezar otros pasos.
                    - Si cambias de cantón, revisa el procedimiento exacto del nuevo cantón/comuna.

                    ## Fuentes
                    - SEM: https://www.sem.admin.ch
                    - ch.ch: https://www.ch.ch

                    ## Conclusión
                    Permisos = planificación + plazos + documentación. Eso evita la mayoría de bloqueos.

                    Relacionado: `#/tramites-llegada-suiza`, `#/registrarse-en-suiza`, `#/reagrupacion-familiar-suiza`
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: permisos-suiza-actualizacion
                    hub: tramites
                    seo_title: Swiss permits (L, B, C): checklist, common mistakes and real-life scenarios
                    meta_description: Practical newcomer guide: L/B/C differences, arrival checklist, situation changes and common mistakes, with official links.
                    keywords: permit l switzerland, permit b switzerland, permit c switzerland, swiss permits
                    ---

                    # Swiss permits (L, B, C): checklist, common mistakes and real-life scenarios

                    ## Introduction
                    Swiss permits reflect your situation (contract, duration, family) under the relevant legal framework—more than “a card”.

                    ## Context
                    The framework is federal, but practical steps (appointments, timelines, forms) vary by canton.

                    ## Detailed explanation
                    - **L**: often linked to shorter stays/contracts.
                    - **B**: multi‑year residence; changes of employer/activity/canton can matter (case‑dependent).
                    - **C**: more stable status after years; some procedures change, obligations remain.

                    ## Practical information
                    Arrival checklist:
                    1) Commune registration.  
                    2) Mandatory health insurance within deadlines.  
                    3) Proof of address and work.  
                    4) Archive official letters and payslips.

                    ## Tips or warnings
                    - Don’t wait for the card to move forward with other steps.
                    - When moving cantons, verify local administrative procedures.

                    ## Sources
                    - SEM: https://www.sem.admin.ch
                    - ch.ch: https://www.ch.ch

                    ## Conclusion
                    Permits become smoother with planning, deadlines and documentation.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: permisos-suiza-actualizacion
                    hub: tramites
                    seo_title: Permis en Suisse (L, B, C) : checklist, erreurs fréquentes et cas concrets
                    meta_description: Guide pratique : différences L/B/C, checklist à l’arrivée, changements de situation et erreurs typiques, avec liens officiels.
                    keywords: permis l suisse, permis b suisse, permis c suisse, permis suisse
                    ---

                    # Permis en Suisse (L, B, C) : checklist, erreurs fréquentes et cas concrets

                    ## Introduction
                    Le permis dépend de votre situation (contrat, durée, famille) dans un cadre légal. Ce n’est pas qu’une “carte”.

                    ## Contexte
                    Le cadre est fédéral, mais la procédure pratique varie selon le canton (délais, rendez-vous, formulaires).

                    ## Explication détaillée
                    - **L** : souvent lié à des séjours/contrats courts.
                    - **B** : résidence sur plusieurs années ; attention aux changements selon le cas.
                    - **C** : statut plus stable après plusieurs années ; certaines démarches changent.

                    ## Infos pratiques
                    Checklist :
                    1) inscription à la commune  
                    2) assurance maladie dans les délais  
                    3) preuves domicile/emploi  
                    4) archivage des documents

                    ## Conseils & alertes
                    - Ne pas attendre la carte pour avancer.
                    - En cas de déménagement, vérifier les règles locales.

                    ## Sources
                    - SEM : https://www.sem.admin.ch
                    - ch.ch : https://www.ch.ch

                    ## Conclusion
                    Anticipation + délais + preuves : la combinaison qui évite les blocages.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: permisos-suiza-actualizacion
                    hub: tramites
                    seo_title: Bewilligungen in der Schweiz (L, B, C): Checkliste, typische Fehler und Praxisfälle
                    meta_description: Praxisguide: Unterschiede L/B/C, Checkliste nach Zuzug, Situationswechsel und häufige Fehler, mit offiziellen Links.
                    keywords: bewilligung l schweiz, bewilligung b schweiz, bewilligung c schweiz
                    ---

                    # Bewilligungen in der Schweiz (L, B, C): Checkliste, typische Fehler und Praxisfälle

                    ## Einleitung
                    Bewilligungen hängen von Ihrer Situation (Vertrag, Dauer, Familie) ab – nicht nur von einer “Karte”.

                    ## Kontext
                    Rechtsrahmen ist bundesweit, aber Abläufe variieren je nach Kanton (Fristen, Termine, Formulare).

                    ## Detaillierte Erklärung
                    - **L**: oft kürzere Aufenthalte/Verträge.
                    - **B**: mehrjährige Aufenthalte; Änderungen können relevant sein.
                    - **C**: stabilerer Status nach Jahren; einige Verfahren ändern sich.

                    ## Praktische Hinweise
                    Checkliste:
                    1) Anmeldung  
                    2) Krankenversicherung fristgerecht  
                    3) Nachweise Adresse/Arbeit  
                    4) Dokumente archivieren

                    ## Tipps & Warnungen
                    - Nicht auf die Karte warten.
                    - Bei Kantonswechsel lokale Verfahren prüfen.

                    ## Quellen
                    - SEM: https://www.sem.admin.ch
                    - ch.ch: https://www.ch.ch

                    ## Fazit
                    Planung, Fristen und Nachweise machen Bewilligungen deutlich einfacher.
                    """
                ),
            },
            "trabajar-en-suiza-guia": {
                "es": md(
                    """
                    ---
                    lang: es
                    slug: trabajar-en-suiza-guia
                    hub: trabajo
                    seo_title: Trabajar en Suiza: cómo buscar empleo, negociar y empezar bien
                    meta_description: Guía para encontrar trabajo en Suiza: CV, entrevistas, negociación salarial, contrato y errores frecuentes. Enfoque práctico para recién llegados.
                    keywords: trabajar en suiza, buscar empleo suiza, cv suizo, entrevista suiza, contrato suiza
                    ---

                    # Trabajar en Suiza: cómo buscar empleo, negociar y empezar bien

                    ## Introducción
                    Suiza recompensa la claridad: proceso, documentación y seguimiento. Con eso, la probabilidad de éxito sube.

                    ## Contexto
                    La búsqueda cambia por cantón (idioma), sector y tu situación de residencia/permisos.

                    ## Explicación detallada
                    - **Candidaturas**: CV claro, logros medibles, carta breve, referencias listas.
                    - **Entrevistas**: puntualidad, ejemplos concretos, rango salarial investigado.
                    - **Contrato**: periodo de prueba, preaviso, horas, vacaciones, 13º sueldo, seguro de accidentes.

                    ## Información práctica
                    Checklist:
                    1) CV + LinkedIn coherentes.  
                    2) Lista de roles/empresas objetivo.  
                    3) Seguimiento de candidaturas.  
                    4) Documentos (títulos, certificados).

                    ## Consejos y alertas
                    - Evita el “spam” de CV: apunta a puestos concretos.
                    - Ofertas perfectas sin proceso real: posible estafa.

                    ## Fuentes
                    - SECO: https://www.seco.admin.ch
                    - ch.ch: https://www.ch.ch

                    ## Conclusión
                    En Suiza, la consistencia vale oro: método + pruebas + seguimiento.
                    """
                ),
                "en": md(
                    """
                    ---
                    lang: en
                    slug: trabajar-en-suiza-guia
                    hub: trabajo
                    seo_title: Working in Switzerland: job search, negotiation and a strong start
                    meta_description: Practical job guide: Swiss-style CV, interviews, salary negotiation, contracts and common mistakes for newcomers.
                    keywords: work in switzerland, job search switzerland, swiss cv, interview switzerland, swiss contract
                    ---

                    # Working in Switzerland: job search, negotiation and a strong start

                    ## Introduction
                    Switzerland rewards clarity: process, documentation and consistent follow‑up.

                    ## Context
                    Strategy depends on canton language, sector and your residence/permit situation.

                    ## Detailed explanation
                    - Applications: clear CV, measurable achievements, short cover letter, references ready.
                    - Interviews: punctual, concrete examples, salary range researched.
                    - Contract: probation, notice, hours, vacation, 13th salary, accident insurance.

                    ## Practical information
                    Checklist: aligned CV/LinkedIn, target roles list, application tracker, core documents.

                    ## Tips or warnings
                    - Avoid mass-applying; target specific roles.
                    - Too-perfect offers without a real process can be scams.

                    ## Sources
                    - SECO: https://www.seco.admin.ch
                    - ch.ch: https://www.ch.ch

                    ## Conclusion
                    Consistency wins: method + evidence + follow‑up.
                    """
                ),
                "fr": md(
                    """
                    ---
                    lang: fr
                    slug: trabajar-en-suiza-guia
                    hub: trabajo
                    seo_title: Travailler en Suisse : chercher un emploi, négocier et bien démarrer
                    meta_description: Guide pratique : CV “suisse”, entretiens, négociation salariale, contrat et erreurs fréquentes pour nouveaux arrivants.
                    keywords: travailler en suisse, chercher emploi suisse, cv suisse, entretien suisse, contrat suisse
                    ---

                    # Travailler en Suisse : chercher un emploi, négocier et bien démarrer

                    ## Introduction
                    La Suisse valorise la clarté : méthode, preuves et suivi régulier.

                    ## Contexte
                    La stratégie dépend du canton (langue), du secteur et de votre situation (permis/inscription).

                    ## Explication détaillée
                    - Candidature : CV clair, résultats, lettre courte, références prêtes.
                    - Entretien : ponctualité, exemples concrets, fourchette salariale.
                    - Contrat : essai, préavis, horaires, vacances, 13e salaire, assurance accident.

                    ## Infos pratiques
                    Checklist : CV/LinkedIn cohérents, cibles, suivi, documents clés.

                    ## Conseils & alertes
                    - Éviter les candidatures “en masse”.
                    - Offres trop parfaites sans processus sérieux : méfiance.

                    ## Sources
                    - SECO : https://www.seco.admin.ch
                    - ch.ch : https://www.ch.ch

                    ## Conclusion
                    La constance paie : méthode + preuves + suivi.
                    """
                ),
                "de": md(
                    """
                    ---
                    lang: de
                    slug: trabajar-en-suiza-guia
                    hub: trabajo
                    seo_title: Arbeiten in der Schweiz: Jobsuche, Verhandlung und guter Start
                    meta_description: Praxisguide: Schweizer CV, Interviews, Lohnverhandlung, Vertrag und typische Fehler für Neuankömmlinge.
                    keywords: arbeiten in der schweiz, jobsuche schweiz, lebenslauf schweiz, interview schweiz, arbeitsvertrag schweiz
                    ---

                    # Arbeiten in der Schweiz: Jobsuche, Verhandlung und guter Start

                    ## Einleitung
                    In der Schweiz zählen Klarheit und Struktur: Methode, Nachweise und konsequentes Nachfassen.

                    ## Kontext
                    Strategie hängt von Kantonssprache, Branche und Aufenthaltsstatus ab.

                    ## Detaillierte Erklärung
                    - Bewerbung: klarer CV, messbare Erfolge, kurze Motivation, Referenzen bereit.
                    - Interview: pünktlich, konkret, Lohnspanne recherchiert.
                    - Vertrag: Probezeit, Kündigungsfrist, Stunden, Ferien, 13. Lohn, Unfallversicherung.

                    ## Praktische Hinweise
                    Checkliste: CV/LinkedIn, Zielrollen, Bewerbungs-Tracker, Kernunterlagen.

                    ## Tipps & Warnungen
                    - Nicht blind “mass bewerben”.
                    - Zu perfekte Angebote ohne Prozess können Betrug sein.

                    ## Quellen
                    - SECO: https://www.seco.admin.ch
                    - ch.ch: https://www.ch.ch

                    ## Fazit
                    Beständigkeit gewinnt: Methode + Nachweise + Follow‑up.
                    """
                ),
            },
        }
    )


def write_all(out_dir: Path) -> None:
    missing = []
    for slug, langs in ARTICLES.items():
        for lang in ["es", "en", "fr", "de"]:
            if lang not in langs:
                missing.append(f"{slug}:{lang}")
    if missing:
        raise SystemExit("Missing translations: " + ", ".join(missing))

    for slug, langs in ARTICLES.items():
        d = out_dir / slug
        d.mkdir(parents=True, exist_ok=True)
        for lang, content in langs.items():
            (d / f"{lang}.md").write_text(content, encoding="utf-8")


def main() -> int:
    add_remaining_articles()
    parser = argparse.ArgumentParser(description="Write curated Facebook-derived articles (all languages).")
    parser.add_argument(
        "--out",
        type=Path,
        default=Path("docs/facebook-pipeline/articles"),
        help="Output directory (default: docs/facebook-pipeline/articles)",
    )
    args = parser.parse_args()

    out_dir = args.out
    write_all(out_dir)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
