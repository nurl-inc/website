import { query } from '@solidjs/router';
import type { PointCardProps } from '~/components/routes/home/how-to-start';
import type { FAQItem } from './types';

import playHowTo from '~/data/play/how-to.json';
import sanctumHowTo from '~/data/sanctum/how-to.json';
import productTabContent from '~/data/product-tab-content.json';
import faq from '~/data/faq.json';
import socialProof from '~/data/social-proof.json';

/**
 * This module is responsible for fetching data from the "database".
 * @module db
 */

/**
 * Fetches the how-to-start data for the given choice.
 * @param choice - The choice to fetch data for.
 * @returns The how-to-start data for the given choice.
 */
export const getHowToData = query(
  async (choice: string): Promise<PointCardProps[]> => {
    'use server';
    try {
      if (choice === 'play') {
        return playHowTo;
      }
      if (choice === 'sanctum') {
        return sanctumHowTo;
      }
      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  'howToData',
);

/**
 * Fetches the FAQ data.
 * @returns The FAQ data.
 */
export const getFaqData = query(async () => {
  'use server';
  return faq as FAQItem[];
}, 'faqData');

/**
 * Fetches the product tab content data.
 * @returns The product tab content data.
 */
export const getProductTabContentData = query(async () => {
  'use server';
  return productTabContent;
}, 'productTabContentData');

/**
 * Fetches the social proof data.
 * @returns The social proof data.
 */
export const getSocialProofData = query(async () => {
  'use server';
  return socialProof;
}, 'socialProofData');

export * from './sanctum';
