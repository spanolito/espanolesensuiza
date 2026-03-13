#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import re
from collections import Counter, defaultdict
from dataclasses import asdict, dataclass
from html import unescape
from pathlib import Path


def clean_html(value: str) -> str:
    value = re.sub(r"<br\s*/?>", "\n", value)
    value = re.sub(r"</p>\s*<p>", "\n\n", value)
    value = re.sub(r"<[^>]+>", "", value)
    return unescape(value)


def norm(value: str) -> str:
    value = value.lower()
    value = re.sub(r"\s+", " ", value).strip()
    return value


TOPIC_PATTERNS = {
    "Swiss institutions": [
        r"\bch\.ch\b",
        r"\bsem\b",
        r"\bbfs\b",
        r"\bseco\b",
        r"\badmin\.ch\b",
        r"\bcommune\b",
        r"\bgemeinde\b",
        r"\bcanton\b",
        r"\bcant[oó]n\b",
    ],
    "Immigration and permits": [r"\bpermiso\b", r"\bpermisos\b", r"\bpermiso\s*[lbcg]\b", r"\bresidenc"],
    "Working in Switzerland": [r"\btrabaj", r"\bempleo\b", r"\bcv\b", r"\bcontrat", r"\bdespid", r"preaviso", r"periodo de prueba"],
    "Housing": [r"\balquil", r"\bviviend", r"\bpiso\b", r"fianza", r"asloca", r"subalquil", r"agencia"],
    "Cost of living": [r"costo de vida", r"coste de vida", r"\bprecios\b", r"presupuesto", r"car[ií]sim"],
    "Health system": [r"\blamal\b", r"\bseguro\b", r"franquicia", r"copago", r"prima", r"\bmedic", r"hospital", r"urgenc"],
    "Swiss politics": [r"\brefer[eé]ndum\b", r"\biniciativa\b", r"\bvotaci", r"\bconsejo federal\b", r"\bparlamento\b"],
    "Local rules in Geneva": [r"\bginebra\b", r"\bgenev", r"\bge\b", r"tpg", r"police", r"amende", r"multa"],
    "Fraud alerts": [r"\bestafa\b", r"\barnaque\b", r"\bfraude\b", r"\bscam\b", r"\bphishing\b", r"\benga[nñ]"],
    "Community life": [r"\bgrupo\b", r"\bcomunidad\b", r"\bfacebook\b", r"\bmiembros\b"],
    "Events and culture": [r"\bevento\b", r"\bfestival\b", r"\bverano\b", r"\bactividades\b", r"\bgratis\b", r"\bcultura\b"],
}

TOPIC_RES = {k: [re.compile(p, re.I) for p in v] for k, v in TOPIC_PATTERNS.items()}


def detect_topics(text: str) -> list[str]:
    n = norm(text)
    topics = [topic for topic, regs in TOPIC_RES.items() if any(r.search(n) for r in regs)]
    return topics or ["(unclassified)"]


def durable_score(text: str) -> float:
    n = norm(text)
    length = len(text)
    is_short_request = bool(
        re.search(r"\b(busco|alguien|recomienda|alguno|necesito|hola\b|buenas\b|bonjour\b)\b", n)
    ) and length < 500
    looks_like_share = bool(re.fullmatch(r"(https?://\S+\s*)+", text.strip()))
    has_structure = ("\n" in text and length > 600) or bool(
        re.search(r"\b(requisitos|pasos|gu[ií]a|importante|ojo|consejo|checklist)\b", n)
    )
    score = (length / 300.0) + (2.0 if has_structure else 0.0) - (2.5 if is_short_request else 0.0) - (3.0 if looks_like_share else 0.0)
    return score


def keep_reason(text: str, score: float) -> tuple[bool, str]:
    n = norm(text)
    if not text.strip():
        return False, "empty"
    if re.fullmatch(r"(https?://\S+\s*)+", text.strip()):
        return False, "share-only"
    if len(text) < 180 and ("http" in n or "www." in n):
        return False, "short-link"
    if bool(re.search(r"\b(busco|recomienda|alguien|necesito)\b", n)) and len(text) < 500:
        return False, "service-request"
    if score < 3.0:
        return False, "low-density"
    return True, "informational"


@dataclass
class Post:
    post_id: int
    author: str
    group: str
    timestamp: str
    text_len: int
    has_images: bool
    topics: list[str]
    durable_score: float
    keep: bool
    reason: str


def extract_posts(html_text: str, *, author: str) -> list[dict]:
    sections = re.findall(r'<section class="_a6-g"[\s\S]*?</section>', html_text)
    results: list[dict] = []
    for sec in sections:
        h2m = re.search(r"<h2[^>]*>(.*?)</h2>", sec)
        if not h2m:
            continue
        header = clean_html(h2m.group(1))
        if " a publié dans " not in header:
            continue
        header_author, rest = header.split(" a publié dans ", 1)
        if header_author.strip() != author:
            continue
        group = rest.strip().rstrip(".")

        tm = re.search(r'<div class="_a72d">(.*?)</div>', sec)
        timestamp = clean_html(tm.group(1)) if tm else ""

        blocks = [clean_html(b).strip() for b in re.findall(r'<div class="_2pin"><div>([\s\S]*?)</div></div>', sec)]
        blocks = [b for b in blocks if b]

        def block_score(b: str) -> int:
            if re.fullmatch(r"https?://\S+", b.strip()):
                return 0
            return len(b)

        main_text = max(blocks, key=block_score, default="").strip()
        images = re.findall(r'<img src="([^"]+)"', sec)
        results.append(
            {
                "group": group,
                "timestamp": timestamp,
                "text": main_text,
                "images": images,
            }
        )
    return results


def suggest_cluster(topics: list[str], group: str) -> str:
    # Simple, explainable clustering rule-set.
    if "Fraud alerts" in topics:
        return "Alertas: fraudes y estafas"
    if "Local rules in Geneva" in topics:
        return "Vida local: Ginebra (normas y multas)"
    if "Immigration and permits" in topics:
        return "Trámites: permisos y residencia"
    if "Health system" in topics:
        return "Salud: LAMal y sistema sanitario"
    if "Housing" in topics:
        return "Vivienda: alquiler y contratos"
    if "Cost of living" in topics:
        return "Vida práctica: coste de vida"
    if "Working in Switzerland" in topics:
        return "Trabajo: empleo, contratos y derechos"
    if "Swiss politics" in topics:
        return "Sistema suizo: política y democracia directa"
    if "Events and culture" in topics:
        return "Vida local: eventos y cultura"
    if "Community life" in topics:
        return "Comunidad: vida del grupo"
    if group:
        return f"Miscelánea ({group})"
    return "Miscelánea"


ARTICLE_SPECS = [
    {
        "slug": "sistema-politico-suiza",
        "hub": "vivir-en-suiza",
        "section": "VIVIR EN SUIZA",
        "title_es": "Cómo funciona el sistema político suizo: Confederación, cantones y comuna",
    },
    {
        "slug": "democracia-directa-suiza",
        "hub": "vivir-en-suiza",
        "section": "VIVIR EN SUIZA",
        "title_es": "Democracia directa en Suiza: referéndum, iniciativa y votaciones",
    },
    {
        "slug": "permisos-suiza-actualizacion",
        "hub": "tramites",
        "section": "VIVIR EN SUIZA",
        "title_es": "Permisos en Suiza (L, B, C): checklist, errores típicos y casos reales",
    },
    {
        "slug": "trabajar-en-suiza-guia",
        "hub": "trabajo",
        "section": "TRABAJAR EN SUIZA",
        "title_es": "Trabajar en Suiza: cómo buscar empleo, negociar y empezar bien",
    },
    {
        "slug": "seguro-medico-lamal-elegir",
        "hub": "salud",
        "section": "VIVIR EN SUIZA",
        "title_es": "Cómo elegir seguro médico (LAMal) en Suiza: modelo, franquicia y prima",
    },
    {
        "slug": "costo-de-vida-suiza-presupuesto",
        "hub": "vivir-en-suiza",
        "section": "VIVIR EN SUIZA",
        "title_es": "Costo de vida en Suiza: presupuesto realista y gastos invisibles",
    },
    {
        "slug": "alquilar-en-suiza-evitar-estafas",
        "hub": "vivienda",
        "section": "INSTALARSE",
        "title_es": "Alquilar en Suiza: pasos, dossier, fianza y cómo evitar estafas",
    },
    {
        "slug": "normas-locales-ginebra",
        "hub": "vivir-en-suiza",
        "section": "VIDA LOCAL",
        "title_es": "Normas locales en Ginebra (GE): convivencia, multas y buenas prácticas",
    },
    {
        "slug": "fraudes-inmigrantes-suiza",
        "hub": "recursos",
        "section": "ALERTAS",
        "title_es": "Fraudes comunes contra inmigrantes en Suiza: señales y cómo protegerte",
    },
    {
        "slug": "consejos-vida-diaria-suiza",
        "hub": "vivir-en-suiza",
        "section": "VIDA LOCAL",
        "title_es": "Vida diaria en Suiza: 25 consejos prácticos para recién llegados",
    },
]


def write_classification(posts: list[Post], out_csv: Path, out_md: Path) -> None:
    out_csv.parent.mkdir(parents=True, exist_ok=True)

    with out_csv.open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(
            [
                "post_id",
                "timestamp",
                "group",
                "text_len",
                "has_images",
                "durable_score",
                "keep",
                "reason",
                "topics",
                "cluster",
            ]
        )
        for p in posts:
            cluster = suggest_cluster(p.topics, p.group)
            w.writerow(
                [
                    p.post_id,
                    p.timestamp,
                    p.group,
                    p.text_len,
                    int(p.has_images),
                    f"{p.durable_score:.2f}",
                    int(p.keep),
                    p.reason,
                    "; ".join(p.topics),
                    cluster,
                ]
            )

    kept = [p for p in posts if p.keep]
    topic_counts = Counter(t for p in kept for t in p.topics)
    cluster_counts = Counter(suggest_cluster(p.topics, p.group) for p in kept)
    group_counts = Counter(p.group for p in kept)

    lines: list[str] = []
    lines.append("# Facebook → Website pipeline: classification table\n")
    lines.append(f"- Total author posts parsed: **{len(posts)}**")
    lines.append(f"- Kept (informational): **{len(kept)}**")
    lines.append(f"- Discarded: **{len(posts) - len(kept)}**\n")

    lines.append("## Kept posts by category\n")
    for topic, count in topic_counts.most_common():
        lines.append(f"- {topic}: {count}")
    lines.append("")

    lines.append("## Kept posts by cluster\n")
    for cluster, count in cluster_counts.most_common():
        lines.append(f"- {cluster}: {count}")
    lines.append("")

    lines.append("## Kept posts by group (top 20)\n")
    for group, count in group_counts.most_common(20):
        lines.append(f"- {group}: {count}")
    lines.append("")

    lines.append("## Highest-density kept posts (top 30)\n")
    for p in sorted(kept, key=lambda x: (-x.durable_score, -x.text_len))[:30]:
        lines.append(
            f"- #{p.post_id} — {p.timestamp} — {p.group} — score {p.durable_score:.1f} — topics: {', '.join(p.topics)}"
        )

    out_md.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def write_clusters(posts: list[Post], out_json: Path, out_md: Path) -> None:
    kept = [p for p in posts if p.keep]
    by_cluster: dict[str, list[Post]] = defaultdict(list)
    for p in kept:
        by_cluster[suggest_cluster(p.topics, p.group)].append(p)

    payload = {
        "clusters": {
            name: [asdict(p) for p in sorted(items, key=lambda x: (-x.durable_score, -x.text_len))]
            for name, items in sorted(by_cluster.items(), key=lambda kv: (-len(kv[1]), kv[0]))
        }
    }
    out_json.parent.mkdir(parents=True, exist_ok=True)
    out_json.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines: list[str] = []
    lines.append("# Article clusters (from Facebook posts)\n")
    for name, items in sorted(by_cluster.items(), key=lambda kv: (-len(kv[1]), kv[0])):
        lines.append(f"## {name} ({len(items)})\n")
        for p in sorted(items, key=lambda x: (-x.durable_score, -x.text_len))[:12]:
            lines.append(f"- #{p.post_id} — {p.timestamp} — score {p.durable_score:.1f} — {p.group}")
        lines.append("")

    out_md.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def make_article_markdown_es(spec: dict) -> str:
    slug = spec["slug"]
    hub = spec["hub"]
    seo_title = spec["title_es"]
    meta = f"Guía práctica para hispanohablantes: {seo_title.lower()}. Explicaciones claras, pasos, errores frecuentes y fuentes oficiales."
    keywords = [
        "vivir en suiza",
        "trabajar en suiza",
        "tramites suiza",
        "expatriados suiza",
    ]
    sources = [
        "https://www.ch.ch",
        "https://www.admin.ch",
        "https://www.sem.admin.ch",
        "https://www.seco.admin.ch",
    ]
    internal = [
        "#/tramites",
        "#/salud",
        "#/impuestos",
        "#/vivienda",
        "#/trabajo",
    ]

    title = spec["title_es"]
    body = f"""---
lang: es
slug: {slug}
hub: {hub}
seo_title: {seo_title}
meta_description: {meta}
keywords: {", ".join(keywords)}
internal_links: {", ".join(internal)}
sources: {", ".join(sources)}
---

# {title}

## Introducción
Este artículo transforma conocimiento práctico (experiencia de comunidad + fuentes oficiales) en una guía web estable y fácil de consultar.

## Contexto
Suiza es un país federal y muy descentralizado: muchas reglas cambian por cantón y comuna. La mejor estrategia es combinar:
1) normas oficiales (Confederación/cantón/comuna), y  
2) buenas prácticas de quienes ya pasaron por el proceso.

## Explicación detallada
### Qué debes entender primero
- Qué nivel decide cada cosa (federal vs cantonal vs comunal).
- Qué trámites dependen de tu situación (permiso, trabajo, familia).
- Qué plazos se repiten (registro al llegar, seguros, impuestos, citas).

### Cómo actuar (paso a paso)
1) Identifica tu cantón y tu comuna.
2) Comprueba el “portal oficial” aplicable (ch.ch + web cantonal).
3) Prepara una checklist de documentos y plazos.
4) Guarda pruebas: emails, confirmaciones y copias de formularios.

## Información práctica
- Mantén un archivo con: contrato, nóminas, cartas oficiales, registro en la comuna, seguro médico, y comunicaciones.
- Si algo cambia entre cantones, verifica siempre en el portal oficial del cantón.

## Consejos y alertas
- Desconfía de “atajos” o consejos sin fuente: lo barato sale caro en trámites.
- Si te piden datos sensibles sin contexto, pausa y valida (fraudes).

## Fuentes (oficiales)
- ch.ch (Confederación): {sources[0]}
- admin.ch: {sources[1]}
- SEM (migración): {sources[2]}
- SECO (mercado laboral): {sources[3]}

## Conclusión
La clave es método: portales oficiales + checklist + documentación. Eso reduce errores y te da tranquilidad.
"""
    return body


def translate_article(md_es: str, lang: str) -> str:
    # Minimal, safe “structure-identical” translation without copying ES phrasing.
    # (We intentionally keep it concise; later you can refine per guide.)
    header_map = {
        "en": {
            "lang": "en",
            "intro": "Introduction",
            "context": "Context",
            "detail": "Detailed explanation",
            "practical": "Practical information",
            "tips": "Tips & warnings",
            "sources": "Sources (official)",
            "conclusion": "Conclusion",
            "title_suffix": "",
        },
        "fr": {
            "lang": "fr",
            "intro": "Introduction",
            "context": "Contexte",
            "detail": "Explication détaillée",
            "practical": "Infos pratiques",
            "tips": "Conseils & alertes",
            "sources": "Sources (officielles)",
            "conclusion": "Conclusion",
            "title_suffix": "",
        },
        "de": {
            "lang": "de",
            "intro": "Einleitung",
            "context": "Kontext",
            "detail": "Detaillierte Erklärung",
            "practical": "Praktische Hinweise",
            "tips": "Tipps & Warnungen",
            "sources": "Quellen (offiziell)",
            "conclusion": "Fazit",
            "title_suffix": "",
        },
    }
    if lang not in header_map:
        raise ValueError(f"Unsupported lang: {lang}")

    m = header_map[lang]
    out = md_es
    out = re.sub(r"^lang: es$", f"lang: {m['lang']}", out, flags=re.M)
    # headings
    out = out.replace("## Introducción", f"## {m['intro']}")
    out = out.replace("## Contexto", f"## {m['context']}")
    out = out.replace("## Explicación detallada", f"## {m['detail']}")
    out = out.replace("## Información práctica", f"## {m['practical']}")
    out = out.replace("## Consejos y alertas", f"## {m['tips']}")
    out = out.replace("## Fuentes (oficiales)", f"## {m['sources']}")
    out = out.replace("## Conclusión", f"## {m['conclusion']}")

    # light paragraph translation to avoid verbatim ES reuse (keep short + consistent)
    # We translate only the boilerplate lines we control; not user-provided content.
    replacements = {
        "Este artículo transforma conocimiento práctico (experiencia de comunidad + fuentes oficiales) en una guía web estable y fácil de consultar.": {
            "en": "This guide turns practical community knowledge + official sources into stable, web-friendly documentation.",
            "fr": "Ce guide transforme l’expérience communautaire + les sources officielles en documentation web durable.",
            "de": "Dieser Leitfaden überführt Community-Erfahrung + offizielle Quellen in dauerhaft nutzbare Web-Dokumentation.",
        },
        "Suiza es un país federal y muy descentralizado: muchas reglas cambian por cantón y comuna. La mejor estrategia es combinar:": {
            "en": "Switzerland is highly federal and decentralized: many rules vary by canton and commune. The best approach is to combine:",
            "fr": "La Suisse est très fédérale et décentralisée : de nombreuses règles varient selon le canton et la commune. La bonne approche consiste à combiner :",
            "de": "Die Schweiz ist stark föderal und dezentral: Viele Regeln unterscheiden sich je nach Kanton und Gemeinde. Am besten kombiniert man:",
        },
        "La clave es método: portales oficiales + checklist + documentación. Eso reduce errores y te da tranquilidad.": {
            "en": "A methodical approach—official portals, checklists, and documentation—reduces mistakes and saves stress.",
            "fr": "La clé, c’est la méthode : portails officiels, checklists et preuves. Cela réduit les erreurs et le stress.",
            "de": "Entscheidend ist Methode: offizielle Portale, Checklisten und Nachweise. Das reduziert Fehler und Stress.",
        },
    }
    for es_line, mapping in replacements.items():
        out = out.replace(es_line, mapping[lang])

    return out


def write_articles(out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    for spec in ARTICLE_SPECS:
        slug = spec["slug"]
        article_dir = out_dir / slug
        article_dir.mkdir(parents=True, exist_ok=True)
        md_es = make_article_markdown_es(spec)
        (article_dir / "es.md").write_text(md_es, encoding="utf-8")
        for lang in ["en", "fr", "de"]:
            (article_dir / f"{lang}.md").write_text(translate_article(md_es, lang), encoding="utf-8")


def write_roadmap(out_md: Path) -> None:
    lines: list[str] = []
    lines.append("# Publication roadmap (prioritized)\n")
    lines.append("These priorities match common expat search intent and your requested list.\n")
    for i, spec in enumerate(ARTICLE_SPECS, start=1):
        lines.append(f"{i}. `{spec['slug']}` — {spec['section']} — hub `{spec['hub']}` — {spec['title_es']}")
    out_md.parent.mkdir(parents=True, exist_ok=True)
    out_md.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Full Facebook→Website content pipeline (metadata + markdown drafts).")
    parser.add_argument("--input", type=Path, required=True, help="Path to group_posts_and_comments.html")
    parser.add_argument("--author", default="Oscar Antonio", help="Exact author label in the export")
    parser.add_argument("--out", type=Path, default=Path("docs/facebook-pipeline"), help="Output directory")
    args = parser.parse_args()

    html_text = args.input.read_text("utf-8", errors="ignore")
    raw = extract_posts(html_text, author=args.author)

    posts: list[Post] = []
    for idx, r in enumerate(raw, start=1):
        text = r["text"]
        score = durable_score(text)
        keep, reason = keep_reason(text, score)
        topics = detect_topics(text)
        posts.append(
            Post(
                post_id=idx,
                author=args.author,
                group=r["group"],
                timestamp=r["timestamp"],
                text_len=len(text),
                has_images=bool(r["images"]),
                topics=topics,
                durable_score=score,
                keep=keep,
                reason=reason,
            )
        )

    out_dir: Path = args.out
    write_classification(posts, out_dir / "classification.csv", out_dir / "classification.md")
    write_clusters(posts, out_dir / "clusters.json", out_dir / "clusters.md")
    write_articles(out_dir / "articles")
    write_roadmap(out_dir / "roadmap.md")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

