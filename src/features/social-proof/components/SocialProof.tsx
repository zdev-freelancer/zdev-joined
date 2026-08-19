'use client';

import { motion } from 'framer-motion';

import { Badge, Section } from '@/shared/components';
import { fadeInUp, staggerContainer, viewportOnce } from '@/shared/animations';
import { useReducedMotion } from '@/shared/hooks';

// [PLACEHOLDER] — nombres de prensa/aliados como wordmarks (aún sin logos reales).
const LOGOS = ['Atelier', 'Materia', 'Oficio', 'Perene', 'Cuero&Co'] as const;

/**
 * SocialProof — a single featured pull quote in the editorial serif plus a muted
 * wordmark row (prompt §5.6). Deliberately sober: no loud iconography.
 */
export function SocialProof() {
  const reduced = useReducedMotion();
  const container = staggerContainer(reduced ? 0.05 : 0.12);
  const item = fadeInUp(reduced);

  return (
    <Section id="voces">
      <motion.figure
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="flex justify-center">
          <Badge>Voces</Badge>
        </motion.div>
        {/* [PLACEHOLDER] cita */}
        <motion.blockquote
          variants={item}
          className="mt-8 text-h1 font-normal italic leading-[1.1]"
        >
          &ldquo;No compré un accesorio. Empecé una colección que me acompaña a todas
          partes.&rdquo;
        </motion.blockquote>
        {/* [PLACEHOLDER] atribución */}
        <motion.figcaption variants={item} className="mt-8 text-caption text-fg-muted">
          — Cliente, primera colección
        </motion.figcaption>
      </motion.figure>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        aria-label="Presentes en"
      >
        {LOGOS.map((name) => (
          <motion.li key={name} variants={item} className="text-label uppercase text-fg-faint">
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
