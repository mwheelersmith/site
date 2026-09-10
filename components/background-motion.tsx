"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { TooltipButton } from "@/components/ui/tooltip-button";

const storageKey = "background-motion-paused";
const changeEvent = "background-motion-preference-change";
let fallbackPaused = false;
let storageUnavailable = false;

function getPreference() {
  if (storageUnavailable) return fallbackPaused;
  try {
    return window.localStorage.getItem(storageKey) === "true";
  } catch {
    return fallbackPaused;
  }
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, onChange);
  };
}

const getServerPreference = () => null;

export function BackgroundMotion() {
  const preference = useSyncExternalStore(
    subscribe,
    getPreference,
    getServerPreference,
  );
  // Start still until the saved preference is known, avoiding a flash of motion.
  const paused = preference ?? true;

  const toggleMotion = () => {
    fallbackPaused = !paused;
    try {
      window.localStorage.setItem(storageKey, String(fallbackPaused));
    } catch {
      // The control still works for this visit when storage is unavailable.
      storageUnavailable = true;
    }
    window.dispatchEvent(new Event(changeEvent));
  };
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
        onClick={toggleMotion}
        disabled={preference === null}
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
