import { ErrorBoundary, onMount, Suspense } from 'solid-js';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { MetaProvider } from '@solidjs/meta';
import { inject } from '@vercel/analytics';
import PageError from './components/shared/page-error';

import './main.css';

import { Banner } from './components/ui/banner';

/**
 * The root component for the app.
 */
export default function App() {
  onMount(() => {
    inject();
  });

  return (
    <ErrorBoundary
      fallback={(err, reset) => <PageError error={err} reset={reset} />}
    >
      <MetaProvider>
        <Banner>Launching Beta in 2026</Banner>

        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </Router>
      </MetaProvider>
    </ErrorBoundary>
  );
}
