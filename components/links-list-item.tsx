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
      className="group inline-flex items-center gap-1 text-indigo-800 hover:underline hover:underline-offset-4 dark:text-indigo-300"
    >
      {children}
      <ChevronRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}
