import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "SciPrep — Science reasoning, made visible",
  description:
    "A reasoning-first learning companion for GAMSAT Biological and Physical Sciences.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}

