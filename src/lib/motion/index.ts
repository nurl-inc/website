import { animate, inView, scroll, spring, stagger } from 'motion';
import type { Target } from 'motion/react';
import { FADE_IN_OUT, SLIDE_IN_FROM_BOTTOM } from './const';

/**
 * This module contains abstracted motion functions that can be used to animate
 * elements.
 * @module motion
 */

/**
 * Fades in and out the target element.
 * @param target - The target element to animate.
 */
export function scrollFadeInOut(target: Target, parent?: Target) {
  if (target) {
    scroll(animate(target, FADE_IN_OUT, { ease: 'linear' }), {
      target: parent ?? target,
      offset: ['start end', 'end end', 'start start', 'end start'],
    });
  }
}

/**
 * Slides in the target element from the bottom.
 * @param target - The target element to animate.
 */
export function slideInFromBottom(target: Target) {
  if (target) {
    inView(target, () => {
      animate(target, SLIDE_IN_FROM_BOTTOM, {
        delay: stagger(0.1),
        duration: 0.5,
      });
    });
  }
}

/**
 * Staggers the opacity target element.
 * @param target - The target element to animate.
 */
export function staggerList(target: Target) {
  if (target) {
    animate(
      target,
      { opacity: 1 },
      {
        delay: stagger(0.35),
        duration: 0.5,
      },
    );
  }
}

/**
 * Animates the path length of the target element.
 * @param target - The target element to animate. Must use querySelector to
 * target the SVG path element.
 */
export function animatePath(target: Target) {
  if (target) {
    scroll(
      animate(target, {
        pathLength: [0, 1],
      }),
      {
        target,
        offset: ['start end', 'end end'],
      },
    );
  }
}

/**
 * Staggers the opacity of the target element.
 * @param target - The target element to animate.
 */
export function staggerFadeIn(target: Target) {
  if (target) {
    animate(
      target,
      { opacity: [0, 1], y: [100, 0] },
      { type: spring, bounce: 0.3, delay: stagger(0.1), duration: 0.5 },
    );
  }
}
