import { Briefcase, FileJson, Inbox, Building2, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-8 font-[family-name:var(--font-geist-sans)] sm:p-16 lg:flex-row lg:gap-20">
      <aside className="flex flex-none flex-col gap-8 lg:w-80">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium">Miles Wheeler-Smith</h1>

          <a
            className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4"
            href="mailto:miles@mileswheelersmith.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Inbox size={16} />
            miles@mileswheelersmith.com
          </a>

          <div className="flex gap-4">
            <a
              className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/mwheelersmith/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Briefcase size={16} /> LinkedIn
            </a>
            <a
              className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4"
              href="https://github.com/mwheelersmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileJson size={16} /> GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p>
            Hi, I&apos;m a front-end engineer, software architect, and team
            lead.
          </p>
          <p>
            I began my journey in web development over 15 years ago as a
            full-stack PHP developer, and have since evolved into a specialised
            UI engineering leader.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Skills</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-4">
            <li className="font-medium">TypeScript</li>
            <li className="font-medium">React</li>
            <li className="font-medium">Next.js</li>
            <li className="font-medium">Node.js</li>
            <li className="font-medium">CSS</li>
            <li className="font-medium">Tailwind</li>
            <li className="font-medium">RESTful</li>
            <li className="font-medium">Figma</li>
            <li className="font-medium">Accessibility</li>
          </ul>
        </div>
      </aside>

      <main className="flex flex-col gap-6 lg:max-w-[768px]">
        <h2 className="w-full border-b border-gray-200 pb-2 text-xl font-medium">
          Experience
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">UI Engineering Lead</h3>
            <p className="flex items-center gap-2">
              <Building2 size={16} />
              Cisco
            </p>
            <p className="flex items-center gap-2">
              <Calendar size={16} />
              May 23 - Dec 24 <span>&bull;</span> 1 yr 8 mos
            </p>
          </div>

          <p>
            Responsible for architecting and building a multi-channel messaging
            application for the Webex CPaaS suite. I led a team of five
            experienced UI engineers, serving as both a senior engineer within
            the team and the primary liaison for product managers, designers,
            directors, and other key stakeholders.
          </p>

          <p>
            I selected the tech stack (Next.js and Tailwind) based on business
            requirements, presenting its strategic advantages to senior
            management. I also designed development processes and protocols
            tailored to the team&apos;s feedback and experiences, ensuring a
            productive and adaptable workflow that adhered to Cisco&apos;s
            stringent enterprise security policies.
          </p>

          <div className="flex flex-col gap-4">
            <p className="font-medium">Key Contributions:</p>
            <ol className="flex list-inside list-disc flex-col gap-4">
              <li>
                Designed and implemented a user authentication system in
                Next.js, seamlessly integrating with a centralised Webex OAuth
                service.
              </li>
              <li>
                Developed a UI component library for Webex, built on Mantine and
                customized for consistency, accessibility, and usability across
                teams and platforms.
              </li>
              <li>
                Engineered an SMS campaign tool with a custom message composer
                that supports merge fields, short links, and WhatsApp formatting
                for enhanced communication.
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
