import type { ElementType, ReactNode } from 'react';

import { cn } from '@/shared/lib';
import { Container } from './Container';

export interface SectionProps {
  id?: string;
  /** `inverse` paints the cream surface + dark text used for the closing CTA (§7). */
  surface?: 'dark' | 'inverse';
  /** Skip the inner container for full-bleed sections. */
  bleed?: boolean;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

/**
 * Section — shared vertical rhythm + surface switch. Centralising this keeps
 * every feature under the ~150-line budget (prompt §6.3-S) and guarantees the
 * cream/dark surfaces (and their focus-ring flip) are applied consistently.
 */
export function Section({
  id,
  surface = 'dark',
  bleed = false,
  as: Tag = 'section',
  className,
  containerClassName,
  children,
}: SectionProps) {
  const isInverse = surface === 'inverse';
  return (
    <Tag
      id={id}
      data-surface={isInverse ? 'inverse' : undefined}
      className={cn('relative py-section', isInverse && 'bg-inverse-bg text-inverse-fg', className)}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </Tag>
  );
}
