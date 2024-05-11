import * as React from "react";
import { cva, type VariantProps } from "cva";

import { cn } from "../../helpers/utils";
import { kbdKeysLabelMap, kbdKeysMap, type KbdKey } from "./types";

/* -------------------------------- Variants -------------------------------- */
export const kbdVariants = cva({
  base: "border-1 inline-flex cursor-default items-center rounded-full border border-surface-200 px-2 font-sans text-surface-500 wg-antialiased dark:border-surface-100 [&>abbr]:no-underline",
  variants: {
    size: {
      xs: "text-xs leading-6",
      sm: "text-sm leading-6",
      md: "py-0.5 text-base leading-6",
      lg: "py-0.5 text-lg",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

/* ---------------------------------- Types --------------------------------- */
export type KbdElement = React.ElementRef<"kbd">;
export type KbdProps = Omit<React.HTMLAttributes<KbdElement>, "size"> &
  VariantProps<typeof kbdVariants> & {
    keys?: KbdKey | KbdKey[];
  };

/* ------------------------------- Components ------------------------------- */
const Key = ({ keyName }: { keyName: KbdKey }) => {
  const isKey = typeof keyName === "string" && keyName in kbdKeysMap;

  if (!isKey) {
    return null;
  }

  return <abbr title={kbdKeysLabelMap[keyName]}>{kbdKeysMap[keyName]}</abbr>;
};

const Kbd = React.forwardRef<KbdElement, KbdProps>(
  ({ children, className, keys, size = "xs", ...otherProps }, ref) => {
    const renderKeys = () => {
      if (!keys) return null;

      if (Array.isArray(keys)) {
        return keys.map((k) => <Key key={k} keyName={k} />);
      }

      return <Key keyName={keys} />;
    };

    if ((!keys || keys.length === 0) && !children) return null;

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
