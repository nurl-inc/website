import { A, useLocation } from '@solidjs/router';
import { createMemo, Index } from 'solid-js';
import { css } from 'styled-system/css';
import { hstack } from 'styled-system/patterns';

/**
 * This module contains the Breadcrumb component.
 * @module Breadcrumb
 */

export function Breadcrumb() {
  const location = useLocation();
  const routes = createMemo(() => {
    return location.pathname.split('/').slice(1);
  });

  function getFullPath(_: string, index: number) {
    return (
      '/' +
      routes()
        .slice(0, index + 1)
        .join('/')
    );
  }

  return (
    <ol
      class={hstack({
        gap: 4,
        paddingBlock: '10',
        listStyle: 'none !important',
      })}
    >
      <li>
        <A href="/">Home</A>
      </li>

      <Index each={routes()}>
        {(route, index) => (
          <li>
            <A
              class={css({
                _currentPage: {
                  color: 'page.text.initial/70',
                  cursor: 'default',
                  textDecoration: 'none',
                },
              })}
              end
              href={getFullPath(route(), index)}
            >
              {route()}
            </A>
          </li>
        )}
      </Index>
    </ol>
  );
}
