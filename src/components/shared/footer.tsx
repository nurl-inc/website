import { A } from '@solidjs/router';
import { css } from 'styled-system/css';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  VisuallyHidden,
  VStack,
} from 'styled-system/jsx';
import { button } from 'styled-system/recipes';
import { Text } from '~/components/ui';
import { MailIcon } from '../icons';

import footerLinks from '~/data/footer-links.json';
import { Index, type ParentProps } from 'solid-js';

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
            gap={10}
            justify={{
              base: 'center',
              md: 'flex-start',
            }}
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

          <Divider
            color="#032E30"
            direction="horizontal"
            marginBlockEnd="6"
            thickness="1px"
            w={{
              base: 'full',
              md: '18rem',
            }}
          />

          <address class={css({ marginBlockEnd: 10 })}>
            <Text
              as="small"
              display="block"
              fontStyle="normal"
              textStyle="xs"
              w="full"
            >
              1606 Headway Cir, STE 9186,
              <br />
              Austin, TX 78754
            </Text>
          </address>

          <Box w="full">
            <A class={button()} href="/contact">
              <span class={css({ w: '5' })}>
                <MailIcon />
              </span>
              Contact Us
            </A>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 1, md: 9 }}
          paddingBlock="20"
          md={{
            paddingBlock: 0,
          }}
        >
          <nav>
            <HStack
              alignItems="flex-start"
              justify={{
                base: 'space-between',
                md: 'space-evenly',
              }}
              flexWrap="wrap"
              w="full"
            >
              <FooterSection section="products" />
              <FooterSection section="resources" />
              <FooterSection section="company" />
              <FooterSection section="community" />
              <FooterSection section="legal" />
            </HStack>
          </nav>
        </GridItem>
      </Grid>

      <Box marginBlockStart="10" w="full">
        <Text
          as="small"
          display="block"
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

interface FooterSectionProps {
  section: keyof typeof footerLinks;
}

function FooterSection(props: ParentProps<FooterSectionProps>) {
  return (
    <VStack
      gap={4}
      w="full"
      md={{
        alignItems: 'flex-start',
        w: 'auto',
      }}
    >
      <Text as="h3" fontWeight="600" textTransform="capitalize">
        {props.section}
      </Text>

      <Index each={footerLinks[props.section]}>
        {(item) => (
          <A
            class={css({
              textStyle: 'body-sm',
              transitionProperty: 'color',
              transitionDuration: 'fast',
              _hover: {
                color: 'action.bg.initial',
                textDecoration: 'underline',
                textDecorationColor: 'page.text.initial',
                textDecorationThickness: 1,
                textUnderlineOffset: 4,
              },
              _currentPage: {
                color: 'action.bg.initial',
              },
            })}
            href={item().href}
            target={item().href.includes('http') ? '_blank' : undefined}
            rel={
              item().href.includes('http') ? 'noopener noreferrer' : undefined
            }
            end
          >
            {item().name}
          </A>
        )}
      </Index>
    </VStack>
  );
}
