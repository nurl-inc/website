import { createContext } from 'solid-js';

/**
 * This module provides a context for the lead choice. It must be in a separate
 * file to avoid hydration errors.
 * @module context/lead-choice
 */

export type LeadChoice = 'play' | 'sanctum';
export interface LeadChoiceStore {
  choice: LeadChoice;
}
export type LeadChoiceValue = [
  LeadChoiceStore,
  { setChoice: (choice: LeadChoice) => void },
];

export const INITIAL_TYPE: LeadChoice = 'play';

const INITIAL_STORE_SETTER = {
  setChoice: () => undefined,
};

export const LeadChoiceContext = createContext<LeadChoiceValue>([
  { choice: INITIAL_TYPE },
  INITIAL_STORE_SETTER,
]);
