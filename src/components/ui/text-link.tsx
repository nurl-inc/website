import { A } from '@solidjs/router';
import type { JSX } from 'solid-js';
import { css } from 'styled-system/css';

export type TextLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function TextLink(props: TextLinkProps) {
  return (
    <A
      class={css({
        display: 'inline-block',
        color: 'action.bg.initial',
        h: '2.75rem',
        textDecoration: 'underline',
        textUnderlineOffset: '0.2rem',
        textStyle: 'link',
        transitionProperty: 'color',
        transitionDuration: 'fast',
        _hover: {
          color: 'action.bg.hover',
        },
        md: {
          h: 'initial',
        },
      })}
      href={props.href}
    >
      {props.children}
    </A>
  );
}
