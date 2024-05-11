import * as React from "react";
import { jest } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { Avatar } from "../Avatar";
import { type BadgeElement } from "../Badge";
import Tag from "./Tag"; // Adjust the import as necessary

const TEST_ID = "wg-tag";
const TEST_TEXT = "Tag";

describe("Tag", () => {
  it("should forward ref to the BadgeElement", () => {
    const ref = React.createRef<BadgeElement>();
    const { getByTestId } = render(<Tag ref={ref} data-testid={TEST_ID} />);

    expect(getByTestId(TEST_ID)).toBe(ref.current);
  });

  it("should render children correctly", () => {
    const { getByText } = render(<Tag data-testid={TEST_TEXT}>{TEST_TEXT}</Tag>);

    expect(getByText(TEST_TEXT)).not.toBeNull();
  });

  describe("given a Tag with `avatar` and `before` props", () => {
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

  describe("given a Tag with `onClose` function", () => {
    it("should call onClose when the close button is clicked", () => {
      const onClose = jest.fn();
      const { getByRole } = render(
        <Tag closable onClose={onClose}>
          Children
        </Tag>
      );

      fireEvent.click(getByRole("button"));
      expect(onClose).toHaveBeenCalled();
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

  describe("given a Tag with custom class", () => {
    it("should include the custom class name in the class list", () => {
      const rendered = render(<Tag className="text-sm" data-testid={TEST_ID} />);
      const root = rendered.getByTestId(TEST_ID);

      expect(root.classList.contains("text-sm")).toBe(true);
    });
  });
});
