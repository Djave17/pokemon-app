import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("pokemon-theme");

  return savedTheme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
    root.style.colorScheme = theme;

    localStorage.setItem("pokemon-theme", theme);
  }, [theme, isDark]);

  return (
    <div className="theme-toggle">
      <Sun aria-hidden="true" />

      <Switch
        checked={isDark}
        aria-label="Cambiar tema de color"
        onCheckedChange={(checked) =>
          setTheme(checked ? "dark" : "light")
        }
      />

      <Moon aria-hidden="true" />
    </div>
  );
}