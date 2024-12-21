import { A, createAsync } from '@solidjs/router';
import { Show, For } from 'solid-js';
import { Container, HStack, VStack } from 'styled-system/jsx';
import { button } from 'styled-system/recipes';
import { Markdown } from '~/components/shared/markdown';
import { Accordion, AccordionItem } from '~/components/ui';
import { Text } from '~/components/ui/text';
import { getFaqData } from '~/lib/db';

export default function Faq() {
  const data = createAsync(() => getFaqData());

  return (
    <Container paddingBlockStart="32" paddingInline="8">
      <VStack
        paddingBlockEnd="64"
        gap="28"
        w="full"
        md={{
          paddingBlockEnd: '96',
          paddingInline: 'initial',
        }}
      >
        <Text
          as="h2"
          lineHeight="1"
          textStyle={{
            base: 'heading-sm',
            md: 'heading-md',
          }}
        >
          Unraveling the mysteries of Nurl
        </Text>

        <Show when={data()}>
          <Accordion>
            <For each={data()}>
              {(item) => (
                <AccordionItem heading={item.question} value={item.question}>
                  <Markdown content={item.answer} />

                  <Show when={item.ctaPrimary || item.ctaSecondary}>
                    <HStack
                      paddingBlockStart="4"
                      gap="4"
                      flexDir={{
                        base: 'column',
                        md: 'row',
                      }}
                      w="full"
                    >
                      <Show when={item.ctaPrimary}>
                        <A class={button()} href={item.ctaPrimary!.url}>
                          {item.ctaPrimary!.text}
                        </A>
                      </Show>
                      <Show when={item.ctaSecondary}>
                        <A
                          class={button({
                            usage: 'ghost',
                          })}
                          href={item.ctaSecondary!.url}
                        >
                          {item.ctaSecondary!.text}
                        </A>
                      </Show>
                    </HStack>
                  </Show>
                </AccordionItem>
              )}
            </For>
          </Accordion>
        </Show>
      </VStack>
    </Container>
  );
}
