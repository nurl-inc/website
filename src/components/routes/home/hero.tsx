import { css } from 'styled-system/css';
import { Box, VStack } from 'styled-system/jsx';
import { Link } from '~/components/ui';
import HeroFeature from './hero-feature';
import { onMount } from 'solid-js';
import { staggerFadeIn } from '~/lib/motion';

/**
 * This module is the hero section for the home page.
 * @module route:home:hero
 */

export default function Hero() {
  onMount(() => {
    setTimeout(() => {
      staggerFadeIn('#hero-feature-item');
    }, 400);
  });

  return (
    <VStack
      gap="4"
      minH="96dvh"
      pb={{
        base: '10',
        md: '23rem',
      }}
      position="relative"
    >
      <HeroFeature />

      <Box
        pb="12.5rem"
        pos="absolute"
        px="8"
        top="33dvh"
        zIndex="dropdown"
        md={{
          position: 'absolute',
          left: 16,
          top: '23%',
        }}
      >
        <h1
          class={css({
            maxW: '42.5rem',
            mb: 4,
            textGradient: 'tertiary',
            textStyle: {
              base: 'heading-md',
              md: 'heading-lg',
            },
            _motionSafe: {
              animationName: 'slideFromBottom, fadeIn',
              animationDuration: '600ms',
              animationTimingFunction: 'ease-in-out',
              animationFillMode: 'forwards',
              animationDelay: '300ms',
              opacity: 0,
            },
          })}
        >
          Where Tabletop Legends{' '}
          <span
            class={css({
              color: 'page.text.initial',
            })}
          >
            Are Made
          </span>
        </h1>
        <p
          class={css({
            color: '#d0d0d0',
            maxW: '36rem',
            paddingBlockStart: {
              md: 2,
            },
            textStyle: 'body-xl',
            _motionSafe: {
              animationName: 'fadeIn',
              animationDuration: '600ms',
              animationTimingFunction: 'ease-in-out',
              animationFillMode: 'forwards',
              animationDelay: '700ms',
              opacity: 0,
            },
          })}
        >
          Harnessed for productivity. Designed for collaboration.
          <br />
          Welcome to the platform TTRPG designers love.
        </p>

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
          <Link href="#get-started">Get Started</Link>
        </Box>
      </Box>
    </VStack>
  );
}
