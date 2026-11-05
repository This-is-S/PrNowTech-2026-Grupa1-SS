'use client';

import { useActionState } from 'react';
import { submitContact } from './actions';

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContact, { message: '' });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Kontakt</h1>
      <form action={formAction}>
        <input name="email" type="email" placeholder="Twój e-mail" required />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Wysyłanie...' : 'Wyślij'}
        </button>
      </form>
      {state.message && <p>{state.message}</p>}
    </main>
  );
}