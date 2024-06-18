/* -------------------------- Primary nav (header) -------------------------- */
export type NavBadge = "new" | "updates";

export type NavItem = {
  label?: string;
  href?: string;
  buttonHref?: string;
  buttonLabel?: string;
  children?: NavItem[];
  description?: string;
  isBlog?: boolean;
  isCaseStudy?: boolean;
  separator?: boolean;
  tag?: NavBadge;
};

export type SidebarNav = {
  disabled?: boolean;
  new?: boolean;
  external?: boolean;
  children?: (NavItem & SidebarNav)[];
};

export type MainNav = NavItem[];

/* ----------------------- Secondary nav (sub header) ----------------------- */
export type SecondaryNavItem = {
  label: string;
  slug: string;
  href?: string;
  children?: SecondaryNavItem[];
};

export type SecondaryNav = SecondaryNavItem[];

/* ------------------------------- Footer nav ------------------------------- */
export type FooterNavItem = {
  label?: string;
  href?: string;
  children?: FooterNavItem[];
};

export type FooterNav = FooterNavItem[];
