import { css } from 'styled-system/css';
import { Box, VStack } from 'styled-system/jsx';
import HeroFeature from './hero-feature';
import { A } from '@solidjs/router';
import { button } from 'styled-system/recipes';

/**
 * This module is the hero section for the home page.
 * @module route:home:hero
 */

export default function Hero() {
  return (
    <VStack gap="4" minH="96dvh" pb="10" position="relative">
      <HeroFeature />

      <Box
        px="8"
        zIndex="dropdown"
        md={{ position: 'absolute', left: 0, top: '35%' }}
      >
        <h1
          class={css({
            color: 'page.text.alt',
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
            color: 'page.text.initial',
            maxW: '36rem',
            pt: {
              md: 6,
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
          Enhance your games with automation that feels like magic, create new
          worlds with tools that feel sacred.
        </p>
      </Box>

      <Box
        mt="7"
        paddingInlineStart="4"
        paddingInlineEnd="4"
        pb="12.5rem"
        w="full"
      >
        <A class={button()} href="#get-started">
          Get Started
        </A>
      </Box>
    </VStack>
  );
}
