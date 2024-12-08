import { json } from '@solidjs/router';
import type { APIEvent } from '@solidjs/start/server';

export async function POST({ request }: APIEvent) {
  'use server';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      html: '<strong>it works!</strong>',
    }),
  });

  if (res.ok) {
    const data = await res.json();
    const formData = await request.json();
    return json({ data, formData });
  }

  throw json({ message: 'Failed to send email' }, { status: 500 });
}
