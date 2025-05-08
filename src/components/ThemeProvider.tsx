import React, { createContext, useContext, useState, useEffect } from "react";

import { theme } from "../styles/theme";

type ThemeType = "light" | "dark";
type ThemeContextType = {
  currentTheme: ThemeType;
  toggleTheme: () => void;
  theme: typeof theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Get initial theme preference from the system or localStorage
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as ThemeType;
      const prefersLightTheme = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches;

      return savedTheme || (prefersLightTheme ? "light" : "dark");
    }

    return "light";
  });

  // Update the theme when it changes
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = currentTheme === "dark";

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
