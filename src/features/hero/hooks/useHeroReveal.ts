'use client';

import { fadeInUp, staggerContainer } from '@/shared/animations';
import { useReducedMotion } from '@/shared/hooks';
import type { HeroReveal } from '../hero.types';

/**
 * Orchestrates the hero's on-load staggered reveal (prompt §5.2). Composes the
 * shared variants rather than redefining motion (§7), and downgrades to a plain
 * fade when reduced motion is requested.
 */
export function useHeroReveal(): HeroReveal {
  const reduced = useReducedMotion();
  return {
    container: staggerContainer(reduced ? 0.04 : 0.12, reduced ? 0 : 0.15),
    item: fadeInUp(reduced),
    reduced,
  };
}
