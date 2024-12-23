import type { AudienceContact, ResendEmailBody } from './types';

/**
 * This module is used to create APIs for sending emails using Resend.
 * @module resend
 */

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

/**
 * Add a contact to the Play Waitlist audience.
 * @param contact - The contact to add.
 * @returns The response from Resend.
 */
export async function addToPlayWaitlist(contact: AudienceContact) {
  return await fetch(
    'https://api.resend.com/audiences/5781cdc6-39a4-41b8-a3c1-13c837644e5f/contacts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        email: contact.email,
        first_name: contact.firstName,
        last_name: contact.lastName,
        unsubscribed: contact.unsubscribed,
      }),
    },
  );
}

/**
 * Add a contact to the Sanctum Waitlist audience.
 * @param contact - The contact to add.
 * @returns The response from Resend.
 */
export async function addToSanctumWaitlist(contact: AudienceContact) {
  return await fetch(
    'https://api.resend.com/audiences/abccf8d8-501b-4ac3-a9ad-7ff1433ead9f/contacts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        email: contact.email,
        first_name: contact.firstName,
        last_name: contact.lastName,
        unsubscribed: contact.unsubscribed,
      }),
    },
  );
}
