import { Github, Linkedin } from "lucide-react";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import { IdentityIntro } from "@/components/ui/identity-intro";
import { EmailReveal } from "@/components/email-reveal";
import { PrintCv } from "@/components/cv/print-cv";

export function Header() {
  return (
    <div className="cv-identity flex flex-col items-start gap-6 py-12 lg:py-16">
      <IdentityIntro label="Curriculum vitae" />
      <p className="cv-role-line text-muted font-mono text-sm sm:text-base">
        Lead Developer · Worcester, UK
      </p>
      <div className="flex w-full flex-wrap items-center justify-between gap-6">
        <div className="cv-contact-details flex w-full min-w-0 flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm lg:w-auto print:w-auto">
          <div className="flex w-full min-w-0 lg:contents print:contents">
            <EmailReveal />
          </div>
          <a
            className="group editorial-link inline-flex min-h-6 items-center gap-2"
            href="https://www.linkedin.com/in/mwheelersmith/"
          >
            <Linkedin
              size={16}
              aria-hidden="true"
              className="hidden shrink-0 print:block"
            />
            <span className="print:hidden">LinkedIn</span>
            <span className="hidden print:inline">
              linkedin.com/in/mwheelersmith
            </span>
            <AnimatedArrow className="print:hidden" />
          </a>
          <a
            className="group editorial-link inline-flex min-h-6 items-center gap-2"
            href="https://github.com/mwheelersmith"
          >
            <Github
              size={16}
              aria-hidden="true"
              className="hidden shrink-0 print:block"
            />
            <span className="print:hidden">GitHub</span>
            <span className="hidden print:inline">
              github.com/mwheelersmith
            </span>
            <AnimatedArrow className="print:hidden" />
          </a>
        </div>
        <PrintCv />
      </div>
    </div>
  );
}
