import { ReactNode } from "react";

import { AnimatedArrow } from "@/components/ui/animated-arrow";

export function LinksListItem({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group text-foreground hover:text-accent focus-visible:text-accent inline-flex min-h-6 items-center gap-2 font-mono text-sm decoration-2 underline-offset-4 transition-colors duration-200 hover:underline focus-visible:underline motion-reduce:transition-none"
    >
      {children}
      <AnimatedArrow />
    </a>
  );
}
