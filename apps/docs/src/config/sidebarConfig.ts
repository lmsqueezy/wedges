import { NavItem } from "@/types/nav";

type DocsConfig = {
  nav: NavItem[];
};

export const sidebarConfig: DocsConfig = {
  nav: [
    {
      label: "Getting Started",
      items: [
        {
          label: "Introduction",
          href: "/",
        },
        {
          label: "Installation",
          href: "/installation",
        },
        {
          label: "Theming",
          href: "/theming",
        },
        {
          label: "Dark mode",
          href: "/dark-mode",
        },
      ],
    },
  ],
};
