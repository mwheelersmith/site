import { ReactNode } from "react";

export function ExperienceSection({ children }: { children: ReactNode }) {
  return (
    <div className="cv-role border-border flex flex-col gap-8 border-t pt-8 first:border-t-0 first:pt-0 [&>p]:max-w-[72ch] [&>p]:leading-relaxed">
      {children}
    </div>
  );
}
