import { ReactNode } from "react";

export function ExperienceSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-medium">Experience</h2>

      {children}
    </div>
  );
}
