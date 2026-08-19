import type { Metadata } from 'next';

import { routes } from '@/config';
import { ArrowRight, Button, PageHeader } from '@/shared/components';
import { CollectionGrid } from '@/features/collection';

export const metadata: Metadata = {
  title: 'Colección',
  description: 'Accesorios de cuero hechos a mano — piezas que se unen entre sí y a tu vida.',
};

export default function ColeccionPage() {
  return (
    <main>
      <PageHeader
        eyebrow="La colección"
        title="Piezas que se unen a tu vida."
        intro="Cada objeto está pensado para durar y para conversar con el resto de la colección. Empieza por una pieza; suma el resto a tu ritmo."
      >
        <Button href={routes.unete}>
          Únete para reservar
          <ArrowRight width={18} height={18} />
        </Button>
      </PageHeader>
      <CollectionGrid />
    </main>
  );
}
