import { css } from 'styled-system/css';

interface ImageProps {
  src: string;
  srcSet?: string;
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
      alt={props.alt}
      decoding={props.decoding ?? 'async'}
      loading={props.loading ?? 'lazy'}
      src={props.src}
    />
  );
}
