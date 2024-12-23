import { json } from '@solidjs/router';
import type { APIEvent } from '@solidjs/start/server';
import { addToSanctumWaitlist, send } from '~/lib/resend';
import { verify } from '~/lib/verifier';

import emailTemplates from '~/data/emails.json';
import {
  calculateQualificationScores,
  type BetaRequest,
} from '~/primitives/scoring';

export async function POST({ request }: APIEvent) {
  'use server';

  try {
    const data: BetaRequest = await request.json();

    // Verify the email address
    const verification = await verify(data.email);
    if (!verification.status) {
      return json(new Error(verification.error.message), { status: 400 });
    }

    // Step 1: Add to beta contacts
    await addToSanctumWaitlist({
      email: data.email,
      firstName: data.name.split(' ')[0],
      lastName: data.name.split(' ')[1],
      unsubscribed: false,
    });

    // Update template with user data
    const confirmationHtml =
      emailTemplates.templates.userConfirmation.sanctum.html
        .replace('{{name}}', data.name)
        .replace('{{companyName}}', data.companyName)
        .replace('{{year}}', new Date().getFullYear().toString());

    // Step 2: Send waitlist confirmation
    await send({
      from: 'Nurl Sanctum <admin@nurl.app>',
      to: [data.email],
      subject: emailTemplates.templates.userConfirmation.sanctum.subject,
      html: confirmationHtml,
    });

    // Step 3: Send team notification
    const scores = calculateQualificationScores(data);
    const teamTemplate =
      emailTemplates.templates.sanctumBetaTeamNotification.html
        .replace('{{companyName}}', data.companyName)
        .replaceAll('{{website}}', data.website || 'Not provided')
        .replace('{{name}}', data.name)
        .replace('{{role}}', data.role)
        .replaceAll('{{email}}', data.email)
        .replace('{{currentSystems}}', data.currentSystems)
        .replace('{{teamSize}}', data.teamSize)
        .replace('{{timeline}}', data.timeline)
        .replace('{{currentTools}}', data.currentTools)
        .replace('{{challenges}}', data.challenges)
        .replace('{{improvements}}', data.improvements)
        .replace('{{playInterest}}', data.playInterest)
        .replace('{{howDidYouHear}}', data.source || 'Not provided')
        .replace('{{anythingElse}}', data.additionalInfo || 'Not provided')
        .replace('{{sizeScore}}', scores.sizeScore.toString())
        .replace('{{timelineScore}}', scores.timelineScore.toString())
        .replace('{{integrationScore}}', scores.integrationScore.toString())
        .replace('{{totalScore}}', scores.totalScore.toString())
        .replace(
          '{{dashboardUrl}}',
          `https://resend.com/audiences/5781cdc6-39a4-41b8-a3c1-13c837644e5f`,
        );

    const subject =
      emailTemplates.templates.sanctumBetaTeamNotification.subject.replace(
        '{{companyName}}',
        data.companyName,
      );

    await send({
      from: 'Nurl Play<admin@nurl.app>',
      to: ['admin@nurl.app'],
      subject: subject,
      html: teamTemplate,
    });

    return json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return json({ success: false, error: message }, { status: 500 });
  }
}
