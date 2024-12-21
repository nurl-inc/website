import { query } from '@solidjs/router';
import type { PointCardProps } from '~/components/routes/home/how-to-start';
import playHowTo from '~/data/play-how-to.json';
import sanctumHowTo from '~/data/sanctum-how-to.json';
import faq from '~/data/faq.json';
import type { FAQItem } from './types';

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
