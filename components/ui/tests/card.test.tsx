import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

describe("Card Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Card>Test Content</Card>);
    expect(container).toBeInTheDocument();
  });
});

describe("Card Subcomponents", () => {
  it("renders CardHeader without crashing", () => {
    const { container } = render(<CardHeader>Header Content</CardHeader>);
    expect(container).toBeInTheDocument();
  });

  it("renders CardTitle without crashing", () => {
    const { container } = render(<CardTitle>Title Content</CardTitle>);
    expect(container).toBeInTheDocument();
  });

  it("renders CardDescription without crashing", () => {
    const { container } = render(
      <CardDescription>Description Content</CardDescription>
    );
    expect(container).toBeInTheDocument();
  });

  it("renders CardContent without crashing", () => {
    const { container } = render(<CardContent>Content</CardContent>);
    expect(container).toBeInTheDocument();
  });

  it("renders CardFooter without crashing", () => {
    const { container } = render(<CardFooter>Footer Content</CardFooter>);
    expect(container).toBeInTheDocument();
  });
});
