import { css } from 'styled-system/css';
import { Box, VStack } from 'styled-system/jsx';

/**
 * This module is the hero section for the home page.
 * @module route:home:hero
 */

export default function Hero() {
  return (
    <main role="main">
      <VStack
        gap="4"
        minH="calc(100dvh - 40px)"
        position="relative"
        px="4"
        py="10"
        justify="center"
      >
        <header class={css({ mb: 4 })}>
          <h1
            class={css({
              color: 'page.text.alt',
              mb: 4,
              textGradient: 'tertiary',
              textStyle: 'heading-md',
            })}
          >
            Where Tabletop Legends Are Made
          </h1>
          <p
            class={css({
              color: 'page.text.initial',
              textStyle: 'body-xl',
            })}
          >
            Enhance your games with automation that feels like magic, create new
            worlds with tools that feel sacred.
          </p>
        </header>
      </VStack>
    </main>
  );
}
