import type { Metadata } from "next";

import { siteConfig } from "@/config/siteConfig";
import { displayFont, monoFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Sidebar } from "@/components/Sidebar";

import "@/styles/globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://lemonsqueezy.com/wedges/docs"),
  title: "Wedges Docs",
  description: siteConfig.siteDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body
        className={cn(
          "min-h-screen-dvh font-sans antialiased [font-feature-settings:'ss01']",
          displayFont.variable,
          monoFont.variable
        )}
      >
        <div className="min-h-screen-dvh flex flex-col">
          <Providers>
            <Header />

            <div className="container relative flex flex-1 flex-col items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-10">
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
