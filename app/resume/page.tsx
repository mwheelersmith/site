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
            <ExperienceDetails
              company="Cisco"
              serviceDates="May 2023 - Dec 2024"
              serviceLength="1 yr 8 mos"
            />
            <ExperienceTitle>Lead Front-End Engineer</ExperienceTitle>
          </ExperienceHeading>

          <p>
            Architected and built a multi-channel messaging application for the
            Webex suite. Led a team of five front-end engineers while
            contributing as a senior engineer and collaborating with product
            managers, designers, and directors. Reported to the Director of
            Software Engineering, ensuring strategic alignment and fostering
            cross-functional collaboration.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Evaluated and selected a tech stack based on business needs,
              presenting its strategic advantages to senior management.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Designed development processes that incorporated team feedback and
              adhered to Cisco&rsquo;s security policies, creating a productive
              and adaptable workflow.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Implemented a Next.js user authentication system, integrating
              seamlessly with a centralised OAuth service.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Developed a UI component library for Webex, built on Mantine and
              customised for consistency, accessibility and usability across
              teams and platforms.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Engineered an SMS campaign tool featuring a custom message
              composer with support for merge fields, short links and WhatsApp
              formatting, enhancing communication capabilities.
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Senior Front-End Engineer at Cisco */}
          <ExperienceHeading>
            <ExperienceDetails
              company="Cisco"
              serviceDates="Aug 2021 - May 2023"
              serviceLength="1 yr 10 mos"
            />
            <ExperienceTitle>Senior Front-End Engineer</ExperienceTitle>
          </ExperienceHeading>

          <p>
            Played a key role in the full rebuild of a legacy product,
            transforming it from an SMS platform into a comprehensive
            multi-channel Webex solution. Reported to the Software Engineering
            Lead and was promoted to Lead Front-End Engineer to oversee its
            continued development and successful delivery.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Refactored the tech stack, transitioning from Java and FreeMarker
              to a streamlined React-based front-end.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Facilitated the merger of two teams to work collaboratively in a
              new capacity, establishing a balanced front-end and back-end
              divide.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Shaped the product roadmap by leveraging industry expertise,
              influencing product manager requirements and inspiring design
              solutions.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Introduced agile methodologies tailored to the needs of a new team
              and company structure, improving development efficiency.
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Lead UX/Front-End Engineer at Textlocal */}
          <ExperienceHeading>
            <ExperienceDetails
              company="Textlocal"
              serviceDates="Sep 2016 - Aug 2021"
              serviceLength="5 yrs"
            />
            <ExperienceTitle>Lead UX/Front-End Engineer</ExperienceTitle>
          </ExperienceHeading>

          <p>
            Led a small front-end team, overseeing and contributing to the
            redesign and engineering of the user interface. Focused on aligning
            the design with modern UX best practices to enhance usability,
            visual coherence, and overall user experience. Reported to the
            Development Manager throughout the project.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Recruited and mentored a new front-end developer, providing
              hands-on support and training to strengthen the team&rsquo;s
              capabilities and foster growth.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Worked closely with back-end engineers to design APIs that met
              business needs.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Designed and built a new SMS engine powered by WebSockets to
              enable real-time messaging.
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Full-Stack Engineer at Textlocal */}
          <ExperienceHeading>
            <ExperienceDetails
              company="Textlocal"
              serviceDates="Jan 2012 - Sep 2016"
              serviceLength="4 yrs 9 mos"
            />
            <ExperienceTitle>Full-Stack Engineer</ExperienceTitle>
          </ExperienceHeading>

          <p>
            Worked in a small, cross-functional team spanning UI design,
            front-end and back-end development, delivering new features and
            platform improvements for over 160,000 multinational users. Reported
            directly to the business founder.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Co-led the development and integration of two new products: a
              ticketing tool and a survey solution for businesses and
              individuals, both seamlessly integrated with the core SMS
              platform.
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Earned two industry awards for product advancements, outperforming
              entries from major brands such as Audi and John Lewis.
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Web Developer at Bluelinemedia */}
          <ExperienceHeading>
            <ExperienceDetails
              company="Bluelinemedia"
              serviceDates="Nov 2009 - Jan 2012"
              serviceLength="2 yrs 3 mos"
            />
            <ExperienceTitle>Web Developer</ExperienceTitle>
          </ExperienceHeading>

          <p>
            Developed a diverse range of websites for clients at a small web
            agency, including brochure sites, e-commerce platforms and
            CMS-driven solutions. Gained hands-on experience in front-end and
            back-end development while managing client relationships to ensure
            their needs were met throughout the process.
          </p>
        </ExperienceSection>
      </Experience>

      <Education />
    </main>
  );
}
