import { Resend } from 'resend';
import type { ResendEmailBody } from './types';

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
  'use server';
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    return await resend.emails.send(body);
  } catch (error) {
    console.error(error);
    return new Error('Failed to send email');
  }
}
