import type { Metadata } from 'next';

import { CuidadoView } from '@/features/site-pages';

export const metadata: Metadata = {
  title: 'Cuidado del cuero',
  description: 'Hábitos sencillos para que tu pieza de cuero dure décadas.',
};

export default function CuidadoPage() {
  return <CuidadoView />;
}
