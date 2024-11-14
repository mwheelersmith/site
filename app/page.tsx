import Image from "next/image";

import { Hello } from "@/components/home/hello";
import { LinksList } from "@/components/links-list";
import { LinksListItem } from "@/components/links-list-item";

export default function Home() {
  return (
    <main className="mx-2 flex flex-col md:mx-auto md:w-[640px]">
      <div className="flex flex-col gap-16 overflow-hidden rounded-xl border-zinc-200 pb-8 md:border dark:border-zinc-800">
        <Image
          className="self-center rounded-xl md:rounded-none"
          src="/miles-banner.jpg"
          width={640}
          height={427}
          alt="Miles smiling by a sunlit swimming pool."
        />

        <div className="flex flex-col gap-16 px-8 sm:px-16">
          <Hello />

          <LinksList>
            <LinksListItem href="https://github.com/mwheelersmith">
              GitHub
            </LinksListItem>
            <LinksListItem href="https://www.linkedin.com/in/mwheelersmith">
              LinkedIn
            </LinksListItem>
            <LinksListItem href="https://x.com/mwheelersmith">X</LinksListItem>
            <LinksListItem href="https://cal.com/mwheelersmith">
              Schedule a Call
            </LinksListItem>
          </LinksList>
        </div>
      </div>
    </main>
  );
}
