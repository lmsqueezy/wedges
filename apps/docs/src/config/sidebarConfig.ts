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
          href: "/getting-started/installation",
        },
        {
          label: "Theming",
          href: "/getting-started/theming",
        },
        {
          label: "Dark mode",
          href: "/getting-started/dark-mode",
        },
      ],
    },
  ],
};
