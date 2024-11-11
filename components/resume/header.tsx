import { Inbox, Briefcase, FileJson } from "lucide-react";
import { TypographyH1 } from "@/components/ui/typography-h1";

export function Header() {
  return (
    <div className="flex flex-col gap-2 border-b border-zinc-200 pb-8 dark:border-zinc-600">
      <TypographyH1>Miles Wheeler-Smith</TypographyH1>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <a
          className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4 dark:text-indigo-300"
          href="mailto:miles@mileswheelersmith.com"
        >
          <Inbox size={16} className="text-black dark:text-zinc-50" />
          <span>miles@mileswheelersmith.com</span>
        </a>
        <a
          className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4 dark:text-indigo-300"
          href="https://www.linkedin.com/in/mwheelersmith/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Briefcase size={16} className="text-black dark:text-zinc-50" />
          <span>LinkedIn</span>
        </a>
        <a
          className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4 dark:text-indigo-300"
          href="https://github.com/mwheelersmith"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileJson size={16} className="text-black dark:text-zinc-50" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
