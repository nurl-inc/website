import { Box, HStack } from 'styled-system/jsx';
import { Text } from './text';
import {
  pricingCard,
  type PricingCardVariantProps,
} from 'styled-system/recipes';
import { createMemo, For, Show, splitProps } from 'solid-js';
import { Link } from './link';
import { css } from 'styled-system/css';
import { CheckCircle } from '../icons';

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
  savings?: string;
  features: string[];
  action: string;
  actionLink: string;
  teaser?: boolean;
}

export function PricingCard(props: PricingCardProps & PricingCardVariantProps) {
  const [{ palette }, rest] = splitProps(props, ['palette']);
  const styles = pricingCard({ palette });

  const price = createMemo(() => {
    return rest.monthlyPrice;
  });

  return (
    <Box class={styles.root}>
      <Box class={styles.header}>
        <Box marginBlockEnd="0.5rem" w="full">
          <Text class={styles.heading}>{rest.name}</Text>
          <Text class={styles.description}>{rest.description}</Text>
        </Box>

        <HStack alignItems="flex-end" gap="0" w="full">
          <Text class={styles.price}>
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
            {price()}
          </Text>
          <Text
            as="span"
            fontSize="sm"
            lineHeight="2.3"
            letterSpacing="0.01em"
            textStyle="heading-xs"
            textTransform="uppercase"
          >
            /mo
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
                    <Box class={styles.icon}>
                      <CheckCircle />
                    </Box>
                    <Text>{feature}</Text>
                  </HStack>
                </li>
              )}
            </For>
          </ul>
        </Box>

        <Link href={rest.actionLink}>
          <Show when={props.teaser} fallback={rest.action}>
            Learn More
          </Show>
        </Link>
      </Box>
    </Box>
  );
}
