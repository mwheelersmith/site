import formatWorkDuration from "@/lib/format-work-duration";

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

export const revalidate = 86400;

export default function Resume() {
  return (
    <main className="mx-auto mb-8 flex flex-col gap-8 rounded-lg bg-white p-8 sm:p-16 lg:max-w-[1024px] lg:shadow-md dark:bg-zinc-900 dark:shadow-none">
      <Header />

      <Summary />

      <Skills />

      <Experience>
        <ExperienceSection>
          {/* Lead Developer at Travel Chapter */}
          <ExperienceHeading>
            <ExperienceTitle>Lead Developer</ExperienceTitle>
            <ExperienceDetails
              company="Travel Chapter"
              location="Remote"
              serviceDates="October 2025 - Present"
              serviceLength={formatWorkDuration(new Date(2025, 9))}
            />
          </ExperienceHeading>

          <p>
            Leading the Guest Account and Acquisitions team, mentoring team
            members, delivering technical solutions, and defining architecture
            for onboarding acquisitions onto a White Label platform, while
            empowering guests to self-serve bookings.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Pioneered a new team structure across the Guest Experience Group,
              increasing squad autonomy and accelerating feature ownership
              across four product areas
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Managed a squad of six developers, streamlining onboarding and
              driving performance and goal achievement
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Worked cross-functionally with delivery managers, product owners,
              and programme leadership to align team delivery to a 6–12 month
              company roadmap, enabling onboarding of 500+ new properties,
              expanding self-service, and prioritising high-impact technical
              debt reduction
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Led a team to automate acquisition website onboarding across tens
              of sites, reducing setup time from two weeks to three days while
              significantly lowering manual effort and human error
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Supported a team member who was struggling with delivery, helping
              them grow into a reliable contributor through clear expectations,
              structured guidance, and regular coaching
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Senior Developer at Travel Chapter */}
          <ExperienceHeading>
            <ExperienceTitle>Senior Developer</ExperienceTitle>
            <ExperienceDetails
              company="Travel Chapter"
              location="Remote"
              serviceDates="May 2025 - October 2025"
              serviceLength="5 mos"
            />
          </ExperienceHeading>

          <p>
            Guided development across the Guest Experience Group, building and
            maintaining holidaycottages.co.uk and other customer-facing
            applications.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Built self-service booking tools using React Server Components and
              Server Actions, reducing call-centre load by 50+ hours per month
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Integrated three business acquisitions into the platform,
              launching them on a high-performance White Label site and adding
              240 bookings per month
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Lead Front-End Engineer at Cisco */}
          <ExperienceHeading>
            <ExperienceTitle>Lead Front-End Engineer</ExperienceTitle>
            <ExperienceDetails
              company="Cisco"
              location="Remote"
              serviceDates="May 2023 - Dec 2024"
              serviceLength="1 yr 8 mos"
            />
          </ExperienceHeading>

          <p>
            Owned front-end delivery for a flagship Webex messaging product,
            growing and leading a six-person squad reporting to the Director of
            Engineering.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Grew front-end squad from two to six engineers by leading
              recruitment, interviewing 50+ candidates, onboarding, and
              mentoring new team members
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Developed a Next.js user authentication system that
              reverse-proxied requests to the back-end, offloading JWT storage
              from the client side to enhance security and performance
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Built and drove adoption of a shared UI component library that
              standardised design, accessibility, and usability across three
              teams
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Championed and secured approval for Next.js, TypeScript, and
              Tailwind stack, enabling faster iteration and consistent design
              across product front-end
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Senior Front-End Engineer at Cisco */}
          <ExperienceHeading>
            <ExperienceTitle>Senior Front-End Engineer</ExperienceTitle>
            <ExperienceDetails
              company="Cisco"
              location="Remote"
              serviceDates="Aug 2021 - May 2023"
              serviceLength="1 yr 10 mos"
            />
          </ExperienceHeading>

          <p>
            Key contributor to the full rebuild of a legacy SMS platform into a
            multi-channel Webex solution. Promoted to Lead Front-End Engineer to
            oversee ongoing development and delivery.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Refactored the tech stack, transitioning from Java and FreeMarker
              to a streamlined React-based front-end
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Facilitated the merger of two teams to work collaboratively in a
              new capacity, establishing a balanced front-end and back-end
              divide
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Shaped the product roadmap by leveraging industry expertise,
              influencing product manager requirements and inspiring design
              solutions
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Introduced agile methodologies tailored to the needs of a new team
              and company structure, improving development efficiency by 30%
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Senior Front-End Developer at Textlocal */}
          <ExperienceHeading>
            <ExperienceTitle>Senior Front-End Developer</ExperienceTitle>
            <ExperienceDetails
              company="Textlocal"
              location="Malvern, UK"
              serviceDates="Sep 2016 - Aug 2021"
              serviceLength="5 yrs"
            />
          </ExperienceHeading>

          <p>
            Oversaw a front-end team responsible for delivery of new product
            features and enhancements to improve usability, visual coherence,
            and overall user experience.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Recruited and mentored new front-end developers, providing
              hands-on support and training to strengthen the team&rsquo;s
              capabilities and foster growth
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Worked closely with back-end engineers to design APIs that met
              business needs
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Designed and built a new SMS engine powered by WebSockets to
              enable real-time messaging
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Full-Stack Developer at Textlocal */}
          <ExperienceHeading>
            <ExperienceTitle>Full-Stack Developer</ExperienceTitle>
            <ExperienceDetails
              company="Textlocal"
              location="Malvern, UK"
              serviceDates="Jan 2012 - Sep 2016"
              serviceLength="4 yrs 9 mos"
            />
          </ExperienceHeading>

          <p>
            Worked in a small, cross-functional team spanning UI design,
            front-end and back-end development, delivering new features and
            platform improvements for over 160,000 multinational users.
          </p>

          <ExperienceContributions>
            <ExperienceContributionsItem>
              Co-led the development and integration of two new products: a
              ticketing tool and a survey solution, both seamlessly integrated
              with the core SMS platform
            </ExperienceContributionsItem>
            <ExperienceContributionsItem>
              Earned industry awards for product advancements, outperforming
              entries from major brands such as Audi and John Lewis
            </ExperienceContributionsItem>
          </ExperienceContributions>
        </ExperienceSection>

        <ExperienceSection>
          {/* Web Developer at Bluelinemedia */}
          <ExperienceHeading>
            <ExperienceTitle>Web Developer</ExperienceTitle>
            <ExperienceDetails
              company="Bluelinemedia"
              location="Cheltenham, UK"
              serviceDates="Nov 2009 - Jan 2012"
              serviceLength="2 yrs 3 mos"
            />
          </ExperienceHeading>

          <p>
            Developed a diverse range of websites for clients at a small web
            agency, including brochure sites, e-commerce platforms and
            CMS-driven solutions.
          </p>
        </ExperienceSection>
      </Experience>

      <Education />
    </main>
  );
}
