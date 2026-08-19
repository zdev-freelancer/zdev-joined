'use client';

import { useState, type FormEvent } from 'react';

import type { INewsletterService, NewsletterStatus } from '../newsletter.types';

export interface NewsletterFormModel {
  email: string;
  status: NewsletterStatus;
  message: string;
  onEmailChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

/**
 * Owns all form state + the submission side-effect (prompt §6.3-S). Depends on
 * the INewsletterService abstraction passed in (§6.3-D), so it is trivially
 * testable with a fake service and agnostic to the real transport.
 */
export function useNewsletterForm(service: INewsletterService): NewsletterFormModel {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<NewsletterStatus>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setMessage('');
    const result = await service.subscribe(email.trim());
    setStatus(result.ok ? 'success' : 'error');
    setMessage(result.message);
    if (result.ok) setEmail('');
  }

  return { email, status, message, onEmailChange: setEmail, onSubmit };
}
