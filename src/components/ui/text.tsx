import { css } from 'styled-system/css';
import type { BoxProps } from 'styled-system/jsx';
import { Dynamic } from 'solid-js/web';
import type { ParentProps } from 'solid-js';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextElements = 'p' | 'strong' | 'em' | 'span' | 'small';

interface TextProps extends BoxProps {
  as?: TextElements | Headings;
}

export function Text(props: ParentProps<TextProps>) {
  const styles = css({ ...props });
  return (
    <Dynamic component={props.as || 'p'} id={props.id} class={styles}>
      {props.children}
    </Dynamic>
  );
}
