import * as React from "react";

import { type IconProps } from "./types";

const TippyIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 24, title, ...rest } = props;
  const titleId = title ? `wg-${Date.now()}-${Math.floor(Math.random() * 10000)}` : undefined;

  return (
    <svg
      ref={ref}
      aria-labelledby={titleId}
      fill="currentColor"
      height="8"
      width={size}
      {...rest}
      viewBox="0 0 24 8"
    >
      {title && <title id={titleId}>{title}</title>}
      <path d="M4.55486 0H19.586C17.0713 0 14.5567 3.5825 13.1681 5.95276C12.7242 6.71045 11.4928 6.67361 11.0817 5.89769C9.82569 3.52743 7.46729 0 4.55486 0Z" />
    </svg>
  );
});

TippyIcon.displayName = "TippyIcon";

export default TippyIcon;
