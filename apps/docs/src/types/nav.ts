export type NavItem = {
  label: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  items?: NavItem[];
};

export type FooterNavItem = Pick<NavItem, "label" | "href">;
export type FooterNav = Record<string, FooterNavItem[]>;
