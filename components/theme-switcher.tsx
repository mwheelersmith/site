"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Sun, Monitor, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mt-4 flex justify-center gap-2 md:absolute md:left-4 md:top-4 md:mt-0">
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50",
          theme === "light"
            ? "bg-zinc-200 text-zinc-950 dark:bg-zinc-700 dark:text-zinc-200"
            : "",
        )}
        title="Light Theme"
      >
        <Sun size={16} />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={cn(
          "rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50",
          theme === "system"
            ? "bg-zinc-200 text-zinc-950 dark:bg-zinc-700 dark:text-zinc-200"
            : "",
        )}
        title="System Theme"
      >
        <Monitor size={16} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50",
          theme === "dark"
            ? "bg-zinc-200 text-zinc-950 dark:bg-zinc-700 dark:text-zinc-200"
            : "",
        )}
        title="Dark Theme"
      >
        <Moon size={16} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
