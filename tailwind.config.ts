import type { Config } from 'tailwindcss';

/**
 * Design tokens live here and in src/styles/tokens.css — never as magic values in
 * components (see prompt §3 / §6.1). Colors resolve to CSS variables so the same
 * Tailwind class works on dark and inverse (cream) surfaces. The `<alpha-value>`
 * channel form keeps opacity utilities (e.g. `text-fg/70`) working off tokens.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    // Explicit, brand-derived color scale. Nothing outside bg <-> fg and their
    // interpolations (prompt §11): no third-party hues.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: {
        DEFAULT: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        elevated: 'rgb(var(--color-bg-elevated-rgb) / <alpha-value>)',
      },
      fg: {
        DEFAULT: 'rgb(var(--color-fg-rgb) / <alpha-value>)',
        muted: 'rgb(var(--color-fg-rgb) / 0.66)',
        faint: 'rgb(var(--color-fg-rgb) / 0.56)',
      },
      border: 'rgb(var(--color-fg-rgb) / 0.12)',
      'border-strong': 'rgb(var(--color-fg-rgb) / 0.22)',
      inverse: {
        bg: 'rgb(var(--color-fg-rgb) / <alpha-value>)',
        fg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
      },
    },
    fontFamily: {
      // Single brand typeface — self-hosted Switzer, upright + italic (prompt §3.2).
      // Editorial accents use Switzer's own italic, so there is no second family.
      sans: ['var(--font-switzer)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    // Typographic hierarchy as tokens (prompt §3.2): display / h1 / h2 / h3 / body / caption.
    fontSize: {
      display: ['clamp(3rem, 8.5vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
      h1: ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      h2: ['clamp(2rem, 3.6vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.022em' }],
      h3: ['clamp(1.5rem, 2.3vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      'body-lg': ['1.1875rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
      body: ['1rem', { lineHeight: '1.65' }],
      caption: ['0.875rem', { lineHeight: '1.55' }],
      label: ['0.75rem', { lineHeight: '1', letterSpacing: '0.22em' }],
    },
    letterSpacing: {
      tighter: '-0.03em',
      tight: '-0.015em',
      normal: '0',
      wide: '0.05em',
      label: '0.2em',
      wider: '0.25em',
    },
    extend: {
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        shell: '80rem',
      },
      spacing: {
        section: 'clamp(5rem, 12vh, 11rem)',
        gutter: 'clamp(1.25rem, 5vw, 4rem)',
      },
      transitionTimingFunction: {
        // Brand easing — a calm, editorial ease used across micro-interactions.
        brand: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        // Transform-only marquee (prompt §7: never animate layout properties).
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
