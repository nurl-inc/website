import { json } from '@solidjs/router';
import type { APIEvent } from '@solidjs/start/server';
import { send } from '~/lib/resend';

import emailTemplates from '~/data/emails.json';

export async function POST({ request }: APIEvent) {
  'use server';

  const submission = await request.json();

  // Replace template variables
  const userTemplate =
    emailTemplates.templates.userConfirmation[
      submission.product as keyof typeof emailTemplates.templates.userConfirmation
    ];
  const teamTemplate = emailTemplates.templates.teamNotification;

  const userHtml = userTemplate.html
    .replace('{{name}}', submission.name)
    .replace('{{inquiryType}}', submission.subject)
    .replace('{{year}}', new Date().getFullYear().toString());

  const teamHtml = teamTemplate.html
    .replace(/{{name}}/g, submission.name)
    .replace('{{email}}', submission.email)
    .replace('{{product}}', submission.product)
    .replace('{{inquiryType}}', submission.subject)
    .replace('{{message}}', submission.message)
    .replace('{{company}}', submission.company ?? '');

  // Send email to user
  const res = await send({
    from: 'Nurl Support <admin@nurl.app>',
    to: [submission.email],
    subject: userTemplate.subject,
    html: userHtml,
  });
  if (!res.ok) {
    throw json({ message: 'Failed to send user email' }, { status: 500 });
  }

  // Send email to team
  const teamRes = await send({
    from: 'Nurl Support System<admin@nurl.app>',
    to: ['admin@nurl.app'],
    subject: teamTemplate.subject
      .replace('{{inquiryType}}', submission.subject)
      .replace('{{name}}', submission.name),
    html: teamHtml,
  });
  if (teamRes.ok) {
    return json({ success: true });
  }

  throw json({ message: 'Failed to send team email' }, { status: 500 });
}
