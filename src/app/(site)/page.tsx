import { EditorialSplit } from '@/features/editorial-split';
import { FeatureShowcase } from '@/features/feature-showcase';
import { Hero } from '@/features/hero';
import { NewsletterCta } from '@/features/newsletter-cta';
import { SocialProof } from '@/features/social-proof';
import { ValueProposition } from '@/features/value-proposition';

/**
 * La home compone las features en orden narrativo (prompt §5) y no contiene
 * lógica propia (§6.4). Navbar y Footer viven en el layout del sitio.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <FeatureShowcase />
      <EditorialSplit />
      <SocialProof />
      <NewsletterCta />
    </main>
  );
}
