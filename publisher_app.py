#!/usr/bin/env python3
"""
publisher_app.py v4 — Interface épurée, dark mode macOS, boutons arrondis
espanolesensuiza.ch Publisher
"""

import calendar
import io
import json
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

APP_W, APP_H = 900, 740

# ── Palette — macOS system dark (sobre, lisible) ───────────────────────────────

C = {
    "accent":      "#D93050",  # rouge sobre, pas neon
    "accent_dk":   "#B02540",
    "accent_glow": "#2A0F18",  # fond hover sombre
    "bg":          "#1C1C1E",  # fond principal
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


# ── Bouton arrondi (Canvas) ────────────────────────────────────────────────────

class RoundedBtn(tk.Canvas):
    """Bouton avec coins arrondis rendus via Canvas — couleurs garanties sur macOS."""

    def __init__(self, parent, text: str, command,
                 w: int = 140, h: int = 34, r: int = 10,
                 fill: str = C["accent"], fg: str = "white",
                 hover: str | None = None,
                 font_spec=("Helvetica Neue", 13, "bold"), **kw):
        parent_bg = parent.cget("bg")
        super().__init__(parent, width=w, height=h,
                         highlightthickness=0, bd=0,
                         bg=parent_bg, cursor="hand2", **kw)
        self._text   = text
        self._cmd    = command
        self._r      = r
        self._fill   = fill
        self._hover  = hover or _darken(fill)
        self._fg     = fg
        self._font   = font_spec
        self._bw     = w   # NE PAS utiliser self._w — c'est l'attribut Tcl de BaseWidget
        self._bh     = h
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
        w, h, r = self._bw, self._bh, self._r
        # Corps
        self.create_rectangle(r, 0, w - r, h, fill=fill, outline="")
        self.create_rectangle(0, r, w, h - r, fill=fill, outline="")
        # Coins arrondis
        for x, y, start in [(0, 0, 90), (w-2*r, 0, 0),
                             (0, h-2*r, 180), (w-2*r, h-2*r, 270)]:
            self.create_arc(x, y, x+2*r, y+2*r, start=start, extent=90,
                            fill=fill, outline="")
        # Texte
        self.create_text(w // 2, h // 2, text=self._text,
                         fill=self._fg, font=self._font, anchor="center")

    def set_text(self, text: str):
        self._text = text
        self._paint(self._fill)

    def set_fill(self, fill: str):
        self._fill  = fill
        self._hover = _darken(fill)
        self._paint(fill)

    def set_enabled(self, enabled: bool):
        self._active = enabled
        self._paint(self._fill if enabled else C["dim"])
        self.config(cursor="hand2" if enabled else "arrow")


# ── Pill (badge texte arrondi) ─────────────────────────────────────────────────

class Pill(tk.Canvas):
    """Petit badge aux coins arrondis, cliquable."""

    def __init__(self, parent, text: str, command=None,
                 fill: str = C["input"], fg: str = C["text2"],
                 h: int = 26, r: int = 7,
                 font_spec=("Helvetica Neue", 12), **kw):
        parent_bg = parent.cget("bg")
        # Mesure du texte via tkfont — pas de widget temporaire (évite ID Tcl corrompu)
        _fnt_args = {"family": font_spec[0], "size": font_spec[1]}
        if len(font_spec) > 2:
            _fnt_args["weight"] = font_spec[2]
        _fnt = tkfont.Font(**_fnt_args)
        tw = _fnt.measure(text)
        w = tw + 24

        super().__init__(parent, width=w, height=h,
                         highlightthickness=0, bd=0,
                         bg=parent_bg,
                         cursor="hand2" if command else "arrow", **kw)
        self._text  = text
        self._cmd   = command
        self._r     = r
        self._fill  = fill
        self._hover = _darken(fill, 0.85) if command else fill
        self._fg    = fg
        self._font  = font_spec
        self._bw    = w   # NE PAS utiliser self._w — c'est l'attribut Tcl de BaseWidget
        self._bh    = h

        self._paint(fill)
        if command:
            self.bind("<Button-1>", lambda _: command())
            self.bind("<Enter>",    lambda _: self._paint(self._hover))
            self.bind("<Leave>",    lambda _: self._paint(self._fill))

    def _paint(self, fill: str):
        self.delete("all")
        w, h, r = self._bw, self._bh, self._r
        self.create_rectangle(r, 0, w-r, h, fill=fill, outline="")
        self.create_rectangle(0, r, w, h-r, fill=fill, outline="")
        for x, y, s in [(0,0,90),(w-2*r,0,0),(0,h-2*r,180),(w-2*r,h-2*r,270)]:
            self.create_arc(x, y, x+2*r, y+2*r, start=s, extent=90,
                            fill=fill, outline="")
        self.create_text(w//2, h//2, text=self._text,
                         fill=self._fg, font=self._font, anchor="center")


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
        self.callback = callback
        self.selected = initial or date.today()
        self.vy = self.selected.year
        self.vm = self.selected.month

        self._inner = tk.Frame(self, bg=C["surface"])
        self._inner.pack(padx=1, pady=1)
        self._build()
        self._render()

    def set_date(self, d: date):
        self.selected = d
        self.vy, self.vm = d.year, d.month
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
            fg = C["accent"] if is_wkend else C["text"]
            outer = tk.Frame(self._grid, bg=C["surface"])
            outer.grid(row=r, column=c, padx=2, pady=2)
            lbl = tk.Label(outer, text=str(day),
                           bg=C["surface"], fg=fg,
                           font=("Helvetica Neue", 12),
                           width=2, anchor="center", cursor="hand2")
            lbl.pack()

        hover_bg = C["input"]
        restore  = C["accent"] if is_sel else C["surface"]

        def on_enter(_, o=outer):
            for w in _widgets(o):
                try: w.config(bg=hover_bg)
                except Exception: pass

        def on_leave(_, o=outer, bg=restore):
            for w in _widgets(o):
                try: w.config(bg=bg)
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
        self.root.minsize(780, 580)
        self.root.configure(bg=C["bg"])

        self._q            = queue.Queue()
        self._proc         = None
        self._busy         = False
        self._env          = None
        self._state        = load_state()
        self._summ         = {}
        self._cal_inline   = None
        self._cal_visible  = False
        self._dot_job      = None

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
        self._build_header()
        self._hsep()
        self._build_controls()
        self._hsep()
        self._build_image_section()   # ← nouvelle section images
        self._hsep()
        self._build_log()
        self._hsep()
        self._build_statusbar()
        self._hsep()
        self._build_git_bar()
        # Calendrier overlay (créé une seule fois)
        self._cal_inline = InlineCalendar(self.root,
                                          callback=self._cal_pick)

    def _hsep(self):
        tk.Frame(self.root, bg=C["sep"], height=1).pack(fill="x")

    # ── Header ────────────────────────────────────────────────────────────────

    def _build_header(self):
        hdr = tk.Frame(self.root, bg=C["surface"], padx=18, pady=11)
        hdr.pack(fill="x")

        # Logo
        AppLogo(hdr, size=38, bg=C["surface"]).pack(side="left", padx=(0, 12))

        # Titre
        tc = tk.Frame(hdr, bg=C["surface"])
        tc.pack(side="left")
        tk.Label(tc, text="espanolesensuiza.ch",
                 font=self.f_head, bg=C["surface"],
                 fg=C["text"]).pack(anchor="w")
        tk.Label(tc, text="Publication multilingue automatisée",
                 font=self.f_sm, bg=C["surface"],
                 fg=C["text3"]).pack(anchor="w")

        # Statut (droite)
        sf = tk.Frame(hdr, bg=C["surface"])
        sf.pack(side="right")
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
        ctrl = tk.Frame(self.root, bg=C["surface"], padx=18, pady=12)
        ctrl.pack(fill="x")

        # ── Gauche ──
        left = tk.Frame(ctrl, bg=C["surface"])
        left.pack(side="left")

        # Champ date
        self._date_var   = tk.StringVar()
        self._date_var.trace_add("write", self._on_date_var_change)
        date_wrap = tk.Frame(left, bg=C["input"], padx=1, pady=1)
        date_wrap.pack(side="left")
        self._date_entry = tk.Entry(
            date_wrap, textvariable=self._date_var,
            width=11, font=self.f_mono, bd=0, relief="flat",
            fg=C["text"], bg=C["input"],
            insertbackground=C["accent"],
            highlightthickness=0,
        )
        self._date_entry.pack(padx=8, pady=4)
        self._date_entry.bind("<Return>",   lambda _: self._launch())
        self._date_entry.bind("<FocusIn>",  self._entry_focus_in)
        self._date_entry.bind("<FocusOut>", self._entry_focus_out)
        self._placeholder()

        # Bordure focus simulée
        date_wrap.bind("<FocusIn>", lambda _:
                       date_wrap.config(bg=C["accent"]))

        # Bouton calendrier
        cal_wrap = tk.Frame(left, bg=C["input"],
                            padx=6, pady=5, cursor="hand2")
        cal_wrap.pack(side="left", padx=(4, 12))
        CalIcon(cal_wrap, size=18, bg=C["input"]).pack()
        for w in (cal_wrap, cal_wrap.winfo_children()[0] if cal_wrap.winfo_children() else cal_wrap):
            pass
        cal_wrap.bind("<Button-1>", lambda _: self._toggle_cal())
        for child in cal_wrap.winfo_children():
            child.bind("<Button-1>", lambda _: self._toggle_cal())
        cal_wrap.bind("<Enter>", lambda _: cal_wrap.config(bg=C["dim"]))
        cal_wrap.bind("<Leave>", lambda _: cal_wrap.config(bg=C["input"]))
        self._cal_wrap = cal_wrap
        Tooltip(cal_wrap, "Choisir une date  (clic)")

        # Quick pills
        Pill(left, "Aujourd'hui", command=self._set_today,
             fill=C["accent"], fg="white", h=28).pack(side="left", padx=(0, 5))
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
        hdr = tk.Frame(self.root, bg=C["surface"], padx=18, pady=8)
        hdr.pack(fill="x")
        tk.Label(hdr, text="Images des articles",
                 font=self.f_sm, bg=C["surface"], fg=C["text3"]).pack(side="left")
        self._img_hint = tk.Label(hdr, text="", font=self.f_sm,
                                  bg=C["surface"], fg=C["text3"])
        self._img_hint.pack(side="right")

        # ── Corps ──
        body = tk.Frame(self.root, bg=C["surface2"], padx=18, pady=10)
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
        bar = tk.Frame(self.root, bg=C["surface2"], padx=16, pady=5)
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
        lf = tk.Frame(self.root, bg=C["term"])
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
        sb = tk.Frame(self.root, bg=C["surface2"], padx=16, pady=7)
        sb.pack(fill="x")

        self._summ_lbl = tk.Label(sb, text="", font=self.f_sm,
                                  bg=C["surface2"], fg=C["text2"])
        self._summ_lbl.pack(side="left")

        self._hist_lbl = tk.Label(sb, text="", font=self.f_sm,
                                  bg=C["surface2"], fg=C["text3"])
        self._hist_lbl.pack(side="right")
        self._refresh_hist()

        # Info log (centre)
        self._log_info = tk.Label(sb, text=self._log_info_str(),
                                  font=self.f_sm, bg=C["surface2"],
                                  fg=C["text3"])
        self._log_info.pack(side="right", padx=(0, 20))

    # ── Barre git ──────────────────────────────────────────────────────────────

    def _build_git_bar(self):
        self._git_bar = tk.Frame(self.root, bg=C["surface"],
                                 padx=16, pady=10)
        self._git_bar.pack(fill="x")

        self._git_lbl = tk.Label(self._git_bar, text="",
                                 font=self.f_ui, bg=C["surface"],
                                 fg=C["text2"])
        self._git_lbl.pack(side="left")

        self._btn_cancel_git = RoundedBtn(
            self._git_bar, "Annuler le commit",
            command=self._do_cancel,
            w=175, h=34, r=10,
            fill=C["error"], fg="white",
            font_spec=("Helvetica Neue", 12, "bold"),
        )
        self._btn_publish = RoundedBtn(
            self._git_bar, "Publier  (git push)",
            command=self._do_push,
            w=175, h=34, r=10,
            fill=C["success"], fg=C["bg"],
            font_spec=("Helvetica Neue", 12, "bold"),
        )
        Tooltip(self._btn_publish,    "git push → déploiement Vercel")
        Tooltip(self._btn_cancel_git, "git reset HEAD~1 (commit défait, fichiers conservés)")
        self._show_git_bar(False)

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
        self._git_lbl.config(text=msg)
        if show:
            self._btn_publish.pack(side="right")
            self._btn_cancel_git.pack(side="right", padx=(0, 8))
        else:
            self._btn_publish.pack_forget()
            self._btn_cancel_git.pack_forget()

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
        h = self._state.get("history", [])
        if h:
            last = h[-1]
            ts   = last.get("ts", "")[:16].replace("T", " ")
            ok   = last.get("status") == "success"
            self._hist_lbl.config(
                text=f"{'✓' if ok else '✗'} {ts}",
                fg=C["success"] if ok else C["error"])

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
        wx = self._cal_wrap.winfo_rootx() - self.root.winfo_rootx()
        wy = self._cal_wrap.winfo_rooty() - self.root.winfo_rooty()
        bh = self._cal_wrap.winfo_height()
        self._cal_inline.update_idletasks()
        cal_w = self._cal_inline.winfo_reqwidth() or 290
        rw = self.root.winfo_width()
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
