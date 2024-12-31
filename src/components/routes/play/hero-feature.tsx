import { createAsync } from '@solidjs/router';
import { animate, scroll } from 'motion';
import { Index, lazy, onMount, Suspense } from 'solid-js';
import { Box, HStack, VStack } from 'styled-system/jsx';
import { getHeroImgsData } from '~/lib/db';
import type { HeroFeatureItemProps } from '../home/hero-feature-item';

const HeroFeatureItem = lazy(() => import('../home/hero-feature-item'));

/**
 * The hero image masonry layout on the home page.
 * @module route:home:hero-feature
 */
export default function PlayHeroFeature() {
  const heroImgs = createAsync(() => getHeroImgsData());

  onMount(() => {
    const firstColumn = document.querySelector('.hero-feature-first-column');
    const lastColumn = document.querySelector('.hero-feature-last-column');
    if (firstColumn && lastColumn) {
      scroll(animate(firstColumn, { y: '-50%' }));
      scroll(animate(lastColumn, { y: '50%' }));
    }
  });

  return (
    <Box
      h="46dvh"
      overflow="hidden"
      position="relative"
      w="full"
      md={{
        h: 'calc(100dvh - 7rem)',
      }}
      _before={{
        content: '""',
        bgGradient: 'to-b',
        gradientFrom: 'page.surface.initial',
        gradientTo: 'transparent',
        h: '6rem',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        w: 'full',
        zIndex: 'decorator',
        md: {
          h: '10rem',
        },
      }}
      _after={{
        content: '""',
        bgGradient: 'to-t',
        bottom: 0,
        gradientFrom: 'page.surface.initial/50',
        gradientTo: 'transparent',
        h: '5rem',
        left: 0,
        position: 'absolute',
        right: 0,
        w: 'full',
        zIndex: 'decorator',
        md: {
          gradientFrom: 'page.surface.initial',
          h: '10rem',
        },
      }}
    >
      <HStack
        h="full"
        mx="-5%"
        w="110%"
        md={{
          bottom: 0,
          gap: 6,
          mx: 0,
          position: 'absolute',
          right: '-8%',
          top: 0,
          transform: 'rotate(-15deg)',
          w: '70%',
          zIndex: 'base',
        }}
      >
        <Suspense>
          <VStack
            class="hero-feature-first-column"
            h="full"
            w="70%"
            md={{
              gap: 6,
              w: '80%',
            }}
          >
            <Index each={heroImgs()?.col1}>
              {(img) => (
                <HeroFeatureItem {...(img() as HeroFeatureItemProps)} idx={1} />
              )}
            </Index>
          </VStack>
          <VStack
            class="hero-feature-last-column"
            h="full"
            mt="14"
            w="45%"
            md={{
              gap: 6,
              w: '20%',
            }}
          >
            <Index each={heroImgs()?.col2}>
              {(img) => (
                <HeroFeatureItem {...(img() as HeroFeatureItemProps)} />
              )}
            </Index>
          </VStack>
        </Suspense>
      </HStack>
    </Box>
  );
}
