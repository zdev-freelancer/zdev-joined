import type { Variants } from 'framer-motion';

/** Reveal timeline returned by useHeroReveal. */
export interface HeroReveal {
  readonly container: Variants;
  readonly item: Variants;
  readonly reduced: boolean;
}
