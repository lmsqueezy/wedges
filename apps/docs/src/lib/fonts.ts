import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const displayFont = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../../public/fonts/circular-book.woff2",
      weight: "400",
      style: "normal",
    },
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

export const sansFont = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../public/fonts/inter-roman.var.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-italic.var.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
});

export const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
