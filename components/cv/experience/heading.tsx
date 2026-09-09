import { ReactNode } from "react";

export function ExperienceHeading({ children }: { children: ReactNode }) {
  return <div className="cv-role-heading flex flex-col">{children}</div>;
}
