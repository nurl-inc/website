import { lazy, Suspense, type ParentProps } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { Box, Container, VStack } from 'styled-system/jsx';
import Footer from '~/components/shared/footer';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import type { Metadata } from '~/types';
import { Text } from '~/components/ui';

import keywords from '~/data/keywords.json';

const ContactForm = lazy(() => import('~/forms/contact'));

const metadata: Metadata = {
  title: 'Nurl | Contact Us',
  description: 'Get in touch with the Nurl team',
  keywords: `${keywords.base.join(', ')}, ${keywords.contact.join(', ')}`,
  image: 'https://nurl.website/og-meta.png',
};

export const route = {
  preload(): RouteData {
    return {
      metadata,
    };
  },
};

interface RouteData {
  metadata: Metadata;
}

export default function Contact(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <Container
          paddingBlock={{
            base: '20',
            md: '32',
          }}
        >
          <VStack
            alignItems="flex-start"
            gap="4"
            paddingBlockEnd={{
              base: '8',
              md: '12',
            }}
            w="full"
          >
            <Text
              as="h1"
              textStyle={{
                base: 'heading-sm',
                md: 'heading-lg',
              }}
            >
              Contact Nurl
            </Text>
            <ContactHeading>Get the Help You Need</ContactHeading>
            <Text
              textStyle={{
                base: 'body-md',
                md: 'body-xl',
              }}
            >
              Whether you're a publisher, a player, or just a fan, we're here to
              help.
            </Text>
          </VStack>

          <VStack alignItems="flex-start" gap="6" width="full">
            <Box paddingBlockEnd="4" w="full">
              <ContactHeading>Business Hours</ContactHeading>
              <Box paddingBlockStart="2">
                <Text>Support Team Available:</Text>
                <Text>Monday - Friday: 9am - 6pm PM EST</Text>
                <Text>Weekend Support: 10am - 4pm PM EST</Text>
                <Text>Emergency Support: 24/7 for Studio tier customers</Text>
              </Box>
            </Box>

            <Box paddingBlockEnd="4" w="full">
              <ContactHeading>For Players</ContactHeading>
              <Box paddingBlockStart="2">
                <Text as="strong">General Support</Text>
                <Text>Format: Discord server or contact form</Text>
                <Text>Response Time: Within 24 hours</Text>
                <Text>Available 7 days a week</Text>
              </Box>
            </Box>

            <Box paddingBlockEnd="4" w="full">
              <ContactHeading>For Publishers</ContactHeading>
              <Box paddingBlockStart="2">
                <Text as="strong">Technical Support</Text>
                <Text>Format: Contact form</Text>
                <Text>Priority response for Studio tier customers</Text>
                <Text>Implementation assistance</Text>
                <Text>Integration support</Text>
              </Box>

              <Box paddingBlockStart="4">
                <Text as="strong">Sales &amp; Partnership</Text>
                <Text>Format: Contact form</Text>
                <Text>Custom pricing and partnership opportunities</Text>
                <Text>Enterprise solutions</Text>
              </Box>
            </Box>

            <Box w="full">
              <ContactHeading>Contact Form</ContactHeading>
              <Suspense>
                <ContactForm />
              </Suspense>
            </Box>
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}

function ContactHeading(props: ParentProps) {
  return (
    <Text
      as="h3"
      lineHeight="1.2"
      textStyle={{ base: 'heading-xs', md: 'heading-sm' }}
    >
      {props.children}
    </Text>
  );
}
