import Link from 'next/link';

import { pieceHref } from '@/config';
import { ArrowUpRight, Card, CircleField } from '@/shared/components';
import type { Piece } from '../collection.types';

/** Tarjeta de pieza en el grid de colección; enlaza a su vista de detalle. */
export function CollectionCard({ piece }: { piece: Piece }) {
  return (
    <Link href={pieceHref(piece.slug)} className="group block h-full">
      <Card interactive padding="none" className="flex h-full flex-col">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-border">
          {/* [PLACEHOLDER] imagen de producto */}
          <CircleField
            pattern="pill"
            className="h-40 w-40 opacity-80 transition-transform duration-700 ease-brand group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <span className="text-label uppercase text-fg-faint">{piece.category}</span>
          <h3 className="mt-3 text-h3 font-medium">{piece.name}</h3>
          <p className="mt-2 text-body text-fg-muted">{piece.summary}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-caption text-fg transition-transform duration-300 ease-brand group-hover:translate-x-1">
            Ver pieza
            <ArrowUpRight width={16} height={16} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
