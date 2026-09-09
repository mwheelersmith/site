import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// The containing link or button must have the `group` class.
export function AnimatedArrow({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ArrowUpRight
      size={size}
      aria-hidden="true"
      className={cn(
        "shrink-0 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5",
        className,
      )}
    />
  );
}
