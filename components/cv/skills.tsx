import { CvSection } from "./cv-section";
export function Skills() {
  return (
    <CvSection number="02" title="Skills">
      <ul
        role="list"
        data-cv-skills
        className="cv-bullets grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"
      >
        <li>Technical Leadership</li>
        <li>System Architecture</li>
        <li>TypeScript</li>
        <li>React/Next.js/Node.js</li>
        <li>Turborepo</li>
        <li>Accessibility (WCAG)</li>
        <li>API Design &amp; Integration</li>
        <li>CI/CD</li>
        <li>Design Systems &amp; Tailwind</li>
        <li>Agile Delivery &amp; Team Mentoring</li>
      </ul>
    </CvSection>
  );
}
