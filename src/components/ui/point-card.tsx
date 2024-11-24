import { Show } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Circle, VStack } from 'styled-system/jsx';

interface PointCardProps {
  number?: number;
  heading: string;
  description: string;
}

export default function PointCard(props: PointCardProps) {
  return (
    <Box
      class="point-card"
      bgColor="#032E30"
      p={{ base: '8', md: '10' }}
      rounded="xl"
    >
      <VStack alignItems="flex-start" gap="3" h="18rem" justify="flex-end">
        <Show when={props.number}>
          <Circle size="8" bgColor="#0DE7F2">
            <p
              class={css({
                color: '#032E30',
                fontFamily: 'mono',
                fontSize: 'lg',
                fontStyle: 'italic',
                fontWeight: 'black',
                marginInlineStart: '-2px',
              })}
            >
              {props.number}
            </p>
          </Circle>
        </Show>

        <p
          class={css({
            lineHeight: 1,
            fontSize: {
              base: '2xl',
              md: '3xl',
            },
            textStyle: 'heading-sm',
          })}
        >
          {props.heading}
        </p>
        <p
          class={css({
            color: 'white/80',
            textStyle: {
              base: 'body-md',
              md: 'body-lg',
            },
            textWrap: 'pretty',
            w: {
              base: 'full',
              md: '90%',
            },
          })}
        >
          {props.description}
        </p>
      </VStack>
    </Box>
  );
}
