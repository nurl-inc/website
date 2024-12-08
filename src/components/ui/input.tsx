import {
  Field,
  type FieldInputProps,
  type FieldRootProps,
} from '@ark-ui/solid/field';
import { createMemo } from 'solid-js';
import { field } from 'styled-system/recipes';

export interface InputProps extends FieldInputProps {
  ids?: FieldRootProps['ids'];
  label?: string;
  helperText?: string;
  errorText?: string;
}

export function Input(props: InputProps) {
  const styles = field();

  const inputProps = createMemo(() => {
    const propsCopy = { ...props };
    delete propsCopy.label;
    delete propsCopy.helperText;
    delete propsCopy.errorText;
    return propsCopy;
  });

  return (
    <Field.Root ids={props.ids} class={styles.root}>
      <Field.Label class={styles.label}>{props.label}</Field.Label>
      <Field.Input class={styles.input} {...inputProps()} />
      <Field.HelperText class={styles.helperText}>
        {props.helperText}
      </Field.HelperText>
      <Field.ErrorText class={styles.errorText}>
        {props.errorText}
      </Field.ErrorText>
    </Field.Root>
  );
}
