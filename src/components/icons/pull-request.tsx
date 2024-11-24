import { fallbackColor, type IconProps } from '.';

export function PullRequestIcon(props: IconProps) {
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
        d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 7v10M18 17V7s0-2-2-2h-3"
      />
      <path
        stroke={props.color ?? fallbackColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 7.5 12.5 5 15 2.5"
      />
    </svg>
  );
}
