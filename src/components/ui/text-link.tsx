import { A } from '@solidjs/router';
import type { JSX } from 'solid-js';
import { css } from 'styled-system/css';

export type TextLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  capitalize?: boolean;
};

export function TextLink(props: TextLinkProps) {
  return (
    <A
      data-capitalize={props.capitalize}
      class={css({
        display: 'inline-block',
        color: 'action.bg.initial',
        h: '2.75rem',
        textDecoration: 'underline',
        textUnderlineOffset: '0.2rem',
        textStyle: 'link',
        transitionProperty: 'color',
        transitionDuration: 'fast',
        '&:is([data-capitalize=true])': {
          textTransform: 'capitalize',
        },
        _hover: {
          color: 'action.bg.hover',
        },
        md: {
          h: 'initial',
        },
      })}
      href={props.href}
      end
    >
      {props.children}
    </A>
  );
}
