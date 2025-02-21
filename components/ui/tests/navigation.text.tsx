import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

describe("NavigationMenu Component", () => {
  it("renders NavigationMenu without crashing", () => {
    const { container } = render(<NavigationMenu>Test Menu</NavigationMenu>);
    expect(container).toBeInTheDocument();
  });

  it("renders NavigationMenuList without crashing", () => {
    const { container } = render(<NavigationMenuList />);
    expect(container).toBeInTheDocument();
  });

  it("renders NavigationMenuItem without crashing", () => {
    const { container } = render(<NavigationMenuItem />);
    expect(container).toBeInTheDocument();
  });

  it("renders NavigationMenuTrigger without crashing", () => {
    const { container } = render(
      <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
    );
    expect(container).toBeInTheDocument();
  });

  it("renders NavigationMenuContent without crashing", () => {
    const { container } = render(<NavigationMenuContent />);
    expect(container).toBeInTheDocument();
  });

  it("renders NavigationMenuLink without crashing", () => {
    const { container } = render(<NavigationMenuLink />);
    expect(container).toBeInTheDocument();
  });

  it("renders NavigationMenuIndicator without crashing", () => {
    const { container } = render(<NavigationMenuIndicator />);
    expect(container).toBeInTheDocument();
  });

  it("renders NavigationMenuViewport without crashing", () => {
    const { container } = render(<NavigationMenuViewport />);
    expect(container).toBeInTheDocument();
  });
});
