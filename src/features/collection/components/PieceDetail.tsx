import Link from 'next/link';

import { routes } from '@/config';
import { ArrowRight, Badge, Button, CircleField, Container } from '@/shared/components';
import type { Piece } from '../collection.types';

/** Vista de detalle de una pieza. Presentacional: recibe la pieza ya resuelta. */
export function PieceDetail({ piece }: { piece: Piece }) {
  return (
    <section id="top" className="pb-section pt-32 md:pt-36">
      <Container>
        <Link
          href={routes.coleccion}
          className="text-caption text-fg-muted transition-colors hover:text-fg"
        >
          ← Volver a la colección
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-bg-elevated">
            {/* [PLACEHOLDER] imagen de la pieza */}
            <CircleField pattern="pill" className="h-56 w-56 opacity-80" />
          </div>

          <div>
            <Badge>{piece.category}</Badge>
            <h1 className="mt-5 text-h1 font-semibold">{piece.name}</h1>
            <p className="mt-5 text-body-lg text-fg-muted">{piece.description}</p>

            <ul className="mt-8 space-y-2.5 border-t border-border pt-6">
              {piece.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3 text-body text-fg-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-pill bg-fg/40" />
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={routes.unete}>
                Únete para reservar
                <ArrowRight width={18} height={18} />
              </Button>
              <Button href={routes.oficio} variant="outline">
                Conoce el oficio
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
