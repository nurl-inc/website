'use server';

import { query } from '@solidjs/router';
import registerData from '~/data/sanctum/register.json';
import showcaseData from '~/data/sanctum/showcase.json';
import pricingData from '~/data/sanctum/pricing.json';
import pricingFaqData from '~/data/sanctum/pricing-faq.json';

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

/**
 * Fetches the Sanctum pricing data.
 */
export const getSanctumPricingData = query(async () => {
  'use server';
  return pricingData;
}, 'sanctumPricingData');

/**
 * Fetches the Sanctum pricing FAQ data.
 */
export const getSanctumPricingFaqData = query(async () => {
  'use server';
  return pricingFaqData;
}, 'sanctumPricingFaqData');
