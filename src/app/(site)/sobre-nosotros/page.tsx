import type { Metadata } from 'next';

import { SobreNosotrosView } from '@/features/site-pages';

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'La idea detrás de Joined: pocas piezas de cuero, muy bien hechas, para toda la vida.',
};

export default function SobreNosotrosPage() {
  return <SobreNosotrosView />;
}
