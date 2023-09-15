import React from "react";
import { RenderResult, render } from "@testing-library/react";

import Avatar from "./Avatar";

const DELAY = 80;
const FALLBACK_TEXT = "JD";
const IMAGE_ALT_TEXT = "Alt text example";
const IMG_SRC = "test.jpg";
const TEST_ID = "wg-avatar";

describe("Avatar", () => {
  it("should forward ref", () => {
    const ref = React.createRef<HTMLSpanElement>();
    const { getByTestId } = render(<Avatar ref={ref} data-testid={TEST_ID} />);

    expect(getByTestId(TEST_ID)).toBe(ref.current);
  });
});

describe("Given an Avatar with a working image", () => {
  const orignalGlobalImage = window.Image;
  const imageRef = React.createRef<HTMLImageElement>();
  let rendered: RenderResult;

  // Mock the Image constructor to return a mock image that will call the onload
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
    rendered = render(<Avatar ref={imageRef} src={IMG_SRC} />);
  });

  it("should render the Lemon Squeezy fallback first", () => {
    const fallback = rendered.container.querySelector("svg");

    expect(fallback).not.toBeNull();
  });

  it("should render the image after it has loaded", async () => {
    const image = await rendered.findByRole("img");
    const imageSrc = image?.getAttribute("src");

    expect(imageSrc).toBe(IMG_SRC);
  });

  it("should pass ref to the image", async () => {
    const image = await rendered.findByRole("img");

    expect(image).toBe(imageRef.current);
  });
});

describe("Given an Avatar with a working image, alt and initials", () => {
  const orignalGlobalImage = window.Image;
  let rendered: RenderResult;

  // Mock the Image constructor to return a mock image that will call the onload
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
    rendered = render(<Avatar alt={IMAGE_ALT_TEXT} initials={FALLBACK_TEXT} src={IMG_SRC} />);
  });

  it("should render the initials fallback first", () => {
    const fallback = rendered.getByText(FALLBACK_TEXT);

    expect(fallback).not.toBeNull();
  });

  it("should render the image with alt text after it has loaded", async () => {
    const image = await rendered.findByRole("img");
    const imageAlt = image?.getAttribute("alt");

    expect(imageAlt).toBe(IMAGE_ALT_TEXT);
  });
});

describe("Given an Avatar with a working image and children", () => {
  const orignalGlobalImage = window.Image;
  let rendered: RenderResult;

  // Mock the Image constructor to return a mock image that will call the onload
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
    rendered = render(<Avatar src={IMG_SRC}>{FALLBACK_TEXT}</Avatar>);
  });

  it("should render the children fallback first", () => {
    const fallback = rendered.getByText(FALLBACK_TEXT);

    expect(fallback).not.toBeNull();
  });

  it("should render the image after it has loaded", async () => {
    const image = await rendered.findByRole("img");
    const imageSrc = image?.getAttribute("src");

    expect(imageSrc).toBe(IMG_SRC);
  });
});

describe("Given an Avatar with only children", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <Avatar>
        <span>{FALLBACK_TEXT}</span>
      </Avatar>
    );
  });

  it("should render the children", () => {
    const fallback = rendered.getByText(FALLBACK_TEXT);

    expect(fallback).not.toBeNull();
  });

  it("should allow children to have any width", () => {
    const root = rendered.container.querySelector(".aspect-auto");

    expect(root).not.toBeNull();
    expect(root?.classList.contains("aspect-auto")).toBe(true);
  });
});

describe("Given an Avatar without image, initilas or children", () => {
  it("should render the default fallback", () => {
    const { container } = render(<Avatar />);
    const fallback = container.querySelector("svg");

    expect(fallback).not.toBeNull();
  });
});

describe("Given an Avatar with status and notification", () => {
  it("should render the status and notification", () => {
    const { container } = render(<Avatar notification="green" status="red" />);
    const status = container.querySelector(".bg-wg-red");
    const notification = container.querySelector(".bg-wg-green");

    expect(status).not.toBeNull();
    expect(notification).not.toBeNull();
  });
});

describe("Given an Avatar with size", () => {
  it("should apply correct size classes", () => {
    const { container } = render(<Avatar size="2xl" />);
    const size = container.querySelector(".min-w-16");

    expect(size).not.toBeNull();
  });
});
