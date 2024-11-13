import { ReactNode } from "react";

import { ChevronRight } from "lucide-react";

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
      className="group inline-flex items-center gap-1 text-violet-800 decoration-2 hover:text-violet-900 hover:underline hover:underline-offset-8 dark:text-violet-300 dark:hover:text-violet-400"
    >
      {children}
      <ChevronRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}
