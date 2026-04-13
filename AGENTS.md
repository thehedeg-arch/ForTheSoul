# For The Soul — Agent Instructions

Personal ministry teaching platform at forthesoul.ca.
Stack: vanilla HTML/CSS/JS. Build: `./build.sh` (src/ → site/). Deploy: Netlify auto-deploy on push to main.

## Key Rules
- Edit `src/` only — never `site/`
- No emojis in code or content — SVG icons only
- No external JS dependencies, no CSS frameworks
- 4-space indentation
- Never hand-edit the `<!-- TEACHINGS:START --> ... <!-- TEACHINGS:END -->` block — use `/publish`

## Publish Workflow
```bash
export NOTION_API_KEY=secret_...   # one-time — get token at notion.com/my-integrations
python3 scripts/publish.py         # fetches Published teachings, rebuilds homepage cards
```
See `scripts/publish.py` docstring for full setup instructions.
