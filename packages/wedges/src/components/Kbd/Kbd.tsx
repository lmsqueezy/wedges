import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../../helpers/utils";
import { KbdKey, kbdKeysLabelMap, kbdKeysMap } from "./types";

/* -------------------------------- Variants -------------------------------- */
export const kbdVariants = cva(
  "wg-antialiased border-surface-200 border-1 text-surface-600 dark:border-surface-100 px-8px inline-flex items-center rounded-full border font-sans",
  {
    variants: {
      size: {
        xs: "text-xs leading-6 [--wg-border-width:1px]",
        sm: "px-8px py-2px text-sm leading-6 [--wg-border-width:1px]",
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
