import { lazy, Suspense } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import Head from '~/components/shared/head';
import type { Metadata } from '~/types';
import Hero from './components/hero';
import Nav from '~/components/shared/nav';
import Main from '~/components/shared/main';
import { LeadChoiceProvider } from '~/context/lead-choice';

// Lazy load below the fold components
const GetStarted = lazy(() => import('./components/get-started'));
const KeyFeatures = lazy(() => import('./components/key-features'));
const ReadyCTA = lazy(() => import('./components/ready-cta'));
const HowToStart = lazy(() => import('./components/how-to-start'));

/**
 * This module is the main entry point for the home page.
 * @module route:home
 */

const metadata: Metadata = {
  title: 'Nurl | Where Tabletop Legends Are Made',
  description:
    'Enhance your games with automation that feels like magic, create new worlds with tools that feel sacred.',
  keywords:
    'nurl, tabletop, automation, tools, magic, sacred, tabletop gaming tools, TTRPG digital tools, D&D gaming tools, tabletop automation, TTRPG enhancement',
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
        </Suspense>
      </LeadChoiceProvider>
    </>
  );
}
