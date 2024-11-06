import { ReactNode } from "react";

export function ExperienceSection({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-8">{children}</div>;
}
