import { CvSection } from "./cv-section";
export function Summary() {
  return (
    <CvSection number="01" title="Profile">
      <div className="flex flex-col gap-6">
        <p className="max-w-[72ch] leading-relaxed">
          I&rsquo;m a Lead Developer with 15+ years building scalable,
          user-centric web applications. Originally a full-stack PHP developer,
          I later specialised in front-end engineering before returning to
          full-stack leadership with a modern TypeScript stack. I now guide
          teams through architecture, delivery and quality to ship reliable
          products with clarity and confidence.
        </p>
      </div>
    </CvSection>
  );
}
