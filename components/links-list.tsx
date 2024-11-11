import { ReactNode } from "react";

export function LinksList({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between gap-8 border-t border-t-zinc-200 pt-8 md:px-8 dark:border-zinc-800">
      {children}
    </div>
  );
}
