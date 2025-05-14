import { Box, Circle, HStack } from 'styled-system/jsx';
import { Text } from './text';
import {
  pricingCard,
  type PricingCardVariantProps,
} from 'styled-system/recipes';
import { createMemo, For, Match, Show, splitProps, Switch } from 'solid-js';
import { Link } from './link';
import { css } from 'styled-system/css';
import { CheckIcon } from '../icons';

/**
 * This should match the data/sanctum/pricing.json schema
 */
interface PricingCardProps {
  id: string;
  name: string;
  description: string;
  basePrice?: number;
  monthlyPrice?: number;
  annualPrice?: number | string;
  perUserPrice?: boolean;
  savings?: string;
  features: string[];
  action: string;
  actionLink: string;
  teaser?: boolean;
  teaserLink?: string;
  activePrice?: '1' | '2';
  variant?: 'play' | 'sanctum';
}

export function PricingCard(props: PricingCardProps & PricingCardVariantProps) {
  const [{ palette, variant = 'sanctum' }, rest] = splitProps(props, [
    'palette',
    'variant',
  ]);
  const styles = pricingCard({ palette });

  const price = createMemo(() => {
    if (rest.basePrice != null) return rest.basePrice;
    return rest.activePrice !== '2' ? rest.monthlyPrice : rest.annualPrice;
  });

  return (
    <Box data-theme={variant} id="pricing-card" class={styles.root}>
      <Box class={styles.header}>
        <Box marginBlockEnd="0.5rem" w="full">
          <HStack
            alignItems="flex-start"
            justifyContent="space-between"
            w="full"
          >
            <Text class={styles.heading}>{rest.name}</Text>

            <Show when={rest.activePrice === '2' && rest.savings}>
              <Text
                data-theme={variant}
                as="span"
                bgGradient={{
                  _sanctumTheme: 'play50',
                  _playTheme: 'sanctum50',
                }}
                color="black"
                display="inline-block"
                fontSize="md"
                paddingBlock="0.5"
                paddingInline="2"
                textStyle="heading-xs"
                rounded="sm"
              >
                {rest.savings}
              </Text>
            </Show>
          </HStack>
          <Text class={styles.description}>{rest.description}</Text>
        </Box>

        <HStack alignItems="flex-end" gap="0" w="full">
          <Text
            aria-label={`$${price()} per ${rest.activePrice === '2' ? 'year' : 'month'}`}
            class={styles.price}
          >
            <sup
              class={css({
                display: 'inline-block',
                lineHeight: 1,
                fontSize: '3xl',
                top: '-1.25rem',
              })}
            >
              &dollar;
            </sup>
            <Text as="span" class={styles.price}>
              {price()}
            </Text>
          </Text>
          <Text
            as="span"
            fontSize="sm"
            lineHeight="2.3"
            letterSpacing="0.01em"
            textStyle="heading-xs"
            textTransform="uppercase"
          >
            <Switch fallback={<Text>/mo</Text>}>
              <Match when={rest.basePrice === 0}>
                <Text>/free forever</Text>
              </Match>
              <Match when={rest.activePrice === '2'}>
                <Text>/yr</Text>
              </Match>
              <Match when={rest.activePrice === '1'}>
                <Text>
                  /mo
                  <Show when={rest.perUserPrice}> per user</Show>
                </Text>
              </Match>
            </Switch>
          </Text>
        </HStack>
      </Box>

      <Box class={styles.content}>
        <Box w="full">
          <Text
            fontSize="sm"
            fontStyle="normal"
            fontWeight="600"
            paddingBlockEnd="4"
            textStyle="heading-xs"
            textTransform="initial"
          >
            Includes
          </Text>

          <ul class={styles.features}>
            <For each={rest.features}>
              {(feature) => (
                <li>
                  <HStack gap="4" w="full">
                    <Circle data-theme={variant} class={styles.icon}>
                      <CheckIcon />
                    </Circle>
                    <Text>{feature}</Text>
                  </HStack>
                </li>
              )}
            </For>
          </ul>
        </Box>

        <Show
          when={props.teaser}
          fallback={
            <Link href={rest.actionLink}>
              <Show when={variant === 'sanctum'} fallback={<>join waitlist</>}>
                request access
              </Show>
            </Link>
          }
        >
          <Link href={rest.teaserLink}>Learn More</Link>
        </Show>
      </Box>
    </Box>
  );
}
