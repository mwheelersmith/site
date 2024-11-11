import Image from "next/image";

import { Hello } from "@/components/home/hello";
import { LinksList } from "@/components/links-list";
import { LinksListItem } from "@/components/links-list-item";

export default function Home() {
  return (
    <main className="mx-auto mt-32 flex w-[640px] flex-col">
      <div className="flex flex-col gap-16 rounded-xl border border-zinc-200 p-16 pb-8">
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
