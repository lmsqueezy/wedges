import * as React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Kbd from "./Kbd";

const TEST_TEXT = "K";
const TEST_ID = "wg-kbd";

describe("Kbd", () => {
  it("should forward ref to the kbd element", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Kbd ref={ref}>{TEST_TEXT}</Kbd>);

    if (ref.current !== null) {
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current.textContent).toBe(TEST_TEXT);
    } else {
      fail("ref.current is null");
    }
  });

  it("renders single key correctly", () => {
    const { getByTestId, getByTitle } = render(<Kbd keys={["command"]} data-testid={TEST_ID} />);
    expect(getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByTitle("Command")).toBeInTheDocument();
  });

  it("renders multiple keys correctly", () => {
    const { getByTestId, getByTitle } = render(
      <Kbd keys={["command", "shift"]} data-testid={TEST_ID} />
    );
    expect(getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByTitle("Command")).toBeInTheDocument();
    expect(getByTitle("Shift")).toBeInTheDocument();
  });

  it("renders the children", () => {
    render(<Kbd>{TEST_TEXT}</Kbd>);
    expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it("should render the correct size", () => {
    const { getByTestId } = render(
      <Kbd size="lg" data-testid={TEST_ID}>
        {TEST_TEXT}
      </Kbd>
    );
    expect(getByTestId(TEST_ID)).toHaveClass("text-lg");
  });

  it("supports custom className", () => {
    const { getByTestId } = render(<Kbd keys="command" className="class" data-testid={TEST_ID} />);
    expect(getByTestId(TEST_ID)).toHaveClass("class");
  });

  it("does not render when keys prop is empty", () => {
    const { container } = render(<Kbd keys={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("does not render an invalid key", () => {
    const invalidKey = "InvalidKey"; // A key not present in kbdKeysMap
    // @ts-expect-error -- Testing invalid key
    render(<Kbd keys={invalidKey} />);
    expect(screen.queryByText(invalidKey)).not.toBeInTheDocument();
  });
});
