import { cn } from '@/shared/lib';

export interface CircleFieldProps {
  className?: string;
  /** Composition preset. `rings` = concentric orbit, `pill` = the signature stadium. */
  pattern?: 'rings' | 'pill';
}

/**
 * CircleField — procedural decorative graphic built from the logo's circle/pill
 * motif (prompt §3.3 / §8a). Pure currentColor at low opacity, so it stays
 * strictly within the brand palette (§11) and inverts on cream surfaces.
 * Reused by the hero, showcase and editorial features (shared, not per-feature).
 */
export function CircleField({ className, pattern = 'rings' }: CircleFieldProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
      className={cn('h-full w-full text-fg', className)}
    >
      {pattern === 'rings' ? (
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="200" cy="200" r="60" opacity="0.5" />
          <circle cx="200" cy="200" r="110" opacity="0.32" />
          <circle cx="200" cy="200" r="165" opacity="0.2" />
          <circle cx="200" cy="200" r="196" opacity="0.12" />
          {/* signature hollow pill riding one orbit */}
          <rect x="150" y="26" width="100" height="46" rx="23" opacity="0.65" strokeWidth="1.5" />
          {/* i-dot accents on the orbits */}
          <circle cx="200" cy="35" r="4" fill="currentColor" stroke="none" opacity="0.8" />
          <circle cx="365" cy="200" r="5" fill="currentColor" stroke="none" opacity="0.5" />
          <circle cx="200" cy="365" r="5" fill="currentColor" stroke="none" opacity="0.35" />
        </g>
      ) : (
        <g>
          <rect x="40" y="150" width="320" height="100" rx="50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <rect x="90" y="120" width="220" height="160" rx="80" stroke="currentColor" strokeWidth="1" opacity="0.22" />
          <circle cx="200" cy="200" r="10" fill="currentColor" opacity="0.7" />
        </g>
      )}
    </svg>
  );
}
