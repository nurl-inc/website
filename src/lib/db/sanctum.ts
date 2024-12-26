import { query } from '@solidjs/router';

// data files
import registerData from '~/data/sanctum/register.json';
import showcaseData from '~/data/sanctum/showcase.json';

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

/**
 * Fetches the Sanctum showcase data. Used for the Sanctum > Feature Showcase
 * section.
 */
export const getSanctumShowcaseData = query(async () => {
  'use server';
  return showcaseData;
}, 'sanctumShowcaseData');
