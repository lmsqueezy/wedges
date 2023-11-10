import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { SiteHeader } from "@/components/SiteHeader";
import { displayFont, monoFont, sansFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Wedges Docs",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          "min-h-screen-dvh font-sans antialiased [font-feature-settings:'ss01']",
          sansFont.variable,
          displayFont.variable,
          monoFont.variable
        )}
      >
        <div className="min-h-screen-dvh flex flex-col">
          <SiteHeader />

          <div className="container flex flex-1 flex-col items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
            <Sidebar />
            <main className="mt-16 flex w-full grow flex-col md:h-full">{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
