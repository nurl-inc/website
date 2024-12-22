/**
 * This module contains the Spinner component.
 * @module
 */

import type { JSX } from 'solid-js';

export type SpinnerProps = JSX.GSVGAttributes<SVGSVGElement> & {
  /**
   * The size of the spinner
   */
  size?: number | string;
};

/**
 * The Spinner component is used to display a loading indicator. Typically used
 * in buttons, modals, and other components that require a loading state.
 * @example
 * ```tsx
 * <Button>
 *   <Show when={loading} fallback={<>Save</>}>
 *      Saving
 *      <Spinner size={24} />
 *   </Show>
 * </Button>
 * ```
 */
export function Spinner(props: SpinnerProps) {
  const size = () => props.size ?? 24;

  return (
    <svg
      aria-busy="true"
      role="status"
      xmlns="http://www.w3.org/2000/svg"
      height={size()}
      width={size()}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
      >
        <path
          stroke-dasharray="16"
          stroke-dashoffset="16"
          d="M12 3c4.97 0 9 4.03 9 9"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.15s"
            values="16;0"
          />
          <animateTransform
            attributeName="transform"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </path>
        <path
          stroke-dasharray="64"
          stroke-dashoffset="64"
          stroke-opacity="0.3"
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          />
        </path>
      </g>
    </svg>
  );
}
