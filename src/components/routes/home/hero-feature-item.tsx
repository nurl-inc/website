import { createMediaQuery } from '@solid-primitives/media';
import { Show } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { Image } from '~/components/ui';
export interface HeroFeatureItemProps {
  alt: string;
  src: string;
  srcset: string;
  sizes: string;
}

export default function HeroFeatureItem(props: HeroFeatureItemProps) {
  const isSmall = createMediaQuery('(max-width: 767px)');

  return (
    <Box
      id="hero-feature-item"
      h="12rem"
      overflow="hidden"
      opacity="0"
      rounded="lg"
      shadow="lg"
      w="full"
      md={{
        h: '28rem',
        rounded: 'xl',
      }}
    >
      <Box bgColor="#1d1d1d" h="full" overflow="hidden" w="full">
        <Show when={props.src && !isSmall()}>
          <Image
            alt={props.alt}
            src={props.src}
            srcset={props.srcset}
            sizes={props.sizes}
          />
        </Show>
      </Box>
    </Box>
  );
}
