import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import { NavLinks } from "@/components/nav-links";
import ThemeSwitcher from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "Miles Wheeler-Smith | Lead Developer",
  description:
    "Lead Developer with 15+ years of experience building scalable, user-centric web applications. Expert in TypeScript, React, Next.js, and accessible, high-performance UI design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 ${GeistSans.variable} font-sans antialiased selection:bg-violet-100 dark:selection:bg-violet-800`}
      >
        <ThemeProvider attribute="class">
          <ThemeSwitcher />

          <nav className="my-8 flex items-center justify-center gap-4">
            <NavLinks />
          </nav>

          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
