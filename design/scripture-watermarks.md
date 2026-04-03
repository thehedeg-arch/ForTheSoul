# Scripture Watermarks

These full ESV verses appear as faint handwritten text in the page background -
always behind content, never competing with it.
They are decorative only, not primary readable page content.

---

## Translation & Attribution

- **Translation locked:** ESV only
- **Current verse list:** Every verse in this file is ESV
- **Text rule:** Keep verse wording verbatim once entered here
- **Reference rule:** Keep the Scripture reference attached to each watermark and end it with `(ESV)`
- **Launch rule:** Before public launch, copy Crossway's current ESV digital-use notice verbatim into the site's footer or legal area
- **Permissions source:** `https://www.crossway.org/rights-and-permissions/esv/`
- **Guardrail:** Re-check permissions before launch if the site grows beyond a small set of decorative quotations

---

## Font

- **Font name:** "Rock Salt"
- **Current repo file:** `src/assets/fonts/Rock_Salt (1)/RockSalt-Regular.ttf`
- **Weights needed:** Regular (400) only
- **Implementation note:** Use the current repo path exactly as written above unless the folder is intentionally renamed in the repo and CSS together
- **Do not duplicate the font files.** If the folder is normalized later, rename the existing folder once instead of adding a second copy

---

## Accessibility & Rendering

- Watermarks are decorative only
- Render them in a dedicated background layer, not in the main reading flow
- If HTML nodes are used, mark the watermark container `aria-hidden="true"`
- Keep watermark layers non-interactive: `pointer-events: none` and `user-select: none`
- If a verse needs to be meaningfully read, surface it again in normal foreground content instead of relying on the watermark

---

## Watermark Schema

Each line = one decorative watermark on the page.

Format: `TEXT | REFERENCE | size | side | anchor | rotate`

- **REFERENCE:** `Book chapter:verse(s) (ESV)`
- **Size:** `sm` (subtle, small) · `md` (medium) · `lg` (large, statement)
- **Side:** `left` · `right` · `center`
- **Anchor:** `{section}-{slot}`
- `section`: `hero` · `featured` · `stage` · `foundations` · `about`
- `slot`: `top` · `mid` · `bottom`
- `rotate`: signed degree value from `-6deg` to `6deg`

Schema notes:

- Opacity is a global page rule, not a per-entry field
- Density is a global page rule, not a per-entry field
- Default to one watermark per major section unless design review explicitly adds another
- Keep side + anchor in margin lanes or obvious whitespace only
- If an anchor has no safe whitespace, skip that watermark instead of forcing it behind active content

```text
# Add your verses below - one per line
# Example format:
# Trust in the LORD with all your heart... | Proverbs 3:5 (ESV) | lg | left | hero-top | -4deg
# In the beginning was the Word... | John 1:1 (ESV) | md | right | featured-mid | 3deg
# Your word is a lamp to my feet... | Psalm 119:105 (ESV) | sm | left | foundations-bottom | -2deg
```

---

## Notes on Balance

- These are texture, not content - keep opacity very low (7-10%)
- Never use more than 4-5 per full page scroll
- Place them in margins and whitespace, not behind headline text
- Slight rotation (2-6deg) makes them feel handwritten, not stamped
- They should feel like marginalia in a well-worn Bible - present but quiet
