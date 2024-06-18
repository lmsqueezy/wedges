"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@iconicicons/react";

import { type NavItem } from "@/types/nav";
import { type WebflowData } from "@/types/webflow";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { Navigation } from "./navigation";
import { PrimarySubItem } from "./primary-sub-item";

const NavigationItem = forwardRef<
  ElementRef<typeof Navigation.Item>,
  ComponentPropsWithoutRef<typeof Navigation.Item> & {
    item: NavItem;
    webflowData?: WebflowData;
  }
>((props, ref) => {
  const { item, className, webflowData, ...otherProps } = props;
  const pathname = usePathname();
  const isActive = pathname === item.href || item.href === "/";
  const Component = item.children ? Navigation.Trigger : Navigation.Link;

  return (
    <Navigation.Item ref={ref} className="inline-flex grow" {...otherProps}>
      <Component
        className={cn(
          focusClasses,
          "group z-[51] -mb-px inline-flex shrink-0 grow items-center justify-center px-4 outline-white transition-all duration-100 hover:text-white",
          isActive && "text-white shadow-[inset_0_-2px_0px_#FFC233]",
          !isActive &&
            "hover:text-white data-[state=open]:text-white data-[state=open]:shadow-[inset_0_-2px_0px_#FFC233]",
          item.children && "pr-2 hover:shadow-[inset_0_-2px_0px_#FFC233]",
          className
        )}
        href={item.href}
      >
        {item.label}
        {item.children ? <ChevronDownIcon /> : null}
      </Component>

      {item.children ? (
        <Navigation.Content>
          <div className="container">
            <ul className="-mx-10 grid grid-cols-3">
              {item.children.map((child, index) => (
                <PrimarySubItem
                  key={`sub-${index.toString()}`}
                  item={child}
                  webflowData={webflowData}
                />
              ))}
            </ul>
          </div>
        </Navigation.Content>
      ) : null}
    </Navigation.Item>
  );
});

NavigationItem.displayName = "NavigationItem";
export { NavigationItem };
