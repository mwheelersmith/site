"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Hand, FileUser } from "lucide-react";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-violet-100 dark:hover:bg-violet-200 dark:hover:text-zinc-950",
          pathname === "/"
            ? "bg-violet-800 text-white hover:bg-violet-900 dark:hover:bg-violet-900 dark:hover:text-white"
            : "",
        )}
      >
        <Hand size={16} />
        Hello
      </Link>
      <Link
        href="/resume"
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors hover:bg-violet-100 dark:hover:bg-violet-200 dark:hover:text-zinc-950",
          pathname === "/resume"
            ? "bg-violet-800 text-white hover:bg-violet-900 dark:hover:bg-violet-900 dark:hover:text-white"
            : "",
        )}
      >
        <FileUser size={16} />
        Resume
      </Link>
    </>
  );
}
