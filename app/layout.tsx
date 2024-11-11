import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 ${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-100 dark:selection:bg-indigo-800`}
      >
        {children}
      </body>
    </html>
  );
}
