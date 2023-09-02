import React from "react";
import { RenderResult, render } from "@testing-library/react";

import Avatar from "./Avatar";

const DELAY = 80;
const ROOT_TEST_ID = "wg-avatar-root";
const FALLBACK_TEXT = "JD";
const IMAGE_ALT_TEXT = "Alt text example";

describe("Avatar", () => {
  const orignalGlobalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
      onload: () => void = () => {};
      src: string = "";
      constructor() {
        setTimeout(() => {
          this.onload();
        }, DELAY);

        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = orignalGlobalImage;
  });

  it("should render", () => {
    const { getByTestId } = render(<Avatar data-testid="wg-avatar" />);
    const avatar = getByTestId("wg-avatar");

    expect(avatar).not.toBeNull();
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLImageElement>();
    const { getByTestId } = render(<Avatar ref={ref} data-testid="wg-avatar" />);

    expect(getByTestId("wg-avatar")).toBe(ref.current);
  });

  it("should render single character initials", () => {
    const { getByText } = render(<Avatar initials="John" />);
    const initialsSpan = getByText("J");

    expect(initialsSpan.tagName).toBe("SPAN");
  });

  it("should render two characters initials", () => {
    const { getByText } = render(<Avatar initials="John Doe" />);
    const initialsSpan = getByText("JD");

    expect(initialsSpan.tagName).toBe("SPAN");
  });

  it("should render status", () => {
    const { container } = render(<Avatar status="green" />);
    const status = container.querySelector(".bg-wg-green");

    expect(status).not.toBeNull();
  });

  it("should render notification", () => {
    const { container } = render(<Avatar notification="green" />);
    const notification = container.querySelector(".bg-wg-green");

    expect(notification).not.toBeNull();
  });

  it("should render a default fallback if no initials or src", () => {
    const { container } = render(<Avatar />);
    const fallback = container.querySelector("svg");

    expect(fallback).not.toBeNull();
  });

  it("should render LemonSqueezy icon as a fallback if no initials or children passed", () => {
    const { container } = render(<Avatar src="./placeholder.jpg" />);
    const fallback = container.querySelector("svg");

    expect(fallback).not.toBeNull();
  });

  it("should render children fallback", () => {
    const { queryByText } = render(<Avatar>John Doe</Avatar>);
    const fallback = queryByText("John Doe");

    expect(fallback).not.toBeNull();
  });
});

describe("Given an Avatar with fallback and a working image", () => {
  let rendered: RenderResult;
  let image: HTMLElement | null = null;
  const orignalGlobalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
      onload: () => void = () => {};
      src: string = "";
      constructor() {
        setTimeout(() => {
          this.onload();
        }, DELAY);

        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = orignalGlobalImage;
  });

  beforeEach(() => {
    rendered = render(
      <Avatar.Root data-testid={ROOT_TEST_ID}>
        <Avatar.Fallback>{FALLBACK_TEXT}</Avatar.Fallback>
        <Avatar.Image alt={IMAGE_ALT_TEXT} src="/placeholder.jpg" />
      </Avatar.Root>
    );
  });

  it("should render the fallback initially", () => {
    const fallback = rendered.queryByText(FALLBACK_TEXT);

    expect(fallback).not.toBeNull();
  });

  it("should render the image after it has loaded", async () => {
    image = await rendered.findByRole("img");

    expect(image).not.toBeNull();
  });

  it("should have alt text on the image", async () => {
    image = await rendered.findByAltText(IMAGE_ALT_TEXT);

    expect(image.getAttribute("alt")).toBe(IMAGE_ALT_TEXT);
  });
});
