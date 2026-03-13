#!/usr/bin/env python3
from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class SeoRow:
    slug: str
    lang: str
    hub: str
    seo_title: str
    meta_description: str
    keywords: str


def parse_frontmatter(md: str) -> dict[str, str]:
    lines = md.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}
    try:
        end = lines.index("---", 1)
    except ValueError:
        return {}

    data: dict[str, str] = {}
    for raw in lines[1:end]:
        if not raw.strip() or raw.lstrip().startswith("#"):
            continue
        if ":" not in raw:
            continue
        key, value = raw.split(":", 1)
        data[key.strip()] = value.strip()
    return data


def collect_rows(articles_dir: Path) -> list[SeoRow]:
    rows: list[SeoRow] = []
    for lang_file in sorted(articles_dir.glob("*/*.md")):
        md = lang_file.read_text("utf-8", errors="ignore")
        fm = parse_frontmatter(md)
        if not fm:
            continue
        rows.append(
            SeoRow(
                slug=fm.get("slug", lang_file.parent.name),
                lang=fm.get("lang", lang_file.stem),
                hub=fm.get("hub", ""),
                seo_title=fm.get("seo_title", ""),
                meta_description=fm.get("meta_description", ""),
                keywords=fm.get("keywords", ""),
            )
        )
    return rows


def to_markdown(rows: list[SeoRow]) -> str:
    rows = sorted(rows, key=lambda r: (r.slug, r.lang))
    lines: list[str] = []
    lines.append("# SEO metadata (from article frontmatter)\n")
    lines.append("| slug | lang | hub | seo_title | meta_description | keywords |")
    lines.append("|---|---|---|---|---|---|")
    for r in rows:
        # Keep it one-line and safe for Markdown tables.
        def esc(v: str) -> str:
            return v.replace("\n", " ").replace("|", "\\|").strip()

        lines.append(
            f"| {esc(r.slug)} | {esc(r.lang)} | {esc(r.hub)} | {esc(r.seo_title)} | {esc(r.meta_description)} | {esc(r.keywords)} |"
        )
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Export SEO metadata from article Markdown frontmatter.")
    parser.add_argument(
        "--articles",
        type=Path,
        default=Path("docs/facebook-pipeline/articles"),
        help="Articles directory (default: docs/facebook-pipeline/articles)",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path("docs/facebook-pipeline/seo_metadata.md"),
        help="Output Markdown file (default: docs/facebook-pipeline/seo_metadata.md)",
    )
    args = parser.parse_args()

    rows = collect_rows(args.articles)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(to_markdown(rows), encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

