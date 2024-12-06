import { Header } from "@/components/resume/header";
import { Summary } from "@/components/resume/summary";
import { Skills } from "@/components/resume/skills";

import { Experience } from "@/components/resume/experience/experience";
import { ExperienceSection } from "@/components/resume/experience/section";
import { ExperienceHeading } from "@/components/resume/experience/heading";
import { ExperienceTitle } from "@/components/resume/experience/title";
import { ExperienceDetails } from "@/components/resume/experience/details";
import { ExperienceContributions } from "@/components/resume/experience/contributions";
import { ExperienceContributionsItem } from "@/components/resume/experience/contributions-item";

import { Education } from "@/components/resume/education";

export default function Resume() {
  return (
    <main className="mx-auto mb-8 flex flex-col gap-8 rounded-lg bg-white p-8 sm:p-16 lg:max-w-[1024px] lg:shadow-md dark:bg-zinc-900 dark:shadow-none">
      <Header />

      <Summary />

      <Skills />

      <Experience>
        <ExperienceSection>
          {/* Lead Front-End Engineer at Cisco */}
          <ExperienceHeading>
            <ExperienceTitle>Lead Front-End Engineer</ExperienceTitle>
            <ExperienceDetails
              company="Cisco"
              serviceDates="May 23 - Present"
              serviceLength="1 yr 7 mos"
            />
          </ExperienceHeading>

          <p>
            Responsible for architecting and building a multi-channel messaging
            application for the Webex CPaaS suite. I recruited and led a team of
            five skilled UI engineers, contributing as a senior engineer and
            serving as the primary liaison for product managers, designers,
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

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Designed and implemented a user authentication system in Next.js,
              seamlessly integrating with a centralised Webex OAuth service.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Developed a UI component library for Webex, built on Mantine and
              customised for consistency, accessibility, and usability across
              teams and platforms.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Engineered an SMS campaign tool with a custom message composer
              that supports merge fields, short links, and WhatsApp formatting
              for enhanced communication.
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Senior Front-End Engineer at Cisco */}
          <ExperienceHeading>
            <ExperienceTitle>Senior Front-End Engineer</ExperienceTitle>
            <ExperienceDetails
              company="Cisco"
              serviceDates="Aug 21 - May 23"
              serviceLength="1 yr 10 mos"
            />
          </ExperienceHeading>

          <p>
            I joined Cisco in 2021 through the acquisition of IMImobile,
            Textlocal&rsquo;s parent company. Initially, my role centred on
            integrating Textlocal&rsquo;s platform into the Cisco Webex Cloud
            suite, aligning with Cisco&rsquo;s stringent security and procedural
            standards.
          </p>

          <p>
            Shortly after, Cisco embarked on a full rebuild of Textlocal as a
            new Webex product, transforming it from an SMS platform to a
            comprehensive multi-channel solution. At this stage, I was promoted
            to Lead Front-End Engineer to oversee its development and successful
            delivery.
          </p>
        </ExperienceSection>

        <ExperienceSection>
          {/* Lead UX/Front-End Engineer at Textlocal */}
          <ExperienceHeading>
            <ExperienceTitle>Lead UX/Front-End Engineer</ExperienceTitle>
            <ExperienceDetails
              company="Textlocal"
              serviceDates="Sep 16 - Aug 21"
              serviceLength="5 yrs"
            />
          </ExperienceHeading>

          <p>
            Led a small front-end team for an award-winning SMS platform,
            overseeing the redesign and implementation of the user interface to
            align with modern UX best practices, enhancing usability and visual
            coherence. Worked closely with back-end engineers to design APIs
            that met stakeholder business needs and contributed to implementing
            a new SMS engine powered by WebSockets to enable real-time
            messaging.
          </p>

          <p>
            Recruited and mentored a new front-end developer, providing hands-on
            support and training to strengthen the team&rsquo;s capabilities and
            foster growth.
          </p>
        </ExperienceSection>

        <ExperienceSection>
          {/* Full-Stack Engineer at Textlocal */}
          <ExperienceHeading>
            <ExperienceTitle>Full-Stack Engineer</ExperienceTitle>
            <ExperienceDetails
              company="Textlocal"
              serviceDates="Jan 12 - Sep 16"
              serviceLength="4 yrs 9 mos"
            />
          </ExperienceHeading>

          <p>
            Designed and developed web services to meet both internal and
            external requirements, while providing technical support to a large,
            diverse customer base. Working in a small team required flexibility
            across the full stack—from UX design through to front-end and
            back-end development—implementing new features and platform
            improvements for an audience of over 160,000 multinational users.
          </p>

          <p>
            Co-led the development and integration of two new products,
            including a ticketing tool and a survey solution for businesses and
            individuals, each closely integrated with the core SMS platform. The
            ticketing tool earned two prestigious industry awards, outperforming
            entries from major brands such as John Lewis and Audi.
          </p>
        </ExperienceSection>

        <ExperienceSection>
          {/* Web Developer at Bluelinemedia */}
          <ExperienceHeading>
            <ExperienceTitle>Web Developer</ExperienceTitle>
            <ExperienceDetails
              company="Bluelinemedia"
              serviceDates="Nov 09 - Jan 12"
              serviceLength="2 yrs 3 mos"
            />
          </ExperienceHeading>

          <p>
            As a Web Developer at a small agency, I developed a wide range of
            websites for various clients, from simple brochure sites to complex
            e-commerce and CMS-driven platforms. Gained both front-end and
            back-end experience, and frequently managed client relationships,
            ensuring their needs were met throughout the website development
            process.
          </p>
        </ExperienceSection>
      </Experience>

      <Education />
    </main>
  );
}
