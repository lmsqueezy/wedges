import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps } from "cva";

import { cn, isElementWithChildren, isReactElement } from "../../helpers/utils";
import { tabListVariants, tabVariants } from "./variants";

/* ---------------------------------- Types --------------------------------- */
export type TabsElement = React.ElementRef<typeof TabsPrimitive.Root>;
export type TabsProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> &
  VariantProps<typeof tabVariants>;

type TabsContextProps = {
  variant?: TabsProps["variant"];
};

/* --------------------------------- Context -------------------------------- */
const TabsContext = React.createContext<TabsContextProps | null>(null);

function useTabsContext() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used within a Tabs or Tabs.Root component");
  }

  return context;
}

/* -------------------------------- Component ------------------------------- */
const TabsRoot = React.forwardRef<TabsElement, TabsProps>(
  ({ children, className, orientation = "horizontal", ...otherProps }, ref) => (
    <TabsPrimitive.Root
      ref={ref}
      className={cn(
        "wg-antialiased",
        orientation === "vertical" && "flex flex-wrap space-x-6",
        orientation === "horizontal" && "space-y-6",
        className
      )}
      orientation={orientation}
      {...otherProps}
    >
      <TabsContext.Provider value={{ variant: otherProps.variant }}>
        {children}
      </TabsContext.Provider>
    </TabsPrimitive.Root>
  )
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    /**
     * Should the tabs stretch to fill the available space?
     */
    stretch?: boolean;
  }
>(({ className, stretch, ...otherProps }, ref) => {
  const { variant } = useTabsContext();

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex items-center text-sm",
        stretch && "w-full grow",
        (variant === "contained-bottom" || variant === "contained-top") && !stretch && "w-fit",
        stretch && "[&>*]:grow",
        tabListVariants({ variant }),
        className
      )}
      {...otherProps}
    />
  );
});

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    /**
     * The slot to be rendered before the trigger label.
     */
    before?: React.ReactElement<HTMLElement>;

    /**
     * The slot to be rendered after the trigger label.
     */
    after?: React.ReactElement<HTMLElement>;
  }
>(({ className, before, after, children, asChild, ...otherProps }, ref) => {
  const { variant } = useTabsContext();
  const useAsChild = asChild && isReactElement(children);

  const innerContent = useAsChild ? (
    React.cloneElement(children, {
      children: (
        <>
          {before}
          {isElementWithChildren(children) && children.props.children}
          {after}
        </>
      ),
    })
  ) : (
    <>
      {before}
      {children ? <span className="px-1">{children}</span> : null}
      {after}
    </>
  );

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      asChild={asChild}
      className={cn(
        // base
        "inline-flex items-center justify-center gap-1 whitespace-nowrap text-surface-500 outline-primary transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60",

        tabVariants({ variant }),
        className
      )}
      {...otherProps}
    >
      {innerContent}
    </TabsPrimitive.Trigger>
  );
});

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...otherProps }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      className
    )}
    {...otherProps}
  />
));

const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

TabsRoot.displayName = TabsPrimitive.Root.displayName;
TabsList.displayName = TabsPrimitive.List.displayName;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
TabsContent.displayName = TabsPrimitive.Content.displayName;

export default Tabs;
