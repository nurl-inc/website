import { Field, type FieldSelectProps } from '@ark-ui/solid/field';
import { createMemo, type ParentProps } from 'solid-js';
import { field } from 'styled-system/recipes';
import type { InputProps } from './input';
import { Box } from 'styled-system/jsx';
import { SelectChevron } from '../icons';

export function Select(props: ParentProps<InputProps>) {
  const styles = field();

  const selectProps = createMemo(() => {
    const propsCopy = { ...props };
    delete propsCopy.label;
    delete propsCopy.helperText;
    delete propsCopy.errorText;
    return propsCopy as FieldSelectProps;
  });

  return (
    <Field.Root ids={props.ids} class={styles.root}>
      <Field.Label class={styles.label}>{props.label}</Field.Label>

      <Box
        position="relative"
        w={{
          base: 'full',
          md: '1/2',
        }}
      >
        <Field.Select class={styles.select} {...selectProps()} />
        <Box class={styles.selectIndicator}>
          <SelectChevron />
        </Box>
      </Box>

      <Field.HelperText class={styles.helperText}>
        {props.helperText}
      </Field.HelperText>
      <Field.ErrorText class={styles.errorText}>
        {props.errorText}
      </Field.ErrorText>
    </Field.Root>
  );
}
