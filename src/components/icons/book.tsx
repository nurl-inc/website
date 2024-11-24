import { fallbackColor, type IconProps } from '.';

export function BookIcon(props: IconProps) {
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
        d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"
      />
      <path
        stroke={props.color ?? fallbackColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 21a2 2 0 1 1 0-4"
      />
      <path
        stroke={props.color ?? fallbackColor}
        stroke-linecap="round"
        d="M9 7h6"
      />
    </svg>
  );
}
