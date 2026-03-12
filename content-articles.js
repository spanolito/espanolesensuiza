/**
 * content-articles.js
 * Contains the 20 SEO optimized deep-dive articles.
 */

window.siteContent = window.siteContent || { es: { global: {}, pages: {}, articles: {} } };

window.siteContent.es.articles = {
    // 1. Permisos de residencia
    "articulo-permisos": {
        title: "Permisos de residencia en Suiza: L, B, C y diferencias",
        description: "Todo sobre los permisos suizos para residentes extranjeros. Conoce las diferencias entre permiso L, B y C.",
        keywords: "permisos Suiza, permiso L, permiso B, permiso C, vivir en Suiza, SEM",
        category: "Trámites Ordinarios",
        hub: "tramites",
        slug: "permisos-suiza",
        readingTime: 7,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/permiso-residencia-suiza.png",
        imageAlt: "Oficina del Contrôle des habitants en Suiza: persona recibiendo su permiso de residencia",
        summary: "Existen tres permisos principales (L, B, C). Tu nacionalidad (UE vs Terceros Países) y duración del contrato dictan cuál recibes. Puedes trabajar antes de tener la tarjeta física.",
        content: `
            <div class="page-header">
                <h1>Permisos de residencia en Suiza: permit L, B, C y sus diferencias</h1>
                <img src="media/permiso-residencia-suiza.png" alt="Oficina del Contrôle des habitants en Suiza" class="article-featured-image" loading="lazy">
            </div>
            <div class="article-content">
                <p>Mudarse a Suiza implica registrarse y obtener un título de residencia. Si procedes de un país de la UE/EFTA (incluyendo España), el proceso está facilitado por el Acuerdo de Libre Circulación de Personas (ALCP). Esto significa que llegar con un contrato de trabajo en mano es suficiente para iniciar el proceso.</p>

                <div class="callout info">
                    <strong>Lo más importante primero:</strong> En Suiza, el permiso físico (la tarjeta) puede tardar semanas en llegar por correo. Puedes empezar a trabajar legalmente <strong>antes de tener la tarjeta en mano</strong>, con el justificante de registro en la comuna. El empleador lo sabe y lo acepta.
                </div>

                <h2>Permiso L — Corta Duración</h2>
                <p>Para quienes permanecen en Suiza menos de 12 meses.</p>
                <ul>
                    <li><strong>Contratos temporales:</strong> Si tienes un contrato de entre 3 y 12 meses, se te asignará este permiso.</li>
                    <li><strong>Buscadores de empleo:</strong> Tras 3 meses buscando empleo, puedes solicitar un Permiso L que se renueva bajo ciertas condiciones probando medios económicos.</li>
                    <li><strong>Validez:</strong> Dura lo mismo que el contrato y se renueva si este se renueva.</li>
                    <li><strong>Limitación:</strong> Con Permiso L estás vinculado al cantón donde trabajas. No puedes cambiar libremente.</li>
                </ul>

                <h2>Permiso B — Residencia (el más habitual para recién llegados)</h2>
                <p>Para residentes con contratos de larga duración o indefinidos. Es el permiso más habitual entre españoles con contrato.</p>
                <ul>
                    <li><strong>Validez:</strong> 5 años para ciudadanos UE/EFTA con contrato de al menos 12 meses o indefinido.</li>
                    <li><strong>Movilidad:</strong> Permite cambio de cantón y de empleador libremente.</li>
                    <li><strong>Impuestos:</strong> Con Permiso B te retienen el impuesto a la fuente (Quellensteuer) directamente en nómina. No haces declaración ordinaria, salvo que superes 120.000 CHF brutos anuales.</li>
                    <li><strong>Si pierdes el trabajo:</strong> No pierdes automáticamente el permiso. Tienes derecho a seguir residiendo mientras estés en la caja de paro (ORP) buscando empleo activamente.</li>
                </ul>

                <h2>Permiso C — Establecimiento Permanente</h2>
                <p>Equivale a la residencia permanente. Es el destino final para quienes se instalan definitivamente en Suiza.</p>
                <ul>
                    <li><strong>Obtención:</strong> Tras 5 años de residencia ininterrumpida para ciudadanos españoles (y de la UE-15).</li>
                    <li><strong>Derechos laborales:</strong> Mismos que los suizos (excepto voto). Puedes abrir empresa libremente.</li>
                    <li><strong>Ventaja fiscal:</strong> Pasas a hacer declaración anual ordinaria, dejando de pagar el impuesto a la fuente mensual. En muchos casos resulta más favorable.</li>
                    <li><strong>Renovación:</strong> Cada 5 años, casi automática mientras mantengas la residencia.</li>
                </ul>

                <h2>Permiso G — Trabajador Fronterizo</h2>
                <p>Para quienes viven en Francia, Alemania o Italia y trabajan en Suiza. La condición es volver al país de residencia al menos una vez por semana. La mayoría lo hace a diario.</p>

                <h2>Cuadro comparativo rápido</h2>
                <table class="info-table">
                    <thead><tr><th>Permiso</th><th>Para quién</th><th>Duración</th><th>Cambio libre de cantón</th></tr></thead>
                    <tbody>
                        <tr><td><strong>L</strong></td><td>Contrato &lt;12 meses</td><td>= contrato</td><td>No</td></tr>
                        <tr><td><strong>B</strong></td><td>Contrato &gt;12 meses / indefinido</td><td>5 años (UE)</td><td>Sí</td></tr>
                        <tr><td><strong>C</strong></td><td>Residentes &gt;5 años en Suiza</td><td>5 años renovable</td><td>Sí</td></tr>
                        <tr><td><strong>G</strong></td><td>Fronterizos (viven fuera)</td><td>5 años (UE)</td><td>N/A</td></tr>
                    </tbody>
                </table>

                <div class="callout info">
                    <strong>Fuente Oficial:</strong> Verifica las condiciones de renovación en el portal de la <a href="https://www.sem.admin.ch/sem/es/home/themen/aufenthalt.html" target="_blank">Secretaría de Estado de Migración (SEM)</a>.
                </div>
            </div>
        `
    },

    // 2. Registro en la comuna
    "articulo-registro": {
        title: "Cómo registrarse al llegar a Suiza (Control de Habitantes)",
        description: "Guía paso a paso sobre el registro en tu nueva comuna (Contrôle des habitants) tras mudarte a Suiza. Plazos, documentos y qué pasa después.",
        keywords: "registro comuna suiza, empadronamiento suiza, controle des habitants, vivir en Suiza, primer mes suiza",
        category: "Trámites Iniciales",
        hub: "tramites",
        slug: "registrarse-en-suiza",
        readingTime: 5,
        featuredImage: "media/registro-comuna-suiza.png",
        imageAlt: "Persona llegando al Rathaus (ayuntamiento) suizo para registrarse con su maleta",
        summary: "Debes registrarte en tu comuna obligatoriamente durante los primeros 14 días. Con el justificante ya puedes trabajar. Lleva pasaporte, foto y contrato de alquiler o trabajo.",
        content: `
            <div class="page-header">
                <h1>Cómo registrarse cuando llegas a Suiza (inscripción en la comuna)</h1>
                <img src="media/registro-comuna-suiza.png" alt="Persona llegando al ayuntamiento suizo para registrarse" class="article-featured-image" loading="lazy">
            </div>
            <div class="article-content">
                <p>El primer trámite obligatorio al llegar a Suiza es el registro en la oficina de Control de Habitantes (<i>Contrôle des habitants / Einwohnerkontrolle</i>) de tu municipio. Sin este paso no existes legalmente en el país y no puedes empezar a trabajar ni abrir una cuenta bancaria.</p>

                <div class="callout warning">
                    <strong>Plazo máximo:</strong> Tienes <strong>14 días</strong> desde tu llegada para registrarte (en algunos cantones, 8 días). Además, debes hacerlo <strong>antes de tu primer día de trabajo</strong>. No esperes a tener el piso definitivo para hacerlo.
                </div>

                <h2>¿Qué hago si no tengo piso todavía?</h2>
                <p>Si estás en un hotel, Airbnb o en casa de un amigo de forma temporal, puedes registrarte en esa dirección provisional. Lo más importante es no dejar pasar el plazo. Cuando te mudes al piso definitivo, haces el cambio de domicilio en la misma oficina.</p>
                <p>Si te alojas en casa de alguien, esa persona (titular del contrato de alquiler) necesita firmar un <strong>certificado de alojamiento</strong> para que puedas registrarte.</p>

                <h2>Documentos Necesarios</h2>
                <ul>
                    <li>Pasaporte o Documento de Identidad (DNI) válido.</li>
                    <li>Contrato de trabajo firmado, o carta de admisión a estudios si eres estudiante.</li>
                    <li>Contrato de alquiler firmado, o certificado de alojamiento si te hospedas en casa de un particular.</li>
                    <li>Fotografía tamaño carnet (algunos cantones la hacen ellos directamente).</li>
                    <li>Acta de matrimonio o nacimiento de hijos si aplica para reagrupación familiar.</li>
                </ul>

                <h2>El Proceso Paso a Paso</h2>
                <ol>
                    <li>Busca el horario y dirección de la oficina de Control de Habitantes de tu comuna.</li>
                    <li>En ciudades grandes (Ginebra, Zúrich, Lausana) suele ser necesaria <strong>cita previa</strong>. Reserva online desde el primer día.</li>
                    <li>Presenta los documentos. Pagarás una tasa administrativa entre <strong>65 y 100 CHF</strong> según el tipo de permiso y el cantón.</li>
                    <li>Recibirás al instante un <strong>certificado provisional de residencia</strong> ("Attestation de résidence"). Con este papel ya puedes trabajar.</li>
                    <li>La tarjeta física del permiso llega por correo postal en 4–12 semanas. Mientras tanto, el certificado provisional es suficiente.</li>
                </ol>

                <h2>¿Qué hago después del registro?</h2>
                <p>Una vez registrado, pon en marcha estos dos trámites urgentes:</p>
                <ul>
                    <li><strong>Seguro médico (LAMal):</strong> Tienes 3 meses desde la llegada para contratarlo. El efecto es retroactivo: si no lo contratas antes, pagarás igualmente desde el día 1.</li>
                    <li><strong>Cuenta bancaria:</strong> Con el certificado de registro ya puedes abrir cuenta en la mayoría de bancos. Sin IBAN suizo, tu empresa no puede pagarte.</li>
                </ul>

                <h2>Cambios de domicilio dentro de Suiza</h2>
                <p>Cada vez que te mudes, aunque sea dentro de la misma ciudad pero cambiando de commune, tienes que registrarte en la nueva oficina y darte de baja en la anterior. El plazo es el mismo: 14 días.</p>

                <div class="callout info">
                    <strong>Familias con hijos:</strong> Necesitaréis los certificados de nacimiento apostillados y, si están en edad escolar, debéis inscribirlos en el colegio público de la zona en los primeros días.
                </div>
            </div>
        `
    },

    // 2b. Trámites iniciales completos (NUEVO - fusión posts Facebook)
    "articulo-tramites-llegada": {
        title: "Checklist completo: trámites al llegar a Suiza el primer mes",
        description: "Todo lo que debes hacer el primer mes en Suiza ordenado por urgencia: registro, seguro médico, cuenta bancaria, transporte, basura y más.",
        keywords: "tramites llegada suiza, checklist llegada suiza, primeros pasos suiza, recien llegado suiza, que hacer al llegar suiza",
        category: "Trámites Iniciales",
        hub: "tramites",
        slug: "tramites-llegada-suiza",
        readingTime: 7,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/tramites-llegada-suiza.png",
        imageAlt: "Documentos suizos: permiso de residencia, tarjeta de seguro médico, llaves y checklist",
        summary: "Los primeros 30 días en Suiza son críticos. Hay trámites con plazos estrictos: registro en 14 días, seguro médico en 3 meses. Esta guía te dice qué hacer, cuándo y en qué orden.",
        content: `
            <div class="page-header">
                <h1>Checklist de trámites al llegar a Suiza: el primer mes</h1>
                <img src="media/tramites-llegada-suiza.png" alt="Documentos y checklist para los primeros trámites en Suiza" class="article-featured-image" loading="lazy">
            </div>
            <div class="article-content">
                <p>Los primeros días en Suiza pueden ser abrumadores. Hay mucho que hacer, algunos trámites tienen plazos estrictos y hacerlos en el orden equivocado puede complicar todo. Esta lista te dice qué hacer primero.</p>

                <div class="callout warning">
                    <strong>Regla básica en Suiza:</strong> La ignorancia de las normas no es excusa. Si no te registras en 14 días, pueden multarte. Si no contratas el seguro médico en 3 meses, te lo asignan ellos y pagas igualmente desde el día 1. El sistema es preciso y espera que tú también lo seas.
                </div>

                <h2>Semana 1 — Antes de empezar a trabajar</h2>

                <h3>✅ 1. Regístrate en la comuna (Control de Habitantes)</h3>
                <p>Es el primer trámite y desbloquea todos los demás. Con el certificado provisional ya eres legal y puedes incorporarte al trabajo aunque la tarjeta física tarde semanas.</p>
                <p><strong>Qué llevar:</strong> DNI/Pasaporte, contrato de trabajo o alquiler, dirección donde resides (aunque sea temporal).</p>
                <p><strong>Coste:</strong> 65–100 CHF según cantón y tipo de permiso.</p>

                <h3>✅ 2. Abre una cuenta bancaria</h3>
                <p>Tu empleador necesita un IBAN suizo para pagarte el salario. Sin cuenta bancaria suiza, no cobras. Con el certificado de registro, ya puedes ir al banco.</p>
                <p><strong>Opción rápida (digital):</strong> Neon, Yuh o Revolut. Cuenta activa en 24 horas sin ir a sucursal.</p>
                <p><strong>Opciones tradicionales:</strong> PostFinance (la más extendida), UBS, Raiffeisen, Migros Bank.</p>

                <h2>Primeras 2 semanas</h2>

                <h3>✅ 3. Contrata el seguro médico (LAMal)</h3>
                <p>Tienes hasta 3 meses desde la llegada. No esperes. Si enfermases el día 2 sin seguro, igualmente pagarías las primas desde el día 1 cuando lo contrates, con efecto retroactivo.</p>
                <p><strong>Herramienta oficial:</strong> Compara precios en <a href="https://www.priminfo.admin.ch" target="_blank">Priminfo.admin.ch</a>. La cobertura básica es idéntica en todas las aseguradoras; solo varía el precio.</p>
                <p><strong>Decide la franquicia:</strong> La mínima es 300 CHF (prima más alta) y la máxima 2.500 CHF (prima más baja). Si eres sano, la franquicia alta suele ser más rentable.</p>

                <h3>✅ 4. Comunica tu estado civil y número de hijos al empleador</h3>
                <p>Si tienes pareja o hijos a cargo, el empleador necesita estos datos para aplicar la tarifa fiscal correcta del impuesto a la fuente. Un error inicial es difícil de corregir después.</p>

                <h2>Primer mes completo</h2>

                <h3>✅ 5. Obtén el Demi-tarif para el transporte</h3>
                <p>Si vas a usar trenes o transporte público, el <strong>Demi-tarif / Halbtax</strong> (unos 190 CHF anuales) te divide el precio de todos los billetes a la mitad en todo el país. Se amortiza en pocas semanas. Compra en <a href="https://www.sbb.ch" target="_blank">sbb.ch</a> o en cualquier taquilla CFF/SBB.</p>

                <h3>✅ 6. Asegúrate de tener tu nombre en el buzón de correo</h3>
                <p>En Suiza, la administración sigue funcionando principalmente por correo postal. Recibirás cartas importantes desde el primer día: tarjeta de permiso, facturas del seguro médico, cartas fiscales. Si el buzón no tiene tu nombre, esas cartas pueden no llegarte.</p>

                <h3>✅ 7. Aprende el sistema de basura</h3>
                <p>En Suiza la gestión de residuos está regulada y se controla. En muchos cantones existen <strong>bolsas de basura oficiales con tasa incluida</strong> que son las únicas que puedes usar. Tirar en bolsas normales puede acarrear multas. Pregunta en tu edificio o en la commune desde el primer día.</p>

                <h2>Primeros 3 meses</h2>

                <h3>✅ 8. Infórmate sobre seguros complementarios</h3>
                <p>El seguro básico (LAMal) no cubre dentista, gafas u hospitalización privada. Los seguros complementarios (LCA) cubren estas necesidades, pero requieren aceptación médica. Si tienes problemas de salud previos, actualos cuanto antes.</p>

                <h3>✅ 9. Considera abrir el tercer pilar (3a)</h3>
                <p>El tercer pilar es un ahorro privado para la jubilación con deducciones fiscales muy ventajosas. Cuanto antes empieces a cotizar, más se acumula. Bancos y aseguradoras ofrecen este producto.</p>

                <div class="callout tip">
                    <strong>Veteranos dicen:</strong> El primer mes en Suiza es el más difícil logísticamente. Habrá papeles y esperas. La clave es empezar por el registro y el seguro médico. El resto se ordena solo.
                </div>
            </div>
        `
    },

    // 2c. Trabajar sin el permiso físico (NUEVO)
    "articulo-trabajar-sin-permiso-fisico": {
        title: "¿Puedo trabajar en Suiza antes de tener el permiso físico?",
        description: "Sí, puedes trabajar legalmente en Suiza aunque el permiso físico tarde semanas en llegar. Explicamos cómo funciona el certificado provisional.",
        keywords: "trabajar sin permiso suiza, permiso provisional suiza, attestation residence suiza, esperar permiso suiza",
        category: "Trámites Ordinarios",
        hub: "tramites",
        slug: "trabajar-antes-permiso-fisico-suiza",
        readingTime: 3,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/permiso-residencia-suiza.png",
        imageAlt: "Certificado provisional de residencia suiza entregado en el mostrador del Contrôle des habitants",
        summary: "Puedes empezar a trabajar desde el primer día tras registrarte en la comuna. El permiso físico puede tardar semanas, pero el comprobante de registro ya tiene validez legal.",
        content: `
            <div class="page-header">
                <h1>¿Puedo trabajar sin tener todavía el permiso físico en Suiza?</h1>
            </div>
            <div class="article-content">
                <p>Esta es una de las dudas más frecuentes de los recién llegados y la respuesta genera mucha confusión: <strong>sí, puedes trabajar legalmente en Suiza aunque la tarjeta física del permiso no haya llegado todavía</strong>.</p>

                <h2>Cómo funciona el proceso</h2>
                <p>Cuando te registras en la oficina del Control de Habitantes, recibes en el acto un <strong>certificado provisional de residencia</strong> ("Attestation de résidence" en francés, "Meldebestätigung" en alemán). Este documento acredita legalmente que estás registrado y autorizado a residir y trabajar en Suiza.</p>
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

    // 2d. Reagrupación familiar (NUEVO)
    "articulo-reagrupacion-familiar": {
        title: "Reagrupación familiar en Suiza: cómo traer a tu familia",
        description: "Guía completa para traer a tu pareja e hijos a Suiza. Condiciones, documentación, plazos y derechos de los familiares reagrupados.",
        keywords: "reagrupacion familiar suiza, traer familia suiza, permiso familiar suiza, conyuge suiza, apostilla suiza",
        category: "Trámites Ordinarios",
        hub: "tramites",
        slug: "reagrupacion-familiar-suiza",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        featuredImage: "media/reagrupacion-familiar-suiza.png",
        imageAlt: "Familia feliz llegando a Suiza con maletas en una estación de tren con los Alpes de fondo",
        summary: "Si tienes Permiso B o C puedes traer a tu cónyuge e hijos menores de 18 años. Los familiares obtienen su propio permiso y tienen derecho a trabajar desde el primer día.",
        content: `
            <div class="page-header">
                <h1>Reagrupación familiar en Suiza: cómo funciona y qué necesitas</h1>
                <img src="media/reagrupacion-familiar-suiza.png" alt="Familia llegando a Suiza en tren con los Alpes de fondo" class="article-featured-image" loading="lazy">
            </div>
            <div class="article-content">
                <p>Uno de los momentos más importantes en la vida de un emigrante es poder traer a su familia. En Suiza, el proceso de reagrupación familiar está bien regulado y es factible para ciudadanos de la UE, pero tiene sus propias reglas y plazos.</p>

                <h2>¿Quién puede solicitar la reagrupación?</h2>
                <p>Pueden solicitarla los titulares de un <strong>Permiso B o C en vigor</strong>. Con Permiso L (corta duración) las posibilidades son muy limitadas. Los familiares que pueden ser reagrupados son:</p>
                <ul>
                    <li>Cónyuge (matrimonio oficial reconocido).</li>
                    <li>Pareja de hecho registrada.</li>
                    <li>Hijos menores de 18 años (incluidos los adoptivos).</li>
                    <li>En algunos casos, padres o familiares dependientes con necesidades acreditadas.</li>
                </ul>

                <h2>Condiciones que debe cumplir el residente en Suiza</h2>
                <ul>
                    <li><strong>Vivienda adecuada:</strong> El piso debe tener espacio suficiente para toda la familia. Las autoridades verifican esto.</li>
                    <li><strong>Medios económicos suficientes:</strong> No depender de la asistencia social.</li>
                    <li><strong>Permiso en vigor:</strong> Sin sanciones ni el permiso en proceso de revocación.</li>
                </ul>

                <h2>Documentación necesaria</h2>
                <ul>
                    <li>Formulario oficial de reagrupación familiar (oficina cantonal de migración).</li>
                    <li>Pasaportes de todos los familiares.</li>
                    <li>Certificado de matrimonio o unión de hecho <strong>apostillado y traducido</strong>.</li>
                    <li>Certificados de nacimiento de los hijos apostillados y traducidos.</li>
                    <li>Contrato de alquiler del piso con espacio suficiente.</li>
                    <li>Últimas nóminas o justificante de ingresos.</li>
                </ul>

                <div class="callout info">
                    <strong>La Apostilla de La Haya:</strong> Los documentos oficiales españoles deben llevar la Apostilla para ser válidos en Suiza. Se obtiene en el Ministerio de Asuntos Exteriores español o en las Delegaciones del Gobierno. Solicítala con antelación porque puede tardar días.
                </div>

                <h2>Plazos importantes</h2>
                <ul>
                    <li><strong>Ciudadanos UE con Permiso B:</strong> Dentro de los 5 años desde la obtención del permiso.</li>
                    <li><strong>Titulares de Permiso C:</strong> Sin límite de plazo.</li>
                </ul>
                <p>El proceso tarda entre 4 y 12 semanas dependiendo del cantón y la carga de trabajo.</p>

                <h2>¿Qué permiso reciben los familiares?</h2>
                <ul>
                    <li>Principal con Permiso B → familiares obtienen Permiso B.</li>
                    <li>Principal con Permiso C → familiares obtienen Permiso C.</li>
                </ul>
                <p><strong>Derecho a trabajar:</strong> Sí. El cónyuge tiene pleno derecho a trabajar con el permiso obtenido. Los hijos entran al sistema escolar público suizo automáticamente.</p>

                <div class="callout tip">
                    <strong>Consejo práctico:</strong> Si necesitas buscar un piso más grande para cumplir el requisito de vivienda adecuada, hazlo antes de presentar la solicitud. Es uno de los motivos más comunes de retraso en el proceso.
                </div>
            </div>
        `
    },

    // 3. Seguro de salud (LAMal)
    "articulo-lamal": {
        title: "Seguro de salud en Suiza (LAMal): cómo funciona",
        description: "El seguro médico es obligatorio en Suiza. Descubre cómo funciona la LAMal o seguro básico para residentes.",
        keywords: "seguro medico suiza, LAMal, KVG, vivir en Suiza, sistema salud suizo",
        category: "Seguro Médico",
        hub: "salud",
        slug: "seguro-medico-lamal-suiza",
        readingTime: 5,
        featuredImage: "media/seguro-medico-lamal.png",
        imageAlt: "Persona revisando su tarjeta de seguro médico suizo junto a documentos de la Krankenkasse",
        summary: "La LAMal es obligatoria y privada, no te cubre automáticamente el Estado. Tienes 3 meses para tramitarla, pagando atrasos desde el día 1.",
        content: `
            <div class="page-header">
                <h1>Seguro de salud en Suiza (LAMal): cómo funciona</h1>
                <img src="media/seguro-medico-lamal.png" alt="Persona revisando tarjeta de seguro médico suizo" class="article-featured-image" loading="lazy">
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
        title: "Franquicia y copago en el sistema de salud suizo",
        description: "Explicación detallada de la franquicia y el copago en los seguros médicos suizos (LAMal).",
        keywords: "franquicia LAMal, copago suiza, quote-part, seguro medico",
        audience: 'resident',
        category: 'Costos Médicos',
        hub: 'salud',
        slug: "franquicia-seguro-medico-suiza",
        readingTime: 4,
        summary: 'En Suiza tú pagas el 100% de los primeros gastos médicos hasta cubrir tu Franquicia elegida. Después, pagas un 10% de copago.',
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
        title: "Impuestos en Suiza: federal, cantonal y comunal",
        description: "Comprende el sistema de triple imposición en Suiza: de la Confederación, de los cantones y de las comunas.",
        keywords: "impuestos suiza, fiscalidad Suiza, cantones impuestos",
        audience: 'worker',
        category: 'Sistema Tributario',
        hub: 'impuestos',
        slug: "impuestos-en-suiza",
        readingTime: 5,
        featuredImage: "media/impuestos-suiza.png",
        imageAlt: "Persona revisando documentación fiscal con mapa de cantones suizos al fondo",
        summary: 'En Suiza pagas impuestos a 3 niveles. El cantonal y comunal suponen la mayor carga y varían drásticamente incluso cruzando la calle.',
        content: `
            <div class="page-header">
                <h1>Impuestos en Suiza: fiscalidad federal, cantonal y comunal</h1>
                <img src="media/impuestos-suiza.png" alt="Revisión fiscal con mapa de Suiza y cantones" class="article-featured-image" loading="lazy">
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
        title: "El impuesto a la fuente (Quellensteuer) explicado",
        description: "Qué es el impuesto a la fuente, a quiénes afecta y cómo se calcula en Suiza para extranjeros.",
        keywords: "impuesto fuente suiza, quellensteuer, impot a la source",
        audience: 'worker',
        category: 'Retenciones',
        hub: 'impuestos',
        slug: "impuesto-fuente-suiza",
        readingTime: 3,
        dateUpdated: 'Actualizado recientemente',
        summary: 'Si tienes Permiso B o L, la empresa descuenta tu impuesto a la fuente directamente. La tarifa depende del cantón, estado civil e hijos.',
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
        title: "Seguros sociales en Suiza: AVS, AI, LPP y Seguro de Desempleo (Paro)",
        description: "Desglose de los seguros sociales suizos: primer pilar (AVS/AI), segundo pilar (LPP/Caja de Pensiones) y paro.",
        keywords: "AVS suiza, LPP, paro suiza, sistema pensiones suizo",
        audience: 'worker',
        category: 'Trabajo',
        hub: 'trabajo',
        slug: "seguros-sociales-suiza",
        readingTime: 6,
        summary: 'El sistema de pensiones suizo se basa en 3 pilares: el AVS (estatal), la LPP (seguro profesional obligatorio) y el 3er pilar (ahorro privado).',
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
        title: "Salarios en Suiza por sector y región: ¿Cuánto se gana?",
        description: "Descubre cuál es el salario medio en Suiza, diferencias por cantón, el calculador Salarium y si existe el salario mínimo.",
        keywords: "salario suiza, sueldo medio suiza, salarium, salario minimo ginebra",
        category: 'Mercado Laboral',
        hub: 'trabajo',
        slug: "salarios-sueldo-suiza",
        readingTime: 5,
        summary: 'Suiza tiene salarios muy altos pero costos en proporción. Solo unos pocos cantones (ej. Ginebra, Neuchâtel) tienen salario mínimo legal.',
        summary: 'Suiza tiene salarios muy altos pero costos en proporción. Solo unos pocos cantones (ej. Ginebra, Neuchâtel) tienen salario mínimo legal.',
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
        title: "Contratos de trabajo en Suiza: derechos y obligaciones",
        description: "Todo sobre el contrato de trabajo suizo (CDI, CDD), las vacaciones legales y el pago de sueldo completo en caso de enfermedad.",
        keywords: "contrato trabajo suiza, derechos trabajador suiza, vacaciones suiza, code des obligations",
        category: 'Contratos',
        hub: 'trabajo',
        slug: "contratos-de-trabajo-suiza",
        readingTime: 4,
        featuredImage: "media/contrato-trabajo-suiza.png",
        imageAlt: "Dos personas firmándose el contrato de trabajo en una oficina moderna con vistas a Zúrich",
        summary: 'El mercado laboral suizo es muy liberal. El despido es libre (respetando los plazos de preaviso) y las vacaciones mínimas son 4 semanas.',
        content: `
            <div class="page-header">
                <h1>Contratos de trabajo en Suiza: derechos y obligaciones</h1>
                <img src="media/contrato-trabajo-suiza.png" alt="Firma de contrato de trabajo en Suiza" class="article-featured-image" loading="lazy">
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
        title: "El periodo de prueba y los plazos de preaviso en Suiza",
        description: "Conoce tus derechos durante el periodo de prueba suizo y cuánto tiempo de preaviso necesitas para renunciar o ser despedido.",
        keywords: "periodo prueba suiza, preaviso despido suiza, probezeit",
        audience: 'worker',
        category: 'Trabajo',
        hub: 'trabajo',
        slug: "periodo-prueba-preaviso-suiza",
        readingTime: 3,
        summary: 'El periodo de prueba estándar es de 1 a 3 meses. Durante este tiempo, cualquiera de las partes puede rescindir el contrato con 7 días de preaviso.',
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
        title: "Búsqueda de empleo en Suiza: Plataformas y Estrategias",
        description: "Dónde buscar trabajo, cómo hacer tu CV estilo suizo (foto, certificados) y principales portales de empleo.",
        keywords: "buscar empleo suiza, cv suiza, jobup, jobs.ch",
        category: 'Candidaturas',
        hub: 'trabajo',
        slug: "buscar-empleo-suiza",
        readingTime: 4,
        featuredImage: "media/buscar-empleo-suiza.png",
        imageAlt: "Persona buscando trabajo en Suiza en un café con vistas a Zúrich repasando su CV",
        summary: 'El CV al estilo suizo debe incluir foto, fecha de nacimiento y estado civil. Las plataformas más usadas son Jobup, Jobs.ch y LinkedIn.',
        content: `
            <div class="page-header">
                <h1>Cómo buscar empleo en Suiza</h1>
                <img src="media/buscar-empleo-suiza.png" alt="Persona buscando empleo en Suiza revisando su CV" class="article-featured-image" loading="lazy">
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
        title: "Alquilar una vivienda en Suiza: el proceso paso a paso",
        description: "Documentos necesarios (Betreibungsauszug) y el dosier que necesitas para conseguir un alquiler suizo en un mercado competitivo.",
        keywords: "alquilar piso suiza, apartamento ginebra zarich, dossier alquiler suiza",
        category: 'Contrato de Alquiler',
        hub: 'vivienda',
        slug: "alquilar-vivienda-suiza",
        readingTime: 5,
        featuredImage: "media/alquiler-vivienda-suiza.png",
        imageAlt: "Persona recibiendo las llaves de su apartamento de manos de un agente inmobiliario en Suiza",
        summary: 'El mercado de alquiler es muy competitivo. Necesitas un dosier impecable: extracto de no deudas (poursuites), contrato y 3 últimas nóminas.',
        content: `
            <div class="page-header">
                <h1>Cómo alquilar un piso en Suiza</h1>
                <img src="media/alquiler-vivienda-suiza.png" alt="Persona recibiendo las llaves del apartamento de un agente inmobiliario suizo" class="article-featured-image" loading="lazy">
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
        title: "Fianzas de alquiler y derechos del inquilino (ASLOCA/MV)",
        description: "Descubre cómo funcionan las garantías de alquiler suizas, alternativas con aseguradoras (SwissCaution) y asociaciones de defensa del inquilino.",
        keywords: "fianza alquiler suiza, swisscaution, asloca, mieterverband",
        audience: 'resident',
        category: 'Vivienda',
        hub: 'vivienda',
        slug: "fianzas-alquiler-suiza",
        readingTime: 3,
        summary: 'La fianza máxima legal es de 3 meses de alquiler. Puedes depositarla en un banco o usar seguros como SwissCaution.',
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
        title: "Costo de vida en Suiza: vivienda, alimentación e impuestos",
        description: "Ejemplo de presupuesto mensual suizo desglosado. ¿Es caro vivir en Suiza si vienes con salario suizo?",
        keywords: "presupuesto suiza, el costo de vivir en suiza, precios suiza",
        category: 'Costo de Vida',
        hub: 'vivir-en-suiza',
        slug: "costo-de-vida-suiza",
        readingTime: 4,
        summary: 'Un sueldo de 5000 CHF puede parecer alto, pero tras seguros, impuestos y alquiler, el margen de maniobra se reduce significativamente.',
        summary: 'Un sueldo de 5000 CHF puede parecer alto, pero tras seguros, impuestos y alquiler, el margen de maniobra se reduce significativamente.',
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
        title: "Trabajadores fronterizos (frontaliers): reglas y fiscalidad",
        description: "Todo lo que necesitas saber si vives en Francia, Alemania o Italia y trabajas en Suiza como frontalier (Permiso G).",
        keywords: "frontalier suiza, permiso G, impuestos fronterizos suiza, vivir en francia trabajar en suiza",
        category: 'Fronterizos',
        hub: 'fronterizos',
        slug: "trabajadores-fronterizos-suiza",
        readingTime: 4,
        summary: 'El Permiso G te permite vivir en Francia/Alemania y trabajar en Suiza. Debes elegir entre la LAMal o el seguro de tu país (derecho de opción).',
        summary: 'El Permiso G te permite vivir en Francia/Alemania y trabajar en Suiza. Debes elegir entre la LAMal o el seguro de tu país (derecho de opción).',
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
        title: "Reconocimiento de diplomas extranjeros en Suiza",
        description: "Cómo convalidar tu título universitario o de formación profesional español o latinoamericano en Suiza (SEFRI, Cruz Roja).",
        keywords: "homologar titulo suiza, reconocimiento diplomas suiza, sefri, convalidar titulo",
        audience: 'newcomer',
        category: 'Trámites Orientales',
        hub: 'tramites',
        slug: "homologar-titulos-suiza",
        readingTime: 3,
        summary: 'Solo las profesiones reguladas (médicos, profesores) necesitan reconocimiento obligatorio ante el SEFRI o MEBEKO.',
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
        title: "El sistema escolar en Suiza explicado",
        description: "Guía sobre cómo funciona el colegio en Suiza, la escuela pública, los idiomas y la segregación temprana (filières).",
        keywords: "colegio suiza, educacion suiza, sistema escolar suizo, escuela infantil suiza",
        audience: 'family',
        category: 'Familia',
        hub: 'tramites',
        slug: "sistema-educativo-suizo",
        readingTime: 5,
        summary: 'El sistema escolar orienta (segrega) a los alumnos rápido: más del 60% hace formación profesional dual (CFC) en lugar de bachillerato.',
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
        title: "Sistema de salud en Suiza: médicos, hospitales y urgencias",
        description: "Cómo encontrar médico de cabecera en Suiza, cómo funcionan las urgencias (Urgences / Notfall) y cómo pagar las facturas médicas.",
        keywords: "medico cabecera suiza, urgencias suiza, pediatra suiza, sistema salud suizo",
        audience: 'resident',
        category: 'Red Médica',
        hub: 'salud',
        slug: "medicos-urgencias-suiza",
        readingTime: 4,
        summary: 'Evita ir a las urgencias de un hospital por dolencias leves. Usa las Permanences Médicales o llama antes a tu seguro si tienes modelo HMO.',
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
        title: "Transporte público en Suiza: CFF/SBB, Halbtax y Abono General (AG)",
        description: "Suiza tiene la red de trenes más densa y puntual. Descubre los abonos Demi-tarif / Halbtax, el Abono general y cómo moverte.",
        keywords: "trenes suiza, SBB CFF FFS, abono medio precio suiza, halbtax, demi tarif, abono general AG",
        category: 'Transporte Público',
        hub: 'vivir-en-suiza',
        slug: "transporte-publico-suiza",
        readingTime: 4,
        summary: 'El abono Demi-tarif / Halbtax (mitad de precio) es casi obligatorio para cualquier residente si planea usar el transporte público ocasionalmente.',
        summary: 'El abono Demi-tarif / Halbtax (mitad de precio) es casi obligatorio para cualquier residente si planea usar el transporte público ocasionalmente.',
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
        title: "Ciudadanía suiza y el proceso de naturalización por residencia",
        description: "Requisitos para conseguir el pasaporte suizo. Años de residencia, nivel de idioma y la prueba de integración (la naturalización ordinaria).",
        keywords: "nacionalidad suiza, naturalizacion suiza, ciudadania suiza, pasaporte suizo",
        audience: 'newcomer',
        category: 'Trámites Orientales',
        hub: 'tramites',
        slug: "nacionalidad-suiza-pasaporte",
        readingTime: 5,
        summary: 'La naturalización ordinaria requiere 10 años de residencia, un Permiso C, nivel de idioma (B1/A2) y superar un examen comunal de integración.',
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
    },

    // 21. Subalquiler
    "articulo-subalquiler": {
        title: "Subalquiler de habitación o piso en Suiza: guía legal",
        description: "Todo sobre el subalquiler en Suiza: contratos, fianzas, derechos y obligaciones para inquilinos y subinquilinos.",
        keywords: "subalquiler suiza, alquiler habitacion suiza, contrato subarriendo, fianza subalquiler",
        category: "Vivienda",
        hub: "vivienda",
        slug: "subalquiler-vivienda-suiza",
        readingTime: 4,
        dateUpdated: "Marzo 2026",
        summary: "El subalquiler es legal y común en Suiza. Requiere autorización del propietario y, preferiblemente, un contrato por escrito para evitar malentendidos.",
        content: `
            <div class="page-header">
                <h1>Subalquiler en Suiza: lo que debes saber desde el primer día</h1>
            </div>
            <div class="article-content">
                <p>El subalquiler es una práctica muy extendida en Suiza, permitiendo que un inquilino principal arriende una habitación o la totalidad de la vivienda a un tercero. Sin embargo, para que sea seguro y legal, deben seguirse unas reglas claras.</p>
                
                <h2>1. El Contrato de Subalquiler</h2>
                <p>Aunque en Suiza los contratos verbales pueden tener validez, <strong>un contrato por escrito es imprescindible</strong> para evitar disputas. Debe incluir:</p>
                <ul>
                    <li>Identidad del inquilino principal y del subinquilino.</li>
                    <li>Objeto: ¿Es una habitación o el piso entero? Especificar zonas comunes.</li>
                    <li>Duración: Fecha de inicio y fin (si es determinado).</li>
                    <li>Precio y gastos: Especificar si incluye electricidad, internet, etc.</li>
                    <li>Preaviso: Tiempo necesario para rescindir el contrato.</li>
                </ul>

                <h2>2. La Fianza (Garantía)</h2>
                <p>Es habitual pedir entre 1 y 2 meses de fianza. Es importante recordar que:</p>
                <ul>
                    <li>La fianza <strong>no puede usarse como pago del último mes</strong>.</li>
                    <li>Debe devolverse íntegramente si no hay daños ni deudas pendientes.</li>
                    <li>Se recomienda realizar un pequeño inventario con fotos al entrar para evitar discusiones al salir.</li>
                </ul>

                <h2>3. Autorización del Propietario</h2>
                <p>Este es el punto más crítico: <strong>el subalquiler debe estar autorizado por el propietario del inmueble</strong>. Aunque no suele oponerse si no hay abuso (como subalquilar por un precio muy superior al original), hacerlo a escondidas puede ser motivo de rescisión del contrato principal.</p>

                <div class="callout info">
                    <strong>Consejo:</strong> Siempre deja todo "negro sobre blanco". En Suiza, la ambigüedad suele jugar en contra de quien no tiene pruebas por escrito.
                </div>
            </div>
        `
    },

    // 22. Jubilación (AVS / LPP)
    "articulo-jubilacion": {
        title: "Jubilación en Suiza: cuánto cobrarás según tu edad de llegada",
        description: "Análisis de la jubilación en Suiza (AVS y LPP) con ejemplos reales para quienes llegan con 30, 40 o 50 años.",
        keywords: "jubilacion suiza, pension suiza, AVS, LPP, cuanto cobro jubilacion suiza",
        category: "Previsión Social",
        hub: "trabajo",
        slug: "jubilacion-pension-suiza",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        summary: "La jubilación suiza se basa en tres pilares. Los años cotizados marcan la diferencia: cuanto antes llegues, más sólida será tu pensión.",
        content: `
            <div class="page-header">
                <h1>¿Cuánto se cobra al jubilarse en Suiza? Escenarios reales</h1>
            </div>
            <div class="article-content">
                <p>Una de las preguntas más frecuentes es qué pensión queda tras una vida laboral en Suiza. El sistema se apoya principalmente en dos pilares (AVS y LPP).</p>
                
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

    // 23. Vivir sin trabajar
    "articulo-vivir-sin-trabajar": {
        title: "Vivir en Suiza sin trabajar: requisitos para residentes UE",
        description: "Guía sobre cómo residir en Suiza sin actividad lucrativa (ahorros, rentas o jubilación) y qué permisos necesitas.",
        keywords: "vivir en suiza sin trabajar, permiso residencia ahorros, permiso B no lucrativo",
        category: "Trámites Ordinarios",
        hub: "tramites",
        slug: "residir-en-suiza-sin-trabajo",
        readingTime: 4,
        dateUpdated: "Marzo 2026",
        summary: "Es posible vivir en Suiza sin trabajar, pero debes demostrar medios económicos suficientes y disponer de un seguro médico completo (LAMal).",
        content: `
            <div class="page-header">
                <h1>Vivir en Suiza sin trabajar: lo que dice la ley</h1>
            </div>
            <div class="article-content">
                <p>Muchos se preguntan si es posible establecerse en Suiza sin tener un contrato de trabajo. La respuesta es sí, especialmente para ciudadanos de la UE/AELC, pero bajo condiciones estrictas.</p>
                
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

    // 24. AI (Assurance-invalidité)
    "articulo-ai-invalidez": {
        title: "La AI suiza (Assurance-invalidité): ayuda y reincorporación",
        description: "Comprende cómo funciona el seguro de invalidez en Suiza. Su objetivo principal es la reinserción laboral antes que la renta.",
        keywords: "AI suiza, invalidez suiza, seguro incapacidad, renta AI",
        category: "Seguros Sociales",
        hub: "salud",
        slug: "seguro-invalidez-ai-suiza",
        readingTime: 4,
        dateUpdated: "Marzo 2026",
        summary: "La AI no es una jubilación anticipada. Su filosofía es: 'primero rehabilitación, después la renta'. Busca que el trabajador siga siendo activo.",
        content: `
            <div class="page-header">
                <h1>El Seguro de Invalidez (AI) en Suiza: más que una pensión</h1>
            </div>
            <div class="article-content">
                <p>La <i>Assurance-invalidité</i> (AI) es una parte fundamental del sistema de seguridad social suizo. Sin embargo, su funcionamiento suele malinterpretarse por quienes vienen de otros sistemas.</p>
                
                <h2>Rehabilitación antes que Renta</h2>
                <p>A diferencia de otros países, el objetivo principal de la AI no es pagar una pensión vitalicia de inmediato, sino intentar que la persona recupere su capacidad laboral. Las medidas incluyen:</p>
                <ul>
                    <li>Rehabilitación médica y profesional.</li>
                    <li>Adaptación del puesto de trabajo o ayudas técnicas.</li>
                    <li>Reciclaje profesional (formación para un nuevo oficio).</li>
                </ul>

                <h2>¿Cuándo se cobra la renta?</h2>
                <p>La renta de invalidez solo se concede cuando se demuestra que, tras agotar las medidas de rehabilitación, la persona sigue teniendo una incapacidad de ganancia duradera. Esta renta puede ser parcial o total dependiendo del grado de invalidez determinado por los expertos.</p>

                <h2>Solicitud temprana</h2>
                <p>Es vital solicitar la AI en cuanto se prevea que una enfermedad o accidente causará una incapacidad larga (más de un año). No esperes a que tu situación sea crítica; el trámite es largo y requiere múltiples evaluaciones médicas y laborales.</p>
            </div>
        `
    },

    // 25. Vacunas en Suiza
    "articulo-vacunas": {
        title: "Vacunas en Suiza: recomendaciones y libertad de elección",
        description: "Todo sobre el calendario de vacunación suizo. No son obligatorias por ley, pero sí recomendadas oficialmente.",
        keywords: "vacunas suiza, calendario vacunacion suiza, BAG vacunas, colegio vacunas suiza",
        category: "Salud Pública",
        hub: "salud",
        slug: "vacunacion-en-suiza",
        readingTime: 4,
        dateUpdated: "Marzo 2026",
        summary: "En Suiza no existen las vacunas obligatorias. El sistema se basa en las recomendaciones de la Oficina Federal de Salud Pública (BAG) y la responsabilidad individual.",
        content: `
            <div class="page-header">
                <h1>Vacunas en Suiza: sin imposición, con recomendación</h1>
            </div>
            <div class="article-content">
                <p>Al llegar a Suiza, muchas familias se sorprenden al descubrir que el sistema de vacunación funciona de forma distinta a la de otros países europeos. Aquí prima la libertad de elección del ciudadano.</p>
                
                <h2>¿Son obligatorias las vacunas?</h2>
                <p><strong>No. En Suiza no hay vacunas obligatorias</strong>, ni para niños ni para adultos. Ni siquiera para entrar en la escuela pública. El sistema se apoya en que las familias se informen con su pediatra y decidan basándose en las recomendaciones oficiales.</p>

                <h2>Recomendaciones del BAG (OFSP)</h2>
                <p>La Oficina Federal de Salud Pública emite un calendario recomendado que incluye las vacunas estándar (Difteria, Tétanos, Tos Ferina, Polio, Sarampión, etc.). Además, en Suiza se recomienda especialmente:</p>
                <ul>
                    <li><strong>Encefalitis por garrapatas:</strong> Muy importante si realizas actividades al aire libre o en bosques.</li>
                    <li><strong>Gripe y HPV:</strong> Según grupos de riesgo y edad.</li>
                </ul>

                <h2>Coste y Seguro</h2>
                <p>Las vacunas recomendadas en el calendario oficial están cubiertas por el seguro básico (LAMal), aunque pueden estar sujetas a la franquicia elegida por el asegurado.</p>
            </div>
        `
    },

    // 26. Curiosidad: Danza de los patos
    "articulo-danza-patos": {
        title: "¿Sabías que la danza de los patos es de origen suizo?",
        description: "Descubre la historia de 'Der Ententanz', la pegadiza canción que nació en Suiza y conquistó el mundo.",
        keywords: "danza de los patos suiza, bobby setter, Werner Thomas, curiosidades suiza",
        category: "Cultura y Vida",
        hub: "vivir",
        slug: "origen-danza-de-los-patos-suiza",
        readingTime: 3,
        dateUpdated: "Marzo 2026",
        summary: "Aunque parezca una canción genérica, la famosa danza de los patos fue compuesta por un acordeonista suizo en Davos en los años 50.",
        content: `
            <div class="page-header">
                <h1>El origen suizo de la Danza de los Patos</h1>
            </div>
            <div class="article-content">
                <p>Es imposible no haberla escuchado en una boda, una fiesta de pueblo o en el Oktoberfest. Pero lo que pocos saben es que la <strong>Danza de los Patos</strong> (<i>Der Ententanz</i>) tiene un pasaporte 100% suizo.</p>
                
                <h2>Werner Thomas: El padre de la criatura</h2>
                <p>La melodía fue compuesta a finales de los años 50 por <strong>Werner Thomas</strong>, un acordeonista de Davos. Originalmente la llamó "Der Ententanz" (La danza del pato) inspirándose en el movimiento de las aves mientras tocaba en hoteles y restaurantes de la zona de esquí.</p>

                <h2>De Davos al mundo entero</h2>
                <p>Curiosamente, la canción no se hizo famosa de inmediato. Fue en los años 70 y 80 cuando diversos grupos europeos empezaron a versionarla, convirtiéndola en un hit global bajo nombres como "The Birdie Song" o "La danse des canards".</p>

                <div class="callout info">
                    <strong>¿Sabías que...?</strong> Werner Thomas compuso la canción simplemente para animar a la gente a bailar de forma divertida y sin complicaciones. ¡Misión cumplida!
                </div>
            </div>
        `
    }
};
