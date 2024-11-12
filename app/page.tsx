import Image from "next/image";

import { Hello } from "@/components/home/hello";
import { LinksList } from "@/components/links-list";
import { LinksListItem } from "@/components/links-list-item";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col md:mt-32 md:w-[640px]">
      <div className="flex flex-col gap-16 rounded-xl border-zinc-200 p-16 pb-8 md:border dark:border-zinc-800">
        <Image
          className="self-center rounded-full"
          src="/miles-avatar.jpg"
          width={256}
          height={256}
          alt="Miles smiling by a sunlit swimming pool."
        />

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
    </main>
  );
}
