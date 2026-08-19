'use client';

import { motion } from 'framer-motion';

import { Container } from '@/shared/components';
import { fadeInUp, staggerContainer, viewportOnce } from '@/shared/animations';
import { useReducedMotion } from '@/shared/hooks';
import { PIECES } from '../collection.data';
import { CollectionCard } from './CollectionCard';

/** Grid de la colección con revelado escalonado al hacer scroll (§7). */
export function CollectionGrid() {
  const reduced = useReducedMotion();
  const container = staggerContainer(reduced ? 0.05 : 0.09);
  const item = fadeInUp(reduced);

  return (
    <section className="pb-section">
      <Container>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PIECES.map((piece) => (
            <motion.li key={piece.slug} variants={item}>
              <CollectionCard piece={piece} />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
