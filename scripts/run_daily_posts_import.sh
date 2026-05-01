#!/bin/zsh

set -euo pipefail

REPO_DIR="/Users/oscarandujar/Projets/espanolesensuiza"
LOG_DIR="$REPO_DIR/logs"
LOG_FILE="$LOG_DIR/daily-posts-import.log"

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

mkdir -p "$LOG_DIR"

cd "$REPO_DIR"

echo "[$(/bin/date -u +"%Y-%m-%dT%H:%M:%SZ")] Starting daily posts import" >> "$LOG_FILE"
/usr/bin/env node tools/import_daily_posts.js --no-translate --changed-only --report docs/daily-posts-classification.json >> "$LOG_FILE" 2>&1
echo "[$(/bin/date -u +"%Y-%m-%dT%H:%M:%SZ")] Finished daily posts import" >> "$LOG_FILE"
