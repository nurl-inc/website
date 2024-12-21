import { A } from '@solidjs/router';
import { onCleanup, onMount, Show } from 'solid-js';
import { Box, VStack } from 'styled-system/jsx';
import { button } from 'styled-system/recipes';
import { Text } from '~/components/ui';
import { useLeadChoice } from '~/context/lead-choice';
import { scrollFadeInOut } from '~/lib/motion';
import { createFogEffect } from '~/lib/vanta';

export default function FinalCTA() {
  const [store] = useLeadChoice();
  let vantaEffect: any;

  onMount(() => {
    const target = document.getElementById('final-cta');
    const vantaBox = document.getElementById('cta-box');

    scrollFadeInOut(target);
    if (vantaBox) vantaEffect = createFogEffect(vantaBox);
  });

  onCleanup(() => {
    if (vantaEffect) vantaEffect.destroy();
  });

  return (
    <Box
      id="final-cta"
      paddingBlock="8"
      paddingInline="8"
      md={{
        paddingBlock: 16,
        paddingInline: 16,
      }}
    >
      <Box
        id="cta-box"
        border="1px solid"
        borderColor="#0DE7F2"
        h="18.75rem"
        overflow="hidden"
        rounded="xl"
        w="full"
        md={{
          rounded: '2xl',
          h: '43.5rem',
        }}
      >
        <VStack
          gap={{
            base: 4,
            md: 10,
          }}
          h="full"
          justify="center"
          textAlign="center"
          w="full"
        >
          <Text color="white" fontSize="body-xs" textTransform="uppercase">
            Join the Nurl adventure
          </Text>

          <Text
            as="h2"
            fontSize="xl"
            textGradient="tertiary"
            textStyle="heading-xs"
            textWrap="balance"
            w="75%"
            md={{
              lineHeight: '1.2',
              fontSize: '6xl',
              w: '1/2',
            }}
          >
            Ready to become a legend?
          </Text>

          <Box mx="auto" maxW="75%">
            <Show
              when={store.choice === 'play'}
              fallback={
                <A
                  class={button({ palette: 'secondary' })}
                  href="/sanctum/register"
                >
                  Request Beta Access
                </A>
              }
            >
              <A class={button()} href="/play/signup">
                Get Started
              </A>
            </Show>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
