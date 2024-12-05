import { query } from '@solidjs/router';
import type { PointCardProps } from '~/components/routes/home/how-to-start';
import playHowTo from '~/data/play-how-to.json';
import sanctumHowTo from '~/data/sanctum-how-to.json';
import faq from '~/data/faq.json';
import type { FAQItem } from './types';

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

export const getFaqData = query(async () => {
  'use server';
  return faq as FAQItem[];
}, 'faqData');
