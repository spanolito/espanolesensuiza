#!/usr/bin/env python3
"""
publish_daily_posts.py
Lit le fichier posts_YYYY-MM-DD.md du jour, génère les entrées JS
et les insère dans content-articles-facebook-daily-es.js, puis fait git commit+push.

Usage : python3 publish_daily_posts.py
        python3 publish_daily_posts.py --date 2026-05-03  (forcer une date)
"""

import re
import sys
import os
import subprocess
import argparse
from datetime import date, datetime

# ── Chemins ────────────────────────────────────────────────────────────────────
POSTS_DIR   = "/Users/oscarandujar/Projets/Publications/posts"
SITE_DIR    = "/Users/oscarandujar/Projets/espanolesensuiza"
TARGET_FILE = os.path.join(SITE_DIR, "content-articles-facebook-daily-es.js")

# ── Table hub / catégorie ──────────────────────────────────────────────────────
HUB_RULES = [
    (["permiso", "empadron", "trámite", "tramite", "migración", "migracion",
      "registro", "naturaliz", "carnet", "conducir", "e-id", "ees"],
     "tramites", "Tramites y Permisos"),
    (["trabajo", "contrato", "salario", "cct", "despido", "paro", "rav",
      "kurzarbeit", "autónomo", "autonomo", "empleo", "laboral", "nómina",
      "nomina", "sueldo", "ccт"],
     "trabajo", "Trabajo y Salarios"),
    (["alquiler", "piso", "vivienda", "inquilino", "propietario", "garantía",
      "garantia", "alquilar", "inmobiliaria", "habitación", "habitacion"],
     "vivienda", "Vivienda"),
    (["seguro médico", "seguro medico", "lamal", "franquicia", "psicólogo",
      "psicologo", "dentista", "dental", "diente", "dientes", "accidente",
      "laa", "uvg", "kvg", "salud", "médico", "medico", "enfermedad",
      "hospital", "baja", "enfermo", "zusatzversicherung"],
     "salud", "Salud y LAMal"),
    (["impuesto", "fuente", "3a", "declaración", "declaracion", "fiscal",
      "irpf", "convenio", "tributar", "hacienda", "aeat", "quellensteuer",
      "pilar 3", "deducciones"],
     "impuestos", "Impuestos"),
    (["frontalier", "frontera", "frontalizo", "teletrabajo desde francia",
      "france"],
     "fronterizos", "Fronterizos"),
    (["referéndum", "referendum", "votación", "votacion", "iniciativa",
      "política", "politica", "svp", "udc", "consejo federal"],
     "vivir-en-suiza", "Vivir en Suiza"),
]
DEFAULT_HUB      = "vivir-en-suiza"
DEFAULT_CATEGORY = "Vivir en Suiza"

# ── Helpers ────────────────────────────────────────────────────────────────────

def slugify(text: str, max_len: int = 70) -> str:
    """Convertit un titre en kebab-case ASCII sans accents."""
    replacements = {
        'á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u','ñ':'n',
        'à':'a','è':'e','ì':'i','ò':'o','ù':'u',
        'â':'a','ê':'e','î':'i','ô':'o','û':'u',
        'Á':'a','É':'e','Í':'i','Ó':'o','Ú':'u','Ü':'u','Ñ':'n',
        'ª':'a','º':'o',
    }
    t = text.lower()
    for k, v in replacements.items():
        t = t.replace(k, v)
    t = re.sub(r'[^a-z0-9\s-]', '', t)
    t = re.sub(r'[\s]+', '-', t.strip())
    t = re.sub(r'-+', '-', t)
    return t[:max_len].rstrip('-')


def infer_hub(title: str, content: str):
    combined = (title + " " + content).lower()
    for keywords, hub, category in HUB_RULES:
        if any(kw in combined for kw in keywords):
            return hub, category
    return DEFAULT_HUB, DEFAULT_CATEGORY


def reading_time(text: str) -> int:
    words = len(text.split())
    return max(1, round(words / 200))


def text_to_html(paragraphs: list) -> str:
    return "\n".join(f"<p>{p}</p>" for p in paragraphs if p.strip())


def make_description(first_para: str, max_len: int = 160) -> str:
    d = first_para.strip()
    if len(d) > max_len:
        d = d[:max_len].rsplit(' ', 1)[0] + "…"
    return d


def make_keywords(title: str, first_para: str) -> str:
    combined = (title + " " + first_para).lower()
    combined = re.sub(r'[^a-záéíóúüñà-ÿ\s]', ' ', combined)
    words = [w for w in combined.split() if len(w) > 3]
    seen, unique = set(), []
    for w in words:
        if w not in seen:
            seen.add(w)
            unique.append(w)
        if len(unique) == 8:
            break
    return ", ".join(unique)


def format_date_es(d: date) -> str:
    months = ["enero","febrero","marzo","abril","mayo","junio",
              "julio","agosto","septiembre","octubre","noviembre","diciembre"]
    return f"{d.day} {months[d.month - 1]} {d.year}"


def js_escape(text: str) -> str:
    """Échappe les backticks et les backslashes dans le contenu HTML."""
    return text.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

# ── Parsing du fichier MD ──────────────────────────────────────────────────────

def parse_posts(md_content: str) -> list:
    """
    Extrait les posts du fichier MD.
    Retourne une liste de dicts : {num, title, paragraphs}
    Ignore l'en-tête, les métadonnées, les séparateurs et les lignes de sources.
    """
    # Trouver le premier ## POST — tout ce qui précède est ignoré
    start = re.search(r'^## POST \d+', md_content, re.MULTILINE)
    if not start:
        return []
    body = md_content[start.start():]

    # Découper par bloc ## POST NNN
    blocks = re.split(r'^## POST (\d+)[^\n]*\n', body, flags=re.MULTILINE)
    # blocks[0] = '' (avant le premier split), puis alternance [num, contenu, num, contenu...]
    posts = []
    for i in range(1, len(blocks), 2):
        num = int(blocks[i])
        raw = blocks[i + 1] if i + 1 < len(blocks) else ""

        lines = raw.split('\n')
        title = ""
        paragraphs = []
        current_para = []

        for line in lines:
            stripped = line.strip()

            # Titre : ligne en gras **...**
            if not title and re.match(r'^\*\*.+\*\*$', stripped):
                title = stripped.strip('*').strip()
                continue

            # Ignorer les séparateurs, les lignes vides initiales et les sources
            if stripped == '---':
                continue
            if stripped.lower().startswith('fuentes:') or stripped.lower().startswith('fuente:'):
                continue

            # Paragraphes : ligne vide = fin de paragraphe en cours
            if stripped == '':
                if current_para:
                    paragraphs.append(' '.join(current_para))
                    current_para = []
            else:
                current_para.append(stripped)

        if current_para:
            paragraphs.append(' '.join(current_para))

        if title and paragraphs:
            posts.append({"num": num, "title": title, "paragraphs": paragraphs})

    return posts

# ── Génération JS ──────────────────────────────────────────────────────────────

def build_js_entry(post: dict, day: date, order: int) -> tuple:
    """
    Construit l'entrée JS pour un post.
    Retourne (clé, bloc_js).
    """
    date_str   = day.strftime("%Y%m%d")
    date_iso   = day.strftime("%Y-%m-%d")
    slug_title = slugify(post["title"])

    key  = f"fb-daily-{date_str}-{order:02d}-{slug_title}"
    slug = f"actualidad-{date_iso}-{order}-{slug_title}"

    title      = post["title"]
    paragraphs = post["paragraphs"]
    full_text  = " ".join(paragraphs)
    first_para = paragraphs[0] if paragraphs else ""

    description = make_description(first_para)
    summary     = make_description(first_para, 150)
    keywords    = make_keywords(title, first_para)
    hub, cat    = infer_hub(title, full_text)
    rt          = reading_time(full_text)
    date_es     = format_date_es(day)

    html_content = text_to_html(paragraphs)
    html_escaped = js_escape(html_content)

    block = f'''
    "{key}": {{
        title: "{title.replace('"', '\\"')}",
        description: "{description.replace('"', '\\"')}",
        keywords: "{keywords}",
        keywordsLocalized: true,
        category: "{cat}",
        hub: "{hub}",
        slug: "{slug}",
        readingTime: {rt},
        dateUpdated: "{date_es}",
        summary: "{summary.replace('"', '\\"')}",
        relatedSlugs: [],
        content: `<div class="article-content">
{html_escaped}
</div>`
    }}'''

    return key, block

# ── Insertion dans le fichier JS ───────────────────────────────────────────────

def insert_into_js(entries: list, target_file: str, day: date) -> list:
    """
    Insère les nouvelles entrées dans le fichier JS avant le });  final.
    Ignore les clés déjà présentes.
    Retourne la liste des clés effectivement insérées.
    """
    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()

    inserted_keys = []
    blocks_to_add = []

    for key, block in entries:
        if f'"{key}"' in content:
            print(f"  [SKIP] Clé déjà présente : {key}")
        else:
            blocks_to_add.append((key, block))
            inserted_keys.append(key)

    if not blocks_to_add:
        return []

    new_blocks = ",\n".join(block for _, block in blocks_to_add)

    # Trouver le });  de fermeture du Object.assign(...)
    close_pattern = re.compile(r'\n\}\);?\s*$', re.MULTILINE)
    match = close_pattern.search(content)
    if not match:
        raise ValueError("Impossible de trouver le });  de fermeture dans le fichier JS.")

    insert_pos = match.start()
    new_content = content[:insert_pos] + ",\n" + new_blocks + content[insert_pos:]

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return inserted_keys

# ── Git ────────────────────────────────────────────────────────────────────────

def git_commit_push(site_dir: str, filename: str, day: date, post_nums: list):
    nums_str = ", ".join(str(n) for n in post_nums)
    message  = f"daily: add posts {day.isoformat()} ({nums_str})"

    cmds = [
        ["git", "-C", site_dir, "add", filename],
        ["git", "-C", site_dir, "commit", "-m", message],
        ["git", "-C", site_dir, "push"],
    ]
    for cmd in cmds:
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"  [ERREUR git] {' '.join(cmd)}")
            print(result.stderr)
            sys.exit(1)
        else:
            print(f"  [OK] {' '.join(cmd[2:])}")

# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--date', help='Date au format YYYY-MM-DD (défaut : aujourd\'hui)')
    parser.add_argument('--dry-run', action='store_true', help='Affiche le JS sans écrire ni pusher')
    args = parser.parse_args()

    if args.date:
        day = datetime.strptime(args.date, "%Y-%m-%d").date()
    else:
        day = date.today()

    posts_file = os.path.join(POSTS_DIR, f"posts_{day.isoformat()}.md")
    print(f"\n── Publish daily posts ─────────────────────────────")
    print(f"  Date    : {day.isoformat()}")
    print(f"  Fichier : {posts_file}")

    if not os.path.exists(posts_file):
        print(f"\n  [STOP] Fichier introuvable : {posts_file}")
        sys.exit(0)

    with open(posts_file, 'r', encoding='utf-8') as f:
        md_content = f.read()

    posts = parse_posts(md_content)
    if not posts:
        print("\n  [STOP] Aucun post trouvé dans le fichier.")
        sys.exit(0)

    print(f"\n  Posts trouvés : {len(posts)}")

    entries = []
    for i, post in enumerate(posts, start=1):
        key, block = build_js_entry(post, day, i)
        entries.append((key, block))
        print(f"  [{i}] {post['num']} — {post['title'][:60]}")

    if args.dry_run:
        print("\n── DRY RUN — JS généré ─────────────────────────────")
        for key, block in entries:
            print(f"\n// {key}")
            print(block)
        return

    print(f"\n  Insertion dans : {TARGET_FILE}")
    inserted = insert_into_js(entries, TARGET_FILE, day)

    if not inserted:
        print("  [STOP] Aucune nouvelle clé à insérer.")
        sys.exit(0)

    print(f"  Clés insérées : {len(inserted)}")

    post_nums = [p["num"] for p in posts]
    print("\n  Git commit + push...")
    git_commit_push(SITE_DIR, TARGET_FILE, day, post_nums)

    print("\n── Terminé ─────────────────────────────────────────")
    print(f"  {len(inserted)} article(s) publiés sur espanolesensuiza.ch")
    print(f"  Commit : daily: add posts {day.isoformat()} ({', '.join(str(n) for n in post_nums)})")


if __name__ == "__main__":
    main()
