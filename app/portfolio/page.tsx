import { TypographyH1 } from "@/components/ui/typography-h1";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="mx-2 flex flex-col md:mx-auto lg:w-[1024px]">
      <div className="flex flex-col gap-8 overflow-hidden rounded-xl border-zinc-200 p-8 md:border dark:border-zinc-800">
        <TypographyH1 classname="flex-none">Portfolio</TypographyH1>
        <p>
          Take a look at some simple UI components I&rsquo;ve been working on,
          showcasing my skills in front-end development and design. You can
          explore the source code on GitHub and view the designs in Figma.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900">
            <h2 className="mb-4 text-lg font-medium">The Pizza Wheeler</h2>
            <p>A simple pizza ordering system.</p>
            <Link href="#" className="absolute left-0 top-0 h-full w-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
