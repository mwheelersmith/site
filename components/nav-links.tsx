"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        aria-current={pathname === "/" ? "page" : undefined}
        className={cn(
          "text-foreground hover:text-accent inline-flex min-h-11 items-center border-b-2 border-transparent px-2 py-2 font-mono text-sm transition-colors motion-reduce:transition-none",
          pathname === "/" ? "border-accent text-accent" : "",
        )}
      >
        Hello
      </Link>
      <Link
        href="/cv"
        aria-current={pathname === "/cv" ? "page" : undefined}
        className={cn(
          "text-foreground hover:text-accent inline-flex min-h-11 items-center border-b-2 border-transparent px-2 py-2 font-mono text-sm transition-colors motion-reduce:transition-none",
          pathname === "/cv" ? "border-accent text-accent" : "",
        )}
      >
        CV
      </Link>
    </>
  );
}
