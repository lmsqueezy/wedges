import { type SVGProps } from "react";

export type IconProps = {
  color?: string;
  size?: number;
  title?: string;
} & SVGProps<SVGSVGElement>;
