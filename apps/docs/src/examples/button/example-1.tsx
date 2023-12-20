import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex max-w-fit items-start gap-10">
      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" />
        <Button before={<PlusIcon />} variant="secondary" />
        <Button before={<PlusIcon />} variant="tertiary" />
        <Button before={<PlusIcon />} variant="outline" />
        <Button before={<PlusIcon />} variant="transparent" />
        <Button before={<PlusIcon />} variant="link" />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />}>
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="secondary">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="tertiary">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="outline">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="transparent">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link">
          Button
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" shape="pill" />
        <Button before={<PlusIcon />} variant="secondary" shape="pill" />
        <Button before={<PlusIcon />} variant="tertiary" shape="pill" />
        <Button before={<PlusIcon />} variant="outline" shape="pill" />
        <Button before={<PlusIcon />} variant="transparent" shape="pill" />
        <Button before={<PlusIcon />} variant="link" shape="pill" />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />} shape="pill">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="secondary" shape="pill">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="tertiary" shape="pill">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="outline" shape="pill">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="transparent" shape="pill">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link" shape="pill">
          Button
        </Button>
      </div>
    </div>
  );
}
