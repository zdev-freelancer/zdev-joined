import type { Metadata } from 'next';

import { LEGAL, LegalView } from '@/features/site-pages';

export const metadata: Metadata = { title: LEGAL.terminos.title };

export default function TerminosPage() {
  return <LegalView slug="terminos" />;
}
