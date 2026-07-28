import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import "./learner.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  applicationName: "SciPrep",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SciPrep",
  },
  manifest: "/manifest.webmanifest",
  title: "SciPrep — Science reasoning, made visible",
  description:
    "A structured chemistry and physics foundation course for non-science learners.",
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
