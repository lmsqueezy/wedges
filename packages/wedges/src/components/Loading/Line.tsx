import * as React from "react";
import { type VariantProps } from "cva";

import { type loadingVariants } from "./Loading";
import { calcDimension, calcStroke } from "./utils";

export const Line = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGSVGElement> & { size: VariantProps<typeof loadingVariants> }["size"]
>((props, ref) => {
  const { size, ...otherProps } = props;
  const dimension = calcDimension(size);
  const stroke = calcStroke(size);
  const radius = dimension / 2 - stroke / 2;
  const circumference = 2 * Math.PI * radius;

  const calcPercCircumference = (perc: number) => {
    return (perc / 100) * circumference;
  };

  const style = {
    strokeDasharray: `${circumference}`,
    "--wg-dashoffset-97": `${calcPercCircumference(97)}px`,
    "--wg-dashoffset-25": `${calcPercCircumference(25)}px`,
  } as React.CSSProperties & Record<string, string>; // Type assertion

  return (
    <svg aria-hidden="true" ref={ref} viewBox={`0 0 ${dimension} ${dimension}`} {...otherProps}>
      <circle
        className="origin-center animate-wg-line-spinner"
        cx={dimension / 2}
        cy={dimension / 2}
        r={dimension / 2 - stroke / 2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={stroke}
        style={style}
        fill="none"
      />
    </svg>
  );
});
