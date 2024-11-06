import { ReactNode } from "react";

export function Experience({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className="text-2xl font-medium">Experience</h2>

      <div className="flex flex-col gap-16 border-b border-zinc-200 pb-8 dark:border-zinc-600">
        {children}
      </div>
    </>
  );
}
