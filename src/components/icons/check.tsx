import { fallbackColor, type IconProps } from '.';

export function CheckIcon(props: IconProps) {
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
        d="m5 13 4 4L19 7"
      />
    </svg>
  );
}
