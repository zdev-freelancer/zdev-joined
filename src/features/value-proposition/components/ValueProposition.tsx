import { Fragment } from 'react';

// Frases de posicionamiento, no features todavía (prompt §5.3).
const PHRASES = [
  'Cuero de curtido natural',
  'Hecho a mano, pieza por pieza',
  'Diseñado para durar décadas',
  'Un ecosistema, no un catálogo',
] as const;

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {PHRASES.map((phrase) => (
        <Fragment key={phrase}>
          <span className="whitespace-nowrap text-h3 font-medium tracking-tight text-fg-muted">
            {phrase}
          </span>
          {/* pill bullet — logo motif (§3.3) */}
          <span className="h-2.5 w-6 shrink-0 rounded-pill bg-fg/30" />
        </Fragment>
      ))}
    </div>
  );
}

/**
 * ValueProposition — a minimal marquee strip (prompt §5.3). Movement is a
 * transform-only CSS animation (§7) that pauses under prefers-reduced-motion via
 * globals.css. The duplicated track (aria-hidden) makes the loop seamless.
 */
export function ValueProposition() {
  return (
    <section aria-label="Lo que defiende Joined" className="border-y border-border py-9 md:py-12">
      <div className="mask-x-fade overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
