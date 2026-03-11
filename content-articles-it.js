/**
 * content-articles.js
 * Contains the 20 SEO optimized deep-dive articles.
 */

window.siteContent = window.siteContent || { es: { global: {}, pages: {}, articles: {} } };

window.siteContent.it.articles = {
    // 1. Permisos de residencia
    "articulo-permisos": {
        title: "Permessi di soggiorno in Svizzera: L, B, C e differenze",
        description: "Todo sobre los permisos suizos para residentes extranjeros. Conoce las diferencias entre permiso L, B y C.",
        keywords: "permisos Suiza, permiso L, permiso B, permiso C, vivir en Suiza, SEM",
        category: "Procedure Ordinarie",
        hub: "tramites",
        readingTime: 4,
        dateUpdated: "Actualizado frecuentemente",
        summary: "Guida completa per comprendere i permessi di soggiorno svizzeri: L (breve durata), B (dimorante) e C (domiciliato).",
        content: `
            <div class="page-header">
                <h1>Permisos de residencia en Suiza: permit L, B, C y sus diferencias</h1>
            </div>
            <div class="article-content">
                <p>Mudarse a Suiza implica registrarse y obtener un título de residencia. Si procedes de un país de la UE/EFTA (incluyendo España), el proceso está facilitado por el Acuerdo de Libre Circulación de Personas (ALCP).</p>
                
                <h2>Permiso L (Corta Duración)</h2>
                <p>Dirigido a las personas que permanecen en Suiza por un periodo inferior a 12 meses.</p>
                <ul>
                    <li><strong>Contratos temporales:</strong> Si tienes un contrato de entre 3 y 12 meses, se te asignará este permiso.</li>
                    <li><strong>Buscadores de empleo:</strong> Tras 3 meses buscando empleo, puedes solicitar un Permiso L para seguir buscando, que se renueva bajo ciertas condiciones probando que tienes medios económicos.</li>
                </ul>

                <h2>Permiso B (Permiso de Residencia / Livret B)</h2>
                <p>Para residentes con contratos de larga duración o indefinidos.</p>
                <ul>
                    <li><strong>Validez:</strong> 5 años para ciudadanos de la UE/EFTA si tienen contrato de al menos 12 meses o indefinido.</li>
                    <li><strong>Derechos:</strong> Permite movilidad cantonal y cambio de empleador fácilmente dentro del país.</li>
                </ul>

                <h2>Permiso C (Permiso de Establecimiento / Livret C)</h2>
                <p>Equivale a la residencia permanente y no depende de condiciones laborales.</p>
                <ul>
                    <li><strong>Obtención:</strong> Se otorga tras 5 años de residencia ininterrumpida y regular para ciudadanos españoles (y de la UE-15).</li>
                    <li><strong>Ventajas:</strong> Mismos derechos que los suizos (excepto voto), puedes abrir tu empresa libremente y los impuestos ya no se retienen a la fuente (Quellensteuer), sino mediante declaración anual normal.</li>
                </ul>

                <div class="callout info">
                    <strong>Fuente Oficial:</strong> Verifica las condiciones de renovación en el portal de la <a href="https://www.sem.admin.ch/sem/es/home/themen/aufenthalt.html" target="_blank">Secretaría de Estado de Migración</a>.
                </div>
            </div>
        `
    },

    // 2. Registro en la comuna
    "articulo-registro": {
        title: "Come registrarsi all'arrivo in Svizzera",
        description: "Guida passo passo alla registrazione nel tuo nuovo comune.",
        keywords: "registro comuna suiza, empadronamiento suiza, controle des habitants, vivir en Suiza",
        category: "Primi Passi",
        hub: "tramites",
        readingTime: 3,
        summary: "Devi registrarti nel tuo comune entro i primi 14 giorni.",
        content: `
            <div class="page-header">
                <h1>Cómo registrarse cuando llegas a Suiza (inscripción en la comuna)</h1>
            </div>
            <div class="article-content">
                <p>El primer trámite obligatorio y el más importante al llegar a vivir en Suiza es el registro en la oficina de Control de Habitantes (<i>Contrôle des habitants / Einwohnerkontrolle</i>) del municipio donde vas a residir (comuna/Gemeinde).</p>

                <h2>Plazos Importantes</h2>
                <p><strong>Tienes un máximo de 14 días</strong> desde tu fecha de llegada para registrarte (incluso si es 8 días en algunos cantones, siempre revisa el plazo local). Además, siempre debes registrarte <strong>antes de tu primer día de trabajo</strong>.</p>

                <h2>Documentos Necesarios</h2>
                <ul>
                    <li>Pasaporte o Documento de Identidad (DNI) válido.</li>
                    <li>Contrato de trabajo firmado, o documento que acredite la admisión a un centro de estudios (para estudiantes).</li>
                    <li>Contrato de alquiler firmado, o en su defecto, un certificado de alojamiento (si te hospedas en casa de un familiar o amigo, firmado por el titular del alquiler).</li>
                    <li>Fotografía tamaño carnet (dependiendo del cantón).</li>
                    <li>Acta de estado civil (certificado de matrimonio o nacimiento) si aplica.</li>
                </ul>

                <h2>El Proceso</h2>
                <p>Una vez presentados los documentos, pagarás una tasa por la expedición del permiso (suele rondar los 65-100 CHF según el tipo y el cantón). Recibirás un certificado temporal ("Attestation de résidence") mientras se emite la tarjeta física de tu permiso por parte del servicio de migración.</p>

                <div class="callout">
                    <strong>Nota para familias:</strong> Si llegáis con hijos, deberéis aportar certificados de nacimiento plurilingües y libro de familia.
                </div>
            </div>
        `
    },

    // 3. Seguro de salud (LAMal)
    "articulo-lamal": {
        title: "Assicurazione sanitaria in Svizzera (LAMal)",
        description: "L'assicurazione sanitaria è obbligatoria. Scopri come funziona la LAMal.",
        keywords: "seguro medico suiza, LAMal, KVG, vivir en Suiza, sistema salud suizo",
        category: "Assicurazione Sanitaria",
        hub: "salud",
        readingTime: 5,
        summary: "La LAMal è obbligatoria e privata. Hai 3 mesi per attivarla.",
        content: `
            <div class="page-header">
                <h1>Seguro de salud en Suiza (LAMal): cómo funciona</h1>
            </div>
            <div class="article-content">
                <p>A diferencia de España, en Suiza no existe un sistema de Seguridad Social que cubra directamente la atención sanitaria general. La salud es privada, pero regulada de forma obligatoria por la Ley Federal del Seguro de Enfermedad, conocida como <strong>LAMal</strong> (KVG en alemán).</p>

                <h2>Obligatoriedad y Plazos</h2>
                <p>Toda persona residente en Suiza debe contratar un seguro médico básico (LAMal) en un plazo máximo de <strong>3 meses</strong> desde su llegada o fecha de registro. El seguro tendrá efecto retroactivo; pagarás las primas desde el primer día que pisaste el país.</p>

                <h2>¿Qué cubre el Seguro Básico (LAMal)?</h2>
                <p>El seguro básico es idéntico por ley en todas las aseguradoras (Cajas de Compensación o <i>Caisses-maladie / Krankenkassen</i>). Cubre:</p>
                <ul>
                    <li>Consultas médicas generales y especialistas.</li>
                    <li>Medicamentos prescritos en la lista oficial.</li>
                    <li>Estancias en hospitales (sala general en tu cantón de residencia).</li>
                    <li>Gastos de maternidad.</li>
                </ul>

                <h2>¿Qué NO cubre el seguro básico?</h2>
                <p>Generalmente, el seguro básico <strong>no cubre cuidados dentales</strong> rutinarios (las visitas al dentista se pagan del bolsillo a menos que contrates un seguro complementario LCA), ni gafas u hospitalización en habitación privada.</p>

                <h2>¿Cómo elegir aseguradora?</h2>
                <p>Aunque las coberturas de la LAMal son idénticas, las primas mensuales varían sustancialmente entre compañías y según tu lugar de residencia. Puedes comparar las ofertas oficiales en <a href="https://www.priminfo.admin.ch/" target="_blank">Priminfo</a> (sitio de la Confederación).</p>
            </div>
        `
    },

    // 4. Franquicia y copago en el sistema de salud
    "articulo-franquicia": {
        title: "Franchigia e Ticket nel sistema sanitario svizzero",
        description: "Explicación detallada de la franquicia y el copago en los seguros médicos suizos (LAMal).",
        keywords: "franquicia LAMal, copago suiza, quote-part, seguro medico",
        audience: 'resident',
        category: `Costi Medici`,
        hub: 'salud',
        readingTime: 4,
        summary: `Perché l\'assicurazione sanitaria può diventare molto costosa se non scegli bene la tua franchigia di base (300 CHF vs 2500 CHF).`,
        content: `
            <div class="page-header">
                <h1>Franquicia y copago en el sistema de salud suizo</h1>
            </div>
            <div class="article-content">
                <p>Incluso después de pagar tus primas mensuales del seguro básico (LAMal), tú eres responsable de una parte de los gastos médicos generados. Estos gastos se dividen en Franquicia y Cuota Parte (Copago).</p>

                <h2>La Franquicia (Franchise)</h2>
                <p>La franquicia es la cantidad anual que debes pagar íntegramente de tu propio bolsillo para visitas médicas y medicamentos antes de que el seguro comience a reembolsar.</p>
                <ul>
                    <li>El mínimo legal para adultos es de <strong>300 CHF</strong>.</li>
                    <li>El máximo para adultos es de <strong>2500 CHF</strong>.</li>
                    <li>Si eliges una franquicia baja (300 CHF), tu prima mensual será alta. Si eliges la más alta (2500 CHF), pagarás menos cada mes por el seguro, con la esperanza de no enfermar.</li>
                </ul>
                <p><em>Consejo estadístico:</em> No suele ser rentable coger las franquicias intermedias. Por lo general, se opta por 300 (si crees que tendrás muchos gastos) o 2500 (si eres muy sano).</p>

                <h2>El Copago (Quote-part / Selbstbehalt)</h2>
                <p>Una vez que agotas tu franquicia (por ejemplo, ya has gastado 2500 CHF en médicos), el seguro asume los gastos, pero tú debes pagar el <strong>10% del importe restante</strong>. Este es el copago.</p>
                <p>Afortunadamente, este 10% tiene un tope máximo anual de <strong>700 CHF</strong> para adultos (350 CHF para niños).</p>

                <h2>Gastos Hospitalarios</h2>
                <p>Si eres hospitalizado, tendrás un cargo fijo adicional de 15 CHF por día de hospitalización (contribución a los gastos de manutención), aplicable independientemente de la franquicia o copago.</p>
            </div>
        `
    },

    // 5. Impuestos en Suiza: federal, cantonal y comunal
    "articulo-impuestos": {
        title: "Imposte in Svizzera: federali, cantonali e comunali",
        description: "Comprendere il sistema di tripla imposizione in Svizzera.",
        keywords: "impuestos suiza, fiscalidad Suiza, cantones impuestos",
        audience: 'worker',
        category: `Sistema Fiscale`,
        hub: 'impuestos',
        readingTime: 5,
        summary: `In Svizzera, si pagano le tasse a 3 livelli.`,
        content: `
            <div class="page-header">
                <h1>Impuestos en Suiza: fiscalidad federal, cantonal y comunal</h1>
            </div>
            <div class="article-content">
                <p>Suiza es un país federal, por lo cual cuenta con un sistema fiscal a tres niveles. A diferencia de muchos países donde se recauda a nivel nacional y luego se distribuye, en Suiza los ciudadanos tributan en tres esferas diferentes.</p>

                <h2>1. El Impuesto Federal Directo</h2>
                <p>Es igual en toda Suiza y es recaudado por la Confederación. Grava los ingresos de las personas físicas (pero no su patrimonio) y el beneficio de las empresas. Tiene tarifas marcadamente progresivas, pero en general no excede el 11.5% de los ingresos.</p>

                <h2>2. El Impuesto Cantonal</h2>
                <p>Cada uno de los 26 cantones tiene su propia legislación fiscal. Ellos fijan los baremos, las deducciones y la escala de progresividad. Debido a esto, la carga fiscal varía inmensamente si vives en Ginebra (alta fiscalidad) versus si vives en Zug o Schwyz (baja fiscalidad). Los cantones gravan tanto la renta (ingresos) como la fortuna (patrimonio).</p>

                <h2>3. El Impuesto Comunal</h2>
                <p>Los más de 2000 ayuntamientos en Suiza determinan cada año su coeficiente impositivo, a menudo expresado como un porcentaje o multiplicador basado en el impuesto cantonal básico. Por ello, mudarse apenas unos kilómetros a la comuna vecina puede aumentar o reducir tus impuestos significativamente.</p>

                <div class="callout">
                    <strong>Pilar importante:</strong> En Suiza prima el "Federalismo fiscal de competencia". Los cantones compiten entre sí atrayendo empresas y contribuyentes a través de las tasas impositivas.
                </div>
            </div>
        `
    },

    // 6. Impuesto a la fuente
    "articulo-impuesto-fuente": {
        title: "L'imposta alla fonte (Quellensteuer) spiegata",
        description: "Qué es el impuesto a la fuente, a quiénes afecta y cómo se calcula en Suiza para extranjeros.",
        keywords: "impuesto fuente suiza, quellensteuer, impot a la source",
        audience: 'worker',
        category: `Ritenute`,
        hub: 'impuestos',
        readingTime: 3,
        dateUpdated: 'Actualizado recentemente',
        summary: `Come funziona la trattenuta sulle tasse direttamente dalla busta paga mensile per stranieri e frontalieri.`,
        content: `
            <div class="page-header">
                <h1>Impuesto a la fuente (Quellensteuer / Impôt à la source)</h1>
            </div>
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

    // 7. Seguros Sociales
    "articulo-seguros-sociales": {
        title: "Assicurazioni sociali: AVS, LPP e Disoccupazione",
        description: "Ripartizione del sistema di sicurezza sociale svizzero.",
        keywords: "AVS suiza, LPP, paro suiza, sistema pensiones suizo",
        audience: 'worker',
        category: `Lavoro`,
        hub: 'trabajo',
        readingTime: 6,
        summary: `Il sistema pensionistico svizzero si basa su 3 pilastri.`,
        content: `
            <div class="page-header">
                <h1>Seguros sociales y el sistema de previdencia suizo</h1>
            </div>
            <div class="article-content">
                <p>Parte del salario bruto se destina obligatoriamente al sistema de seguridad social. Suiza basa su previsión para la vejez en un peculiar modelo de <strong>tres pilares</strong>.</p>

                <h2>1er Pilar: AVS e AI (Seguro de Vejez y Supervivencia, Seguro de Invalidez)</h2>
                <p>Se trata de una cuota de reparto estatal, obligatoria para todos los residentes o trabajadores. Tiene como fin garantizar el mínimo vital en la vejez o en caso de fallecimiento e invalidez.<br/>
                <strong>Aportación:</strong> Por normal general, está en torno al 10.6% de tu salario, pero el empleador asume la mitad (5.3%) y tú la otra mitad. Aparece descontado directo en nómina.</p>

                <h2>2do Pilar: LPP o Caja de Pensiones (Previsión Profesional)</h2>
                <p>A partir del 1 de enero posterior a cumplir los 17 (para riesgos) y los 24 (para ahorro de vejez), y siempre que el salario supere cierto umbral, los empleados cotizan a este fondo privado de capitalización. 
                El objetivo es que, sumado al primer pilar, mantengas en la jubilidad un nivel de vida cercano a tus últimos años laborales. Este dinero es tuyo y se va acumulando en tu cuenta individual con rendimientos. Si dejas el país definitivamente fuera de Europa, a veces puedes recuperar parte de este fondo.</p>

                <h2>Seguro de Desempleo (ALV/AC - Paro)</h2>
                <p>La aportación al seguro de paro también es obligatoria (mitad a cargo del empleado y mitad del empleador). Si lamentablemente pierdes tu empleo despues de haber cotizado al menos 12 meses, este organismo pagará alrededor del 70% u 80% (si tienes hijos) de tu último salario, sujeto a tu esfuerzo activo y demostrado en la búsqueda de un nuevo trabajo.</p>

                <h2>Resumen general:</h2>
                <p>Al llegar tu contrato con un número bruto al mes, el sueldo neto se percibe tras descontar el AVS/AI, la pensión profesional, seguro de paro y (en muchos casos) el impuesto en origen.</p>
            </div>
        `
    },

    // 8. Salarios por sector y región
    "articulo-salarios": {
        title: "Salari in Svizzera per settore e regione",
        description: "Scopri il salario medio svizzero e utilizza il calcolatore Salarium.",
        keywords: "salario suiza, sueldo medio suiza, salarium, salario minimo ginebra",
        category: `Mercato del Lavoro`,
        hub: 'trabajo',
        readingTime: 5,
        summary: `La Svizzera ha stipendi elevati ma costi di vita proporzionati.`,
        summary: `Suiza tiene salarios muy altos pero costos en proporción. Solo unos pocos cantones (ej. Ginebra, Neuchâtel) tienen salario mínimo legal.`,
        content: `
            <div class="page-header">
                <h1>Salarios en Suiza por sector y cantón</h1>
            </div>
            <div class="article-content">
                <p>Los salarios en Suiza se encuentran entre los más altos del mundo, pero también lo es el coste de vida. Es crucial entender que tu poder adquisitivo real dependerá de lo que ganes frente a los gastos fijos de tu cantón.</p>

                <h2>¿Existe un salario mínimo legal en Suiza?</h2>
                <p>A nivel federal <strong>no existe</strong> un salario mínimo interprofesional. Sin embargo, algunos cantones han introducido sus propios salarios mínimos por hora. Por ejemplo, Ginebra o Neuchâtel tienen salarios mínimos legales que rondan los 23-24 CHF la hora (unos 4.000 CHF brutos al mes a tiempo completo).</p>

                <h2>El calculador Salarium</h2>
                <p>Si quieres saber si una oferta de trabajo es justa para tu sector, experiencia, edad y cantón, la herramienta más fiable es el <strong>Salarium</strong>, un calculador estadístico oficial mantenido por la Oficina Federal de Estadística (OFS).</p>
                
                <div class="callout info">
                    <strong>Enlace útil:</strong> <a href="https://www.bfs.admin.ch/bfs/es/home/estadisticas/trabajo-remuneracion/salarios-ingresos-costo-trabajo/nivel-salarial-suiza/salarium.html" target="_blank">Calculador de Salarios Salarium</a>
                </div>

                <h2>Los Convenios Colectivos (CCT)</h2>
                <p>Muchos sectores (hostelería, construcción, peluquería) están regidos por Contratos Colectivos de Trabajo (CCT / GAV). Estos contratos establecen salarios mínimos obligatorios, número de días de vacaciones y pago de horas extra, ofreciendo una sólida protección al trabajador.</p>
            </div>
        `
    },

    // 9. Contratos de trabajo
    "articulo-contratos": {
        title: "Contratti di lavoro in Svizzera: diritti e doveri",
        description: "Tutto sui contratti di lavoro e sulle ferie legali in Svizzera.",
        keywords: "contrato trabajo suiza, derechos trabajador suiza, vacaciones suiza, code des obligations",
        category: `Contratti`,
        hub: 'trabajo',
        readingTime: 4,
        summary: `Il mercato del lavoro è molto liberale. Il licenziamento è flessibile.`,
        summary: `El mercado laboral suizo es muy liberal. El despido es libre (respetando los plazos de preaviso) y las vacaciones mínimas son 4 semanas semanales.`,
        content: `
            <div class="page-header">
                <h1>Contratos de trabajo en Suiza: derechos y obligaciones</h1>
            </div>
            <div class="article-content">
                <p>El mercado laboral suizo es muy flexible y las condiciones se rigen fundamentalmente por el Código de Obligaciones (CO) y los Convenios Colectivos de Trabajo (CCT).</p>

                <h2>Tipos de contrato</h2>
                <ul>
                    <li><strong>Contrato Indefinido (CDI):</strong> El más común. No tiene fecha de finalización y permite al empleador o empleado rescindirlo respetando siempre el periodo de preaviso pactado o legal.</li>
                    <li><strong>Contrato de Duración Determinada (CDD):</strong> Se firma por una duración específica (ej. temporada de invierno, sustitución por maternidad).</li>
                    <li><strong>Trabajo Temporal:</strong> A través de agencias (Adecco, Manpower...), sujeto a reglas específicas sobre cotizaciones y preaviso muy flexible.</li>
                </ul>

                <h2>Jornada y Vacaciones</h2>
                <p>Por ley, todo trabajador en Suiza tiene derecho a un <strong>mínimo de 4 semanas</strong> de vacaciones pagadas al año (5 semanas si es menor de 20 años). La jornada laboral "a tiempo completo" suele oscilar entre las 40 y las 45 horas semanales.</p>

                <h2>Enfermedad y Accidentes</h2>
                <p>Casi todos los empleadores grandes cuentan con un seguro por pérdida de ganancias en caso de enfermedad que te asegura el cobro de tu sueldo mientras te recuperas. Además, el empleador abona obligatoriamente el <strong>seguro de accidentes profesionales</strong>.</p>
            </div>
        `
    },

    // 10. Periodo de prueba
    "articulo-periodo-prueba": {
        title: "Periodo di prova e termini di preavviso",
        description: "Conosci i tuoi diritti durante la prova e i preavvisi standard.",
        keywords: "periodo prueba suiza, preaviso despido suiza, probezeit",
        audience: 'worker',
        category: `Lavoro`,
        hub: 'trabajo',
        readingTime: 3,
        summary: `Il periodo di prova standard è di 1 a 3 mesi.`,
        content: `
            <div class="page-header">
                <h1>Periodo de prueba y plazos de preaviso</h1>
            </div>
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

    // 11. Búsqueda de empleo
    "articulo-buscar-empleo": {
        title: "Ricerca di un lavoro: piattaforme e strategie",
        description: "Dove cercare lavoro e come creare un CV in stile svizzero.",
        keywords: "buscar empleo suiza, cv suiza, jobup, jobs.ch",
        category: `Candidature`,
        hub: 'trabajo',
        readingTime: 4,
        summary: `Un CV svizzero dovrebbe includere una foto e la data di nascita.`,
        summary: `El CV al estilo suizo debe incluir foto, fecha de nacimiento y estado civil. Las plataformas más usadas son Jobup, Jobs.ch y LinkedIn.`,
        content: `
            <div class="page-header">
                <h1>Cómo buscar empleo en Suiza</h1>
            </div>
            <div class="article-content">
                <p>Suiza tiene un mercado laboral dinámico, impulsado no sólo por grandes farmacéuticas, bancos y relojería, sino también por miles de pymes.</p>

                <h2>El Currículum (Dossier de Candidatura)</h2>
                <p>El modelo suizo tradicionalmente es formal y completo. Un dossier estándar suizo debe incluir, si se solicita:</p>
                <ul>
                    <li>Tu CV (con fotografía profesional, datos de nacimiento y permiso de residencia si lo tienes).</li>
                    <li>Una carta de motivación estructurada y en el idioma de la oferta.</li>
                    <li>Copias de diplomas formativos.</li>
                    <li><strong>Certificados de trabajo previos</strong> (Arbeitszeugnis). Son importantísimos en Suiza; son cartas de tus anteriores jefes evaluando cualitativamente tus aptitudes en un formato estandarizado.</li>
                </ul>

                <h2>Principales Plataformas de Empleo</h2>
                <ul>
                    <li><a href="https://www.jobs.ch/" target="_blank">jobs.ch</a> - El mayor portal a nivel nacional.</li>
                    <li><a href="https://www.jobup.ch/" target="_blank">jobup.ch</a> - Especialmente fuerte en la zona de la Suiza romanda (francesa).</li>
                    <li><a href="https://ch.indeed.com/" target="_blank">Indeed Suiza</a> - Muy usado para todo el país.</li>
                    <li><strong>LinkedIn</strong> - Fundamental para perfiles técnicos, ingenieros e IT.</li>
                </ul>
                <p>Si tu búsqueda es para hostelería o empleos temporales, inscribirte presencialmente en Agencias de Trabajo Temporal (Adecco, Kelly Services) al llegar es muy efectivo.</p>
            </div>
        `
    },

    // 12. Alquiler de vivienda
    "articulo-alquiler": {
        title: "Affittare un appartamento: il processo",
        description: "Documenti necessari (estratto debiti) per ottenere un affitto.",
        keywords: "alquilar piso suiza, apartamento ginebra zarich, dossier alquiler suiza",
        category: `Contratto di Affitto`,
        hub: 'vivienda',
        readingTime: 5,
        summary: `Il mercato degli affitti è competitivo; serve un dossier impeccabile.`,
        summary: `El mercado de alquiler es muy competitivo. Necesitas un dosier impecable: extracto de no deudas (poursuites), contrato y 3 últimas nóminas.`,
        content: `
            <div class="page-header">
                <h1>Cómo alquilar un piso en Suiza</h1>
            </div>
            <div class="article-content">
                <p>Buscar alojamiento en ciudades como Zúrich, Ginebra o Lausana es notoriamente difícil por la falta de vivienda y la altísima demanda. Ser rápido y tener un dosier completo es esencial.</p>

                <h2>El Dosier del Inquilino</h2>
                <p>No basta con tener ingresos; las inmobiliarias (Régies / Verwaltungen) piden comprobar la solvencia y antecedentes con documentación exacta. Tu dosier en la solicitud, habitualmente digital mediante portales como <a href="https://www.homegate.ch/" target="_blank">Homegate</a> o <a href="https://www.immoscout24.ch/" target="_blank">ImmoScout24</a>, debe incluir:</p>
                <ul>
                    <li>Copia del DNI / Pasaporte y del permiso de residencia (o contrato de trabajo que pruebe tu solvencia inminente).</li>
                    <li>Tus las tres últimas nóminas mensuales.</li>
                    <li><strong>Extracto del registro de deudas (Betreibungsauszug / Extrait de l'Office des Poursuites)</strong>: Certificado, usualmente por los últimos 3 meses, demostrando que no debes dinero en Suiza. Puedes solicitarlo en tu comuna o digitalmente.</li>
                    <li>Copia de un seguro de Responsabilidad Civil (<i>RC / Privathaftpflichtversicherung</i>) si lo solicitan de antemano.</li>
                </ul>

                <h2>Regla de oro de los ingresos</h2>
                <p>Como estándar general de cualquier agencia suiza, <strong>el alquiler mensual bruto no puede representar más de un tercio (1/3) del sueldo bruto del hogar</strong>.</p>
            </div>
        `
    },

    // 13. Fianzas de alquiler
    "articulo-fianzas": {
        title: "Depositi cauzionali e diritti degli inquilini",
        description: "Come funzionano le garanzie d'affitto (SwissCaution) e l'ASLOCA.",
        keywords: "fianza alquiler suiza, swisscaution, asloca, mieterverband",
        audience: 'resident',
        category: `Alloggi`,
        hub: 'vivienda',
        readingTime: 3,
        summary: `Il deposito massimo legale è pari a 3 mesi di affitto.`,
        content: `
            <div class="page-header">
                <h1>Fianzas, cuenta de garantía y protección del inquilino</h1>
            </div>
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

    // 14. Costo de vida
    "articulo-costo-vida": {
        title: "Costo della vita in Svizzera",
        description: "Un esempio dettagliato di budget mensile svizzero.",
        keywords: "presupuesto suiza, el costo de vivir en suiza, precios suiza",
        category: `Costo della Vita`,
        hub: 'vivir-en-suiza',
        readingTime: 4,
        summary: `Uno stipendio di 5000 CHF può essere limitato dopo le spese fisse.`,
        summary: `Un sueldo de 5000 CHF puede parecer alto, pero tras seguros, impuestos y alquiler, el margen de maniobra se reduce significativamente.`,
        content: `
            <div class="page-header">
                <h1>El coste real de vivir en Suiza</h1>
            </div>
            <div class="article-content">
                <p>Si bien los salarios suizos son los más altos de Europa Occidental, los precios de los bienes y servicios también están a la par (la llamada "Ilot de cherté suisse").</p>

                <h2>Presupuesto Orientativo Mensual (1 persona)</h2>
                <p>Gastos medios para una persona soltera viviendo en un núcleo urbano promedio (fuera del centro súper exclusivo o campo lejano):</p>
                <ul>
                    <li><strong>Alquiler mensual (incluidos gastos carga, internet):</strong> 1.500 - 2.200 CHF (los precios en Ginebra y Zúrich son notablemente mayores a la media nacional).</li>
                    <li><strong>Seguro de Salud Obligatorio (LAMal):</strong> 350 - 450 CHF.</li>
                    <li><strong>La cesta de la compra y supermercado:</strong> 400 - 600 CHF (Migros, Coop, Aldi, Lidl).</li>
                    <li><strong>Transporte (Abono mensual zona centro):</strong> 70 - 150 CHF.</li>
                    <li><strong>Impuestos y Previsión Social (AVS/LPP/Quellensteuer):</strong> Ya están deducidos de tu sueldo bruto, representan aproximadamente el 15-25% antes de pagarte en cuenta (dependiendo del cantón).</li>
                </ul>

                <h2>¿Se vive mejor?</h2>
                <p>Pese a lo caro, el <em>poder adquisitivo disponible</em> al final de mes es en general superior al del resto de Europa. El sobrante económico real tras cubrir las altas necesidades básicas permite tener capacidad de ahorro, si el estilo de vida no es desmedido.</p>
            </div>
        `
    },

    // 15. Trabajadores fronterizos (frontaliers)
    "articulo-frontaliers": {
        title: "Lavoratori frontalieri: regole e fiscalità",
        description: "Tutto ciò che devi sapere se vivi in Italia/Francia e lavori in Svizzera.",
        keywords: "frontalier suiza, permiso G, impuestos fronterizos suiza, vivir en francia trabajar en suiza",
        category: `Frontalieri`,
        hub: 'fronterizos',
        readingTime: 4,
        summary: `Il permesso G ti permette di vivere all'estero e lavorare in Svizzera.`,
        summary: `El Permiso G te permite vivir en Francia/Alemania y trabajar en Suiza. Debes elegir entre la LAMal o el seguro de tu país (derecho de opción).`,
        content: `
            <div class="page-header">
                <h1>Trabajadores fronterizos (Frontaliers): Permiso G y fiscalidad</h1>
            </div>
            <div class="article-content">
                <p>Los <em>frontaliers</em> son personas que residen de forma permanente en un país vecino (principalmente Francia, Alemania e Italia) y cruzan la frontera para trabajar en Suiza.</p>

                <h2>El Permiso G</h2>
                <p>Para trabajar en esta modalidad, necesitas un <strong>Permiso G (Permiso de trabajo fronterizo)</strong>. Una condición clave para mantenerlo es que debes retornar a tu residencia principal en el extranjero al menos una vez por semana (la mayoría lo hace a diario).</p>

                <h2>Fiscalidad del Frontalier</h2>
                <p>Las reglas impositivas varían enormemente según el cantón donde trabajes y tu país de residencia (debido a los tratados de doble imposición).</p>
                <ul>
                    <li><strong>Ginebra:</strong> Si vives en Francia y trabajas en Ginebra, el cantón de Ginebra te retiene el impuesto a la fuente directamente.</li>
                    <li><strong>Vaud, Neuchâtel, Jura:</strong> En estos cantones, generalmente el impuesto se paga íntegramente en Francia y el empleador suizo no te retiene impuestos a la fuente (si entregas a tiempo el certificado de residencia fiscal).</li>
                </ul>

                <h2>Seguro de Salud (El Derecho de Opción)</h2>
                <p>Al comenzar a trabajar en Suiza, tienes 3 meses para ejercer tu "Derecho de opción". Puedes elegir asegurarte en el sistema suizo (LAMal frontalier) o en el sistema de tu país de residencia (ej. CMU francesa). <strong>Atención:</strong> Esta decisión es irrevocable. Si no eliges, se te afiliará automáticamente a la LAMal suiza.</p>
            </div>
        `
    },

    // 16. Reconocimiento de diplomas
    "articulo-diplomas": {
        title: "Riconoscimento dei diplomi stranieri",
        description: "Come far riconoscere la tua laurea o qualifica professionale.",
        keywords: "homologar titulo suiza, reconocimiento diplomas suiza, sefri, convalidar titulo",
        audience: 'newcomer',
        category: `Procedure Ordinarie`,
        hub: 'tramites',
        readingTime: 3,
        summary: `Solo le professioni regolamentate richiedono il riconoscimento.`,
        content: `
            <div class="page-header">
                <h1>Reconocimiento de diplomas extranjeros</h1>
            </div>
            <div class="article-content">
                <p>Si tienes una titulación extranjera y quieres ejercer en Suiza, el primer paso es saber si tu profesión está regulada (ej. medicina, enfermería, abogacía, docencia). Si no está regulada, no es obligatorio el reconocimiento oficial, y el mercado laboral decidirá el valor de tu título.</p>

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

    // 17. Sistema escolar suizo
    "articulo-sistema-escolar": {
        title: "Il sistema scolastico svizzero spiegato",
        description: "Guida su come funziona la scuola e la formazione duale in Svizzera.",
        keywords: "colegio suiza, educacion suiza, sistema escolar suizo, escuela infantil suiza",
        audience: 'family',
        category: `Famiglia`,
        hub: 'tramites',
        readingTime: 5,
        summary: `Il sistema scolastico indirizza spesso presto verso la formazione professionale.`,
        content: `
            <div class="page-header">
                <h1>El sistema educativo público suizo</h1>
            </div>
            <div class="article-content">
                <p>La educación pública en Suiza es gratuita, obligatoria integralmente durante 11 años y de excelente calidad. Sin embargo, su estructura es muy cantonal (cada cantón define su plan de estudios) y tiene una particularidad: la orientación profesional temprana.</p>

                <h2>Estructura General (Modelo HarmoS)</h2>
                <ul>
                    <li><strong>Escuela Infantil (Ecole Enfantine / Kindergarten):</strong> Empieza a los 4 años. Son 2 años obligatorios de preparación.</li>
                    <li><strong>Escuela Primaria (Ecole Primaire / Primarschule):</strong> De los 6 a los 12 años (grados 3 a 8). Se introduce rápidamente un segundo y tercer idioma (otro idioma nacional e inglés).</li>
                    <li><strong>Grado Secundario I (Cycle d'Orientation / Sekundarstufe I):</strong> De los 12 a los 15 años (grados 9 a 11).</li>
                </ul>

                <h2>La Segregación o "Filières"</h2>
                <p>A diferencia de España, en Suiza entorno a los 12 o 15 años los alumnos son orientados ("segregados") según sus calificaciones y aptitudes hacia dos vías muy diferenciadas:</p>
                <ol>
                    <li><strong>La vía vocacional (Formación Profesional / Aprendizaje dual):</strong> Más del 60% de los jóvenes suizos optan por hacer un "CFC" (Certificado Federal de Capacidad). Trabajan 3 o 4 días en una empresa aprendiendo un oficio y van 1 o 2 días a clase. Es una vía muy prestigiosa y remunerada desde el inicio.</li>
                    <li><strong>La vía académica (Gimnasio / Collège / Maturité / Matura):</strong> Para aquellos con mejores notas académicas, preparándolos para entrar directamente a la Universidad o a las Escuelas Politécnicas Federales.</li>
                </ol>
                <p><em>Nota:</em> El sistema es permeable; un estudiante de formación profesional puede acabar logrando accesos a la universidad en el futuro mediante "pasarelas".</p>
            </div>
        `
    },

    // 18. Sistema de salud (médicos y urgencias)
    "articulo-sistema-salud": {
        title: "Rete sanitaria: medici e urgenze",
        description: "Trovare un medico e capire come pagare le fatture mediche.",
        keywords: "medico cabecera suiza, urgencias suiza, pediatra suiza, sistema salud suizo",
        audience: 'resident',
        category: `Rete Medica`,
        hub: 'salud',
        readingTime: 4,
        summary: `Evita gli ospedali per i disturbi minori, vai alle guardie mediche.`,
        content: `
            <div class="page-header">
                <h1>Médicos, Urgencias y Facturas en Suiza</h1>
            </div>
            <div class="article-content">
                <p>Entender cómo navegar por la práctica diaria de la sanidad suiza te ahorrará problemas (y sustos económicos).</p>

                <h2>Elegir un médico según tu modelo de seguro</h2>
                <p>El modelo más barato de la LAMal suele ser el "Modelo HMO" o "Médico de Familia". Esto significa que no puedes ir directamente a un especialista u hospital sin llamar primero a una línea centralizada, o sin pasar estrictamente por tu médico de cabecera asignado. Si te saltas esto, el seguro puede rehusar pagar la factura.</p>
                
                <h2>Las Urgencias (Urgences / Notfall)</h2>
                <p>Ir a urgencias de un hospital debe ser genuinamente para casos graves. Para atenciones rápidas pero no vitales, lo habitual en Suiza es acudir a la "Permanence Médicale" (Policlínicas), donde te atienden rápido por orden de llegada con un coste mucho menor que el hospital.</p>

                <h2>El sistema de pago: El Tiers-garant vs Tiers-payant</h2>
                <p>Cuando vas a la farmacia o recibes una factura médica, te enfrentarás a dos modelos:</p>
                <ul>
                    <li><strong>Tiers-garant (Pago directo):</strong> Te llega la factura a casa (o tú la pagas en la farmacia), tú la adelantas de tu bolsillo, y luego envías el código QR o justificante a tu seguro. Si ya superaste tu franquicia, el seguro te reingresará el dinero a ti.</li>
                    <li><strong>Tiers-payant:</strong> El médico o la farmacia envía la factura directamente a la aseguradora. La aseguradora lo paga, y si no has superado tu franquicia, la aseguradora te emitirá una factura a ti para que le pagues lo correspondiente.</li>
                </ul>
            </div>
        `
    },

    // 19. Transporte público y abonos
    "articulo-transporte": {
        title: "Trasporti pubblici: FFS, Metà-presso e AG",
        description: "La rete ferroviaria più fitta d'Europa. Abbonamenti spiegati.",
        keywords: "trenes suiza, SBB CFF FFS, abono medio precio suiza, halbtax, demi tarif, abono general AG",
        category: `Trasporto Pubblico`,
        hub: 'vivir-en-suiza',
        readingTime: 4,
        summary: `L'abbonamento Metà-prezzo è quasi obbligatorio per i residenti.`,
        summary: `El abono Demi-tarif / Halbtax (mitad de precio) es casi obligatorio para cualquier residente si planea usar el transporte público ocasionalmente.`,
        content: `
            <div class="page-header">
                <h1>Transporte público suizo y los abonos SBB/CFF/FFS</h1>
            </div>
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

    // 20. Ciudadanía suiza
    "articulo-ciudadania": {
        title: "Cittadinanza svizzera e naturalizzazione",
        description: "Requisiti per ottenere il passaporto svizzero e gli esami.",
        keywords: "nacionalidad suiza, naturalizacion suiza, ciudadania suiza, pasaporte suizo",
        audience: 'newcomer',
        category: `Procedure Ordinarie`,
        hub: 'tramites',
        readingTime: 5,
        summary: `La naturalizzazione richiede 10 anni di residenza e un Permesso C.`,
        content: `
            <div class="page-header">
                <h1>Ciudadanía suiza y proceso de naturalización</h1>
            </div>
            <div class="article-content">
                <p>Obtener el pasaporte con la cruz blanca no es un trámite puramente burocrático, sino que los suizos lo entienden como la constatación final de un nivel de integración óptimo.</p>

                <h2>Requisitos de la Naturalización Ordinaria</h2>
                <p>Si no estás casado con un/una ciudadana suiza, deberás seguir la ruta de naturalización ordinaria, cuyo principal requisito son <strong>10 años de residencia en Suiza</strong> (los años entre los 8 y los 18 años cuentan el doble).</p>

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
    }
};
