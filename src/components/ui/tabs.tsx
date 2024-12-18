import { Tabs as KTabs } from '@kobalte/core';
import type { TabsContentProps, TabsRootProps } from '@kobalte/core/tabs';
import { For, type ParentProps } from 'solid-js';
import { cx } from 'styled-system/css';
import { hstack } from 'styled-system/patterns/hstack';
import { tabs } from 'styled-system/recipes';

interface TabsProps extends TabsRootProps {
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
  const styles = tabs();

  return (
    <KTabs.Tabs defaultValue={props.defaultValue}>
      <KTabs.List
        class={cx(
          styles.list,
          hstack({
            gap: 4,
            w: 'full',
            md: {
              gap: 8,
              justifyContent: 'center',
            },
          }),
        )}
      >
        <For each={props.tabs}>
          {(tab) => (
            <KTabs.Trigger value={tab.id} class={styles.trigger}>
              {tab.label}
            </KTabs.Trigger>
          )}
        </For>
        <KTabs.Indicator class={styles.indicator} />
      </KTabs.List>

      {props.children}
    </KTabs.Tabs>
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
