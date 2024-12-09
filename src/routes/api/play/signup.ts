import { json } from '@solidjs/router';
import type { APIEvent } from '@solidjs/start/server';

export async function POST({ request }: APIEvent) {
  'use server';

  const submission = await request.json();

  return json({ success: true, data: submission });
}
