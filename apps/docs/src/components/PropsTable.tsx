import * as React from "react";
import { Tooltip } from "@lemonsqueezy/wedges";

import { createLabelDocs, type LabelDocsParams } from "@/lib/docUtils";
import { cn } from "@/lib/utils";

type ContentItem = {
  value: string;
  description?: string;
};

type SortProps = {
  sort: true;
  content: [ContentItem, { value: React.ReactNode }][];
};

type NoSortProps = {
  sort?: false;
  content: [ContentItem, ContentItem, ContentItem][];
};

export const PropsTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    content: [ContentItem, ContentItem, ContentItem][];
    isData?: boolean;
    isOptions?: boolean;
    isUtility?: boolean;
    sort?: boolean;
    includeCommonDocs?: LabelDocsParams;
  } & (SortProps | NoSortProps)
>(
  (
    {
      content = [],
      isData = false,
      isOptions = false,
      isUtility = false,
      sort = true,
      includeCommonDocs,
      ...otherProps
    },
    ref
  ) => {
    // Include label docs?
    const {
      label = false,
      description = false,
      tooltip = false,
      helperText = false,
      required = false,
      disabled = false,
      before = false,
      after = false,
      asChild = false,
    } = includeCommonDocs ?? {};

    const labelDocs = createLabelDocs({
      label,
      description,
      tooltip,
      helperText,
      required,
      disabled,
      before,
      after,
      asChild,
    });

    // Sort the content array
    const sortedContent = React.useMemo(() => {
      if (sort) {
        const returnContent = [...labelDocs];
        returnContent.push(
          ...[...content].sort((a, b) => {
            const aValue = a[0].value;
            const bValue = b[0].value;

            return aValue?.toString().localeCompare(bValue.toString());
          })
        );

        return returnContent;
      } else {
        return [...labelDocs, ...content];
      }
    }, [content, sort]);

    return (
      <div
        ref={ref}
        className="my-[2em] overflow-x-auto rounded-lg border border-surface-100 shadow-wg-xs"
      >
        <table className="m-0 text-sm" {...otherProps}>
          <thead>
            <tr>
              <th className="text-start">
                {isData ? "Data attribute" : isOptions ? "Option" : isUtility ? "Class" : "Prop"}
              </th>

              <th className="text-start">{isUtility ? "Values" : "Value"}</th>

              {!isData && !isUtility ? <th className="text-start">Default</th> : null}
            </tr>
          </thead>

          <tbody>
            {sortedContent?.map((row, index) => (
              <tr key={index}>
                {row.map((rowItem, rowIndex) =>
                  isData && rowIndex === 2 ? null : (
                    <td
                      className={cn(rowIndex === 0 && "sm:w-48", "min-w-0")}
                      key={`${rowIndex}--${index}`}
                    >
                      <div className="flex items-center gap-0.5">
                        {typeof rowItem?.value === "string" &&
                        rowItem?.value?.includes("Present") ? (
                          // Render a span element if 'Present' is found
                          <span className="text-sm">{rowItem.value}</span>
                        ) : rowItem?.value ? (
                          // Existing code for other cases
                          <code className="not-prose relative break-words rounded bg-surface-100/70 px-[0.3rem] py-[0.15rem] font-mono text-[13px] text-xs text-surface-800 [&:has(div)]:bg-transparent [&>div]:flex [&>div]:flex-col">
                            {rowItem.value}
                          </code>
                        ) : (
                          // Fallback if there's no value
                          <span className="select-none text-surface-200">/</span>
                        )}

                        <Description>{rowItem.description}</Description>
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
  }
);

PropsTable.displayName = "PropsTable";

const Description = ({ children }: { children: React.ReactNode }) => {
  return children ? (
    <Tooltip content={children} className="[text-wrap:pretty]" delayDuration={150} />
  ) : null;
};
