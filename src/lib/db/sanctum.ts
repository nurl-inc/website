import { query } from '@solidjs/router';

// data files
import registerData from '~/data/sanctum/register.json';

/**
 * This module queries for data related to the Sanctum pages.
 *
 * @module
 */

/**
 * Fetches the Sanctum register data.
 */
export const getSanctumRegisterData = query(async () => {
  'use server';
  return registerData;
}, 'sanctumRegisterData');
