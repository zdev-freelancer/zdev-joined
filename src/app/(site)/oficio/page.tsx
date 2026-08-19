import type { Metadata } from 'next';

import { OficioView } from '@/features/site-pages';

export const metadata: Metadata = {
  title: 'El oficio',
  description: 'Cómo se hace cada pieza de Joined: del corte a mano al bruñido final.',
};

export default function OficioPage() {
  return <OficioView />;
}
