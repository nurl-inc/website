import { fallbackColor, type IconProps } from '.';

export function SelectChevron(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke-width="1.5"
      color={props.color ?? fallbackColor}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={props.color ?? fallbackColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m17 8-5-5-5 5M17 16l-5 5-5-5"
      />
    </svg>
  );
}
