"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { type WebflowData } from "./Header";
import { Logo, Logomark } from "./Logo";
import { ArrowRightIcon, Navigation } from "./Navigation";

/* ------------------------------- Components ------------------------------- */
export default function LemonSqueezyHeader({
  caseStudy,
  blog,
}: {
  caseStudy: WebflowData;
  blog: WebflowData;
}) {
  const [platformDropdownOpen, setPlatformDropdown] = useState(false);
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
          {/* -------------------------------- Platform -------------------------------- */}
          <Navigation.Item
            active={platformDropdownOpen}
            asChild
            tabIndex={0}
            onFocus={() => {
              // Hide other dropdowns
              setResourcesDropdownOpen(false);

              // Show this dropdown
              onMouseEnter(setPlatformDropdown);
            }}
            onMouseEnter={() => {
              // Hide other dropdowns
              setResourcesDropdownOpen(false);

              // Show this dropdown
              onMouseEnter(setPlatformDropdown);
            }}
            onMouseLeave={() => onMouseLeave(setPlatformDropdown)}
            onBlur={() => onMouseLeave(setPlatformDropdown)}
          >
            <div role="button" aria-haspopup="true" aria-expanded="false">
              <span id="menu-item__platform">Platform</span>
              <ChevronDownIcon />

              <Navigation.Dropdown
                show={platformDropdownOpen}
                aria-labelledby="menu-item__platform"
              >
                <PlatformDropdown />
              </Navigation.Dropdown>
            </div>
          </Navigation.Item>

          {/* -------------------------------- Resources ------------------------------- */}
          <Navigation.Item
            active={resourcedDropdownOpen}
            asChild
            tabIndex={0}
            onFocus={() => {
              // Hide other dropdowns
              setPlatformDropdown(false);

              // Show this dropdown
              onMouseEnter(setResourcesDropdownOpen);
            }}
            onMouseEnter={() => {
              // Hide other dropdowns
              setPlatformDropdown(false);

              // Show this dropdown
              onMouseEnter(setResourcesDropdownOpen);
            }}
            onMouseLeave={() => onMouseLeave(setResourcesDropdownOpen)}
            onBlur={() => onMouseLeave(setResourcesDropdownOpen)}
          >
            <div role="button" aria-haspopup="true" aria-expanded="false">
              <span id="menu-item__resources">Resources</span>
              <ChevronDownIcon />

              <Navigation.Dropdown
                show={resourcedDropdownOpen}
                aria-labelledby="menu-item__resources"
              >
                <ResourcesDropdown caseStudy={caseStudy} blog={blog} />
              </Navigation.Dropdown>
            </div>
          </Navigation.Item>

          <Navigation.Item href="https://www.lemonsqueezy.com/pricing">Pricing</Navigation.Item>
          <Navigation.Item active={true} href="https://www.lemonsqueezy.com/wedges">
            Wedges
          </Navigation.Item>
          <Navigation.Item href="https://www.lemonsqueezy.com/help">Help</Navigation.Item>
        </Navigation>

        <Navigation
          aria-label="Login Nav"
          className="ml-auto flex items-center justify-end gap-2 justify-self-end"
        >
          <Navigation.Item
            className={cn("hover:text-white", focusClasses, "outline-white")}
            href="https://app.lemonsqueezy.com/login"
          >
            Sign in
          </Navigation.Item>

          <Button
            asChild
            className="group gap-[6px] !bg-white px-5 py-2 text-[15px] tracking-[-0.01em] !text-wg-gray-900 !outline-white hover:[&_svg]:hidden"
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

type LinksConfig = {
  badge?: "new" | "updates";
  description?: string;
  href: string;
  label: string;
};

function ResourcesDropdown({ caseStudy, blog }: { caseStudy: WebflowData; blog: WebflowData }) {
  const links: LinksConfig[] = [
    {
      label: "Help Center",
      description: "Need help or have a question?",
      href: "https://www.lemonsqueezy.com/help",
    },
    {
      label: "Help Docs",
      description: "Detailed help docs and knowledge base",
      href: "https://docs.lemonsqueezy.com/help",
    },
    {
      label: "Developer Docs",
      description: "Browse our extensive developer docs",
      href: "https://docs.lemonsqueezy.com/api",
    },
    {
      label: "Suggest a Feature",
      description: "Vote on new ideas or suggest your own",
      href: "https://www.lemonsqueezy.com/suggest-feature",
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-3">
        {/* ----------------------------- Helpful Links ----------------------------- */}
        <Navigation.DropdownColumn className="-ml-4 pl-0">
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

          {caseStudy && !caseStudy.isArchived && !caseStudy.isDraft ? (
            <Navigation.DropdownBlogLink
              href={caseStudy.url}
              imgSrc={caseStudy.image}
              label={caseStudy.title}
            />
          ) : null}
        </Navigation.DropdownColumn>

        {/* ----------------------------- Blog Articles ---------------------------- */}
        <Navigation.DropdownColumn className="place-content-start">
          <Navigation.DropdownTitle
            buttonHref="https://www.lemonsqueezy.com/blog"
            buttonLabel="All articles"
            id="dropdown-menu__blog-articles"
            label="Blog"
          />

          {blog && !blog.isArchived && !blog.isDraft ? (
            <Navigation.DropdownBlogLink href={blog.url} imgSrc={blog.image} label={blog.title} />
          ) : null}
        </Navigation.DropdownColumn>
      </div>
    </div>
  );
}

function PlatformDropdown() {
  const links: Record<string, LinksConfig[]> = {
    ecommerce: [
      {
        label: "Subscriptions",
        description: "Maximize your revenue with subscriptions",
        href: "https://www.lemonsqueezy.com/ecommerce/subscriptions",
      },
      {
        label: "Payments",
        description: "Payments and billing made easy-peasy",
        href: "https://www.lemonsqueezy.com/ecommerce/payments",
      },
      {
        label: "Online Stores",
        description: "Your own online storefront in minutes",
        href: "https://www.lemonsqueezy.com/ecommerce/payments",
      },
      {
        label: "Digital Products",
        description: "Sell digital products any way you want",
        href: "https://www.lemonsqueezy.com/ecommerce/online-stores",
      },
      {
        label: "Checkout Overlays",
        description: "Add a native checkout flow anywhere",
        href: "https://www.lemonsqueezy.com/ecommerce/checkout-overlays",
      },
      {
        label: "Hosted Checkouts",
        description: "Increase conversions with hosted checkouts",
        href: "https://www.lemonsqueezy.com/ecommerce/hosted-checkouts",
      },
    ],
    features: [
      {
        label: "Affiliates",
        description: "Empower your superfans with affiliate tools",
        href: "https://www.lemonsqueezy.com/marketing/affiliates",
      },
      {
        label: "Usage-based Billing",
        description: "Track usage and bill based on consumption",
        href: "https://www.lemonsqueezy.com/features/usage-based-billing",
        badge: "new",
      },
      {
        label: "Customer Portal",
        description: "A self-service customer portal for your store",
        href: "https://www.lemonsqueezy.com/features/customer-portal",
        badge: "new",
      },
      {
        label: "Discount Codes",
        description: "Coupons & discounts for a feel-good checkout",
        href: "https://www.lemonsqueezy.com/marketing/discount-codes",
      },
      {
        label: "Lead Magnets",
        description: "Distribute free products that build interest",
        href: "https://www.lemonsqueezy.com/marketing/lead-magnets",
      },
      {
        label: "Pay What Yout Want",
        description: "Let customers choose the price they pay",
        href: "https://www.lemonsqueezy.com/marketing/pay-what-you-want",
      },
    ],
    reporting: [
      {
        label: "Merchant of Record",
        description: "Global sales tax & compliance handled for you",
        href: "https://www.lemonsqueezy.com/reporting/merchant-of-record",
      },
      {
        label: "Fraud Prevention",
        description: "Your always-on shield from financial fraud",
        href: "https://www.lemonsqueezy.com/reporting/fraud-prevention",
      },
      {
        label: "Customer Management",
        description: "Build enduring customer partnerships",
        href: "https://www.lemonsqueezy.com/reporting/customer-management",
      },
    ],
  };

  return (
    <div className="container">
      <div className="grid grid-cols-3">
        {/* ----------------------------- Ecommerce ----------------------------- */}
        <Navigation.DropdownColumn className="-ml-4 pl-0">
          <Navigation.DropdownTitle label="eCommerce" id="dropdown-menu__ecommerce" />

          {links.ecommerce?.map(({ label, description, href }, index) => (
            <Navigation.DropdownLink
              key={`${label}-${index}`}
              href={href}
              label={label}
              description={description}
              role="menuitem"
            />
          ))}
        </Navigation.DropdownColumn>

        {/* ----------------------------- Features ----------------------------- */}
        <Navigation.DropdownColumn>
          <Navigation.DropdownTitle label="Features" id="dropdown-menu__features" />

          {links.features?.map(({ label, description, href, badge }, index) => (
            <Navigation.DropdownLink
              key={`${label}-${index}`}
              href={href}
              label={label}
              description={description}
              role="menuitem"
              badge={badge}
            />
          ))}
        </Navigation.DropdownColumn>

        {/* ----------------------------- Reporting ----------------------------- */}
        <Navigation.DropdownColumn>
          <Navigation.DropdownTitle label="Reporting" id="dropdown-menu__reporting" />

          {links.reporting?.map(({ label, description, href }, index) => (
            <Navigation.DropdownLink
              key={`${label}-${index}`}
              href={href}
              label={label}
              description={description}
              role="menuitem"
            />
          ))}

          <div className="-mx-6 mt-8 border-t border-white/20 px-6 pt-8">
            <Navigation.DropdownLink
              href="https://www.lemonsqueezy.com/changelog"
              label="Changelog"
              description="Freshly squeezed platform updates"
              role="menuitem"
              badge="updates"
            />

            <Navigation.DropdownLink
              href="https://www.lemonsqueezy.com/roadmap"
              label="Roadmap"
              description="Learn what features are on the horizon"
              role="menuitem"
            />
          </div>
        </Navigation.DropdownColumn>
      </div>
    </div>
  );
}
