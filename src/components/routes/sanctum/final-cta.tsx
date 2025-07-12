import { onCleanup, onMount } from 'solid-js';
import { Box, VStack } from 'styled-system/jsx';
import { Link, Text } from '~/components/ui';
import { scrollFadeInOut } from '~/lib/motion';
import { createFogEffect } from '~/lib/vanta';

export default function SanctumFinalCTA() {
  let vantaEffect: unknown;

  onMount(() => {
    const target = document.getElementById('final-cta');
    const vantaBox = document.getElementById('cta-box');
    if (target) scrollFadeInOut(target);
    if (vantaBox) vantaEffect = createFogEffect(vantaBox);
  });

  onCleanup(() => {
    if (vantaEffect) (vantaEffect as { destroy: () => void }).destroy();
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
        border="1px solid"
        borderColor="#0DE7F2"
        h="18.75rem"
        overflow="hidden"
        position="relative"
        rounded="xl"
        w="full"
        md={{
          rounded: '2xl',
          h: '43.5rem',
        }}
      >
        <VStack
          bottom="0"
          gap={{
            base: 4,
            md: 10,
          }}
          h="full"
          justify="center"
          position="absolute"
          right="0"
          top="0"
          left="0"
          textAlign="center"
          w="full"
          zIndex="decorator"
        >
          <Text color="white" fontSize="body-xs" textTransform="uppercase">
            Ready to
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
            Transform your Game Development?
          </Text>

          <Box mx="auto" maxW="75%">
            <Link href="/sanctum/register" palette="secondary">
              Reserve beta spot
            </Link>
          </Box>
        </VStack>

        <Box
          id="cta-box"
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          zIndex="base"
        />
      </Box>
    </Box>
  );
}
