import { ReactNode } from "react";

export function ExperienceTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="border-b border-zinc-200 pb-2 text-xl font-medium dark:border-zinc-600">
      {children}
    </h3>
  );
}
