import { Show } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { Image } from '~/components/ui';
import { createMediaQuery } from '~/primitives/media';

export interface HeroFeatureItemProps {
  idx?: 1 | 2;
  alt: string;
  src: string;
  srcset: string;
  sizes: string;
}

export default function HeroFeatureItem(props: HeroFeatureItemProps) {
  const isSmall = createMediaQuery('(max-width: 767px)');
  const vFit = () => (props.idx === 1 ? 'full' : 'default');

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
            vFit={vFit()}
          />
        </Show>
      </Box>
    </Box>
  );
}
