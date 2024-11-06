import { ReactNode } from "react";

export function ExperienceTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-medium">{children}</h3>;
}
