import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const response = initResponse();
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const reportUri =
    "https://o4505075539902464.ingest.us.sentry.io/api/4505075559825408/security/?sentry_key=e137a5ec37cf03e1ed168b772c98c0bc";

  response.headers.set(
    "Content-Security-Policy",
    getContentSecurityPolicyHeaderValue(nonce, reportUri)
  );
  response.headers.set("Report-To", getReportToHeaderValue(reportUri));

  request.headers.set(
    "Content-Security-Policy",
    getContentSecurityPolicyHeaderValue(nonce, reportUri)
  );
  requestHeaders.set("x-nonce", nonce);

  return response;
}

function initResponse(): NextResponse {
  return NextResponse.next();
}

function getReportToHeaderValue(reportUri: string): string {
  const reportTo = {
    group: "csp",
    max_age: 10886400, // 1 day
    endpoints: [{ url: reportUri }],
  };

  return JSON.stringify(reportTo);
}

function getContentSecurityPolicyHeaderValue(nonce: string, reportUri: string): string {
  // Default CSP for Next.js
  const contentSecurityPolicyDirective = {
    "base-uri": [`'self'`],
    "default-src": [`'none'`],
    "frame-ancestors": [`'none'`],
    "font-src": [`'self'`, "data:", "fonts.gstatic.com", "fonts.googleapis.com"],
    "data:-src": [`'self'`],
    "form-action": [`'self'`],
    "frame-src": [`'self'`, "*.youtube.com"],
    "connect-src": [`'self'`, "api.management.inkeep.com"],
    "img-src": [
      `'self'`,
      "images.unsplash.com",
      "cdn.usefathom.com",
      "cdn.prod.website-files.com",
      "github.com",
      "storage.googleapis.com",
      "stripe.com",
      "avatars.githubusercontent.com",
    ],
    "manifest-src": [`'self'`],
    "object-src": [`'none'`],
    "report-uri": [reportUri], // for old browsers like Firefox
    "report-to": ["csp"], // for modern browsers like Chrome
    "script-src": [`'self'`, `'unsafe-inline'`, "cdn.usefathom.com", "cdn.prod.website-files.com"],
    "style-src": [`'self'`, `'unsafe-inline'`, "*.lemonsqueezy.com", "fonts.googleapis.com"],
  };

  if (process.env.NODE_ENV === "development") {
    // Webpack use eval() in development mode for automatic JS reloading
    contentSecurityPolicyDirective["script-src"].push(`'unsafe-eval'`);
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    contentSecurityPolicyDirective["connect-src"].push("https://vercel.live");
    contentSecurityPolicyDirective["connect-src"].push("wss://*.pusher.com");
    contentSecurityPolicyDirective["img-src"].push("https://vercel.com");
    contentSecurityPolicyDirective["font-src"].push("https://vercel.live");
    contentSecurityPolicyDirective["frame-src"].push("https://vercel.live");
    contentSecurityPolicyDirective["style-src"].push("https://vercel.live");
  }

  return Object.entries(contentSecurityPolicyDirective)
    .map(([key, value]) => `${key} ${value.join(" ")}`)
    .join("; ");
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
