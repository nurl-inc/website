import { fallbackColor, type IconProps } from '.';

export function ArrowRight(props: IconProps) {
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
        d="M3 12h18m0 0-8.5-8.5M21 12l-8.5 8.5"
      />
    </svg>
  );
}
