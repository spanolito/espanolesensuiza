#!/usr/bin/env python3
"""
create_icon.py — Génère l'icône .icns pour espanolesensuiza.ch Publisher
Nécessite Pillow : pip install Pillow

Génère icon.iconset/ + icon.icns dans le même répertoire que ce script.
"""

import math
import os
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("  [ERREUR] Pillow non installé.")
    print("  Installez-le : pip3 install Pillow --break-system-packages")
    sys.exit(1)

SCRIPT_DIR = Path(__file__).parent
ICONSET    = SCRIPT_DIR / "icon.iconset"
ICNS_PATH  = SCRIPT_DIR / "icon.icns"

# macOS iconutil requiert ces tailles exactes
ICON_SIZES = [16, 32, 128, 256, 512]

# ── Palette logo ───────────────────────────────────────────────────────────────

RED       = (220, 20,  60,  255)   # rouge suisse #DC143C
RED_DARK  = (165, 14,  45,  255)   # contour #A50E2D
WHITE     = (255, 255, 255, 255)
GOLD      = (255, 215,  0,  255)   # #FFD700
TRANSP    = (0,   0,   0,   0)


# ── Dessin du logo ─────────────────────────────────────────────────────────────

def draw_logo(size: int) -> Image.Image:
    """
    Dessine le logo espanolesensuiza.ch :
    - Fond blanc arrondi (style macOS app icon)
    - Cercle rouge (croix suisse)
    - Croix blanche (proportions officielles)
    - Badge "ES" en or
    """
    img  = Image.new("RGBA", (size, size), TRANSP)
    draw = ImageDraw.Draw(img, "RGBA")

    pad = size * 0.06   # marge extérieure
    r   = size * 0.18   # rayon des coins arrondis (style macOS)

    # ── Fond blanc arrondi (squircle macOS) ──────────────────────────────────
    _rounded_rect(draw, pad, pad, size - pad, size - pad, r, (255, 255, 255, 255))

    # ── Ombre douce sous le fond ──────────────────────────────────────────────
    # (dessinée avant le cercle rouge)
    shadow_pad = size * 0.10
    shadow_col = (180, 10, 40, 80)
    _rounded_rect(draw,
                  shadow_pad + size * 0.02,
                  shadow_pad + size * 0.04,
                  size - shadow_pad + size * 0.02,
                  size - shadow_pad + size * 0.04,
                  r * 0.9, shadow_col)

    # ── Cercle rouge principal ────────────────────────────────────────────────
    cp  = size * 0.10   # padding du cercle dans le fond blanc
    _rounded_rect(draw, cp, cp, size - cp, size - cp, size * 0.14, RED)

    # Léger liseré sombre
    _rounded_rect_outline(draw, cp, cp, size - cp, size - cp, size * 0.14, RED_DARK, 2)

    # ── Croix suisse blanche ─────────────────────────────────────────────────
    # Proportions officielles : croix dans un carré 5×5, bras de 1 unité de large
    cx, cy = size / 2, size / 2
    al = size * 0.28   # demi-longueur des bras
    aw = size * 0.105  # demi-largeur des bras

    # Légère ombre de la croix pour la profondeur
    shadow_off = max(1, size * 0.008)
    shadow_white = (180, 180, 180, 120)
    draw.rectangle([cx - al + shadow_off, cy - aw + shadow_off,
                    cx + al + shadow_off, cy + aw + shadow_off],
                   fill=shadow_white)
    draw.rectangle([cx - aw + shadow_off, cy - al + shadow_off,
                    cx + aw + shadow_off, cy + al + shadow_off],
                   fill=shadow_white)

    # Croix blanche
    draw.rectangle([cx - al, cy - aw, cx + al, cy + aw], fill=WHITE)
    draw.rectangle([cx - aw, cy - al, cx + aw, cy + al], fill=WHITE)

    # ── Badge "ES" en or ─────────────────────────────────────────────────────
    if size >= 64:
        _draw_es_badge(draw, img, size)

    return img


def _rounded_rect(draw, x0, y0, x1, y1, radius, fill):
    """Rectangle aux coins arrondis rempli."""
    r = min(radius, (x1 - x0) / 2, (y1 - y0) / 2)
    draw.rectangle([x0 + r, y0, x1 - r, y1], fill=fill)
    draw.rectangle([x0, y0 + r, x1, y1 - r], fill=fill)
    draw.ellipse([x0,       y0,       x0 + 2*r, y0 + 2*r], fill=fill)
    draw.ellipse([x1 - 2*r, y0,       x1,       y0 + 2*r], fill=fill)
    draw.ellipse([x0,       y1 - 2*r, x0 + 2*r, y1      ], fill=fill)
    draw.ellipse([x1 - 2*r, y1 - 2*r, x1,       y1      ], fill=fill)


def _rounded_rect_outline(draw, x0, y0, x1, y1, radius, color, width):
    """Contour d'un rectangle aux coins arrondis."""
    r = min(radius, (x1 - x0) / 2, (y1 - y0) / 2)
    w = width
    draw.arc([x0, y0, x0 + 2*r, y0 + 2*r],         180, 270, fill=color, width=w)
    draw.arc([x1 - 2*r, y0, x1, y0 + 2*r],          270, 360, fill=color, width=w)
    draw.arc([x0, y1 - 2*r, x0 + 2*r, y1],           90, 180, fill=color, width=w)
    draw.arc([x1 - 2*r, y1 - 2*r, x1, y1],             0,  90, fill=color, width=w)
    draw.line([x0 + r, y0, x1 - r, y0],              fill=color, width=w)
    draw.line([x0 + r, y1, x1 - r, y1],              fill=color, width=w)
    draw.line([x0, y0 + r, x0, y1 - r],              fill=color, width=w)
    draw.line([x1, y0 + r, x1, y1 - r],              fill=color, width=w)


def _draw_es_badge(draw, img, size):
    """Badge 'ES' en bas à droite, fond sombre semi-transparent."""
    bw = size * 0.28   # largeur badge
    bh = size * 0.18   # hauteur badge
    bx = size - size * 0.09 - bw
    by = size - size * 0.09 - bh
    br = bh * 0.45

    # Fond badge (rouge foncé semi-transparent)
    badge_draw = ImageDraw.Draw(img, "RGBA")
    _rounded_rect(badge_draw, bx, by, bx + bw, by + bh, br, (120, 8, 28, 210))

    # Texte "ES"
    fs = max(8, int(size * 0.145))
    font = _best_font(fs)
    cx_b = bx + bw / 2
    cy_b = by + bh / 2
    # Ombre texte
    badge_draw.text((cx_b + 1, cy_b + 1), "ES", fill=(80, 0, 10, 180),
                    font=font, anchor="mm")
    # Texte or
    badge_draw.text((cx_b, cy_b), "ES", fill=GOLD, font=font, anchor="mm")


def _best_font(size: int):
    """Cherche une police système bold, fallback sur la police PIL par défaut."""
    candidates = [
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/System/Library/Fonts/Arial Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size, index=1)
            except Exception:
                try:
                    return ImageFont.truetype(path, size, index=0)
                except Exception:
                    continue
    return ImageFont.load_default()


# ── Génération des fichiers ────────────────────────────────────────────────────

def generate():
    ICONSET.mkdir(exist_ok=True)

    print(f"\n  Génération de l'icône dans : {ICONSET}")
    print()

    for sz in ICON_SIZES:
        # Résolution normale
        img = draw_logo(sz)
        out = ICONSET / f"icon_{sz}x{sz}.png"
        img.save(out, "PNG")
        print(f"  [OK] icon_{sz}x{sz}.png")

        # Résolution Retina @2x (sauf pour 512 → 1024)
        sz2  = sz * 2
        img2 = draw_logo(sz2)
        out2 = ICONSET / f"icon_{sz}x{sz}@2x.png"
        img2.save(out2, "PNG")
        print(f"  [OK] icon_{sz}x{sz}@2x.png  (= {sz2}×{sz2})")

    # Conversion en .icns via iconutil (natif macOS)
    print()
    print(f"  Conversion en .icns : {ICNS_PATH}")
    result = subprocess.run(
        ["iconutil", "-c", "icns", str(ICONSET), "-o", str(ICNS_PATH)],
        capture_output=True, text=True
    )
    if result.returncode == 0:
        size_kb = ICNS_PATH.stat().st_size // 1024
        print(f"  [OK] icon.icns généré ({size_kb} Ko)")
    else:
        print(f"  [ERREUR] iconutil : {result.stderr.strip()}")
        sys.exit(1)

    print()
    print(f"  Icône prête : {ICNS_PATH}")
    print()


if __name__ == "__main__":
    generate()
