import localFont from 'next/font/local';

/**
 * Typography (prompt §3.2) — a SINGLE self-hosted typeface: Switzer, the brand
 * geometric sans. Upright + true italic faces are shipped so editorial accents
 * stay in italic without introducing a second font family. Exposed as a CSS
 * variable consumed by Tailwind's `fontFamily`; components never name a family.
 */
export const switzer = localFont({
  src: [
    { path: './files/Switzer-400.woff2', weight: '400', style: 'normal' },
    { path: './files/Switzer-Italic-400.woff2', weight: '400', style: 'italic' },
    { path: './files/Switzer-500.woff2', weight: '500', style: 'normal' },
    { path: './files/Switzer-Italic-500.woff2', weight: '500', style: 'italic' },
    { path: './files/Switzer-600.woff2', weight: '600', style: 'normal' },
    { path: './files/Switzer-Italic-600.woff2', weight: '600', style: 'italic' },
    { path: './files/Switzer-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-switzer',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});
