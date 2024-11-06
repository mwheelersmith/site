import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { Skills } from "@/components/skills";

import { ExperienceSection } from "@/components/experience/section";
import { ExperienceHeading } from "@/components/experience/heading";
import { ExperienceTitle } from "@/components/experience/title";
import { ExperienceDetails } from "@/components/experience/details";
import { ExperienceContributions } from "@/components/experience/contributions";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col gap-8 p-8 font-[family-name:var(--font-geist-sans)] sm:p-16 lg:max-w-[1024px]">
      <Header />

      <Summary />

      <Skills />

      {/* UI Engineering Lead at Cisco */}
      <ExperienceSection>
        <ExperienceHeading>
          <ExperienceTitle>UI Engineering Lead</ExperienceTitle>
          <ExperienceDetails
            company="Cisco"
            serviceDates="May 23 - Dec 24"
            serviceLength="1 yr 8 mos"
          />
        </ExperienceHeading>

        <p>
          Responsible for architecting and building a multi-channel messaging
          application for the Webex CPaaS suite. I led a team of five
          experienced UI engineers, serving as both a senior engineer within the
          team and the primary liaison for product managers, designers,
          directors, and other key stakeholders.
        </p>

        <p>
          I selected the tech stack (Next.js and Tailwind) based on business
          requirements, presenting its strategic advantages to senior
          management. I also designed development processes and protocols
          tailored to the team&rsquo;s feedback and experiences, ensuring a
          productive and adaptable workflow that adhered to Cisco&rsquo;s
          stringent enterprise security policies.
        </p>

        <ExperienceContributions
          contributions={[
            "Designed and implemented a user authentication system in Next.js, seamlessly integrating with a centralised Webex OAuth service.",
            "Developed a UI component library for Webex, built on Mantine and customized for consistency, accessibility, and usability across teams and platforms.",
            "Engineered an SMS campaign tool with a custom message composer that supports merge fields, short links, and WhatsApp formatting for enhanced communication.",
          ]}
        />
      </ExperienceSection>
    </main>
  );
}
