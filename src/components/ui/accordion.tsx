import { Accordion as ArkAccordion } from '@ark-ui/solid';
import { Suspense, type ParentProps } from 'solid-js';
import { ChevronDownIcon } from '../icons';
import { accordion } from 'styled-system/recipes';

/**
 * This module contains an abstraction of the Kobalte Accordion component.
 * @module Accordion
 */

const accordionStyles = accordion();

export function Accordion(props: ParentProps<ArkAccordion.RootProps>) {
  return (
    <ArkAccordion.Root
      class={accordionStyles.root}
      collapsible
      defaultValue={props.defaultValue}
    >
      {props.children}
    </ArkAccordion.Root>
  );
}

export interface AccordionItemProps extends ArkAccordion.ItemProps {
  heading: string;
}

export function AccordionItem(props: ParentProps<AccordionItemProps>) {
  return (
    <ArkAccordion.Item class={accordionStyles.item} value={props.value}>
      <ArkAccordion.ItemTrigger class={accordionStyles.itemTrigger}>
        {props.heading}
        <ArkAccordion.ItemIndicator class={accordionStyles.itemIndicator}>
          <ChevronDownIcon />
        </ArkAccordion.ItemIndicator>
      </ArkAccordion.ItemTrigger>

      <ArkAccordion.ItemContent class={accordionStyles.itemContent}>
        <Suspense>{props.children}</Suspense>
      </ArkAccordion.ItemContent>
    </ArkAccordion.Item>
  );
}
