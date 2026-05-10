#!/usr/bin/env zsh
# ─────────────────────────────────────────────────────────────────────────────
# desactiver_automatisations.sh
# Désactive TOUS les LaunchAgents et tâches automatiques liés à espanolesensuiza.ch
# À exécuter une seule fois dans Terminal.
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

echo ""
echo "══════════════════════════════════════════════════════════"
echo "  Audit et désactivation des automatisations"
echo "  espanolesensuiza.ch"
echo "══════════════════════════════════════════════════════════"
echo ""

LA_DIR="$HOME/Library/LaunchAgents"
FOUND=0

# ── 1. Lister tous les LaunchAgents actifs liés au projet ──────────────────

echo "  LaunchAgents trouvés dans $LA_DIR :"
for plist in "$LA_DIR"/*espanol* "$LA_DIR"/*daily* "$LA_DIR"/*post* 2>/dev/null; do
    [ -f "$plist" ] || continue
    echo "  → $plist"
    FOUND=$((FOUND + 1))
done

if [ $FOUND -eq 0 ]; then
    echo "  (aucun fichier trouvé avec ces noms)"
fi

echo ""
echo "  Agents launchctl actifs :"
launchctl list 2>/dev/null | grep -iE "espanol|daily.post|posts.import" || echo "  (aucun actif)"

# ── 2. Désactiver et supprimer ─────────────────────────────────────────────

echo ""
echo "  Désactivation..."

PLISTS=(
    "ch.espanolesensuiza.daily-post"
    "com.espanolesensuiza.daily-posts-import"
    "com.espanolesensuiza.daily-posts"
    "espanolesensuiza.daily"
)

for ID in "${PLISTS[@]}"; do
    PLIST="$LA_DIR/$ID.plist"
    if [ -f "$PLIST" ]; then
        launchctl unload "$PLIST" 2>/dev/null && echo "  [OK] Déchargé : $ID" || echo "  [INFO] Déjà inactif : $ID"
        rm -f "$PLIST"
        echo "  [OK] Supprimé  : $PLIST"
    fi
done

# ── 3. Vérification crontab ────────────────────────────────────────────────

echo ""
echo "  Vérification crontab :"
CRON=$(crontab -l 2>/dev/null || echo "")
if echo "$CRON" | grep -qi "espanol\|daily.post\|publish"; then
    echo "  [ATTENTION] Entrées cron trouvées :"
    echo "$CRON" | grep -i "espanol\|daily.post\|publish"
    echo ""
    echo "  Pour les supprimer : crontab -e"
else
    echo "  (aucune entrée cron liée au projet)"
fi

# ── 4. Résumé final ────────────────────────────────────────────────────────

echo ""
echo "  LaunchAgents restants liés au projet :"
ls "$LA_DIR" 2>/dev/null | grep -iE "espanol|daily.post" || echo "  (aucun)"

echo ""
echo "══════════════════════════════════════════════════════════"
echo "  Terminé."
echo ""
echo "  Le script publish_daily_posts.py ne pushe plus jamais"
echo "  automatiquement. Le push requiert maintenant --push"
echo "  explicitement (ou le bouton dans l'app)."
echo "══════════════════════════════════════════════════════════"
echo ""
