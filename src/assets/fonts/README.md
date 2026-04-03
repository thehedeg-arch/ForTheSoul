# Fonts

Drop downloaded Google Font folders here.

Example structure after dropping in "Caveat":
```
fonts/
  Caveat/
    Caveat-Regular.ttf
    Caveat-Bold.ttf
    OFL.txt
```

Then reference the font in CSS like:
```css
@font-face {
    font-family: 'Caveat';
    src: url('../assets/fonts/Caveat/Caveat-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
}
```
