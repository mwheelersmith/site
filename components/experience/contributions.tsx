import { ReactNode } from "react";

export function ExperienceContributions({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">Key Contributions</p>
      <ol className="ms-4 flex list-outside list-disc flex-col gap-4">
        {children}
      </ol>
    </div>
  );
}
