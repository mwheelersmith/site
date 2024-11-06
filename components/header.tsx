import { Inbox, Briefcase, FileJson } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-200 pb-8">
      <h1 className="text-2xl font-medium">Miles Wheeler-Smith</h1>

      <div className="flex gap-6">
        <a
          className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4"
          href="mailto:miles@mileswheelersmith.com"
        >
          <Inbox size={16} className="text-gray-500" />
          miles@mileswheelersmith.com
        </a>
        <a
          className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/mwheelersmith/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Briefcase size={16} className="text-gray-500" /> LinkedIn
        </a>
        <a
          className="flex items-center gap-2 text-indigo-800 hover:underline hover:underline-offset-4"
          href="https://github.com/mwheelersmith"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileJson size={16} className="text-gray-500" /> GitHub
        </a>
      </div>
    </div>
  );
}
