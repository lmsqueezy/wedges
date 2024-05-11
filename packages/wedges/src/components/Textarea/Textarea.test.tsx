import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Textarea from "./Textarea";

describe("Textarea", () => {
  it("forwards the ref correctly to the textarea element", () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("renders with a label when provided", () => {
    render(<Textarea label="Comments" />);
    expect(screen.getByLabelText("Comments")).toBeInTheDocument();
  });

  it("sets aria-invalid based on the destructive prop", () => {
    render(<Textarea destructive={true} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
  });

  it("applies disabled styles and attributes when disabled", () => {
    render(<Textarea disabled={true} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass("cursor-not-allowed");
  });

  it("displays helper text when provided", () => {
    const helperText = "Please enter your comments here.";
    render(<Textarea helperText={helperText} />);
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it("handles user input correctly", () => {
    render(<Textarea defaultValue="Initial text" />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Updated text" } });
    expect(textarea).toHaveValue("Updated text");
  });
});
