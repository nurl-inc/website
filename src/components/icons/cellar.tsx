import { fallbackColor, type IconProps } from '.';

export function CellarIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke-width="1.5"
      color={props.color ?? fallbackColor}
      viewBox="0 0 24 24"
    >
      <path
        stroke={props.color ?? fallbackColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 21h18v-9a9 9 0 1 0-18 0v9ZM3 17h18"
      />
      <path
        stroke={props.color ?? fallbackColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 17v-4h12M13 13V9h7"
      />
    </svg>
  );
}
