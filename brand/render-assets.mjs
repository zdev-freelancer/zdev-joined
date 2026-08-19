// Renders the "Concentric Quiet" brand assets (prompt §8) from vector to PNG.
// Palette is locked to the logo: night #0A0D16, cream #FEF1E1. Run: node brand/render-assets.mjs
import { Resvg } from '@resvg/resvg-js';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const NIGHT = '#0A0D16';
const CREAM = '#FEF1E1';
const FONTS = ['400', '500', '600', '700'].map((w) => resolve(`brand/fonts/Switzer-${w}.ttf`));

/** Concentric rings + signature pill + orbiting dots, centered at (cx,cy). */
function orbit(cx, cy, radii, { pillR = radii[radii.length - 1], strokeMax = 0.42 } = {}) {
  const rings = radii
    .map((r, i) => {
      const o = (strokeMax - i * (strokeMax / (radii.length + 1))).toFixed(3);
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${CREAM}" stroke-width="1.4" opacity="${o}"/>`;
    })
    .join('');
  const pillW = pillR * 0.62;
  const pillH = pillW * 0.42;
  const pill = `<rect x="${cx - pillW / 2}" y="${cy - pillR - pillH / 2}" width="${pillW}" height="${pillH}" rx="${pillH / 2}" fill="none" stroke="${CREAM}" stroke-width="2" opacity="0.7"/>`;
  const dots = [
    [cx, cy - pillR, 5, 0.85],
    [cx + radii[radii.length - 1], cy, 6, 0.5],
    [cx - radii[Math.floor(radii.length / 2)], cy + radii[Math.floor(radii.length / 2)] * 0.7, 5, 0.4],
  ]
    .map(([x, y, r, o]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${CREAM}" opacity="${o}"/>`)
    .join('');
  return rings + pill + dots;
}

// ── A. Hero decorative figure (transparent, 1600×1600) ────────────────────────
const heroFigure = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1600" viewBox="0 0 1600 1600">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${CREAM}" stop-opacity="0.12"/>
      <stop offset="55%" stop-color="${CREAM}" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="${CREAM}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="800" cy="800" r="760" fill="url(#glow)"/>
  ${orbit(800, 800, [150, 268, 386, 504, 622, 730], { strokeMax: 0.4 })}
</svg>`;

// ── B. Open Graph share card (1200×630) ───────────────────────────────────────
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="ogGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${CREAM}" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="${CREAM}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="frame"><rect width="1200" height="630"/></clipPath>
  </defs>
  <g clip-path="url(#frame)">
    <rect width="1200" height="630" fill="${NIGHT}"/>
    <circle cx="1090" cy="315" r="460" fill="url(#ogGlow)"/>
    ${orbit(1090, 315, [120, 220, 320, 420], { strokeMax: 0.34 })}
    <text x="94" y="232" font-family="Switzer" font-weight="500" font-size="21" letter-spacing="6" fill="${CREAM}" fill-opacity="0.6">ACCESORIOS DE CUERO</text>
    <text x="90" y="372" font-family="Switzer" font-weight="600" font-size="132" letter-spacing="-4" fill="${CREAM}">Joined</text>
    <rect x="96" y="410" width="300" height="2" fill="${CREAM}" opacity="0.22"/>
    <text x="94" y="454" font-family="Switzer" font-weight="400" font-size="27" fill="${CREAM}" fill-opacity="0.72">Cuero que se une a tu vida.</text>
    <text x="94" y="566" font-family="Switzer" font-weight="500" font-size="18" letter-spacing="4" fill="${CREAM}" fill-opacity="0.42">JOINED.EXAMPLE</text>
  </g>
</svg>`;

// ── C. App icon (180×180) ─────────────────────────────────────────────────────
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="42" fill="${NIGHT}"/>
  <rect x="34" y="76" width="84" height="50" rx="25" fill="none" stroke="${CREAM}" stroke-width="14"/>
  <circle cx="143" cy="62" r="14" fill="${CREAM}"/>
</svg>`;

const TARGETS = [
  { svg: heroFigure, out: 'public/assets/hero/hero-figure.png' },
  { svg: og, out: 'public/assets/og/joined-og.png' },
  { svg: icon, out: 'src/app/apple-icon.png' },
];

for (const { svg, out } of TARGETS) {
  const resvg = new Resvg(svg, {
    font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'Switzer' },
    shapeRendering: 2,
    textRendering: 2,
  });
  const png = resvg.render().asPng();
  mkdirSync(dirname(resolve(out)), { recursive: true });
  writeFileSync(resolve(out), png);
  console.log(`${out} -> ${png.length} bytes`);
}
