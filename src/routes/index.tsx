import { lazy, Suspense } from 'solid-js';
import { type RouteSectionProps } from '@solidjs/router';
import Head from '~/components/shared/head';
import type { Metadata } from '~/types';
import Hero from '~/components/routes/home/hero';
import Nav from '~/components/shared/nav';
import Main from '~/components/shared/main';
import { LeadChoiceProvider } from '~/context/lead-choice';

import keywords from '~/data/keywords.json';
import schema from '~/data/schema/home.json';

// Lazy load below the fold components
const GetStarted = lazy(() => import('../components/routes/home/get-started'));
const KeyFeatures = lazy(
  () => import('../components/routes/home/key-features'),
);
const ReadyCTA = lazy(() => import('../components/routes/home/ready-cta'));
const HowToStart = lazy(() => import('../components/routes/home/how-to-start'));
const SocialProof = lazy(
  () => import('../components/routes/home/social-proof'),
);
const Faq = lazy(() => import('../components/routes/home/faq'));
const FinalCTA = lazy(() => import('../components/routes/home/final-cta'));
const Footer = lazy(() => import('../components/shared/footer'));

/**
 * This module is the main entry point for the home page.
 * @module route:home
 */

const metadata: Metadata = {
  title: 'Nurl | Where Tabletop Legends Are Made',
  description:
    'Enhance your games with automation that feels like magic, create new worlds with tools that feel sacred.',
  keywords: `${keywords.base.join(', ')}, ${keywords.home.join(', ')}`,
  image: 'https://nurlttrpg.com/og-meta.png',
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

export default function Home(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata}>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Nav />

      <Main>
        <Hero />
      </Main>

      <LeadChoiceProvider initialChoice="sanctum">
        <Suspense>
          <GetStarted />
          <KeyFeatures />
          <ReadyCTA />

          <Suspense>
            <HowToStart />
          </Suspense>

          <SocialProof />
          <Faq />
          <FinalCTA />
        </Suspense>
      </LeadChoiceProvider>

      <Footer />
    </>
  );
}
