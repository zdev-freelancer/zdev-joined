import type { Metadata } from 'next';

import { LEGAL, LegalView } from '@/features/site-pages';

export const metadata: Metadata = { title: LEGAL.cookies.title };

export default function CookiesPage() {
  return <LegalView slug="cookies" />;
}
