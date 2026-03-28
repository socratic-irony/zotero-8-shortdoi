#!/bin/bash
set -e

VERSION=$(grep '"version"' manifest.json | head -1 | sed 's/.*: *"\([^"]*\)".*/\1/')
OUTFILE="zotero-doi-manager-${VERSION}.xpi"

rm -f "$OUTFILE"
zip -r "$OUTFILE" content/ locale/ skin/ bootstrap.js manifest.json prefs.js zoteroshortdoi.js

echo ""
echo "Built: $OUTFILE"
echo "Install in Zotero: Tools → Add-Ons → Install Add-On from File…"
