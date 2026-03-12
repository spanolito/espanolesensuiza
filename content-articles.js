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

    // 7b. RAV / Paro
    "articulo-rav-paro": {
        title: "RAV y paro en Suiza: cómo funciona el desempleo, requisitos y pasos",
        description: "Guía práctica del seguro de desempleo suizo (ALV/AC): requisitos, plazos, inscripción en el RAV, obligaciones y sanciones.",
        keywords: "RAV suiza, paro suiza, desempleo suiza, ALV AC, seguro desempleo suiza",
        audience: "worker",
        category: "Trabajo",
        hub: "trabajo",
        slug: "rav-paro-suiza",
        readingTime: 7,
        dateUpdated: "Marzo 2026",
        summary: "Si pierdes tu empleo en Suiza, el RAV (y la caja de paro) puede cubrir parte de tu salario, pero exige plazos y una búsqueda de empleo demostrable.",
        content: `
            <div class="page-header">
                <h1>RAV y paro en Suiza: guía práctica</h1>
            </div>
            <div class="article-content">
                <p>En Suiza, el “paro” se gestiona a través de dos piezas: el <strong>RAV</strong> (oficina regional de colocación) y la <strong>caja de desempleo</strong> (Kasse / caisse) que paga la prestación. Es un sistema serio: puede ayudarte mucho, pero funciona con reglas y obligaciones claras.</p>

                <h2>1) Qué es el RAV y qué hace</h2>
                <ul>
                    <li><strong>RAV:</strong> seguimiento, estrategia de búsqueda, citas, medidas de reinserción.</li>
                    <li><strong>Caja de paro:</strong> evalúa el derecho y <strong>paga</strong> la prestación (según tu situación y documentos).</li>
                </ul>

                <h2>2) Requisitos típicos (visión general)</h2>
                <p>El derecho exacto depende de tu caso, pero a nivel práctico suele girar en torno a:</p>
                <ul>
                    <li>Haber <strong>cotizado</strong> un mínimo de tiempo (p. ej., 12 meses) dentro de un periodo de referencia.</li>
                    <li>Estar disponible para trabajar y <strong>buscar empleo activamente</strong>.</li>
                    <li>Haber perdido el empleo por causas compatibles con la prestación (ojo con dimisiones).</li>
                </ul>

                <h2>3) Pasos recomendados cuando pierdes el trabajo</h2>
                <ol>
                    <li><strong>Inscríbete cuanto antes</strong> (no esperes a “ver qué pasa”).</li>
                    <li>Elige una <strong>caja de desempleo</strong> y reúne documentos: contrato, carta de despido, permisos, nóminas, etc.</li>
                    <li>Prepara un <strong>dossier de búsqueda</strong>: CV, cartas, y una lista de candidaturas.</li>
                    <li>Acude a las citas del RAV y sigue el plan acordado.</li>
                </ol>

                <h2>4) Obligaciones y sanciones: lo que más problemas da</h2>
                <p>El error más frecuente es pensar que “con apuntarse basta”. Normalmente tendrás que:</p>
                <ul>
                    <li>Demostrar un número mínimo de candidaturas (varía por situación y cantón).</li>
                    <li>Postularte a empleos “razonables” y responder a convocatorias.</li>
                    <li>Entregar a tiempo los justificantes (cada mes o según te indiquen).</li>
                </ul>
                <div class="callout info">
                    <strong>Consejo:</strong> guarda capturas/emails, usa una hoja de seguimiento y envía todo con margen. Los retrasos suelen acabar en <strong>días de sanción</strong>.
                </div>

                <h2>5) Si renunciaste (dimisión) o fue “despido pactado”</h2>
                <p>Estos escenarios pueden implicar sanciones o periodos sin cobro. Si tienes dudas, pide una evaluación previa y documenta bien las razones (salud, acoso, cambio esencial de condiciones, etc.).</p>

                <h2>6) Links útiles</h2>
                <ul>
                    <li><a href="https://www.ch.ch/es/trabajo/desempleo/" target="_blank" rel="noopener noreferrer">ch.ch — Desempleo</a></li>
                    <li><a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer">SECO — mercado laboral</a></li>
                </ul>

                <h2>Artículos relacionados</h2>
                <ul>
                    <li><a href="#/buscar-empleo-suiza">Buscar empleo en Suiza</a></li>
                    <li><a href="#/contratos-de-trabajo-suiza">Contratos de trabajo en Suiza</a></li>
                    <li><a href="#/seguros-sociales-suiza">Seguros sociales en Suiza</a></li>
                </ul>
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
        hub: 'vivir-en-suiza',
        slug: "sistema-escolar-suiza",
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
            <figure style="margin: 1rem 0 2rem; text-align:center;">
                <img src="images/suiza/mapa-red-ferroviaria.png"
                     alt="Mapa de la red ferroviaria nacional suiza SBB CFF FFS con líneas intercity y regionales"
                     style="max-width:100%; border-radius:var(--radius-sm); border:1px solid var(--border-light);"
                     loading="lazy">
                <figcaption style="margin-top:0.5rem; font-size:0.85rem; color:var(--text-light);">
                    Red ferroviaria nacional SBB/CFF/FFS. Líneas rojo = Intercity principales. Líneas azul = regionales.
                </figcaption>
            </figure>
            <div class="article-content" style="display:contents;">
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
    },

    // 26. Introducción a Suiza: página pilier
    "articulo-introduccion-suiza": {
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
        content: `
            <div class="page-header">
                <h1>Cómo funciona Suiza: guía completa para nuevos residentes</h1>
            </div>
            <div class="article-content">
                <p>Si estás pensando en mudarte a Suiza, o acabas de llegar, entender cómo funciona el país es el primer paso. Suiza no funciona como España, ni como Francia, ni como ningún otro país europeo. Su sistema político, su organización territorial y su cultura administrativa son únicos — y afectan a tu vida diaria desde el momento en que firmas un contrato, eliges un seguro médico o te registras en la commune.</p>

                <div class="callout info">
                    <strong>¿Por qué importa entender la organización del país?</strong> Porque en Suiza, las reglas de los impuestos, los seguros, la escolaridad y los trámites de residencia <strong>dependen del cantón donde vives</strong>, no solo del gobierno federal.
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
                    <img src="images/suiza/mapa-politico-cantones.png"
                         alt="Mapa político de Suiza con los 26 cantones y sus abreviaturas oficiales"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Mapa político de Suiza con los 26 cantones. Cada cantón tiene autonomía fiscal, educativa y administrativa.
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
                    <strong>Ejemplo práctico:</strong> Cuando llegas a Suiza, no te registras en el Estado. Te registras en <em>tu commune</em> (municipio). Desde allí, te empadronan, gestionan tu permiso de residencia y determinan parte de tus impuestos.
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

                <h2 id="lenguas">Sección 3 — Las 4 lenguas de Suiza</h2>

                <figure style="margin: 1.5rem 0; text-align: center;">
                    <img src="images/suiza/mapa-linguistico.png"
                         alt="Mapa lingüístico de Suiza con las 4 regiones de lenguas oficiales: alemán, francés, italiano y romanche"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Mapa lingüístico de Suiza. El idioma que necesitarás depende del cantón donde te instales.
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
                    <strong>Consejo práctico:</strong> Aprender el idioma del cantón donde vives es la inversión más importante que puedes hacer. En Suiza, el idioma no es solo comunicación: es integración, empleo y acceso a todos los servicios. Muchos empleadores lo exigen incluso para puestos básicos.
                </div>

                <h2 id="cantones">Sección 4 — Las diferencias entre cantones</h2>

                <p>Esta sección es esencial para los recién llegados. En Suiza, <strong>el cantón donde vives lo cambia casi todo</strong>. No es una exageración.</p>

                <h3>Impuestos</h3>
                <p>Es el ejemplo más llamativo. La carga fiscal total (federal + cantonal + comunal) puede variar entre un <strong>15% y un 45%</strong> del salario bruto, dependiendo del cantón. Algunos extremos:</p>
                <ul>
                    <li><strong>Zug, Schwyz, Nidwalden:</strong> Los cantones más baratos fiscalmente del país. Atraen a muchos empresarios y personas de alta renta.</li>
                    <li><strong>Ginebra, Vaud, Berna:</strong> Cantones con mayor presión fiscal.</li>
                </ul>
                <p>La diferencia entre vivir en Ginebra o en Zug, ganando el mismo salario, puede suponer miles de francos al año en impuestos.</p>
                <p>→ <a href="#/impuesto-fuente-suiza">Leer: Cómo funciona el impuesto a la fuente (Quellensteuer)</a></p>

                <h3>Seguro médico (primas LAMal)</h3>
                <p>El seguro de salud es obligatorio en toda Suiza, pero las <strong>primas varían por cantón y por región</strong>, incluso con la misma aseguradora. Las primas más altas se encuentran en Basilea-Ciudad y Ginebra. Las más bajas, en Appenzell Rodas Interiores y Glaris.</p>
                <p>→ <a href="#/seguro-medico-lamal-suiza">Leer: El seguro médico LAMal explicado</a></p>

                <h3>Educación y escolaridad</h3>
                <p>El sistema escolar está en manos de los cantones. Esto significa que el calendario escolar, la edad de inicio de la escolarización obligatoria, los libros de texto, los horarios y las lenguas que se enseñan varían significativamente. Los cantones coordinan a través del Concordato HarmoS, pero las diferencias persisten.</p>
                <p>→ <a href="#/sistema-escolar-suiza">Leer: El sistema educativo suizo</a></p>

                <h3>Trámites de residencia y administración</h3>
                <p>El registro al llegar, los plazos, los formularios y los horarios de atención varían de una commune a otra. No hay un proceso uniforme para todos los extranjeros: depende de dónde te instales.</p>
                <p>→ <a href="#/registrarse-en-suiza">Leer: Cómo registrarse en Suiza al llegar</a></p>

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
                    <img src="images/suiza/mapa-regiones-culturales.png"
                         alt="Mapa de regiones culturales de Suiza: Suiza alemana (Deutschschweiz), Romandia (La Romandie) y Ticino"
                         style="max-width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-light);">
                        Las tres grandes regiones culturales de Suiza tienen identidades muy distintas.
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
                    <a href="#/registrarse-en-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">📋 Registrarse en Suiza</a>
                    <a href="#/permisos-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🪪 Permisos de residencia</a>
                    <a href="#/buscar-empleo-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💼 Buscar empleo</a>
                    <a href="#/seguro-medico-lamal-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏥 Seguro médico LAMal</a>
                    <a href="#/alquilar-vivienda-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🏠 Alquilar vivienda</a>
                    <a href="#/impuesto-fuente-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💰 Impuestos en Suiza</a>
                    <a href="#/sistema-escolar-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">🎓 Sistema educativo</a>
                    <a href="#/costo-de-vida-suiza" style="padding: 0.75rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-sm); text-decoration: none; color: var(--text-primary); font-weight: 500; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--swiss-red)'" onmouseout="this.style.borderColor='var(--border-light)'">💶 Costo de vida</a>
                </div>
            </div>
        `
    },

    // 27. Cantones de Suiza
    "articulo-cantones": {
        title: "Los 26 cantones de Suiza: mapa, capitales e idiomas",
        description: "Guía completa de los 26 cantones suizos: mapa político, capital, idioma oficial y particularidades. Esencial para entender Suiza antes de instalarse.",
        keywords: "cantones suiza, mapa cantones suiza, 26 cantones, canton suizo, diferencias cantones",
        audience: 'newcomer',
        category: 'Organización Territorial',
        hub: 'vivir-en-suiza',
        slug: "cantones-suiza",
        readingTime: 7,
        dateUpdated: "Marzo 2026",
        summary: "Suiza está formada por 26 cantones autónomos, cada uno con su propio sistema fiscal, educativo y administrativo. El cantón donde vives lo cambia casi todo.",
        content: `
            <div class="page-header">
                <h1>Los 26 cantones de Suiza: guía completa</h1>
            </div>
            <div class="article-content">
                <p>En Suiza, el cantón donde te instalas es tan importante como el país en sí. Cada uno de los 26 cantones tiene su propio gobierno, sus propias leyes fiscales, su propio sistema educativo y su propia identidad cultural. Entender esta estructura es esencial antes de decidir dónde vivir.</p>

                <figure style="margin: 1.5rem 0; text-align:center;">
                    <img src="images/suiza/mapa-politico-cantones.png"
                         alt="Mapa político de Suiza con los 26 cantones y sus abreviaturas oficiales"
                         style="max-width:100%; border-radius:var(--radius-sm); border:1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top:0.5rem; font-size:0.85rem; color:var(--text-light);">
                        Mapa político de Suiza con los 26 cantones y sus abreviaturas oficiales.
                    </figcaption>
                </figure>

                <h2>¿Qué es un cantón?</h2>
                <p>Un cantón es la unidad territorial base de la Confederación Helvética. Equivale a lo que en España sería una comunidad autónoma, pero con muchos más poderes. Los cantones existían antes que la Confederación: se unieron por pacta de defensa mutua, no por imposición central. Esto explica por qué cada uno mantiene tanta autonomía.</p>

                <p>Cada cantón tiene:</p>
                <ul>
                    <li>Su propio gobierno (<em>Conseil d'État / Regierungsrat</em>) y parlamento cantonal</li>
                    <li>Sus propias leyes y tasas fiscales (cantonal + comunal)</li>
                    <li>Su sistema de educación pública</li>
                    <li>Su policía cantonal</li>
                    <li>Sus propias normas sobre trámites de residencia</li>
                </ul>

                <h2>Los 26 cantones: tabla completa</h2>

                <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin:1rem 0;">
                    <thead>
                        <tr style="background:var(--bg-surface); border-bottom:2px solid var(--border-light);">
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Cantón</th>
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Abbr.</th>
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Capital</th>
                            <th style="padding:0.6rem 0.75rem; text-align:left;">Idioma(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Argovia</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">AG</td><td style="padding:0.5rem 0.75rem;">Aarau</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Appenzell R. Ext.</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">AR</td><td style="padding:0.5rem 0.75rem;">Herisau</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Appenzell R. Int.</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">AI</td><td style="padding:0.5rem 0.75rem;">Appenzell</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Basilea-Ciudad</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">BS</td><td style="padding:0.5rem 0.75rem;">Basilea</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Basilea-Campo</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">BL</td><td style="padding:0.5rem 0.75rem;">Liestal</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Berna</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">BE</td><td style="padding:0.5rem 0.75rem;">Berna</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán / Francés</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Friburgo</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">FR</td><td style="padding:0.5rem 0.75rem;">Friburgo</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francés / Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Ginebra</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">GE</td><td style="padding:0.5rem 0.75rem;">Ginebra</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francés</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Glaris</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">GL</td><td style="padding:0.5rem 0.75rem;">Glaris</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Grisones</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">GR</td><td style="padding:0.5rem 0.75rem;">Coira</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán / Romanche / Italiano</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Jura</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">JU</td><td style="padding:0.5rem 0.75rem;">Delémont</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francés</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Lucerna</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">LU</td><td style="padding:0.5rem 0.75rem;">Lucerna</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Neuchâtel</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">NE</td><td style="padding:0.5rem 0.75rem;">Neuchâtel</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francés</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Nidwalden</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">NW</td><td style="padding:0.5rem 0.75rem;">Stans</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Obwalden</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">OW</td><td style="padding:0.5rem 0.75rem;">Sarnen</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Schaffhausen</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SH</td><td style="padding:0.5rem 0.75rem;">Schaffhausen</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Schwyz</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SZ</td><td style="padding:0.5rem 0.75rem;">Schwyz</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Solothurn</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SO</td><td style="padding:0.5rem 0.75rem;">Solothurn</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">San Galo</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">SG</td><td style="padding:0.5rem 0.75rem;">San Galo</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Turgovia</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">TG</td><td style="padding:0.5rem 0.75rem;">Frauenfeld</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Ticino</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">TI</td><td style="padding:0.5rem 0.75rem;">Bellinzona</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Italiano</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Uri</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">UR</td><td style="padding:0.5rem 0.75rem;">Altdorf</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Valais / Wallis</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">VS</td><td style="padding:0.5rem 0.75rem;">Sion</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francés / Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Vaud</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">VD</td><td style="padding:0.5rem 0.75rem;">Lausana</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Francés</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Zug</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">ZG</td><td style="padding:0.5rem 0.75rem;">Zug</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                        <tr style="border-bottom:1px solid var(--border-light);"><td style="padding:0.5rem 0.75rem; font-weight:500;">Zúrich</td><td style="padding:0.5rem 0.75rem; font-family:monospace; color:var(--swiss-red);">ZH</td><td style="padding:0.5rem 0.75rem;">Zúrich</td><td style="padding:0.5rem 0.75rem; font-size:0.85rem; color:var(--text-secondary);">Alemán</td></tr>
                    </tbody>
                </table>
                </div>

                <h2>¿Por qué importa el cantón donde vives?</h2>

                <h3>Impuestos</h3>
                <p>Es la diferencia más importante. La carga fiscal total varía drásticamente entre cantones. Un ejemplo real: una persona soltera con 80.000 CHF de salario bruto anual paga aproximadamente:</p>
                <ul>
                    <li><strong>Zug:</strong> ~12.000 CHF en impuestos totales</li>
                    <li><strong>Ginebra:</strong> ~22.000 CHF en impuestos totales</li>
                </ul>
                <p>La misma persona, la misma nómina, pero casi el doble de impuestos según donde vive.</p>
                <p>→ <a href="#/impuesto-fuente-suiza">Leer: Cómo funciona el impuesto a la fuente</a></p>

                <h3>Seguro médico (primas LAMal)</h3>
                <p>Las primas del seguro obligatorio también varían por cantón y por región del cantón. Las más caras: Basilea-Ciudad, Ginebra, Vaud. Las más baratas: Appenzell Rodas Interiores, Glaris, Nidwalden.</p>
                <p>→ <a href="#/seguro-medico-lamal-suiza">Leer: El seguro médico LAMal</a></p>

                <h3>Educación</h3>
                <p>El sistema escolar está completamente en manos de los cantones. El calendario escolar, la edad de inicio de la escolarización, las asignaturas y el sistema de orientación profesional varían entre cantones.</p>
                <p>→ <a href="#/sistema-escolar-suiza">Leer: El sistema educativo suizo</a></p>

                <h3>Trámites de residencia y administración</h3>
                <p>El registro de habitantes, los plazos, los formularios disponibles en línea y los horarios de atención varían de una commune a otra dentro de cada cantón.</p>
                <p>→ <a href="#/registrarse-en-suiza">Leer: Cómo registrarse al llegar</a></p>

                <h2>Cantones con particularidades destacadas</h2>
                <ul>
                    <li><strong>Zug:</strong> El cantón con menor carga fiscal del país. Sede de muchas multinacionales y gestoras de inversión.</li>
                    <li><strong>Ginebra:</strong> Ciudad internacional, sede de la ONU, la OMS y la Cruz Roja. Alta presencia de funcionarios internacionales. Primas médicas y alquileres muy elevados.</li>
                    <li><strong>Zúrich:</strong> La ciudad más poblada y el principal centro financiero. Muy alto nivel de vida pero también los salarios más altos del país.</li>
                    <li><strong>Ticino:</strong> El cantón italófono. Muchos trabajadores fronterizos. Clima mediterráneo y coste de vida algo inferior al norte.</li>
                    <li><strong>Grisones:</strong> El cantón más grande, trilingüe (alemán, romanche, italiano). Economía basada en turismo alpino y agricultura.</li>
                    <li><strong>Berna:</strong> Capital federal. Bilingüe (alemán con minoría francófona). Sede del parlamento y del gobierno federal.</li>
                </ul>

                <div class="callout info">
                    <strong>Consejo práctico:</strong> Antes de decidir dónde instalarte, compara la carga fiscal del cantón, las primas del seguro médico y la oferta de trabajo en tu sector. A veces, cambiar de cantón puede suponer miles de francos al año de diferencia.
                </div>

                <h2>Acceder al portal oficial de cada cantón</h2>
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(175px, 1fr)); gap:0.6rem; margin-top:1rem;">
                    <a href="https://www.ag.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Argovia (AG)</a>
                    <a href="https://www.ai.ch" target="_blank" rel="noopener noreferrer" class="canton-link">App. R. Int. (AI)</a>
                    <a href="https://www.ar.ch" target="_blank" rel="noopener noreferrer" class="canton-link">App. R. Ext. (AR)</a>
                    <a href="https://www.bs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Basilea-Ciudad (BS)</a>
                    <a href="https://www.bl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Basilea-Campo (BL)</a>
                    <a href="https://www.be.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Berna (BE)</a>
                    <a href="https://www.fr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Friburgo (FR)</a>
                    <a href="https://www.ge.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Ginebra (GE)</a>
                    <a href="https://www.gl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Glaris (GL)</a>
                    <a href="https://www.gr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Grisones (GR)</a>
                    <a href="https://www.jura.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Jura (JU)</a>
                    <a href="https://www.lu.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Lucerna (LU)</a>
                    <a href="https://www.ne.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Neuchâtel (NE)</a>
                    <a href="https://www.nw.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Nidwalden (NW)</a>
                    <a href="https://www.ow.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Obwalden (OW)</a>
                    <a href="https://www.sh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schaffhausen (SH)</a>
                    <a href="https://www.sz.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schwyz (SZ)</a>
                    <a href="https://www.so.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Solothurn (SO)</a>
                    <a href="https://www.sg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">San Galo (SG)</a>
                    <a href="https://www.tg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Turgovia (TG)</a>
                    <a href="https://www.ti.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Ticino (TI)</a>
                    <a href="https://www.ur.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Uri (UR)</a>
                    <a href="https://www.vs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Valais/Wallis (VS)</a>
                    <a href="https://www.vd.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Vaud (VD)</a>
                    <a href="https://www.zg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zug (ZG)</a>
                    <a href="https://www.zh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zúrich (ZH)</a>
                </div>
            </div>
        `
    },

    // 28. Lenguas en Suiza
    "articulo-lenguas": {
        title: "Las lenguas en Suiza: alemán, francés, italiano y romanche",
        description: "Guía sobre las 4 lenguas nacionales de Suiza: regiones lingüísticas, cantones bilingües y consejos para hispanohablantes que llegan al país.",
        keywords: "lenguas suiza, idiomas suiza, aleman suiza, frances suiza, italiano ticino, romanche, regiones linguisticas",
        audience: 'newcomer',
        category: 'Cultura e Idiomas',
        hub: 'vivir-en-suiza',
        slug: "lenguas-suiza",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        summary: "Suiza tiene 4 lenguas nacionales. El idioma que deberás aprender depende completamente del cantón donde te instales: alemán en el este y centro, francés en el oeste, italiano en el Ticino.",
        content: `
            <div class="page-header">
                <h1>Las lenguas en Suiza: guía para hispanohablantes</h1>
            </div>
            <div class="article-content">
                <p>Suiza es uno de los pocos países del mundo con cuatro lenguas nacionales oficiales. Pero hay un error muy común al llegar: creer que el inglés es suficiente para integrarse. No lo es. El idioma de tu cantón de residencia es la clave para el trabajo, los trámites y la integración social.</p>

                <figure style="margin: 1.5rem 0; text-align:center;">
                    <img src="images/suiza/mapa-linguistico.png"
                         alt="Mapa lingüístico de Suiza con las 4 regiones de lenguas: alemán, francés, italiano y romanche"
                         style="max-width:100%; border-radius:var(--radius-sm); border:1px solid var(--border-light);"
                         loading="lazy">
                    <figcaption style="margin-top:0.5rem; font-size:0.85rem; color:var(--text-light);">
                        Mapa lingüístico de Suiza. La región azul habla alemán, la verde francés, la naranja italiano y la morada romanche.
                    </figcaption>
                </figure>

                <h2>Las 4 lenguas nacionales</h2>

                <h3>🇩🇪 Alemán — Suiza alemana (Deutschschweiz)</h3>
                <p>Hablado por aproximadamente el <strong>63%</strong> de la población. Abarca una gran franja central y oriental del país: Zúrich, Berna, Basilea, Lucerna, Zug, Schwyz, San Galo y la mayoría de cantones del interior.</p>

                <p>Pero hay un matiz fundamental: en el día a día, los suizos de habla alemana no hablan alemán estándar. Hablan <strong>Schweizerdeutsch</strong>, un conjunto de dialectos orales que varía de cantón a cantón y que puede ser completamente ininteligible para alguien que ha aprendido alemán estándar. Los textos escritos (contratos, cartas, formularios) sí se redactan en alemán estándar (<em>Hochdeutsch</em>).</p>

                <div class="callout">
                    <strong>Para hispanohablantes:</strong> El alemán es difícil pero totalmente alcanzable. Con un nivel B1 ya puedes trabajar en la mayoría de empleos no especializados. Muchos cursos de alemán en Suiza son gratuitos o subvencionados para residentes.
                </div>

                <h3>🇫🇷 Francés — La Romandie</h3>
                <p>Hablado por aproximadamente el <strong>23%</strong> de la población. Corresponde a los cantones del oeste: Ginebra, Vaud, Neuchâtel, Jura, y de forma parcial Valais, Friburgo y Berna. Esta zona se llama informalmente <em>La Romandie</em>.</p>

                <p>El francés suizo es muy similar al francés estándar, con algunas diferencias léxicas que no suponen una barrera real. Por ejemplo, usan <em>huitante</em> en lugar de <em>quatre-vingts</em> (80) en algunos cantones de la Romandie.</p>

                <div class="callout info">
                    <strong>Para hispanohablantes:</strong> El francés es la opción más accesible. Comparte raíces latinas con el español y el tiempo de aprendizaje es significativamente menor que el alemán. Muchos hispanohablantes eligen la Romandie precisamente por esto.
                </div>

                <h3>🇮🇹 Italiano — El Ticino</h3>
                <p>Hablado por aproximadamente el <strong>8%</strong> de la población, principalmente en el cantón del Ticino (TI) y en algunos valles del sur del cantón de los Grisones. El Ticino es el único cantón completamente italófono y tiene una identidad cultural muy mediterránea.</p>

                <p>Para hispanohablantes, el italiano es la lengua suiza más cercana al español. Sin embargo, el mercado laboral del Ticino es más pequeño y muchos puestos requieren también el alemán o el inglés para trabajar con el resto del país.</p>

                <h3>🏔️ Romanche (Rumantsch)</h3>
                <p>Hablado por menos del <strong>1%</strong> de la población, exclusivamente en partes del cantón de los Grisones. Es una lengua románica con cinco variantes escritas diferentes, fruto de siglos de aislamiento en valles alpinos. Tiene estatus de lengua nacional y co-oficial en las regiones donde se habla, pero no es de uso administrativo a nivel federal excepto para comunicarse con los ciudadanos romanches.</p>

                <h2>Cantones bilingües y trilingüe</h2>

                <p>Tres cantones tienen dos o más lenguas oficiales:</p>

                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:1rem; margin:1.5rem 0;">
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Friburgo (FR)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingüe Francés / Alemán. La administración opera en ambas lenguas. La ciudad de Friburgo misma es un punto de contacto entre las dos culturas.</p>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Valais / Wallis (VS)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Bilingüe Francés / Alemán según la zona. El Valais romando es francófono (Sion, Martigny), el Haut-Valais es germanófono.</p>
                    </div>
                    <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
                        <strong>Grisones (GR)</strong>
                        <p style="font-size:0.9rem; margin:0.5rem 0 0; color:var(--text-secondary);">Trilingüe Alemán / Romanche / Italiano. El único cantón con tres lenguas oficiales. Cada valle puede tener una lengua dominante diferente.</p>
                    </div>
                </div>

                <h2>¿Qué idioma aprender?</h2>

                <p>La respuesta es siempre la misma: <strong>el idioma del cantón donde vives</strong>. Pero si aún no has decidido dónde instalarte, aquí van algunas orientaciones:</p>

                <ul>
                    <li><strong>Francés:</strong> Mejor punto de partida para hispanohablantes. Más fácil y rápido de aprender. Te da acceso a la Romandie y a ciudades internacionales como Ginebra y Lausana.</li>
                    <li><strong>Alemán:</strong> La lengua que abre más puertas en términos de mercado laboral (abarca el 63% del país). Es más difícil pero la formación es abundante y los suizos valoran mucho el esfuerzo.</li>
                    <li><strong>Italiano:</strong> Si ya lo hablas, el Ticino puede ser una entrada suave. Si no, el mercado laboral local es más limitado.</li>
                </ul>

                <div class="callout">
                    <strong>Inversión clave:</strong> Muchos cantones ofrecen cursos de idiomas subvencionados o incluso gratuitos para residentes extranjeros. Algunos empleadores también pagan cursos de idiomas. Infórmate desde el primer mes en tu commune.
                </div>

                <h2>El inglés en Suiza</h2>
                <p>El inglés está muy extendido en entornos técnicos, financieros e internacionales (especialmente en Zúrich y Ginebra). Muchas multinacionales trabajan exclusivamente en inglés. Sin embargo, para trámites administrativos, buscar empleo en el sector público o en pymes, y para la integración social real, el idioma local es imprescindible.</p>

                <h2>Artículos relacionados</h2>
                <ul>
                    <li><a href="#/introduccion-suiza-como-funciona">Cómo funciona Suiza</a></li>
                    <li><a href="#/cantones-suiza">Los 26 cantones de Suiza</a></li>
                    <li><a href="#/registrarse-en-suiza">Registrarse en Suiza al llegar</a></li>
                    <li><a href="#/buscar-empleo-suiza">Buscar empleo en Suiza</a></li>
                </ul>
            </div>
        `
    },

    // 29. Consulados españoles en Suiza
    "articulo-consulados": {
        title: "Consulados españoles en Suiza: dónde están y qué trámites hacen",
        description: "Guía completa de los tres consulados españoles en Suiza (Ginebra, Berna, Zúrich): servicios, citas, pasaportes, padrón y registro consular.",
        keywords: "consulado español suiza, consulado ginebra, consulado zurich, consulado berna, registro consular, pasaporte suiza, MAEC",
        audience: 'newcomer',
        category: 'Recursos Oficiales',
        hub: 'fuentes-oficiales',
        slug: "consulados-espanoles-suiza",
        readingTime: 5,
        dateUpdated: "Marzo 2026",
        summary: "España tiene tres consulados en Suiza: Ginebra, Berna y Zúrich. El registro consular es el primer trámite que debes hacer al llegar. Sin él, no puedes renovar el pasaporte ni votar.",
        content: `
            <div class="page-header">
                <h1>Consulados españoles en Suiza: guía de trámites</h1>
            </div>
            <div class="article-content">
                <p>Si eres ciudadano español viviendo en Suiza, el consulado es tu ventanilla oficial para todos los trámites que vinculan tu vida en el extranjero con la administración española. Hay tres consulados generales de España en Suiza, y debes dirigirte al que corresponde a tu cantón de residencia.</p>

                <div class="callout info">
                    <strong>Primer paso obligatorio:</strong> Al instalarte en Suiza, el trámite más importante es <strong>inscribirte en el Registro de Matrícula Consular</strong>. Sin este registro, no podrás renovar tu DNI o pasaporte, ni votar en elecciones españolas desde el exterior.
                </div>

                <h2>Los 3 consulados españoles en Suiza</h2>

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
                <p>Es el <strong>primer trámite que debes realizar</strong> al instalarte en Suiza. Sirve para inscribirte formalmente como residente español en el exterior. A partir de este registro:</p>
                <ul>
                    <li>Puedes renovar tu DNI y pasaporte desde Suiza.</li>
                    <li>Puedes ejercer tu derecho a voto en elecciones españolas (CERA — Censo Electoral de Residentes Ausentes).</li>
                    <li>La administración española tiene constancia de tu lugar de residencia.</li>
                </ul>
                <p>El registro es gratuito. Necesitarás: pasaporte o DNI en vigor, prueba de residencia en Suiza (contrato de alquiler, registro de la commune) y en algunos casos el permiso de residencia suizo.</p>

                <h3>DNI y Pasaporte</h3>
                <p>Puedes renovar o solicitar tu DNI y pasaporte en el consulado de tu demarcación. Es <strong>imprescindible pedir cita previa</strong> a través del portal de cita consular del Ministerio de Asuntos Exteriores. Los tiempos de espera pueden ser de varias semanas, especialmente en Ginebra y Zúrich.</p>

                <div class="callout">
                    <strong>Consejo:</strong> Solicita la cita con al menos 2-3 meses de antelación a la caducidad de tu documento. No esperes al último momento.
                </div>

                <h3>Registro Civil: nacimientos, matrimonios, defunciones</h3>
                <p>Si has tenido un hijo en Suiza, te has casado o ha fallecido un familiar español, debes inscribir el hecho en el Registro Civil consular. El consulado inscribirá el evento en el Registro Civil español.</p>

                <h3>Pensiones y Seguridad Social</h3>
                <p>El consulado puede orientarte sobre convenios de Seguridad Social entre España y Suiza, tramitación de pensiones, acumulación de cotizaciones y otros trámites relacionados con la Seguridad Social española.</p>

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
                <p>Toda la información actualizada sobre trámites, requisitos y noticias para españoles en Suiza se encuentra en:</p>
                <ul>
                    <li><a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer">Consulado en Ginebra</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer">Consulado en Berna</a></li>
                    <li><a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer">Consulado en Zúrich</a></li>
                </ul>

                <h2>Artículos relacionados</h2>
                <ul>
                    <li><a href="#/registrarse-en-suiza">Registrarse en Suiza al llegar</a></li>
                    <li><a href="#/permisos-suiza">Permisos de residencia L, B y C</a></li>
                    <li><a href="#/tramites-llegada-suiza">Trámites al llegar: lista completa</a></li>
                </ul>
            </div>
        `
    }
};
