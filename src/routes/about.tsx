/* eslint-disable solid/no-innerhtml */
import type { RouteSectionProps } from '@solidjs/router';
import { Box, Container } from 'styled-system/jsx';
import { Breadcrumb, Footer, Head, Main, Nav } from '~/components/shared';
import { proseCss } from '~/styles/prose';
import { css } from 'styled-system/css';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import footerData from '~/data/generated/footer.json';
import schema from '~/data/schema/home.json';

/**
 * This module is the main entry point for the home page.
 * @module route:home
 */

const metadata: Metadata = {
  title: 'Nurl | About Us',
  description:
    'Nurl is a team of developers and designers who are passionate about creating tools that make tabletop games more fun and engaging.',
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

export default function About(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata}>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Nav />

      <Main>
        <Container minH="80dvh">
          <Box class={css(proseCss)} paddingBlockStart="10" w="full">
            <Breadcrumb />
            <div innerHTML={footerData['about-us']} />
          </Box>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
