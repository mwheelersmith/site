import { ReactNode } from "react";
export function LinksList({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 py-7">
      {children}
    </div>
  );
}
