"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center transition-colors duration-300 hover:scale-105 hover:shadow-md active:scale-95"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}
