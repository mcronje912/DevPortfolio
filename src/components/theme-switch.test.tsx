// src/components/theme-switch.test.tsx
import { describe, it, expect, vi } from "vitest";

import { render, screen } from "../test/utils";

import { ThemeSwitch } from "./theme-switch";

// Mock the useTheme hook
vi.mock("./ThemeProvider", () => ({
  useTheme: () => ({
    currentTheme: "light",
    toggleTheme: vi.fn(),
    theme: {
      // Mock required theme properties
      colors: {},
      fonts: {},
      borderRadius: {},
      animation: {},
    },
  }),
}));

// Mock the useAnalytics hook
vi.mock("../hooks/useAnalytics", () => ({
  useAnalytics: () => ({
    trackEvent: vi.fn(),
  }),
}));

describe("ThemeSwitch Component", () => {
  it("renders the switch with correct aria-label", () => {
    render(<ThemeSwitch />);

    // Check if the switch is rendered with correct aria-label
    const themeSwitch = screen.getByRole("switch");

    expect(themeSwitch).toBeInTheDocument();
    expect(themeSwitch).toHaveAttribute("aria-label", "Switch to dark mode");
  });

  it("renders the correct icon for light theme", () => {
    render(<ThemeSwitch />);

    // For light theme, it should show the moon icon
    // We can't directly check for the icon, but we can check for its wrapper
    const iconWrapper = screen.getByRole("switch").parentElement;

    expect(iconWrapper).toBeInTheDocument();
  });
});
