import * as React from "react";

import { type IconProps } from "./types";

const InfoIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, title, ...rest } = props;
  const titleId = title ? `wg-${Date.now()}-${Math.floor(Math.random() * 10000)}` : undefined;

  return (
    <svg
      ref={ref}
      aria-labelledby={titleId}
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      {title && <title id={titleId}>{title}</title>}
      <path
        clipRule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9ZM12 12C12.5523 12 13 12.4477 13 13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13C11 12.4477 11.4477 12 12 12Z"
        fillRule="evenodd"
      />
    </svg>
  );
});

InfoIcon.displayName = "InfoIcon";

export default InfoIcon;
