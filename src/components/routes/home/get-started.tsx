import { createMemo, Index, Show } from 'solid-js';
import { createAsync } from '@solidjs/router';
import { Box } from 'styled-system/jsx';
import { getProductTabContentData } from '~/lib/db';
import { Tabs, TabContent } from '~/components/ui';
import { useLeadChoice, type LeadChoice } from '~/context/lead-choice';
import TabContentProduct from './tab-content-product';

export default function GetStarted() {
  const productTabContent = createAsync(() => getProductTabContentData());
  const [store, { setChoice }] = useLeadChoice();

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
        <Tabs
          onValueChange={(details) => {
            setChoice(details.value as LeadChoice);
          }}
          tabs={tabs()}
          value={store.choice}
        >
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
