import { fallbackColor, type IconProps } from '.';

export function MailIcon(props: IconProps) {
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
        d="m7 9 5 3.5L17 9"
      />
      <path
        stroke={props.color ?? fallbackColor}
        d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
      />
    </svg>
  );
}
