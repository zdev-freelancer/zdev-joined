'use client';

import { ArrowRight, Button } from '@/shared/components';
import { cn } from '@/shared/lib';
import type { NewsletterFormModel } from '../hooks';

/**
 * Presentational newsletter form (prompt §6.3-S/D). It receives a fully-formed
 * model and knows nothing about how subscription happens. Lives on the inverse
 * (cream) surface, so tokens resolve to dark ink.
 */
export function NewsletterForm({
  email,
  status,
  message,
  onEmailChange,
  onSubmit,
}: NewsletterFormModel) {
  const submitting = status === 'submitting';

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto mt-10 w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
          aria-invalid={status === 'error' || undefined}
          className="h-14 flex-1 rounded-pill border border-bg/30 bg-transparent px-6 text-body text-inverse-fg outline-none transition-colors placeholder:text-inverse-fg/55 focus:border-bg/60"
        />
        <Button type="submit" surface="cream" size="lg" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Únete'}
          <ArrowRight width={18} height={18} />
        </Button>
      </div>
      <p
        aria-live="polite"
        className={cn(
          'mt-3 min-h-[1.25rem] text-caption',
          status === 'error' ? 'text-inverse-fg' : 'text-inverse-fg/70',
        )}
      >
        {message}
      </p>
    </form>
  );
}
