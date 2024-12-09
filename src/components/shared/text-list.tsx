import type { ParentProps } from 'solid-js';
import { vstack } from 'styled-system/patterns';

export function TextList(props: ParentProps) {
  return (
    <ul
      class={vstack({
        alignItems: 'flex-start',
        marginBlock: 4,
      })}
    >
      {props.children}
    </ul>
  );
}
