import * as React from "react";

import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";

import Checkbox from "./Checkbox";

const TEST_TEXT = "Checkbox";
const TEST_ID = "wg-checkbox";

describe("Checkbox", () => {
  it("should forward ref to the HTMLButtonElement", () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { getByTestId } = render(<Checkbox ref={ref} data-testid={TEST_ID} />);

    expect(getByTestId(TEST_ID)).toBe(ref.current);
  });

  it("should render a checkbox role", () => {
    const { getByRole } = render(<Checkbox />);
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("should render the label", () => {
    const { getByText } = render(<Checkbox>{TEST_TEXT}</Checkbox>);
    expect(getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it("should render the description", () => {
    const { getByText } = render(<Checkbox description={TEST_TEXT} />);
    expect(getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it("should toggle the checkbox", () => {
    const { getByRole } = render(<Checkbox />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
