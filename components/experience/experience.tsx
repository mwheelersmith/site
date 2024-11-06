import { ReactNode } from "react";

export function Experience({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className="text-xl font-medium">Experience</h2>

      <div className="flex flex-col gap-16">{children}</div>
    </>
  );
}
