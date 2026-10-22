import { CvSection } from "./cv-section";
export function Skills() {
  return (
    <CvSection number="02" title="Skills">
      <ul
        role="list"
        data-cv-skills
        className="cv-bullets grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"
      >
        <li>Technical Leadership &amp; People Management</li>
        <li>Coaching &amp; Career Development</li>
        <li>Cross-functional Delivery &amp; Capacity Planning</li>
        <li>Technical Strategy &amp; System Architecture</li>
        <li>AI-assisted Engineering</li>
        <li>TypeScript &amp; Node.js</li>
        <li>React &amp; Next.js</li>
        <li>API Design &amp; Integration</li>
        <li>CI/CD &amp; Engineering Quality</li>
        <li>Design Systems &amp; Accessibility (WCAG)</li>
      </ul>
    </CvSection>
  );
}
