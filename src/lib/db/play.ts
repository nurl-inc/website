import { query } from '@solidjs/router';

// data
import signup from '~/data/play/signup.json';
import pricing from '~/data/play/pricing.json';

/**
 * This module contains all the data queries for the Play product.
 * @module lib/db/play
 */

/**
 * Data for the Play Signup page
 */
export const getPlaySignupData = query(async () => signup, 'play-signup');

/**
 * Data for the Play Pricing page
 */
export const getPlayPricingData = query(async () => pricing, 'play-pricing');
