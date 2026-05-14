#!/usr/bin/env python3
"""
publish_daily_posts.py

Lit /Users/oscarandujar/Projets/Publications/posts/posts_YYYY-MM-DD.md,
extrait les publications Facebook, traduit automatiquement avec DeepL,
insere les articles dans les fichiers JS multilingues du site, puis fait git commit + push.

Langues generees :
- es : content-articles-facebook-daily-es.js
- fr : content-articles-facebook-daily-fr.js
- en : content-articles-facebook-daily-en.js
- de : content-articles-facebook-daily-de.js
- it : content-articles-facebook-daily-it.js

Usage :
    python3 publish_daily_posts.py
    python3 publish_daily_posts.py --date 2026-05-03
    python3 publish_daily_posts.py --date 2026-05-03 --dry-run
"""

import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, datetime

# ── Configuration ─────────────────────────────────────────────────────────────

POSTS_DIR = os.environ.get("POSTS_DIR", "/Users/oscarandujar/Projets/Publications/posts")
SITE_DIR = os.environ.get("SITE_DIR", "/Users/oscarandujar/Projets/espanolesensuiza")

LANGUAGES = ["es", "fr", "en", "de", "it"]

TARGET_FILES = {
    "es": os.path.join(SITE_DIR, "content-articles-facebook-daily-es.js"),
    "fr": os.path.join(SITE_DIR, "content-articles-facebook-daily-fr.js"),
    "en": os.path.join(SITE_DIR, "content-articles-facebook-daily-en.js"),
    "de": os.path.join(SITE_DIR, "content-articles-facebook-daily-de.js"),
    "it": os.path.join(SITE_DIR, "content-articles-facebook-daily-it.js"),
}

DEEPL_API_KEY = os.getenv("DEEPL_API_KEY")

DEEPL_ENDPOINT = "https://api-free.deepl.com/v2/translate"
DEEPL_TARGETS = {
    "fr": "FR",
    "en": "EN-GB",
    "de": "DE",
    "it": "IT",
}

# ── Table hub / catégorie — système à deux niveaux ────────────────────────────
#
# Niveau 1 — mots-clés FORTS : un seul suffit car le terme est décisif
#   (ex: "lamal" ne peut appartenir qu'à la santé, "quellensteuer" qu'aux impôts)
# Niveau 2 — mots-clés FAIBLES : scoring par hub, le plus haut score gagne
#   (évite qu'un seul mot ambigu comme "seguro" ou "accidente" fausse le résultat)

# Siglas y términos suizos decisivos — aparecen tal cual en textos en español
STRONG_HUB_KEYWORDS = {
    # Salud — siglas oficiales suizas invariantes (usadas en textos ES)
    "lamal": "salud",
    "kvg":   "salud",   # sigla del seguro de enfermedad
    "uvg":   "salud",   # seguro de accidentes
    "laa":   "salud",   # idem en textos ES/FR
    "suva":  "salud",   # caja nacional de seguros de accidentes
    # Impuestos — términos técnicos suizos invariantes en español suizo
    "quellensteuer": "impuestos",   # impuesto en la fuente, término usual en ES suizo
    "pilar 3a":      "impuestos",
    # Permisos — formulaciones españolas específicas de Suiza
    "permiso b": "tramites",
    "permiso c": "tramites",
    "permiso l": "tramites",
    "permiso f": "tramites",
    # Permiso G = fronterizos (permiso exclusivo de trabajadores transfronterizos)
    "permiso g": "fronterizos",
    # Fronterizos — términos en español
    "fronterizo": "fronterizos",
    "frontalizo": "fronterizos",
    "frontalera": "fronterizos",
    # Salud — término genérico decisivo en contexto suizo
    "seguro":     "salud",          # en artículos sobre Suiza siempre = seguro médico
}

HUB_KEYWORDS = {
    "tramites": [
        # Permis et titres de séjour
        "permiso de residencia", "permiso de trabajo", "permiso de establecimiento",
        "renovación de permiso", "renovacion de permiso", "solicitud de permiso",
        # Procédures administratives
        "empadronamiento", "trámite", "tramite", "migración", "migracion",
        "registro civil", "oficina de extranjería", "oficina de extranjeria",
        "sem", "secretaria de estado para migraciones",
        # Naturalisation et intégration
        "naturalización", "naturalizacion", "prueba de integración",
        "prueba de integracion", "prueba de idioma", "solicitud de nacionalidad",
        "ciudadanía suiza", "ciudadania suiza",
        # Regroupement familial
        "reunificación familiar", "reunificacion familiar",
        "reagrupación familiar", "reagrupacion familiar",
        # Asile et protection
        "asilo", "solicitante de asilo", "refugiado", "protección temporal",
        "proteccion temporal", "estatuto de refugiado",
        # Visa et documents
        "visado", "visado de trabajo", "visado de estudiante",
        "pasaporte suizo", "documento de identidad",
        # Reconnaissance de diplômes
        "homologación de título", "homologacion de titulo",
        "convalidación de título", "convalidacion de titulo",
        "reconocimiento de titulaciones",
        # Permis de conduire
        "carnet de conducir suizo", "canje del carnet",
        "cambio de carnet de conducir",
        # Documents numériques suisses
        "e-id", "ees", "identidad electrónica", "identidad electronica",
    ],
    "salud": [
        # Assurances et couvertures
        "seguro médico", "seguro medico", "seguro de salud",
        "seguro de accidentes", "seguro complementario",
        "franquicia", "prima del seguro", "primas", "prima básica", "prima basica",
        "cobertura médica", "cobertura medica", "reembolso médico", "reembolso medico",
        "mutua",
        # Professionnels de santé
        "médico", "medico", "médico de cabecera", "medico de cabecera",
        "médico de familia", "medico de familia", "médico generalista",
        "médico especialista", "especialista", "psicólogo", "psicologo",
        "psiquiatra", "ginecólogo", "ginecologo", "pediatra",
        "dentista", "dental", "fisioterapeuta", "fisioterapia",
        "enfermero", "enfermera",
        # Soins et traitements
        "enfermedad", "hospital", "urgencias", "farmacia",
        "medicamento", "medicamentos", "receta médica", "receta medica",
        "cita médica", "cita medica", "consulta médica", "consulta medica",
        "tratamiento", "diagnóstico", "diagnostico", "rehabilitación", "rehabilitacion",
        "segunda opinión", "segunda opinion", "lista de espera",
        # Pathologies et santé mentale
        "diente", "dientes", "salud mental", "burnout",
        "depresión", "depresion", "ansiedad", "estrés laboral", "estres laboral",
        # Arrêts maladie et incapacité
        "baja médica", "baja medica", "baja por enfermedad",
        "incapacidad laboral", "incapacidad temporal",
        "accidente laboral", "enfermedad profesional",
        # Maternité
        "embarazo", "parto", "maternidad",
    ],
    "trabajo": [
        # Contrats et relations de travail
        "contrato de trabajo", "contrato laboral",
        "trabajo indefinido", "trabajo temporal", "trabajo fijo",
        "período de prueba", "periodo de prueba",
        "empleador", "trabajador",
        # Rémunération
        "salario", "sueldo", "nómina", "nomina",
        "salario mínimo", "salario minimo", "salario neto", "salario bruto",
        "13.º salario", "decimotercer salario",
        "horas extra", "horas extraordinarias",
        # Fin de contrat
        "despido", "carta de despido", "despido improcedente",
        "finiquito", "liquidación", "liquidacion",
        "indemnización", "indemnizacion", "preaviso de despido",
        # Chômage et aide à l'emploi
        "desempleo", "paro", "rav", "seco",
        "subsidio de desempleo", "prestación por desempleo", "prestacion por desempleo",
        "búsqueda de empleo", "busqueda de empleo",
        "bolsa de trabajo", "agencia de empleo",
        "empresa de trabajo temporal",
        # Recherche d'emploi
        "currículum", "curriculum", "entrevista de trabajo",
        # Travail indépendant
        "autónomo", "autonomo", "trabajo por cuenta propia",
        # Conventions et syndicats
        "cct", "convenio colectivo", "sindicato", "conciliación laboral",
        "conciliacion laboral",
        # Congés et temps de travail
        "vacaciones laborales", "jornada laboral", "jornada reducida",
        "trabajo a tiempo parcial", "trabajo desde casa", "teletrabajo",
        # Congés parentaux
        "permiso de maternidad", "permiso de paternidad",
        "baja de maternidad", "baja de paternidad", "baja laboral",
        # Frais professionnels
        "gastos de desplazamiento", "plus de transporte",
        # Retraite et cotisations
        "avs", "ahv", "lpp", "pensión", "pension",
        "cotización", "cotizacion",
        # Formation professionnelle
        "formación profesional", "formacion profesional",
        "aprendizaje", "formación continua", "formacion continua",
        # Divers
        "empleo", "laboral",
    ],
    "vivienda": [
        # Bail et location
        "alquiler", "arrendamiento", "piso en alquiler",
        "contrato de alquiler", "rescisión del contrato", "rescision del contrato",
        "preaviso de salida", "regulación del alquiler", "regulacion del alquiler",
        "precio del alquiler", "mercado inmobiliario",
        # Parties au bail
        "inquilino", "propietario", "casero",
        "subarrendamiento", "subarrendar",
        # Garanties et dépôts
        "garantía de alquiler", "garantia de alquiler",
        "depósito de garantía", "deposito de garantia", "fianza",
        # Types de logement
        "vivienda", "apartamento", "estudio",
        "piso compartido", "compañero de piso", "companero de piso",
        "habitación", "habitacion", "alojamiento", "residencia",
        # Procédures et litiges
        "alquilar", "inmobiliaria", "comisión inmobiliaria", "comision inmobiliaria",
        "desahucio", "queja al casero", "mediación en alquiler",
        "mediacion en alquiler", "daños en el piso", "danos en el piso",
        "inventario del piso",
        # Charges et services
        "gastos comunes", "calefacción", "calefaccion",
        # Achat immobilier
        "hipoteca", "comprar piso", "comprar vivienda",
        "copropiedad", "administrador de fincas",
        # Aides au logement
        "subvención al alquiler", "subvencion al alquiler", "ayuda al alquiler",
    ],
    "impuestos": [
        # Impôts principaux
        "impuesto", "impuestos en suiza", "impuesto sobre la renta",
        "impuesto cantonal", "impuesto municipal", "impuesto federal",
        "impuesto de fortuna", "impuesto sobre el patrimonio",
        # Impôt à la source
        "retención en la fuente", "retencion en la fuente",
        "impuesto en la fuente", "retención fiscal", "retencion fiscal",
        # Déclaration d'impôts
        "declaración de la renta", "declaracion de la renta",
        "declaración fiscal", "declaracion fiscal",
        "declaración de impuestos", "declaracion de impuestos",
        "formulario fiscal",
        # Concepts fiscaux
        "fiscal", "tributar", "carga fiscal", "tipo impositivo",
        "ingreso imponible", "base imponible", "tramo impositivo",
        "deducción", "deduccion", "desgravación", "desgravacion",
        "deducción fiscal", "deduccion fiscal",
        "exención fiscal", "exencion fiscal", "exento de impuestos",
        "deducción por hijos", "deduccion por hijos",
        "deducción por transporte", "deduccion por transporte",
        # Résidence fiscale
        "residente fiscal", "domicilio fiscal",
        "cambio de residencia fiscal", "canton de imposición",
        "canton de imposicion",
        # Relations avec les administrations
        "hacienda", "aeat", "administración tributaria",
        "administracion tributaria",
        "irpf", "convenio de doble imposición", "doble imposicion",
        # Certificats et documents
        "certificado fiscal", "certificado de retenciones",
        "deuda fiscal", "atrasos fiscales",
        # Piliers et prévoyance
        "pilar 3", "tercer pilar",
    ],
    "fronterizos": [
        # Statut et définitions
        "fronterizo", "frontera suiza", "trabajo transfronterizo",
        "trabajar en suiza viviendo en el extranjero",
        # Par pays de résidence
        "trabajar en suiza desde francia",
        "trabajar en suiza desde alemania",
        "trabajar en suiza desde italia",
        "vivir en francia trabajar en suiza",
        "vivir en alemania trabajar en suiza",
        "vivir en italia trabajar en suiza",
        "residente en francia", "residente en alemania", "residente en italia",
        # Frontières spécifiques
        "frontera franco-suiza", "frontera italo-suiza", "frontera germano-suiza",
        "zona fronteriza", "autorización fronteriza",
        # Régime de retour
        "retorno diario", "retorno semanal",
        # Accord de libre circulation
        "acuerdo de libre circulación", "acuerdo de libre circulacion",
        "libre circulación de personas", "libre circulacion de personas",
        # Fiscalité frontalière
        "impuesto fronterizo", "convenio tributario fronterizo",
        "imputación fiscal fronterizo", "imputacion fiscal fronterizo",
        # Cotisations et prestations
        "cotización en suiza", "cotizacion en suiza",
        "prestaciones en país de residencia",
        # Teletravail transfrontalier
        "teletrabajo desde el extranjero", "teletrabajo transfronterizo",
        # Assurance maladie frontaliers
        "lamal para fronterizos", "seguro médico fronterizo",
        "seguro medico fronterizo", "kvg para fronterizos",
        # Chômage frontaliers
        "desempleo fronterizo", "convenio frontaliero",
    ],
    "vivir-en-suiza": [
        # Vie quotidienne et adaptation
        "vida en suiza", "vivir en suiza", "adaptarse a suiza",
        "cultura suiza", "costumbres suizas",
        "integración en suiza", "integracion en suiza",
        # Régions linguistiques
        "suiza alemana", "suiza francesa", "suiza italiana",
        # Coût de la vie
        "coste de vida", "precio de vida", "coste de vida en suiza",
        "poder adquisitivo", "cara suiza", "precio de la vida",
        # Transports
        "tren en suiza", "sbb", "cff",
        "bicicleta", "bicicleta eléctrica", "bicicleta electrica",
        "bici en suiza", "autopista suiza", "vigneta", "vignette",
        "transporte público", "transporte publico",
        "abono de transporte", "transporte en suiza",
        # Circulation
        "conducir en suiza", "reglas de tráfico", "reglas de trafico",
        "multa de tráfico", "multa de trafico", "parking en suiza",
        # Politique et démocratie directe
        "referéndum", "referendum", "votación suiza", "votacion suiza",
        "iniciativa popular", "política suiza", "politica suiza",
        "svp", "udc", "consejo federal suizo", "consejero federal",
        "departamento federal", "parlamento suizo",
        # Organisation territoriale
        "cantón", "canton", "sistema suizo", "municipio suizo",
        "comunidad suiza",
        # Retraite
        "jubilación en suiza", "jubilacion en suiza",
        "jubilarse en suiza", "pensión de jubilación",
        "pension de jubilacion", "avs tercera edad",
        # Éducation
        "escuela suiza", "sistema educativo", "guardería", "guarderia",
        "jardín de infancia", "jardin de infancia",
        "universidad suiza", "educación en suiza", "educacion en suiza",
        # Langue
        "aprender alemán", "aprender aleman",
        "aprender francés", "aprender frances", "aprender italiano",
        "idioma en suiza", "curso de idiomas",
        # Consommation et alimentation
        "supermercados en suiza", "migros", "coop",
        "precio alimentos", "precio de los alimentos",
        # Environnement et règles
        "reciclar en suiza", "basura en suiza", "reglas de basura",
        # Fêtes et culture
        "fiesta nacional suiza", "1 de agosto", "día nacional suizo",
        "dia nacional suizo",
        # Services financiers
        "banco en suiza", "cuenta bancaria en suiza",
        # Assurances non-santé
        "seguro de hogar", "seguro de responsabilidad civil", "rc personal",
        # Prestations sociales
        "prestaciones sociales", "beneficios sociales", "ayudas estatales",
        "subsidios sociales", "seguridad social suiza",
    ],
}

DEFAULT_HUB = "vivir-en-suiza"


def infer_hub(title: str, content: str) -> str:
    """Détermine le hub d'un article via un système à deux niveaux.

    1. Mots-clés forts : un seul suffit (termes sans ambiguïté).
    2. Scoring : chaque hub accumule un point par mot-clé présent.
       Le hub avec le score le plus élevé gagne. En cas d'égalité
       ou d'absence de correspondance, on retourne DEFAULT_HUB.
    """
    combined = (title + " " + content).lower()

    # ── Niveau 1 : mots-clés forts ────────────────────────────────────────────
    for kw, hub in STRONG_HUB_KEYWORDS.items():
        if kw in combined:
            return hub

    # ── Niveau 2 : scoring ────────────────────────────────────────────────────
    scores: dict[str, int] = {hub: 0 for hub in HUB_KEYWORDS}
    for hub, keywords in HUB_KEYWORDS.items():
        for kw in keywords:
            if kw in combined:
                scores[hub] += 1

    best_score = max(scores.values())
    if best_score == 0:
        return DEFAULT_HUB

    # En cas d'égalité stricte entre deux hubs, on retourne DEFAULT_HUB
    # (mieux vaut "vivir-en-suiza" que se tromper de catégorie)
    winners = [h for h, s in scores.items() if s == best_score]
    if len(winners) == 1:
        return winners[0]
    return DEFAULT_HUB

CATEGORY_BY_HUB = {
    "es": {
        "tramites": "Tramites y Permisos",
        "trabajo": "Trabajo y Salarios",
        "vivienda": "Vivienda",
        "salud": "Salud y LAMal",
        "impuestos": "Impuestos",
        "fronterizos": "Fronterizos",
        "vivir-en-suiza": "Vivir en Suiza",
    },
    "fr": {
        "tramites": "Démarches et permis",
        "trabajo": "Travail et salaires",
        "vivienda": "Logement",
        "salud": "Santé et LAMal",
        "impuestos": "Impôts",
        "fronterizos": "Frontaliers",
        "vivir-en-suiza": "Vivre en Suisse",
    },
    "en": {
        "tramites": "Formalities and Permits",
        "trabajo": "Work and Salaries",
        "vivienda": "Housing",
        "salud": "Health and LAMal",
        "impuestos": "Taxes",
        "fronterizos": "Cross-border Workers",
        "vivir-en-suiza": "Living in Switzerland",
    },
    "de": {
        "tramites": "Formalitäten und Bewilligungen",
        "trabajo": "Arbeit und Löhne",
        "vivienda": "Wohnen",
        "salud": "Gesundheit und KVG",
        "impuestos": "Steuern",
        "fronterizos": "Grenzgänger",
        "vivir-en-suiza": "Leben in der Schweiz",
    },
    "it": {
        "tramites": "Pratiche e permessi",
        "trabajo": "Lavoro e salari",
        "vivienda": "Alloggio",
        "salud": "Salute e LAMal",
        "impuestos": "Imposte",
        "fronterizos": "Frontalieri",
        "vivir-en-suiza": "Vivere in Svizzera",
    },
}

# ── Helpers ───────────────────────────────────────────────────────────────────

def slugify(text: str, max_len: int = 70) -> str:
    replacements = {
        "á":"a","é":"e","í":"i","ó":"o","ú":"u","ü":"u","ñ":"n",
        "à":"a","è":"e","ì":"i","ò":"o","ù":"u",
        "â":"a","ê":"e","î":"i","ô":"o","û":"u",
        "ä":"a","ë":"e","ï":"i","ö":"o","ÿ":"y",
        "ç":"c","ß":"ss",
        "Á":"a","É":"e","Í":"i","Ó":"o","Ú":"u","Ü":"u","Ñ":"n",
        "À":"a","È":"e","Ì":"i","Ò":"o","Ù":"u",
        "Â":"a","Ê":"e","Î":"i","Ô":"o","Û":"u",
        "Ä":"a","Ë":"e","Ï":"i","Ö":"o","Ÿ":"y",
        "Ç":"c","ª":"a","º":"o",
    }
    t = text.lower()
    for k, v in replacements.items():
        t = t.replace(k, v)
    t = re.sub(r"[^a-z0-9\s-]", "", t)
    t = re.sub(r"[\s]+", "-", t.strip())
    t = re.sub(r"-+", "-", t)
    return t[:max_len].rstrip("-") or "article"


def reading_time(text: str) -> int:
    return max(1, round(len(text.split()) / 200))


def text_to_html(paragraphs: list) -> str:
    return "\n".join(f"<p>{p}</p>" for p in paragraphs if p.strip())


def make_description(first_para: str, max_len: int = 160) -> str:
    d = first_para.strip()
    if len(d) > max_len:
        d = d[:max_len].rsplit(" ", 1)[0] + "…"
    return d


def make_keywords(title: str, first_para: str) -> str:
    combined = (title + " " + first_para).lower()
    combined = re.sub(r"[^a-záéíóúüñà-ÿ\s]", " ", combined)
    stop = {
        "para","como","pero","esto","esta","este","desde","sobre","entre",
        "dans","avec","pour","this","that","from","with","eine","einer",
        "und","oder","dass","sono","alla","della","degli","con","che"
    }
    words = [w for w in combined.split() if len(w) > 3 and w not in stop]
    seen, unique = set(), []
    for w in words:
        if w not in seen:
            seen.add(w)
            unique.append(w)
        if len(unique) == 8:
            break
    return ", ".join(unique)


def format_date(d: date, lang: str) -> str:
    months = {
        "es": ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
        "fr": ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
        "en": ["January","February","March","April","May","June","July","August","September","October","November","December"],
        "de": ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
        "it": ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],
    }
    if lang == "en":
        return f"{months[lang][d.month - 1]} {d.day}, {d.year}"
    return f"{d.day} {months[lang][d.month - 1]} {d.year}"


def js_string(text: str) -> str:
    return json.dumps(text, ensure_ascii=False)


def js_template(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

# ── Traduction — DeepL (primaire) + MyMemory (fallback quota) ─────────────────

_CACHE:             dict = {}
_DEEPL_QUOTA_HIT:   bool = False   # True dès qu'un HTTP 456 est reçu

# Correspondances langues pour MyMemory (différentes de DeepL)
_MYMEMORY_LANGS = {"fr": "fr", "en": "en-GB", "de": "de", "it": "it"}

_HTML_ENTITIES = {
    "&#x27;": "'", "&#39;": "'", "&quot;": '"',
    "&amp;": "&", "&lt;": "<", "&gt;": ">",
    "&x27;": "'", "&x22;": '"',
}


def require_env(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise ValueError(f"Missing {name} environment variable")
    return value


def _clean_html_entities(text: str) -> str:
    for ent, rep in _HTML_ENTITIES.items():
        text = text.replace(ent, rep)
    return text


def check_deepl_quota() -> None:
    """Interroge /v2/usage et affiche les caracteres restants. Ne bloque pas."""
    if not DEEPL_API_KEY:
        return
    try:
        req = urllib.request.Request(
            "https://api-free.deepl.com/v2/usage",
            headers={"Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}"},
        )
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8"))
        used  = data.get("character_count", 0)
        limit = data.get("character_limit", 0)
        pct   = (used / limit * 100) if limit else 0
        remaining = limit - used
        tag = "[WARN]" if pct >= 80 else "[INFO]"
        print(f"{tag} DeepL quota : {used:,}/{limit:,} chars utilises ({pct:.1f}%) "
              f"— {remaining:,} restants ce mois")
        if pct >= 100:
            global _DEEPL_QUOTA_HIT
            _DEEPL_QUOTA_HIT = True
            print("[WARN] Quota DeepL epuise — traductions via MyMemory")
    except Exception as exc:
        print(f"[INFO] Impossible de verifier le quota DeepL : {exc}")


def _translate_deepl(text: str, lang: str, retries: int = 3) -> str:
    """Appel DeepL. Leve RuntimeError sur erreur reseau, _DeepLQuotaError si 456."""
    global _DEEPL_QUOTA_HIT
    if _DEEPL_QUOTA_HIT:
        raise _DeepLQuotaError("quota deja atteint ce mois")
    data = urllib.parse.urlencode({
        "text":               text,
        "source_lang":        "ES",
        "target_lang":        DEEPL_TARGETS[lang],
        "preserve_formatting": "1",
        "tag_handling":       "html",
    }).encode("utf-8")
    last_error = None
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(
                DEEPL_ENDPOINT, data=data,
                headers={
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=45) as r:
                result = json.loads(r.read().decode("utf-8"))
            translated = _clean_html_entities(result["translations"][0]["text"])
            return translated
        except urllib.error.HTTPError as exc:
            if exc.code in (456, 529):
                # 456 = quota mensuel epuise, 529 = serveur sature (traite comme quota)
                _DEEPL_QUOTA_HIT = True
                raise _DeepLQuotaError(f"HTTP {exc.code} — quota DeepL atteint") from exc
            last_error = exc
            if attempt < retries:
                wait = 5 * attempt
                print(f"  [RETRY] DeepL tentative {attempt}/{retries}, attente {wait}s...")
                time.sleep(wait)
        except Exception as exc:
            last_error = exc
            if attempt < retries:
                wait = 5 * attempt
                print(f"  [RETRY] DeepL tentative {attempt}/{retries}, attente {wait}s...")
                time.sleep(wait)
    raise RuntimeError(f"Erreur DeepL vers {lang}: {last_error}")


def _translate_mymemory_chunk(chunk: str, lang: str) -> str:
    """Traduit un fragment (<= 500 chars) via MyMemory API (gratuit, sans cle)."""
    target = _MYMEMORY_LANGS.get(lang, lang)
    params = urllib.parse.urlencode({
        "q":        chunk,
        "langpair": f"es|{target}",
        "de":       "andujar.oscar@gmail.com",   # +quota gratuit (10 000 mots/jour)
    })
    url = f"https://api.mymemory.translated.net/get?{params}"
    req = urllib.request.Request(url, headers={"User-Agent": "espanolesensuiza/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.loads(r.read().decode("utf-8"))
    status = data.get("responseStatus", 0)
    if status == 200:
        return data["responseData"]["translatedText"]
    raise RuntimeError(f"MyMemory status {status}: {data.get('responseDetails', '')}")


def _translate_mymemory(text: str, lang: str) -> str:
    """Traduit via MyMemory en decoupant les textes longs en phrases (<= 500 chars)."""
    if len(text) <= 500:
        return _translate_mymemory_chunk(text, lang)
    # Decoupage par phrases pour respecter la limite de 500 chars par requete
    sentences = re.split(r"(?<=[.!?])\s+", text)
    parts, buf = [], ""
    for sent in sentences:
        if len(buf) + len(sent) + 1 <= 490:
            buf = (buf + " " + sent).strip()
        else:
            if buf:
                parts.append(_translate_mymemory_chunk(buf, lang))
                time.sleep(0.4)   # eviter le rate-limit MyMemory
            buf = sent[:490]
    if buf:
        parts.append(_translate_mymemory_chunk(buf, lang))
    return " ".join(parts)


class _DeepLQuotaError(Exception):
    """Quota mensuel DeepL atteint — basculement sur MyMemory."""


def translate_text(text: str, lang: str, retries: int = 3) -> str:
    """Traduit *text* vers *lang*. Priorite : DeepL → MyMemory → texte ES original."""
    if lang == "es" or not text.strip():
        return text
    key = (lang, text)
    if key in _CACHE:
        return _CACHE[key]

    # 1. DeepL (moteur principal)
    deepl_skip = False
    if not _DEEPL_QUOTA_HIT:
        try:
            translated = _translate_deepl(text, lang, retries)
            _CACHE[key] = translated
            return translated
        except _DeepLQuotaError as exc:
            print(f"  [WARN] {exc} — basculement MyMemory pour '{lang}'")
            deepl_skip = True
        # autres RuntimeError (reseau, etc.) remontees normalement

    # 2. MyMemory (fallback quota)
    if _DEEPL_QUOTA_HIT or deepl_skip:
        try:
            translated = _translate_mymemory(text, lang)
            _CACHE[key] = translated
            return translated
        except Exception as exc:
            print(f"  [WARN] MyMemory echec pour '{lang}': {exc} — texte ES conserve")

    # 3. Dernier recours : texte original espagnol
    _CACHE[key] = text
    return text


def translate_post(post: dict, lang: str) -> dict:
    if lang == "es":
        return post
    return {
        "num":        post["num"],
        "title":      translate_text(post["title"], lang),
        "paragraphs": [translate_text(p, lang) for p in post["paragraphs"]],
        "hub":        post["hub"],
        "image_slug": post.get("image_slug", ""),  # slug ES conservé après traduction
    }

# ── Parsing Markdown ──────────────────────────────────────────────────────────

def parse_posts(md_content: str) -> list:
    start = re.search(r"^##\s+POST\s+\d+", md_content, re.MULTILINE | re.IGNORECASE)
    if not start:
        return []
    body = md_content[start.start():]
    blocks = re.split(r"^##\s+POST\s+(\d+)[^\n]*\n", body, flags=re.MULTILINE | re.IGNORECASE)
    posts = []
    for i in range(1, len(blocks), 2):
        num = int(blocks[i])
        raw = blocks[i + 1] if i + 1 < len(blocks) else ""
        title, paragraphs, current = "", [], []
        for line in raw.split("\n"):
            s = line.strip()
            if not title and re.match(r"^\*\*.+\*\*$", s):
                title = s.strip("*").strip()
                continue
            if s == "---":
                continue
            if s.lower().startswith("fuentes:") or s.lower().startswith("fuente:"):
                continue
            if s == "":
                if current:
                    paragraphs.append(" ".join(current))
                    current = []
            else:
                current.append(s)
        if current:
            paragraphs.append(" ".join(current))
        if title and paragraphs:
            full = " ".join(paragraphs)
            posts.append({
                "num": num,
                "title": title,
                "paragraphs": paragraphs,
                "hub": infer_hub(title, full),
                "image_slug": slugify(title, max_len=45),  # slug ES, partagé toutes langues
            })
    return posts

# ── Génération JS ─────────────────────────────────────────────────────────────

def build_js_entry(post: dict, day: date, order: int, lang: str) -> tuple:
    date_str = day.strftime("%Y%m%d")
    date_iso = day.strftime("%Y-%m-%d")
    slug_title = slugify(post["title"])
    key = f"fb-daily-{date_str}-{order:02d}-{slug_title}"
    slug = f"actualidad-{date_iso}-{order}-{slug_title}"
    title = post["title"]
    paragraphs = post["paragraphs"]
    full_text = " ".join(paragraphs)
    first_para = paragraphs[0] if paragraphs else ""
    hub = post.get("hub") or infer_hub(title, full_text)
    category = CATEGORY_BY_HUB[lang].get(hub, CATEGORY_BY_HUB[lang][DEFAULT_HUB])
    description = make_description(first_para)
    summary = make_description(first_para, 150)
    keywords = make_keywords(title, first_para)
    rt = reading_time(full_text)
    date_label = format_date(day, lang)
    html_content = text_to_html(paragraphs)
    html_escaped = js_template(html_content)
    # Image — slug ES conservé pour toutes les langues (même image)
    image_slug = post.get("image_slug") or slugify(post["title"], max_len=45)
    featured_image = f"media/guides/actualidad-{image_slug}.jpg"
    block = f'''
    {js_string(key)}: {{
        title: {js_string(title)},
        featuredImage: {js_string(featured_image)},
        imageAlt: {js_string(title)},
        description: {js_string(description)},
        keywords: {js_string(keywords)},
        keywordsLocalized: true,
        category: {js_string(category)},
        hub: {js_string(hub)},
        slug: {js_string(slug)},
        readingTime: {rt},
        dateUpdated: {js_string(date_label)},
        summary: {js_string(summary)},
        relatedSlugs: [],
        content: `<div class="article-content">
{html_escaped}
</div>`
    }}'''
    return key, block


def build_entries_for_language(posts: list, day: date, lang: str) -> list:
    entries = []
    for order, post in enumerate(posts, start=1):
        translated_post = translate_post(post, lang)
        entries.append(build_js_entry(translated_post, day, order, lang))
    return entries

# ── Insertion JS ──────────────────────────────────────────────────────────────

def insert_into_js(entries: list, target_file: str) -> list:
    if not os.path.exists(target_file):
        raise FileNotFoundError(f"Fichier cible introuvable : {target_file}")
    with open(target_file, "r", encoding="utf-8") as f:
        content = f.read()
    inserted_keys, blocks_to_add = [], []
    for key, block in entries:
        if js_string(key) in content or f'"{key}"' in content:
            print(f"  [SKIP] Clé déjà présente : {key}")
        else:
            blocks_to_add.append((key, block))
            inserted_keys.append(key)
    if not blocks_to_add:
        return []
    new_blocks = ",\n".join(block for _, block in blocks_to_add)
    match = re.search(r"\n\}\);\s*$", content, re.MULTILINE)
    if not match:
        raise ValueError(f"Impossible de trouver le }}); dans {target_file}")
    new_content = content[:match.start()] + ",\n" + new_blocks + content[match.start():]
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(new_content)
    return inserted_keys

# ── Git ───────────────────────────────────────────────────────────────────────

def run_git(cmd: list) -> None:
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  [ERREUR git] {' '.join(cmd)}")
        if result.stdout.strip():
            print(result.stdout)
        if result.stderr.strip():
            print(result.stderr)
        sys.exit(1)
    print(f"  [OK] {' '.join(cmd[2:])}")


def git_commit_push(site_dir: str, filenames: list, day: date, post_nums: list, no_push: bool = False) -> None:
    nums_str = ", ".join(str(n) for n in post_nums)
    message = f"daily: add multilingual posts {day.isoformat()} ({nums_str})"
    rel_files = [os.path.relpath(p, site_dir) for p in filenames]
    run_git(["git", "-C", site_dir, "add", *rel_files])
    status = subprocess.run(["git", "-C", site_dir, "status", "--porcelain"], capture_output=True, text=True)
    if not status.stdout.strip():
        print("  [STOP] Aucun changement Git à committer.")
        return
    run_git(["git", "-C", site_dir, "commit", "-m", message])
    if no_push:
        print("  [INFO] --no-push actif : push différé (validation manuelle requise).")
    else:
        run_git(["git", "-C", site_dir, "push"])

# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date",    help="Date YYYY-MM-DD. Défaut : aujourd'hui")
    parser.add_argument("--dry-run", action="store_true", help="Affiche sans écrire ni pusher")
    parser.add_argument("--push",    action="store_true",
                        help="Autorise le git push vers origin/main. ABSENT = commit local uniquement.")
    # --no-push conservé pour rétrocompatibilité (ignoré, le push est opt-in par défaut)
    parser.add_argument("--no-push", action="store_true", help=argparse.SUPPRESS)
    parser.add_argument("--exclude", help="Numéros d'articles à exclure, séparés par virgule. Ex : 2,3")
    args = parser.parse_args()

    # Sécurité : le push n'est jamais implicite — il faut --push explicitement
    # --no-push est un alias rétrocompat, sans effet (push est opt-in)
    do_push = args.push  # False par défaut = aucun push sans action volontaire

    global DEEPL_API_KEY
    DEEPL_API_KEY = require_env("DEEPL_API_KEY")

    # Vérification quota DeepL avant de commencer (non bloquant)
    check_deepl_quota()

    if args.date:
        try:
            day = datetime.strptime(args.date, "%Y-%m-%d").date()
        except ValueError:
            print("  [ERREUR] Format attendu : YYYY-MM-DD")
            sys.exit(1)
    else:
        day = date.today()

    posts_file = os.path.join(POSTS_DIR, f"posts_{day.isoformat()}.md")

    print("\n── Publish daily posts multilang ───────────────────")
    print(f"  Date    : {day.isoformat()}")
    print(f"  Fichier : {posts_file}")
    print(f"  Langues : {', '.join(LANGUAGES)}")

    if not os.path.exists(posts_file):
        print(f"\n  [STOP] Fichier introuvable : {posts_file}")
        sys.exit(0)

    with open(posts_file, "r", encoding="utf-8") as f:
        md_content = f.read()

    posts = parse_posts(md_content)
    if not posts:
        print("\n  [STOP] Aucun post trouvé.")
        sys.exit(0)

    # Filtrage des articles exclus par l'utilisateur
    if args.exclude:
        try:
            excluded_nums = {int(x.strip()) for x in args.exclude.split(",") if x.strip()}
        except ValueError:
            print(f"  [ERREUR] --exclude : valeurs invalides ({args.exclude}). Format attendu : 1,2,3")
            sys.exit(1)
        if excluded_nums:
            before = len(posts)
            posts = [p for p in posts if p["num"] not in excluded_nums]
            print(f"  Articles exclus : {sorted(excluded_nums)} ({before - len(posts)} retiré(s))")

    print(f"\n  Posts trouvés : {len(posts)}")
    for i, post in enumerate(posts, start=1):
        print(f"  [{i}] {post['num']} — {post['title'][:80]}")

    all_inserted: dict = {}
    changed_files: list = []

    for lang_idx, lang in enumerate(LANGUAGES):
        target_file = TARGET_FILES[lang]
        print(f"\n── Langue {lang} ───────────────────────────────────")
        print(f"  Cible : {target_file}")

        if lang_idx > 0 and lang != "es":
            time.sleep(2)

        try:
            entries = build_entries_for_language(posts, day, lang)
        except RuntimeError as exc:
            print(f"  [ERREUR] {exc}")
            sys.exit(1)

        if args.dry_run:
            print("  DRY RUN — clés générées :")
            for key, block in entries:
                print(f"\n// {key}")
                print(block)
            continue

        inserted = insert_into_js(entries, target_file)
        all_inserted[lang] = inserted
        if inserted:
            changed_files.append(target_file)
            print(f"  Clés insérées : {len(inserted)}")
        else:
            print("  [SKIP] Aucune nouvelle clé à insérer.")

    if args.dry_run:
        print("\n── Terminé DRY RUN ─────────────────────────────────")
        return

    total_inserted = sum(len(v) for v in all_inserted.values())

    if total_inserted == 0:
        print("\n  [STOP] Aucun nouvel article à publier.")
        print(f"\n[SUMMARY] posts={len(posts)}")
        print(f"[SUMMARY] langs=0")
        print(f"[SUMMARY] inserted=0")
        print(f"[SUMMARY] skipped={len(posts) * len(LANGUAGES)}")
        print("[SUMMARY] errors=0")
        print("[SUMMARY] status=success")
        sys.exit(0)

    print("\n── Résumé insertion ────────────────────────────────")
    langs_ok = 0
    for lang in LANGUAGES:
        n = len(all_inserted.get(lang, []))
        print(f"  {lang}: {n} article(s)")
        if n > 0:
            langs_ok += 1

    print(f"\n  Git commit {'+ push' if do_push else '(sans push — utilisez --push pour déployer)'}...")
    post_nums = [p["num"] for p in posts]
    git_commit_push(SITE_DIR, changed_files, day, post_nums, no_push=not do_push)

    print("\n── Terminé ─────────────────────────────────────────")
    print(f"  {total_inserted} article(s) insérés")
    commit_msg = f"daily: add multilingual posts {day.isoformat()} ({', '.join(str(n) for n in post_nums)})"
    print(f"  Commit : {commit_msg}")

    print(f"\n[SUMMARY] posts={len(posts)}")
    print(f"[SUMMARY] langs={langs_ok}")
    print(f"[SUMMARY] inserted={total_inserted}")
    skipped_total = len(posts) * len(LANGUAGES) - total_inserted
    print(f"[SUMMARY] skipped={max(0, skipped_total)}")
    print("[SUMMARY] errors=0")
    print("[SUMMARY] status=success")
    print(f"[SUMMARY] commit={commit_msg}")


if __name__ == "__main__":
    main()
