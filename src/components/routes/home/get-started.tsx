import { createMemo, Index } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { Tabs, TabContent } from '~/components/ui';
import TabContentProduct from './tab-content-product';

import productTabContent from '~/data/product-tab-content.json';

export default function GetStarted() {
  const tabs = createMemo(() => [
    { id: 'sanctum', label: 'Nurl Sanctum' },
    { id: 'play', label: 'Nurl Play' },
  ]);

  return (
    <Box
      bgColor={{
        _sanctumTheme: 'brand2.900',
        _playTheme: 'brand1.1000',
      }}
      id="get-started"
      paddingBlockStart="16"
      paddingBlockEnd="36"
      paddingInline="4"
      transitionProperty="background-color"
      transitionDuration="fast"
      w="full"
      md={{
        paddingInline: 'initial',
        paddingBlockEnd: '72',
      }}
    >
      <Tabs defaultValue="sanctum" tabs={tabs()}>
        <Index each={Object.values(productTabContent)}>
          {(item) => (
            <TabContent value={item().choice}>
              <TabContentProduct {...item()} />
            </TabContent>
          )}
        </Index>
      </Tabs>
    </Box>
  );
}
