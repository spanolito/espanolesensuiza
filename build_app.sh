#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# build_app.sh — Build du .app "EspañolesEnSuiza Publisher" avec PyInstaller
#
# Usage :
#   cd /Users/oscarandujar/Projets/espanolesensuiza
#   bash build_app.sh
#
# Prérequis :
#   - Python 3.13 installé dans /Library/Frameworks/Python.framework/Versions/3.13/
#   - PyInstaller installé (pip install pyinstaller)
# ─────────────────────────────────────────────────────────────────────────────

set -e

PYTHON="/Library/Frameworks/Python.framework/Versions/3.13/bin/python3"
PIP="/Library/Frameworks/Python.framework/Versions/3.13/bin/pip3"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_NAME="EspañolesEnSuiza Publisher"
ENTRY_POINT="$SCRIPT_DIR/publisher_app.py"
DIST_DIR="$SCRIPT_DIR/dist"
APP_DEST="/Applications/${APP_NAME}.app"

echo ""
echo "══════════════════════════════════════════════════════"
echo "  Build : ${APP_NAME}"
echo "  Python : $PYTHON"
echo "══════════════════════════════════════════════════════"
echo ""

# ── 1. Vérification Python ──────────────────────────────────────────────────

if [ ! -f "$PYTHON" ]; then
    echo "  [ERREUR] Python 3.13 introuvable : $PYTHON"
    exit 1
fi

echo "  Python : $("$PYTHON" --version)"

# ── 2. Installation / mise à jour de PyInstaller ────────────────────────────

echo ""
echo "  Installation/mise à jour de PyInstaller..."
"$PIP" install --upgrade pyinstaller --quiet

# ── 3. Nettoyage des builds précédents ─────────────────────────────────────

echo "  Nettoyage des builds précédents..."
rm -rf "$SCRIPT_DIR/dist" "$SCRIPT_DIR/build" "$SCRIPT_DIR/__pycache__"
find "$SCRIPT_DIR" -name "*.spec" -not -name "custom.spec" -delete 2>/dev/null || true

# ── 4. Build PyInstaller ────────────────────────────────────────────────────

echo ""
echo "  Lancement de PyInstaller..."
echo ""

"$PYTHON" -m PyInstaller \
    --windowed \
    --onedir \
    --name "${APP_NAME}" \
    --osx-bundle-identifier "ch.espanolesensuiza.publisher" \
    --target-arch universal2 \
    --noconfirm \
    --clean \
    "$ENTRY_POINT"

# ── 5. Vérification ─────────────────────────────────────────────────────────

BUILT_APP="$DIST_DIR/${APP_NAME}.app"

if [ ! -d "$BUILT_APP" ]; then
    echo ""
    echo "  [ERREUR] Le .app n'a pas été créé. Consultez les logs PyInstaller ci-dessus."
    exit 1
fi

echo ""
echo "  [OK] .app créé : $BUILT_APP"

# ── 6. Copie dans /Applications ─────────────────────────────────────────────

echo ""
echo "  Copie vers /Applications..."

if [ -d "$APP_DEST" ]; then
    echo "  Suppression de l'ancienne version..."
    rm -rf "$APP_DEST"
fi

cp -R "$BUILT_APP" "$APP_DEST"

echo "  [OK] Application installée : $APP_DEST"

# ── 7. Signature ad-hoc (pour éviter Gatekeeper sans compte développeur) ────

echo ""
echo "  Signature ad-hoc..."
codesign --force --deep --sign - "$APP_DEST" 2>/dev/null \
    && echo "  [OK] Signature ad-hoc appliquée." \
    || echo "  [AVERTISSEMENT] Signature ad-hoc échouée (non bloquant)."

# ── 8. Résumé ───────────────────────────────────────────────────────────────

echo ""
echo "══════════════════════════════════════════════════════"
echo "  Build terminé."
echo ""
echo "  Application : $APP_DEST"
echo "  Lancement   : open \"$APP_DEST\""
echo "               ou double-clic dans /Applications"
echo ""
echo "  NOTE : Si macOS affiche un avertissement Gatekeeper"
echo "  au premier lancement, faites :"
echo "    Clic droit → Ouvrir → Ouvrir quand même"
echo "══════════════════════════════════════════════════════"
echo ""
