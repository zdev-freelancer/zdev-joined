import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib';

/**
 * Card — the neutral surface primitive for the bento grid and editorial blocks.
 * Extended only through variants (prompt §6.3-O). `interactive` adds a
 * transform-only hover lift (§7); it never changes layout on hover.
 */
export const cardVariants = cva('relative isolate overflow-hidden rounded-[1.75rem]', {
  variants: {
    variant: {
      surface: 'bg-bg-elevated',
      outline: 'border border-border bg-transparent',
      cream: 'bg-inverse-bg text-inverse-fg',
    },
    padding: {
      none: '',
      sm: 'p-6',
      md: 'p-8',
      lg: 'p-10 md:p-12',
    },
    interactive: {
      true: 'transition-transform duration-500 ease-brand will-change-transform hover:-translate-y-1.5',
      false: '',
    },
  },
  defaultVariants: { variant: 'surface', padding: 'md', interactive: false },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, variant, padding, interactive, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      data-surface={variant === 'cream' ? 'inverse' : undefined}
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  );
});
