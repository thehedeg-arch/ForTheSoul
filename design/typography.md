# Typography

Font decisions and scale — ready to implement once confirmed.

## Fonts
- Headings: Gloock (confirmed)
- Body: Jost (confirmed)

## Weights to load
<!-- Load only what's used. Each weight ~15-25KB. -->
- Gloock: 400 (regular only — no bold variant needed)
- Jost: 400, 500

## Type Scale

| Role        | Size                      | Weight | Font   |
|-------------|---------------------------|--------|--------|
| Display     | `clamp(2.5rem, 6vw, 5rem)` | 400   | Gloock |
| H1          | `clamp(2rem, 4vw, 3rem)`   | 400   | Gloock |
| H2          | `clamp(1.5rem, 3vw, 2rem)` | 400   | Gloock |
| H3          | `1.125rem`                 | 500   | Jost   |
| Body        | `1.125rem` (18px)          | 400   | Jost   |
| Small/Label | `0.9rem`                   | 400   | Jost   |

## Line height / Letter spacing notes

- Display / H1: `line-height: 1.1`
- H2: `line-height: 1.2`
- Body: `line-height: 1.6`
- H3: `letter-spacing: 0.08em`, `text-transform: uppercase`
