import { Tabs as KTabs } from '@kobalte/core/tabs';
import type { TabsContentProps, TabsRootProps } from '@kobalte/core/tabs';
import { For, splitProps, type ParentProps } from 'solid-js';
import { tabs, type TabsVariantProps } from 'styled-system/recipes';

/**
 * This module is a wrapper around the Kobalte Tabs component. We have to use
 * Kobalte because Ark UI has a bug with the Tabs component.
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
  const [{ tabs: propsTabs, defaultValue }, rootProps] = splitProps(props, [
    'tabs',
    'defaultValue',
  ]);
  const styles = tabs();

  return (
    <KTabs defaultValue={defaultValue} {...rootProps}>
      <KTabs.List class={styles.list}>
        <For each={propsTabs}>
          {(tab) => (
            <KTabs.Trigger value={tab.id} class={styles.trigger}>
              {tab.label}
            </KTabs.Trigger>
          )}
        </For>
        <KTabs.Indicator class={styles.indicator} />
      </KTabs.List>

      {props.children}
    </KTabs>
  );
}

/**
 * TabsContent component that renders the content for a tab.
 *
 * @param props - KTabs.ContentProps
 */
export function TabContent(props: ParentProps<TabsContentProps>) {
  const styles = tabs();

  return <KTabs.Content {...props} class={styles.content} />;
}
