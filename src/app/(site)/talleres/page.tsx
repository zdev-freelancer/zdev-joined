import type { Metadata } from 'next';

import { TalleresView } from '@/features/site-pages';

export const metadata: Metadata = {
  title: 'Talleres',
  description: 'Aprende marroquinería en el taller de Joined. Grupos reducidos, pieza incluida.',
};

export default function TalleresPage() {
  return <TalleresView />;
}
