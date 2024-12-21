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
        px="8"
        zIndex="dropdown"
        md={{
          position: 'absolute',
          left: 0,
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
          Enhance your games with automation that feels like magic, create new
          worlds with tools that feel sacred.
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
          <A class={button()} href="#get-started">
            Get Started
          </A>
        </Box>
      </Box>
    </VStack>
  );
}
