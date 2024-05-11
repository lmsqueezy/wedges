import * as React from "react";
import { render } from "@testing-library/react";

import { AvatarGroup } from ".";

const TEST_ID = "wg-avatar-group";

describe("AvatarGroup", () => {
  it("should forward ref to the HTMLDivElement", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(<AvatarGroup ref={ref} data-testid={TEST_ID} items={[]} />);

    expect(getByTestId(TEST_ID)).toBe(ref.current);
  });

  describe("given it has a custom class", () => {
    it("should include the custom class name in the class list", () => {
      const rendered = render(<AvatarGroup className="text-sm" data-testid={TEST_ID} items={[]} />);
      const root = rendered.getByTestId(TEST_ID);

      expect(root.classList.contains("text-sm")).toBe(true);
    });
  });

  describe("given it has `items` prop", () => {
    it("should not render any children if 'items' is an empty array", () => {
      const { getByTestId } = render(<AvatarGroup data-testid={TEST_ID} items={[]} />);

      expect(getByTestId(TEST_ID).children.length).toBe(0);
    });

    it("should render the correct number of children", () => {
      const { getByTestId } = render(<AvatarGroup data-testid={TEST_ID} items={[{}, {}, {}]} />);

      expect(getByTestId(TEST_ID).children.length).toBe(3);
    });

    it("should pass the size to children components when 'size' prop is set", () => {
      const rendered = render(<AvatarGroup data-testid={TEST_ID} items={[{}]} size="2xl" />);
      const root = rendered.getByTestId(TEST_ID);

      expect(root.querySelector("span")?.classList.contains("min-w-16")).toBe(true);
    });

    it("should apply the correct z-index on children items based on 'previousOnTop' prop", () => {
      const { container } = render(
        <AvatarGroup
          items={[{ className: "item-1" }, { className: "item-2" }]}
          previousOnTop={true}
        />
      );

      const item1 = container.querySelector<HTMLElement>(".item-1");
      const item2 = container.querySelector<HTMLElement>(".item-2");

      expect(item1?.style.zIndex).toBe("2");
      expect(item2?.style.zIndex).toBe("1");
    });
  });

  describe("given it has empty array passed for the `items` prop", () => {
    it("should not render any children", () => {
      const { getByTestId } = render(<AvatarGroup data-testid={TEST_ID} items={[]} />);

      expect(getByTestId(TEST_ID).children.length).toBe(0);
    });
  });

  describe("given an AvatarGroup with 'moreLabel' prop", () => {
    it("should render the label", () => {
      const { getByText } = render(<AvatarGroup items={[]} moreLabel="More" />);

      expect(getByText("More")).not.toBeNull();
    });
  });
});
