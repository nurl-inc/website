import { createMemo } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { Tabs, TabContent, Button } from '~/components/ui';
import TabContentProduct from './tab-content-product';

export default function GetStarted() {
  const tabs = createMemo(() => [
    { id: 'players', label: 'For Players' },
    { id: 'publishers', label: 'For Publishers' },
  ]);

  return (
    <Box
      id="get-started"
      w="full"
      md={{
        py: 20,
      }}
    >
      <Tabs defaultValue="players" tabs={tabs()}>
        <TabContent value="players">
          <TabContentProduct
            heading="nurl play"
            description="Automate the complex. Keep the magic."
            spotlight={[
              'Video game-like automation',
              'Physical play enhancement',
              'Seamless group tools',
            ]}
          >
            <Button>Join the Waitlist</Button>
          </TabContentProduct>
        </TabContent>

        <TabContent value="publishers">
          <TabContentProduct
            heading="nurl sanctum"
            description="Where game worlds are born."
            spotlight={[
              'Visual system mapping',
              'Intuitive world building',
              'Streamlined publishing',
            ]}
          >
            <Button>Start Creating</Button>
          </TabContentProduct>
        </TabContent>
      </Tabs>
    </Box>
  );
}
