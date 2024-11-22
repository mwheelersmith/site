"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Hand, GalleryHorizontalEnd, FileUser } from "lucide-react";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2 font-medium hover:text-violet-800 dark:hover:text-violet-400",
          pathname === "/"
            ? "bg-violet-800 text-white shadow-lg shadow-violet-400/80 outline outline-1 outline-violet-950 hover:text-white dark:shadow-violet-600/80 dark:hover:text-white"
            : "",
        )}
      >
        <Hand size={16} />
        Hello
      </Link>
      <Link
        href="/portfolio"
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2 font-medium hover:text-violet-800 dark:hover:text-violet-400",
          pathname === "/portfolio"
            ? "bg-violet-800 text-white shadow-lg shadow-violet-400/80 outline outline-1 outline-violet-950 hover:text-white dark:shadow-violet-600/80 dark:hover:text-white"
            : "",
        )}
      >
        <GalleryHorizontalEnd size={16} />
        Portfolio
      </Link>
      <Link
        href="/resume"
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2 font-medium hover:text-violet-800 dark:hover:text-violet-400",
          pathname === "/resume"
            ? "bg-violet-800 text-white shadow-lg shadow-violet-400/80 outline outline-1 outline-violet-950 hover:text-white dark:shadow-violet-600/80 dark:hover:text-white"
            : "",
        )}
      >
        <FileUser size={16} />
        Resume
      </Link>
    </>
  );
}
