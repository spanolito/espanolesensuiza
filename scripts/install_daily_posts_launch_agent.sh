#!/bin/zsh

set -euo pipefail

REPO_DIR="/Users/oscarandujar/Projets/espanolesensuiza"
PLIST_ID="com.espanolesensuiza.daily-posts-import"
LAUNCH_AGENTS_DIR="$HOME/Library/LaunchAgents"
PLIST_PATH="$LAUNCH_AGENTS_DIR/$PLIST_ID.plist"
RUN_SCRIPT="$REPO_DIR/scripts/run_daily_posts_import.sh"
WATCH_PATH="/Users/oscarandujar/Projets/Publications/posts"

mkdir -p "$LAUNCH_AGENTS_DIR"
chmod +x "$RUN_SCRIPT"

/bin/cat > "$PLIST_PATH" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>$PLIST_ID</string>

  <key>ProgramArguments</key>
  <array>
    <string>$RUN_SCRIPT</string>
  </array>

  <key>RunAtLoad</key>
  <true/>

  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>7</integer>
    <key>Minute</key>
    <integer>15</integer>
  </dict>

  <key>WatchPaths</key>
  <array>
    <string>$WATCH_PATH</string>
  </array>

  <key>WorkingDirectory</key>
  <string>$REPO_DIR</string>

  <key>StandardOutPath</key>
  <string>$REPO_DIR/logs/launchd-daily-posts.out.log</string>

  <key>StandardErrorPath</key>
  <string>$REPO_DIR/logs/launchd-daily-posts.err.log</string>
</dict>
</plist>
EOF

/bin/launchctl unload "$PLIST_PATH" >/dev/null 2>&1 || true
/bin/launchctl load "$PLIST_PATH"
/bin/launchctl kickstart -k "gui/$(/usr/bin/id -u)/$PLIST_ID"

echo "Installed launch agent: $PLIST_PATH"
