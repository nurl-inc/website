import { createMediaQuery } from '@solid-primitives/media';
import { createAsync } from '@solidjs/router';
import { createEffect, For, onMount } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container, Grid, GridItem } from 'styled-system/jsx';
import PointCard from '~/components/ui/point-card';
import { slideInFromBottom } from '~/lib/motion';
import { getSanctumShowcaseData } from '~/lib/db';
import { scrollFadeInOut } from '~/lib/motion';

export default function FeatureShowcase() {
  const isSmall = createMediaQuery('(max-width: 767px)');

  const data = createAsync(() => getSanctumShowcaseData());

  onMount(() => {
    const target = document.getElementById('how-to-heading');
    scrollFadeInOut(target);
  });

  createEffect(() => {
    if (data()?.length && !isSmall()) {
      slideInFromBottom('.point-card');
    }
  });

  return (
    <Box
      paddingBlock="28"
      w="full"
      md={{
        paddingBlockEnd: '34rem',
      }}
    >
      <Container>
        <h2
          id="how-to-heading"
          class={css({
            color: 'brand1.200',
            textAlign: 'center',
            lineHeight: 1,
            paddingBlockEnd: {
              base: 6,
              md: 24,
            },
            textStyle: {
              base: 'heading-sm',
              md: 'heading-lg',
            },
          })}
        >
          Your end-to-end solution
        </h2>

        <Grid
          columns={{ base: 1, md: 3 }}
          gap="12"
          mx="auto"
          maxW="60rem"
          paddingInline="8"
        >
          <For each={data()}>
            {(item) => (
              <GridItem>
                <PointCard
                  number={item.number}
                  heading={item.heading}
                  description={item.description}
                  icon={item.icon}
                />
              </GridItem>
            )}
          </For>
        </Grid>
      </Container>
    </Box>
  );
}
