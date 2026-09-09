import { ReactNode } from "react";

export function ExperienceTitle({
  children,
  company,
}: {
  children: ReactNode;
  company: string;
}) {
  return (
    <h3 className="cv-entry-title text-xl font-semibold lg:text-2xl">
      {children} &middot; {company}
    </h3>
  );
}
