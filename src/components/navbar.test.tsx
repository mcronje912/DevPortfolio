// src/components/navbar.test.tsx
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../test/utils";

import { Navbar } from "./navbar";

// Mock the useLocation hook from react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useLocation: () => ({
      pathname: "/",
    }),
  };
});

// Mock the useAnalytics hook
vi.mock("../hooks/useAnalytics", () => ({
  useAnalytics: () => ({
    trackEvent: vi.fn(),
  }),
}));

describe("Navbar Component", () => {
  it("renders the logo and navigation items", () => {
    render(<Navbar />);

    // Check if the logo is rendered
    expect(screen.getByText("MC")).toBeInTheDocument();

    // Check if navigation items are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the GitHub icon and Theme toggle", () => {
    render(<Navbar />);

    // Check if GitHub icon is rendered
    expect(screen.getByLabelText("GitHub Profile")).toBeInTheDocument();

    // Check if Theme Switch is rendered
    const themeSwitch = screen.getByRole("checkbox");

    expect(themeSwitch).toBeInTheDocument();
  });

  it("renders Contact Me button", () => {
    render(<Navbar />);

    // Check if Contact Me button is rendered
    const contactButton = screen.getByRole("link", { name: "Contact Me" });

    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute("href", "/contact");
  });

  it("opens the mobile menu when toggle is clicked", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    // Get the menu toggle button
    const menuToggle = screen.getByLabelText("Open menu");

    expect(menuToggle).toBeInTheDocument();

    // Click on the menu toggle
    await user.click(menuToggle);

    // Check if the menu is opened (toggle button changes)
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });
});
