import { type FooterNav, type MainNav, type SecondaryNav } from "@/types/nav";

export const mainNav: MainNav = [
  {
    label: "Platform",
    children: [
      {
        label: "eCommerce",
        children: [
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
            href: "https://www.lemonsqueezy.com/ecommerce/online-stores",
          },
          {
            label: "Digital Products",
            description: "Sell digital products any way you want",
            href: "https://www.lemonsqueezy.com/ecommerce/digital-products",
          },
          {
            label: "Checkout Overlay",
            description: "Add a native checkout flow",
            href: "https://www.lemonsqueezy.com/ecommerce/checkout-overlays",
          },
          {
            label: "Hosted Checkouts",
            description: "Increase conversions with hosted checkouts",
            href: "https://www.lemonsqueezy.com/ecommerce/hosted-checkouts",
          },
        ],
      },
      {
        label: "Features",
        children: [
          {
            label: "Affiliates",
            description: "Empower your superfans with affiliate tools",
            href: "https://www.lemonsqueezy.com/marketing/affiliates",
          },
          {
            label: "Usage-based Billing",
            description: "Track usage and bill based on consumption",
            href: "https://www.lemonsqueezy.com/features/usage-based-billing",
            tag: "new",
          },
          {
            label: "Customer Portal",
            description: "A self-service customer portal for your store",
            href: "https://www.lemonsqueezy.com/features/usage-based-billing",
            tag: "new",
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
            label: "Pay What You Want",
            description: "Let customers choose the price they pay",
            href: "https://www.lemonsqueezy.com/marketing/pay-what-you-want",
          },
        ],
      },
      {
        label: "Reporting",
        children: [
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
          {
            label: "Changelog",
            description: "Freshly squeezed platform updates",
            href: "https://www.lemonsqueezy.com/changelog",
            tag: "updates",
            separator: true,
          },
          {
            label: "Roadmap",
            description: "Learn what features are on the horizon",
            href: "https://www.lemonsqueezy.com/roadmap",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Helpful Links",
        children: [
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
            href: "https://docs.lemonsqueezy.com/api",
          },
        ],
      },
      {
        label: "Case Studies",
        buttonLabel: "All studies",
        buttonHref: "https://www.lemonsqueezy.com/case-studies",
        isCaseStudy: true,
      },
      {
        label: "Blog",
        buttonLabel: "All articles",
        buttonHref: "https://www.lemonsqueezy.com/blog",
        isBlog: true,
      },
    ],
  },
  { label: "Pricing", href: "https://www.lemonsqueezy.com/pricing" },
  { label: "Wedges", href: "/" },
  { label: "Help", href: "https://www.lemonsqueezy.com/help" },
];

export const secondaryNav: SecondaryNav = [
  {
    href: "/popular",
    label: "Popular",
    slug: "popular",
  },
];

/**
 * Footer navigation
 *
 * First level is the number of columns, the second level is the menus in each column and the third level is the links in each menu.
 */
export const footerNav: FooterNav = [
  //  first col (Resources + Compare)
  {
    children: [
      // first menu
      {
        label: "Resources",
        children: [
          {
            label: "Help Center",
            href: "https://www.lemonsqueezy.com/help",
          },
          {
            label: "Help Docs",
            href: "https://docs.lemonsqueezy.com/help",
          },
          {
            label: "Developer Docs",
            href: "https://docs.lemonsqueezy.com/api",
          },
          {
            label: "Guide to MoR",
            href: "https://www.lemonsqueezy.com/guide-to-merchant-of-record",
          },
          {
            label: "Creators' Guide",
            href: "https://www.lemonsqueezy.com/creators-guide",
          },
        ],
      },

      // Compare
      {
        children: [
          {
            label: "Compare",
            children: [
              {
                label: "Gumroad Alternative",
                href: "https://www.lemonsqueezy.com/gumroad-alternative",
              },
              {
                label: "Paddle Alternative",
                href: "https://www.lemonsqueezy.com/paddle-alternative",
              },
            ],
          },
        ],
      },
    ],
  },

  // second col
  {
    children: [
      {
        label: "Features",
        children: [
          {
            label: "Affiliates",
            href: "https://www.lemonsqueezy.com/marketing/affiliates",
          },
          {
            label: "PayPal Subscriptions",
            href: "https://www.lemonsqueezy.com/features/paypal-subscriptions",
          },
          {
            label: "Usage-based Billing",
            href: "https://www.lemonsqueezy.com/features/usage-based-billing",
          },
          {
            label: "Customer Portal",
            href: "https://www.lemonsqueezy.com/features/customer-portal",
          },
          {
            label: "Discount Codes",
            href: "https://www.lemonsqueezy.com/marketing/discount-codes",
          },
          {
            label: "Lead Magnets",
            href: "https://www.lemonsqueezy.com/marketing/lead-magnets",
          },
          {
            label: "PWYW Pricing",
            href: "https://www.lemonsqueezy.com/marketing/pay-what-you-want",
          },
          {
            label: "Roadmap",
            href: "https://www.lemonsqueezy.com/roadmap",
          },
          {
            label: "Changelog",
            href: "https://www.lemonsqueezy.com/changelog",
          },
          {
            label: "Suggest Features",
            href: "https://www.lemonsqueezy.com/suggest-feature",
          },
        ],
      },
    ],
  },

  // third col (Platform)
  {
    children: [
      {
        label: "Platform",
        children: [
          {
            label: "Merchant of Record",
            href: "https://www.lemonsqueezy.com/reporting/merchant-of-record",
          },
          {
            label: "Subscriptions",
            href: "https://www.lemonsqueezy.com/ecommerce/subscriptions",
          },
          {
            label: "Payments",
            href: "https://www.lemonsqueezy.com/ecommerce/payments",
          },
          {
            label: "Online Storefront",
            href: "https://www.lemonsqueezy.com/ecommerce/online-stores",
          },
          {
            label: "Digital Products",
            href: "https://www.lemonsqueezy.com/ecommerce/digital-products",
          },
          {
            label: "Checkout Overlays",
            href: "https://www.lemonsqueezy.com/ecommerce/checkout-overlays",
          },
          {
            label: "Hosted Checkouts",
            href: "https://www.lemonsqueezy.com/ecommerce/hosted-checkouts",
          },
          {
            label: "Fraud Prevention",
            href: "https://www.lemonsqueezy.com/reporting/fraud-prevention",
          },
          {
            label: "Customer Management",
            href: "https://www.lemonsqueezy.com/reporting/customer-management",
          },
        ],
      },
    ],
  },

  // fourth col (Company)
  {
    label: "Company",
    children: [
      {
        label: "About",
        href: "https://www.lemonsqueezy.com/about",
      },
      {
        label: "Pricing",
        href: "https://www.lemonsqueezy.com/pricing",
      },
      {
        label: "Case Studies",
        href: "https://www.lemonsqueezy.com/case-studies",
      },
      {
        label: "Wall of Love",
        href: "https://www.lemonsqueezy.com/wall-of-love",
      },
      {
        label: "Blog",
        href: "https://www.lemonsqueezy.com/blog",
      },
      {
        label: "Brand Assets",
        href: "https://www.lemonsqueezy.com/brand",
      },
      {
        label: "Migration Offer",
        href: "https://www.lemonsqueezy.com/migration-offer",
      },
      {
        label: "@lmsqueezy",
        href: "https://twitter.com/lmsqueezy",
      },
    ],
  },
];

export const copyrightNav: FooterNav = [
  { label: "Privacy", href: "https://www.lemonsqueezy.com/privacy" },
  { label: "Terms", href: "https://www.lemonsqueezy.com/terms" },
  { label: "DPA", href: "https://www.lemonsqueezy.com/dpa" },
];
