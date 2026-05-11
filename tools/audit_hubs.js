#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const FILES = [
  "content-articles.js",
  "content-articles-de.js",
  "content-articles-en.js",
  "content-articles-fr.js",
  "content-articles-it.js",
  "content-articles-facebook-de.js",
  "content-articles-facebook-en.js",
  "content-articles-facebook-es.js",
  "content-articles-facebook-fr.js",
  "content-articles-facebook-it.js",
  "content-articles-facebook-daily-de.js",
  "content-articles-facebook-daily-en.js",
  "content-articles-facebook-daily-es.js",
  "content-articles-facebook-daily-fr.js",
  "content-articles-facebook-daily-it.js",
];

const ES_PRIORITY_FILES = [
  "content-articles.js",
  "content-articles-facebook-es.js",
  "content-articles-facebook-daily-es.js",
];

const LANGUAGE_BY_FILE = {
  "content-articles.js": "es",
  "content-articles-de.js": "de",
  "content-articles-en.js": "en",
  "content-articles-fr.js": "fr",
  "content-articles-it.js": "it",
  "content-articles-facebook-es.js": "es",
  "content-articles-facebook-en.js": "en",
  "content-articles-facebook-fr.js": "fr",
  "content-articles-facebook-de.js": "de",
  "content-articles-facebook-it.js": "it",
  "content-articles-facebook-daily-es.js": "es",
  "content-articles-facebook-daily-en.js": "en",
  "content-articles-facebook-daily-fr.js": "fr",
  "content-articles-facebook-daily-de.js": "de",
  "content-articles-facebook-daily-it.js": "it",
};

const HUBS = [
  "vivir-en-suiza",
  "tramites",
  "trabajo",
  "salud",
  "vivienda",
  "fronterizos",
  "recursos",
  "cultura-eventos",
  "impuestos",
];

const ALLOWED_HUBS = new Set([...HUBS, ""]);

const HUB_LABELS = {
  "vivir-en-suiza": {
    es: "Vivir en Suiza",
    fr: "Vivre en Suisse",
    en: "Living in Switzerland",
    de: "Leben in der Schweiz",
    it: "Vivere in Svizzera",
  },
  tramites: {
    es: "Tramites y Permisos",
    fr: "Démarches et permis",
    en: "Formalities and Permits",
    de: "Formalitäten und Bewilligungen",
    it: "Pratiche e permessi",
  },
  trabajo: {
    es: "Trabajo y Salarios",
    fr: "Travail et salaires",
    en: "Work and Salaries",
    de: "Arbeit und Löhne",
    it: "Lavoro e salari",
  },
  salud: {
    es: "Salud y LAMal",
    fr: "Santé et LAMal",
    en: "Health and LAMal",
    de: "Gesundheit und KVG",
    it: "Salute e LAMal",
  },
  vivienda: {
    es: "Vivienda",
    fr: "Logement",
    en: "Housing",
    de: "Wohnen",
    it: "Alloggio",
  },
  fronterizos: {
    es: "Fronterizos",
    fr: "Frontaliers",
    en: "Cross-border Workers",
    de: "Grenzgänger",
    it: "Frontalieri",
  },
  recursos: {
    es: "Alertas y recursos",
    fr: "Alertes et ressources",
    en: "Alerts and Resources",
    de: "Warnungen und Ressourcen",
    it: "Avvisi e risorse",
  },
  "cultura-eventos": {
    es: "Cultura y Eventos",
    fr: "Culture et Événements",
    en: "Culture and Events",
    de: "Kultur und Veranstaltungen",
    it: "Cultura ed eventi",
  },
  impuestos: {
    es: "Impuestos",
    fr: "Impôts",
    en: "Taxes",
    de: "Steuern",
    it: "Imposte",
  },
};

const MANUAL_OVERRIDES = {
  "articulo-periodo-prueba": {
    hub: "trabajo",
    reason: "Employment rights article about probation and notice periods.",
  },
  "articulo-costo-vida": {
    hub: "vivir-en-suiza",
    reason: "Budgeting and cost-of-living guide, not a housing-only article.",
  },
  "articulo-diplomas": {
    hub: "tramites",
    reason: "Recognition of foreign qualifications is handled as an administrative process.",
  },
  "articulo-sistema-escolar": {
    hub: "vivir-en-suiza",
    reason: "School system orientation guide for family life in Switzerland.",
  },
  "articulo-ai-invalidez": {
    hub: "salud",
    reason: "Disability insurance and reintegration article in the health system.",
  },
  "articulo-jubilacion": {
    hub: "trabajo",
    reason: "Pension and AVS/LPP article belongs to work and salaries.",
  },
  "articulo-mudarse-suiza": {
    hub: "tramites",
    reason: "Moving checklist centered on arrival formalities and setup steps.",
  },
  "articulo-tramites-llegada": {
    hub: "tramites",
    reason: "Arrival checklist dominated by first-month formalities.",
  },
  "articulo-vivir-sin-trabajar": {
    hub: "tramites",
    reason: "Residence basis and registration rules dominate the article.",
  },
  "articulo-danza-patos": {
    hub: "cultura-eventos",
    reason: "Swiss cultural curiosity article.",
  },
  "articulo-introduccion-suiza": {
    hub: "vivir-en-suiza",
    reason: "Pillar guide explaining how Switzerland works in daily life.",
  },
  "articulo-lenguas": {
    hub: "vivir-en-suiza",
    reason: "Language and regional-life guide, not an administrative procedure.",
  },
  "fb-fraudes-inmigrantes-suiza": {
    hub: "recursos",
    reason: "Guide focused on fraud alerts and protection signals for immigrants.",
  },
  "fb-125-c-mo-conseguir-un-apartamento-sin-tener-contactos-ni-sueldo-de-banquero": {
    hub: "vivienda",
    reason: "Apartment search and housing-access article.",
  },
  "fb-214-en-suiza-la-multa-se-adapta-a-tu-sueldo-y-no-siempre-la-pagas-al-momento": {
    hub: "vivir-en-suiza",
    reason: "Daily-life legal rules around Swiss fines, not an employment article.",
  },
  "fb-301-las-estaciones-de-esqu-suizas-buscan-desesperadamente-personal": {
    hub: "trabajo",
    reason: "Recruitment and staffing article despite the ski-sector context.",
  },
  "fb-daily-20260420-01-la-campana-de-la-renta-espanola-2025-afecta-a-mas-residentes-en-suiza-de-lo-que-": {
    hub: "impuestos",
    reason: "Spanish tax filing and non-resident obligations.",
  },
  "fb-daily-20260420-02-suiza-negocio-con-trump-y-bajo-los-aranceles-al-15-pero-el-dano-ya-estaba-hecho": {
    hub: "trabajo",
    reason: "Article centers on labor-market and sector employment impact.",
  },
  "fb-daily-20260422-01-el-referendum-del-14-de-junio-lo-que-dicen-las-encuestas-y-lo-que-deberias-hacer": {
    hub: "recursos",
    reason: "Political referendum alert with practical context, not a procedure guide.",
  },
  "fb-daily-20260423-03-hacerse-autonomo-en-suiza-siendo-extranjero-mas-pasos-de-los-que-parece": {
    hub: "trabajo",
    reason: "Self-employment and labor-status article.",
  },
  "fb-daily-20260424-01-el-kurzarbeit-cuando-la-economia-frena-el-seguro-cubre-parte-de-tu-sueldo": {
    hub: "trabajo",
    reason: "Short-time work compensation is an employment topic.",
  },
  "fb-daily-20260424-02-la-cuenta-bancaria-en-suiza-lo-que-nadie-te-explica-bien-cuando-llegas": {
    hub: "tramites",
    reason: "Arrival setup article about opening an account and getting a CH IBAN.",
  },
  "fb-daily-20260425-01-la-nueva-asignacion-de-guarderia-en-suiza-lo-que-cambia-para-familias-trabajador": {
    hub: "vivir-en-suiza",
    reason: "Family-life and childcare-cost article, not health coverage.",
  },
  "fb-daily-20260426-03-comprar-piso-en-suiza-siendo-espanol-lo-que-depende-de-tu-permiso-y-lo-que-no": {
    hub: "vivienda",
    reason: "Primary subject is property purchase and housing access.",
  },
  "fb-daily-20260426-06-rc-y-seguro-del-hogar-en-suiza-dos-seguros-distintos-que-van-juntos-pero-no-son-": {
    hub: "vivienda",
    reason: "Household and liability insurance guide tied to housing.",
  },
  "fb-daily-20260426-09-las-multas-en-suiza-el-sistema-por-el-que-una-infraccion-de-trafico-puede-costar": {
    hub: "vivir-en-suiza",
    reason: "Daily-life legal rules and traffic fines, not a frontier-worker article.",
  },
  "fb-daily-20260427-01-el-acuerdo-pnr-suiza-ue-tus-datos-de-vuelo-ya-no-son-solo-tuyos": {
    hub: "recursos",
    reason: "Legal and privacy alert about passenger-data sharing.",
  },
  "fb-daily-20260428-01-la-obligacion-del-empleador-que-pocos-conocen-el-stellenmeldepflicht-en-2026": {
    hub: "trabajo",
    reason: "Employer vacancy-reporting obligation tied to employment law.",
  },
  "fb-daily-20260429-01-la-lex-koller-endurecida-lo-que-propone-el-gobierno-suizo-y-por-que-los-espanole": {
    hub: "vivienda",
    reason: "Lex Koller reform concerns property purchases and housing access.",
  },
  "fb-daily-20260430-03-la-electricidad-baja-en-2026-pero-solo-si-vives-en-el-canton-correcto": {
    hub: "vivir-en-suiza",
    reason: "Electricity pricing and canton-level cost of living.",
  },
  "fb-daily-20260501-01-el-referendum-del-14-de-junio-lo-que-realmente-esta-en-juego-para-los-espanoles-": {
    hub: "recursos",
    reason: "Political/legal alert about free movement and referendum impact.",
  },
  "fb-daily-20260501-02-el-acoso-es-ahora-delito-independiente-en-suiza-lo-que-cambia-con-el-nuevo-artic": {
    hub: "recursos",
    reason: "Legal alert about stalking as a new standalone offence.",
  },
  "fb-daily-20260502-02-tener-un-perro-en-suiza-cuesta-mas-de-lo-que-parece": {
    hub: "vivir-en-suiza",
    reason: "Pet ownership and daily-life rules article.",
  },
  "fb-daily-20260502-03-trabajar-a-tiempo-parcial-en-suiza-no-es-solo-cobrar-la-mitad": {
    hub: "trabajo",
    reason: "Part-time work conditions, deductions and labor implications.",
  },
  "fb-daily-20260501-04-delinquir-en-suiza-hasta-que-se-acaba-la-paciencia": {
    hub: "recursos",
    reason: "General legal-alert article, not culture.",
  },
  "fb-daily-20260501-06-desde-suiza-para-el-mundo": {
    hub: "cultura-eventos",
    reason: "Swiss science and public-interest history piece about the web and CERN.",
  },
  "fb-daily-20260502-05-beber-en-la-calle-en-suiza-el-problema-no-es-la-cerveza-es-lo-que-dejas-detras": {
    hub: "vivir-en-suiza",
    reason: "Norms of coexistence and public-space behavior.",
  },
  "fb-daily-20260503-02-si-te-pones-enfermo-en-suiza-esto-es-lo-que-debes-hacer-y-lo-que-te-cu": {
    hub: "salud",
    reason: "Sickness leave, medical certificates and health coverage article.",
  },
  "fb-daily-20260503-06-trabajar-a-tiempo-parcial-en-suiza-no-es-solo-cobrar-menos": {
    hub: "trabajo",
    reason: "Part-time work conditions, deductions and labor implications.",
  },
  "fb-daily-20260504-01-a-raiz-de-una-publicacion-vuelvo-sobre-un-tema-incomodo-el-hidjab": {
    hub: "trabajo",
    reason: "Employment access and discrimination article.",
  },
  "fb-daily-20260504-02-se-viniste-con-una-idea-y-la-realidad-te-puso-en-tu-sitio": {
    hub: "",
    reason: "Open-ended community prompt without a single dominant hub topic.",
  },
  "fb-daily-20260504-03-temu-en-el-punto-de-mira-en-suiza-y-no-es-casualidad": {
    hub: "recursos",
    reason: "Consumer-protection and platform-risk alert.",
  },
  "fb-daily-20260504-04-recolectar-fresas-en-ginebra-plan-bonito-hasta-que-ves-el-precio-por-kilo": {
    hub: "cultura-eventos",
    reason: "Seasonal leisure and local-activity article.",
  },
  "fb-daily-20260505-01-lo-que-nadie-te-explica-sobre-heredar-en-suiza": {
    hub: "impuestos",
    reason: "Inheritance-tax article centered on cantonal succession taxes.",
  },
  "fb-daily-20260505-02-las-vacaciones-en-suiza-lo-que-dice-la-ley-y-lo-que-depende-de-tu-cont": {
    hub: "trabajo",
    reason: "Vacation entitlements and labor-law rules.",
  },
  "fb-daily-20260507-02-la-buanderia-del-edificio-en-suiza-el-cuarto-que-nadie-te-explica-cuan": {
    hub: "vivienda",
    reason: "Shared-laundry and building-rules article tied to housing.",
  },
  "fb-daily-20260507-03-vivir-juntos-sin-casarse-en-suiza-lo-que-perderias-si-tu-pareja-muere": {
    hub: "vivir-en-suiza",
    reason: "Cohabitation and daily-life legal exposure for couples.",
  },
  "fb-daily-20260508-02-la-caucion-del-alquiler-en-suiza-tres-meses-bloqueados-que-son-tuyos-p": {
    hub: "vivienda",
    reason: "Rental deposit and tenant-rights article.",
  },
  "fb-daily-20260508-03-la-pension-de-espana-y-la-de-suiza-no-se-suman-como-crees": {
    hub: "trabajo",
    reason: "Cross-border pension coordination belongs to work and salaries.",
  },
  "fb-daily-20260509-01-el-numero-avs-el-identificador-que-lo-sabe-todo-de-ti-sin-contener-nin": {
    hub: "tramites",
    reason: "Administrative identifier article used across procedures and records.",
  },
  "fb-daily-20260509-02-comprar-un-coche-de-segunda-mano-en-suiza-la-placa-es-del-dueno-no-del": {
    hub: "tramites",
    reason: "Vehicle registration and plate-transfer process article.",
  },
  "fb-daily-20260510-02-llamar-al-144-en-suiza-los-numeros-que-salvan-vidas-y-la-factura-que-m": {
    hub: "salud",
    reason: "Emergency numbers, ambulance costs, Rega and LAMal coverage.",
  },
  "fb-daily-20260510-03-el-trabajo-en-negro-en-suiza-lo-que-realmente-arriesgas-cuando-alguien": {
    hub: "trabajo",
    reason: "Undeclared work and labor-risk article.",
  },
};

const HUB_RULES = {
  salud: {
    title: {
      "seguro medico": 12,
      "seguro de salud": 12,
      lamal: 12,
      "llamar al 144": 14,
      ambulancia: 12,
      rega: 12,
      psicologo: 12,
      psicologo: 12,
      dentista: 12,
      medico: 8,
      medicos: 8,
      urgencias: 10,
      enfermedad: 8,
      enfermo: 8,
      accidente: 10,
      "seguro de accidentes": 12,
      franquicia: 10,
      copago: 8,
      "seguro basico": 9,
      hospital: 8,
      vacunas: 10,
      vacuna: 10,
      ai: 8,
      invalidez: 8,
      baja: 8,
    },
    body: {
      ambulancia: 4,
      rega: 4,
      lamal: 4,
      kvg: 4,
      franquicia: 4,
      copago: 4,
      psicologo: 4,
      dentista: 4,
      "medico de cabecera": 4,
      urgencias: 4,
      "seguro de accidentes": 5,
      suva: 4,
      laa: 4,
      "enfermedad profesional": 4,
      "factura medica": 4,
      hospital: 3,
      "prima mensual": 3,
      "primas del seguro": 3,
    },
  },
  trabajo: {
    title: {
      "trabajo en negro": 16,
      "trabajar a tiempo parcial": 14,
      "periodo de prueba": 14,
      preaviso: 12,
      kurzarbeit: 14,
      stellenmeldepflicht: 14,
      huelga: 14,
      "13 salario": 14,
      "13o salario": 14,
      salario: 12,
      sueldo: 12,
      trabajo: 10,
      trabajar: 10,
      empleo: 10,
      laboral: 10,
      laborales: 10,
      contrato: 10,
      "contrato a llamada": 14,
      autonomo: 12,
      autonoma: 12,
      "mercado laboral": 14,
      rav: 12,
      paro: 12,
      desempleo: 12,
      jubilacion: 12,
      pension: 12,
      avs: 10,
      ahv: 10,
      lpp: 10,
      cct: 10,
      "reclamacion de salario": 14,
      "salario minimo": 14,
      cotizados: 10,
      nomina: 8,
      empleador: 8,
    },
    body: {
      empleador: 4,
      salario: 4,
      sueldo: 4,
      cotizacion: 4,
      cotizaciones: 4,
      rav: 4,
      paro: 4,
      desempleo: 4,
      avs: 4,
      ahv: 4,
      lpp: 4,
      cct: 4,
      despido: 4,
      vacaciones: 4,
      "seguro de paro": 5,
      "trabajador independiente": 5,
      "actividad lucrativa": 4,
      "caja de compensacion": 3,
      "caja de desempleo": 4,
      "jornada reducida": 3,
      "horas trabajadas": 3,
      "tiempo parcial": 5,
      "contrato individual": 3,
      pension: 4,
      jubilacion: 4,
    },
  },
  tramites: {
    title: {
      permiso: 12,
      permisos: 12,
      empadronarse: 14,
      empadronamiento: 14,
      empadronarte: 14,
      registro: 10,
      registrarse: 14,
      nacionalidad: 14,
      ciudadania: 14,
      naturalizacion: 14,
      "e-id": 14,
      "dni digital": 12,
      ees: 14,
      pasaporte: 12,
      carnet: 12,
      conducir: 12,
      "casier judiciaire": 14,
      "extracto del casier": 14,
      avs: 8,
      divorciarse: 10,
      "cambiar de canton": 14,
      canton: 3,
      consulado: 12,
      consulados: 12,
    },
    body: {
      permiso: 4,
      comuna: 4,
      migracion: 4,
      residencia: 4,
      registro: 4,
      "control de habitantes": 4,
      "oficina cantonal": 4,
      "permiso b": 4,
      "permiso c": 4,
      "permiso l": 4,
      naturalizacion: 4,
      ees: 4,
      swiyu: 4,
      "casier judiciaire": 4,
      "numero avs": 3,
      "servicio cantonal de automoviles": 4,
      "caja de compensacion": 2,
    },
  },
  vivienda: {
    title: {
      alquiler: 14,
      alquilar: 14,
      vivienda: 14,
      piso: 12,
      caucion: 14,
      fianza: 14,
      "seguro del hogar": 14,
      "rc y seguro del hogar": 16,
      buanderia: 14,
      lavanderia: 14,
      muebles: 10,
      ruido: 12,
      "comprar piso": 14,
      "segunda mano": 6,
      "mercado del alquiler": 14,
      subalquiler: 14,
      construccion: 10,
      "defectos de construccion": 14,
      "ley del ruido": 14,
      regie: 8,
      inmueble: 10,
      "cuenta bloqueada": 10,
      perro: 0,
    },
    body: {
      alquiler: 5,
      inquilino: 4,
      arrendador: 4,
      vivienda: 4,
      piso: 4,
      caucion: 5,
      fianza: 5,
      deposito: 4,
      "seguro del hogar": 5,
      "responsabilidad civil": 4,
      buanderia: 4,
      lavanderia: 4,
      "cuarto de lavado": 4,
      propietario: 4,
      "cuenta bancaria bloqueada": 4,
      "mercado del alquiler": 4,
      "compra de inmuebles": 4,
      inmueble: 4,
      inmueble: 4,
      "informe acustico": 4,
      "defectos de construccion": 5,
      "vendedor de vivienda": 3,
    },
  },
  impuestos: {
    title: {
      impuesto: 14,
      impuestos: 14,
      renta: 14,
      fiscal: 12,
      fiscales: 12,
      hacienda: 12,
      irpf: 12,
      declaracion: 14,
      "doble imposicion": 16,
      "impuesto a la fuente": 16,
      "pilar 3a": 16,
      "secreto bancario": 16,
      heredar: 12,
      herencia: 12,
      sucesiones: 12,
      "cuenta bancaria": 4,
      "campana de la renta": 16,
      aeat: 12,
    },
    body: {
      impuesto: 4,
      fiscal: 4,
      fiscales: 4,
      hacienda: 4,
      declaracion: 4,
      "agencia tributaria": 4,
      aeat: 4,
      "doble imposicion": 5,
      "impuesto a la fuente": 5,
      "residencia fiscal": 5,
      "pilar 3a": 5,
      "modelo 720": 5,
      "modelo 210": 5,
      iva: 4,
      aduanero: 3,
      aduanas: 3,
      "impuesto de sucesiones": 5,
      "intercambio automatico de informacion": 4,
      aeoI: 2,
      ear: 2,
    },
  },
  fronterizos: {
    title: {
      fronterizo: 16,
      fronterizos: 16,
      frontalier: 16,
      frontaliers: 16,
      "permiso g": 16,
      "teletrabajo desde francia": 18,
      francia: 10,
    },
    body: {
      fronterizo: 5,
      frontaliers: 5,
      frontalier: 5,
      francia: 4,
      "residente en francia": 5,
      "vive en francia": 5,
      "teletrabajar desde su domicilio": 4,
      "certificados a1": 4,
      "acuerdos transfronterizos": 5,
      "tributacion en suiza": 4,
    },
  },
  recursos: {
    title: {
      fraude: 16,
      estafa: 16,
      alerta: 16,
      referendum: 14,
      referendo: 14,
      votacion: 14,
      iniciativa: 14,
      "codigo penal": 14,
      acoso: 14,
      pnr: 14,
      temu: 14,
      "sms blaster": 16,
      "secreto bancario": 4,
      "ley anti-burka": 14,
      burka: 10,
      "delito independiente": 14,
    },
    body: {
      fraude: 5,
      estafa: 5,
      alerta: 5,
      referendum: 4,
      iniciativa: 4,
      "codigo penal": 4,
      "delito autonomo": 4,
      pnr: 5,
      "datos de registro de nombres de pasajeros": 5,
      "proteccion del consumidor": 4,
      temu: 5,
      "sms blaster": 5,
      "ciberacoso": 4,
      "lucha contra el terrorismo": 4,
      "plataforma": 2,
    },
  },
  "cultura-eventos": {
    title: {
      museo: 16,
      museos: 16,
      festival: 16,
      concierto: 16,
      navidad: 14,
      carnaval: 14,
      fondue: 14,
      barbacoa: 14,
      "danza de los patos": 16,
      "noche de los museos": 18,
      "trajes tradicionales": 16,
      fiestas: 12,
      folklore: 14,
      cultura: 12,
      evento: 12,
      eventos: 12,
      cern: 10,
      "world wide web": 10,
      "tim berners-lee": 10,
      fresas: 8,
      "coupe de noel": 14,
      esqui: 14,
      queso: 12,
    },
    body: {
      museo: 5,
      museos: 5,
      festival: 5,
      concierto: 5,
      cultura: 4,
      tradicion: 4,
      tradiciones: 4,
      folklore: 4,
      cern: 4,
      "world wide web": 4,
      "tim berners-lee": 4,
      "autocosecha": 3,
      "actividad local": 2,
    },
  },
  "vivir-en-suiza": {
    title: {
      "vivir en suiza": 14,
      "como funciona suiza": 18,
      presupuesto: 12,
      "costo de vida": 16,
      "coste de vida": 16,
      transporte: 14,
      tren: 10,
      cff: 10,
      sbb: 10,
      idioma: 12,
      idiomas: 12,
      lenguas: 14,
      cantones: 14,
      canton: 6,
      puntalidad: 12,
      puntualidad: 12,
      perro: 10,
      electricidad: 12,
      "beber en la calle": 14,
      "muebles viejos": 14,
      "vivir juntos": 10,
      "sistema escolar": 14,
      "ginebra": 6,
      "zurich": 6,
      "devolver compras": 14,
      bicicleta: 10,
      compras: 8,
      clima: 10,
      "queroseno": 10,
      "1 de mayo": 8,
      festivos: 12,
      "desde suiza para el mundo": 0,
      inmigrantes: 4,
      "mercado del alquiler": 0,
    },
    body: {
      "vida diaria": 5,
      presupuesto: 4,
      "costo de vida": 5,
      "coste de vida": 5,
      transporte: 4,
      canton: 3,
      cantones: 3,
      lenguas: 4,
      idioma: 4,
      electricidad: 4,
      "espacio publico": 4,
      "norma no escrita": 4,
      convivencia: 4,
      perro: 3,
      "reglamento interior": 3,
      "cuarto de lavado": 0,
      "suiza no funciona como un pais centralizado": 4,
      "falta de personal": 1,
      "precios del tren": 4,
      supermercado: 4,
      "calidad de vida": 3,
      "proyecto serio de venir a suiza": 2,
      "actividades extraescolares": 3,
      "escuela publica": 4,
    },
  },
};

const NEGATIVE_RULES = {
  trabajo: ["buanderia", "caucion", "alquiler", "seguro del hogar"],
  salud: ["electricidad", "guarderia", "tiempo parcial", "seguro del hogar"],
  tramites: ["danza de los patos", "museos", "festival", "fresas"],
  vivienda: ["periodo de prueba", "kurzarbeit", "trabajo en negro"],
};

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;\s]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseEntries(source) {
  const entries = [];
  const startRegex = /(^|\n)\s*["']([^"']+)["']\s*:\s*\{/g;
  let match;

  while ((match = startRegex.exec(source)) !== null) {
    const key = match[2];
    const braceStart = source.indexOf("{", match.index);
    let index = braceStart;
    let depth = 0;
    let mode = null;
    let escaped = false;

    while (index < source.length) {
      const char = source[index];

      if (mode) {
        if (escaped) {
          escaped = false;
        } else if (char === "\\") {
          escaped = true;
        } else if (char === mode) {
          mode = null;
        }
        index += 1;
        continue;
      }

      if (char === "'" || char === '"' || char === "`") {
        mode = char;
        index += 1;
        continue;
      }

      if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
        if (depth === 0) {
          index += 1;
          break;
        }
      }

      index += 1;
    }

    const end = index;
    const block = source.slice(match.index + (match[1] ? match[1].length : 0), end);
    entries.push({
      key,
      start: match.index + (match[1] ? match[1].length : 0),
      end,
      block,
    });
  }

  return entries;
}

function extractField(block, fieldName) {
  const regex = new RegExp(`${fieldName}\\s*:\\s*["']([\\s\\S]*?)["']\\s*,`);
  const match = block.match(regex);
  return match ? match[1] : "";
}

function extractTemplateField(block, fieldName) {
  const regex = new RegExp(`${fieldName}\\s*:\\s*\`([\\s\\S]*?)\``, "m");
  const match = block.match(regex);
  return match ? match[1] : "";
}

function updateLineField(block, fieldName, newValue) {
  const jsonValue = JSON.stringify(newValue);
  const regex = new RegExp(`(\\n\\s*${fieldName}\\s*:\\s*)["'][^"']*["']`);
  if (regex.test(block)) {
    return block.replace(regex, `$1${jsonValue}`);
  }
  return block;
}

function makeArticle(entry, filename) {
  const title = extractField(entry.block, "title");
  const description = extractField(entry.block, "description");
  const summary = extractField(entry.block, "summary");
  const category = extractField(entry.block, "category");
  const hub = extractField(entry.block, "hub");
  const slug = extractField(entry.block, "slug");
  const keywords = extractField(entry.block, "keywords");
  const content = extractTemplateField(entry.block, "content");

  return {
    key: entry.key,
    filename,
    lang: LANGUAGE_BY_FILE[filename],
    title,
    description,
    summary,
    category,
    hub,
    slug,
    keywords,
    content,
    titleNorm: normalizeText(title),
    bodyNorm: normalizeText([description, summary, keywords, stripHtml(content)].join(" ")),
  };
}

function deriveCategory(hub, lang) {
  if (!hub) {
    return "";
  }
  const labels = HUB_LABELS[hub];
  return labels ? labels[lang] || labels.es : "";
}

function scoreRuleMap(text, ruleMap) {
  const matches = [];
  let score = 0;
  for (const [phrase, weight] of Object.entries(ruleMap || {})) {
    if (weight <= 0) {
      continue;
    }
    if (containsPhrase(text, phrase)) {
      score += weight;
      matches.push(phrase);
    }
  }
  return { score, matches };
}

function containsPhrase(text, phrase) {
  const escaped = escapeRegExp(phrase);
  const regex = new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`);
  return regex.test(text);
}

function canonicalArticleId(article) {
  const keyMatch = article.key.match(/^(fb-daily-\d{8}-\d{2})-/);
  if (keyMatch) {
    return keyMatch[1];
  }

  const slugMatch = article.slug.match(/^(actualidad-\d{4}-\d{2}-\d{2}-\d+)/);
  if (slugMatch) {
    return slugMatch[1];
  }

  return article.key;
}

function classifyArticle(article) {
  const override = MANUAL_OVERRIDES[article.key];
  if (override) {
    return {
      hub: override.hub,
      reason: override.reason,
      matched: ["manual"],
      source: "manual",
      bestScore: 999,
      secondScore: 0,
    };
  }

  const scores = [];
  const titleText = article.titleNorm;
  const bodyText = article.bodyNorm;

  for (const hub of HUBS) {
    const rules = HUB_RULES[hub] || {};
    const titleScore = scoreRuleMap(titleText, rules.title);
    const bodyScore = scoreRuleMap(bodyText, rules.body);
    let score = titleScore.score + bodyScore.score;
    const matched = [...titleScore.matches, ...bodyScore.matches];

    for (const negative of NEGATIVE_RULES[hub] || []) {
      if (titleText.includes(negative) || bodyText.includes(negative)) {
        score -= 3;
      }
    }

    scores.push({
      hub,
      score,
      matched,
    });
  }

  scores.sort((a, b) => b.score - a.score);
  const best = scores[0];
  const second = scores[1];

  if (!best || best.score <= 0) {
    return {
      hub: "",
      reason: "No allowed hub matched with enough confidence.",
      matched: [],
      source: "automatic",
      bestScore: 0,
      secondScore: second ? second.score : 0,
    };
  }

  if (best.score < 9 && second && second.score >= best.score - 1) {
    return {
      hub: "",
      reason: `Low-confidence ambiguous match between ${best.hub} and ${second.hub}.`,
      matched: best.matched.slice(0, 5),
      source: "automatic",
      bestScore: best.score,
      secondScore: second.score,
    };
  }

  return {
    hub: best.hub,
    reason: `Automatic match from keywords: ${best.matched.slice(0, 6).join(", ") || "scored content signals"}.`,
    matched: best.matched.slice(0, 6),
    source: "automatic",
    bestScore: best.score,
    secondScore: second ? second.score : 0,
  };
}

function collectAllArticles() {
  const byFile = new Map();
  const esCanon = new Map();
  const seenEs = new Set();

  for (const filename of FILES) {
    const filePath = path.join(ROOT, filename);
    const source = fs.readFileSync(filePath, "utf8");
    const parsedEntries = parseEntries(source);
    const articles = parsedEntries.map((entry) => ({
      entry,
      article: makeArticle(entry, filename),
    }));
    byFile.set(filename, {
      source,
      entries: articles,
    });
  }

  for (const filename of ES_PRIORITY_FILES) {
    const fileData = byFile.get(filename);
    for (const { article } of fileData.entries) {
      const id = canonicalArticleId(article);
      if (!seenEs.has(id)) {
        esCanon.set(id, article);
        seenEs.add(id);
      }
    }
  }

  return { byFile, esCanon };
}

function buildCanonicalDecisions(esCanon) {
  const decisions = new Map();
  const modifiedKeys = [];

  for (const [id, article] of esCanon.entries()) {
    const decision = classifyArticle(article);
    const currentHubValid = ALLOWED_HUBS.has(article.hub);
    const currentCategoryMatches = article.category === deriveCategory(article.hub, "es");
    let finalHub = decision.hub;
    let finalReason = decision.reason;

    if (decision.source === "automatic" && currentHubValid && article.hub && currentCategoryMatches) {
      if (decision.hub !== article.hub) {
        const strongAutomaticOverride =
          decision.bestScore >= 16 &&
          decision.bestScore - decision.secondScore >= 6;

        if (!strongAutomaticOverride) {
          finalHub = article.hub;
          finalReason = "Kept current validated hub because automatic evidence was not strong enough to override it.";
        }
      }
    }

    if (decision.source === "automatic" && !article.hub) {
      const strongEnoughForEmpty =
        decision.hub &&
        decision.bestScore >= 12 &&
        decision.bestScore - decision.secondScore >= 3;

      if (!strongEnoughForEmpty) {
        finalHub = "";
        finalReason = "Kept empty because no strong hub signal cleared the confidence threshold.";
      }
    }

    const newCategory = deriveCategory(finalHub, "es");
    const changed = article.hub !== finalHub || article.category !== newCategory;

    decisions.set(id, {
      id,
      key: article.key,
      title: article.title,
      sourceFile: article.filename,
      oldHub: article.hub,
      oldCategory: article.category,
      newHub: finalHub,
      newCategory,
      reason: finalReason,
      decisionSource: decision.source,
      changed,
    });

    if (changed) {
      modifiedKeys.push(id);
    }
  }

  return { decisions, modifiedKeys };
}

function applyDecisions(byFile, decisions) {
  const writes = [];
  const perArticleChanges = [];

  for (const [filename, fileData] of byFile.entries()) {
    const lang = LANGUAGE_BY_FILE[filename];
    let nextSource = fileData.source;
    let changedCount = 0;

    for (let index = fileData.entries.length - 1; index >= 0; index -= 1) {
      const { entry, article } = fileData.entries[index];
      const esDecision = decisions.get(canonicalArticleId(article));

      if (!esDecision) {
        continue;
      }

      const expectedHub = esDecision.newHub;
      const expectedCategory = deriveCategory(expectedHub, lang);

      const needsChange =
        article.hub !== expectedHub ||
        article.category !== expectedCategory;

      if (!needsChange) {
        continue;
      }

      let nextBlock = entry.block;
      nextBlock = updateLineField(nextBlock, "category", expectedCategory);
      nextBlock = updateLineField(nextBlock, "hub", expectedHub);

      nextSource =
        nextSource.slice(0, entry.start) +
        nextBlock +
        nextSource.slice(entry.end);

      changedCount += 1;
      perArticleChanges.push({
        key: esDecision.key,
        id: esDecision.id,
        filename,
        lang,
        oldHub: article.hub,
        newHub: expectedHub,
        oldCategory: article.category,
        newCategory: expectedCategory,
      });
    }

    writes.push({
      filename,
      source: nextSource,
      changedCount,
    });
  }

  return { writes, perArticleChanges };
}

function validateOutputs(writes) {
  const errors = [];
  const perKeyHubs = new Map();
  const duplicateIds = [];
  let totalArticles = 0;

  for (const write of writes) {
    const parsed = parseEntries(write.source);
    const perFileIds = new Map();
    for (const entry of parsed) {
      const article = makeArticle(entry, write.filename);
      totalArticles += 1;

      const expectedCategory = deriveCategory(article.hub, article.lang);

      if (!ALLOWED_HUBS.has(article.hub)) {
        errors.push(`${write.filename}:${article.key} invalid hub "${article.hub}"`);
      }

      if (!article.hub && article.category) {
        errors.push(`${write.filename}:${article.key} has category without hub`);
      }

      if (article.hub && !article.category) {
        errors.push(`${write.filename}:${article.key} has hub without category`);
      }

      if (article.category !== expectedCategory) {
        errors.push(
          `${write.filename}:${article.key} category "${article.category}" does not match hub "${article.hub}"`
        );
      }

      const id = canonicalArticleId(article);
      if (!perFileIds.has(id)) {
        perFileIds.set(id, []);
      }
      perFileIds.get(id).push(article.key);

      if (!perKeyHubs.has(id)) {
        perKeyHubs.set(id, new Set());
      }
      perKeyHubs.get(id).add(article.hub);
    }

    for (const [id, keys] of perFileIds.entries()) {
      if (keys.length > 1) {
        duplicateIds.push(`${write.filename}:${id} duplicates ${keys.join(", ")}`);
      }
    }
  }

  for (const [key, hubs] of perKeyHubs.entries()) {
    const nonEmpty = [...hubs];
    if (nonEmpty.length > 1) {
      errors.push(`${key} diverges across languages/files: ${nonEmpty.join(", ")}`);
    }
  }

  return {
    errors,
    duplicateIds,
    totalArticles,
  };
}

function buildReport({
  decisions,
  modifiedKeys,
  perArticleChanges,
  validation,
  byFile,
}) {
  const totalEs = decisions.size;
  const changedDecisions = [...decisions.values()].filter((item) => item.changed);
  const emptyDecisions = [...decisions.values()].filter((item) => item.newHub === "");
  const manualCount = [...decisions.values()].filter((item) => item.decisionSource === "manual").length;
  const fileCounts = [];

  for (const [filename, fileData] of byFile.entries()) {
    fileCounts.push(`- \`${filename}\`: ${fileData.entries.length} article(s)`);
  }

  const impactedByKey = new Map();
  for (const change of perArticleChanges) {
    if (!impactedByKey.has(change.id)) {
      impactedByKey.set(change.id, []);
    }
    impactedByKey.get(change.id).push(`${change.lang}:${path.basename(change.filename)}`);
  }

  const lines = [];
  lines.push("# HUB Audit Report");
  lines.push("");
  lines.push(`- Spanish source articles scanned: **${totalEs}**`);
  lines.push(`- Canonical ES decisions changed: **${changedDecisions.length}**`);
  lines.push(`- File-level updates applied: **${perArticleChanges.length}**`);
  lines.push(`- Manual decisions: **${manualCount}**`);
  lines.push(`- Canonical articles intentionally left empty: **${emptyDecisions.length}**`);
  lines.push(`- Validation errors: **${validation.errors.length}**`);
  lines.push(`- Duplicate canonical ids: **${validation.duplicateIds.length}**`);
  lines.push("");
  lines.push("## Inventory");
  lines.push("");
  lines.push(...fileCounts);
  lines.push("");
  lines.push("## Modified Articles");
  lines.push("");
  if (!changedDecisions.length) {
    lines.push("No canonical ES hub changes were required.");
  } else {
    lines.push("| Key | Title ES | Source bundle | Current hub | Recommended hub | Reason | Multilingual impact |");
    lines.push("| --- | --- | --- | --- | --- | --- | --- |");
    for (const item of changedDecisions.sort((a, b) => a.key.localeCompare(b.key))) {
      const impact = (impactedByKey.get(item.id) || ["es:source-only"]).join(", ");
      lines.push(
        `| \`${item.key}\` | ${escapeTable(item.title)} | \`${item.sourceFile}\` | \`${item.oldHub || "(empty)"}\` | \`${item.newHub || "(empty)"}\` | ${escapeTable(item.reason)} | ${escapeTable(impact)} |`
      );
    }
  }
  lines.push("");
  lines.push("## Validation");
  lines.push("");
  if (!validation.errors.length) {
    lines.push("All files passed the target data contract:");
    lines.push("- every article has a valid `hub` or an empty pair");
    lines.push("- every non-empty hub has the matching translated `category`");
    lines.push("- the same key resolves to the same hub across languages/files");
    lines.push("- no file contains duplicate canonical article ids");
  } else {
    lines.push("Validation errors:");
    lines.push("");
    for (const error of validation.errors) {
      lines.push(`- ${error}`);
    }
  }

  if (validation.duplicateIds.length) {
    lines.push("");
    lines.push("Duplicate canonical ids:");
    lines.push("");
    for (const duplicate of validation.duplicateIds) {
      lines.push(`- ${duplicate}`);
    }
  }

  return lines.join("\n");
}

function escapeTable(value) {
  return String(value || "")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ");
}

function ensureDir(targetPath) {
  const dir = path.dirname(targetPath);
  fs.mkdirSync(dir, { recursive: true });
}

function main() {
  const args = new Set(process.argv.slice(2));
  const shouldWrite = args.has("--write");
  const reportIndex = process.argv.indexOf("--report");
  const reportPath =
    reportIndex !== -1 && process.argv[reportIndex + 1]
      ? path.resolve(process.argv[reportIndex + 1])
      : path.join(ROOT, "artifacts", "hub-audit-report.md");

  const { byFile, esCanon } = collectAllArticles();
  const { decisions, modifiedKeys } = buildCanonicalDecisions(esCanon);
  const { writes, perArticleChanges } = applyDecisions(byFile, decisions);
  const validation = validateOutputs(writes);
  const report = buildReport({
    decisions,
    modifiedKeys,
    perArticleChanges,
    validation,
    byFile,
  });

  ensureDir(reportPath);
  fs.writeFileSync(reportPath, report, "utf8");

  if (shouldWrite) {
    for (const write of writes) {
      if (write.changedCount > 0) {
        fs.writeFileSync(path.join(ROOT, write.filename), write.source, "utf8");
      }
    }
  }

  console.log(`Spanish source articles scanned: ${decisions.size}`);
  console.log(`Canonical ES decisions changed: ${[...decisions.values()].filter((item) => item.changed).length}`);
  console.log(`File-level updates: ${perArticleChanges.length}`);
  console.log(`Report: ${reportPath}`);

  if (validation.errors.length || validation.duplicateIds.length) {
    console.error(
      `Validation failed with ${validation.errors.length} error(s) and ${validation.duplicateIds.length} duplicate canonical id(s).`
    );
    process.exitCode = 1;
  }
}

main();
