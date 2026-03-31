# For The Soul

## 1. Overview
- Personal ministry teaching platform — Henok's own voice: teachings, discipleship, the Stage
- Stack: vanilla HTML/CSS/JS (no framework, no npm)
- Priorities: performance, consistency, minimal dependencies, minimal diffs
- Separate from Anbessa Studios — never mix production services with ministry content

## 2. Tech Stack
- Google Fonts CDN (Gloock heading, Jost body)
- Build tool: `build.sh` (copies `src/` → `site/`)
- Git remote: `git@github.com:thehedeg-arch/ForTheSoul.git`
- Deploy: Netlify auto-deploy on push to `main` — https://forthesoul.netlify.app
- Domain: `forthesoul.ca` (Porkbun registrar, Netlify DNS)

## 3. Repo Map
```
ForTheSoul/
  CLAUDE.md                    ← this file
  .gitignore                   ← excludes site/ and .DS_Store
  build.sh                     ← copies src/ → site/
  netlify.toml                 ← hosting build config (publish = site/)
  state/
    progress.md                ← current task state
    open_issues.md             ← pending decisions and risks
    verification_log.md        ← test outcomes
  src/
    index.html                 ← homepage
```

## 4. Build & Dev

### Dev Server
```bash
cd src && python3 -m http.server 8000
# Homepage: http://localhost:8000/
```

### Build
```bash
./build.sh
```

## 5. Brand Rules (Hard Constraints)
- NO emojis — SVG line icons only
- NO personal production services — this is ministry only
- NO heavy animation libraries — loading speed is priority
- NO external JS dependencies — vanilla only
- Bold CTAs — never subtle or understated
- Font hierarchy: Gloock (headings), Jost (body)

## 6. Editing Rules

### DO
- Read the file(s) you're changing before editing
- Use repo-relative paths in explanations
- Keep diffs minimal — change only what's needed
- Preserve 4-space indentation

### DON'T
- Add emojis to any file
- Add comments or annotations to code you didn't change
- Introduce external JS libraries or CSS frameworks
- Edit `site/` directly — edit `src/` instead

## 7. When to Read Files

| Task | Read first |
|---|---|
| Edit homepage | `src/index.html` |
| Edit styles | `src/css/styles.css` |
| Change nav links | all files containing nav |
| Change deployment config | `netlify.toml`, `build.sh` |

## 8. Deployment
- Platform: Netlify
- Deploy trigger: auto-deploy on push to `main`
- Domain: `forthesoul.ca` via Netlify DNS
- Publish dir: `site/` — build command: `bash build.sh`

## 9. Output Expectations
- Use repo-relative paths by default
- List all files changed at the end of a task
- After link/string changes, verify zero stale references remain
- After build changes, run `./build.sh` and confirm success

## 10. Extensions
- Global skills: `/preflight`, `/seo-audit`, `/deep-research`
- Global agents: `reviewer`, `seo-auditor`, `research`
- Safety deny rules in `~/.claude/settings.json`
