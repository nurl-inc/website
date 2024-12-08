import { Field, type FieldTextareaProps } from '@ark-ui/solid/field';
import { createMemo } from 'solid-js';
import { field } from 'styled-system/recipes';
import type { InputProps } from './input';

export function Textarea(props: InputProps) {
  const styles = field();

  const textareaProps = createMemo(() => {
    const propsCopy = { ...props };
    delete propsCopy.label;
    delete propsCopy.helperText;
    delete propsCopy.errorText;
    return propsCopy as FieldTextareaProps;
  });

  return (
    <Field.Root ids={props.ids} class={styles.root}>
      <Field.Label class={styles.label}>{props.label}</Field.Label>
      <Field.Textarea class={styles.textarea} rows={4} {...textareaProps()} />
      <Field.HelperText class={styles.helperText}>
        {props.helperText}
      </Field.HelperText>
      <Field.ErrorText class={styles.errorText}>
        {props.errorText}
      </Field.ErrorText>
    </Field.Root>
  );
}
