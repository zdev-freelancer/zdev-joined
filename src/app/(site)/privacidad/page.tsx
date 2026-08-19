import type { Metadata } from 'next';

import { LEGAL, LegalView } from '@/features/site-pages';

export const metadata: Metadata = { title: LEGAL.privacidad.title };

export default function PrivacidadPage() {
  return <LegalView slug="privacidad" />;
}
