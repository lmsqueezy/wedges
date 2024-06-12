import * as React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Label } from ".";

const TEST_TEXT = "Label";

describe("Label", () => {
  it("should forward ref to the HTMLLabelElement", () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>{TEST_TEXT}</Label>);

    if (ref.current !== null) {
      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
      expect(ref.current.textContent).toBe(TEST_TEXT);
    } else {
      fail("ref.current is null");
    }
  });

  it("renders the label with children", () => {
    render(<Label>{TEST_TEXT}</Label>);
    expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it("renders an asterisk when the label is required", () => {
    render(<Label required>{TEST_TEXT}</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("does not render an asterisk when the label is not required", () => {
    render(<Label>{TEST_TEXT}</Label>);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("displays additional description text when provided", () => {
    render(<Label description="Additional description">{TEST_TEXT}</Label>);
    expect(screen.getByText("Additional description")).toBeInTheDocument();
  });

  describe("when used with asChild prop", () => {
    it("renders the label as a child of another component", () => {
      render(
        <Label asChild>
          <button>{TEST_TEXT}</button>
        </Label>
      );
      expect(screen.getByRole("button", { name: TEST_TEXT })).toBeInTheDocument();
    });
  });

  describe("when children, tooltip and description are NOT provided", () => {
    it("should not render the label", () => {
      const { container } = render(<Label />);
      expect(container.firstChild).toBeNull();
    });
  });
});
