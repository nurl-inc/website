import { splitProps, type JSX, type ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cx } from 'styled-system/css';
import { button, type ButtonVariantProps } from 'styled-system/recipes';

export type ButtonProps = ButtonVariantProps &
  JSX.IntrinsicElements['button'] & {
    /**
     * This should only be used for displaying a link as a button.
     */
    asChild?: ValidComponent;
    href?: string;
  };

export function Button(props: ButtonProps) {
  const [{ palette, usage, asChild, href }, nativeProps] = splitProps(props, [
    'palette',
    'usage',
    'asChild',
    'href',
  ]);

  if (asChild) {
    return (
      <Dynamic
        component={asChild}
        class={cx(button({ palette, usage }), nativeProps.class)}
        href={href}
        {...nativeProps}
      />
    );
  }

  return (
    <button
      class={cx(button({ palette, usage }), nativeProps.class)}
      {...nativeProps}
    >
      {nativeProps.children}
    </button>
  );
}
