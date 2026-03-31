#!/usr/bin/env bash
set -euo pipefail

SRC="src"
OUT="site"

rm -rf "$OUT"
mkdir -p "$OUT"

# Copy all source files to publish directory
cp -R "$SRC"/* "$OUT"/

echo "Build complete -> $OUT/"
