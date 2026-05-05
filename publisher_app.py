#!/usr/bin/env python3
"""
publisher_app.py — Dashboard de publication pour espanolesensuiza.ch
macOS · Python 3.13 · tkinter

Usage :
    python3 publisher_app.py
    # ou via le .app buildé avec PyInstaller
"""

import json
import os
import queue
import re
import subprocess
import threading
from datetime import datetime
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

APP_W, APP_H = 900, 740

# ── Palette (Catppuccin Mocha — terminal) ──────────────────────────────────────

C_BG_DARK   = "#1e1e2e"
C_TEXT      = "#cdd6f4"
C_SUCCESS   = "#a6e3a1"
C_ERROR     = "#f38ba8"
C_WARN      = "#fab387"
C_INFO      = "#89b4fa"
C_ACCENT    = "#cba6f7"
C_DIM       = "#6c7086"
C_BG_LIGHT  = "#f0f0f0"
C_WHITE     = "#ffffff"
C_SEP       = "#e0e0e0"
C_MUTED     = "#888888"
C_TEXT_DARK = "#1a1a2e"

# ── Helpers système ────────────────────────────────────────────────────────────

def load_shell_env() -> dict:
    """Charge les variables d'environnement depuis ~/.zprofile et ~/.zshrc."""
    try:
        script = "source ~/.zprofile 2>/dev/null; source ~/.zshrc 2>/dev/null; env -0"
        out = subprocess.run(
            ["bash", "-lc", script],
            capture_output=True, text=True, timeout=15
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
        return {}


def save_state(s: dict):
    try:
        with open(STATE_FILE, "w") as f:
            json.dump(s, f, indent=2)
    except Exception:
        pass


def git(*args, timeout: int = 30) -> tuple:
    """Exécute une commande git dans SITE_DIR. Retourne (returncode, stdout+stderr)."""
    r = subprocess.run(
        ["git", "-C", SITE_DIR] + list(args),
        capture_output=True, text=True, timeout=timeout
    )
    return r.returncode, (r.stdout + r.stderr)


def has_pending_commit() -> bool:
    """Retourne True si un commit local non pushé existe sur main."""
    rc, out = git("log", "origin/main..HEAD", "--oneline")
    return rc == 0 and bool(out.strip())


def line_tag(line: str) -> str:
    """Retourne le tag de couleur pour une ligne de log."""
    s = line
    if any(x in s for x in ("[OK]", "── Terminé", "Terminé", "insérés", "status=success", "Push réussi")):
        return "success"
    if any(x in s for x in ("[ERREUR]", "Error", "Erreur", "ERREUR", "error", "ERROR")):
        return "error"
    if any(x in s for x in ("[SKIP]", "[STOP]", "[RETRY]", "[INFO]", "DRY RUN", "skip")):
        return "warn"
    if "[SUMMARY]" in s:
        return "info"
    if "──" in s or "==" in s:
        return "dim"
    return "txt"

# ── Application principale ─────────────────────────────────────────────────────

class PublisherApp:

    def __init__(self, root: tk.Tk):
        self.root   = root
        self.root.title("espanolesensuiza.ch — Publication")
        self.root.geometry(f"{APP_W}x{APP_H}")
        self.root.resizable(True, True)
        self.root.minsize(720, 540)

        # macOS : couleur de fond de la fenêtre
        self.root.configure(bg=C_BG_LIGHT)

        self._q      = queue.Queue()
        self._proc   = None
        self._busy   = False
        self._env    = None
        self._state  = load_state()
        self._summ   = {}

        self._init_fonts()
        self._build_ui()
        self._startup_check()
        self._poll()

    # ── Polices ───────────────────────────────────────────────────────────────

    def _init_fonts(self):
        self.f_mono   = tkfont.Font(family="Menlo", size=11)
        self.f_mono_b = tkfont.Font(family="Menlo", size=11, weight="bold")
        self.f_ui     = tkfont.Font(family="Helvetica Neue", size=12)
        self.f_small  = tkfont.Font(family="Helvetica Neue", size=11)
        self.f_head   = tkfont.Font(family="Helvetica Neue", size=15, weight="bold")
        self.f_label  = tkfont.Font(family="Helvetica Neue", size=10)

    # ── Construction UI ───────────────────────────────────────────────────────

    def _build_ui(self):
        self._build_header()
        ttk.Separator(self.root, orient="horizontal").pack(fill="x")
        self._build_controls()
        ttk.Separator(self.root, orient="horizontal").pack(fill="x")
        self._build_log_area()
        ttk.Separator(self.root, orient="horizontal").pack(fill="x")
        self._build_bottom_bar()
        ttk.Separator(self.root, orient="horizontal").pack(fill="x")
        self._build_git_bar()

    def _build_header(self):
        hdr = tk.Frame(self.root, bg=C_BG_LIGHT, pady=11, padx=18)
        hdr.pack(fill="x")

        tk.Label(hdr, text="espanolesensuiza.ch",
                 font=self.f_head, bg=C_BG_LIGHT, fg=C_TEXT_DARK).pack(side="left")
        tk.Label(hdr, text="— Tableau de bord publication",
                 font=self.f_small, bg=C_BG_LIGHT, fg=C_MUTED).pack(side="left", padx=(8, 0), pady=(2, 0))

        sf = tk.Frame(hdr, bg=C_BG_LIGHT)
        sf.pack(side="right")

        self._dot  = tk.Label(sf, text="●", fg=C_MUTED, bg=C_BG_LIGHT, font=self.f_ui)
        self._dot.pack(side="left")
        self._slbl = tk.Label(sf, text="Prêt", fg="#555", bg=C_BG_LIGHT, font=self.f_small)
        self._slbl.pack(side="left", padx=(5, 0))
        self._sts  = tk.Label(sf, text="", fg=C_MUTED, bg=C_BG_LIGHT, font=self.f_label)
        self._sts.pack(side="left", padx=(8, 0))

    def _build_controls(self):
        ctrl = tk.Frame(self.root, bg=C_WHITE, pady=10, padx=18)
        ctrl.pack(fill="x")

        # — Date
        left = tk.Frame(ctrl, bg=C_WHITE)
        left.pack(side="left")

        tk.Label(left, text="Date (vide = aujourd'hui) :",
                 font=self.f_small, bg=C_WHITE, fg="#444").pack(side="left")

        self._date_var = tk.StringVar()
        self._date_entry = ttk.Entry(left, textvariable=self._date_var,
                                     width=13, font=self.f_mono)
        self._date_entry.pack(side="left", padx=(8, 0))

        tk.Label(left, text="YYYY-MM-DD", font=self.f_label,
                 bg=C_WHITE, fg=C_MUTED).pack(side="left", padx=(6, 0), pady=(2, 0))

        # — Boutons
        right = tk.Frame(ctrl, bg=C_WHITE)
        right.pack(side="right")

        ttk.Button(right, text="Voir les logs complets",
                   command=self._open_logs).pack(side="right", padx=(8, 0))

        self._btn_launch = ttk.Button(right, text="Lancer la publication",
                                      command=self._launch)
        self._btn_launch.pack(side="right")

    def _build_log_area(self):
        lf = tk.Frame(self.root, bg=C_BG_DARK)
        lf.pack(fill="both", expand=True)

        sb = ttk.Scrollbar(lf, orient="vertical")
        sb.pack(side="right", fill="y")

        self._log = tk.Text(
            lf,
            bg=C_BG_DARK, fg=C_TEXT, font=self.f_mono,
            wrap="word", relief="flat", padx=14, pady=12,
            yscrollcommand=sb.set, state="disabled",
            cursor="arrow", insertbackground=C_WHITE,
            selectbackground="#313244",
        )
        self._log.pack(fill="both", expand=True)
        sb.config(command=self._log.yview)

        self._log.tag_config("success", foreground=C_SUCCESS)
        self._log.tag_config("error",   foreground=C_ERROR)
        self._log.tag_config("warn",    foreground=C_WARN)
        self._log.tag_config("info",    foreground=C_INFO)
        self._log.tag_config("dim",     foreground=C_DIM)
        self._log.tag_config("txt",     foreground=C_TEXT)
        self._log.tag_config("bold",    foreground=C_ACCENT, font=self.f_mono_b)
        self._log.tag_config("hdr",     foreground=C_ACCENT, font=self.f_mono_b)

        # Message initial
        self._log_write("── espanolesensuiza.ch Publisher ───────────────────────\n", "hdr")
        self._log_write("Prêt. Lancez une publication ou vérifiez les logs.\n\n", "dim")

    def _build_bottom_bar(self):
        bf = tk.Frame(self.root, bg=C_WHITE, padx=18, pady=7)
        bf.pack(fill="x")

        self._progress = ttk.Progressbar(bf, mode="indeterminate", length=200)
        self._progress.pack(side="left")

        self._summ_lbl = tk.Label(bf, text="", font=self.f_small, bg=C_WHITE, fg="#444")
        self._summ_lbl.pack(side="left", padx=(14, 0))

    def _build_git_bar(self):
        self._git_bar = tk.Frame(self.root, bg="#f5f5f5", padx=18, pady=9)
        self._git_bar.pack(fill="x")

        self._git_lbl = tk.Label(self._git_bar, text="",
                                 font=self.f_small, bg="#f5f5f5", fg="#555")
        self._git_lbl.pack(side="left")

        self._btn_publish = tk.Button(
            self._git_bar, text="Publier  (git push)",
            bg=C_SUCCESS, fg=C_TEXT_DARK, activebackground="#85c97e",
            relief="flat", font=self.f_small, padx=16, pady=5,
            cursor="pointinghand", command=self._do_push,
        )
        self._btn_cancel = tk.Button(
            self._git_bar, text="Annuler  (git reset HEAD~1)",
            bg=C_ERROR, fg=C_TEXT_DARK, activebackground="#d97088",
            relief="flat", font=self.f_small, padx=16, pady=5,
            cursor="pointinghand", command=self._do_cancel,
        )
        self._show_git_bar(False)

    # ── Helpers UI ────────────────────────────────────────────────────────────

    def _set_status(self, text: str, dot_color: str, ts: bool = True):
        self._dot.config(fg=dot_color)
        self._slbl.config(text=text)
        self._sts.config(text=f"— {datetime.now().strftime('%H:%M:%S')}" if ts else "")

    def _show_git_bar(self, show: bool, msg: str = ""):
        self._git_lbl.config(text=msg)
        if show:
            self._btn_publish.pack(side="right")
            self._btn_cancel.pack(side="right", padx=(0, 10))
        else:
            self._btn_publish.pack_forget()
            self._btn_cancel.pack_forget()

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
        self._btn_cancel.config(state=state)

    # ── Démarrage ─────────────────────────────────────────────────────────────

    def _startup_check(self):
        """Détecte un commit local non pushé et propose les actions."""
        if has_pending_commit():
            self._log_write("── Commit local non pushé détecté ──────────────────\n", "bold")
            _, diff = git("show", "--stat", "HEAD")
            self._log_write(diff + "\n", "info")
            self._set_status("Commit en attente", C_WARN, ts=False)
            self._show_git_bar(True, "Un commit local non pushé existe — choisissez une action.")
        else:
            self._set_status("Prêt", C_MUTED, ts=False)

    # ── Lancement du script ───────────────────────────────────────────────────

    def _launch(self):
        if self._busy:
            return

        # Validation de la date
        date_val = self._date_var.get().strip()
        cmd = [PYTHON_PATH, "-u", SCRIPT_PATH, "--no-push"]
        if date_val:
            if re.match(r"^\d{4}-\d{2}-\d{2}$", date_val):
                cmd += ["--date", date_val]
            else:
                messagebox.showerror("Erreur", "Format de date invalide.\nAttenu : YYYY-MM-DD")
                return

        # Remise à zéro UI
        self._log_clear()
        self._show_git_bar(False)
        self._summ_lbl.config(text="")
        self._summ = {}
        self._set_status("En cours...", C_INFO)
        self._btn_launch.config(state="disabled")
        self._progress.start(10)
        self._busy = True

        # Chargement de l'env shell (une seule fois)
        if self._env is None:
            self._log_write("  Chargement des variables d'environnement depuis le shell...\n", "dim")
            self._env = load_shell_env()
            deepl_ok = bool(self._env.get("DEEPL_API_KEY"))
            if not deepl_ok:
                self._log_write("  [ERREUR] DEEPL_API_KEY introuvable dans l'environnement shell.\n", "error")
                self._busy = False
                self._progress.stop()
                self._btn_launch.config(state="normal")
                self._set_status("Erreur configuration", C_ERROR)
                return

        # Création du répertoire de logs si absent
        Path(LOG_DIR).mkdir(parents=True, exist_ok=True)

        threading.Thread(target=self._run_script, args=(cmd,), daemon=True).start()

    # ── Thread d'exécution ────────────────────────────────────────────────────

    def _run_script(self, cmd: list):
        try:
            ts      = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            header  = f'\n{"─"*58}\n[{ts}] Lancement\n{" ".join(cmd)}\n{"─"*58}\n'

            with open(LOG_PATH, "a", encoding="utf-8") as lf:
                lf.write(header)
                self._q.put((header, "dim"))

                proc = subprocess.Popen(
                    cmd,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.STDOUT,
                    env=self._env,
                    text=True,
                    bufsize=1,
                )
                self._proc = proc

                for line in proc.stdout:
                    lf.write(line)
                    lf.flush()
                    self._q.put((line, line_tag(line)))

                    # Parse des lignes [SUMMARY]
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

    # ── Polling de la queue ───────────────────────────────────────────────────

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
        self._busy = False
        self._proc = None
        self._progress.stop()
        self._btn_launch.config(state="normal")

        rc = int(self._summ.get("_rc", "1"))
        ok = rc == 0

        self._set_status("Succès" if ok else "Erreur",
                         C_SUCCESS if ok else C_ERROR)

        # Résumé
        parts = []
        for k, lbl in [("posts", "posts"), ("langs", "langues"),
                        ("inserted", "insérés"), ("skipped", "skippés"),
                        ("errors", "erreur(s)")]:
            if k in self._summ:
                parts.append(f"{self._summ[k]} {lbl}")
        if parts:
            self._summ_lbl.config(text=" | ".join(parts))

        # Sauvegarde état
        self._state.update({
            "last_run":    datetime.now().isoformat(),
            "last_status": "success" if ok else "error",
        })
        save_state(self._state)

        # Si succès : afficher le diff + boutons git
        if ok and has_pending_commit():
            _, diff = git("show", "--stat", "HEAD")
            self._log_write("\n── Diff du commit local ────────────────────────────\n", "bold")
            self._log_write(diff + "\n", "info")
            self._show_git_bar(True, "Commit local créé — validez avant de publier.")
        elif ok:
            self._set_status("Aucun changement", C_MUTED)

    # ── Actions git ───────────────────────────────────────────────────────────

    def _do_push(self):
        if not messagebox.askyesno(
            "Publier",
            "Confirmer le push vers le dépôt distant ?\n\nCette action déclenche le déploiement Vercel."
        ):
            return

        self._set_status("Publication...", C_INFO)
        self._set_git_btns_state("disabled")
        self._log_write("\n── git push ────────────────────────────────────────\n", "bold")

        def worker():
            rc, out = git("push", timeout=120)
            self.root.after(0, lambda: self._push_done(rc, out))

        threading.Thread(target=worker, daemon=True).start()

    def _push_done(self, rc: int, out: str):
        self._log_write(out or "  (pas de sortie)\n",
                        "success" if rc == 0 else "error")
        if rc == 0:
            self._log_write("  [OK] Push réussi. Déploiement en cours sur Vercel.\n", "success")
            self._set_status("Publié", C_SUCCESS)
            self._show_git_bar(False)
        else:
            self._set_status("Erreur push", C_ERROR)
            self._set_git_btns_state("normal")

    def _do_cancel(self):
        if not messagebox.askyesno(
            "Annuler le commit",
            "Défaire le dernier commit local ?\n\ngit reset HEAD~1\n\n"
            "Les fichiers modifiés seront conservés en working tree."
        ):
            return

        self._set_status("Annulation...", C_WARN)
        self._set_git_btns_state("disabled")
        self._log_write("\n── git reset HEAD~1 ────────────────────────────────\n", "bold")

        def worker():
            rc, out = git("reset", "HEAD~1")
            self.root.after(0, lambda: self._cancel_done(rc, out))

        threading.Thread(target=worker, daemon=True).start()

    def _cancel_done(self, rc: int, out: str):
        self._log_write(out or "  (pas de sortie)\n",
                        "success" if rc == 0 else "error")
        if rc == 0:
            self._log_write("  [OK] Commit annulé. Aucun changement envoyé.\n", "success")
            self._set_status("Commit annulé", C_MUTED)
            self._show_git_bar(False)
        else:
            self._set_status("Erreur reset", C_ERROR)
            self._set_git_btns_state("normal")

    # ── Logs ─────────────────────────────────────────────────────────────────

    def _open_logs(self):
        if os.path.exists(LOG_PATH):
            subprocess.run(["open", "-a", "TextEdit", LOG_PATH])
        else:
            messagebox.showinfo("Logs", f"Aucun fichier de log trouvé.\n{LOG_PATH}")


# ── Point d'entrée ─────────────────────────────────────────────────────────────

def main():
    root = tk.Tk()

    # macOS : activation du style aqua natif
    try:
        style = ttk.Style()
        style.theme_use("aqua")
    except Exception:
        pass

    app = PublisherApp(root)

    # Interception fermeture propre
    def on_close():
        if app._busy and not messagebox.askyesno(
            "Fermer",
            "Un script est en cours d'exécution.\nFermer quand même ?"
        ):
            return
        root.destroy()

    root.protocol("WM_DELETE_WINDOW", on_close)
    root.mainloop()


if __name__ == "__main__":
    main()
