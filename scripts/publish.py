#!/usr/bin/env python3
"""
publish.py — For The Soul Notion CMS Pipeline

Fetches Published teachings from the Notion "Teachings" database and
regenerates the teaching cards section in src/index.html, then runs build.sh.

WORKS WITH ANY AI TOOL OR STANDALONE:
    Claude Code:   /publish
    Codex CLI:     codex "run scripts/publish.py"
    Gemini CLI:    gemini "run scripts/publish.py"
    Standalone:    python3 scripts/publish.py

SETUP (one-time):
    1. Go to https://www.notion.com/my-integrations
    2. Create a new integration — give it "Read content" capability
    3. Open the "For The Soul" Notion page, click ... menu -> Connections
       -> add your integration
    4. Copy the integration token (starts with secret_)
    5. Set it in your shell:
           export NOTION_API_KEY=secret_...
       Or add it to ~/.zshrc / ~/.bashrc to persist it.

Usage:
    python3 scripts/publish.py [project_root]

    project_root defaults to ~/Desktop/ForTheSoul
"""

import json
import os
import re
import sys
import urllib.request
import urllib.error

# ── Config ───────────────────────────────────────────────────────────────────

TEACHINGS_DATABASE_ID = "eec8fd55-f6d2-4f13-a805-c07dcadde133"
MAX_CARDS = 3

# Markers in src/index.html that delimit the teachings grid content
START_MARKER = "<!-- TEACHINGS:START -->"
END_MARKER   = "<!-- TEACHINGS:END -->"

MARKER_PATTERN = re.compile(
    r"<!-- TEACHINGS:START -->.*?<!-- TEACHINGS:END -->",
    re.DOTALL,
)

# ── Notion API ────────────────────────────────────────────────────────────────

def notion_request(path, method="GET", body=None):
    api_key = os.environ.get("NOTION_API_KEY")
    if not api_key:
        print("Error: NOTION_API_KEY environment variable is not set.")
        print()
        print("Set it with:")
        print("    export NOTION_API_KEY=secret_...")
        print()
        print("Get a token at: https://www.notion.com/my-integrations")
        sys.exit(1)

    url = f"https://api.notion.com/v1{path}"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
    }
    data = json.dumps(body).encode("utf-8") if body else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)

    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"Notion API error {e.code}: {body}")
        sys.exit(1)


def fetch_published_teachings():
    body = {
        "filter": {
            "property": "Status",
            "select": {"equals": "Published"},
        },
        "sorts": [
            {"property": "Publish Date", "direction": "descending"},
        ],
        "page_size": MAX_CARDS,
    }
    result = notion_request(
        f"/databases/{TEACHINGS_DATABASE_ID}/query", "POST", body
    )
    return result.get("results", [])


def get_text(prop):
    """Extract plain text from a rich_text or title Notion property."""
    if not prop:
        return ""
    items = prop.get("rich_text") or prop.get("title") or []
    return "".join(item.get("plain_text", "") for item in items).strip()


def get_select(prop):
    """Extract the name from a select Notion property."""
    if not prop or not prop.get("select"):
        return ""
    return prop["select"].get("name", "").strip()


def parse_teaching(page):
    p = page.get("properties", {})
    return {
        "title":          get_text(p.get("Title", {})),
        "excerpt":        get_text(p.get("Excerpt", {})),
        "topic":          get_select(p.get("Topic", {})),
        "key_scripture":  get_text(p.get("Key Scripture", {})),
        "type":           get_select(p.get("Type", {})),
        "duration":       get_text(p.get("Duration", {})),
        "slug":           get_text(p.get("Slug", {})),
    }


# ── HTML Generation ───────────────────────────────────────────────────────────

def make_card(t):
    title   = t["title"]   or "Untitled"
    excerpt = t["excerpt"] or ""

    if t["type"] == "Article":
        tag = t["topic"] or "Article"
        return (
            f'                <div class="teaching-card">\n'
            f'                    <div class="teaching-thumb article-thumb" aria-hidden="true"></div>\n'
            f'                    <p class="teaching-tag">{tag}</p>\n'
            f'                    <h3 class="teaching-title">{title}</h3>\n'
            f'                    <p class="teaching-desc">{excerpt}</p>\n'
            f'                    <span class="teaching-meta">Article</span>\n'
            f'                </div>'
        )
    else:
        # Teaching (video)
        if t["key_scripture"] and t["topic"]:
            tag = f"{t['key_scripture']} &middot; {t['topic']}"
        elif t["key_scripture"]:
            tag = t["key_scripture"]
        else:
            tag = t["topic"] or "Teaching"

        duration = t["duration"] or ""
        return (
            f'                <div class="teaching-card">\n'
            f'                    <div class="teaching-thumb">\n'
            f'                        <div class="play-hint">\n'
            f'                            <div class="play-circle">\n'
            f'                                <svg viewBox="0 0 16 16"><polygon points="4,2 14,8 4,14"/></svg>\n'
            f'                            </div>\n'
            f'                            <span class="play-label">{duration}</span>\n'
            f'                        </div>\n'
            f'                    </div>\n'
            f'                    <p class="teaching-tag">{tag}</p>\n'
            f'                    <h3 class="teaching-title">{title}</h3>\n'
            f'                    <p class="teaching-desc">{excerpt}</p>\n'
            f'                    <span class="teaching-meta">Teaching</span>\n'
            f'                </div>'
        )


EMPTY_CARD = (
    '                <div class="teaching-card">\n'
    '                    <div class="teaching-thumb article-thumb" aria-hidden="true"></div>\n'
    '                    <p class="teaching-tag">Coming Soon</p>\n'
    '                    <h3 class="teaching-title">Teachings are on the way</h3>\n'
    '                    <p class="teaching-desc">New teachings and articles will appear here as they are published.</p>\n'
    '                    <span class="teaching-meta">Teaching</span>\n'
    '                </div>'
)


def build_replacement(teachings):
    cards = "\n".join(make_card(t) for t in teachings) if teachings else EMPTY_CARD
    return (
        f"{START_MARKER}\n"
        f"{cards}\n"
        f"                {END_MARKER}"
    )


# ── File Update ───────────────────────────────────────────────────────────────

def update_homepage(project_root, teachings):
    path = os.path.join(project_root, "src", "index.html")

    if not os.path.exists(path):
        print(f"Error: {path} not found.")
        print(f"Make sure project_root is correct: {project_root}")
        sys.exit(1)

    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    if START_MARKER not in html:
        print(f"Error: {START_MARKER} not found in {path}")
        print("The HTML markers may have been removed. Re-add them manually:")
        print(f"  Inside <div class=\"teachings-grid\">, wrap card content with:")
        print(f"  {START_MARKER} ... {END_MARKER}")
        sys.exit(1)

    replacement = build_replacement(teachings)
    new_html = MARKER_PATTERN.sub(replacement, html)

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_html)

    print(f"Updated: src/index.html")


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    project_root = (
        os.path.abspath(sys.argv[1])
        if len(sys.argv) > 1
        else os.path.expanduser("~/Desktop/ForTheSoul")
    )

    print(f"Project: {project_root}")
    print("Fetching published teachings from Notion...")

    pages = fetch_published_teachings()
    teachings = [parse_teaching(p) for p in pages]

    if teachings:
        print(f"Found {len(teachings)} published teaching(s):")
        for t in teachings:
            label = t["type"] or "Teaching"
            print(f"  [{label}] {t['title']}")
    else:
        print("No published teachings — homepage will show empty state.")

    update_homepage(project_root, teachings)

    print("Running build...")
    result = os.system(f'cd "{project_root}" && ./build.sh')
    if result != 0:
        print("Build failed.")
        sys.exit(1)

    print()
    print("Done.")
    print("Preview:  cd src && python3 -m http.server 8000")
    print("Commit:   git add src/index.html && git commit -m 'Publish teachings from Notion'")


if __name__ == "__main__":
    main()
