import { fallbackColor, type IconProps } from '.';

export function NetworkIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke-width="1.5"
      color={props.color ?? fallbackColor}
      viewBox="0 0 24 24"
    >
      <rect
        width="7"
        height="5"
        stroke={props.color ?? fallbackColor}
        rx=".6"
        transform="matrix(1 0 0 -1 3 22)"
      />
      <rect
        width="7"
        height="5"
        stroke={props.color ?? fallbackColor}
        rx=".6"
        transform="matrix(1 0 0 -1 8.5 7)"
      />
      <rect
        width="7"
        height="5"
        stroke={props.color ?? fallbackColor}
        rx=".6"
        transform="matrix(1 0 0 -1 14 22)"
      />
      <path
        stroke={props.color ?? fallbackColor}
        d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7"
      />
    </svg>
  );
}
