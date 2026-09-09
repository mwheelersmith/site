"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { TooltipButton } from "@/components/ui/tooltip-button";

export function BackgroundMotion() {
  const [paused, setPaused] = useState(false);
  const label = paused ? "Resume background motion" : "Pause background motion";

  useEffect(() => {
    const body = document.body;
    body.dataset.texturePaused = String(paused);
    return () => {
      delete body.dataset.texturePaused;
    };
  }, [paused]);

  return (
    <div className="hidden motion-reduce:hidden md:flex print:hidden">
      <TooltipButton
        type="button"
        label={label}
        onClick={() => setPaused((value) => !value)}
        className="border-border bg-surface text-foreground hover:border-accent hover:text-accent flex w-11 items-center justify-center self-stretch border transition-colors duration-200 motion-reduce:transition-none"
      >
        {paused ? (
          <Play size={16} aria-hidden="true" />
        ) : (
          <Pause size={16} aria-hidden="true" />
        )}
      </TooltipButton>
    </div>
  );
}
