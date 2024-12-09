import type { ParentProps } from 'solid-js';
import { Text } from './text';

export function SectionHeading(props: ParentProps) {
  return (
    <Text
      as="h2"
      marginBlockEnd={{
        base: 4,
        md: 8,
      }}
      textStyle={{
        base: 'heading-xs',
        md: 'heading-sm',
      }}
    >
      {props.children}
    </Text>
  );
}
