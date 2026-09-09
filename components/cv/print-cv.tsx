"use client";

import { AnimatedArrow } from "@/components/ui/animated-arrow";
export function PrintCv() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group border-border bg-surface text-foreground hover:border-accent hover:text-accent inline-flex min-h-11 items-center justify-center gap-3 border px-5 py-3 font-mono text-sm transition-colors duration-200 motion-reduce:transition-none print:hidden"
    >
      Print CV
      <AnimatedArrow />
    </button>
  );
}
