import { TypographyH1 } from "@/components/ui/typography-h1";

export function Hello() {
  return (
    <div className="flex flex-col gap-8">
      <TypographyH1 classname="flex-none">Hello 👋</TypographyH1>
      <div className="flex flex-col gap-4">
        <p>
          I&rsquo;m Miles, a UI Engineering Lead from the UK with a passion for
          building intuitive, clean, and accessible web interfaces.
        </p>
      </div>
    </div>
  );
}
