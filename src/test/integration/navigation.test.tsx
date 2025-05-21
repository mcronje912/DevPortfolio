// src/test/integration/navigation.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../utils";
import App from "../../App";

// Mock all the page components to simplify testing
vi.mock("../../pages/index", () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock("../../pages/projects", () => ({
  default: () => <div data-testid="projects-page">Projects Page</div>,
}));

vi.mock("../../pages/about", () => ({
  default: () => <div data-testid="about-page">About Page</div>,
}));

vi.mock("../../pages/contact", () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>,
}));

// Mock hooks
vi.mock("../../hooks/useAnalytics", () => ({
  useAnalytics: () => ({
    trackEvent: vi.fn(),
  }),
}));

// Mock window.scrollTo
beforeEach(() => {
  window.scrollTo = vi.fn();
});

describe("Navigation Flow", () => {
  it("navigates between pages correctly", async () => {
    const user = userEvent.setup();

    // Render the app
    render(<App />);

    // Initially we should be on the home page
    expect(screen.getByTestId("home-page")).toBeInTheDocument();

    // Navigate to Projects page
    const projectsLink = screen.getByText("Projects");

    await user.click(projectsLink);
    expect(screen.getByTestId("projects-page")).toBeInTheDocument();

    // Navigate to About page
    const aboutLink = screen.getByText("About");

    await user.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();

    // Navigate to Contact page
    const contactLink = screen.getByText("Contact");

    await user.click(contactLink);
    expect(screen.getByTestId("contact-page")).toBeInTheDocument();

    // Navigate back to Home page
    const homeLink = screen.getByText("Home");

    await user.click(homeLink);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
