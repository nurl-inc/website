import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

/**
 * Create a fog effect for the given element. Used for the final CTA.
 * @param el - The element to apply the fog effect to.
 * @returns The fog effect.
 */
export function createFogEffect(el: HTMLElement) {
  return FOG({
    el: el,
    THREE: THREE,
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
