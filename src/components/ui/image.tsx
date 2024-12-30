import { css } from 'styled-system/css';

interface ImageProps {
  src: string;
  srcset?: string;
  sizes?: string;
  alt: string;
  decoding?: 'async' | 'sync';
  loading?: 'eager' | 'lazy';
}

export function Image(props: ImageProps) {
  return (
    <img
      class={css({
        height: 'auto',
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
      })}
      {...props}
      decoding={props.decoding ?? 'async'}
      loading={props.loading ?? 'lazy'}
      sizes={props.sizes ?? '(max-width: 300px) 1024px, 2048px'}
    />
  );
}
