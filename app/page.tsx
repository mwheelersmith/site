import Image from "next/image";
import { Hello } from "@/components/home/hello";
import { LinksList } from "@/components/links-list";
import { LinksListItem } from "@/components/links-list-item";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="home-page mb-8 w-full">
      <div className="grid items-start gap-12 py-12 md:grid-cols-[minmax(0,1fr)_minmax(220px,30%)] md:gap-10 lg:gap-12 lg:py-16">
        <Hello />
        <figure className="w-full max-w-[340px] md:self-center md:justify-self-end">
          <div className="portrait-frame relative">
            <div className="home-portrait border-border relative aspect-[3/4] overflow-hidden border">
              <Image
                className="object-cover object-[50%_35%]"
                src="/miles-avatar.webp"
                fill
                sizes="(min-width: 1280px) 340px, (min-width: 768px) 30vw, (min-width: 380px) 340px, calc(100vw - 2rem)"
                quality={90}
                alt="Professional portrait of Miles smiling."
                loading="eager"
              />
            </div>
          </div>
        </figure>
      </div>
      <section
        aria-label="Career overview"
        className="border-border grid gap-6 border-y py-7 font-mono text-sm md:grid-cols-[0.6fr_1fr_1.2fr] md:gap-8"
      >
        <h2 className="text-muted text-xs tracking-[0.16em] uppercase">
          Experience
        </h2>
        <div className="border-border space-y-2 md:border-l md:pl-8">
          <p>Travel Chapter</p>
          <p className="text-muted">Lead Developer · 2025–present</p>
        </div>
        <div className="border-border space-y-2 md:border-l md:pl-8">
          <p>Previously at Cisco &amp; Textlocal</p>
          <p className="text-muted">Building for the web since 2009</p>
        </div>
      </section>
      <LinksList>
        <LinksListItem href="https://www.linkedin.com/in/mwheelersmith">
          LinkedIn
        </LinksListItem>
        <LinksListItem href="https://github.com/mwheelersmith">
          GitHub
        </LinksListItem>
        <LinksListItem href="https://cal.com/mwheelersmith">
          Schedule a Call
        </LinksListItem>
      </LinksList>
    </main>
  );
}
