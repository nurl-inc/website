import { A, type AnchorProps } from '@solidjs/router';
import { Circle } from 'styled-system/jsx';
import { ArrowRight } from '../icons';
import { Button, type ButtonProps } from './button';
import { splitProps } from 'solid-js';

export function Link(props: ButtonProps) {
  const [{ palette, usage, href }, nativeProps] = splitProps(props, [
    'palette',
    'usage',
    'href',
  ]);

  return (
    <Button
      palette={palette}
      usage={usage}
      href={href}
      asChild={LinkAnchor}
      {...nativeProps}
    />
  );
}

function LinkAnchor(props: AnchorProps) {
  return (
    <A {...props} end>
      {props.children}
      <ButtonHoverIcon />
    </A>
  );
}

function ButtonHoverIcon() {
  return (
    <span data-placement="right" data-part="btn-icon">
      <Circle bgColor="#0C9B7250" color="black" p="3" size="2.5rem">
        <ArrowRight />
      </Circle>
    </span>
  );
}
