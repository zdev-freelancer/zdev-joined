'use client';

import { motion } from 'framer-motion';

import { routes } from '@/config';
import { Badge, Section } from '@/shared/components';
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from '@/shared/animations';
import { useReducedMotion } from '@/shared/hooks';
import { BentoBannerCard } from './BentoBannerCard';
import { BentoFeatureCard } from './BentoFeatureCard';
import { BentoMediaCard } from './BentoMediaCard';
import type { FeatureItem } from '../feature-showcase.types';

// Copy del ecosistema (prompt §5.4).
const FEATURES: readonly FeatureItem[] = [
  { title: 'Piezas que conversan', description: 'Billeteras, correas y bolsos que combinan entre sí.', href: routes.coleccion },
  { title: 'Cuero que envejece contigo', description: 'Una pátina única que va contando tu historia.', href: routes.coleccion },
  { title: 'Un sistema que crece', description: 'Empieza con una pieza; suma el resto a tu ritmo.', href: routes.coleccion },
];

/**
 * FeatureShowcase — asymmetric bento grid with a staggered scroll reveal,
 * echoing the rhythm of Pinterest ref 2 (prompt §5.4 / §7). Layout composition
 * only; each card owns its own presentation.
 */
export function FeatureShowcase() {
  const reduced = useReducedMotion();
  const container = staggerContainer(reduced ? 0.05 : 0.1);
  const rise = fadeInUp(reduced);
  const pop = scaleIn(reduced);

  return (
    <Section id="showcase">
      <div className="max-w-2xl">
        <Badge>El ecosistema</Badge>
        <h2 className="mt-5 text-h1 font-semibold">Todo lo que llevas contigo, unido.</h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6"
      >
        <motion.div variants={rise} className="md:col-span-4">
          <BentoBannerCard
            eyebrow="Destacado"
            title="Una pieza que recuerda cada lugar donde estuviste."
            href={routes.coleccion}
          />
        </motion.div>
        <motion.div variants={pop} className="md:col-span-2">
          <BentoMediaCard label="Colección" />
        </motion.div>

        {FEATURES.map((feature, index) => (
          <motion.div key={feature.title} variants={rise} className="md:col-span-2">
            <BentoFeatureCard index={index + 1} {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
