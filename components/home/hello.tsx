import Link from "next/link";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import { IdentityHeading } from "@/components/ui/identity-heading";
import { EmailReveal } from "@/components/email-reveal";

export function Hello() {
  return (
    <div className="flex min-w-0 flex-col items-start gap-8 lg:gap-10">
      <p className="text-muted font-mono text-xs tracking-[0.16em] uppercase sm:text-sm">
        Lead Developer / Worcester, UK
      </p>
      <IdentityHeading />
      <p className="max-w-[46ch] font-mono text-lg leading-relaxed lg:text-xl">
        I build intuitive, accessible web applications and lead teams that care
        about thoughtful engineering.
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
        <Link
          href="/cv"
          className="group bg-accent text-on-accent hover:bg-accent-hover inline-flex items-center gap-3 px-6 py-4 font-mono text-sm font-medium tracking-wide transition-colors motion-reduce:transition-none"
        >
          View CV
          <AnimatedArrow size={18} />
        </Link>
        <EmailReveal />
      </div>
    </div>
  );
}
