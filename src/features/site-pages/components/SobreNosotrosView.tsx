import { routes } from '@/config';
import { ArrowRight, Badge, Button, Card, PageHeader, Section } from '@/shared/components';

// [PLACEHOLDER] — valores de marca.
const VALUES = [
  { title: 'Origen', body: 'Cuero de curtido vegetal, trazable y elegido pieza a pieza.' },
  { title: 'Oficio', body: 'Todo cortado y cosido a mano, sin producción en serie.' },
  { title: 'Ecosistema', body: 'Objetos pensados para durar y para combinarse entre sí.' },
];

export function SobreNosotrosView() {
  return (
    <main>
      <PageHeader
        eyebrow="Sobre nosotros"
        title={
          <>
            Que las cosas se{' '}
            <span className="font-normal italic text-fg-muted">unan</span> y perduren.
          </>
        }
        intro="Joined nació de una idea simple: en un mundo de lo desechable, hacer pocas piezas de cuero, muy bien, para que acompañen toda una vida."
      >
        <Button href={routes.oficio}>
          Conoce el oficio
          <ArrowRight width={18} height={18} />
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {VALUES.map((value) => (
            <Card key={value.title} padding="lg">
              <Badge>{value.title}</Badge>
              <p className="mt-4 text-body text-fg-muted">{value.body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
