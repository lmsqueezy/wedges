import type { Metadata } from "next";

import { siteConfig } from "@/config/siteConfig";
import { displayFont, monoFont, sansFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer/Footer";
import { Providers } from "@/components/Providers";
import { Sidebar } from "@/components/Sidebar";

import "@/styles/globals.css";

import Script from "next/script";

import Fathom from "@/components/Fathom";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://lemonsqueezy.com/"),
  title: "Wedges Docs",
  description: siteConfig.siteDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body
        className={cn(
          "min-h-screen-dvh font-sans antialiased",
          displayFont.variable,
          monoFont.variable,
          sansFont.variable
        )}
      >
        {/* Analytics */}
        <Fathom />
        <Script src="/wedges/docs/twitter-conversion.js" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10985746469" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-10985746469');
        `}
        </Script>

        <div className="min-h-screen-dvh flex flex-col">
          <Providers>
            <Header />

            <div className="container relative flex flex-1 flex-col items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-16">
              <Sidebar />

              <main className="mx-auto mt-16 flex w-full min-w-0 flex-col md:h-full">
                {children}
              </main>
            </div>
          </Providers>

          <Footer />
        </div>
      </body>
    </html>
  );
}
