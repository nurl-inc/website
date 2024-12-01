import { Suspense } from 'solid-js';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { MetaProvider } from '@solidjs/meta';

import '@fontsource-variable/montserrat';
import '@fontsource-variable/saira';
import './main.css';

import { Banner } from './components/ui/banner';
import { proseContainerCss } from './styles/prose';
import { Box } from 'styled-system/jsx';
import { css } from 'styled-system/css';

/**
 * The root component for the app.
 */
export default function App() {
  return (
    <MetaProvider>
      <Banner>Launching Beta in 2025</Banner>

      <Router
        root={(props) => (
          <Suspense>
            <Box class={css(proseContainerCss)}>{props.children}</Box>
          </Suspense>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
