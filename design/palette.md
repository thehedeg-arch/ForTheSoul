# Design Tokens & Palette

Final decisions go here as CSS custom properties, ready to paste into styles.css.

## Chosen Direction

**Vibe**: restful, serene, calm, dark — editorial and intimate
**Activities**: reading, video consumption
**Aesthetic**: clean structure, vintage elements

## Tokens

```css
:root {
    /* Base Color Variables */
    --color-jet-black:  #0a2d33;
    --color-sky-blue:      #86c5d6;
    --color-sky-blue-dark: #77a5af;
    --color-pale-oak:      #e4ccaa;
    --color-seashell:   #fff3ec;
    --color-pure-white:   #ffffff;
    --color-status-green: #4b5b34;
    --color-amber:        #d38c24;

    /* Opacity Shades for Interactions */
    --color-jet-black-80:  rgba(10, 45, 51, 0.8);
    --color-pale-oak-80:   rgba(228, 204, 170, 0.8);
    --color-seashell-80:   rgba(255, 243, 236, 0.8);

    /* Semantic Mappings - Backgrounds */
    --color-bg:         var(--color-jet-black);
    --color-bg-inverse: var(--color-seashell);
    --color-bg-alt:     var(--color-jet-black-80);

    /* Semantic Mappings - Typography */
    --color-text:         var(--color-seashell);
    --color-text-inverse: var(--color-jet-black);
    --color-text-muted:   var(--color-seashell-80);

    /* Semantic Mappings - Accents & UI */
    --color-accent:        var(--color-sky-blue);
    --color-accent-hover:  var(--color-sky-blue-dark);
    --color-highlight:     var(--color-amber);
    --color-border:        rgba(255, 243, 236, 0.2);
    --color-border-subtle: rgba(255, 243, 236, 0.1);

    /* Status Colors */
    --color-status-success: var(--color-status-green);

    /* Interactive States (Hover) */
    --color-bg-hover:       var(--color-jet-black-80);

    /* Expanded Design Tokens (Typography, Shapes, Shadows) */
    --font-heading: "Gloock", serif;
    --font-body: "Jost", sans-serif;
    
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    
    --shadow-sm: 0 2px 4px rgba(10, 45, 51, 0.05); /* Jet Black with 5% opacity */
}

@media (prefers-color-scheme: light) {
    :root {
        /* Light Mode Overrides */
        --color-bg:         var(--color-seashell);
        --color-bg-inverse: var(--color-jet-black);
        --color-bg-alt:     var(--color-pale-oak);

        --color-text:         var(--color-jet-black);
        --color-text-inverse: var(--color-seashell);
        --color-text-muted:   var(--color-jet-black-80);

        --color-border:        var(--color-pale-oak);
        --color-border-subtle: color-mix(in srgb, var(--color-pale-oak) 50%, transparent);

        --color-bg-hover:      var(--color-pale-oak-80);
    }
}
```

## Raw Color Data

### CSV
`0a2d33,86c5d6,77a5af,e4ccaa,fff3ec,ffffff,4b5b34,d38c24`

### With #
`#0a2d33, #86c5d6, #77a5af, #e4ccaa, #fff3ec, #ffffff, #4b5b34, #d38c24`

### Array
```json
["0a2d33","86c5d6","77a5af","e4ccaa","fff3ec","ffffff","4b5b34","d38c24"]
```

### Object
```json
{
  "Jet Black": "0a2d33",
  "Sky Blue (Light)": "86c5d6",
  "Sky Blue (Dark)": "77a5af",
  "Pale Oak": "e4ccaa",
  "Seashell": "fff3ec",
  "Pure White": "ffffff",
  "Status Green": "4b5b34",
  "Amber": "d38c24"
}
```

### Extended Array
```json
[
  {"name":"Jet Black","hex":"0a2d33","rgb":[10,45,51],"cmyk":[80,12,0,80],"hsb":[189,80,20],"hsl":[189,67,12],"lab":[16,-10,-8]},
  {"name":"Sky Blue (Light)","hex":"86c5d6","rgb":[134,197,214],"cmyk":[37,8,0,16],"hsb":[193,37,84],"hsl":[193,49,68],"lab":[76,-16,-15]},
  {"name":"Sky Blue (Dark)","hex":"77a5af","rgb":[119,165,175],"cmyk":[32,6,0,31],"hsb":[191,32,69],"hsl":[191,26,58],"lab":[66,-14,-12]},
  {"name":"Pale Oak","hex":"e4ccaa","rgb":[228,204,170],"cmyk":[0,11,25,11],"hsb":[35,25,89],"hsl":[35,52,78],"lab":[83,3,20]},
  {"name":"Seashell","hex":"fff3ec","rgb":[255,243,236],"cmyk":[0,5,7,0],"hsb":[22,7,100],"hsl":[22,100,96],"lab":[97,3,5]},
  {"name":"Pure White","hex":"ffffff","rgb":[255,255,255],"cmyk":[0,0,0,0],"hsb":[0,0,100],"hsl":[0,0,100],"lab":[100,0,0]},
  {"name":"Status Green","hex":"4b5b34","rgb":[75,91,52],"cmyk":[18,0,43,64],"hsb":[85,43,36],"hsl":[85,27,28],"lab":[36,-11,19]},
  {"name":"Amber","hex":"d38c24","rgb":[211,140,36],"cmyk":[0,34,83,17],"hsb":[36,83,83],"hsl":[36,71,48],"lab":[59,19,55]}
]
```

### XML
```xml
<palette>
  <color name="Jet Black" hex="0a2d33" r="10" g="45" b="51" />
  <color name="Sky Blue (Light)" hex="86c5d6" r="134" g="197" b="214" />
  <color name="Sky Blue (Dark)" hex="77a5af" r="119" g="165" b="175" />
  <color name="Pale Oak" hex="e4ccaa" r="228" g="204" b="170" />
  <color name="Seashell" hex="fff3ec" r="255" g="243" b="236" />
  <color name="Pure White" hex="ffffff" r="255" g="255" b="255" />
  <color name="Status Green" hex="4b5b34" r="75" g="91" b="52" />
  <color name="Amber" hex="d38c24" r="211" g="140" b="36" />
</palette>
```

## Rationale

**Selection**: blue/cream balance — provides good contrast while maintaining a subtle, toned visual
**Highlighting**: amber for content warmth; pure white for crispness

## Usage Guidelines

- **Jet Black (`var(--color-text)`)**: Primary typography, heavy emphasis headings, footer backgrounds.
- **Seashell (`var(--color-bg)`)**: Primary page backgrounds and cards. Keeps the screen restful.
- **Sky Blue (`var(--color-accent)`)**: CTA button backgrounds and icon fills only. Do not use as text color on Seashell — contrast is insufficient.
- **Sky Blue Dark (`var(--color-accent-hover)`)**: Hover and active states for Sky Blue buttons and interactive elements.
- **Pale Oak (`var(--color-bg-alt)`)**: Secondary container backgrounds (e.g. blockquotes), subtle borders. Creates depth without disrupting the core bright visual.
- **Amber (`var(--color-highlight)`)**: Pull quotes, featured scripture, content callouts, and warm emphasis. Do not use for interactive elements — that role belongs to Sky Blue.
- **Status Green (`var(--color-status-success)`)**: Use strictly for positive banners or success toasts.
- **Pure White (`--color-pure-white`)**: Use sparingly to highlight specific foreground cards next to the Seashell base.
