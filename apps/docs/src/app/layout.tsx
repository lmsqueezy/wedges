import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Sidebar } from "@/components/Sidebar";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/siteConfig";
import { displayFont, monoFont, sansFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Wedges Docs",
  description: siteConfig.siteDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body
        className={cn(
          "min-h-screen-dvh font-sans antialiased [font-feature-settings:'ss01']",
          sansFont.variable,
          displayFont.variable,
          monoFont.variable
        )}
      >
        <div className="min-h-screen-dvh flex flex-col">
          <Providers>
            <SiteHeader />

            <div className="container relative flex flex-1 flex-col items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-10">
              <Sidebar />

              <main className="mx-auto mt-16 flex w-full min-w-0 flex-col pb-24 md:h-full">
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
