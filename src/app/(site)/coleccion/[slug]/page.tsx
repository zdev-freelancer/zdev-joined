import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllSlugs, getPiece, PieceDetail } from '@/features/collection';

interface PieceParams {
  params: { slug: string };
}

/** Prerender de todas las piezas conocidas (SSG). */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PieceParams): Metadata {
  const piece = getPiece(params.slug);
  return {
    title: piece ? piece.name : 'Pieza no encontrada',
    description: piece?.summary,
  };
}

export default function PiecePage({ params }: PieceParams) {
  const piece = getPiece(params.slug);
  if (!piece) notFound();

  return (
    <main>
      <PieceDetail piece={piece} />
    </main>
  );
}
