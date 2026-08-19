import type { ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib';

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  /** Marks the link as the current route (persistent underline + aria-current). */
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * NavLink — client-routed nav link (next/link) with a transform-only animated
 * underline (prompt §7). The underline is a scaleX reveal from the left; when
 * `active` it stays revealed. No layout property animates.
 */
export function NavLink({ href, children, active = false, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group relative inline-flex items-center py-1 text-caption transition-colors duration-300 ease-brand',
        active ? 'text-fg' : 'text-fg-muted hover:text-fg',
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          'absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ease-brand',
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
        )}
      />
    </Link>
  );
}
