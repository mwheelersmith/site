import Link from "next/link";

import { TypographyH1 } from "@/components/ui/typography-h1";
import { ChevronRight } from "lucide-react";

export function Hello() {
  return (
    <div className="flex flex-col gap-8">
      <TypographyH1 classname="flex-none">Hello 👋</TypographyH1>
      <div className="flex flex-col gap-4">
        <p>
          I&rsquo;m Miles, a UI Engineering Lead from the UK with a passion for
          building intuitive, clean, and accessible web interfaces.
        </p>

        <div>
          <Link
            href="/resume"
            className="group inline-flex items-center gap-1 text-indigo-800 hover:underline hover:underline-offset-4 dark:text-indigo-300"
          >
            Read my resume{" "}
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
