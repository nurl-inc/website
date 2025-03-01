import { createMemo, type JSX, type ParentProps, Show } from 'solid-js';
import { css, cx } from 'styled-system/css';
import { Box, Circle, HStack, VStack, type BoxProps } from 'styled-system/jsx';
import {
  featureCard,
  type FeatureCardVariantProps,
} from 'styled-system/recipes';
import { Text } from './text';

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
    <Box id="feature-card" class={featureCard()}>
      <VStack alignItems="flex-start" h="full" justify="flex-end" w="full">
        <p
          class={css({
            lineHeight: 1,
            paddingBlockEnd: 4,
            textStyle: 'heading-sm',
            textWrap: 'balance',
            md: {
              maxW: '3/4',
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
      <Circle
        bg={{
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.500',
        }}
        p="2"
        size="11"
      >
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

interface HeadingFeatureCardProps extends FeatureCardVariantProps, BoxProps {
  heading: string;
  description?: string;
}

export function HeadingFeatureCard(
  props: ParentProps<HeadingFeatureCardProps>,
) {
  const styles = createMemo(() => {
    switch (props.palette) {
      case 'accent':
        return featureCard({ palette: 'accent' });
      case 'secondary':
        return featureCard({ palette: 'secondary' });
      case 'tertiary':
        return featureCard({ palette: 'tertiary' });
      default:
        return featureCard({ palette: 'primary' });
    }
  });
  return (
    <Box id="feature-card" class={cx(styles(), props.class)}>
      <VStack alignItems="flex-start" h="full" justify="space-between" w="full">
        <Box w="full">
          <Text
            as="h3"
            lineHeight="1"
            paddingBlockEnd="4"
            textStyle="heading-sm"
            textWrap="pretty"
            md={{
              textStyle: 'heading-md',
            }}
          >
            {props.heading}
          </Text>
          <Show when={props.description}>
            <Text
              textStyle="body-md"
              md={{
                textStyle: 'body-lg',
                w: '3/4',
              }}
            >
              {props.description}
            </Text>
          </Show>
        </Box>

        {props.children}
      </VStack>
    </Box>
  );
}
