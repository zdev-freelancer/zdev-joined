import { routes } from '@/config';
import { ArrowRight, Button, PageHeader, Section } from '@/shared/components';

// [PLACEHOLDER] — consejos de cuidado del cuero.
const TIPS = [
  { title: 'Limpieza', body: 'Retira el polvo con un paño seco y suave. Evita el agua y los productos químicos.' },
  { title: 'Hidratación', body: 'Aplica un bálsamo neutro cada pocos meses para nutrir la piel.' },
  { title: 'Almacenamiento', body: 'Guárdala en un lugar fresco y ventilado, lejos del sol directo.' },
  { title: 'Pátina', body: 'Úsala sin miedo: el curtido vegetal se oscurece y mejora con el tiempo.' },
];

export function CuidadoView() {
  return (
    <main>
      <PageHeader
        eyebrow="Cuidado del cuero"
        title="Cómo cuidar una pieza para toda la vida."
        intro="El buen cuero pide poco: constancia y uso. Estos cuatro hábitos bastan para que tu pieza dure décadas."
      >
        <Button href={routes.coleccion} variant="outline">
          Ver la colección
          <ArrowRight width={18} height={18} />
        </Button>
      </PageHeader>

      <Section>
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {TIPS.map((tip, index) => (
            <div key={tip.title} className="flex gap-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill border border-border text-caption text-fg-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-h3 font-medium">{tip.title}</h2>
                <p className="mt-2 text-body text-fg-muted">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
