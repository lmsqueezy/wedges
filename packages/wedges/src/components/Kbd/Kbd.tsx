import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../helpers/utils";

import { KbdKey, kbdKeysLabelMap, kbdKeysMap } from "./types";

/* -------------------------------- Variants -------------------------------- */
export const kbdVariants = cva(
  "dark:bg-surface tracking-widest bg-white border-surface-200 border-1 text-surface-800 dark:border-surface-100 shadow-wg-xs dark:shadow:none inline-flex items-center rounded-lg bg-transparent align-baseline font-sans border [--wg-border-width:1px]",
  {
    variants: {
      size: {
        xs: "text-xs px-1.5 py-0.5",
        sm: "px-8px py-4px text-sm [--wg-border-width:1px]",
        base: "px-2 py-0.5 text-base",
        lg: "py-0.5 px-2 text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

/* ---------------------------------- Types --------------------------------- */
export type KbdElement = React.ElementRef<"kbd">;
export type KbdProps = Omit<React.HTMLProps<KbdElement>, "size"> &
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
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";

export default Kbd;
