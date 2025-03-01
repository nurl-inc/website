import { A } from '@solidjs/router';
import { For, onMount } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container, VStack } from 'styled-system/jsx';
import { Link, Text } from '~/components/ui';
import SpotlightItem from '~/components/ui/spotlight-item';
import { useLeadChoice, type LeadChoice } from '~/context/lead-choice';

import productTabContent from '~/data/product-tab-content.json';
import { staggerList } from '~/lib/motion';

type TabContentProductProps = (typeof productTabContent)['sanctum'];

export default function TabContentProduct(props: TabContentProductProps) {
  const [, { setChoice }] = useLeadChoice();

  onMount(() => {
    setChoice(props.choice as LeadChoice);
    staggerList('#spotlight-item');
  });

  return (
    <Container
      data-placement="top"
      animationStyle="slide-fade-in"
      animationDuration="1s"
      animationFillMode="forwards"
      opacity="0"
      paddingBlock="12"
      md={{
        paddingBlock: 24,
      }}
    >
      <Box
        alignItems="flex-start"
        bgGradient="to-tr"
        gradientFrom="neutral.1000"
        gradientTo={{
          _sanctumTheme: 'neutral.1000',
          _playTheme: 'neutral.1000/32',
        }}
        border="2px solid"
        borderColor={{
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.500',
        }}
        display="flex"
        flexDirection="column"
        gap="9"
        justifyContent="flex-start"
        marginBlockEnd="16"
        paddingBlock="12"
        paddingInline="6"
        rounded="lg"
        transitionProperty="border-color"
        transitionDuration="fast"
        md={{
          alignItems: 'center',
          flexDirection: 'row',
          h: '38rem',
          paddingBlock: 12,
          paddingInline: 12,
        }}
      >
        <VStack
          alignItems="flex-start"
          h="full"
          justify="space-between"
          w="full"
          _motionSafe={{
            animationName: 'slideFromBottom, fadeIn',
            animationDuration: '1s',
            animationFillMode: 'forwards',
            animationDelay: '200ms',
            opacity: 0,
          }}
        >
          <Box
            marginBlockEnd={{
              base: 10,
              md: 'initial',
            }}
            w="full"
          >
            <Text color="brand1.100" marginBlockEnd="2" textStyle="body-lg">
              {props.lead}
            </Text>
            <Text
              textTransform="uppercase"
              textStyle={{
                base: 'heading-md',
                md: 'heading-lg',
              }}
              textWrap="balance"
            >
              {props.main1}{' '}
              <Text
                as="span"
                color={{
                  _sanctumTheme: 'brand2.600',
                  _playTheme: 'brand1.600',
                }}
              >
                {props.main2}
              </Text>
            </Text>
            <Text
              color="neutral.300"
              marginBlockStart="6"
              textStyle="body-lg"
              w="3/4"
            >
              {props.description}
            </Text>
          </Box>

          <Link href={props.actionLink} palette="secondary">
            {props.action}
          </Link>
        </VStack>

        <VStack
          alignItems="flex-start"
          gap="4"
          paddingInlineStart={{
            md: 32,
          }}
          w="full"
          _motionSafe={{
            animationName: 'slideFromBottom, fadeIn',
            animationDuration: '1s',
            animationFillMode: 'forwards',
            animationDelay: '400ms',
            opacity: 0,
          }}
          md={{ maxW: '50%' }}
        >
          <Text
            color="neutral.300"
            fontWeight="500"
            letterSpacing="0.03em"
            textStyle="body-xl"
          >
            Key features
          </Text>

          <For each={props.features}>
            {(item) => <SpotlightItem>{item}</SpotlightItem>}
          </For>

          <A
            class={css({
              color: 'brand1.600',
              display: 'inline-block',
              marginBlockStart: '1',
              textDecoration: 'underline',
              textStyle: 'body-lg',
              transitionProperty: 'color',
              transitionDuration: 'slow',
              _hover: {
                color: {
                  _sanctumTheme: 'brand2.600',
                  _playTheme: 'brand1.700',
                },
              },
            })}
            href={props.link}
          >
            {props.linkText}
          </A>
        </VStack>
      </Box>
    </Container>
  );
}
