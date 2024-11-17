import type { JSX } from 'solid-js';
import { banner, type BannerVariantProps } from 'styled-system/recipes';

type BannerProps = BannerVariantProps & JSX.IntrinsicElements['div'];

export function Banner(props: BannerProps) {
  const { palette, ...nativeProps } = props;
  return <div class={banner({ palette })} {...nativeProps} />;
}
