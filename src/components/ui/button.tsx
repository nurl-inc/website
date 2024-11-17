import type { JSX } from 'solid-js';
import { button, type ButtonVariantProps } from 'styled-system/recipes';

type ButtonProps = ButtonVariantProps & JSX.IntrinsicElements['button'];

export function Button(props: ButtonProps) {
  const { palette, ...nativeProps } = props;
  return (
    <button class={button({ palette })} {...nativeProps}>
      {props.children}
    </button>
  );
}
