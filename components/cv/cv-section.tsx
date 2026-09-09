import type { ReactNode } from "react";

export function CvSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="cv-section" aria-labelledby={`cv-section-${number}`}>
      <h2 id={`cv-section-${number}`} className="cv-section-label">
        <span aria-hidden="true" className="cv-section-number">
          {number} /{" "}
        </span>
        {title}
      </h2>
      <div className="cv-section-content min-w-0">{children}</div>
    </section>
  );
}
