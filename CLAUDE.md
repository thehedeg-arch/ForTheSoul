# For The Soul

## 1. Overview
- Personal ministry teaching platform — Henok's own voice: teachings, discipleship, the Stage
- Stack: vanilla HTML/CSS/JS (no framework, no npm) | Priorities: performance, minimal deps, minimal diffs
- Separate from Anbessa Studios — never mix production services with ministry content

## 2. Tech Stack
- Fonts: Google Fonts CDN — Gloock (headings), Jost (body)
- Build: `./build.sh` (copies `src/` → `site/`) | Dev: `cd src && python3 -m http.server 8000`
- Git: `git@github.com:thehedeg-arch/ForTheSoul.git`
- Deploy: Netlify auto-deploy on push to `main` — https://forthesoul.netlify.app | Domain: `forthesoul.ca`

## 3. Repo Map
```
ForTheSoul/
  CLAUDE.md / AGENTS.md        ← project instructions
  build.sh                     ← copies src/ → site/
  netlify.toml                 ← publish = site/
  scripts/publish.py           ← Notion CMS pipeline
  state/
    progress.md                ← current task state
    open_issues.md             ← pending decisions
  src/
    index.html                 ← homepage (only page right now)
    assets/                    ← logos, fonts
```

## 4. Brand Rules (Hard Constraints)
- NO emojis — SVG line icons only
- NO personal production services — ministry only
- NO external JS dependencies — vanilla only
- NO heavy animation libraries — CSS transitions + IntersectionObserver only
- Bold CTAs — never subtle | Font: Gloock (headings), Jost (body)

## 5. Editing Rules
- Read the file before editing. Edit `src/` only — never `site/`.
- Keep diffs minimal. Preserve 4-space indentation.
- Never hand-edit `<!-- TEACHINGS:START --> ... <!-- TEACHINGS:END -->` — always use `/publish`.

## 6. Deployment
- Netlify auto-deploys on push to `main`. Publish dir: `site/`. Build: `bash build.sh`.
- Domain: `forthesoul.ca` via Netlify DNS (registered at Porkbun).

## 7. Extensions
- Skills: `/preflight`, `/seo-audit`, `/deep-research`, `/publish`
- Agents: `reviewer`, `seo-auditor`, `research`
- Safety deny rules: `~/.claude/settings.json`

## 8. Notion CMS Pipeline
- **Notion DB:** https://www.notion.so/eec8fd55f6d24f13a805c07dcadde133
- **Data source:** `collection://b7f508e0-7694-44b6-8984-24e687a277b2`
- **Workflow:** Set Status = Published + Publish Date in Notion → run `/publish` → commit
- 3 most recent Published entries shown on homepage. See `scripts/publish.py` for full field docs.
