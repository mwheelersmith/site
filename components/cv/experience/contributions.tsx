import { ReactNode } from "react";

export function ExperienceContributions({ children }: { children: ReactNode }) {
  return (
    <div className="cv-contributions flex max-w-[72ch] flex-col gap-4 leading-relaxed">
      <p className="contributions-label text-muted font-mono text-xs tracking-[0.12em] uppercase">
        Key contributions
      </p>
      <ul role="list" className="cv-bullets flex flex-col gap-4">
        {children}
      </ul>
    </div>
  );
}
