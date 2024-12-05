import { css } from 'styled-system/css';
import { Box, Grid, GridItem, HStack, VisuallyHidden } from 'styled-system/jsx';
import { Text } from '~/components/ui';

export default function Footer() {
  return (
    <footer
      class={css({
        bgGradient: 'primary',
        paddingBlockStart: 20,
        paddingBlockEnd: 6,
        paddingInline: {
          base: 8,
          md: 10,
        },
      })}
    >
      <Grid
        columns={{
          base: 1,
          md: 12,
        }}
      >
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <HStack
            borderBottom="1px solid"
            borderColor="#032E30"
            gap={10}
            justify={{
              base: 'center',
              md: 'flex-start',
            }}
            marginBlockEnd="6"
            paddingBlockEnd="10"
            w="full"
          >
            <Box maxW="5rem" w="1/3">
              <VisuallyHidden>Home of the Anti-TPK Club</VisuallyHidden>
              <img src="/logos/atpk.svg" alt="Anti-TPK Club logo" />
            </Box>
            <Box maxW="8.5rem" w="1/2">
              <VisuallyHidden>
                Netty 2024 award "best TTRPG gaming app" winner
              </VisuallyHidden>
              <img
                src="/logos/netty-badge.svg"
                alt="Netty 2024 award winner badge"
              />
            </Box>
          </HStack>

          <address class={css({ marginBlockEnd: 10 })}>
            <Text
              as="small"
              display="block"
              fontFamily="montserrat"
              fontStyle="normal"
              textStyle="xs"
              w="full"
            >
              1606 Headway Cir, STE 9186,
              <br />
              Austin, TX 78754
            </Text>
          </address>
        </GridItem>
      </Grid>

      <Box marginBlockStart="10" w="full">
        <Text
          as="small"
          display="block"
          fontFamily="montserrat"
          fontStyle="normal"
          textAlign="center"
          textStyle="xs"
          w="full"
        >
          &copy; 2023-{new Date().getFullYear()} Nurl App, Inc. All rights
          reserved.
        </Text>
      </Box>
    </footer>
  );
}
