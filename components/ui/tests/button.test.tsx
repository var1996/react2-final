import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest"; 
import { Button } from "@/components/ui/button";
import "@testing-library/jest-dom";


describe("Button Component", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    expect(getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("supports different variants", () => {
    const { getByRole, rerender } = render(
      <Button variant="destructive">Delete</Button>
    );
    expect(getByRole("button", { name: /delete/i })).toHaveClass(
      "bg-destructive"
    );

    rerender(<Button variant="outline">Outline</Button>);
    expect(getByRole("button", { name: /outline/i })).toHaveClass("border-input");
  });

  it("supports different sizes", () => {
    const { getByRole, rerender } = render(<Button size="sm">Small</Button>);
    expect(getByRole("button", { name: /small/i })).toHaveClass("h-8");

    rerender(<Button size="lg">Large</Button>);
    expect(getByRole("button", { name: /large/i })).toHaveClass("h-10");
  });
});
