import * as React from "react";

import { type IconProps } from "./types";

const LemonSqueezyIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size, title, ...rest } = props;
  const titleId = title ? `wg-${Date.now()}-${Math.floor(Math.random() * 10000)}` : undefined;

  return (
    <svg
      ref={ref}
      aria-labelledby={titleId}
      fill="none"
      height={size}
      stroke="currentColor"
      viewBox="0 0 24 40"
      width={size}
      {...rest}
    >
      {title && <title id={titleId}>{title}</title>}

      <path
        clipRule="evenodd"
        d="m6.944 23.185 7.528 3.473a3.85 3.85 0 0 1 1.947 1.982c.9 2.1-.33 4.247-2.26 5.019-1.93.772-3.988.275-4.923-1.908L5.96 24.086c-.254-.594.383-1.178.984-.9ZM7.396 20.938l7.77-2.931c2.583-.975 5.405.869 5.367 3.547l-.003.105c-.055 2.608-2.798 4.36-5.324 3.438l-7.803-2.85a.693.693 0 0 1-.007-1.31ZM6.962 19.922l7.64-3.238c2.538-1.077 3.182-4.307 1.194-6.174a9.046 9.046 0 0 0-.079-.073c-1.949-1.805-5.171-1.17-6.281 1.208l-3.428 7.346c-.273.586.345 1.19.954.931ZM4.995 18.642l2.777-7.598a3.67 3.67 0 0 0-.075-2.732C6.795 6.214 4.354 5.536 2.424 6.31c-1.93.773-3.02 2.53-2.083 4.713l3.298 7.656c.256.593 1.134.57 1.356-.037Z"
        fillRule="evenodd"
      />
    </svg>
  );
});

LemonSqueezyIcon.displayName = "LemonSqueezy";

export default LemonSqueezyIcon;
