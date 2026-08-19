export type NewsletterStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface NewsletterResult {
  readonly ok: boolean;
  readonly message: string;
}

/**
 * Abstraction the form depends on (prompt §6.3-D). The UI never knows whether
 * the implementation is a mock, a REST call or a server action — only this
 * contract. Swap the concrete service without touching the component.
 */
export interface INewsletterService {
  subscribe(email: string): Promise<NewsletterResult>;
}
