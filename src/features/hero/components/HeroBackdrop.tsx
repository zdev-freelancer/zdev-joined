'use client';

import Image from 'next/image';
import { motion, type MotionValue, type Variants } from 'framer-motion';

interface HeroBackdropProps {
  /** Vertical parallax offset (transform only) supplied by the hero. */
  y: MotionValue<number>;
  variants: Variants;
}

/**
 * The hero's decorative circular graphic (prompt §5.2 / §8a) — the "Concentric
 * Quiet" figure generated with /canvas-design from the logo's ring + pill motif,
 * in the brand palette only. Parallax moves `transform` exclusively (§7).
 */
export function HeroBackdrop({ y, variants }: HeroBackdropProps) {
  return (
    <motion.div
      aria-hidden
      style={{ y }}
      variants={variants}
      className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
    >
      <div className="relative aspect-square w-[44rem] max-w-[94vw]">
        <Image
          src="/assets/hero/hero-figure.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 94vw, 44rem"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
