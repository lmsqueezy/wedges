import * as React from "react";
import { render } from "@testing-library/react";

import { Badge } from ".";

const TEST_TEXT = "Badge";

describe("Badge", () => {
  it("should forward ref to the HTMLSpanElement", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>{TEST_TEXT}</Badge>);

    if (ref.current !== null) {
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
      expect(ref.current.textContent).toBe(TEST_TEXT);
    } else {
      fail("ref.current is null");
    }
  });

  describe("given it has a `color` and `variant`", () => {
    it("should apply the correct classes for the specified `color` and `variant`", () => {
      const rendered = render(<Badge color="green" data-testid="wg-badge" shape="pill" />);
      const root = rendered.getByTestId("wg-badge");

      expect(root.classList.contains("wg-bg-wg-green-50")).toBe(true);
      expect(root.classList.contains("rounded-full")).toBe(true);
    });
  });

  describe("given it has a `stroke`", () => {
    it("should apply a stroke class", () => {
      const rendered = render(<Badge color="red" data-testid="wg-badge" stroke={true} />);
      const root = rendered.getByTestId("wg-badge");

      expect(root.classList.contains("outline")).toBe(true);
    });
  });

  describe("given it has a custom class", () => {
    it("should include the custom class name in the class list", () => {
      const rendered = render(<Badge className="text-sm" data-testid="wg-badge" />);
      const root = rendered.getByTestId("wg-badge");

      expect(root.classList.contains("text-sm")).toBe(true);
    });
  });

  describe("given it has 'before', 'children', and 'after' props", () => {
    it("should render correctly", () => {
      const rendered = render(
        <Badge after={<div>After</div>} before={<div>Before</div>}>
          Children
        </Badge>
      );

      expect(rendered.getByText("Before")).not.toBeNull();
      expect(rendered.getByText("Children")).not.toBeNull();
      expect(rendered.getByText("After")).not.toBeNull();
    });
  });

  describe("given it has only a 'before' prop", () => {
    it("should render the 'before' content and not render 'children' or 'after' content", () => {
      const rendered = render(<Badge before={<div>Before</div>} data-testid="wg-badge" />);
      const root = rendered.getByTestId("wg-badge");

      expect(root.children.length).toBe(1);
      expect(rendered.getByText("Before")).not.toBeNull();
    });
  });

  describe("given it has only an 'after' prop", () => {
    it("should render the 'after' content and not render 'children' or 'before' content", () => {
      const rendered = render(<Badge after={<div>After</div>} data-testid="wg-badge" />);
      const root = rendered.getByTestId("wg-badge");

      expect(root.children.length).toBe(1);
      expect(rendered.getByText("After")).not.toBeNull();
    });
  });

  describe("given it has React nodes passed for 'before' and 'after'", () => {
    it("should render the nodes correctly in the 'before' and 'after' slots", () => {
      const BeforeComponent = () => <div>Before Component</div>;
      const AfterComponent = () => <div>After Component</div>;

      const { getByText } = render(
        <Badge after={<AfterComponent />} before={<BeforeComponent />}>
          Children
        </Badge>
      );

      expect(getByText("Before Component")).not.toBeNull();
      expect(getByText("Children")).not.toBeNull();
      expect(getByText("After Component")).not.toBeNull();
    });
  });

  describe("given it has undefined set for 'before' and 'after' props", () => {
    it("should render the 'children' content without 'before' and 'after' content", () => {
      const rendered = render(
        <Badge after={undefined} before={undefined} data-testid="wg-badge">
          Children
        </Badge>
      );
      const root = rendered.getByTestId("wg-badge");

      // Verify that 'before' and 'after' are not rendered
      expect(root.children.length).toBe(1);

      // Verify that children are rendered correctly
      expect(rendered.getByText("Children")).not.toBeNull();
    });
  });

  describe("given it has undefined passed as 'children' prop", () => {
    it("should render without 'children' content", () => {
      const rendered = render(<Badge data-testid="wg-badge" />);
      const root = rendered.getByTestId("wg-badge");

      // Verify that 'before' and 'after' are not rendered
      expect(root.children.length).toBe(0);
    });
  });
});
