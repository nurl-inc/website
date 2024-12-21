import { splitProps, type JSX, type ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cx } from 'styled-system/css';
import { button, type ButtonVariantProps } from 'styled-system/recipes';

type ButtonProps = ButtonVariantProps &
  JSX.IntrinsicElements['button'] & {
    asChild?: ValidComponent;
  };

export function Button(props: ButtonProps) {
  const [{ palette, usage, asChild }, nativeProps] = splitProps(props, [
    'palette',
    'usage',
    'asChild',
  ]);

  if (asChild) {
    return (
      <Dynamic
        component={asChild}
        class={cx(button({ palette, usage }), nativeProps.class)}
        {...nativeProps}
      />
    );
  }

  return (
    <button
      class={cx(button({ palette, usage }), nativeProps.class)}
      {...nativeProps}
    />
  );
}
