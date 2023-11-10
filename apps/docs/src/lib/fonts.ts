import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const displayFont = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../../public/fonts/circular-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/circular-bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});
