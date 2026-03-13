#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path


def split_frontmatter(md: str) -> tuple[str, str, str]:
    lines = md.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return "", "", md
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return "", "", md
    fm = "".join(lines[: end + 1])
    body = "".join(lines[end + 1 :]).lstrip()
    return fm, body, md


def remove_conclusion(body: str, lang: str) -> str:
    heading = {
        "es": r"##\s+Conclusión",
        "en": r"##\s+Conclusion",
        "fr": r"##\s+Conclusion",
        "de": r"##\s+Fazit",
    }[lang]
    m = re.search(rf"(?m)^{heading}\s*$", body)
    if not m:
        return body
    return body[: m.start()].rstrip() + "\n"


def refine_body(body: str, lang: str) -> str:
    replacements = {
        "es": {
            r"(?m)^##\s+Contexto\s*$": "## Contexto en Suiza",
            r"(?m)^##\s+Explicación detallada\s*$": "## Situaciones comunes que generan problemas",
            r"(?m)^##\s+Información práctica\s*$": "## Cómo evitar multas o conflictos",
            r"(?m)^##\s+Consejos y alertas\s*$": "## Consejos prácticos",
            r"(?m)^##\s+Fuentes\s*$": "## Fuentes oficiales",
            r"(?m)^##\s+Fuentes\s+\\(oficiales\\)\\s*$": "## Fuentes oficiales",
        },
        "en": {
            r"(?m)^##\s+Context\s*$": "## Context in Switzerland",
            r"(?m)^##\s+Detailed explanation\s*$": "## Common situations that cause problems",
            r"(?m)^##\s+Practical information\s*$": "## How to avoid fines or conflicts",
            r"(?m)^##\s+Tips\s+or\s+warnings\s*$": "## Practical tips",
            r"(?m)^##\s+Tips\s*&\s*warnings\s*$": "## Practical tips",
            r"(?m)^##\s+Sources\s*$": "## Official sources",
            r"(?m)^##\s+Sources\s+\\(official\\)\\s*$": "## Official sources",
        },
        "fr": {
            r"(?m)^##\s+Contexte\s*$": "## Contexte en Suisse",
            r"(?m)^##\s+Explication détaillée\s*$": "## Situations fréquentes qui créent des problèmes",
            r"(?m)^##\s+Infos pratiques\s*$": "## Comment éviter des amendes ou des conflits",
            r"(?m)^##\s+Conseils\s*&\s*alertes\s*$": "## Conseils pratiques",
            r"(?m)^##\s+Sources\s*$": "## Sources officielles",
            r"(?m)^##\s+Sources\s+\\(officielles\\)\\s*$": "## Sources officielles",
        },
        "de": {
            r"(?m)^##\s+Kontext\s*$": "## Kontext in der Schweiz",
            r"(?m)^##\s+Detaillierte Erklärung\s*$": "## Häufige Situationen, die Probleme verursachen",
            r"(?m)^##\s+Praktische Hinweise\s*$": "## Wie man Bussen oder Konflikte vermeidet",
            r"(?m)^##\s+Tipps\s*&\s*Warnungen\s*$": "## Praktische Tipps",
            r"(?m)^##\s+Quellen\s*$": "## Offizielle Quellen",
            r"(?m)^##\s+Quellen\s+\\(offiziell\\)\\s*$": "## Offizielle Quellen",
        },
    }[lang]

    for pattern, repl in replacements.items():
        body = re.sub(pattern, repl, body)

    body = remove_conclusion(body, lang)

    # Normalize double blank lines (keep at most 2).
    body = re.sub(r"\n{3,}", "\n\n", body).strip() + "\n"
    return body


def infer_lang(path: Path) -> str:
    return path.stem


def main() -> int:
    root = Path("docs/facebook-pipeline/articles_markdown")
    if not root.exists():
        raise SystemExit(f"Missing directory: {root}")

    changed = 0
    for md_path in sorted(root.glob("*/*.md")):
        lang = infer_lang(md_path)
        if lang not in {"es", "en", "fr", "de"}:
            continue
        if md_path.parent.name == "normas-locales-ginebra":
            continue  # rewritten manually

        original = md_path.read_text("utf-8", errors="ignore")
        fm, body, _ = split_frontmatter(original)
        if not fm:
            continue
        refined = fm.rstrip() + "\n\n" + refine_body(body, lang)
        if refined != original:
            md_path.write_text(refined, encoding="utf-8")
            changed += 1

    print(f"Refined {changed} markdown files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

