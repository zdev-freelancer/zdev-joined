'use client';

import { motion } from 'framer-motion';

import { routes } from '@/config';
import { ArrowRight, Badge, Button, CircleField, Section } from '@/shared/components';
import { fadeInUp, staggerContainer, viewportOnce } from '@/shared/animations';
import { useReducedMotion } from '@/shared/hooks';

/**
 * EditorialSplit — media on one side, editorial copy on the other, carrying the
 * serif accent (prompt §5.5 / §3.2). The media frame is a circular-motif
 * placeholder ([PLACEHOLDER]) to be replaced with a real image.
 */
export function EditorialSplit() {
  const reduced = useReducedMotion();
  const container = staggerContainer(reduced ? 0.05 : 0.12);
  const item = fadeInUp(reduced);

  return (
    <Section id="editorial">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
      >
        <motion.div variants={item}>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-bg-elevated">
            {/* [PLACEHOLDER] editorial image */}
            <CircleField pattern="rings" className="absolute inset-0 scale-110 opacity-60" />
          </div>
        </motion.div>

        <motion.div variants={item}>
          <Badge>El oficio</Badge>
          {/* Titular con acento serif */}
          <h2 className="mt-5 text-h1 font-semibold">
            Hecho a mano para los{' '}
            <span className="font-normal italic text-fg-muted">momentos</span> que
            perduran.
          </h2>
          <p className="mt-6 max-w-md text-body-lg text-fg-muted">
            Cada pieza nace en el taller: cortada y cosida a mano con cuero de curtido vegetal
            elegido una por una.
          </p>
          <p className="mt-4 max-w-md text-body text-fg-muted">
            Sin prisa y sin excesos — solo el oficio que convierte una piel en algo que llevarás
            durante años.
          </p>
          <Button href={routes.oficio} variant="outline" className="mt-9">
            Conoce el oficio
            <ArrowRight width={18} height={18} />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
