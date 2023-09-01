import * as React from "react";

import { IconProps } from "./types";

const User = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size, title, ...rest } = props;
  const titleId = title ? `wg-${Date.now()}-${Math.floor(Math.random() * 10000)}` : undefined;

  return (
    <svg
      ref={ref}
      aria-labelledby={titleId}
      fill="none"
      height={size}
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      {title && <title id={titleId}>{title}</title>}

      <circle
        cx="12"
        cy="8"
        r="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />

      <path
        d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
});

User.displayName = "User";

export default User;
