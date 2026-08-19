import type { Metadata } from 'next';

import { routes } from '@/config';
import { ArrowRight, Button, PageHeader } from '@/shared/components';
import { CollectionGrid } from '@/features/collection';

export const metadata: Metadata = {
  title: 'Novedades',
  description: 'Lo último que salió del taller de Joined.',
};

export default function NovedadesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Novedades"
        title="Lo último que salió del taller."
        intro="Piezas recién terminadas y ediciones limitadas. Lo que ves hoy puede no estar mañana."
      >
        <Button href={routes.coleccion} variant="outline">
          Ver toda la colección
          <ArrowRight width={18} height={18} />
        </Button>
      </PageHeader>
      <CollectionGrid />
    </main>
  );
}
