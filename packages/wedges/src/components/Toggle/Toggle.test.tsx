import * as React from "react";
import { jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Toggle from "./Toggle";

const TEST_TEXT = "Toggle";

describe("Toggle", () => {
  it("should forward ref to the HTMLButtonElement", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Toggle ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("renders the toggle button", () => {
    render(<Toggle>{TEST_TEXT}</Toggle>);
    expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it("toggles state when clicked", () => {
    const handleClick = jest.fn();
    render(<Toggle onClick={handleClick}>{TEST_TEXT}</Toggle>);
    const button = screen.getByText(TEST_TEXT);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state", () => {
    render(<Toggle disabled>{TEST_TEXT}</Toggle>);
    const button = screen.getByText(TEST_TEXT).closest("button");
    expect(button).toBeDisabled();
  });

  it("renders before and after elements", () => {
    render(
      <Toggle before={<span>Before</span>} after={<span>After</span>}>
        Toggle
      </Toggle>
    );
    expect(screen.getByText("Before")).toBeInTheDocument();
    expect(screen.getByText("After")).toBeInTheDocument();
    expect(screen.getByText("Toggle")).toBeInTheDocument();
  });

  it("adjusts size based on props", () => {
    render(<Toggle size="md">{TEST_TEXT}</Toggle>);
    const button = screen.getByText(TEST_TEXT).closest("button");
    expect(button).toHaveClass("px-12px");
  });
});
