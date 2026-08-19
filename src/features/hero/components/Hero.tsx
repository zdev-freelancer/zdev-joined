'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { routes } from '@/config';
import { ArrowUpRight, Badge, Button, CircleIndicator } from '@/shared/components';
import { useHeroReveal } from '../hooks';
import { HeroBackdrop } from './HeroBackdrop';

/**
 * Hero — full-bleed opening (prompt §5.2). Headline reveals on load via the
 * staggered timeline from useHeroReveal; the decorative graphic parallaxes on
 * scroll using transform only (§7). Copy is [PLACEHOLDER] pending real content.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { container, item, reduced } = useHeroReveal();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -90]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-28"
    >
      <HeroBackdrop y={y} variants={item} />

      <div className="mx-auto w-full max-w-shell px-gutter">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <Badge>Accesorios de cuero</Badge>
          </motion.div>

          {/* Titular — acento serif sobre la palabra de marca */}
          <motion.h1 variants={item} className="mt-7 text-display font-semibold">
            Cuero que
            <br />
            se <span className="font-normal italic text-fg-muted">une</span> a tu
            vida.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p variants={item} className="mt-8 max-w-xl text-body-lg text-fg-muted">
            Piezas hechas a mano que envejecen contigo. No un producto: un ecosistema
            pensado para acompañarte cada día.
          </motion.p>

          {/* Único CTA (prompt §5.2) */}
          <motion.div variants={item} className="mt-11">
            <Button href={routes.coleccion} size="lg">
              Descubre la colección
              <ArrowUpRight width={18} height={18} />
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-16">
            <CircleIndicator count={4} active={0} label="Destacados de la colección" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
