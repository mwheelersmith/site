"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";

type TooltipButtonProps = Omit<
  ComponentProps<"button">,
  "title" | "aria-label" | "aria-describedby"
> & { label: string };

export function TooltipButton({
  label,
  children,
  ...props
}: TooltipButtonProps) {
  const id = useId();
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const open = !props.disabled && !dismissed && (hovered || focused);

  useLayoutEffect(() => {
    if (!open) return;
    const position = () => {
      const tooltip = tooltipRef.current;
      if (!tooltip) return;
      tooltip.style.marginLeft = "0px";
      const bounds = tooltip.getBoundingClientRect();
      const shift = Math.max(
        16 - bounds.left,
        Math.min(0, document.documentElement.clientWidth - 16 - bounds.right),
      );
      tooltip.style.marginLeft = `${shift}px`;
    };
    position();
    window.addEventListener("resize", position);
    return () => window.removeEventListener("resize", position);
  }, [open, label]);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDismissed(true);
    };
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);

  return (
    <span
      className="relative flex shrink-0 self-stretch"
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        setHovered(true);
        setDismissed(false);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <button
        {...props}
        aria-label={label}
        aria-describedby={open ? id : undefined}
        onFocus={(event) => {
          setFocused(event.currentTarget.matches(":focus-visible"));
          setDismissed(false);
          props.onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          props.onBlur?.(event);
        }}
      >
        {children}
      </button>
      {/* Padding bridges the gap so the tooltip remains hoverable. */}
      <span
        id={id}
        ref={tooltipRef}
        role="tooltip"
        className="absolute top-full left-1/2 z-50 w-max max-w-[min(15rem,calc(100vw-2rem))] -translate-x-1/2 pt-2 print:hidden"
        hidden={!open}
      >
        <span className="border-border bg-surface text-foreground block border px-3 py-2 font-mono text-xs leading-relaxed">
          <span
            className="bg-accent mr-2 inline-block size-1.5 align-middle"
            aria-hidden="true"
          />
          {label}
        </span>
      </span>
    </span>
  );
}
