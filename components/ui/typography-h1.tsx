import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TypographyH1({
  classname,
  children,
}: {
  classname?: string;
  children: ReactNode;
}) {
  return (
    <h1 className={cn("text-3xl font-semibold", classname)}>{children}</h1>
  );
}
