"use client";

import { forwardRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";

/* ---------------------------------- Root ---------------------------------- */
type NavRootElement = React.ElementRef<typeof NavigationMenu.Root>;
type NavRootProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.Root>;

const NavRoot = forwardRef<NavRootElement, NavRootProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <NavigationMenu.Root
      className={cn("self-stretch text-[15px] leading-6 text-white/60", className)}
      {...otherProps}
      ref={ref}
    />
  );
});
NavRoot.displayName = "NavRoot";

/* ---------------------------------- List ---------------------------------- */
type NavListElement = React.ElementRef<typeof NavigationMenu.List>;
type NavListProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.List>;

const NavList = forwardRef<NavListElement, NavListProps>((props, ref) => {
  return <NavigationMenu.List {...props} ref={ref} />;
});
NavList.displayName = "NavList";

/* --------------------------------- Trigger -------------------------------- */
type NavListTriggerElement = React.ElementRef<typeof NavigationMenu.Trigger>;
type NavListTriggerProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.Trigger>;

const NavListTrigger = forwardRef<NavListTriggerElement, NavListTriggerProps>((props, ref) => {
  return <NavigationMenu.Trigger {...props} ref={ref} />;
});
NavListTrigger.displayName = "NavListTrigger";

/* --------------------------------- Content -------------------------------- */
type NavListContentElement = React.ElementRef<typeof NavigationMenu.Content>;
type NavListContentProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.Content>;

const NavListContent = forwardRef<NavListContentElement, NavListContentProps>((props, ref) => {
  return <NavigationMenu.Content {...props} ref={ref} />;
});
NavListContent.displayName = "NavListContent";

/* ---------------------------------- Item ---------------------------------- */
type NavItemElement = React.ElementRef<typeof NavigationMenu.Item>;
type NavItemProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.Item>;

const NavItem = forwardRef<NavItemElement, NavItemProps>((props, ref) => {
  return <NavigationMenu.Item {...props} ref={ref} />;
});
NavItem.displayName = "NavItem";

/* ---------------------------------- Link ---------------------------------- */
type NavLinkElement = React.ElementRef<typeof NavigationMenu.Link>;
type NavLinkProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.Link>;

const NavLink = forwardRef<NavLinkElement, NavLinkProps>((props, ref) => {
  return <NavigationMenu.Link {...props} ref={ref} />;
});
NavLink.displayName = "NavLink";

/* ----------------------------------- Sub ---------------------------------- */
type NavItemSubElement = React.ElementRef<typeof NavigationMenu.Sub>;
type NavItemSubProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.Sub>;

const NavItemSub = forwardRef<NavItemSubElement, NavItemSubProps>((props, ref) => {
  return <NavigationMenu.Sub {...props} ref={ref} />;
});
NavItemSub.displayName = "NavItemSub";

/* -------------------------------- Viewport -------------------------------- */
type NavViewportElement = React.ElementRef<typeof NavigationMenu.Viewport>;
type NavViewportProps = React.ComponentPropsWithoutRef<typeof NavigationMenu.Viewport>;

const NavViewport = forwardRef<NavViewportElement, NavViewportProps>((props, ref) => {
  return <NavigationMenu.Viewport {...props} ref={ref} />;
});
NavViewport.displayName = "NavViewport";

/* ---------------------------------- Export --------------------------------- */
export const Navigation = Object.assign(NavRoot, {
  Root: NavRoot,
  List: NavList,
  Trigger: NavListTrigger,
  Content: NavListContent,
  Item: NavItem,
  Link: NavLink,
  Sub: NavItemSub,
  Viewport: NavViewport,
});
