import { CvSection } from "../cv-section";
import { ReactNode } from "react";

export function Experience({ children }: { children: ReactNode }) {
  return (
    <CvSection number="03" title="Experience">
      <div className="cv-experience flex flex-col gap-10">{children}</div>
    </CvSection>
  );
}
