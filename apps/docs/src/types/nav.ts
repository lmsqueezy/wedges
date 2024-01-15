export type NavItem = {
  disabled?: boolean;
  external?: boolean;
  href?: string;
  icon?: React.ReactNode;
  items?: NavItem[];
  label: string;
  new?: boolean;
};

export type FooterNavItem = Pick<NavItem, "label" | "href">;
export type FooterNavType = Record<string, FooterNavItem[]>;
