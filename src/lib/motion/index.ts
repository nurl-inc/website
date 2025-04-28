import {
  animate,
  inView,
  scroll,
  spring,
  stagger,
  type ElementOrSelector,
} from 'motion';
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
export function scrollFadeInOut(target: Element, parent?: Element) {
  scroll(animate(target, FADE_IN_OUT, { ease: 'linear' }), {
    target: parent ?? target,
    offset: ['start end', 'end end', 'start start', 'end start'],
  });
}

/**
 * Slides in the target element from the bottom.
 * @param target - The target element to animate.
 */
export function slideInFromBottom(target: ElementOrSelector) {
  inView(target, () => {
    animate(target, SLIDE_IN_FROM_BOTTOM, {
      delay: stagger(0.1),
      duration: 0.5,
    });
  });
}

/**
 * Staggers the opacity target element.
 * @param target - The target element to animate.
 */
export function staggerList(target: ElementOrSelector) {
  animate(
    target,
    { opacity: 1 },
    {
      delay: stagger(0.35),
      duration: 0.5,
    },
  );
}

/**
 * Animates the path length of the target element.
 * @param target - The target element to animate. Must use querySelector to
 * target the SVG path element.
 */
export function animatePath(target: Element) {
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

/**
 * Staggers the position of the target element.
 * @param target - The target element to animate.
 */
export function staggerSlideInFromBottom(target: ElementOrSelector) {
  animate(
    target,
    { opacity: [0, 1], y: [100, 0] },
    { type: spring, bounce: 0.3, delay: stagger(0.1), duration: 0.5 },
  );
}

/**
 * Scales in the target element when scrolled into view.
 * @param target - The target element to animate.
 */
export function scrollScaleIn(target: Element) {
  scroll(
    animate(target, {
      opacity: [0, 1],
      scale: [0.8, 1],
    }),
    {
      target,
      offset: ['start end', 'end end'],
    },
  );
}

/**
 * Staggers the opacity of the target element.
 * @param target - The target element to animate.
 */
export function staggerFadeIn(target: ElementOrSelector) {
  animate(
    target,
    { opacity: [0, 0.3] },
    { delay: stagger(0.3), duration: 0.5 },
  );
}
