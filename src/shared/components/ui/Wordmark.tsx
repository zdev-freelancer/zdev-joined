import { cn } from '@/shared/lib';

export interface WordmarkProps {
  className?: string;
  title?: string;
}

/**
 * Wordmark — the "Joined" lockup. The letters are set in Switzer (the brand
 * geometric sans) while the "o" is drawn as the logo's signature hollow pill so
 * the mark stays faithful regardless of font loading (prompt §3.2 / §3.3).
 * Everything is currentColor, so it flips cream ↔ dark on inverse surfaces.
 *
 * NOTE: this is a high-fidelity recreation. Drop the original vector into
 * /public/brand/ to swap it 1:1 if desired.
 */
export function Wordmark({ className, title = 'Joined' }: WordmarkProps) {
  return (
    <span
      role="img"
      aria-label={title}
      className={cn(
        'inline-flex select-none items-center font-sans font-semibold leading-none tracking-tight',
        className,
      )}
    >
      <span aria-hidden>J</span>
      <svg
        aria-hidden
        viewBox="0 0 40 24"
        fill="none"
        className="mx-[0.03em] inline-block h-[0.6em] w-[1.02em] translate-y-[0.06em]"
      >
        <rect x="2.4" y="2.4" width="35.2" height="19.2" rx="9.6" stroke="currentColor" strokeWidth="4.3" />
      </svg>
      <span aria-hidden>ined</span>
    </span>
  );
}
