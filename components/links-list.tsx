import { ReactNode } from "react";

export function LinksList({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between gap-8 border-t border-t-zinc-200 px-8 pt-8">
      {children}
    </div>
  );
}
