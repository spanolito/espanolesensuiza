#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# build_app.sh — Build du .app "EspañolesEnSuiza Publisher" avec PyInstaller
#
# Usage :
#   cd /Users/oscarandujar/Projets/espanolesensuiza
#   bash build_app.sh
# ─────────────────────────────────────────────────────────────────────────────

set -e

PYTHON="/Library/Frameworks/Python.framework/Versions/3.13/bin/python3"
PIP="/Library/Frameworks/Python.framework/Versions/3.13/bin/pip3"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_NAME="EspañolesEnSuiza Publisher"
ENTRY_POINT="$SCRIPT_DIR/publisher_app.py"
ICON_SCRIPT="$SCRIPT_DIR/create_icon.py"
ICON_PATH="$SCRIPT_DIR/icon.icns"
DIST_DIR="$SCRIPT_DIR/dist"
APP_DEST="/Applications/${APP_NAME}.app"

echo ""
echo "══════════════════════════════════════════════════════════"
echo "  espanolesensuiza.ch Publisher — Build macOS"
echo "══════════════════════════════════════════════════════════"
echo ""

# ── 1. Vérification Python ──────────────────────────────────────────────────

if [ ! -f "$PYTHON" ]; then
    echo "  [ERREUR] Python 3.13 introuvable : $PYTHON"
    exit 1
fi
echo "  Python : $("$PYTHON" --version)"

# ── 2. Dépendances Python ───────────────────────────────────────────────────

echo ""
echo "  Installation/mise à jour des dépendances..."
"$PIP" install --upgrade pyinstaller Pillow --quiet \
    && echo "  [OK] PyInstaller + Pillow" \
    || echo "  [AVERTISSEMENT] Installation partielle (non bloquant)"

# ── 3. Génération de l'icône ────────────────────────────────────────────────

echo ""
echo "  Génération de l'icône .icns..."

if "$PYTHON" "$ICON_SCRIPT"; then
    ICON_FLAG="--icon=$ICON_PATH"
    echo "  [OK] Icône intégrée au build"
else
    ICON_FLAG=""
    echo "  [AVERTISSEMENT] Icône ignorée — build sans icône personnalisée"
fi

# ── 4. Nettoyage ────────────────────────────────────────────────────────────

echo ""
echo "  Nettoyage des builds précédents..."
rm -rf "$SCRIPT_DIR/dist" "$SCRIPT_DIR/build" "$SCRIPT_DIR/__pycache__"
find "$SCRIPT_DIR" -maxdepth 1 -name "*.spec" -delete 2>/dev/null || true

# ── 5. Build PyInstaller ────────────────────────────────────────────────────

echo ""
echo "  Lancement de PyInstaller..."
echo ""

"$PYTHON" -m PyInstaller \
    --windowed \
    --onedir \
    --name "${APP_NAME}" \
    --osx-bundle-identifier "ch.espanolesensuiza.publisher" \
    ${ICON_FLAG} \
    --noconfirm \
    --clean \
    --collect-all Pillow \
    --hidden-import PIL \
    --hidden-import PIL.Image \
    --hidden-import PIL.ImageGrab \
    --hidden-import PIL.ImageTk \
    --hidden-import PIL._imaging \
    --hidden-import PIL.IcoImagePlugin \
    --hidden-import PIL.JpegImagePlugin \
    --hidden-import PIL.PngImagePlugin \
    "$ENTRY_POINT"

# ── 6. Vérification ─────────────────────────────────────────────────────────

BUILT_APP="$DIST_DIR/${APP_NAME}.app"

if [ ! -d "$BUILT_APP" ]; then
    echo ""
    echo "  [ERREUR] Le .app n'a pas été créé. Consultez les logs ci-dessus."
    exit 1
fi
echo "  [OK] .app créé : $BUILT_APP"

# ── 7. Copie dans /Applications ─────────────────────────────────────────────

echo ""
echo "  Installation dans /Applications..."
[ -d "$APP_DEST" ] && rm -rf "$APP_DEST"
cp -R "$BUILT_APP" "$APP_DEST"
echo "  [OK] $APP_DEST"

# ── 8. Signature correcte (inside-out) ──────────────────────────────────────
#
# macOS 26+ (et Apple Silicon) exige que CHAQUE binaire soit signé
# individuellement AVANT de signer le bundle.
# codesign --deep seul est insuffisant pour les .so PyInstaller.

echo ""
echo "  Signature des binaires (inside-out)..."

# 8a. Fichier d'entitlements — indispensable pour le chargement des .so Python
ENTITLEMENTS="$SCRIPT_DIR/entitlements.plist"
cat > "$ENTITLEMENTS" << 'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <!-- Autorise le chargement des extensions Python (.so) non signées par Apple -->
    <key>com.apple.security.cs.disable-library-validation</key>
    <true/>
    <!-- Autorise la mémoire exécutable non signée (nécessaire pour Python JIT) -->
    <key>com.apple.security.cs.allow-unsigned-executable-memory</key>
    <true/>
    <!-- Autorise les variables d'environnement dyld (PYTHONPATH, etc.) -->
    <key>com.apple.security.cs.allow-dyld-environment-variables</key>
    <true/>
</dict>
</plist>
PLIST
echo "  [OK] entitlements.plist créé"

# 8b. Signer chaque .so et .dylib individuellement (du plus profond au moins profond)
echo "  Signature des bibliothèques dynamiques..."
SIGNED=0
FAILED=0
while IFS= read -r -d '' f; do
    if codesign --force --sign - --timestamp=none "$f" 2>/dev/null; then
        SIGNED=$((SIGNED + 1))
    else
        FAILED=$((FAILED + 1))
    fi
done < <(find "$APP_DEST" \( -name "*.so" -o -name "*.dylib" \) -print0 | sort -rz)

echo "  [OK] $SIGNED bibliothèques signées ($FAILED échecs ignorés)"

# 8c. Signer le framework Python avec les entitlements (nécessaire pour dlopen des .so)
PYTHON_FW="$APP_DEST/Contents/Frameworks/Python.framework"
if [ -d "$PYTHON_FW" ]; then
    # Signer d'abord le binaire Python lui-même avec les entitlements
    PYTHON_BIN=$(find "$PYTHON_FW" -name "Python" -type f | head -1)
    if [ -n "$PYTHON_BIN" ]; then
        codesign --force --sign - --timestamp=none \
            --entitlements "$ENTITLEMENTS" "$PYTHON_BIN" 2>/dev/null \
            && echo "  [OK] Python binaire signé avec entitlements" \
            || echo "  [AVERTISSEMENT] Python binaire non signé"
    fi
    # Puis signer le framework entier
    codesign --force --sign - --timestamp=none \
        --entitlements "$ENTITLEMENTS" "$PYTHON_FW" 2>/dev/null \
        && echo "  [OK] Python.framework signé avec entitlements" \
        || echo "  [AVERTISSEMENT] Python.framework non signé"
fi

# 8d. Signer le binaire principal
MAIN_BIN="$APP_DEST/Contents/MacOS/${APP_NAME}"
if [ -f "$MAIN_BIN" ]; then
    codesign --force --sign - --timestamp=none \
        --entitlements "$ENTITLEMENTS" "$MAIN_BIN" 2>/dev/null \
        && echo "  [OK] Binaire principal signé" \
        || echo "  [AVERTISSEMENT] Binaire principal non signé"
fi

# 8e. Signer le bundle entier avec les entitlements
codesign --force --sign - --timestamp=none \
    --entitlements "$ENTITLEMENTS" "$APP_DEST" 2>/dev/null \
    && echo "  [OK] Bundle signé avec entitlements" \
    || echo "  [AVERTISSEMENT] Signature du bundle échouée"

# 8f. Vérification de la signature
echo ""
echo "  Vérification de la signature..."
if codesign --verify --deep --strict "$APP_DEST" 2>/dev/null; then
    echo "  [OK] Signature valide"
else
    echo "  [AVERTISSEMENT] Vérification partielle — l'app devrait quand même fonctionner"
    echo "  Si l'app crashe au lancement, exécutez manuellement :"
    echo "    sudo xattr -rd com.apple.quarantine \"$APP_DEST\""
fi

# ── 9. Résumé ───────────────────────────────────────────────────────────────

echo ""
echo "══════════════════════════════════════════════════════════"
echo "  Build terminé."
echo ""
echo "  Application : $APP_DEST"
echo "  Lancement   : open \"$APP_DEST\""
echo ""
echo "  Si macOS bloque le premier lancement :"
echo "  1. Clic droit sur l'app → Ouvrir → Ouvrir quand même"
echo "  2. Ou en terminal :"
echo "     sudo xattr -rd com.apple.quarantine \"$APP_DEST\""
echo "══════════════════════════════════════════════════════════"
echo ""
