import type { JSX } from 'solid-js';
import { cx } from 'styled-system/css';
import { button, type ButtonVariantProps } from 'styled-system/recipes';

type ButtonProps = ButtonVariantProps & JSX.IntrinsicElements['button'];

export function Button(props: ButtonProps) {
  const { palette, usage, ...nativeProps } = props;
  return (
    <button
      class={cx(button({ palette, usage }), props.class)}
      {...nativeProps}
    />
  );
}
