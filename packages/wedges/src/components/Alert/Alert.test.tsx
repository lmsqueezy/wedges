import * as React from "react";
import { jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Alert } from ".";

const TEST_TEXT = "Warning!";

describe("Alert", () => {
  it("should forward ref to the HTMLDivElement", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Alert ref={ref}>{TEST_TEXT}</Alert>);

    if (ref.current !== null) {
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current.textContent).toBe(TEST_TEXT);
    } else {
      fail("ref.current is null");
    }
  });

  test("should render alert role", () => {
    render(<Alert>{TEST_TEXT}</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  describe("when the close button is clicked", () => {
    test("then it should invoke onClose callback", () => {
      const handleClose = jest.fn();
      render(<Alert closable={true} onClose={handleClose} />);
      fireEvent.click(screen.getByLabelText("Close"));
      expect(handleClose).toHaveBeenCalled();
    });

    test("then it should no longer be visible", () => {
      const { queryByRole } = render(<Alert closable={true} />);
      fireEvent.click(screen.getByLabelText("Close"));
      expect(queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("given it has a string title", () => {
    test("then it should display the title within an AlertTitle component", () => {
      render(<Alert title={TEST_TEXT} />);
      expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
    });
  });

  describe("given it has a component as a title", () => {
    test("then it should render the title as-is", () => {
      const titleElement = <span style={{ fontWeight: "bold" }}>{TEST_TEXT}</span>;
      render(<Alert title={titleElement} />);
      expect(screen.getByText(TEST_TEXT)).toHaveStyle("font-weight: bold");
    });
  });

  describe("given it has a custom before and after slot", () => {
    test("then it should render these elements correctly", () => {
      render(<Alert before={<span>Before</span>} after={<button>After</button>} />);
      expect(screen.getByText("Before")).toBeInTheDocument();
      expect(screen.getByText("After")).toBeInTheDocument();
    });
  });

  describe("given children are provided", () => {
    test("Then it should render the children inside the Alert", () => {
      render(<Alert>{TEST_TEXT}</Alert>);
      expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
    });
  });
});
