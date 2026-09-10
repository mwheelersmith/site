import { IdentityHeading } from "@/components/ui/identity-heading";

export function IdentityIntro({ label }: { label: string }) {
  return (
    <div className="flex w-full min-w-0 flex-col items-start gap-8 lg:gap-10 print:block">
      <p className="text-muted min-h-8 font-mono text-xs tracking-[0.16em] uppercase sm:min-h-5 sm:text-sm print:hidden">
        {label}
      </p>
      <IdentityHeading />
    </div>
  );
}
