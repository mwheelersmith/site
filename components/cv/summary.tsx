import { CvSection } from "./cv-section";
export function Summary() {
  return (
    <CvSection number="01" title="Profile">
      <div className="flex flex-col gap-6">
        <p className="max-w-[72ch] leading-relaxed">
          Engineering Manager with 15+ years of software engineering experience,
          combining deep technical expertise with people leadership, coaching
          and cross-functional delivery. Experienced in building and developing
          engineering teams, shaping technical direction and delivering scalable
          web applications. Hands-on technical background spanning full-stack
          development, modern TypeScript architectures and engineering best
          practices.
        </p>
      </div>
    </CvSection>
  );
}
