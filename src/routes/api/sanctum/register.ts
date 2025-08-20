import { json } from '@solidjs/router';
import type { APIEvent } from '@solidjs/start/server';
import { send } from '~/lib/resend';

import emailTemplates from '~/data/emails.json';
import {
  calculateQualificationScores,
  type BetaRequest,
} from '~/primitives/scoring';

export async function POST({ request }: APIEvent) {
  'use server';

  try {
    const data: BetaRequest = await request.json();

    // Step 1: TODO: Add to subscribers in Kit

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
      from: 'Nurl Support <support@nurlttrpg.com>',
      to: ['admin@nurlttrpg.com'],
      subject: subject,
      html: teamTemplate,
    });

    return json({ success: true, data });
  } catch (error) {
    console.error(error);
    return json(
      {
        success: false,
        error: 'Unable to send email to team',
      },
      { status: 500 },
    );
  }
}
