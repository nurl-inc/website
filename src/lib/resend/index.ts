/**
 * This module is used to create APIs for sending emails using Resend.
 * @module resend
 */

import type { ResendEmailBody } from './types';

/**
 * Send an email using Resend.
 * @param body - The email body.
 * @returns The response from Resend.
 */
export async function send(body: ResendEmailBody) {
  return await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify(body),
  });
}
