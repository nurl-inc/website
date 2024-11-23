import { animate, scroll } from 'motion';
import { For, lazy, onMount, Suspense } from 'solid-js';
import { Box, HStack, VStack } from 'styled-system/jsx';

const HeroFeatureItem = lazy(() => import('./hero-feature-item'));

/**
 * The hero image masonry layout on the home page.
 * @module route:home:hero-feature
 */
export default function HeroFeature() {
  onMount(() => {
    const firstColumn = document.querySelector('.hero-feature-first-column');
    const lastColumn = document.querySelector('.hero-feature-last-column');
    if (firstColumn && lastColumn) {
      scroll(animate(firstColumn, { y: '-10%' }));
      scroll(animate(lastColumn, { y: '10%' }));
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
          right: '-5%',
          top: 0,
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
              w: '90%',
            }}
          >
            <For each={Array.from({ length: 2 })}>
              {(_) => <HeroFeatureItem />}
            </For>
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
            <For each={Array.from({ length: 2 })}>
              {(_) => <HeroFeatureItem />}
            </For>
          </VStack>
        </Suspense>
      </HStack>
    </Box>
  );
}
