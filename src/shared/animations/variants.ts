import type { Variants } from 'framer-motion';

/**
 * Central animation vocabulary (prompt §7). Components import these factories —
 * they never redefine motion locally. Every variant animates ONLY `opacity` and
 * `transform` (GPU-friendly, prompt §7). Each factory takes `reduced` so that,
 * when the user prefers reduced motion, movement collapses to a short opacity
 * fade instead of translating/scaling.
 */

/** Brand easing — calm, editorial (mirrors Tailwind's `ease-brand`). */
export const BRAND_EASE = [0.22, 1, 0.36, 1] as const;

/** Shared `whileInView` viewport config: reveal once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const;

export function fadeInUp(reduced = false): Variants {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.24 : 0.72, ease: BRAND_EASE },
    },
  };
}

export function scaleIn(reduced = false): Variants {
  return {
    hidden: { opacity: 0, scale: reduced ? 1 : 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduced ? 0.24 : 0.66, ease: BRAND_EASE },
    },
  };
}

/**
 * Parent container that staggers its children. Children must expose `hidden` /
 * `visible` variant keys (fadeInUp / scaleIn do). Drives the bento reveal rhythm.
 */
export function staggerContainer(stagger = 0.09, delayChildren = 0.05): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

/**
 * Circle/pill reveal echoing the logo motif — used by the hero decorative
 * graphic. Reduced motion keeps it a static fade (no scale/rotate).
 */
export function circleReveal(reduced = false): Variants {
  return {
    hidden: { opacity: 0, scale: reduced ? 1 : 0.8, rotate: reduced ? 0 : -6 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: reduced ? 0.3 : 1.4, ease: BRAND_EASE },
    },
  };
}
