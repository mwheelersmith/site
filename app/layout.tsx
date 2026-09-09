import Link from "next/link";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import { NavLinks } from "@/components/nav-links";
import ThemeSwitcher from "@/components/theme-switcher";
import { BackgroundMotion } from "@/components/background-motion";

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
        className={`bg-background text-foreground ${GeistSans.variable} ${GeistMono.variable} selection:bg-selection selection:text-foreground font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <a
            href="#main-content"
            className="focus:bg-surface focus:text-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-3 print:hidden"
          >
            Skip to content
          </a>
          <div className="site-container mx-auto flex min-h-svh w-[calc(100%-2rem)] max-w-[1200px] flex-col">
            <header className="border-border flex shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b py-6 print:hidden">
              <Link
                href="/"
                aria-label="Miles Wheeler-Smith, home"
                className="flex items-center gap-4 font-mono text-sm"
              >
                <span
                  className="bg-accent h-7 w-12 shrink-0 mask-[url('/mw-logo.svg')] mask-contain mask-center mask-no-repeat"
                  aria-hidden="true"
                />
                <span className="hidden lg:inline">Miles Wheeler-Smith</span>
              </Link>
              <div className="flex flex-wrap items-stretch justify-end gap-4 sm:gap-8">
                <nav
                  aria-label="Main navigation"
                  className="flex items-center gap-2 sm:gap-4"
                >
                  <NavLinks />
                </nav>
                <div className="flex shrink-0 items-stretch gap-2 self-stretch">
                  <BackgroundMotion />
                  <ThemeSwitcher />
                </div>
              </div>
            </header>

            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
