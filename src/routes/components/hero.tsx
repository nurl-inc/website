import { css } from 'styled-system/css';
import { Box, VStack } from 'styled-system/jsx';
import HeroFeature from './hero-feature';

/**
 * This module is the hero section for the home page.
 * @module route:home:hero
 */

export default function Hero() {
  return (
    <VStack gap="4" minH="96dvh" pb="10">
      <HeroFeature />

      <Box px="8">
        <h1
          class={css({
            color: 'page.text.alt',
            mb: 4,
            textGradient: 'tertiary',
            textStyle: 'heading-md',
            zIndex: 'dropdown',
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
    </VStack>
  );
}
