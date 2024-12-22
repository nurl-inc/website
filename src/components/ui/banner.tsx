import { splitProps, type JSX } from 'solid-js';
import { banner, type BannerVariantProps } from 'styled-system/recipes';

type BannerProps = BannerVariantProps & JSX.IntrinsicElements['div'];

export function Banner(props: BannerProps) {
  const [{ palette }, nativeProps] = splitProps(props, ['palette']);
  return <div class={banner({ palette })} {...nativeProps} />;
}
