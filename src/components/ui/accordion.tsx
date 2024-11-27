import { Accordion as KAccordion } from '@kobalte/core';
import type { ParentProps } from 'solid-js';
import { ChevronDownIcon } from '../icons';
import { accordion } from 'styled-system/recipes';

/**
 * This module contains an abstraction of the Kobalte Accordion component.
 * @module Accordion
 */

const accordionStyles = accordion();

export function Accordion(props: ParentProps<KAccordion.AccordionRootProps>) {
  return (
    <KAccordion.Root
      class={accordionStyles.root}
      collapsible
      defaultValue={props.defaultValue}
    >
      {props.children}
    </KAccordion.Root>
  );
}

export interface AccordionItemProps extends KAccordion.AccordionItemProps {
  heading: string;
}

export function AccordionItem(props: ParentProps<AccordionItemProps>) {
  return (
    <KAccordion.Item class={accordionStyles.item} value={props.value}>
      <KAccordion.Header class={accordionStyles.header}>
        <KAccordion.Trigger class={accordionStyles.trigger}>
          {props.heading}
          <span data-part="indicator" class={accordionStyles.indicator}>
            <ChevronDownIcon />
          </span>
        </KAccordion.Trigger>
      </KAccordion.Header>

      <KAccordion.Content class={accordionStyles.content}>
        {props.children}
      </KAccordion.Content>
    </KAccordion.Item>
  );
}
