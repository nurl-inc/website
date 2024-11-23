import { css } from 'styled-system/css';
import { VStack, Box } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns/vstack';
import { Button } from '~/components/ui/button';

export default function GetStarted() {
  return (
    <Box
      id="get-started"
      paddingBlock="11"
      paddingInline="8"
      w="full"
      md={{
        py: '20',
      }}
    >
      <VStack
        alignItems="flex-start"
        bgColor="page.surface.initial"
        border="4px solid"
        borderColor="page.border.initial"
        gap="10"
        justify="flex-start"
        pb="12"
        pt="4"
        px="4"
        rounded="md"
      >
        <p class={css({ mb: 4, textStyle: 'body-sm' })}>For Players</p>

        <div>
          <p class={css({ textStyle: 'heading-sm' })}>NURL PLAY</p>
          <p class={css({ mb: 10 })}>Automate the complex. Keep the magic.</p>
        </div>

        <ul
          class={vstack({
            alignItems: 'flex-start',
          })}
        >
          <li>Video game-like automation</li>
          <li>Physical play enhancement</li>
          <li>Seamless group tools</li>
        </ul>

        <Button>Join the Waitlist</Button>
      </VStack>
    </Box>
  );
}
