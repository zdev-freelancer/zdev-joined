import type { INewsletterService, NewsletterResult } from '../newsletter.types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Mock implementation of INewsletterService (prompt §6.2 — data/side-effects live
 * in a service, never in a component). Replace with a real API call or a Next.js
 * server action; consumers stay unchanged (§6.3-D).
 */
class MockNewsletterService implements INewsletterService {
  async subscribe(email: string): Promise<NewsletterResult> {
    await delay(900);
    if (!EMAIL_RE.test(email)) {
      return { ok: false, message: 'Ingresa un correo electrónico válido.' };
    }
    // [PLACEHOLDER] — conectar aquí con el endpoint real de suscripción.
    return { ok: true, message: 'Ya eres parte. Bienvenido a Joined.' };
  }
}

/** Factory returning the abstraction — the only concrete binding site. */
export function createNewsletterService(): INewsletterService {
  return new MockNewsletterService();
}
