// src/components/ThemeLoader.tsx
import React, { useEffect } from "react";

import { theme } from "../styles/theme";

/**
 * This component automatically loads the Google Fonts specified in the theme
 * No need to add fonts to index.html or modify any other files
 */
export const ThemeLoader: React.FC = () => {
  useEffect(() => {
    // Only run once on client-side
    if (typeof window === "undefined") return;

    // Skip if the link already exists
    if (document.querySelector("[data-theme-font]")) return;

    // Create link for Google Fonts
    const link = document.createElement("link");

    link.href = theme.fonts.googleFontsUrl;
    link.rel = "stylesheet";
    link.setAttribute("data-theme-font", "true");
    document.head.appendChild(link);

    // Apply font-family to the HTML root
    document.documentElement.style.setProperty(
      "--font-heading",
      theme.fonts.headingStack,
    );
    document.documentElement.style.setProperty(
      "--font-body",
      theme.fonts.bodyStack,
    );
  }, []);

  return null; // This component doesn't render anything
};
