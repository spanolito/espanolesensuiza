#!/usr/bin/env python3
"""
publisher_app.py v2 — Dashboard de publication pour espanolesensuiza.ch
Nouveautés : calendrier popup, logo intégré, raccourcis clavier, tooltips,
             boutons rapides, historique des runs.
"""

import calendar
import json
import os
import queue
import re
import subprocess
import threading
from datetime import date, datetime, timedelta
from pathlib import Path
import tkinter as tk
from tkinter import ttk, messagebox
from tkinter import font as tkfont

# ── Configuration ──────────────────────────────────────────────────────────────

SCRIPT_PATH = "/Users/oscarandujar/Projets/espanolesensuiza/scripts/publish_daily_posts.py"
PYTHON_PATH = "/Library/Frameworks/Python.framework/Versions/3.13/bin/python3"
LOG_DIR     = "/Users/oscarandujar/Projets/espanolesensuiza/logs"
LOG_PATH    = f"{LOG_DIR}/daily-post.log"
SITE_DIR    = "/Users/oscarandujar/Projets/espanolesensuiza"
STATE_FILE  = os.path.expanduser("~/.espanolesensuiza_publisher.json")

APP_W, APP_H = 940, 780

# ── Palette ────────────────────────────────────────────────────────────────────

C = {
    "red":        "#DC143C",
    "red_dark":   "#A50E2D",
    "red_light":  "#FFE8ED",
    "gold":       "#C8A400",
    "bg_dark":    "#1E1E2E",
    "bg_term":    "#16162A",
    "bg_light":   "#F5F5F7",
    "bg_white":   "#FFFFFF",
    "bg_bar":     "#EFEFEF",
    "text_log":   "#CDD6F4",
    "success":    "#A6E3A1",
    "error":      "#F38BA8",
    "warn":       "#FAB387",
    "info":       "#89B4FA",
    "accent":     "#CBA6F7",
    "dim":        "#6C7086",
    "text":       "#1A1A2E",
    "text_mid":   "#444444",
    "text_muted": "#888888",
    "sep":        "#D8D8D8",
}

# ── Helpers système ────────────────────────────────────────────────────────────

def load_shell_env() -> dict:
    try:
        script = "source ~/.zprofile 2>/dev/null; source ~/.zshrc 2>/dev/null; env -0"
        out = subprocess.run(
            ["bash", "-lc", script], capture_output=True, text=True, timeout=15
        ).stdout
        shell_env = {}
        for kv in out.split("\0"):
            if "=" in kv:
                k, _, v = kv.partition("=")
                shell_env[k] = v
        return {**os.environ, **shell_env}
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
    r = subprocess.run(
        ["git", "-C", SITE_DIR] + list(args),
        capture_output=True, text=True, timeout=timeout
    )
    return r.returncode, (r.stdout + r.stderr)


def has_pending_commit() -> bool:
    rc, out = git("log", "origin/main..HEAD", "--oneline")
    return rc == 0 and bool(out.strip())


def line_tag(line: str) -> str:
    if any(x in line for x in ("[OK]", "── Terminé", "Terminé", "insérés", "status=success", "Push réussi")):
        return "success"
    if any(x in line for x in ("[ERREUR]", "Error", "Erreur", "ERREUR", "error", "ERROR")):
        return "error"
    if any(x in line for x in ("[SKIP]", "[STOP]", "[RETRY]", "[INFO]", "DRY RUN")):
        return "warn"
    if "[SUMMARY]" in line:
        return "info"
    if "──" in line or "═" in line:
        return "dim"
    return "txt"


# ── Logo (dessiné avec Canvas tkinter) ────────────────────────────────────────

class AppLogo(tk.Canvas):
    """Croix suisse rouge avec "ES" en or — identité visuelle espanolesensuiza.ch."""

    def __init__(self, parent, size: int = 48, bg: str = C["bg_light"], **kw):
        super().__init__(parent, width=size, height=size,
                         highlightthickness=0, bg=bg, **kw)
        self._size = size
        self._draw()

    def _draw(self):
        s = self._size
        m = s * 0.04

        # Cercle rouge (fond)
        self.create_oval(m, m, s - m, s - m, fill=C["red"], outline="")

        # Ombre légère (arc intérieur)
        self.create_oval(m + 1, m + 1, s - m - 1, s - m - 1,
                         fill="", outline="#A50E2D", width=1)

        # Croix suisse blanche
        cx, cy = s / 2, s / 2
        al = s * 0.295   # demi-longueur des bras
        aw = s * 0.115   # demi-largeur des bras

        self.create_rectangle(cx - al, cy - aw, cx + al, cy + aw,
                              fill="white", outline="")
        self.create_rectangle(cx - aw, cy - al, cx + aw, cy + al,
                              fill="white", outline="")

        # "ES" en or (badge identité)
        fs = max(6, int(s * 0.165))
        self.create_text(s * 0.695, s * 0.735,
                         text="ES",
                         fill="#FFD700",
                         font=("Helvetica Neue", fs, "bold"))


# ── Tooltip ───────────────────────────────────────────────────────────────────

class Tooltip:
    """Bulle d'aide contextuelle au survol."""

    def __init__(self, widget, text: str, delay: int = 600):
        self._w     = widget
        self._text  = text
        self._delay = delay
        self._tip   = None
        self._job   = None
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
        tk.Label(
            self._tip, text=self._text,
            bg="#FFFFCC", fg="#333333",
            relief="solid", bd=1,
            font=("Helvetica Neue", 10),
            padx=8, pady=4
        ).pack()
        self._tip.geometry(f"+{x}+{y}")


# ── Calendrier popup ───────────────────────────────────────────────────────────

class CalendarPopup(tk.Toplevel):
    """Sélecteur de date compact, style macOS."""

    JOURS   = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"]
    MOIS    = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
               "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

    def __init__(self, parent, callback, anchor, initial: date | None = None):
        super().__init__(parent)
        self.callback   = callback
        self.selected   = initial or date.today()
        self.vy         = self.selected.year
        self.vm         = self.selected.month

        self.overrideredirect(True)
        self.configure(bg=C["sep"])
        self.attributes("-topmost", True)

        inner = tk.Frame(self, bg=C["bg_white"])
        inner.pack(fill="both", expand=True, padx=1, pady=1)
        self._f = inner

        self._build()
        self._render()
        self._place(anchor)

        self.bind("<Escape>", lambda _: self.destroy())
        self.bind("<FocusOut>", self._on_focus_out)
        self.focus_set()

    def _place(self, widget):
        self.update_idletasks()
        x = widget.winfo_rootx()
        y = widget.winfo_rooty() + widget.winfo_height() + 5
        sw = widget.winfo_screenwidth()
        w  = self.winfo_reqwidth()
        if x + w > sw - 10:
            x = sw - w - 10
        self.geometry(f"+{x}+{y}")

    def _on_focus_out(self, event):
        # Fermer si focus perdu vers l'extérieur
        try:
            focused = self.focus_get()
            if str(focused).startswith(str(self)):
                return
        except Exception:
            pass
        self.after(100, lambda: self.destroy() if self.winfo_exists() else None)

    def _build(self):
        f = self._f

        # ── Barre de navigation mois ──
        nav = tk.Frame(f, bg=C["bg_bar"])
        nav.pack(fill="x")

        tk.Button(nav, text="◀", font=("Helvetica Neue", 13, "bold"),
                  bg=C["bg_bar"], fg=C["red"], relief="flat",
                  activebackground=C["red_light"], cursor="hand2",
                  bd=0, padx=10, pady=6,
                  command=self._prev).pack(side="left")

        self._hdr_lbl = tk.Label(nav, text="",
                                 font=("Helvetica Neue", 12, "bold"),
                                 bg=C["bg_bar"], fg=C["text"])
        self._hdr_lbl.pack(side="left", expand=True)

        tk.Button(nav, text="▶", font=("Helvetica Neue", 13, "bold"),
                  bg=C["bg_bar"], fg=C["red"], relief="flat",
                  activebackground=C["red_light"], cursor="hand2",
                  bd=0, padx=10, pady=6,
                  command=self._next).pack(side="right")

        # ── En-têtes jours de la semaine ──
        drow = tk.Frame(f, bg=C["bg_white"], pady=4, padx=10)
        drow.pack(fill="x")
        for i, d in enumerate(self.JOURS):
            fg = C["red"] if i >= 5 else C["text_muted"]
            tk.Label(drow, text=d, width=3,
                     font=("Helvetica Neue", 9, "bold"),
                     fg=fg, bg=C["bg_white"]).grid(row=0, column=i, padx=2)

        # ── Grille des jours ──
        self._grid = tk.Frame(f, bg=C["bg_white"], padx=10, pady=4)
        self._grid.pack()

        # ── Pied : bouton Aujourd'hui ──
        tk.Frame(f, bg=C["sep"], height=1).pack(fill="x")
        tk.Button(f, text="📅  Aujourd'hui", cursor="hand2",
                  font=("Helvetica Neue", 10), fg=C["red"],
                  bg=C["bg_white"], activeforeground=C["red_dark"],
                  activebackground=C["red_light"],
                  relief="flat", pady=7,
                  command=lambda: self._select(date.today())).pack(fill="x")

    def _render(self):
        for w in self._grid.winfo_children():
            w.destroy()

        self._hdr_lbl.config(text=f"{self.MOIS[self.vm - 1]}  {self.vy}")

        today = date.today()
        for r, week in enumerate(calendar.monthcalendar(self.vy, self.vm)):
            for c, day in enumerate(week):
                if day == 0:
                    tk.Label(self._grid, text="", width=3,
                             bg=C["bg_white"]).grid(row=r, column=c, padx=2, pady=2)
                    continue

                d        = date(self.vy, self.vm, day)
                is_sel   = (d == self.selected)
                is_today = (d == today)
                is_wkend = (c >= 5)

                if is_sel:
                    bg, fg, fw = C["red"], "white", "bold"
                elif is_today:
                    bg, fg, fw = C["red_light"], C["red"], "bold"
                elif is_wkend:
                    bg, fg, fw = C["bg_white"], C["red"], "normal"
                else:
                    bg, fg, fw = C["bg_white"], C["text"], "normal"

                tk.Button(
                    self._grid, text=str(day), width=3,
                    font=("Helvetica Neue", 10, fw),
                    bg=bg, fg=fg, relief="flat", bd=0,
                    activebackground=C["red_light"], activeforeground=C["red"],
                    cursor="hand2",
                    command=lambda d=d: self._select(d)
                ).grid(row=r, column=c, padx=2, pady=2)

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
        self.callback(d)
        self.destroy()


# ── Application principale ─────────────────────────────────────────────────────

class PublisherApp:

    def __init__(self, root: tk.Tk):
        self.root   = root
        self.root.title("espanolesensuiza.ch — Publication")
        self.root.geometry(f"{APP_W}x{APP_H}")
        self.root.resizable(True, True)
        self.root.minsize(780, 580)
        self.root.configure(bg=C["bg_light"])

        self._q      = queue.Queue()
        self._proc   = None
        self._busy   = False
        self._env    = None
        self._state  = load_state()
        self._summ   = {}
        self._cal_w  = None
        self._dot_anim_job = None

        self._init_fonts()
        self._build_ui()
        self._bind_shortcuts()
        self._startup_check()
        self._poll()

    # ── Polices ───────────────────────────────────────────────────────────────

    def _init_fonts(self):
        self.f_mono   = tkfont.Font(family="Menlo",          size=11)
        self.f_mono_b = tkfont.Font(family="Menlo",          size=11, weight="bold")
        self.f_ui     = tkfont.Font(family="Helvetica Neue", size=12)
        self.f_small  = tkfont.Font(family="Helvetica Neue", size=11)
        self.f_head   = tkfont.Font(family="Helvetica Neue", size=16, weight="bold")
        self.f_label  = tkfont.Font(family="Helvetica Neue", size=10)
        self.f_btn    = tkfont.Font(family="Helvetica Neue", size=11, weight="bold")
        self.f_tag    = tkfont.Font(family="Helvetica Neue", size=9,  weight="bold")

    # ── Construction UI ───────────────────────────────────────────────────────

    def _build_ui(self):
        self._build_header()
        tk.Frame(self.root, bg=C["sep"], height=1).pack(fill="x")
        self._build_controls()
        tk.Frame(self.root, bg=C["sep"], height=1).pack(fill="x")
        self._build_log_area()
        tk.Frame(self.root, bg=C["sep"], height=1).pack(fill="x")
        self._build_bottom_bar()
        tk.Frame(self.root, bg=C["sep"], height=1).pack(fill="x")
        self._build_git_bar()

    # ── Header ────────────────────────────────────────────────────────────────

    def _build_header(self):
        hdr = tk.Frame(self.root, bg=C["bg_light"], pady=13, padx=18)
        hdr.pack(fill="x")

        # Logo
        AppLogo(hdr, size=50, bg=C["bg_light"]).pack(side="left", padx=(0, 12))

        # Titre + sous-titre
        tc = tk.Frame(hdr, bg=C["bg_light"])
        tc.pack(side="left")
        tk.Label(tc, text="espanolesensuiza.ch",
                 font=self.f_head, bg=C["bg_light"], fg=C["text"]).pack(anchor="w")
        tk.Label(tc, text="Publication multilingue · ES · FR · EN · DE · IT",
                 font=self.f_label, bg=C["bg_light"], fg=C["text_muted"]).pack(anchor="w")

        # Statut (droite)
        sf = tk.Frame(hdr, bg=C["bg_light"])
        sf.pack(side="right", padx=(0, 4))

        self._dot = tk.Label(sf, text="●", fg=C["text_muted"], bg=C["bg_light"],
                             font=tkfont.Font(family="Helvetica Neue", size=15))
        self._dot.pack(side="left")
        self._slbl = tk.Label(sf, text="Prêt", fg=C["text_mid"],
                              bg=C["bg_light"], font=self.f_small)
        self._slbl.pack(side="left", padx=(5, 0))
        self._sts = tk.Label(sf, text="", fg=C["text_muted"],
                             bg=C["bg_light"], font=self.f_label)
        self._sts.pack(side="left", padx=(8, 0))

    # ── Barre de contrôles ────────────────────────────────────────────────────

    def _build_controls(self):
        ctrl = tk.Frame(self.root, bg=C["bg_white"], pady=11, padx=18)
        ctrl.pack(fill="x")

        # ── Gauche : date + calendrier ──
        left = tk.Frame(ctrl, bg=C["bg_white"])
        left.pack(side="left")

        tk.Label(left, text="Date :", font=self.f_small,
                 bg=C["bg_white"], fg=C["text_mid"]).pack(side="left")

        # Champ de saisie
        self._date_var = tk.StringVar()
        self._date_entry = tk.Entry(
            left, textvariable=self._date_var, width=12,
            font=self.f_mono, bd=1, relief="solid",
            fg=C["text"], bg=C["bg_white"],
            insertbackground=C["red"],
            highlightthickness=1,
            highlightcolor=C["red"],
            highlightbackground=C["sep"],
        )
        self._date_entry.pack(side="left", padx=(8, 2), ipady=3)
        self._date_entry.bind("<Return>",    lambda _: self._launch())
        self._date_entry.bind("<FocusIn>",   self._on_entry_focus_in)
        self._date_entry.bind("<FocusOut>",  self._on_entry_focus_out)
        self._update_entry_placeholder()

        # Bouton calendrier
        self._cal_btn = tk.Button(
            left, text="📅", font=("Helvetica", 14),
            bg=C["bg_white"], relief="flat", cursor="hand2",
            activebackground=C["red_light"], bd=0, padx=4,
            command=self._toggle_calendar,
        )
        self._cal_btn.pack(side="left", padx=(2, 10))
        Tooltip(self._cal_btn, "Ouvrir le calendrier (clic)")

        # Séparateur
        tk.Frame(left, bg=C["sep"], width=1, height=26).pack(side="left", padx=(2, 10))

        # Boutons rapides
        for lbl, cmd, tip in [
            ("Aujourd'hui", self._set_today,     "Date d'aujourd'hui"),
            ("Hier",        self._set_yesterday, "Date d'hier"),
        ]:
            b = tk.Button(
                left, text=lbl, font=self.f_label,
                bg=C["bg_bar"], fg=C["red"], relief="flat",
                activebackground=C["red_light"], activeforeground=C["red_dark"],
                cursor="hand2", padx=10, pady=4,
                command=cmd,
            )
            b.pack(side="left", padx=(0, 5))
            Tooltip(b, tip)

        # ── Droite : boutons actions ──
        right = tk.Frame(ctrl, bg=C["bg_white"])
        right.pack(side="right")

        log_btn = tk.Button(
            right, text="📄 Logs", font=self.f_label,
            bg=C["bg_bar"], fg=C["text_mid"], relief="flat",
            activebackground=C["sep"], cursor="hand2",
            padx=10, pady=4, command=self._open_logs,
        )
        log_btn.pack(side="right", padx=(8, 0))
        Tooltip(log_btn, "Ouvrir daily-post.log dans TextEdit  (⌘L)")

        self._btn_launch = tk.Button(
            right,
            text="▶  Lancer   ⌘R",
            font=self.f_btn,
            bg=C["red"], fg="white",
            activebackground=C["red_dark"], activeforeground="white",
            relief="flat", cursor="hand2",
            padx=18, pady=7,
            command=self._launch,
        )
        self._btn_launch.pack(side="right")
        Tooltip(self._btn_launch, "Lancer publish_daily_posts.py --no-push  (⌘R)")

    # ── Zone de log ───────────────────────────────────────────────────────────

    def _build_log_area(self):
        # En-tête terminal
        th = tk.Frame(self.root, bg=C["bg_term"], padx=14, pady=5)
        th.pack(fill="x")
        tk.Label(th, text="● Journal d'exécution",
                 font=self.f_label, bg=C["bg_term"], fg=C["dim"]).pack(side="left")
        tk.Button(th, text="Effacer", font=self.f_label,
                  bg=C["bg_term"], fg=C["dim"], relief="flat",
                  activeforeground="white", cursor="hand2",
                  command=self._log_clear).pack(side="right")
        Tooltip(
            tk.Label(th, text="⌘R lancer · ⌘L logs · Échap annuler",
                     font=self.f_label, bg=C["bg_term"], fg="#3A3A5A"),
            "Raccourcis clavier disponibles"
        )

        # Corps du log
        lf = tk.Frame(self.root, bg=C["bg_dark"])
        lf.pack(fill="both", expand=True)

        sb = ttk.Scrollbar(lf, orient="vertical")
        sb.pack(side="right", fill="y")

        self._log = tk.Text(
            lf, bg=C["bg_dark"], fg=C["text_log"], font=self.f_mono,
            wrap="word", relief="flat", padx=14, pady=12,
            yscrollcommand=sb.set, state="disabled",
            cursor="arrow", insertbackground="white",
            selectbackground="#313244",
        )
        self._log.pack(fill="both", expand=True)
        sb.config(command=self._log.yview)

        self._log.tag_config("success", foreground=C["success"])
        self._log.tag_config("error",   foreground=C["error"])
        self._log.tag_config("warn",    foreground=C["warn"])
        self._log.tag_config("info",    foreground=C["info"])
        self._log.tag_config("dim",     foreground=C["dim"])
        self._log.tag_config("txt",     foreground=C["text_log"])
        self._log.tag_config("bold",    foreground=C["accent"], font=self.f_mono_b)
        self._log.tag_config("hdr",     foreground=C["accent"], font=self.f_mono_b)

        self._log_write("── espanolesensuiza.ch Publisher v2 ─────────────────────\n", "hdr")
        self._log_write("Prêt.  ⌘R pour lancer · Sélectionnez une date ou laissez vide.\n\n", "dim")

    # ── Barre de progression + résumé ─────────────────────────────────────────

    def _build_bottom_bar(self):
        bf = tk.Frame(self.root, bg=C["bg_white"], padx=18, pady=7)
        bf.pack(fill="x")

        self._progress = ttk.Progressbar(bf, mode="indeterminate", length=220)
        self._progress.pack(side="left")

        self._summ_lbl = tk.Label(bf, text="", font=self.f_small,
                                  bg=C["bg_white"], fg=C["text_mid"])
        self._summ_lbl.pack(side="left", padx=(14, 0))

        # Dernier run (droite)
        self._hist_lbl = tk.Label(bf, text="", font=self.f_label,
                                  bg=C["bg_white"], fg=C["text_muted"])
        self._hist_lbl.pack(side="right")
        self._refresh_history_label()

    # ── Barre git ──────────────────────────────────────────────────────────────

    def _build_git_bar(self):
        self._git_bar = tk.Frame(self.root, bg=C["bg_bar"], padx=18, pady=10)
        self._git_bar.pack(fill="x")

        self._git_lbl = tk.Label(self._git_bar, text="",
                                 font=self.f_small, bg=C["bg_bar"], fg=C["text_mid"])
        self._git_lbl.pack(side="left")

        self._btn_cancel_git = tk.Button(
            self._git_bar, text="✕  Annuler le commit",
            bg=C["error"], fg=C["text"], activebackground="#d97088",
            relief="flat", font=self.f_small, padx=14, pady=6,
            cursor="hand2", command=self._do_cancel,
        )
        self._btn_publish = tk.Button(
            self._git_bar, text="✓  Publier (git push)",
            bg=C["success"], fg=C["text"], activebackground="#85c97e",
            relief="flat", font=self.f_btn, padx=14, pady=6,
            cursor="hand2", command=self._do_push,
        )
        Tooltip(self._btn_publish,    "git push → déploiement Vercel déclenché")
        Tooltip(self._btn_cancel_git, "git reset HEAD~1 — défait le commit local sans supprimer les fichiers")
        self._show_git_bar(False)

    # ── Raccourcis clavier ────────────────────────────────────────────────────

    def _bind_shortcuts(self):
        for seq in ("<Command-r>", "<Command-R>"):
            self.root.bind(seq, lambda _: self._launch())
        for seq in ("<Command-l>", "<Command-L>"):
            self.root.bind(seq, lambda _: self._open_logs())
        self.root.bind("<Escape>", self._on_escape)

    def _on_escape(self, _=None):
        if self._cal_w and self._cal_w.winfo_exists():
            self._cal_w.destroy()

    # ── Helpers UI ────────────────────────────────────────────────────────────

    def _set_status(self, text: str, dot_color: str, ts: bool = True):
        self._stop_dot_anim()
        self._dot.config(fg=dot_color)
        self._slbl.config(text=text, fg=C["text_mid"])
        self._sts.config(text=f"— {datetime.now().strftime('%H:%M:%S')}" if ts else "")

    def _start_dot_anim(self):
        """Animation du point de statut pendant l'exécution."""
        colors = [C["info"], "#5599EE", "#89B4FA", "#AACCFF"]
        self._dot_frame = 0

        def tick():
            if not self._busy:
                return
            self._dot.config(fg=colors[self._dot_frame % len(colors)])
            self._dot_frame += 1
            self._dot_anim_job = self.root.after(400, tick)

        tick()

    def _stop_dot_anim(self):
        if self._dot_anim_job:
            self.root.after_cancel(self._dot_anim_job)
            self._dot_anim_job = None

    def _show_git_bar(self, show: bool, msg: str = ""):
        self._git_lbl.config(text=msg)
        if show:
            self._btn_publish.pack(side="right")
            self._btn_cancel_git.pack(side="right", padx=(0, 10))
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

    def _set_git_btns_state(self, state: str):
        self._btn_publish.config(state=state)
        self._btn_cancel_git.config(state=state)

    def _refresh_history_label(self):
        history = self._state.get("history", [])
        if history:
            last = history[-1]
            ts   = last.get("ts", "")[:16].replace("T", " ")
            st   = "✓" if last.get("status") == "success" else "✗"
            self._hist_lbl.config(
                text=f"Dernier run : {st} {ts}",
                fg=C["success"] if st == "✓" else C["error"]
            )

    # ── Champ date ────────────────────────────────────────────────────────────

    def _update_entry_placeholder(self):
        if not self._date_var.get():
            self._date_entry.config(fg=C["text_muted"])
            self._date_entry.delete(0, "end")
            self._date_entry.insert(0, "YYYY-MM-DD")

    def _on_entry_focus_in(self, _=None):
        if self._date_var.get() == "YYYY-MM-DD":
            self._date_entry.delete(0, "end")
            self._date_entry.config(fg=C["text"])

    def _on_entry_focus_out(self, _=None):
        val = self._date_entry.get().strip()
        if not val or val == "YYYY-MM-DD":
            self._date_var.set("")
            self._update_entry_placeholder()
        else:
            self._date_entry.config(fg=C["text"])

    def _toggle_calendar(self):
        if self._cal_w and self._cal_w.winfo_exists():
            self._cal_w.destroy()
            self._cal_w = None
            return
        current = None
        raw = self._date_entry.get().strip()
        if re.match(r"^\d{4}-\d{2}-\d{2}$", raw):
            try:
                current = datetime.strptime(raw, "%Y-%m-%d").date()
            except ValueError:
                pass
        self._cal_w = CalendarPopup(
            self.root, self._on_date_selected,
            anchor=self._cal_btn, initial=current,
        )

    def _on_date_selected(self, d: date):
        self._date_entry.config(fg=C["text"])
        self._date_var.set(d.strftime("%Y-%m-%d"))

    def _set_today(self):
        self._date_entry.config(fg=C["text"])
        self._date_var.set(date.today().strftime("%Y-%m-%d"))

    def _set_yesterday(self):
        self._date_entry.config(fg=C["text"])
        self._date_var.set((date.today() - timedelta(days=1)).strftime("%Y-%m-%d"))

    # ── Démarrage ─────────────────────────────────────────────────────────────

    def _startup_check(self):
        if has_pending_commit():
            self._log_write("── Commit local non pushé détecté ──────────────────\n", "bold")
            _, diff = git("show", "--stat", "HEAD")
            self._log_write(diff + "\n", "info")
            self._set_status("Commit en attente", C["warn"], ts=False)
            self._show_git_bar(True, "Commit local non pushé — choisissez une action.")
        else:
            self._set_status("Prêt", C["text_muted"], ts=False)

    # ── Lancement du script ───────────────────────────────────────────────────

    def _launch(self, _=None):
        if self._busy:
            return

        raw = self._date_entry.get().strip()
        date_val = raw if re.match(r"^\d{4}-\d{2}-\d{2}$", raw) else ""

        if raw and raw != "YYYY-MM-DD" and not date_val:
            messagebox.showerror("Date invalide",
                                 f"Format attendu : YYYY-MM-DD\nReçu : {raw}")
            return

        cmd = [PYTHON_PATH, "-u", SCRIPT_PATH, "--no-push"]
        if date_val:
            cmd += ["--date", date_val]

        # Remise à zéro
        self._log_clear()
        self._show_git_bar(False)
        self._summ_lbl.config(text="")
        self._summ = {}
        self._btn_launch.config(state="disabled", bg="#999999")
        self._progress.start(10)
        self._busy = True
        self._set_status("En cours...", C["info"])
        self._slbl.config(fg=C["info"])
        self._start_dot_anim()

        # Env shell (chargé une seule fois)
        if self._env is None:
            self._log_write("  Chargement de l'environnement shell...\n", "dim")
            self._env = load_shell_env()
            if not self._env.get("DEEPL_API_KEY"):
                self._log_write(
                    "  [ERREUR] DEEPL_API_KEY introuvable dans ~/.zprofile / ~/.zshrc\n",
                    "error"
                )
                self._reset_btn()
                self._set_status("Configuration manquante", C["error"])
                return

        Path(LOG_DIR).mkdir(parents=True, exist_ok=True)
        threading.Thread(target=self._run_script, args=(cmd,), daemon=True).start()

    def _reset_btn(self):
        self._busy = False
        self._progress.stop()
        self._btn_launch.config(state="normal", bg=C["red"])

    # ── Thread d'exécution ────────────────────────────────────────────────────

    def _run_script(self, cmd: list):
        try:
            ts     = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            header = f'\n{"─"*60}\n[{ts}]\n{" ".join(cmd)}\n{"─"*60}\n'

            with open(LOG_PATH, "a", encoding="utf-8") as lf:
                lf.write(header)
                self._q.put((header, "dim"))

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
            self._q.put((f"\n[ERREUR INTERNE] {exc}\n", "error"))
            self._summ["_rc"] = "1"

        self._q.put(None)  # sentinelle de fin

    def _poll(self):
        try:
            while True:
                item = self._q.get_nowait()
                if item is None:
                    self._on_finish()
                    break
                self._log_write(item[0], item[1])
        except queue.Empty:
            pass
        self.root.after(50, self._poll)

    # ── Fin du run ────────────────────────────────────────────────────────────

    def _on_finish(self):
        self._reset_btn()

        rc = int(self._summ.get("_rc", "1"))
        ok = rc == 0

        self._set_status("Succès" if ok else "Erreur",
                         C["success"] if ok else C["error"])
        self._slbl.config(fg=C["text_mid"])

        # Résumé
        parts = []
        for k, lbl in [("posts", "posts"), ("langs", "langues"),
                        ("inserted", "insérés"), ("skipped", "skippés")]:
            if k in self._summ:
                parts.append(f"{self._summ[k]} {lbl}")
        if parts:
            self._summ_lbl.config(text=" | ".join(parts))

        # Historique
        history = self._state.setdefault("history", [])
        history.append({
            "ts":      datetime.now().isoformat(),
            "status":  "success" if ok else "error",
            "summary": dict(self._summ),
        })
        self._state["history"] = history[-10:]
        save_state(self._state)
        self._refresh_history_label()

        # Diff + boutons git si commit créé
        if ok and has_pending_commit():
            _, diff = git("show", "--stat", "HEAD")
            self._log_write("\n── Diff du commit local ────────────────────────────\n", "bold")
            self._log_write(diff + "\n", "info")
            self._show_git_bar(True, "Commit créé — validez avant de publier.")
        elif ok:
            self._set_status("Aucun changement", C["text_muted"])

    # ── Actions git ───────────────────────────────────────────────────────────

    def _do_push(self):
        if not messagebox.askyesno(
            "Publier",
            "Pousser vers le dépôt distant ?\n\nCela déclenche le déploiement Vercel."
        ):
            return
        self._set_status("Publication...", C["info"])
        self._set_git_btns_state("disabled")
        self._log_write("\n── git push ────────────────────────────────────────\n", "bold")

        def worker():
            rc, out = git("push", timeout=120)
            self.root.after(0, lambda: self._push_done(rc, out))

        threading.Thread(target=worker, daemon=True).start()

    def _push_done(self, rc: int, out: str):
        self._log_write(out or "  (pas de sortie)\n", "success" if rc == 0 else "error")
        if rc == 0:
            self._log_write("  [OK] Push réussi. Déploiement en cours.\n", "success")
            self._set_status("Publié", C["success"])
            self._show_git_bar(False)
        else:
            self._set_status("Erreur push", C["error"])
            self._set_git_btns_state("normal")

    def _do_cancel(self):
        if not messagebox.askyesno(
            "Annuler le commit",
            "Défaire le dernier commit local ?\n\n"
            "git reset HEAD~1\n\n"
            "Les fichiers restent modifiés dans le working tree."
        ):
            return
        self._set_status("Annulation...", C["warn"])
        self._set_git_btns_state("disabled")
        self._log_write("\n── git reset HEAD~1 ────────────────────────────────\n", "bold")

        def worker():
            rc, out = git("reset", "HEAD~1")
            self.root.after(0, lambda: self._cancel_done(rc, out))

        threading.Thread(target=worker, daemon=True).start()

    def _cancel_done(self, rc: int, out: str):
        self._log_write(out or "  (pas de sortie)\n", "success" if rc == 0 else "error")
        if rc == 0:
            self._log_write("  [OK] Commit annulé. Aucun changement envoyé.\n", "success")
            self._set_status("Commit annulé", C["text_muted"])
            self._show_git_bar(False)
        else:
            self._set_status("Erreur reset", C["error"])
            self._set_git_btns_state("normal")

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

    app = PublisherApp(root)

    def on_close():
        if app._busy and not messagebox.askyesno(
            "Fermer", "Un script est en cours d'exécution.\nFermer quand même ?"
        ):
            return
        root.destroy()

    root.protocol("WM_DELETE_WINDOW", on_close)
    root.mainloop()


if __name__ == "__main__":
    main()
