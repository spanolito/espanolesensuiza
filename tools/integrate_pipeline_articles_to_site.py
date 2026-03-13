#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class Article:
    key: str
    slug: str
    hub: str
    title: str
    description: str
    keywords: str
    content_html: str
    summary: str
    reading_time: int
    date_updated: str
    category: str


def parse_frontmatter(md: str) -> tuple[dict[str, str], str]:
    lines = md.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, md
    try:
        end = lines.index("---", 1)
    except ValueError:
        return {}, md

    fm: dict[str, str] = {}
    for raw in lines[1:end]:
        if not raw.strip() or raw.lstrip().startswith("#"):
            continue
        if ":" not in raw:
            continue
        key, value = raw.split(":", 1)
        fm[key.strip()] = value.strip()
    body = "\n".join(lines[end + 1 :]).lstrip()
    return fm, body


def strip_first_h1(md_body: str) -> str:
    lines = md_body.splitlines()
    out: list[str] = []
    skipped = False
    for line in lines:
        if not skipped and line.startswith("# "):
            skipped = True
            continue
        out.append(line)
    return "\n".join(out).lstrip()


def inline_format(text: str) -> str:
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", text)
    text = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\2" target="_blank" rel="noopener noreferrer">\1</a>', text)
    text = re.sub(r"\b(https?://[^\s<]+)", r'<a href="\1" target="_blank" rel="noopener noreferrer">\1</a>', text)
    text = re.sub(r"<code>(#/[^<]+)</code>", r'<a href="\1">\1</a>', text)
    return text


def md_to_html(md_body: str) -> str:
    md_body = strip_first_h1(md_body)
    lines = md_body.splitlines()
    html: list[str] = []

    in_ul = False
    in_ol = False

    def close_lists() -> None:
        nonlocal in_ul, in_ol
        if in_ul:
            html.append("</ul>")
            in_ul = False
        if in_ol:
            html.append("</ol>")
            in_ol = False

    paragraph: list[str] = []

    def flush_paragraph() -> None:
        nonlocal paragraph
        if paragraph:
            text = " ".join(s.strip() for s in paragraph).strip()
            if text:
                html.append(f"<p>{inline_format(text)}</p>")
        paragraph = []

    for raw in lines:
        line = raw.rstrip()
        if not line.strip():
            flush_paragraph()
            close_lists()
            continue

        h3 = re.match(r"^###\s+(.+)$", line)
        h2 = re.match(r"^##\s+(.+)$", line)
        if h2 or h3:
            flush_paragraph()
            close_lists()
            tag = "h2" if h2 else "h3"
            text = (h2.group(1) if h2 else h3.group(1)).strip()
            html.append(f"<{tag}>{inline_format(text)}</{tag}>")
            continue

        ul = re.match(r"^\s*-\s+(.+)$", line)
        ol = re.match(r"^\s*(\d+)[\.\)]\s+(.+)$", line)
        if ul:
            flush_paragraph()
            if in_ol:
                html.append("</ol>")
                in_ol = False
            if not in_ul:
                html.append("<ul>")
                in_ul = True
            html.append(f"<li>{inline_format(ul.group(1).strip())}</li>")
            continue
        if ol:
            flush_paragraph()
            if in_ul:
                html.append("</ul>")
                in_ul = False
            if not in_ol:
                html.append("<ol>")
                in_ol = True
            html.append(f"<li>{inline_format(ol.group(2).strip())}</li>")
            continue

        paragraph.append(line)

    flush_paragraph()
    close_lists()
    return "\n".join(html).strip()


def compute_reading_time_minutes(md_body: str) -> int:
    plain = re.sub(r"```[\s\S]*?```", " ", md_body)
    plain = re.sub(r"`[^`]+`", " ", plain)
    plain = re.sub(r"\[[^\]]+\]\([^)]+\)", " ", plain)
    plain = re.sub(r"[^A-Za-zÀ-ÿ0-9]+", " ", plain)
    words = [w for w in plain.split() if w]
    minutes = max(2, round(len(words) / 200))
    return int(minutes)


def js_escape_template_literal(value: str) -> str:
    return value.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def load_roadmap_slugs(roadmap_md: str, limit: int) -> list[str]:
    slugs: list[str] = []
    for line in roadmap_md.splitlines():
        m = re.match(r"^\s*\d+\.\s+`([^`]+)`\s+—", line)
        if not m:
            continue
        slugs.append(m.group(1).strip())
    return slugs[:limit]


def category_by_hub(lang: str, hub: str) -> str:
    mapping = {
        "es": {
            "vivir-en-suiza": "Vivir en Suiza",
            "tramites": "Trámites y Permisos",
            "trabajo": "Trabajo y Salarios",
            "vivienda": "Vivienda",
            "salud": "Salud y LAMal",
            "recursos": "Alertas y recursos",
        },
        "en": {
            "vivir-en-suiza": "Living in Switzerland",
            "tramites": "Procedures & Permits",
            "trabajo": "Work & Salaries",
            "vivienda": "Housing",
            "salud": "Health & LAMal",
            "recursos": "Alerts & resources",
        },
        "fr": {
            "vivir-en-suiza": "Vivre en Suisse",
            "tramites": "Démarches & permis",
            "trabajo": "Travail & salaires",
            "vivienda": "Logement",
            "salud": "Santé & LAMal",
            "recursos": "Alertes & ressources",
        },
        "de": {
            "vivir-en-suiza": "Leben in der Schweiz",
            "tramites": "Behörden & Bewilligungen",
            "trabajo": "Arbeit & Löhne",
            "vivienda": "Wohnen",
            "salud": "Gesundheit & LAMal",
            "recursos": "Warnungen & Ressourcen",
        },
    }
    return mapping.get(lang, mapping["es"]).get(hub, hub)


def date_updated_by_lang(lang: str) -> str:
    return {
        "es": "Marzo 2026",
        "en": "March 2026",
        "fr": "Mars 2026",
        "de": "März 2026",
    }.get(lang, "March 2026")


def load_article(md_path: Path) -> Article:
    md = md_path.read_text("utf-8", errors="ignore")
    fm, body = parse_frontmatter(md)

    slug = fm.get("slug", md_path.parent.name).strip()
    hub = fm.get("hub", "").strip()
    keywords = fm.get("keywords", "").strip()
    description = (fm.get("meta_description") or fm.get("description") or "").strip()

    # Title: from first H1 if present; else seo_title; else slug.
    m = re.search(r"^#\s+(.+)$", body, flags=re.M)
    title = (m.group(1).strip() if m else (fm.get("seo_title", "") or slug)).strip()

    html_body = md_to_html(body)
    content_html = f"""
        <div class="page-header">
            <h1>{inline_format(title)}</h1>
        </div>
        <div class="article-content">
            {html_body}
        </div>
    """.strip()

    key = f"fb-{slug}"
    summary = description or ""
    reading_time = compute_reading_time_minutes(body)
    lang = fm.get("lang", md_path.stem).strip()

    return Article(
        key=key,
        slug=slug,
        hub=hub,
        title=title,
        description=description,
        keywords=keywords,
        content_html=content_html,
        summary=summary,
        reading_time=reading_time,
        date_updated=date_updated_by_lang(lang),
        category=category_by_hub(lang, hub),
    )


def render_js(lang: str, articles: list[Article], out_path: Path) -> None:
    entries: list[str] = []
    for a in articles:
        entries.append(
            f"""    "{js_escape_template_literal(a.key)}": {{
        title: "{js_escape_template_literal(a.title)}",
        description: "{js_escape_template_literal(a.description)}",
        keywords: "{js_escape_template_literal(a.keywords)}",
        category: "{js_escape_template_literal(a.category)}",
        hub: "{js_escape_template_literal(a.hub)}",
        slug: "{js_escape_template_literal(a.slug)}",
        readingTime: {a.reading_time},
        dateUpdated: "{js_escape_template_literal(a.date_updated)}",
        summary: "{js_escape_template_literal(a.summary)}",
        content: `{js_escape_template_literal(a.content_html)}`
    }}"""
        )

    payload = ",\n\n".join(entries)
    js = f"""/**
 * content-articles-facebook-{lang}.js
 * Auto-generated from docs/facebook-pipeline/articles_markdown (Facebook pipeline output).
 */

window.siteContent = window.siteContent || {{}};
window.siteContent.{lang} = window.siteContent.{lang} || {{ global: {{}}, pages: {{}}, articles: {{}} }};
window.siteContent.{lang}.articles = window.siteContent.{lang}.articles || {{}};

Object.assign(window.siteContent.{lang}.articles, {{
{payload}
}});
"""
    out_path.write_text(js, encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Integrate pipeline Markdown articles into website JS content files.")
    parser.add_argument(
        "--articles-markdown",
        type=Path,
        default=Path("docs/facebook-pipeline/articles_markdown"),
        help="Directory containing <slug>/<lang>.md (default: docs/facebook-pipeline/articles_markdown)",
    )
    parser.add_argument(
        "--roadmap",
        type=Path,
        default=Path("docs/facebook-pipeline/publication_roadmap.md"),
        help="Roadmap file that lists slugs (default: docs/facebook-pipeline/publication_roadmap.md)",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=10,
        help="How many roadmap slugs to publish (default: 10)",
    )
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=Path("."),
        help="Where to write website JS files (default: repo root)",
    )
    args = parser.parse_args()

    roadmap_text = args.roadmap.read_text("utf-8", errors="ignore")
    slugs = load_roadmap_slugs(roadmap_text, args.limit)
    if not slugs:
        raise SystemExit(f"No slugs found in roadmap: {args.roadmap}")

    langs = ["es", "en", "fr", "de"]
    by_lang: dict[str, list[Article]] = {l: [] for l in langs}
    for slug in slugs:
        for lang in langs:
            md_path = args.articles_markdown / slug / f"{lang}.md"
            if not md_path.exists():
                raise SystemExit(f"Missing file: {md_path}")
            by_lang[lang].append(load_article(md_path))

    # Ensure stable order matches roadmap.
    for lang in langs:
        out_path = args.out_dir / f"content-articles-facebook-{lang}.js"
        render_js(lang, by_lang[lang], out_path)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
