import {
  Tabs as ArkTabs,
  type TabContentProps,
  type TabsRootProps,
} from '@ark-ui/solid/tabs';
import { Index, splitProps, type ParentProps } from 'solid-js';
import { tabs, type TabsVariantProps } from 'styled-system/recipes';

/**
 * This module is a wrapper around the Arks Tabs component.
 * @module Tabs
 */

interface TabsProps extends TabsRootProps, TabsVariantProps {
  tabs: {
    id: string;
    label: string;
  }[];
}

/**
 * Tabs component that renders a list of tabs and a content area as the
 * children.
 *
 * @param props - TabsProps
 * ```ts
 * {
 *  tabs: {
 *    id: string;
 *    label: string;
 *  }[];
 * }
 * ```
 */
export function Tabs(props: ParentProps<TabsProps>) {
  const [{ tabs: propsTabs }, rootProps] = splitProps(props, ['tabs']);
  const styles = tabs();

  return (
    <ArkTabs.Root {...rootProps}>
      <ArkTabs.List class={styles.list}>
        <Index each={propsTabs}>
          {(tab) => (
            <ArkTabs.Trigger value={tab().id} class={styles.trigger}>
              {tab().label}
            </ArkTabs.Trigger>
          )}
        </Index>
        <ArkTabs.Indicator class={styles.indicator} />
      </ArkTabs.List>

      {props.children}
    </ArkTabs.Root>
  );
}

/**
 * TabsContent component that renders the content for a tab.

 */
export function TabContent(props: ParentProps<TabContentProps>) {
  const styles = tabs();
  return <ArkTabs.Content {...props} class={styles.content} />;
}
