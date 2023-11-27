"use client";

import { ChevronDownIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Logo, Logomark } from "./Logo";
import { ArrowRightIcon, Navigation } from "./Navigation";
import { WedgesHeader } from "./WedgesHeader";

export function SiteHeader() {
  return (
    <>
      <LemonSqueezyHeader />
      <WedgesHeader />
    </>
  );
}

/* ------------------------------- Components ------------------------------- */
function LemonSqueezyHeader() {
  const [resourcedDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(null);

  // Reset timer on mouse enter
  const onMouseEnter = (showSetter: (value: boolean) => void) => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }

    showSetter(true);
  };

  // Add 300ms delay before closing dropdown
  const onMouseLeave = (showSetter: (value: boolean) => void) => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }

    const t = setTimeout(() => showSetter(false), 300);
    setDropdownTimer(t);
  };

  return (
    <header className="[&_a]:duration-180 relative border-b border-white/20 bg-purple-600 dark:bg-transparent [&_a]:transition-colors">
      <div className="container flex min-h-[88px] items-center justify-start gap-6 md:grid-cols-[1fr_auto_1fr] lg:grid">
        <a
          aria-label="Lemon Squeezy home page"
          className={cn(focusClasses, "outline-white")}
          href={siteConfig.lemonSqueezyURL}
        >
          <Logomark className="lg:hidden" />
          <Logo className="hidden w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
        </a>

        <Navigation aria-label="Main Nav" className="hidden self-stretch md:flex">
          <Navigation.Item>
            <span>Platform</span>
            <ChevronDownIcon />
          </Navigation.Item>

          <Navigation.Item
            asChild
            onMouseEnter={() => onMouseEnter(setResourcesDropdownOpen)}
            onMouseLeave={() => onMouseLeave(setResourcesDropdownOpen)}
          >
            <div role="button" aria-haspopup="true" aria-expanded="false">
              <span id="menu-item__resources">Resources</span>
              <ChevronDownIcon />

              <Navigation.Dropdown
                show={resourcedDropdownOpen}
                aria-labelledby="menu-item__resources"
              >
                <ResourcesDropdown />
              </Navigation.Dropdown>
            </div>
          </Navigation.Item>

          <Navigation.Item href="https://www.lemonsqueezy.com/pricing">Pricing</Navigation.Item>

          <Navigation.Item active={true} href="https://www.lemonsqueezy.com/wedges">
            Wedges
          </Navigation.Item>

          <Navigation.Item href="https://www.lemonsqueezy.com/help">Help</Navigation.Item>
        </Navigation>

        <Navigation aria-label="Login Nav" className="ml-auto justify-self-end">
          <Navigation.Item
            className={cn("hover:text-white", focusClasses, "outline-white")}
            href="https://app.lemonsqueezy.com/login"
          >
            Sign in
          </Navigation.Item>

          <Button
            asChild
            className="!text-wg-gray-900 group gap-[6px] !bg-white px-5 py-2 text-[15px] tracking-[-0.01em] !outline-white hover:[&_svg]:hidden"
            shape="pill"
          >
            <a href="https://app.lemonsqueezy.com/register">
              <span>Get started</span>

              <ArrowRightIcon
                aria-hidden
                className="duration-180 pointer-events-none transition-transform group-hover:translate-x-2"
              />
            </a>
          </Button>
        </Navigation>
      </div>
    </header>
  );
}

function ResourcesDropdown() {
  const links = [
    {
      label: "Help center",
      description: "Need help or have a question?",
      href: "https://www.lemonsqueezy.com/help",
    },
    {
      label: "Help docs",
      description: "Detailed help docs and knowledge base",
      href: "https://docs.lemonsqueezy.com/help",
    },
    {
      label: "Developer docs",
      description: "Browse our extensive developer docs",
      href: "https://docs.lemonsqueezy.com/api",
    },
    {
      label: "Suggest a feature",
      description: "Vote on new ideas or suggest your own",
      href: "https://www.lemonsqueezy.com/suggest-feature",
    },
  ];

  return (
    <div className="container">
      <div className="mr-6 grid grid-cols-3">
        {/* ----------------------------- Helpful Links ----------------------------- */}
        <Navigation.DropdownColumn>
          <Navigation.DropdownTitle label="Helpful Links" id="dropdown-menu__helpful-links" />

          {links.map(({ label, description, href }, index) => (
            <Navigation.DropdownLink
              key={`${label}-${index}`}
              href={href}
              label={label}
              description={description}
              role="menuitem"
            />
          ))}
        </Navigation.DropdownColumn>

        {/* ----------------------------- Case Studies ----------------------------- */}
        <Navigation.DropdownColumn>
          <Navigation.DropdownTitle
            buttonHref="https://www.lemonsqueezy.com/case-studies"
            buttonLabel="All studies"
            id="dropdown-menu__case-studies"
            label="Case studies"
          />

          <Navigation.DropdownBlogLink
            href="https://www.lemonsqueezy.com/case-study/uipress"
            imgSrc="https://assets-global.website-files.com/6347244ba8d63461aa51c0af/652373a3059536649fe49bbb_UI-Press-Website-Mockup-p-2600.jpg"
            label="How uiPress Boosted WordPress Plugin Sales by 600% Using Lemon Squeezy"
          />
        </Navigation.DropdownColumn>

        {/* ----------------------------- Blog Articles ---------------------------- */}
        <Navigation.DropdownColumn className="place-content-start">
          <Navigation.DropdownTitle
            buttonHref="https://www.lemonsqueezy.com/blog"
            buttonLabel="All articles"
            id="dropdown-menu__blog-articles"
            label="Blog"
          />

          <Navigation.DropdownBlogLink
            href="https://www.lemonsqueezy.com/case-study/uipress"
            imgSrc="https://assets-global.website-files.com/6347244ba8d63461aa51c0af/655b80f26454aa9bd55bfa50_50m-min.jpg"
            label="Turning down a Series A term sheet ($50m+ valuation)"
          />
        </Navigation.DropdownColumn>
      </div>
    </div>
  );
}
