import { Suspense } from 'solid-js';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { MetaProvider } from '@solidjs/meta';

import '@fontsource-variable/montserrat';
import '@fontsource-variable/saira';
import './main.css';
import { Banner } from './components/ui/banner';

/**
 * The root component for the app.
 */
export default function App() {
  return (
    <MetaProvider>
      <Banner>Launching Beta - Early 2025</Banner>

      <Router root={(props) => <Suspense>{props.children}</Suspense>}>
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
