import { createMemo, splitProps } from 'solid-js';
import { image, type ImageVariantProps } from 'styled-system/recipes';

interface ImageProps {
  src: string;
  srcset?: string;
  sizes?: string;
  alt: string;
  decoding?: 'async' | 'sync';
  loading?: 'eager' | 'lazy';
}

export function Image(props: ImageProps & ImageVariantProps) {
  const [{ vFit }, nativeProps] = splitProps(props, ['vFit']);
  const styles = createMemo(() => {
    if (vFit === 'full') return image({ vFit: 'full' });
    return image();
  });

  return (
    <img
      {...nativeProps}
      class={styles()}
      decoding={nativeProps.decoding ?? 'async'}
      loading={nativeProps.loading ?? 'lazy'}
      sizes={nativeProps.sizes ?? '(max-width: 300px) 1024px, 2048px'}
    />
  );
}
