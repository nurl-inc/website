// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';
import schema from '../public/schema.json';
/**
 * This module is the entry point for the server.
 * It is used to render the app on the server and manage static assets.
 * For dynamic meta tags, we use the Head component.
 * @module entry-server
 */

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" data-panda-theme="sanctum">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <style>
            {`
              @font-face {
                font-family: 'Gibson VF Thin';
                font-display: swap;
                font-weight: 100 900;
                font-style: normal;
                src:
                  local('Gibson VF Thin'),
                  url('/fonts/GibsonVF-Regular.woff2') format('woff-variations'),
                  url('/fonts/GibsonVF-Regular.woff2') format('woff2');
              }

              @font-face {
                font-family: 'Gibson VF Thin';
                font-display: swap;
                font-weight: 100 900;
                font-style: italic;
                src:
                  local('Gibson VF Thin'),
                  url('/fonts/GibsonVF-Italic.woff2') format('woff-variations'),
                  url('/fonts/GibsonVF-Italic.woff2') format('woff2');
              }
            `}
          </style>
          <link
            rel="preload"
            href="/fonts/GibsonVF-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/GibsonVF-Italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="sitemap" href="/sitemap-index.xml" />
          <link rel="me" href="https://mastodon.social/@nurl" />

          {assets}

          <meta name="theme-color" content="#020204" />

          <meta name="twitter:card" content="summary" />
          <meta property="twitter:domain" content="nurlttrpg.com" />
          <meta property="twitter:url" content="https://nurlttrpg.com" />
          <meta name="twitter:site" content="@nurl_inc" />
          <meta name="twitter:image:alt" content="Nurl logo" />

          <meta property="og:url" content="https://nurlttrpg.com" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Nurl" />
          <meta property="og:image:width" content="2400" />
          <meta property="og:image:height" content="1260" />

          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </head>

        <body>
          <div id="app">{children}</div>
          {scripts}
          <script
            async
            type="module"
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          />
        </body>
      </html>
    )}
  />
));
