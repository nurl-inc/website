import {
  Em,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Small,
  Span,
  Strong,
  type EmProps,
  type H1Props,
  type SmallProps,
  type SpanProps,
  type StrongProps,
} from 'styled-system/jsx';
import { Match, Switch } from 'solid-js/web';
import type { ParentProps } from 'solid-js';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextElements = 'p' | 'strong' | 'em' | 'span' | 'small';

interface TextProps extends H1Props {
  as?: TextElements | Headings;
}

export function Text(props: ParentProps<TextProps>) {
  return (
    <Switch>
      <Match when={props.as === 'h1'}>
        <H1 {...props} />
      </Match>
      <Match when={props.as === 'h2'}>
        <H2 {...props} />
      </Match>
      <Match when={props.as === 'h3'}>
        <H3 {...props} />
      </Match>
      <Match when={props.as === 'h4'}>
        <H4 {...props} />
      </Match>
      <Match when={props.as === 'h5'}>
        <H5 {...props} />
      </Match>
      <Match when={props.as === 'h6'}>
        <H6 {...props} />
      </Match>
      <Match when={props.as === 'p'}>
        <P {...props} />
      </Match>
      <Match when={props.as === 'strong'}>
        <Strong {...(props as StrongProps)} />
      </Match>
      <Match when={props.as === 'em'}>
        <Em {...(props as EmProps)} />
      </Match>
      <Match when={props.as === 'span'}>
        <Span {...(props as SpanProps)} />
      </Match>
      <Match when={props.as === 'small'}>
        <Small {...(props as SmallProps)} />
      </Match>
    </Switch>
  );
}
