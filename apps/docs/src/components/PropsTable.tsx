import * as React from "react";
import { Tooltip } from "@lmsqueezy/wedges";

import { cn } from "@/lib/utils";

type ContentItem = {
  value: string;
  description?: string;
};

export const PropsTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    content: [ContentItem, ContentItem, ContentItem][];
    isData?: boolean;
  }
>(({ content, isData = false, ...otherProps }, ref) => {
  // Sort the content array
  const sortedContent = React.useMemo(() => {
    return [...content].sort((a, b) => {
      const aValue = a[0].value;
      const bValue = b[0].value;

      return aValue?.toString().localeCompare(bValue.toString());
    });
  }, [content]);

  return (
    <div
      ref={ref}
      className="my-[2em] overflow-scroll rounded-lg border border-surface-100 shadow-wg-xs"
    >
      <table className="m-0 text-sm" {...otherProps}>
        <thead>
          <tr>
            <th>{isData ? "Data attribute" : "Prop"}</th>
            <th>Values</th>
            {!isData ? <th>Default</th> : null}
          </tr>
        </thead>

        <tbody>
          {sortedContent.map((row, index) => (
            <tr key={index}>
              {row.map((rowItem, rowIndex) =>
                isData && rowIndex === 2 ? null : (
                  <td
                    className={cn(rowIndex === 0 && "sm:min-w-[160px]", "min-w-0")}
                    key={`${rowIndex}--${index}`}
                  >
                    <div className="flex items-center gap-0.5">
                      {rowItem?.value?.includes("Present") ? (
                        // Render a span element if 'Present' is found
                        <span className="text-sm">{rowItem.value}</span>
                      ) : rowItem?.value ? (
                        // Existing code for other cases
                        <code className="not-prose relative break-words rounded bg-surface-100/70 px-[0.3rem] py-[0.15rem] font-mono text-[13px] text-xs text-surface-800">
                          {rowItem.value}
                        </code>
                      ) : (
                        // Fallback if there's no value
                        <span className="select-none text-surface-200">/</span>
                      )}

                      {rowItem.description ? <Tooltip content={rowItem?.description} /> : null}
                    </div>
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

PropsTable.displayName = "PropsTable";
