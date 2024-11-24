import { createSignal, For } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, HStack, VStack } from 'styled-system/jsx';
import { Button } from '../ui/button';
import { MenuIcon } from '../icons/menu';
import nav from '../../data/nav.json';
import { A } from '@solidjs/router';
import { hstack } from 'styled-system/patterns/hstack';

/**
 * The main navigation component that is used on all pages and renders the
 * mobile and desktop versions. Must be used within a Route.
 */
export default function Nav() {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  return (
    <header class={css({ position: 'sticky', top: 0, zIndex: 'sticky' })}>
      <Box data-part="nav" bgColor="page.surface.initial" w="full">
        <HStack
          justify="center"
          w="full"
          md={{
            justifyContent: 'space-between',
            paddingInlineStart: '6.75rem',
            paddingInlineEnd: '4rem',
          }}
        >
          <Button
            class={css({
              h: '2.75rem',
              left: 4,
              p: 0,
              position: 'absolute',
              rounded: 'md',
              w: '2.75rem',
              zIndex: 'base',
              md: {
                display: 'none',
              },
            })}
            onClick={() => setIsOpen(!isOpen())}
            usage="ghost"
          >
            <MenuIcon />
          </Button>

          <Box w="5rem">
            <img src="/logos/nurl.svg" alt="Nurl Logo" />
          </Box>

          <ul
            class={hstack({
              display: 'none',
              gap: 4,
              md: {
                display: 'flex',
              },
              _motionSafe: {
                animationName: 'fadeIn',
                animationDuration: '600ms',
                animationTimingFunction: 'ease-in-out',
                animationFillMode: 'forwards',
                animationDelay: '1.6s',
                opacity: 0,
              },
            })}
          >
            <For each={nav.slice(1)}>
              {(item) => (
                <li>
                  <A
                    class={css({
                      display: 'block',
                      px: 4,
                      textStyle: 'body-xl',
                      transitionProperty: 'background',
                      transitionTimingFunction: 'ease-in-out',
                      transitionDuration: 'fast',
                      _hover: {
                        textGradient: 'tertiary',
                      },
                      _currentPage: {
                        textGradient: 'tertiary',
                        textDecoration: 'underline',
                        textDecorationThickness: '1px',
                        textUnderlineOffset: '6px',
                        textDecorationColor: 'action.bg.active',
                      },
                    })}
                    href={item.href}
                  >
                    {item.label}
                  </A>
                </li>
              )}
            </For>
          </ul>
          <Box display="none" md={{ display: 'block', w: '5rem' }} />
        </HStack>

        <Box
          data-part="nav-drawer"
          data-state={isOpen() ? 'open' : 'closed'}
          bottom="0"
          h="100dvh"
          left="0"
          overflow="hidden"
          position="fixed"
          right="0"
          top="0"
          w="full"
          _after={{
            content: '""',
            bgColor: 'page.surface.initial/70',
            backdropBlur: 'md',
            backdropFilter: 'blur(10px)',
            bottom: '0',
            h: 'full',
            left: '0',
            position: 'absolute',
            right: '0',
            top: '0',
            w: 'full',
            zIndex: 'overlay',
          }}
          _open={{
            visibility: 'visible',
          }}
          _closed={{
            visibility: 'hidden',
          }}
        >
          <nav
            data-state={isOpen() ? 'open' : 'closed'}
            class={css({
              bgColor: 'page.surface.100',
              h: 'calc(100% - 1rem)',
              position: 'absolute',
              left: 2,
              rounded: 'sm',
              top: 2,
              transitionProperty: 'transform',
              transitionTimingFunction: 'ease-in-out',
              transitionDuration: 'fast',
              transitionDelay: '100ms',
              w: '2/3',
              zIndex: 'popover',
              _open: {
                transform: 'translateX(0)',
              },
              _closed: {
                transform: 'translateX(-105%)',
              },
            })}
          >
            <VStack
              alignItems="flex-start"
              justify="space-between"
              h="full"
              p="4"
              w="full"
            >
              <VStack alignItems="flex-start" gap="4" w="full">
                <Box w="4rem">
                  <img src="/logos/nurl.svg" alt="Nurl Logo" />
                </Box>
                <ul>
                  <For each={nav}>
                    {(item) => (
                      <li>
                        <A
                          class={css({
                            display: 'block',
                            fontSize: '2rem',
                            py: 4,
                            textStyle: 'body-xl',
                            _currentPage: {
                              textGradient: 'tertiary',
                              textDecoration: 'underline',
                              textDecorationThickness: '1px',
                              textUnderlineOffset: '6px',
                              textDecorationColor: 'action.bg.active',
                            },
                          })}
                          href={item.href}
                        >
                          {item.label}
                          <small
                            class={css({
                              display: 'block',
                              color: 'page.text.100',
                              textStyle: 'body-sm',
                              textWrap: 'pretty',
                            })}
                          >
                            {item.description}
                          </small>
                        </A>
                      </li>
                    )}
                  </For>
                </ul>
              </VStack>

              <Box w="full">
                <Button onClick={() => setIsOpen(false)}>Close</Button>
              </Box>
            </VStack>
          </nav>
        </Box>
      </Box>
    </header>
  );
}
