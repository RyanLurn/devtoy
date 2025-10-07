import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ModeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<"theme-light" | "system" | "dark">(
    "theme-light"
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        globalThis.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className} variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
