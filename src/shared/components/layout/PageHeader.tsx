import type { ReactNode } from 'react';

import { Badge } from '../ui/Badge';
import { CircleField } from '../decor/CircleField';
import { Container } from './Container';

export interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Optional actions (buttons) rendered under the intro. */
  children?: ReactNode;
}

/**
 * PageHeader — cabecera estándar de las vistas internas. Reserva espacio para el
 * navbar fijo y expone `id="top"` (destino de "Volver arriba"). El motivo
 * circular mantiene el lenguaje de marca sin introducir color ajeno.
 */
export function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <CircleField
        pattern="rings"
        className="pointer-events-none absolute -right-40 -top-24 h-[34rem] w-[34rem] opacity-30"
      />
      <Container>
        <div className="relative max-w-3xl">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h1 className="mt-6 text-h1 font-semibold">{title}</h1>
          {intro ? <p className="mt-6 max-w-xl text-body-lg text-fg-muted">{intro}</p> : null}
          {children ? <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
