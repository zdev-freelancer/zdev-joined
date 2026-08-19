'use client';

import { cn } from '@/shared/lib';

export interface CircleIndicatorProps {
  /** Total number of steps. */
  count: number;
  /** Zero-based active index. */
  active: number;
  /** Optional selection handler; when omitted the indicator is presentational. */
  onSelect?: (index: number) => void;
  /** Accessible label for the group (e.g. "Hero highlights"). */
  label: string;
  className?: string;
}

/**
 * CircleIndicator — circular step/pagination control echoing the logo's circle
 * motif (prompt §3.3), inspired by the circular navigation in Pinterest ref 1.
 * The active step stretches into a pill (the signature 'o'); transitions are
 * transform/opacity only (§7). Interactive only when `onSelect` is provided.
 */
export function CircleIndicator({
  count,
  active,
  onSelect,
  label,
  className,
}: CircleIndicatorProps) {
  const interactive = typeof onSelect === 'function';

  return (
    <div
      role={interactive ? 'tablist' : 'group'}
      aria-label={label}
      className={cn('flex items-center gap-2.5', className)}
    >
      {Array.from({ length: count }, (_, index) => {
        const isActive = index === active;
        const dot = (
          <span
            className={cn(
              'block h-2 rounded-pill transition-all duration-500 ease-brand',
              isActive ? 'w-7 bg-fg' : 'w-2 bg-fg/30',
            )}
          />
        );

        if (!interactive) {
          return (
            <span key={index} aria-hidden>
              {dot}
            </span>
          );
        }

        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Step ${index + 1} of ${count}`}
            onClick={() => onSelect(index)}
            className="grid place-items-center p-1"
          >
            {dot}
          </button>
        );
      })}
    </div>
  );
}
