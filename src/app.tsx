import { onMount, Suspense } from 'solid-js';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { MetaProvider } from '@solidjs/meta';

import './main.css';

import { Banner } from './components/ui/banner';
import { inject } from '@vercel/analytics';

/**
 * The root component for the app.
 */
export default function App() {
  onMount(() => {
    inject();
  });

  return (
    <MetaProvider>
      <Banner>Launching Beta in 2025</Banner>

      <Router root={(props) => <Suspense>{props.children}</Suspense>}>
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
