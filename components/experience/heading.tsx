import { ReactNode } from "react";

export function ExperienceHeading({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
