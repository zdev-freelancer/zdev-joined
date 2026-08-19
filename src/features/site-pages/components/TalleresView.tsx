import { routes } from '@/config';
import { ArrowRight, Badge, Button, Card, PageHeader, Section } from '@/shared/components';

// [PLACEHOLDER] — experiencias de taller.
const WORKSHOPS = [
  { name: 'Iniciación a la marroquinería', body: 'Una tarde con las herramientas básicas: corte, punzón y punto de silla.' },
  { name: 'Cose tu billetera', body: 'Sal del taller con tu propia billetera Nómada, hecha por ti.' },
  { name: 'Cuidado y pátina', body: 'Aprende a nutrir el cuero y a dirigir su envejecimiento.' },
];

export function TalleresView() {
  return (
    <main>
      <PageHeader
        eyebrow="Talleres"
        title="Aprende el oficio con tus propias manos."
        intro="Abrimos el taller para compartir lo que sabemos. Grupos reducidos, herramientas incluidas y una pieza que te llevas a casa."
      >
        <Button href={routes.unete}>
          Reserva tu lugar
          <ArrowRight width={18} height={18} />
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {WORKSHOPS.map((workshop, index) => (
            <Card key={workshop.name} padding="lg" className="flex h-full flex-col">
              <Badge>{`Taller 0${index + 1}`}</Badge>
              <h2 className="mt-4 text-h3 font-medium">{workshop.name}</h2>
              <p className="mt-2 text-body text-fg-muted">{workshop.body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
