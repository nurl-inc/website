import { createAsync } from '@solidjs/router';
import { createEffect, For, onMount } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container, Grid, GridItem } from 'styled-system/jsx';
import PointCard from '~/components/ui/point-card';
import { useLeadChoice } from '~/context/lead-choice';
import { getHowToData } from '~/lib/db';
import { scrollFadeInOut, slideInFromBottom } from '~/lib/motion';

export interface PointCardProps {
  number?: number;
  heading: string;
  description: string;
}

export default function HowToStart() {
  const [leadChoice] = useLeadChoice();
  const data = createAsync(() => getHowToData(leadChoice.choice));

  onMount(() => {
    const target = document.getElementById('how-to-heading');
    if (target) scrollFadeInOut(target);
    slideInFromBottom('.point-card');
  });

  createEffect(() => {
    if (data()?.length) {
      slideInFromBottom('.point-card');
    }
  });

  return (
    <Box
      bgGradient="tertiary"
      rounded="2xl"
      paddingBlockStart="28"
      paddingBlockEnd="8"
      w="full"
      md={{
        paddingBlockStart: 64,
        rounded: '3xl',
      }}
    >
      <Container
        paddingBlockEnd={{
          base: 28,
          md: 64,
        }}
      >
        <h2
          id="how-to-heading"
          class={css({
            color: '#066469',
            textAlign: 'center',
            lineHeight: 1,
            textStyle: {
              base: 'heading-sm',
              md: 'heading-xl',
            },
          })}
        >
          Your quest{' '}
          <span
            class={css({
              display: 'block',
              color: 'page.surface.100',
            })}
          >
            to gaming greatness
          </span>
        </h2>
      </Container>

      <Grid columns={{ base: 1, md: 3 }} gap="3" paddingInline="8">
        <For each={data()}>
          {(item) => (
            <GridItem>
              <PointCard
                number={item.number}
                heading={item.heading}
                description={item.description}
              />
            </GridItem>
          )}
        </For>
      </Grid>
    </Box>
  );
}
