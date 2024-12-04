import { lazy, Suspense } from 'solid-js';
import { type RouteSectionProps } from '@solidjs/router';
import Head from '~/components/shared/head';
import type { Metadata } from '~/types';
import Hero from '~/components/home/hero';
import Nav from '~/components/shared/nav';
import Main from '~/components/shared/main';
import { LeadChoiceProvider } from '~/context/lead-choice';

import keywords from '~/data/keywords.json';

// Lazy load below the fold components
const GetStarted = lazy(() => import('../components/home/get-started'));
const KeyFeatures = lazy(() => import('../components/home/key-features'));
const ReadyCTA = lazy(() => import('../components/home/ready-cta'));
const HowToStart = lazy(() => import('../components/home/how-to-start'));
const SocialProof = lazy(() => import('../components/home/social-proof'));
const Faq = lazy(() => import('../components/home/faq'));
const FinalCTA = lazy(() => import('../components/home/final-cta'));

/**
 * This module is the main entry point for the home page.
 * @module route:home
 */

const metadata: Metadata = {
  title: 'Nurl | Where Tabletop Legends Are Made',
  description:
    'Enhance your games with automation that feels like magic, create new worlds with tools that feel sacred.',
  keywords: `${keywords.base.join(', ')}, ${keywords.home.join(', ')}`,
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

export default function Home(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <Hero />
      </Main>

      <LeadChoiceProvider initialChoice="play">
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
    </>
  );
}
