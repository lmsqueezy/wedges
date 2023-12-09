import React from "react";
import { jest } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { Avatar } from "../Avatar";
import { type BadgeElement } from "../Badge";
import Tag from "./Tag"; // Adjust the import as necessary

describe("Tag", () => {
  it("should forward ref to the BadgeElement", () => {
    const ref = React.createRef<BadgeElement>();
    const { getByTestId } = render(<Tag ref={ref} data-testid="wg-tag" />);

    expect(getByTestId("wg-tag")).toBe(ref.current);
  });
});

describe("Given a Tag with avatar, before props", () => {
  it("should render avatar and before correctly", () => {
    const { getByText } = render(
      <Tag avatar={<Avatar initials="WG" />} before={<div>Before</div>}>
        Children
      </Tag>
    );

    expect(getByText("WG")).not.toBeNull();
    expect(getByText("Before")).not.toBeNull();
    expect(getByText("Children")).not.toBeNull();
  });
});

describe("Given a Tag with onClose function", () => {
  it("should call onClose when the close button is clicked", () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <Tag closable onClose={onClose}>
        Children
      </Tag>
    );

    fireEvent.click(getByRole("button"));
    expect(onClose).toBeCalled();
  });

  it("should render the custom close icon if provided", () => {
    const onClose = jest.fn();
    const { findByText } = render(
      <Tag closable closeIcon={<div>Close</div>} onClose={onClose}>
        Children
      </Tag>
    );

    expect(findByText("Close")).not.toBeNull();
  });
});

describe("Given a Tag with custom class", () => {
  it("should include the custom class name in the class list", () => {
    const rendered = render(<Tag className="text-sm" data-testid="wg-tag" />);
    const root = rendered.getByTestId("wg-tag");

    expect(root.classList.contains("text-sm")).toBe(true);
  });
});
