import { cn } from '@/shared/lib';

export interface BrandMarkProps {
  className?: string;
  title?: string;
}

/**
 * BrandMark — the compact monogram distilled from the logo (prompt §3.3): the
 * hollow horizontal pill (the signature 'o') plus the separated circular dot
 * (the 'i'). Pure currentColor, so it inverts for cream sections and seeds the
 * favicon. Scales with font-size via em-based sizing on the wrapper.
 */
export function BrandMark({ className, title = 'Joined' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 60 40"
      role="img"
      aria-label={title}
      className={cn('inline-block h-[1em] w-[1.5em]', className)}
      fill="none"
    >
      <rect x="3" y="12" width="36" height="22" rx="11" stroke="currentColor" strokeWidth="5" />
      <circle cx="50" cy="14" r="6" fill="currentColor" />
    </svg>
  );
}
