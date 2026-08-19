import { PageHeader, Section } from '@/shared/components';
import { LEGAL, type LegalSlug } from '../legal.data';

/** Vista de un documento legal, resuelta por slug de ruta. */
export function LegalView({ slug }: { slug: LegalSlug }) {
  const doc = LEGAL[slug];

  return (
    <main>
      <PageHeader eyebrow="Legal" title={doc.title} intro={doc.intro} />
      <Section>
        <div className="max-w-2xl space-y-10">
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-h3 font-medium">{section.heading}</h2>
              <p className="mt-3 text-body text-fg-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
