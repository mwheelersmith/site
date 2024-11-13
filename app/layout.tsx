import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import { NavLinks } from "@/components/nav-links";

export const metadata: Metadata = {
  title: "Miles Wheeler-Smith | UI Engineering Leader",
  description:
    "Miles is a seasoned front-end lead with over 15 years of experience developing SaaS applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 ${GeistSans.variable} font-sans antialiased selection:bg-violet-100 dark:selection:bg-violet-800`}
      >
        <nav className="my-8 flex items-center justify-center gap-4">
          <NavLinks />
        </nav>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
