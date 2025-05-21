// src/test/simple.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Basic test", () => {
  it("renders a simple component", () => {
    render(<div data-testid="test-element">Test</div>);
    expect(screen.getByTestId("test-element")).toBeInTheDocument();
  });
});
