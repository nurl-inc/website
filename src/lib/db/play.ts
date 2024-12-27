import { query } from '@solidjs/router';

// data
import signup from '~/data/play/signup.json';

/**
 * This module contains all the data queries for the Play product.
 * @module lib/db/play
 */

/**
 * Data for the Play Signup page
 */
export const getPlaySignupData = query(async () => signup, 'play-signup');
