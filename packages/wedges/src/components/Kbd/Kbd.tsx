import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../helpers/utils";

import { KbdKey, kbdKeysLabelMap, kbdKeysMap } from "./types";

/* -------------------------------- Variants -------------------------------- */
export const kbdVariants = cva(
  "wg-antialiased border-surface-200 border-1 text-surface-600 dark:border-surface-100 inline-flex items-center rounded-full px-8px font-sans border",
  {
    variants: {
      size: {
        xs: "text-xs leading-6 [--wg-border-width:1px]",
        sm: "text-sm leading-6 px-8px py-2px [--wg-border-width:1px]",
        base: "py-0.5 text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

/* ---------------------------------- Types --------------------------------- */
export type KbdElement = React.ElementRef<"kbd">;
export type KbdProps = Omit<React.HTMLAttributes<KbdElement>, "size"> &
  VariantProps<typeof kbdVariants> & {
    keys?: KbdKey | KbdKey[];
  };

/* ------------------------------- Components ------------------------------- */
const Key = ({ keyName }: { keyName: KbdKey }) => {
  const isKey = typeof keyName === "string";

  if (!isKey) {
    return null;
  }

  return <span aria-label={kbdKeysLabelMap[keyName]}>{kbdKeysMap[keyName]}</span>;
};

const Kbd = React.forwardRef<KbdElement, KbdProps>(
  ({ children, className, keys, size = "sm", ...otherProps }, ref) => {
    const renderKeys = () => {
      if (!keys) return null;

      if (Array.isArray(keys)) {
        return keys.map((k) => <Key key={k} keyName={k} />);
      }

      return null;
    };

    return (
      <kbd ref={ref} className={cn(kbdVariants({ size }), className)} {...otherProps}>
        {renderKeys()}
        {children ? <span>{children}</span> : null}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";

export default Kbd;
