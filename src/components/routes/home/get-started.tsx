import { createMemo, Index, Show } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { Tabs, TabContent } from '~/components/ui';
import TabContentProduct from './tab-content-product';
import { createAsync } from '@solidjs/router';
import { getProductTabContentData } from '~/lib/db';

export default function GetStarted() {
  const productTabContent = createAsync(() => getProductTabContentData());

  const tabs = createMemo(() => [
    { id: 'sanctum', label: 'Nurl Sanctum' },
    { id: 'play', label: 'Nurl Play' },
  ]);

  return (
    <Box
      bgGradient={{
        _sanctumTheme: 'sanctumBigLinearStart',
        _playTheme: 'playBigLinearStart',
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
      <Show when={productTabContent()}>
        <Tabs defaultValue="sanctum" tabs={tabs()}>
          <Index each={Object.values(productTabContent()!)}>
            {(item) => (
              <TabContent value={item().choice}>
                <TabContentProduct {...item()} />
              </TabContent>
            )}
          </Index>
        </Tabs>
      </Show>
    </Box>
  );
}
