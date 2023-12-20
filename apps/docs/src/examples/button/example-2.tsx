import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex max-w-fit items-start gap-10">
      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" size="sm" />
        <Button before={<PlusIcon />} variant="secondary" size="sm" />
        <Button before={<PlusIcon />} variant="tertiary" size="sm" />
        <Button before={<PlusIcon />} variant="outline" size="sm" />
        <Button before={<PlusIcon />} variant="transparent" size="sm" />
        <Button before={<PlusIcon />} variant="link" size="sm" />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />} size="sm">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="secondary" size="sm">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="tertiary" size="sm">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="outline" size="sm">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="transparent" size="sm">
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link" size="sm">
          Button
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" shape="pill" size="sm" />
        <Button before={<PlusIcon />} variant="secondary" shape="pill" size="sm" />
        <Button before={<PlusIcon />} variant="tertiary" shape="pill" size="sm" />
        <Button before={<PlusIcon />} variant="outline" shape="pill" size="sm" />
        <Button before={<PlusIcon />} variant="transparent" shape="pill" size="sm" />
        <Button before={<PlusIcon />} variant="link" shape="pill" size="sm" />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />} shape="pill" size="sm">
          Button
        </Button>

        <Button
          after={<PlusIcon />}
          before={<PlusIcon />}
          variant="secondary"
          shape="pill"
          size="sm"
        >
          Button
        </Button>

        <Button
          after={<PlusIcon />}
          before={<PlusIcon />}
          variant="tertiary"
          shape="pill"
          size="sm"
        >
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="outline" shape="pill" size="sm">
          Button
        </Button>

        <Button
          after={<PlusIcon />}
          before={<PlusIcon />}
          variant="transparent"
          shape="pill"
          size="sm"
        >
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link" shape="pill" size="sm">
          Button
        </Button>
      </div>
    </div>
  );
}
