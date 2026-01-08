import { VStack, Box } from 'styled-system/jsx';
import { Link, Text } from '~/components/ui';
import PlayHeroFeature from './hero-feature';
import { staggerFadeIn } from '~/lib/motion';
import { onMount } from 'solid-js';

export default function PlayHero() {
  onMount(() => {
    setTimeout(() => {
      staggerFadeIn('#hero-feature-item');
    }, 400);
  });

  return (
    <VStack
      bgColor="page.surface.initial"
      gap="4"
      minH="96dvh"
      overflowX="hidden"
      pb={{
        base: '10',
        md: '23rem',
      }}
      position="relative"
    >
      <PlayHeroFeature />

      <Box
        pb="12.5rem"
        px="8"
        zIndex="dropdown"
        md={{
          position: 'absolute',
          left: 16,
          top: '23%',
        }}
      >
        <Text
          as="h1"
          color="brand1.600"
          mb="4"
          maxW="48rem"
          textStyle={{
            base: 'heading-md',
            md: 'heading-lg',
          }}
          _motionSafe={{
            animationName: 'slideFromBottom, fadeIn',
            animationDuration: '600ms',
            animationTimingFunction: 'ease-in-out',
            animationFillMode: 'forwards',
            animationDelay: '300ms',
            opacity: 0,
          }}
        >
          Play testing{' '}
          <Text as="span" color="brand1.200">
            The right way.
          </Text>
        </Text>
        <Text
          color="#d0d0d0"
          maxW="36rem"
          paddingBlockStart={{
            md: 2,
          }}
          textStyle="body-xl"
          _motionSafe={{
            animationName: 'fadeIn',
            animationDuration: '600ms',
            animationTimingFunction: 'ease-in-out',
            animationFillMode: 'forwards',
            animationDelay: '700ms',
            opacity: 0,
          }}
        >
          Validate your game content in real-time with low-level analytics.
          Works seamlessly with Sanctum.
        </Text>

        <Box
          mt="14"
          w="full"
          _motionSafe={{
            animationName: 'fadeIn',
            animationDuration: '600ms',
            animationTimingFunction: 'ease-in-out',
            animationFillMode: 'forwards',
            animationDelay: '800ms',
            opacity: 0,
          }}
        >
          <Link href="#learn-more">Learn More</Link>
        </Box>
      </Box>
    </VStack>
  );
}
