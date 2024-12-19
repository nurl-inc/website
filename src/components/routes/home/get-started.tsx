import { createMemo } from 'solid-js';
import { Box, VStack } from 'styled-system/jsx';
import { Tabs, TabContent, Button, TextLink } from '~/components/ui';
import TabContentProduct from './tab-content-product';

export default function GetStarted() {
  const tabs = createMemo(() => [
    { id: 'publishers', label: 'For Publishers' },
    { id: 'players', label: 'For Players' },
  ]);

  return (
    <Box
      id="get-started"
      paddingBlock="initial"
      paddingInline="4"
      w="full"
      md={{
        paddingBlock: '20',
        paddingInline: 'initial',
      }}
    >
      <Tabs defaultValue="publishers" tabs={tabs()}>
        <TabContent value="publishers">
          <TabContentProduct
            choice="sanctum"
            heading="nurl sanctum"
            description="Where game worlds are born."
            spotlight={[
              'Visual system mapping',
              'Intuitive world building',
              'Streamlined publishing',
            ]}
          >
            <VStack alignItems="flex-start" gap="4">
              <Button palette="secondary">Request Beta Access</Button>
              <TextLink href="/sanctum">Learn More</TextLink>
            </VStack>
          </TabContentProduct>
        </TabContent>

        <TabContent value="players">
          <TabContentProduct
            choice="play"
            heading="nurl play"
            description="Automate the complex. Keep the magic."
            spotlight={[
              'Video game-like automation',
              'Physical play enhancement',
              'Seamless group tools',
            ]}
          >
            <VStack alignItems="flex-start" gap="6" md={{ gap: '4' }}>
              <Button>Join the Waitlist</Button>
              <TextLink href="/play">Learn More</TextLink>
            </VStack>
          </TabContentProduct>
        </TabContent>
      </Tabs>
    </Box>
  );
}
