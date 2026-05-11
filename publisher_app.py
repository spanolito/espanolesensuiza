#!/usr/bin/env python3
"""
publisher_app.py v4 — Interface épurée, dark mode macOS, boutons arrondis
espanolesensuiza.ch Publisher
"""

import calendar
import io
import json
import math
import os
import queue
import re
import subprocess
import threading
from datetime import date, datetime, timedelta
from pathlib import Path
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
from tkinter import font as tkfont

# PIL optionnel — clipboard + redimensionnement thumbnails
try:
    from PIL import Image as _PILImage, ImageGrab as _ImageGrab, ImageTk as _ImageTk
    _HAVE_PIL = True
except ImportError:
    _HAVE_PIL = False

# ── Configuration ──────────────────────────────────────────────────────────────

SCRIPT_PATH = "/Users/oscarandujar/Projets/espanolesensuiza/scripts/publish_daily_posts.py"
PYTHON_PATH = "/Library/Frameworks/Python.framework/Versions/3.13/bin/python3"
LOG_DIR     = "/Users/oscarandujar/Projets/espanolesensuiza/logs"
LOG_PATH    = f"{LOG_DIR}/daily-post.log"
SITE_DIR    = "/Users/oscarandujar/Projets/espanolesensuiza"
STATE_FILE  = os.path.expanduser("~/.espanolesensuiza_publisher.json")

APP_W, APP_H = 1100, 820
SIDEBAR_W    = 195          # largeur fixe de la sidebar

# ── Palette — macOS system dark (sobre, lisible) ───────────────────────────────

C = {
    "accent":      "#D93050",  # rouge sobre, pas neon
    "accent_dk":   "#B02540",
    "accent_glow": "#2A0F18",  # fond hover sombre
    "bg":          "#1C1C1E",  # fond principal
    "sidebar":     "#111113",  # fond sidebar (plus sombre que bg)
    "surface":     "#2C2C2E",  # surface élevée (cartes)
    "surface2":    "#242426",  # surface secondaire
    "input":       "#3A3A3C",  # champs
    "term":        "#131315",  # terminal
    "text":        "#F2F2F7",  # texte principal
    "text2":       "#AEAEB2",  # texte secondaire
    "text3":       "#636366",  # texte discret
    "sep":         "#38383A",  # séparateurs
    "success":     "#30D158",  # vert système
    "error":       "#FF453A",  # rouge système
    "warn":        "#FF9F0A",  # orange système
    "info":        "#0A84FF",  # bleu système
    "log_text":    "#C7C7CC",  # texte terminal
    "dim":         "#48484A",  # éléments discrets
    "banner_l":    "#071A35",  # gauche du dégradé banner (bleu nuit)
}

# ── Helpers ────────────────────────────────────────────────────────────────────

POSTS_DIR = "/Users/oscarandujar/Projets/Publications/posts"
MEDIA_DIR = os.path.join(SITE_DIR, "media", "guides")
THUMB_W, THUMB_H = 80, 52   # dimensions thumbnail dans l'UI


def _img_slugify(text: str, max_len: int = 45) -> str:
    """Slugify identique à publish_daily_posts.py — même convention de nommage."""
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


def _img_filename(es_title: str) -> str:
    """Retourne le nom de fichier attendu pour l'image d'un article."""
    return f"actualidad-{_img_slugify(es_title)}.jpg"


def _img_path(es_title: str) -> Path:
    return Path(MEDIA_DIR) / _img_filename(es_title)


def _parse_post_titles(date_str: str) -> list[dict]:
    """
    Lit posts_{date_str}.md et retourne la liste des articles :
    [{"num": 1, "title": "...", "filename": "actualidad-xxx.jpg", "path": Path(...)}]
    """
    posts_file = Path(POSTS_DIR) / f"posts_{date_str}.md"
    if not posts_file.exists():
        return []
    try:
        content = posts_file.read_text(encoding="utf-8")
    except Exception:
        return []
    # Extraire les titres : ligne **Titre** après ## POST N
    title_re = re.compile(
        r"^##\s+POST\s+(\d+)[^\n]*\n+\*\*(.+?)\*\*", re.MULTILINE
    )
    results = []
    for m in title_re.finditer(content):
        num   = int(m.group(1))
        title = m.group(2).strip()
        fname = _img_filename(title)
        fpath = Path(MEDIA_DIR) / fname
        results.append({"num": num, "title": title, "filename": fname, "path": fpath})
    return results


def _save_pil_to_guides(pil_img, dest_path: Path) -> bool:
    """Convertit et enregistre une image PIL en JPEG dans media/guides/."""
    try:
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        rgb = pil_img.convert("RGB")
        rgb.save(str(dest_path), "JPEG", quality=88, optimize=True)
        return True
    except Exception as exc:
        messagebox.showerror("Erreur sauvegarde image", str(exc))
        return False


def _darken(hex_color: str, f: float = 0.78) -> str:
    r, g, b = int(hex_color[1:3], 16), int(hex_color[3:5], 16), int(hex_color[5:7], 16)
    return "#{:02X}{:02X}{:02X}".format(int(r*f), int(g*f), int(b*f))


def load_shell_env() -> dict:
    try:
        script = "source ~/.zprofile 2>/dev/null; source ~/.zshrc 2>/dev/null; env -0"
        out = subprocess.run(
            ["bash", "-lc", script], capture_output=True, text=True, timeout=15
        ).stdout
        env = {}
        for kv in out.split("\0"):
            if "=" in kv:
                k, _, v = kv.partition("=")
                env[k] = v
        return {**os.environ, **env}
    except Exception:
        return dict(os.environ)


def load_state() -> dict:
    try:
        with open(STATE_FILE) as f:
            return json.load(f)
    except Exception:
        return {"history": []}


def save_state(s: dict):
    try:
        with open(STATE_FILE, "w") as f:
            json.dump(s, f, indent=2)
    except Exception:
        pass


def git(*args, timeout: int = 30) -> tuple:
    """Exécute une commande git — cherche git dans plusieurs emplacements."""
    git_bin = _find_git()
    if git_bin is None:
        return 1, "[git introuvable dans PATH]"
    try:
        r = subprocess.run(
            [git_bin, "-C", SITE_DIR] + list(args),
            capture_output=True, text=True, timeout=timeout
        )
        return r.returncode, (r.stdout + r.stderr)
    except Exception as e:
        return 1, str(e)


def _find_git() -> str | None:
    """Cherche git dans PATH puis dans les emplacements macOS standard."""
    import shutil
    found = shutil.which("git")
    if found:
        return found
    for candidate in [
        "/usr/bin/git",
        "/usr/local/bin/git",
        "/opt/homebrew/bin/git",
        "/opt/local/bin/git",
    ]:
        if os.path.isfile(candidate):
            return candidate
    return None


def has_pending_commit() -> bool:
    try:
        rc, out = git("log", "origin/main..HEAD", "--oneline")
        return rc == 0 and bool(out.strip())
    except Exception:
        return False


def git_published_dates() -> set:
    """Retourne l'ensemble des dates (objets date) pour lesquelles un push d'articles
    existe sur origin/main. Lit les messages de commit 'daily: add multilingual posts YYYY-MM-DD'."""
    try:
        rc, out = git("log", "origin/main", "--format=%s",
                      "--grep=daily: add multilingual posts")
        if rc != 0 or not out.strip():
            return set()
        pattern = re.compile(r"daily: add multilingual posts (\d{4}-\d{2}-\d{2})")
        dates = set()
        for line in out.splitlines():
            m = pattern.search(line)
            if m:
                try:
                    dates.add(date.fromisoformat(m.group(1)))
                except ValueError:
                    pass
        return dates
    except Exception:
        return set()


def last_git_push_date() -> str:
    """Date et heure du dernier commit pushé sur origin/main. Format JJ.MM.YYYY HH:MM."""
    try:
        rc, out = git("log", "origin/main", "-1", "--format=%ci")
        if rc == 0 and out.strip():
            raw = out.strip()[:19]   # "2026-05-09 14:32:07"
            dt = datetime.strptime(raw, "%Y-%m-%d %H:%M:%S")
            return dt.strftime("%d.%m.%Y %H:%M")
    except Exception:
        pass
    return ""


def line_tag(line: str) -> str:
    if any(x in line for x in ("[OK]", "insérés", "status=success", "Push réussi")):
        return "ok"
    if any(x in line for x in ("[ERREUR]", "Error", "Erreur", "ERREUR", "ERROR")):
        return "err"
    if any(x in line for x in ("[SKIP]", "[STOP]", "[INFO]", "[RETRY]")):
        return "warn"
    if "[SUMMARY]" in line:
        return "info"
    if "──" in line or "═" in line:
        return "dim"
    return "txt"


# ── Primitives polygon partagées (aucun artefact de jointure) ─────────────────

def _rounded_rect_poly(canvas: tk.Canvas,
                       x0: float, y0: float, x1: float, y1: float,
                       r: float, color: str, n: int = 10) -> None:
    """Rectangle à coins arrondis de rayon r dessiné comme un polygon — zéro seam."""
    bh, bw = y1 - y0, x1 - x0
    if bh <= 0 or bw <= 0:
        return
    r = min(r, bh / 2.0, bw / 2.0)
    # Parcours des 4 coins dans l'ordre TR → BR → BL → TL
    corners = [
        (x1 - r, y0 + r, -math.pi / 2,  0),
        (x1 - r, y1 - r,  0,             math.pi / 2),
        (x0 + r, y1 - r,  math.pi / 2,  math.pi),
        (x0 + r, y0 + r,  math.pi,      3 * math.pi / 2),
    ]
    pts = []
    for cx, cy, a0, a1 in corners:
        for i in range(n + 1):
            a = a0 + (a1 - a0) * i / n
            pts += [cx + r * math.cos(a), cy + r * math.sin(a)]
    canvas.create_polygon(pts, fill=color, outline="", smooth=False)


def _pill_poly(canvas: tk.Canvas,
               x0: float, y0: float, x1: float, y1: float,
               color: str, n: int = 18) -> None:
    """Forme pill complète (rayon = min(w,h)/2). Utilisé pour le champ date."""
    bh, bw = y1 - y0, x1 - x0
    if bh <= 0 or bw <= 0:
        return
    _rounded_rect_poly(canvas, x0, y0, x1, y1, min(bh, bw) / 2.0, color, n=n)


# ── Bouton à coins arrondis — style plat macOS dark ───────────────────────────

class RoundedBtn(tk.Canvas):
    """Bouton rectangle à coins arrondis, style plat — pas de chrome ni de gloss."""

    def __init__(self, parent, text: str, command,
                 w: int = 140, h: int = 34, r: int = 12,
                 fill: str = C["accent"], fg: str = "white",
                 hover: str | None = None,
                 font_spec=("Helvetica Neue", 13, "bold"), **kw):
        parent_bg = parent.cget("bg")
        super().__init__(parent, width=w, height=h,
                         highlightthickness=0, bd=0,
                         bg=parent_bg, cursor="hand2", **kw)
        self._text   = text
        self._cmd    = command
        self._fill   = fill
        self._hover  = hover or _darken(fill, 0.82)
        self._fg     = fg
        self._font   = font_spec
        self._bw     = w
        self._bh     = h
        self._r      = r
        self._active = True

        self._paint(fill)
        self.bind("<Button-1>", lambda _: self._click())
        self.bind("<Enter>",    lambda _: self._paint(self._hover) if self._active else None)
        self.bind("<Leave>",    lambda _: self._paint(self._fill)  if self._active else None)

    def _click(self):
        if self._active:
            self._cmd()

    def _paint(self, fill: str):
        self.delete("all")
        _rounded_rect_poly(self, 0, 0, self._bw, self._bh, self._r, fill)
        self.create_text(self._bw // 2, self._bh // 2,
                         text=self._text, fill=self._fg,
                         font=self._font, anchor="center")

    def set_text(self, text: str):
        self._text = text
        self._paint(self._fill)

    def set_fill(self, fill: str):
        self._fill  = fill
        self._hover = _darken(fill, 0.82)
        self._paint(fill)

    def set_enabled(self, enabled: bool):
        self._active = enabled
        self._paint(self._fill if enabled else C["dim"])
        self.config(cursor="hand2" if enabled else "arrow")


# ── Pill (petit bouton à coins arrondis, style plat) ──────────────────────────

class Pill(tk.Canvas):
    """Petit bouton à coins arrondis — style plat, cohérent avec RoundedBtn."""

    def __init__(self, parent, text: str, command=None,
                 fill: str = C["input"], fg: str = C["text2"],
                 h: int = 28, r: int = 10,
                 font_spec=("Helvetica Neue", 12), **kw):
        parent_bg = parent.cget("bg")
        _fnt_args = {"family": font_spec[0], "size": font_spec[1]}
        if len(font_spec) > 2:
            _fnt_args["weight"] = font_spec[2]
        _fnt = tkfont.Font(**_fnt_args)
        tw = _fnt.measure(text)
        w  = tw + 26

        super().__init__(parent, width=w, height=h,
                         highlightthickness=0, bd=0,
                         bg=parent_bg,
                         cursor="hand2" if command else "arrow", **kw)
        self._text  = text
        self._cmd   = command
        self._fill  = fill
        self._hover = _darken(fill, 0.82) if command else fill
        self._fg    = fg
        self._font  = font_spec
        self._bw    = w
        self._bh    = h
        self._r     = r

        self._paint(fill)
        if command:
            self.bind("<Button-1>", lambda _: command())
            self.bind("<Enter>",    lambda _: self._paint(self._hover))
            self.bind("<Leave>",    lambda _: self._paint(self._fill))

    def _paint(self, fill: str):
        self.delete("all")
        _rounded_rect_poly(self, 0, 0, self._bw, self._bh, self._r, fill)
        self.create_text(self._bw // 2, self._bh // 2,
                         text=self._text, fill=self._fg,
                         font=self._font, anchor="center")


# ── Logo ──────────────────────────────────────────────────────────────────────

class AppLogo(tk.Canvas):
    def __init__(self, parent, size: int = 36, bg: str = C["surface"], **kw):
        super().__init__(parent, width=size, height=size,
                         highlightthickness=0, bg=bg, **kw)
        s = size
        m = s * 0.04
        self.create_oval(m, m, s-m, s-m, fill=C["accent"], outline="")
        cx, cy = s/2, s/2
        al, aw = s*0.29, s*0.11
        self.create_rectangle(cx-al, cy-aw, cx+al, cy+aw, fill="white", outline="")
        self.create_rectangle(cx-aw, cy-al, cx+aw, cy+al, fill="white", outline="")
        fs = max(5, int(s * 0.16))
        self.create_text(s*0.70, s*0.74, text="ES",
                         fill="#FFD700", font=("Helvetica Neue", fs, "bold"))


class FlagLogo(tk.Canvas):
    """Drapeaux CH (gauche) et ES (droite) côte à côte — logo sidebar."""

    def __init__(self, parent, size: int = 28, bg: str = C["sidebar"], **kw):
        fw     = int(size * 1.1)   # chaque drapeau légèrement rectangulaire
        gap    = 5
        total  = fw * 2 + gap
        super().__init__(parent, width=total, height=size,
                         highlightthickness=0, bg=bg, **kw)
        s = size

        # ── Drapeau suisse : carré rouge + croix blanche ──────────────────
        self.create_rectangle(0, 0, fw, s, fill="#FF0000", outline="")
        cx, cy = fw / 2, s / 2
        al = s * 0.28   # demi-longueur des bras
        aw = s * 0.11   # demi-largeur des bras
        self.create_rectangle(cx - aw, cy - al, cx + aw, cy + al, fill="white", outline="")
        self.create_rectangle(cx - al, cy - aw, cx + al, cy + aw, fill="white", outline="")

        # ── Drapeau espagnol : rouge / jaune / rouge ──────────────────────
        x0 = fw + gap
        self.create_rectangle(x0,            0,        x0 + fw, s,        fill="#C60B1E", outline="")
        self.create_rectangle(x0,            s * 0.25, x0 + fw, s * 0.75, fill="#F1BF00", outline="")


class MacOSIcon(tk.Canvas):
    """Icône style macOS — carré arrondi avec dégradé vertical et symbole dessiné en blanc."""

    PALETTES = {
        "Publication": ("#4BA3FF", "#0A6EE8"),
        "Images":      ("#FF9A00", "#E07000"),
        "Journal":     ("#32D74B", "#1EB538"),
        "Git":         ("#7B78F0", "#5450D0"),
    }

    def __init__(self, parent, name: str, size: int = 30, bg: str = C["sidebar"], **kw):
        super().__init__(parent, width=size, height=size,
                         highlightthickness=0, bg=bg, **kw)
        self._s    = size
        self._name = name
        self._draw_bg()
        self._draw_symbol()

    def _draw_bg(self):
        s  = self._s
        r  = max(5, int(s * 0.22))
        top_hex, bot_hex = self.PALETTES.get(self._name, ("#666666", "#444444"))
        rt, gt, bt = int(top_hex[1:3], 16), int(top_hex[3:5], 16), int(top_hex[5:7], 16)
        rb, gb, bb = int(bot_hex[1:3], 16), int(bot_hex[3:5], 16), int(bot_hex[5:7], 16)
        for y in range(s):
            t = y / max(1, s - 1)
            col = "#{:02x}{:02x}{:02x}".format(
                int(rt + (rb - rt) * t),
                int(gt + (gb - gt) * t),
                int(bt + (bb - bt) * t),
            )
            # Clip aux coins arrondis
            if y < r:
                dy = r - y
                dx = r - int((max(0, r*r - dy*dy)) ** 0.5)
            elif y >= s - r:
                dy = y - (s - r - 1)
                dx = r - int((max(0, r*r - dy*dy)) ** 0.5)
            else:
                dx = 0
            if dx < s - dx:
                self.create_line(dx, y, s - dx, y, fill=col)

    def _draw_symbol(self):
        s  = self._s
        cx, cy = s / 2.0, s / 2.0
        lw = max(1, int(s * 0.075))

        if self._name == "Publication":
            # Triangle play
            p = s * 0.28
            pts = [cx - p*0.42, cy - p*0.72,
                   cx - p*0.42, cy + p*0.72,
                   cx + p*0.78, cy]
            self.create_polygon(pts, fill="white", outline="")

        elif self._name == "Images":
            # Cadre + montagne + soleil
            m = s * 0.18
            self.create_rectangle(m, m, s-m, s-m,
                                  outline="white", width=max(1, int(s*0.055)), fill="")
            mp = s * 0.20
            self.create_polygon(
                [m+1, s-m-1, cx, m + mp*1.6, s-m-1, s-m-1],
                fill="white", outline=""
            )
            rs = max(2, int(s * 0.09))
            sx = cx - s*0.14
            sy = m + m*0.45
            self.create_oval(sx, sy, sx + rs*2, sy + rs*2, fill="white", outline="")

        elif self._name == "Journal":
            # Trois lignes (document / notes)
            lm  = s * 0.22
            gap = s * 0.165
            lh  = max(1, int(s * 0.065))
            for i, y in enumerate([cy - gap, cy, cy + gap]):
                w_ratio = 0.68 if i == 2 else 1.0
                self.create_rectangle(lm, y - lh,
                                      lm + (s - 2*lm) * w_ratio, y + lh,
                                      fill="white", outline="")

        elif self._name == "Git":
            # Branche Y : tige + deux branches + nœuds
            bx = s * 0.22
            self.create_line(cx, cy + s*0.26, cx, cy - s*0.02,
                             fill="white", width=lw, capstyle="round")
            self.create_line(cx, cy - s*0.02, cx - bx, cy - s*0.28,
                             fill="white", width=lw, capstyle="round")
            self.create_line(cx, cy - s*0.02, cx + bx, cy - s*0.28,
                             fill="white", width=lw, capstyle="round")
            nr = max(2, int(s * 0.095))
            for px, py in [(cx, cy + s*0.26),
                           (cx - bx, cy - s*0.28),
                           (cx + bx, cy - s*0.28)]:
                self.create_oval(px-nr, py-nr, px+nr, py+nr,
                                 fill="white", outline="")


# ── Tooltip ───────────────────────────────────────────────────────────────────

class Tooltip:
    def __init__(self, widget, text: str, delay: int = 700):
        self._w, self._text, self._delay = widget, text, delay
        self._tip = self._job = None
        widget.bind("<Enter>",       self._schedule)
        widget.bind("<Leave>",       self._cancel)
        widget.bind("<ButtonPress>", self._cancel)

    def _schedule(self, _=None):
        self._cancel()
        self._job = self._w.after(self._delay, self._show)

    def _cancel(self, _=None):
        if self._job:
            self._w.after_cancel(self._job)
            self._job = None
        if self._tip:
            try:
                self._tip.destroy()
            except Exception:
                pass
            self._tip = None

    def _show(self):
        x = self._w.winfo_rootx() + self._w.winfo_width() // 2
        y = self._w.winfo_rooty() + self._w.winfo_height() + 6
        self._tip = tk.Toplevel(self._w)
        self._tip.overrideredirect(True)
        self._tip.attributes("-topmost", True)
        tk.Label(self._tip, text=self._text,
                 bg=C["surface"], fg=C["text2"],
                 relief="solid", bd=1,
                 font=("Helvetica Neue", 12),
                 padx=8, pady=4).pack()
        self._tip.geometry(f"+{x}+{y}")


# ── Calendrier inline ─────────────────────────────────────────────────────────

def _widgets(w):
    yield w
    for c in w.winfo_children():
        yield from _widgets(c)


class InlineCalendar(tk.Frame):
    """Mini-calendrier style macOS, affiché en overlay."""

    JOURS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"]
    MOIS  = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
             "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

    def __init__(self, parent, callback, initial: date | None = None):
        super().__init__(parent, bg=C["sep"])  # bordure d'1 px
        self.callback        = callback
        self.selected        = initial or date.today()
        self.vy              = self.selected.year
        self.vm              = self.selected.month
        self.published_dates: set = set()   # jours avec commit pushé

        self._inner = tk.Frame(self, bg=C["surface"])
        self._inner.pack(padx=1, pady=1)
        self._build()
        self._render()

    def set_date(self, d: date):
        self.selected = d
        self.vy, self.vm = d.year, d.month
        self._render()

    def set_published(self, dates: set):
        """Met à jour les jours publiés et re-rend le mois courant."""
        self.published_dates = dates
        self._render()

    def _build(self):
        f = self._inner

        # Navigation
        nav = tk.Frame(f, bg=C["surface"], pady=8, padx=12)
        nav.pack(fill="x")

        def nav_btn(parent, txt, cmd):
            lbl = tk.Label(parent, text=txt, font=("Helvetica Neue", 13),
                           bg=C["surface"], fg=C["text2"], cursor="hand2",
                           padx=8)
            lbl.bind("<Button-1>", lambda _: cmd())
            lbl.bind("<Enter>", lambda _: lbl.config(fg=C["text"]))
            lbl.bind("<Leave>", lambda _: lbl.config(fg=C["text2"]))
            return lbl

        nav_btn(nav, "‹", self._prev).pack(side="left")
        self._hdr = tk.Label(nav, text="", font=("Helvetica Neue", 14, "bold"),
                             bg=C["surface"], fg=C["text"])
        self._hdr.pack(side="left", expand=True)
        nav_btn(nav, "›", self._next).pack(side="right")

        # En-têtes jours
        drow = tk.Frame(f, bg=C["surface"], padx=10, pady=2)
        drow.pack()
        for i, d in enumerate(self.JOURS):
            fg = C["accent"] if i >= 5 else C["text3"]
            tk.Label(drow, text=d, width=3, anchor="center",
                     font=("Helvetica Neue", 11),
                     fg=fg, bg=C["surface"]).grid(row=0, column=i, padx=1)

        # Séparateur
        tk.Frame(f, bg=C["sep"], height=1).pack(fill="x")

        # Grille
        self._grid = tk.Frame(f, bg=C["surface"], padx=10, pady=8)
        self._grid.pack()

        # Pied
        tk.Frame(f, bg=C["sep"], height=1).pack(fill="x")
        today_lbl = tk.Label(f, text="Aujourd'hui",
                             font=("Helvetica Neue", 12),
                             fg=C["accent"], bg=C["surface"],
                             cursor="hand2", pady=7, anchor="center")
        today_lbl.pack(fill="x")
        today_lbl.bind("<Button-1>", lambda _: self._select(date.today()))
        today_lbl.bind("<Enter>", lambda _: today_lbl.config(bg=C["surface2"]))
        today_lbl.bind("<Leave>", lambda _: today_lbl.config(bg=C["surface"]))

    def _render(self):
        for w in self._grid.winfo_children():
            w.destroy()
        self._hdr.config(text=f"{self.MOIS[self.vm-1]}  {self.vy}")
        today = date.today()
        for r, week in enumerate(calendar.monthcalendar(self.vy, self.vm)):
            for c, day in enumerate(week):
                if day == 0:
                    tk.Label(self._grid, text="", width=3,
                             bg=C["surface"]).grid(row=r, column=c)
                    continue
                d = date(self.vy, self.vm, day)
                self._cell(r, c, day, d, d == self.selected, d == today, c >= 5)

    def _cell(self, r, c, day, d, is_sel, is_today, is_wkend):
        """Rendu d'une cellule via Frame+Label (couleurs garanties sur macOS)."""
        is_pub = d in self.published_dates

        if is_sel:
            outer = tk.Frame(self._grid, bg=C["accent"], padx=3, pady=3)
            outer.grid(row=r, column=c, padx=2, pady=2)
            lbl = tk.Label(outer, text=str(day),
                           bg=C["accent"], fg="white",
                           font=("Helvetica Neue", 12, "bold"),
                           width=2, anchor="center", cursor="hand2")
            lbl.pack()
        elif is_today:
            outer = tk.Frame(self._grid, bg=C["accent"], padx=1, pady=1)
            outer.grid(row=r, column=c, padx=2, pady=2)
            inner = tk.Frame(outer, bg=C["surface"], padx=2, pady=2)
            inner.pack()
            lbl = tk.Label(inner, text=str(day),
                           bg=C["surface"], fg=C["accent"],
                           font=("Helvetica Neue", 12, "bold"),
                           width=2, anchor="center", cursor="hand2")
            lbl.pack()
        else:
            fg = C["success"] if is_pub else (C["accent"] if is_wkend else C["text"])
            outer = tk.Frame(self._grid, bg=C["surface"])
            outer.grid(row=r, column=c, padx=2, pady=2)
            lbl = tk.Label(outer, text=str(day),
                           bg=C["surface"], fg=fg,
                           font=("Helvetica Neue", 12, "bold" if is_pub else "normal"),
                           width=2, anchor="center", cursor="hand2")
            lbl.pack()

        # Point vert sous le chiffre pour les jours publiés (sélectionné ou aujourd'hui)
        dot = None
        if is_pub and (is_sel or is_today):
            dot = tk.Frame(outer, bg=C["success"], height=3, width=8)
            dot.pack(pady=(0, 1))

        hover_bg = C["input"]
        restore  = C["accent"] if is_sel else C["surface"]

        def on_enter(_, o=outer, dot=dot):
            for w in _widgets(o):
                try: w.config(bg=hover_bg)
                except Exception: pass
            if dot:
                try: dot.config(bg=C["success"])
                except Exception: pass

        def on_leave(_, o=outer, bg=restore, dot=dot):
            for w in _widgets(o):
                try: w.config(bg=bg)
                except Exception: pass
            if dot:
                try: dot.config(bg=C["success"])
                except Exception: pass

        for w in _widgets(outer):
            w.bind("<Button-1>", lambda _, d=d: self._select(d))
            w.bind("<Enter>", on_enter)
            w.bind("<Leave>", on_leave)

    def _prev(self):
        self.vm -= 1
        if self.vm == 0:
            self.vm, self.vy = 12, self.vy - 1
        self._render()

    def _next(self):
        self.vm += 1
        if self.vm == 13:
            self.vm, self.vy = 1, self.vy + 1
        self._render()

    def _select(self, d: date):
        self.selected = d
        self.callback(d)


# ── Icône calendrier (petit SVG Canvas) ───────────────────────────────────────

class CalIcon(tk.Canvas):
    def __init__(self, parent, size: int = 18, bg: str = C["input"], **kw):
        super().__init__(parent, width=size, height=size,
                         highlightthickness=0, bg=bg, **kw)
        s = size
        m = 1.5
        self.create_rectangle(m, s*.22, s-m, s-m, outline=C["text3"],
                              fill=bg, width=1.2)
        self.create_rectangle(m+.5, s*.22, s-m-.5, s*.44,
                              fill=C["accent"], outline="")
        for px in (s*.30, s*.70):
            self.create_rectangle(px-1.5, s*.07, px+1.5, s*.28,
                                  fill=C["input"], outline=C["text3"], width=1)
        dot = max(1.5, s*.09)
        for row in range(2):
            for col in range(3):
                dx = s*.16 + col*s*.27
                dy = s*.56 + row*s*.20
                self.create_rectangle(dx, dy, dx+dot, dy+dot,
                                      fill=C["text3"], outline="")


# ── Application ────────────────────────────────────────────────────────────────

class PublisherApp:

    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("espanolesensuiza.ch — Publication")
        self.root.geometry(f"{APP_W}x{APP_H}")
        self.root.resizable(True, True)
        self.root.minsize(820, 640)
        self.root.configure(bg=C["bg"])

        self._q            = queue.Queue()
        self._proc         = None
        self._busy         = False
        self._env          = None
        self._state        = load_state()
        self._summ         = {}
        self._cal_inline     = None
        self._cal_visible    = False
        self._dot_job        = None
        self._active_section = "Publication"
        self._nav_rows       = {}
        self._sec_frames     = {}

        self._init_fonts()
        self._build_ui()
        self._bind_shortcuts()
        self._startup_check()
        self._poll()

    # ── Polices ───────────────────────────────────────────────────────────────

    def _init_fonts(self):
        self.f_mono  = tkfont.Font(family="Menlo",          size=13)
        self.f_monob = tkfont.Font(family="Menlo",          size=13, weight="bold")
        self.f_sm    = tkfont.Font(family="Helvetica Neue", size=12)
        self.f_ui    = tkfont.Font(family="Helvetica Neue", size=13)
        self.f_head  = tkfont.Font(family="Helvetica Neue", size=16, weight="bold")
        self.f_btn   = tkfont.Font(family="Helvetica Neue", size=13, weight="bold")

    # ── UI ────────────────────────────────────────────────────────────────────

    def _build_ui(self):
        # ── Conteneur horizontal racine ───────────────────────────────────────
        outer = tk.Frame(self.root, bg=C["bg"])
        outer.pack(fill="both", expand=True)

        # Sidebar (largeur fixe, toute la hauteur)
        self._sidebar = tk.Frame(outer, bg=C["sidebar"], width=SIDEBAR_W)
        self._sidebar.pack(side="left", fill="y")
        self._sidebar.pack_propagate(False)

        # Zone principale
        self._main = tk.Frame(outer, bg=C["bg"])
        self._main.pack(side="left", fill="both", expand=True)

        self._build_sidebar()
        self._build_banner()
        tk.Frame(self._main, bg=C["sep"], height=1).pack(fill="x")

        # ── Zone de contenu (sections interchangeables) ───────────────────────
        content = tk.Frame(self._main, bg=C["bg"])
        content.pack(fill="both", expand=True)
        self._sec_frames = {}

        # ── Section Publication (par défaut) ──────────────────────────────────
        f_pub = tk.Frame(content, bg=C["bg"])
        f_pub.pack(fill="both", expand=True)
        self._sec_frames["Publication"] = f_pub

        _orig_main = self._main
        self._main  = f_pub

        # Contrôles et images en haut
        self._build_controls()
        self._hsep()
        self._build_image_section()

        # Zone basse fixe (statusbar + git bar optionnel) — toujours visible
        bottom_area = tk.Frame(f_pub, bg=C["bg"])
        bottom_area.pack(side="bottom", fill="x")
        self._bottom_area = bottom_area

        _orig_main2 = self._main
        self._main   = bottom_area
        self._build_statusbar()   # se construit en side=top dans bottom_area
        self._build_git_bar()     # crée les widgets sans les packer (caché par défaut)
        self._main   = _orig_main2

        # Log remplit l'espace intermédiaire
        self._hsep()
        self._build_log()

        self._main = _orig_main

        # ── Section Images ────────────────────────────────────────────────────
        f_img = tk.Frame(content, bg=C["bg"])
        self._sec_frames["Images"] = f_img
        self._build_images_panel(f_img)

        # ── Section Journal ───────────────────────────────────────────────────
        f_jrn = tk.Frame(content, bg=C["bg"])
        self._sec_frames["Journal"] = f_jrn
        self._build_journal_panel(f_jrn)

        # ── Section Git ───────────────────────────────────────────────────────
        f_git = tk.Frame(content, bg=C["bg"])
        self._sec_frames["Git"] = f_git
        self._build_git_panel(f_git)

        self._active_section = "Publication"

        # Calendrier overlay
        self._cal_inline = InlineCalendar(self.root, callback=self._cal_pick)
        self.root.bind("<Button-1>", self._on_bg_click, add="+")

    def _hsep(self):
        tk.Frame(self._main, bg=C["sep"], height=1).pack(fill="x")

    # ── Sidebar ───────────────────────────────────────────────────────────────

    def _build_sidebar(self):
        SB  = self._sidebar
        BG  = C["sidebar"]
        SEP = C["sep"]

        # ── Logo zone ──────────────────────────────────────────────────────
        top = tk.Frame(SB, bg=BG, padx=14, pady=16)
        top.pack(fill="x")
        FlagLogo(top, size=28, bg=BG).pack(side="left", padx=(0, 10))
        lf = tk.Frame(top, bg=BG)
        lf.pack(side="left")
        tk.Label(lf, text="Españoles", font=("Helvetica Neue", 12, "bold"),
                 bg=BG, fg=C["text"]).pack(anchor="w")
        tk.Label(lf, text="en Suiza", font=("Helvetica Neue", 11),
                 bg=BG, fg=C["text3"]).pack(anchor="w")

        tk.Frame(SB, bg=SEP, height=1).pack(fill="x")

        # ── Navigation ─────────────────────────────────────────────────────
        nav = tk.Frame(SB, bg=BG, pady=10)
        nav.pack(fill="x")

        nav_labels = ["Publication", "Images", "Journal", "Git"]
        self._nav_rows = {}

        for label in nav_labels:
            row         = tk.Frame(nav, bg=BG, padx=14, pady=9, cursor="hand2")
            row.pack(fill="x")
            icon_canvas = MacOSIcon(row, label, size=26, bg=BG)
            icon_canvas.pack(side="left")
            text_lbl    = tk.Label(row, text=label, font=("Helvetica Neue", 13),
                                   bg=BG, fg=C["text2"])
            text_lbl.pack(side="left", padx=(10, 0))
            self._nav_rows[label] = (row, icon_canvas, text_lbl)
            for w in (row, icon_canvas, text_lbl):
                w.bind("<Button-1>", lambda _, l=label: self._switch_section(l))
                w.bind("<Enter>",    lambda _, l=label: self._nav_hover(l, True))
                w.bind("<Leave>",    lambda _, l=label: self._nav_hover(l, False))

        # Appliquer l'état actif initial (Publication)
        self._nav_highlight("Publication")

        # ── Bas : dernier push ──────────────────────────────────────────────
        tk.Frame(SB, bg=SEP, height=1).pack(side="bottom", fill="x")
        bot = tk.Frame(SB, bg=BG, padx=18, pady=14)
        bot.pack(side="bottom", fill="x")

        tk.Label(bot, text="Dernier push", font=("Helvetica Neue", 10),
                 bg=BG, fg=C["text3"]).pack(anchor="w")
        self._sidebar_push_lbl = tk.Label(
            bot, text="–", font=("Helvetica Neue", 12, "bold"),
            bg=BG, fg=C["info"], anchor="w", wraplength=SIDEBAR_W - 36)
        self._sidebar_push_lbl.pack(anchor="w", pady=(2, 0))

    # ── Banner principal (gradient canvas) ────────────────────────────────────

    def _build_banner(self):
        BANNER_H = 92

        cv = tk.Canvas(self._main, height=BANNER_H, highlightthickness=0,
                       cursor="arrow")
        cv.pack(fill="x")
        self._banner_cv = cv

        def _draw(ev=None):
            cv.delete("all")
            w = cv.winfo_width() or (APP_W - SIDEBAR_W)
            # Dégradé horizontal : bleu nuit (gauche) → bg (droite)
            lr, lg, lb = 0x07, 0x1A, 0x35   # C["banner_l"]
            rr, rg, rb = 0x1C, 0x1C, 0x1E   # C["bg"]
            steps = min(w, 360)
            for i in range(steps):
                t  = i / steps
                rr2 = int(lr + (rr - lr) * t)
                gg  = int(lg + (rg - lg) * t)
                bb  = int(lb + (rb - lb) * t)
                x0  = i * w // steps
                x1  = (i + 1) * w // steps + 1
                cv.create_rectangle(x0, 0, x1, BANNER_H,
                                    fill=f"#{rr2:02x}{gg:02x}{bb:02x}", outline="")
            # Barre d'accent gauche (4 px)
            cv.create_rectangle(0, 0, 4, BANNER_H, fill=C["accent"], outline="")
            # Titre et sous-titre
            cv.create_text(22, BANNER_H // 2 - 10,
                           text="espanolesensuiza.ch",
                           anchor="w", fill=C["text"],
                           font=("Helvetica Neue", 17, "bold"))
            cv.create_text(22, BANNER_H // 2 + 13,
                           text="Publication multilingue automatisée",
                           anchor="w", fill=C["text3"],
                           font=("Helvetica Neue", 12))

        cv.bind("<Configure>", lambda e: _draw(e))
        self.root.after(60, _draw)

        # Statut (frame flottante, côté droit du banner)
        sf = tk.Frame(self._main, bg=C["surface"], padx=18, pady=0)
        sf.place(relx=1.0, y=0, anchor="ne", height=BANNER_H)

        self._dot = tk.Label(sf, text="●", font=("Helvetica Neue", 16),
                             fg=C["text3"], bg=C["surface"])
        self._dot.pack(side="left")
        self._slbl = tk.Label(sf, text="Prêt",
                              font=("Helvetica Neue", 13, "bold"),
                              bg=C["surface"], fg=C["text2"])
        self._slbl.pack(side="left", padx=(5, 0))
        self._sts = tk.Label(sf, text="", font=self.f_sm,
                             bg=C["surface"], fg=C["text3"])
        self._sts.pack(side="left", padx=(6, 0))

    # ── Contrôles ─────────────────────────────────────────────────────────────

    def _build_controls(self):
        ctrl = tk.Frame(self._main, bg=C["surface"], padx=18, pady=12)
        ctrl.pack(fill="x")

        # ── Gauche ──
        left = tk.Frame(ctrl, bg=C["surface"])
        left.pack(side="left")

        # Champ date avec coins arrondis (Canvas + Entry via create_window)
        self._date_var = tk.StringVar()
        self._date_var.trace_add("write", self._on_date_var_change)

        _dc_w, _dc_h = 138, 32
        date_canvas = tk.Canvas(left, width=_dc_w, height=_dc_h,
                                highlightthickness=0, bg=C["surface"],
                                cursor="hand2")
        date_canvas.pack(side="left")
        # Fond arrondi normal et focus
        self._date_wrap = date_canvas   # référence pour positionner le calendrier

        def _dc_paint(focused=False):
            date_canvas.delete("bg_pill", "focus_ring")
            outline = C["accent"] if focused else C["dim"]
            _pill_poly(date_canvas, 0, 0, _dc_w, _dc_h, outline)
            _pill_poly(date_canvas, 1, 1, _dc_w - 1, _dc_h - 1, C["input"])

        _dc_paint()

        self._date_entry = tk.Entry(
            date_canvas, textvariable=self._date_var,
            width=10, font=self.f_mono, bd=0, relief="flat",
            fg=C["text"], bg=C["input"],
            insertbackground=C["accent"],
            highlightthickness=0, cursor="hand2",
        )
        date_canvas.create_window(_dc_w // 2, _dc_h // 2, window=self._date_entry)

        self._date_entry.bind("<Return>",   lambda _: self._launch())
        self._date_entry.bind("<FocusIn>",  lambda e: (_dc_paint(True),  self._entry_focus_in(e)))
        self._date_entry.bind("<FocusOut>", lambda e: (_dc_paint(False), self._entry_focus_out(e)))
        # Clic dans le champ → ouvre le calendrier
        self._date_entry.bind("<Button-1>", lambda _: self.root.after(10, self._show_cal))
        date_canvas.bind("<Button-1>",      lambda _: self.root.after(10, self._show_cal))
        self._placeholder()

        # Quick pills
        Pill(left, "Aujourd'hui", command=self._set_today,
             fill=C["accent"], fg="white", h=28).pack(side="left", padx=(12, 5))
        Pill(left, "Hier", command=self._set_yesterday,
             fill=C["input"], fg=C["text2"], h=28).pack(side="left")

        # ── Droite ──
        right = tk.Frame(ctrl, bg=C["surface"])
        right.pack(side="right")

        Pill(right, "Logs  ⌘L", command=self._open_logs,
             fill=C["input"], fg=C["text3"], h=28).pack(side="right", padx=(10, 0))

        # Bouton Stop (caché)
        self._btn_stop = RoundedBtn(right, "■  Arrêter",
                                    command=self._stop_process,
                                    w=130, h=34, r=10,
                                    fill="#CC2244", fg="white",
                                    font_spec=self.f_btn)
        Tooltip(self._btn_stop, "Interrompre le script (SIGTERM)")

        # Bouton Lancer
        self._btn_launch = RoundedBtn(right, "▶  Lancer   ⌘R",
                                      command=self._launch,
                                      w=155, h=34, r=10,
                                      fill=C["accent"], fg="white",
                                      font_spec=self.f_btn)
        self._btn_launch.pack(side="right")
        Tooltip(self._btn_launch, "Lancer publish_daily_posts.py --no-push  (⌘R)")

    # ── Images des articles ───────────────────────────────────────────────────

    def _build_image_section(self):
        """Panneau images : dropdown article + slot unique + cases inclusion."""
        self._img_posts        = []   # list[dict] articles de la date
        self._img_include_vars = {}   # {num: BooleanVar}
        self._img_thumbs       = []   # PhotoImage refs (évite le GC)
        self._img_current      = None # post dict affiché

        # ── En-tête ──
        hdr = tk.Frame(self._main, bg=C["surface"], padx=18, pady=8)
        hdr.pack(fill="x")
        tk.Label(hdr, text="Images des articles",
                 font=self.f_sm, bg=C["surface"], fg=C["text3"]).pack(side="left")
        self._img_hint = tk.Label(hdr, text="", font=self.f_sm,
                                  bg=C["surface"], fg=C["text3"])
        self._img_hint.pack(side="right")

        # ── Corps ──
        body = tk.Frame(self._main, bg=C["surface2"], padx=18, pady=10)
        body.pack(fill="x")
        self._img_body = body

        # Ligne 1 : sélecteur d'article
        row_sel = tk.Frame(body, bg=C["surface2"])
        row_sel.pack(fill="x", pady=(0, 8))
        tk.Label(row_sel, text="Article :", font=self.f_sm,
                 bg=C["surface2"], fg=C["text2"]).pack(side="left")
        self._img_combo_var = tk.StringVar()
        self._img_combo = ttk.Combobox(row_sel, textvariable=self._img_combo_var,
                                        state="readonly", width=62,
                                        font=self.f_sm)
        self._img_combo.pack(side="left", padx=(8, 0))
        self._img_combo.bind("<<ComboboxSelected>>", self._on_img_article_selected)

        # Ligne 2 : slot image (contenu dynamique)
        self._img_slot_frame = tk.Frame(body, bg=C["surface2"])
        self._img_slot_frame.pack(fill="x", pady=(0, 8))

        # Ligne 3 : cases inclusion
        self._img_check_frame = tk.Frame(body, bg=C["surface2"])
        self._img_check_frame.pack(fill="x")

    def _refresh_images(self, date_str: str):
        """Recharge la section images pour la date donnée."""
        self._img_posts.clear()
        self._img_include_vars.clear()
        self._img_thumbs.clear()
        self._img_current = None

        # Vider slot + cases
        for w in self._img_slot_frame.winfo_children():
            w.destroy()
        for w in self._img_check_frame.winfo_children():
            w.destroy()

        posts = _parse_post_titles(date_str)
        if not posts:
            self._img_combo["values"] = []
            self._img_combo_var.set("")
            self._img_hint.config(text=f"Aucun fichier posts_{date_str}.md", fg=C["text3"])
            tk.Label(self._img_slot_frame, text="",
                     bg=C["surface2"]).pack()
            return

        self._img_posts = posts

        # ── Dropdown ──
        labels = [f"Article {p['num']}  —  {p['title'][:60]}{'…' if len(p['title']) > 60 else ''}"
                  for p in posts]
        self._img_combo["values"] = labels
        self._img_combo.current(0)

        # ── Cases inclusion ──
        tk.Label(self._img_check_frame, text="Inclure dans le commit :",
                 font=self.f_sm, bg=C["surface2"], fg=C["text2"]).pack(side="left")
        for p in posts:
            var = tk.BooleanVar(value=True)
            self._img_include_vars[p["num"]] = var
            cb = tk.Checkbutton(
                self._img_check_frame,
                text=f"Art. {p['num']}",
                variable=var,
                font=self.f_sm,
                bg=C["surface2"], fg=C["text2"],
                selectcolor=C["input"],
                activebackground=C["surface2"],
                activeforeground=C["text"],
                command=self._on_img_inclusion_changed,
            )
            cb.pack(side="left", padx=(10, 0))

        # ── Afficher le premier article ──
        self._show_img_slot(0)
        self._update_img_hint()

    def _show_img_slot(self, idx: int):
        """Affiche le slot image pour l'article à l'index idx."""
        for w in self._img_slot_frame.winfo_children():
            w.destroy()
        self._img_thumbs.clear()

        if not self._img_posts or idx >= len(self._img_posts):
            return

        post = self._img_posts[idx]
        self._img_current = post
        exists = post["path"].exists()

        sf = C["surface2"]
        row = tk.Frame(self._img_slot_frame, bg=sf, pady=4)
        row.pack(fill="x")

        # Thumbnail
        canvas = tk.Canvas(row, width=THUMB_W, height=THUMB_H,
                           bg=C["input"], highlightthickness=1,
                           highlightbackground=C["sep"])
        canvas.pack(side="left", padx=(0, 14))
        self._img_canvas = canvas

        # Infos centre
        info = tk.Frame(row, bg=sf)
        info.pack(side="left", fill="x", expand=True)

        dot_color = C["success"] if exists else C["warn"]
        status_txt = "Image présente" if exists else "Image manquante"
        tk.Label(info, text=f"● {status_txt}", font=self.f_sm,
                 bg=sf, fg=dot_color).pack(anchor="w")
        fname_lbl = tk.Label(info, text=post["filename"],
                             font=("Menlo", 11), bg=sf, fg=C["text3"])
        fname_lbl.pack(anchor="w", pady=(2, 0))
        Tooltip(fname_lbl, str(post["path"]))

        # Boutons à droite
        btns = tk.Frame(row, bg=sf)
        btns.pack(side="right")

        RoundedBtn(btns, "Coller  ⌘V",
                   command=lambda p=post: self._paste_image(p),
                   w=120, h=34, r=10,
                   fill=C["accent"], fg="white",
                   font_spec=("Helvetica Neue", 12, "bold")).pack(pady=(0, 6))
        RoundedBtn(btns, "Parcourir…",
                   command=lambda p=post: self._browse_image(p),
                   w=120, h=34, r=10,
                   fill=C["input"], fg=C["text2"],
                   font_spec=("Helvetica Neue", 12)).pack()

        # Thumbnail
        if exists:
            self._draw_thumb(canvas, post["path"])
        else:
            canvas.create_text(THUMB_W // 2, THUMB_H // 2,
                               text="vide", fill=C["text3"],
                               font=("Helvetica Neue", 10))

    def _draw_thumb(self, canvas: tk.Canvas, path: Path):
        """Dessine le thumbnail dans le canvas donné."""
        canvas.delete("all")
        if not path.exists():
            canvas.create_text(THUMB_W // 2, THUMB_H // 2,
                               text="vide", fill=C["text3"],
                               font=("Helvetica Neue", 10))
            return
        if _HAVE_PIL:
            try:
                img = _PILImage.open(str(path))
                img.thumbnail((THUMB_W, THUMB_H), _PILImage.LANCZOS)
                photo = _ImageTk.PhotoImage(img)
                self._img_thumbs.append(photo)
                canvas.create_image(THUMB_W // 2, THUMB_H // 2,
                                    anchor="center", image=photo)
                return
            except Exception:
                pass
        # Fallback sans PIL
        canvas.create_rectangle(2, 2, THUMB_W - 2, THUMB_H - 2,
                                 fill=C["success"], outline="")
        canvas.create_text(THUMB_W // 2, THUMB_H // 2,
                           text="✓", fill="white",
                           font=("Helvetica Neue", 18, "bold"))

    def _update_img_hint(self):
        """Recalcule l'indicateur images/inclus dans l'en-tête."""
        posts = self._img_posts
        if not posts:
            self._img_hint.config(text="", fg=C["text3"])
            return
        n_img  = sum(1 for p in posts if p["path"].exists())
        n_inc  = sum(1 for p in posts
                     if self._img_include_vars.get(p["num"],
                        tk.BooleanVar(value=True)).get())
        n_tot  = len(posts)
        all_ok = n_img == n_tot and n_inc == n_tot
        self._img_hint.config(
            text=f"{n_img}/{n_tot} images · {n_inc}/{n_tot} inclus",
            fg=C["success"] if all_ok else C["warn"]
        )

    def _on_img_article_selected(self, _=None):
        idx = self._img_combo.current()
        self._show_img_slot(idx)

    def _on_img_inclusion_changed(self):
        self._update_img_hint()

    def get_excluded_articles(self) -> list[int]:
        """Retourne la liste des numéros d'articles exclus du commit."""
        return [num for num, var in self._img_include_vars.items()
                if not var.get()]

    def _paste_image(self, post: dict):
        """Colle l'image du presse-papiers et la sauvegarde."""
        if not _HAVE_PIL:
            messagebox.showwarning("PIL manquant",
                "Pillow n'est pas installé.\n"
                "pip install Pillow --break-system-packages")
            return
        try:
            img = _ImageGrab.grabclipboard()
        except Exception as exc:
            messagebox.showerror("Erreur presse-papiers", str(exc))
            return
        if img is None:
            messagebox.showinfo("Presse-papiers vide",
                "Aucune image trouvée dans le presse-papiers.\n"
                "Copiez d'abord une image (Cmd+C depuis Preview, Finder, Safari…)")
            return
        if _save_pil_to_guides(img, post["path"]):
            self._after_img_save(post)

    def _browse_image(self, post: dict):
        """Ouvre le sélecteur de fichier et sauvegarde l'image choisie."""
        src = filedialog.askopenfilename(
            title=f"Image — {post['title'][:55]}",
            filetypes=[
                ("Images", "*.jpg *.jpeg *.png *.webp *.tiff *.bmp *.gif"),
                ("Tous les fichiers", "*.*"),
            ],
        )
        if not src:
            return
        if not _HAVE_PIL:
            import shutil
            try:
                shutil.copy2(src, str(post["path"]))
                self._after_img_save(post)
            except Exception as exc:
                messagebox.showerror("Erreur copie", str(exc))
            return
        try:
            img = _PILImage.open(src)
        except Exception as exc:
            messagebox.showerror("Erreur lecture image", str(exc))
            return
        if _save_pil_to_guides(img, post["path"]):
            self._after_img_save(post)

    def _after_img_save(self, post: dict):
        """Rafraîchit l'UI après qu'une image a été sauvegardée."""
        # Mettre à jour la date dans _img_posts (le path peut maintenant exister)
        for p in self._img_posts:
            if p["num"] == post["num"]:
                break
        # Redessiner le slot si c'est l'article affiché
        if self._img_current and self._img_current["num"] == post["num"]:
            self._draw_thumb(self._img_canvas, post["path"])
            # Mettre à jour le label statut
            for w in self._img_slot_frame.winfo_children():
                if isinstance(w, tk.Frame):
                    for child in w.winfo_children():
                        if isinstance(child, tk.Frame):
                            for lbl in child.winfo_children():
                                if isinstance(lbl, tk.Label) and "manquante" in (lbl.cget("text") or ""):
                                    lbl.config(text="● Image présente", fg=C["success"])
                                    break
        self._update_img_hint()

    # ── Journal ───────────────────────────────────────────────────────────────

    def _build_log(self):
        # En-tête barre
        bar = tk.Frame(self._main, bg=C["surface2"], padx=16, pady=5)
        bar.pack(fill="x")

        tk.Label(bar, text="Journal d'exécution",
                 font=self.f_sm, bg=C["surface2"],
                 fg=C["text3"]).pack(side="left")

        self._prog = ttk.Progressbar(bar, mode="indeterminate", length=160)
        self._prog.pack(side="left", padx=(14, 0))

        clr = tk.Label(bar, text="Effacer", font=self.f_sm,
                       bg=C["surface2"], fg=C["text3"],
                       cursor="hand2", padx=4)
        clr.pack(side="right")
        clr.bind("<Button-1>", lambda _: self._log_clear())
        clr.bind("<Enter>",    lambda _: clr.config(fg=C["text"]))
        clr.bind("<Leave>",    lambda _: clr.config(fg=C["text3"]))

        # Corps
        lf = tk.Frame(self._main, bg=C["term"])
        lf.pack(fill="both", expand=True)

        sb = ttk.Scrollbar(lf, orient="vertical")
        sb.pack(side="right", fill="y")

        self._log = tk.Text(
            lf, bg=C["term"], fg=C["log_text"],
            font=self.f_mono, wrap="word", relief="flat",
            padx=16, pady=12,
            yscrollcommand=sb.set, state="disabled",
            cursor="arrow", insertbackground="white",
            selectbackground="#2A2A3E",
        )
        self._log.pack(fill="both", expand=True)
        sb.config(command=self._log.yview)

        self._log.tag_config("ok",   foreground=C["success"])
        self._log.tag_config("err",  foreground=C["error"])
        self._log.tag_config("warn", foreground=C["warn"])
        self._log.tag_config("info", foreground=C["info"])
        self._log.tag_config("dim",  foreground=C["dim"])
        self._log.tag_config("txt",  foreground=C["log_text"])
        self._log.tag_config("bold", foreground=C["accent"], font=self.f_monob)
        self._log.tag_config("hdr",  foreground=C["text2"],  font=self.f_monob)

        self._log_write("── espanolesensuiza.ch Publisher ───────────────────────\n", "hdr")
        self._log_write("Prêt.  ⌘R pour lancer · Laissez la date vide pour aujourd'hui.\n\n", "dim")

    # ── Barre de statut bas ───────────────────────────────────────────────────

    def _build_statusbar(self):
        # Séparateur puis statusbar (side=top dans bottom_area)
        tk.Frame(self._main, bg=C["sep"], height=1).pack(fill="x")
        sb = tk.Frame(self._main, bg=C["surface2"], padx=16, pady=7)
        sb.pack(fill="x")

        self._summ_lbl = tk.Label(sb, text="", font=self.f_sm,
                                  bg=C["surface2"], fg=C["text2"])
        self._summ_lbl.pack(side="left")

        # Dernier push git (origine)
        self._git_push_lbl = tk.Label(sb, text="", font=self.f_sm,
                                      bg=C["surface2"], fg=C["text3"])
        self._git_push_lbl.pack(side="right")

        # Dernier lancement app (état interne)
        self._hist_lbl = tk.Label(sb, text="", font=self.f_sm,
                                  bg=C["surface2"], fg=C["text3"])
        self._hist_lbl.pack(side="right", padx=(0, 16))
        self._refresh_hist()

        # Info log (centre)
        self._log_info = tk.Label(sb, text=self._log_info_str(),
                                  font=self.f_sm, bg=C["surface2"],
                                  fg=C["text3"])
        self._log_info.pack(side="right", padx=(0, 20))

    # ── Barre git ──────────────────────────────────────────────────────────────

    def _build_git_bar(self):
        # Barre toujours visible en bas de bottom_area — seul le contenu change
        tk.Frame(self._main, bg=C["sep"], height=1).pack(side="bottom", fill="x")
        self._git_bar = tk.Frame(self._main, bg=C["surface"], padx=16, pady=10)
        self._git_bar.pack(side="bottom", fill="x")

        self._git_lbl = tk.Label(self._git_bar, text="",
                                 font=self.f_ui, bg=C["surface"],
                                 fg=C["text2"])
        self._git_lbl.pack(side="left")

        self._btn_cancel_git = RoundedBtn(
            self._git_bar, "Annuler le commit",
            command=self._do_cancel,
            w=175, h=34, r=12,
            fill=C["error"], fg="white",
            font_spec=("Helvetica Neue", 12, "bold"),
        )
        self._btn_publish = RoundedBtn(
            self._git_bar, "Publier  (git push)",
            command=self._do_push,
            w=175, h=34, r=12,
            fill=C["success"], fg=C["bg"],
            font_spec=("Helvetica Neue", 12, "bold"),
        )
        Tooltip(self._btn_publish,    "git push → déploiement Vercel")
        Tooltip(self._btn_cancel_git, "git reset HEAD~1 (commit défait, fichiers conservés)")
        # Boutons masqués initialement (pas de commit en attente par défaut)
        self._git_bar_visible = False

    # ── Navigation entre sections ─────────────────────────────────────────────

    def _switch_section(self, name: str):
        """Affiche la section demandée et masque la section active."""
        if not self._sec_frames or name not in self._sec_frames:
            return
        if self._active_section == name:
            return
        self._hide_cal()
        self._sec_frames[self._active_section].pack_forget()
        self._sec_frames[name].pack(fill="both", expand=True)
        self._active_section = name
        self._nav_highlight(name)
        if name == "Journal":
            self._journal_reload()
        elif name == "Git":
            self._git_panel_refresh()

    def _nav_highlight(self, active_name: str):
        """Met à jour les couleurs de la barre de navigation selon la section active."""
        BG = C["sidebar"]
        for name, (row, icon_cv, text_lbl) in self._nav_rows.items():
            is_active = name == active_name
            rbg = C["surface"] if is_active else BG
            tfg = C["text"]    if is_active else C["text2"]
            row.config(bg=rbg)
            icon_cv.config(bg=rbg)      # MacOSIcon — juste le fond extérieur
            text_lbl.config(bg=rbg, fg=tfg)

    def _nav_hover(self, name: str, entering: bool):
        """Effet hover sur les onglets non actifs."""
        if name == self._active_section:
            return
        row, icon_cv, text_lbl = self._nav_rows[name]
        bg = C["surface2"] if entering else C["sidebar"]
        row.config(bg=bg)
        icon_cv.config(bg=bg)
        text_lbl.config(bg=bg)

    # ── Panneau Images ────────────────────────────────────────────────────────

    def _build_images_panel(self, parent):
        """Vue dédiée à la gestion des images (sans log terminal)."""
        hdr = tk.Frame(parent, bg=C["surface"], padx=18, pady=14)
        hdr.pack(fill="x")
        tk.Label(hdr, text="Images des articles",
                 font=self.f_head, bg=C["surface"], fg=C["text"]).pack(side="left")
        tk.Frame(parent, bg=C["sep"], height=1).pack(fill="x")

        body = tk.Frame(parent, bg=C["bg"])
        body.pack(fill="both", expand=True)

        inner = tk.Frame(body, bg=C["bg"])
        inner.place(relx=0.5, rely=0.42, anchor="center")

        tk.Label(inner, text="⊞", font=("Helvetica Neue", 52),
                 bg=C["bg"], fg=C["dim"]).pack()
        tk.Label(inner, text="Gestion des images",
                 font=self.f_head, bg=C["bg"], fg=C["text"]).pack(pady=(8, 4))
        tk.Label(inner,
                 text="Les images sont gérées dans l'onglet Publication.\n"
                      "Sélectionnez une date puis utilisez Coller ou Parcourir\n"
                      "pour associer une image à chaque article.",
                 font=self.f_ui, bg=C["bg"], fg=C["text3"],
                 justify="center").pack(pady=(0, 22))
        RoundedBtn(inner, "▶  Aller à Publication",
                   command=lambda: self._switch_section("Publication"),
                   w=200, h=36, r=10,
                   fill=C["accent"], fg="white",
                   font_spec=self.f_btn).pack()

    # ── Panneau Journal ────────────────────────────────────────────────────────

    def _build_journal_panel(self, parent):
        """Lecteur du fichier de log daily-post.log."""
        bar = tk.Frame(parent, bg=C["surface2"], padx=16, pady=6)
        bar.pack(fill="x")
        tk.Label(bar, text="Journal — daily-post.log",
                 font=self.f_sm, bg=C["surface2"], fg=C["text3"]).pack(side="left")
        rl = tk.Label(bar, text="↺  Rafraîchir", font=self.f_sm,
                      bg=C["surface2"], fg=C["text3"], cursor="hand2", padx=4)
        rl.pack(side="right")
        rl.bind("<Button-1>", lambda _: self._journal_reload())
        rl.bind("<Enter>",    lambda _: rl.config(fg=C["text"]))
        rl.bind("<Leave>",    lambda _: rl.config(fg=C["text3"]))

        tk.Frame(parent, bg=C["sep"], height=1).pack(fill="x")

        lf = tk.Frame(parent, bg=C["term"])
        lf.pack(fill="both", expand=True)

        sb = ttk.Scrollbar(lf, orient="vertical")
        sb.pack(side="right", fill="y")

        self._journal_log = tk.Text(
            lf, bg=C["term"], fg=C["log_text"],
            font=self.f_mono, wrap="word", relief="flat",
            padx=16, pady=12,
            yscrollcommand=sb.set, state="disabled",
            cursor="arrow",
        )
        self._journal_log.pack(fill="both", expand=True)
        sb.config(command=self._journal_log.yview)

        for tag, col in [("ok",   C["success"]), ("err",  C["error"]),
                          ("warn", C["warn"]),    ("info", C["info"]),
                          ("dim",  C["dim"]),     ("txt",  C["log_text"])]:
            self._journal_log.tag_config(tag, foreground=col)

    def _journal_reload(self):
        """Recharge le fichier de log dans le panneau Journal."""
        if not hasattr(self, "_journal_log"):
            return
        self._journal_log.config(state="normal")
        self._journal_log.delete("1.0", "end")
        try:
            p = Path(LOG_PATH)
            if p.exists():
                lines = p.read_text(encoding="utf-8", errors="replace").splitlines()[-600:]
                for ln in lines:
                    self._journal_log.insert("end", ln + "\n", line_tag(ln))
                self._journal_log.see("end")
            else:
                self._journal_log.insert("end",
                    f"(Aucun fichier de log trouvé : {LOG_PATH})\n", "dim")
        except Exception as exc:
            self._journal_log.insert("end", f"[Erreur lecture] {exc}\n", "err")
        self._journal_log.config(state="disabled")

    # ── Panneau Git ────────────────────────────────────────────────────────────

    def _build_git_panel(self, parent):
        """Historique Git et état du dépôt."""
        bar = tk.Frame(parent, bg=C["surface2"], padx=16, pady=6)
        bar.pack(fill="x")
        tk.Label(bar, text="Historique Git — origin/main",
                 font=self.f_sm, bg=C["surface2"], fg=C["text3"]).pack(side="left")
        rl = tk.Label(bar, text="↺  Rafraîchir", font=self.f_sm,
                      bg=C["surface2"], fg=C["text3"], cursor="hand2", padx=4)
        rl.pack(side="right")
        rl.bind("<Button-1>", lambda _: self._git_panel_refresh())
        rl.bind("<Enter>",    lambda _: rl.config(fg=C["text"]))
        rl.bind("<Leave>",    lambda _: rl.config(fg=C["text3"]))

        tk.Frame(parent, bg=C["sep"], height=1).pack(fill="x")

        lf = tk.Frame(parent, bg=C["term"])
        lf.pack(fill="both", expand=True)

        sb = ttk.Scrollbar(lf, orient="vertical")
        sb.pack(side="right", fill="y")

        self._git_panel_log = tk.Text(
            lf, bg=C["term"], fg=C["log_text"],
            font=self.f_mono, wrap="word", relief="flat",
            padx=16, pady=12,
            yscrollcommand=sb.set, state="disabled",
            cursor="arrow",
        )
        self._git_panel_log.pack(fill="both", expand=True)
        sb.config(command=self._git_panel_log.yview)

        for tag, col in [("ok",   C["success"]), ("err",  C["error"]),
                          ("warn", C["warn"]),    ("info", C["info"]),
                          ("dim",  C["dim"]),     ("txt",  C["log_text"])]:
            self._git_panel_log.tag_config(tag, foreground=col)

    def _git_panel_refresh(self):
        """Récupère log + statut git en thread, affiche dans le panneau Git."""
        if not hasattr(self, "_git_panel_log"):
            return

        def worker():
            parts = []
            # 25 derniers commits origin/main
            rc, out = git("log", "origin/main", "--format=%ci  %s", "-25")
            if rc == 0 and out.strip():
                parts.append(("── 25 derniers commits (origin/main) ──────────────────────────\n", "dim"))
                for ln in out.strip().splitlines():
                    tag = "ok" if "daily: add multilingual posts" in ln else "txt"
                    parts.append((ln + "\n", tag))
            # Commits locaux non pushés
            rc2, ahead = git("log", "origin/main..HEAD", "--oneline")
            parts.append(("\n── Commits locaux non pushés ───────────────────────────────────\n", "dim"))
            if rc2 == 0 and ahead.strip():
                for ln in ahead.strip().splitlines():
                    parts.append((ln + "\n", "warn"))
            else:
                parts.append(("  (aucun)\n", "ok"))
            # Statut working tree
            rc3, st = git("status", "--short")
            parts.append(("\n── Working tree ────────────────────────────────────────────────\n", "dim"))
            parts.append((st.strip() + "\n" if st.strip() else "  (propre)\n",
                           "txt" if st.strip() else "ok"))
            self.root.after(0, lambda: self._git_panel_apply(parts))

        threading.Thread(target=worker, daemon=True).start()

    def _git_panel_apply(self, parts):
        if not hasattr(self, "_git_panel_log"):
            return
        self._git_panel_log.config(state="normal")
        self._git_panel_log.delete("1.0", "end")
        for text, tag in parts:
            self._git_panel_log.insert("end", text, tag)
        self._git_panel_log.see("1.0")
        self._git_panel_log.config(state="disabled")

    # ── Raccourcis ────────────────────────────────────────────────────────────

    def _bind_shortcuts(self):
        for s in ("<Command-r>", "<Command-R>"):
            self.root.bind(s, lambda _: self._launch())
        for s in ("<Command-l>", "<Command-L>"):
            self.root.bind(s, lambda _: self._open_logs())
        self.root.bind("<Escape>", lambda _: self._hide_cal())

    # ── Helpers UI ────────────────────────────────────────────────────────────

    def _set_status(self, text: str, dot: str, ts: bool = True):
        self._stop_dot_anim()
        self._dot.config(fg=dot)
        self._slbl.config(text=text, fg=C["text2"])
        self._sts.config(
            text=f"— {datetime.now().strftime('%H:%M:%S')}" if ts else "")

    def _start_dot_anim(self):
        frames = [C["info"], "#0070DD", "#0A84FF", "#50AAFF"]
        self._dot_i = 0

        def tick():
            if not self._busy:
                return
            self._dot.config(fg=frames[self._dot_i % len(frames)])
            self._dot_i += 1
            self._dot_job = self.root.after(450, tick)

        tick()

    def _stop_dot_anim(self):
        if self._dot_job:
            self.root.after_cancel(self._dot_job)
            self._dot_job = None

    def _show_git_bar(self, show: bool, msg: str = ""):
        """Affiche ou masque les boutons d'action git. Le frame reste toujours visible."""
        self._git_lbl.config(text=msg)
        if show and not self._git_bar_visible:
            self._btn_publish.pack(side="right")
            self._btn_cancel_git.pack(side="right", padx=(0, 8))
            self._git_bar_visible = True
        elif not show and self._git_bar_visible:
            self._btn_publish.pack_forget()
            self._btn_cancel_git.pack_forget()
            self._git_bar_visible = False

    def _log_write(self, text: str, tag: str = "txt"):
        self._log.config(state="normal")
        self._log.insert("end", text, tag)
        self._log.see("end")
        self._log.config(state="disabled")

    def _log_clear(self):
        self._log.config(state="normal")
        self._log.delete("1.0", "end")
        self._log.config(state="disabled")

    def _refresh_hist(self):
        """Met à jour le label du dernier lancement (état interne). Thread principal uniquement."""
        h = self._state.get("history", [])
        if h:
            last = h[-1]
            ts   = last.get("ts", "")[:16].replace("T", " ")
            ok   = last.get("status") == "success"
            self._hist_lbl.config(
                text=f"{'✓' if ok else '✗'} {ts}",
                fg=C["success"] if ok else C["error"])

    def _fetch_git_push_bg(self):
        """Récupère la date du dernier push en thread, puis met à jour l'UI via after()."""
        push_date = last_git_push_date()
        self.root.after(0, lambda: self._apply_git_push_lbl(push_date))

    def _fetch_published_dates_bg(self):
        """Récupère les jours publiés en thread, met à jour le calendrier via after()."""
        dates = git_published_dates()
        self.root.after(0, lambda: self._cal_inline.set_published(dates))

    def _apply_git_push_lbl(self, push_date: str):
        """Applique la date de push dans la barre de statut et la sidebar (thread principal)."""
        try:
            if push_date:
                self._git_push_lbl.config(text=f"↑ push  {push_date}", fg=C["info"])
                self._sidebar_push_lbl.config(text=push_date, fg=C["info"])
            else:
                self._git_push_lbl.config(text="")
                self._sidebar_push_lbl.config(text="–", fg=C["text3"])
        except Exception:
            pass

    def _log_info_str(self) -> str:
        p = Path(LOG_PATH)
        if not p.exists():
            return ""
        kb = p.stat().st_size // 1024
        ts = datetime.fromtimestamp(p.stat().st_mtime).strftime("%d.%m %H:%M")
        return f"{p.name}  {kb} ko  ({ts})"

    # ── Champ date ────────────────────────────────────────────────────────────

    def _placeholder(self):
        if not self._date_var.get():
            self._date_entry.config(fg=C["text3"])
            self._date_entry.delete(0, "end")
            self._date_entry.insert(0, "YYYY-MM-DD")

    def _entry_focus_in(self, _=None):
        if self._date_entry.get() == "YYYY-MM-DD":
            self._date_entry.delete(0, "end")
            self._date_entry.config(fg=C["text"])

    def _entry_focus_out(self, _=None):
        val = self._date_entry.get().strip()
        if not val or val == "YYYY-MM-DD":
            self._date_var.set("")
            self._placeholder()
        else:
            self._date_entry.config(fg=C["text"])

    def _set_today(self):
        self._date_entry.config(fg=C["text"])
        self._date_var.set(date.today().strftime("%Y-%m-%d"))

    def _set_yesterday(self):
        self._date_entry.config(fg=C["text"])
        self._date_var.set((date.today() - timedelta(days=1)).strftime("%Y-%m-%d"))

    def _on_date_var_change(self, *_):
        """Rafraîchit les slots images dès que la date est valide."""
        val = self._date_var.get().strip()
        if re.match(r"^\d{4}-\d{2}-\d{2}$", val):
            # Petit délai pour ne pas rafraîchir à chaque frappe intermédiaire
            if hasattr(self, "_img_refresh_job"):
                self.root.after_cancel(self._img_refresh_job)
            self._img_refresh_job = self.root.after(
                400, lambda: self._refresh_images(val)
            )

    # ── Calendrier ────────────────────────────────────────────────────────────

    def _on_bg_click(self, event):
        """Ferme le calendrier si le clic est en dehors de lui (et pas dans le champ date)."""
        if not self._cal_visible:
            return
        w = event.widget
        # Le champ date et son wrapper gèrent eux-mêmes l'ouverture/fermeture
        if w is self._date_entry or w is self._date_wrap:
            return
        # Remonter l'arbre widget : si le clic est dans le calendrier, ne pas fermer
        node = w
        while node is not None:
            if node is self._cal_inline:
                return
            try:
                node = node.master
            except AttributeError:
                break
        self._hide_cal()

    def _toggle_cal(self):
        if self._cal_visible:
            self._hide_cal()
        else:
            self._show_cal()

    def _show_cal(self):
        raw = self._date_entry.get().strip()
        if re.match(r"^\d{4}-\d{2}-\d{2}$", raw):
            try:
                self._cal_inline.set_date(datetime.strptime(raw, "%Y-%m-%d").date())
            except ValueError:
                pass
        self.root.update_idletasks()
        # Positionnement sous le champ date (pas sous l'icône)
        ref = self._date_wrap
        wx  = ref.winfo_rootx() - self.root.winfo_rootx()
        wy  = ref.winfo_rooty() - self.root.winfo_rooty()
        bh  = ref.winfo_height()
        self._cal_inline.update_idletasks()
        cal_w = self._cal_inline.winfo_reqwidth() or 290
        rw    = self.root.winfo_width()
        x = min(wx, max(8, rw - cal_w - 10))
        y = wy + bh + 4
        self._cal_inline.place(x=x, y=y)
        self._cal_inline.lift()
        self._cal_visible = True

    def _hide_cal(self):
        if self._cal_inline:
            self._cal_inline.place_forget()
        self._cal_visible = False

    def _cal_pick(self, d: date):
        self._date_entry.config(fg=C["text"])
        self._date_var.set(d.strftime("%Y-%m-%d"))
        self._hide_cal()

    # ── Démarrage ─────────────────────────────────────────────────────────────

    def _startup_check(self):
        if has_pending_commit():
            self._log_write("── Commit local non pushé détecté ──────────────────\n", "bold")
            _, diff = git("show", "--stat", "HEAD")
            self._log_write(diff + "\n", "info")
            self._set_status("Commit en attente", C["warn"], ts=False)
            self._show_git_bar(True, "Commit local non pushé — choisissez une action.")
        else:
            self._set_status("Prêt", C["text3"], ts=False)

        # Rafraîchir le label du dernier push + jours publiés en arrière-plan
        threading.Thread(target=self._fetch_git_push_bg, daemon=True).start()
        threading.Thread(target=self._fetch_published_dates_bg, daemon=True).start()

        # Charger les images pour la date du jour par défaut
        today = date.today().strftime("%Y-%m-%d")
        self._date_var.set(today)   # déclenche le trace → _refresh_images

    # ── Lancement ─────────────────────────────────────────────────────────────

    def _launch(self, _=None):
        if self._busy:
            return
        raw      = self._date_entry.get().strip()
        date_val = raw if re.match(r"^\d{4}-\d{2}-\d{2}$", raw) else ""
        if raw and raw != "YYYY-MM-DD" and not date_val:
            messagebox.showerror("Date invalide",
                                 f"Format attendu : YYYY-MM-DD\nReçu : {raw}")
            return

        cmd = [PYTHON_PATH, "-u", SCRIPT_PATH, "--no-push"]
        if date_val:
            cmd += ["--date", date_val]

        excluded = self.get_excluded_articles()
        if excluded:
            cmd += ["--exclude", ",".join(str(n) for n in sorted(excluded))]

        self._log_clear()
        self._hide_cal()
        self._show_git_bar(False)
        self._summ_lbl.config(text="")
        self._summ = {}

        # Swap Lancer → Stop
        self._btn_launch.pack_forget()
        self._btn_stop.pack(side="right")

        self._prog.start(10)
        self._busy = True
        self._set_status("En cours...", C["info"])
        self._slbl.config(fg=C["info"])
        self._start_dot_anim()

        if self._env is None:
            self._log_write("  Chargement de l'environnement...\n", "dim")
            self._env = load_shell_env()
            if not self._env.get("DEEPL_API_KEY"):
                self._log_write(
                    "  [ERREUR] DEEPL_API_KEY introuvable dans ~/.zprofile / ~/.zshrc\n",
                    "err")
                self._reset_btn()
                self._set_status("Configuration manquante", C["error"])
                return

        Path(LOG_DIR).mkdir(parents=True, exist_ok=True)
        threading.Thread(target=self._run_script, args=(cmd,), daemon=True).start()

    def _stop_process(self):
        if self._proc and self._proc.poll() is None:
            self._log_write("\n  [INFO] Interruption demandée...\n", "warn")
            try:
                self._proc.terminate()
                self.root.after(3000, self._force_kill)
            except Exception as exc:
                self._log_write(f"  [ERREUR] {exc}\n", "err")

    def _force_kill(self):
        if self._proc and self._proc.poll() is None:
            try:
                self._proc.kill()
                self._log_write("  [WARN] Processus tué (SIGKILL).\n", "warn")
            except Exception:
                pass

    def _reset_btn(self):
        self._busy = False
        self._prog.stop()
        self._btn_stop.pack_forget()
        self._btn_launch.pack(side="right")
        self._btn_launch.set_fill(C["accent"])

    def _reset_btn_safe(self):
        """Fallback minimal — utilisé si _on_finish crash."""
        try:
            self._busy = False
            self._prog.stop()
            self._btn_stop.pack_forget()
            self._btn_launch.pack(side="right")
        except Exception:
            pass

    # ── Thread ────────────────────────────────────────────────────────────────

    def _run_script(self, cmd: list):
        try:
            ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            hdr = f'\n{"─"*60}\n[{ts}]\n{" ".join(cmd)}\n{"─"*60}\n'
            with open(LOG_PATH, "a", encoding="utf-8") as lf:
                lf.write(hdr)
                self._q.put((hdr, "dim"))
                proc = subprocess.Popen(
                    cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                    env=self._env, text=True, bufsize=1,
                )
                self._proc = proc
                for line in proc.stdout:
                    lf.write(line)
                    lf.flush()
                    self._q.put((line, line_tag(line)))
                    m = re.match(r"\[SUMMARY\]\s+(\w+)=(.*)", line)
                    if m:
                        self._summ[m.group(1)] = m.group(2).strip()
                proc.wait()
                self._summ["_rc"] = str(proc.returncode)
                lf.write(f"\n[Exit code: {proc.returncode}]\n")
        except Exception as exc:
            self._q.put((f"\n[ERREUR INTERNE] {exc}\n", "err"))
            self._summ["_rc"] = "1"
        self._q.put(None)

    def _poll(self):
        try:
            while True:
                item = self._q.get_nowait()
                if item is None:
                    try:
                        self._on_finish()
                    except Exception as exc:
                        import traceback
                        self._log_write(f"\n[ERREUR _on_finish] {exc}\n{traceback.format_exc()}\n", "err")
                        self._reset_btn_safe()
                    break
                self._log_write(item[0], item[1])
        except queue.Empty:
            pass
        self.root.after(50, self._poll)

    # ── Fin du run ────────────────────────────────────────────────────────────

    def _on_finish(self):
        self._reset_btn()
        if hasattr(self, "_log_info"):
            self._log_info.config(text=self._log_info_str())

        rc = int(self._summ.get("_rc", "1"))
        ok = rc == 0
        self._set_status("Succès" if ok else "Erreur",
                         C["success"] if ok else C["error"])
        self._slbl.config(fg=C["text2"])

        parts = []
        for k, lbl in [("posts", "posts"), ("langs", "langues"),
                        ("inserted", "insérés"), ("skipped", "skippés")]:
            if k in self._summ:
                parts.append(f"{self._summ[k]} {lbl}")
        if parts:
            self._summ_lbl.config(text="  ·  ".join(parts), fg=C["text2"])

        h = self._state.setdefault("history", [])
        h.append({"ts": datetime.now().isoformat(),
                  "status": "success" if ok else "error",
                  "summary": dict(self._summ)})
        self._state["history"] = h[-10:]
        save_state(self._state)
        self._refresh_hist()
        # Rafraîchit la date de push et les jours publiés en arrière-plan
        threading.Thread(target=self._fetch_git_push_bg, daemon=True).start()
        threading.Thread(target=self._fetch_published_dates_bg, daemon=True).start()

        if ok and has_pending_commit():
            _, diff = git("show", "--stat", "HEAD")
            self._log_write("\n── Diff du commit local ────────────────────────────\n", "bold")
            self._log_write(diff + "\n", "info")
            self._show_git_bar(True, "Commit créé — validez avant de publier.")
        elif ok:
            self._set_status("Aucun changement", C["text3"])

    # ── Git ───────────────────────────────────────────────────────────────────

    def _do_push(self):
        if not messagebox.askyesno(
                "Publier",
                "Pousser vers le dépôt distant ?\n\nCela déclenche le déploiement Vercel."):
            return
        self._set_status("Publication...", C["info"])
        self._log_write("\n── git push ────────────────────────────────────────\n", "bold")

        def worker():
            rc, out = git("push", timeout=120)
            self.root.after(0, lambda: self._push_done(rc, out))

        threading.Thread(target=worker, daemon=True).start()

    def _push_done(self, rc: int, out: str):
        self._log_write(out or "  (pas de sortie)\n", "ok" if rc == 0 else "err")
        if rc == 0:
            self._log_write("  [OK] Push réussi. Déploiement en cours.\n", "ok")
            self._set_status("Publié", C["success"])
            self._show_git_bar(False)
        else:
            self._set_status("Erreur push", C["error"])

    def _do_cancel(self):
        if not messagebox.askyesno(
                "Annuler le commit",
                "Défaire le dernier commit local ?\n\n"
                "git reset HEAD~1\n\n"
                "Les fichiers restent modifiés dans le working tree."):
            return
        self._set_status("Annulation...", C["warn"])
        self._log_write("\n── git reset HEAD~1 ────────────────────────────────\n", "bold")

        def worker():
            rc, out = git("reset", "HEAD~1")
            self.root.after(0, lambda: self._cancel_done(rc, out))

        threading.Thread(target=worker, daemon=True).start()

    def _cancel_done(self, rc: int, out: str):
        self._log_write(out or "  (pas de sortie)\n", "ok" if rc == 0 else "err")
        if rc == 0:
            self._log_write("  [OK] Commit annulé.\n", "ok")
            self._set_status("Commit annulé", C["text3"])
            self._show_git_bar(False)
        else:
            self._set_status("Erreur reset", C["error"])

    def _open_logs(self, _=None):
        if os.path.exists(LOG_PATH):
            subprocess.run(["open", "-a", "TextEdit", LOG_PATH])
        else:
            messagebox.showinfo("Logs", f"Aucun fichier de log.\n{LOG_PATH}")


# ── Point d'entrée ─────────────────────────────────────────────────────────────

def main():
    root = tk.Tk()
    try:
        ttk.Style().theme_use("aqua")
    except Exception:
        pass

    try:
        app = PublisherApp(root)
    except Exception:
        import traceback
        messagebox.showerror("Erreur de démarrage", traceback.format_exc())
        root.destroy()
        return

    def on_close():
        if app._busy and not messagebox.askyesno(
                "Fermer", "Un script est en cours.\nFermer quand même ?"):
            return
        root.destroy()

    root.protocol("WM_DELETE_WINDOW", on_close)
    root.mainloop()


if __name__ == "__main__":
    main()
