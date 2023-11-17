# Wedges?

Wedges is a professionally designed <a href="https://lemonsqueezy.com/wedges/figma/">design system for Figma</a> and an open-source React UI library that combines <a href="https://www.radix-ui.com/primitives" target="_blank" rel="noopener noreferrer">Radix UI primitives</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>. Its goal is to simplify the process of building beautiful, functional and accessible user interfaces.

With Wedges, you get a range of pre-built, customizable components that are easy to use and integrate into your React projects. It also comes with full TypeScript support, ensuring type safety and developer-friendly experience.

## Repository Structure
This repo is a monorepo structure (powered by turborepo) and is managed with [PNPM](https://pnpm.io/).

## Components
- [x] Alert
- [x] Avatar
- [x] Avatar Group
- [x] Badge
- [x] Button
- [x] Button Group
- [x] Toggle Group
- [x] Tag
- [x] Tooltip
- [x] Switch
- [x] Switch Group
- [x] Label
- [x] Radio Group
- [x] Checkbox
- [x] Checkbox Group
- [x] Kbd
- [x] Dropdown
- [x] Popover
- [x] Textarea 
- [x] Tabs
- [ ] Select
- [ ] Input

## Upcoming Components
- [ ] Dialog
- [ ] Slider
- [ ] Toast
- [ ] Accordion

## Packages

- [@lmsqueezy/wedges/](./packages/wedges) - React UI library and TailwindCSS plugin.

## Apps

- [lemon-lab](./apps/lemon-lab) - A NextJS-based application that serves as a testing ground and showcase for the library's capabilities.

## Installation

To integrate this library into your workflow:

1. Clone the repository.
2. Install the necessary dependencies using PNPM:

```bash
pnpm i
```

## Development

To start the development server for the library, run:

```bash
pnpm dev
```
