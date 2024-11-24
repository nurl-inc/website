import { type JSX, type ParentProps, Show } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Circle, HStack, VStack, type BoxProps } from 'styled-system/jsx';
import { featureCard } from 'styled-system/recipes';

/**
 * This module contains the different types of feature cards that can be used
 * on the main pages of the site.
 * @module FeatureCards
 */

interface FeatureCardWithPointsProps {
  heading: string;
}

/**
 * A feature card with a heading and a list of points.
 */
export function FeatureCardWithPoints(
  props: ParentProps<FeatureCardWithPointsProps>,
) {
  return (
    <Box class={featureCard()}>
      <VStack alignItems="flex-start" h="full" justify="flex-end" w="full">
        <p
          class={css({
            lineHeight: 1,
            paddingBlockEnd: 4,
            textStyle: 'heading-sm',
            textWrap: 'balance',
            md: {
              maxW: '2/3',
            },
          })}
        >
          {props.heading}
        </p>

        {props.children}
      </VStack>
    </Box>
  );
}

interface FeatureCardWithPointsItemProps {
  icon: JSX.Element;
  label: string;
}

/**
 * A feature card with a heading and an icon.
 */
export function FeatureCardWithPointsItem(
  props: ParentProps<FeatureCardWithPointsItemProps>,
) {
  return (
    <HStack
      bgGradient="opaquePrimary"
      rounded="lg"
      paddingBlock="4"
      paddingInline="4"
      w="full"
      md={{
        paddingBlock: 6,
      }}
    >
      <Circle size="11" bg="page.text.alt" p="2">
        {props.icon}
      </Circle>
      <p
        class={css({
          color: 'page.text.initial',
          fontSize: '0.875rem',
          textStyle: 'heading-sm',
          md: {
            fontSize: '1.125rem',
          },
        })}
      >
        {props.label}
      </p>
    </HStack>
  );
}

interface HeadingFeatureCardProps extends BoxProps {
  description?: string;
}

export function HeadingFeatureCard(
  props: ParentProps<HeadingFeatureCardProps>,
) {
  return (
    <Box
      class={featureCard({
        cushion: 'md',
      })}
      {...props}
    >
      <p
        class={css({
          lineHeight: 1,
          paddingBlockEnd: 4,
          textStyle: 'heading-sm',
          textWrap: 'pretty',
          md: {
            maxW: '2/3',
            textStyle: 'heading-md',
          },
        })}
      >
        {props.children}
      </p>
      <Show when={props.description}>
        <p class={css({ textStyle: 'body-md' })}>{props.description}</p>
      </Show>
    </Box>
  );
}
