import { json } from '@solidjs/router';
import type { APIEvent } from '@solidjs/start/server';
import { send } from '~/lib/resend';

import emailTemplates from '~/data/emails.json';

export async function POST({ request }: APIEvent) {
  'use server';

  try {
    const data = await request.json();

    // TODO: Step 1: Add to Kit waitlist

    // Update template with user data
    const confirmationHtml = emailTemplates.templates.waitlistConfirmation.html
      .replace('{{name}}', data.name)
      .replace('{{year}}', new Date().getFullYear().toString());

    // Step 2: Send waitlist confirmation
    await send({
      from: 'Nurl Play <admin@nurlttrpg.com>',
      to: data.email,
      subject: emailTemplates.templates.waitlistConfirmation.subject,
      html: confirmationHtml,
    });

    // Step 3: Send team notification
    const teamTemplate = emailTemplates.templates.teamWaitlistNotification.html
      .replace('{{name}}', data.name)
      .replaceAll('{{email}}', data.email)
      .replace('{{role}}', data.primaryRole)
      .replace('{{gameSystem}}', data.primaryGameSystem)
      .replace('{{otherGameSystems}}', data.otherGameSystems)
      .replace('{{groupSize}}', data.groupSize)
      .replace('{{source}}', data.howDidYouHear)
      .replace(
        '{{timestamp}}',
        new Date().toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'long',
        }),
      )
      .replace(
        '{{dashboardUrl}}',
        `https://resend.com/audiences/5781cdc6-39a4-41b8-a3c1-13c837644e5f`,
      );

    const subject = emailTemplates.templates.teamWaitlistNotification.subject
      .replace('{{name}}', data.name)
      .replace('{{role}}', data.primaryRole);

    await send({
      from: 'Nurl Support <support@nurlttrpg.com>',
      to: ['admin@nurlttrpg.com'],
      subject: subject,
      html: teamTemplate,
    });

    return json({ success: true, data });
  } catch (error) {
    console.error(error);
    return json(
      { success: false, error: 'Unable to send email to team' },
      { status: 500 },
    );
  }
}
