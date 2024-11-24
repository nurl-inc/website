import { createStore } from 'solid-js/store';
import {
  LeadChoiceContext,
  INITIAL_TYPE,
  type LeadChoice,
  type LeadChoiceStore,
  type LeadChoiceValue,
} from './context';
import { useContext, type ParentProps } from 'solid-js';

/**
 * This module provides a provider for the lead choice context.
 * @module context/lead-choice/provider
 */

interface LeadChoiceProviderProps {
  initialChoice?: LeadChoice;
}

export function LeadChoiceProvider(
  props: ParentProps<LeadChoiceProviderProps>,
) {
  const [store, setStore] = createStore<LeadChoiceStore>({
    choice: props.initialChoice ?? INITIAL_TYPE,
  });

  const value: LeadChoiceValue = [
    store,
    {
      setChoice(choice: LeadChoice) {
        setStore('choice', choice);
      },
    },
  ];

  return (
    <LeadChoiceContext.Provider value={value}>
      {props.children}
    </LeadChoiceContext.Provider>
  );
}

export function useLeadChoice() {
  const context = useContext(LeadChoiceContext);
  if (!context) {
    throw new Error('useLeadChoice must be used within a LeadChoiceProvider');
  }
  return context;
}
