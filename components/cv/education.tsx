import { CvSection } from "./cv-section";
export function Education() {
  return (
    <CvSection number="04" title="Education">
      <div className="cv-education flex flex-col gap-3">
        <h3 className="cv-entry-title text-xl font-medium">
          National Diploma for IT Practitioners
        </h3>
        <p className="cv-entry-details text-muted font-mono text-sm leading-relaxed">
          Worcester College of Technology
        </p>
      </div>
    </CvSection>
  );
}
