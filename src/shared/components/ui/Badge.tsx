import type { HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib';

/**
 * Badge — the tracked, uppercase editorial eyebrow (the "SHOP"-style label from
 * the Pinterest reference, prompt §3.2 / §4). The optional leading dot is a
 * filled circle echoing the logo motif (§3.3), not decoration for its own sake.
 */
export const badgeVariants = cva(
  'inline-flex items-center gap-2.5 font-medium uppercase text-label',
  {
    variants: {
      surface: {
        dark: 'text-fg-muted',
        cream: 'text-inverse-fg/70',
      },
    },
    defaultVariants: { surface: 'dark' },
  },
);

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  /** Show the leading circular bullet (logo motif). Defaults to true. */
  withDot?: boolean;
  children: ReactNode;
}

export function Badge({ className, surface, withDot = true, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ surface }), className)} {...props}>
      {withDot ? (
        <span
          aria-hidden
          className="h-1.5 w-1.5 shrink-0 rounded-pill bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}
