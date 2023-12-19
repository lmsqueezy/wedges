import type { NavItem } from "@/types/nav";

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
          label: "Requirements",
          href: "/getting-started/requirements",
        },
      ],
    },
    {
      label: "Installation",
      items: [
        {
          label: "Next.js",
          href: "/installation/nextjs",
        },
        {
          label: "Vite",
          href: "/installation/vite",
        },
        {
          label: "Remix",
          href: "/installation/remix",
        },
        {
          label: "Gatsby",
          href: "/installation/gatsby",
        },
        {
          label: "Astro",
          href: "/installation/astro",
        },
        {
          label: "Laravel",
          href: "/installation/laravel",
        },
        {
          label: "Manual",
          href: "/installation/manual",
        },
      ],
    },
    {
      label: "Theming",
      items: [
        {
          label: "Tailwind Plugin",
          href: "/theming/tailwind-css-plugin",
        },
        {
          label: "Colors",
          href: "/theming/colors",
        },
        {
          label: "Dark Mode",
          href: "/theming/dark-mode",
        },
        {
          label: "Custom Themes",
          href: "/theming/custom-themes",
        },
        {
          label: "Additional Utilities",
          href: "/theming/additional-utilities",
        },
      ],
    },
    {
      label: "Components",
      items: [
        {
          label: "Alert",
          href: "/components/alert",
        },
        {
          label: "Avatar",
          href: "/components/avatar",
        },
        {
          label: "Avatar Group",
          href: "/components/avatar-group",
        },
        {
          label: "Badge",
          href: "/components/badge",
        },
        {
          label: "Button",
          href: "/components/button",
        },
        {
          label: "Button Group",
          href: "/components/button-group",
        },
        {
          label: "Checkbox",
          href: "/components/checkbox",
        },
        {
          label: "Checkbox Group",
          href: "/components/checkbox-group",
        },
        {
          label: "Dropdown Menu",
          href: "/components/dropdown-menu",
        },
        {
          label: "Input",
          href: "/components/input",
        },
        {
          label: "Label",
          href: "/components/label",
        },
        {
          label: "Popover",
          href: "/components/popover",
        },
        {
          label: "Radio Group",
          href: "/components/radio-group",
        },
        {
          label: "Switch",
          href: "/components/switch",
        },
        {
          label: "Switch Group",
          href: "/components/switch-group",
        },
        {
          label: "Tabs",
          href: "/components/tabs",
        },
        {
          label: "Tag",
          href: "/components/tag",
        },
        {
          label: "Textarea",
          href: "/components/textarea",
        },
        {
          label: "Toggle",
          href: "/components/toggle",
        },
        {
          label: "Toggle Group",
          href: "/components/toggle-group",
        },
        {
          label: "Tooltip",
          href: "/components/tooltip",
        },
        {
          label: "Loading",
          href: "/components/loading",
          disabled: true,
        },
        {
          label: "Number Input",
          href: "/components/number-input",
          disabled: true,
        },
        {
          label: "Progress Bar",
          href: "/components/progress-bar",
          disabled: true,
        },
        {
          label: "Progress Circle",
          href: "/components/progress-circle",
          disabled: true,
        },
        {
          label: "Slider",
          href: "/components/slider",
          disabled: true,
        },
        {
          label: "Select",
          href: "/components/select",
          disabled: true,
        },
      ],
    },
  ],
};
