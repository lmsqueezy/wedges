import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lemon Lab",
  description: "Explore Wedges components and features",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex grow flex-col">
            <header className="text-surface-foreground-muted mx-auto flex w-full max-w-screen-xl items-center gap-5 px-10 pt-10 text-sm">
              <Link href="/" className="text-foreground flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 56 56" className="fill-current">
                  <path d="M36.2138 26.9603L36.2244 26.9844C36.2244 26.9844 39.9832 36.3415 40.2998 39.2261C40.6164 42.1108 38.0319 44.4492 35.2342 44.4492C32.4366 44.4492 29.8521 42.1108 30.1687 39.2261C30.4853 36.3415 34.244 26.9844 34.244 26.9844L34.2546 26.9603C34.486 26.433 34.6379 26.0867 35.2342 26.0867C35.8306 26.0867 35.9825 26.433 36.2138 26.9603Z" />
                  <path d="M21.706 26.9603L21.7166 26.9844C21.7166 26.9844 25.4754 36.3415 25.792 39.2261C26.1086 42.1108 23.5241 44.4492 20.7264 44.4492C17.9288 44.4492 15.3442 42.1108 15.6608 39.2261C15.9774 36.3415 19.7362 26.9844 19.7362 26.9844L19.7468 26.9603C19.9782 26.433 20.1301 26.0867 20.7264 26.0867C21.3227 26.0867 21.4747 26.433 21.706 26.9603Z" />
                  <path d="M12.5127 30.0905L12.5021 30.0663C12.5021 30.0663 8.74336 20.7093 8.42676 17.8247C8.11016 14.94 10.6947 12.6016 13.4924 12.6016C16.29 12.6016 18.8745 14.94 18.5579 17.8247C18.2413 20.7093 14.4826 30.0663 14.4826 30.0663L14.472 30.0905C14.2406 30.6178 14.0887 30.964 13.4924 30.964C12.896 30.964 12.7441 30.6178 12.5127 30.0905Z" />
                  <path d="M27.0205 30.0905L27.01 30.0663C27.01 30.0663 23.2512 20.7093 22.9346 17.8247C22.618 14.94 25.2025 12.6016 28.0002 12.6016C30.7978 12.6016 33.3824 14.94 33.0658 17.8247C32.7492 20.7093 28.9904 30.0663 28.9904 30.0663L28.9798 30.0905C28.7484 30.6178 28.5965 30.964 28.0002 30.964C27.4038 30.964 27.2519 30.6178 27.0205 30.0905Z" />
                  <path d="M41.5303 30.0905L41.5197 30.0663C41.5197 30.0663 37.7609 20.7093 37.4443 17.8247C37.1277 14.94 39.7123 12.6016 42.5099 12.6016C45.3076 12.6016 47.8921 14.94 47.5755 17.8247C47.2589 20.7093 43.5001 30.0663 43.5001 30.0663L43.4896 30.0905C43.2582 30.6178 43.1063 30.964 42.5099 30.964C41.9136 30.964 41.7617 30.6178 41.5303 30.0905Z" />
                </svg>

                <span>Playground</span>
              </Link>

              <nav className="ml-auto flex items-center gap-5">
                <Link className="hover:text-foreground" href="/avatar">
                  Avatar
                </Link>

                <Link className="hover:text-foreground" href="/avatar-group">
                  Avatar Group
                </Link>

                <Link className="hover:text-foreground" href="/badge">
                  Badge
                </Link>

                <Link className="hover:text-foreground" href="/tag">
                  Tag
                </Link>

                <Link className="hover:text-foreground" href="/tooltip">
                  Tooltip
                </Link>

                <Link className="hover:text-foreground" href="/colors">
                  Colors
                </Link>
              </nav>

              <span>&middot;</span>

              <ThemeToggle />
            </header>

            <div className="mx-auto flex w-full max-w-screen-lg grow flex-col px-10 pb-20 pt-24">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
