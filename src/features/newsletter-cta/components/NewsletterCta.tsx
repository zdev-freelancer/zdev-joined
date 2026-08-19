'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { Badge, Section } from '@/shared/components';
import { fadeInUp, staggerContainer, viewportOnce } from '@/shared/animations';
import { useReducedMotion } from '@/shared/hooks';
import { useNewsletterForm } from '../hooks';
import { createNewsletterService } from '../services/newsletter.service';
import { NewsletterForm } from './NewsletterForm';

/**
 * NewsletterCta — closing call-to-action on the inverse cream surface for a hard
 * contrast shift (prompt §5.7). Binds the concrete service to the abstraction
 * here (§6.3-D) and hands a clean model to the presentational form.
 */
export function NewsletterCta() {
  const reduced = useReducedMotion();
  const service = useMemo(() => createNewsletterService(), []);
  const model = useNewsletterForm(service);

  const container = staggerContainer(reduced ? 0.05 : 0.1);
  const item = fadeInUp(reduced);

  return (
    <Section id="newsletter" surface="inverse">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.div variants={item} className="flex justify-center">
          <Badge surface="cream">Únete a Joined</Badge>
        </motion.div>
        {/* Titular */}
        <motion.h2 variants={item} className="mt-6 text-h1 font-semibold">
          Sé de los primeros en{' '}
          <span className="font-normal italic">unirte</span>.
        </motion.h2>
        {/* Subtítulo */}
        <motion.p variants={item} className="mx-auto mt-5 max-w-md text-body-lg text-inverse-fg/70">
          Acceso anticipado a cada nueva pieza, historias del taller y ediciones limitadas. Sin
          ruido.
        </motion.p>
        <motion.div variants={item}>
          <NewsletterForm {...model} />
        </motion.div>
      </motion.div>
    </Section>
  );
}
