"use client";

import {
  forwardRef,
  isValidElement,
  type AnchorHTMLAttributes,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type SVGAttributes,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { Slot } from "@radix-ui/react-slot";

import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                               Navigation Root                              */
/* -------------------------------------------------------------------------- */
const NavRoot = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex text-[15px] leading-6 text-white/60", className)}
        {...otherProps}
      />
    );
  }
);

/* -------------------------------------------------------------------------- */
/*                               Navigation Item                              */
/* -------------------------------------------------------------------------- */
const NavItem = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    active?: boolean;
  }
>((props, ref) => {
  const { active, children, onMouseEnter, className, asChild, ...otherProps } = props;
  const useAsChild = asChild && isValidElement(children);
  const Component = useAsChild ? Slot : "a";

  return (
    <Component
      ref={ref}
      onMouseEnter={onMouseEnter}
      className={cn(
        focusClasses,
        "duration-180 z-[51] -mb-px inline-flex shrink-0 items-center justify-center px-4 outline-white transition-colors hover:text-white",
        active && "text-white shadow-[inset_0_-2px_0px_#FFC233]",
        !active && "hover:text-white",
        onMouseEnter && "pr-2",
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

/* -------------------------------------------------------------------------- */
/*                             Navigation Dropdown                            */
/* -------------------------------------------------------------------------- */
const NavDropdown = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    show?: boolean;
  }
>(({ className, show, ...otherProps }, ref) => {
  return (
    <Transition
      as="div"
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={show}
    >
      <div
        ref={ref}
        role="menu"
        className={cn(
          "absolute inset-x-0 top-full z-[50] mt-px cursor-default bg-purple-600 shadow-2xl",
          className
        )}
        {...otherProps}
      />
    </Transition>
  );
});

const NavDropdownColumn = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => {
    return (
      <div
        ref={ref}
        role="menu"
        className={cn(
          "grid auto-rows-max grid-cols-1 border-r border-white/20 px-6 py-8",
          className
        )}
        {...otherProps}
      />
    );
  }
);

/* ------------------------------ Dropdown Link ----------------------------- */
const NavDropdownLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<typeof Link> & {
    label: string;
    description?: string;
    badge?: "new" | "updates";
  }
>(({ className, badge, label, description, ...otherProps }, ref) => {
  const newBadge = (
    <span
      className="ml-2 rounded-full bg-orange-200 px-3 text-sm leading-6 text-[#8a6100]"
      aria-hidden
    >
      new
    </span>
  );

  const updatesBadge = (
    <span className="ml-2 rounded-full bg-purple-500 px-3 text-sm leading-6 text-white">
      updates
    </span>
  );

  return (
    <Link
      ref={ref}
      className={cn(
        focusClasses,
        "duration-180 group flex select-none flex-col justify-center rounded-lg px-4 py-3 outline-white transition-colors hover:bg-white focus-visible:bg-white",
        className
      )}
      {...otherProps}
    >
      <span className="duration-180 flex items-center text-base leading-[1.6] text-white transition-colors group-hover:text-gray-900 group-focus-visible:text-gray-900">
        <span>{label}</span>
        {badge === "new" && newBadge}
        {badge === "updates" && updatesBadge}
        <ArrowRightIcon className="duration-180 text-gray-900 opacity-0 transition-all group-hover:translate-x-1.5 group-hover:opacity-100" />
      </span>

      <span className="duration-180 text-sm leading-[1.7] text-white/60 transition-colors group-hover:text-gray-500 group-focus-visible:text-gray-500">
        {description}
      </span>
    </Link>
  );
});

/* --------------------------- Dropdown Blog Link --------------------------- */
const NavDropdownBlogLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<typeof Link> & {
    label: string;
    description?: string;
    imgSrc: string;
  }
>(({ className, label, imgSrc, ...otherProps }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        focusClasses,
        "duration-180 group flex select-none flex-col rounded-lg p-4 leading-6 outline-white transition-colors hover:bg-white focus-visible:bg-white",
        className
      )}
      {...otherProps}
    >
      <div className="relative mb-5 aspect-[3/2] w-full rounded-md bg-gray-50">
        <Image className="rounded-md" src={imgSrc} alt={label} fill placeholder="empty" />
      </div>

      <span className="duration-180 flex items-center text-base text-white transition-colors group-hover:text-gray-900 group-focus-visible:text-gray-900">
        {label}
      </span>
    </Link>
  );
});

type WithoutButtonProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  buttonLabel?: undefined;
  buttonHref?: never;
};

type WithButtonProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  buttonLabel: string;
  buttonHref: string;
};

type NavDropdownTitleProps = WithoutButtonProps | WithButtonProps;

const NavDropdownTitle = forwardRef<HTMLDivElement, NavDropdownTitleProps>(
  ({ label, buttonHref, buttonLabel, ...otherProps }, ref) => {
    return (
      <div
        className="mx-4 mb-4 flex shrink-0 flex-wrap items-center justify-between gap-3 text-sm"
        ref={ref}
        {...otherProps}
      >
        {label ? (
          <span className="font-medium uppercase tracking-[2px] text-yellow-500">{label}</span>
        ) : null}

        {buttonLabel && (
          <Link
            className="duration-180 group flex items-center gap-1.5 text-white/60 outline-white transition-colors hover:text-white focus-visible:outline-offset-2"
            href={buttonHref}
          >
            <span>{buttonLabel}</span>
            <ArrowRightIcon className="duration-180 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    );
  }
);

NavRoot.displayName = "NavRoot";
NavItem.displayName = "NavItem";
NavDropdown.displayName = "NavDropdown";
NavDropdownColumn.displayName = "NavDropdownColumn";
NavDropdownLink.displayName = "NavDropdownLink";
NavDropdownTitle.displayName = "NavDropdownTitle";
NavDropdownBlogLink.displayName = "NavDropdownBlogLink";

export const Navigation = Object.assign(NavRoot, {
  Item: NavItem,
  Dropdown: NavDropdown,
  DropdownColumn: NavDropdownColumn,
  DropdownLink: NavDropdownLink,
  DropdownBlogLink: NavDropdownBlogLink,
  DropdownTitle: NavDropdownTitle,
});

/* --------------------------------- Helper --------------------------------- */
export function ArrowRightIcon({ className, ...otherProps }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      className={cn("h-3 w-3", className)}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      {...otherProps}
    >
      <path
        d="M6.39205 11.2102L5.36932 10.1988L8.92045 6.64768H0V5.17041H8.92045L5.36932 1.62496L6.39205 0.60791L11.6932 5.90905L6.39205 11.2102Z"
        fill="currentColor"
      />
    </svg>
  );
}
