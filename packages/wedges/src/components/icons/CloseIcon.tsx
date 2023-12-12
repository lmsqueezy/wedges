import * as React from "react";

import { type IconProps } from "./types";

const CloseIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size, title, ...rest } = props;
  const titleId = title ? `wg-${Date.now()}-${Math.floor(Math.random() * 10000)}` : undefined;

  return (
    <svg
      ref={ref}
      aria-labelledby={titleId}
      className="text-inherit"
      fill="currentColor"
      height={size}
      stroke="none"
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      {title && <title id={titleId}>{title}</title>}
      <path
        clipRule="evenodd"
        d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
        fillRule="evenodd"
      />
    </svg>
  );
});

CloseIcon.displayName = "CloseIcon";

export default CloseIcon;
