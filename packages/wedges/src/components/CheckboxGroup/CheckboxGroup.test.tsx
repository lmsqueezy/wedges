import * as React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import CheckboxGroup from "./CheckboxGroup";

const TEST_ID = "Warning!";
const TEST_TEXT = "Checkbox";

describe("CheckboxGroup", () => {
  it("should forward ref to the HTMLDivElement", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(<CheckboxGroup ref={ref} data-testid={TEST_ID} />);

    expect(getByTestId(TEST_ID)).toBe(ref.current);
  });

  it("should render a group role", () => {
    const { getByRole } = render(<CheckboxGroup />);
    expect(getByRole("group")).toBeInTheDocument();
  });

  it("should render the label", () => {
    const { getByText } = render(<CheckboxGroup label={TEST_TEXT} />);
    expect(getByText(TEST_TEXT)).toBeInTheDocument();
  });
});
