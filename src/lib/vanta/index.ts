import FOG from 'vanta/dist/vanta.fog.min';
import DOTS from 'vanta/dist/vanta.dots.min';

/**
 * Create a fog effect for the given element. Used for the final CTA.
 * @param el - The element to apply the fog effect to.
 * @returns The fog effect.
 */
export function createFogEffect(el: HTMLElement) {
  return FOG({
    el: el,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x1e1506,
    midtoneColor: 0x250a08,
    lowlightColor: 0x61214,
    baseColor: 0x826b6b,
    blurFactor: 0.4,
    speed: 0.6,
    zoom: 0.4,
  });
}

/**
 * Create a dots effect for the given element. Used for the Play theme.
 * @param el - The element to apply the dots effect to.
 * @returns The dots effect.
 */
export function createDotsEffect(el: HTMLElement) {
  return DOTS({
    el: el,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x106f75,
    backgroundColor: 0x52222,
    showLines: false,
  });
}
