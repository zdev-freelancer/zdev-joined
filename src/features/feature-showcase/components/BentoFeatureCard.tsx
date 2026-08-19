import Link from 'next/link';

import { ArrowRight, Card } from '@/shared/components';
import type { FeatureItem } from '../feature-showcase.types';

interface BentoFeatureCardProps extends FeatureItem {
  index: number;
}

/** Text feature card: circular step badge (logo motif) + title + description. */
export function BentoFeatureCard({ index, title, description, href }: BentoFeatureCardProps) {
  return (
    <Card interactive padding="lg" className="group flex h-full min-h-[16rem] flex-col justify-between gap-10">
      <span className="grid h-11 w-11 place-items-center rounded-pill border border-border text-caption text-fg-muted">
        {String(index).padStart(2, '0')}
      </span>
      <div>
        <h3 className="text-h3 font-medium">{title}</h3>
        <p className="mt-3 text-body text-fg-muted">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 text-caption text-fg transition-transform duration-300 ease-brand group-hover:translate-x-1"
        >
          Conoce más
          <ArrowRight width={16} height={16} />
        </Link>
      </div>
    </Card>
  );
}
