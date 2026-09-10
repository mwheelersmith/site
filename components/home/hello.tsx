import Link from "next/link";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import { IdentityIntro } from "@/components/ui/identity-intro";
import { EmailReveal } from "@/components/email-reveal";

export function Hello() {
  return (
    <div className="flex min-w-0 flex-col items-start gap-8 lg:gap-10">
      <IdentityIntro label="Lead Developer / Worcester, UK" />
      <p className="max-w-[46ch] font-mono text-lg leading-relaxed lg:text-xl">
        I build intuitive, accessible web applications and lead teams that care
        about thoughtful engineering.
      </p>
      <div className="flex w-full min-w-0 flex-col items-start gap-x-8 gap-y-5 sm:flex-row sm:flex-wrap sm:items-center">
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
