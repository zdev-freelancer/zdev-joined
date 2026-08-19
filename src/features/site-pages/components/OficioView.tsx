import { routes } from '@/config';
import { ArrowRight, Button, PageHeader, Section } from '@/shared/components';

// [PLACEHOLDER] — pasos del proceso de taller.
const STEPS = [
  {
    title: 'Selección de la piel',
    body: 'Elegimos cada piel de curtido vegetal, una por una, por su tacto y su carácter.',
  },
  {
    title: 'Corte a mano',
    body: 'Cada pieza se corta a mano para aprovechar lo mejor del cuero y evitar el desperdicio.',
  },
  {
    title: 'Costura de silla',
    body: 'Cosido a mano con hilo encerado y punto de silla: más lento, mucho más resistente.',
  },
  {
    title: 'Acabado y pátina',
    body: 'Bruñimos los cantos y tratamos la piel para que envejezca con gracia y se haga tuya.',
  },
];

export function OficioView() {
  return (
    <main>
      <PageHeader
        eyebrow="El oficio"
        title={
          <>
            Del taller <span className="font-normal italic text-fg-muted">a tu vida</span>.
          </>
        }
        intro="No fabricamos en serie. Cada pieza pasa por las mismas manos, del primer corte al último bruñido."
      >
        <Button href={routes.coleccion}>
          Ver la colección
          <ArrowRight width={18} height={18} />
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill border border-border text-caption text-fg-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-h3 font-medium">{step.title}</h2>
                <p className="mt-2 text-body text-fg-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section surface="inverse" className="text-center">
        <h2 className="mx-auto max-w-2xl text-h2 font-semibold">
          Una pieza hecha así se lleva durante años.
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href={routes.coleccion} surface="cream">
            Descubre la colección
            <ArrowRight width={18} height={18} />
          </Button>
        </div>
      </Section>
    </main>
  );
}
