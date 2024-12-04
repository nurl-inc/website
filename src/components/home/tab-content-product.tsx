import { ParentProps, For, onMount } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container, VStack } from 'styled-system/jsx';
import SpotlightItem from '~/components/ui/spotlight-item';
import { useLeadChoice, type LeadChoice } from '~/context/lead-choice';

interface TabContentProductProps {
  choice: LeadChoice;
  heading: string;
  description: string;
  spotlight: string[];
}

export default function TabContentProduct(
  props: ParentProps<TabContentProductProps>,
) {
  const [, { setChoice }] = useLeadChoice();

  onMount(() => {
    setChoice(props.choice);
  });

  return (
    <Container
      md={{
        py: 20,
      }}
    >
      <Box
        alignItems="flex-start"
        display="flex"
        flexDirection="column"
        gap="9"
        justifyContent="flex-start"
        marginBlockEnd="16"
        pb="12"
        pt="4"
        px="4"
        md={{
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box
          mb="6"
          w="full"
          _motionSafe={{
            animationName: 'slideFromBottom, fadeIn',
            animationDuration: '1s',
            animationFillMode: 'forwards',
            animationDelay: '200ms',
            opacity: 0,
          }}
        >
          <p
            class={css({ textStyle: 'heading-sm', textTransform: 'uppercase' })}
          >
            {props.heading}
          </p>
          <p
            class={css({
              mb: 6,
            })}
          >
            {props.description}
          </p>

          {props.children}
        </Box>

        <VStack
          alignItems="flex-start"
          w="full"
          _motionSafe={{
            animationName: 'slideFromBottom, fadeIn',
            animationDuration: '1s',
            animationFillMode: 'forwards',
            animationDelay: '400ms',
            opacity: 0,
          }}
          md={{ maxW: '50%' }}
        >
          <For each={props.spotlight}>
            {(item) => <SpotlightItem>{item}</SpotlightItem>}
          </For>
        </VStack>
      </Box>
    </Container>
  );
}
