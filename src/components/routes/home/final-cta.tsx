import { A } from '@solidjs/router';
import { onMount, Show } from 'solid-js';
import { Box, VStack } from 'styled-system/jsx';
import { button } from 'styled-system/recipes';
import { Text } from '~/components/ui';
import { useLeadChoice } from '~/context/lead-choice';
import { scrollFadeInOut } from '~/lib/motion';

export default function FinalCTA() {
  const [store] = useLeadChoice();

  onMount(() => {
    const target = document.getElementById('final-cta');
    scrollFadeInOut(target);
  });

  return (
    <Box
      paddingBlock="8"
      paddingInline="8"
      md={{
        paddingBlock: 16,
        paddingInline: 16,
      }}
    >
      <Box
        class="cta-bg"
        id="final-cta"
        border="1px solid"
        borderColor="#0DE7F2"
        bgImage="url(/home-cta-mobile.webp)"
        bgSize="cover"
        bgPosition="center"
        h="18.75rem"
        rounded="xl"
        w="full"
        md={{
          bgImage: 'url(/home-cta.webp)',
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
          w="full"
        >
          <Text
            as="h2"
            fontSize="xl"
            textAlign="center"
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
