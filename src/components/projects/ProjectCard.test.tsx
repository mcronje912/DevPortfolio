// src/components/projects/ProjectCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test/utils";

import { ProjectCard } from "./ProjectCard";

// Mock the useAnalytics hook
vi.mock("../../hooks/useAnalytics", () => ({
  useAnalytics: () => ({
    trackEvent: vi.fn(),
  }),
}));

describe("ProjectCard Component", () => {
  const defaultProps = {
    title: "Test Project",
    description: "This is a test project description",
    thumbnailUrl: "/images/test-project.jpg",
    tags: ["React", "TypeScript"],
    projectUrl: "/projects/test-project",
    deviceType: "desktop" as const,
  };

  it("renders the project information correctly", () => {
    render(<ProjectCard {...defaultProps} />);

    // Check if title and description are rendered
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test project description"),
    ).toBeInTheDocument();

    // Check if all tags are rendered
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    // Check if View Project link is rendered with correct URL
    const viewProjectLink = screen.getByRole("link", { name: /view project/i });

    expect(viewProjectLink).toBeInTheDocument();
    expect(viewProjectLink).toHaveAttribute("href", "/projects/test-project");
  });

  it("renders project image with correct alt text", () => {
    render(<ProjectCard {...defaultProps} />);

    // Check if the image is rendered with correct alt text
    const image = screen.getByAltText("Test Project");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/test-project.jpg");
  });

  it("handles project click correctly", async () => {
    const user = userEvent.setup();

    render(<ProjectCard {...defaultProps} />);

    const viewProjectLink = screen.getByRole("link", { name: /view project/i });

    await user.click(viewProjectLink);

    // We can't really test navigation in this unit test, but we can verify the link
    expect(viewProjectLink).toHaveAttribute("href", "/projects/test-project");
  });
});
