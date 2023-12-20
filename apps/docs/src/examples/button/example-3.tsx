import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex max-w-fit items-start gap-10">
      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" destructive />
        <Button before={<PlusIcon />} variant="secondary" destructive />
        <Button before={<PlusIcon />} variant="tertiary" destructive />
        <Button before={<PlusIcon />} variant="outline" destructive />
        <Button before={<PlusIcon />} variant="transparent" destructive />
        <Button before={<PlusIcon />} variant="link" destructive />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />} variant="primary" destructive>
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="secondary" destructive>
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="tertiary" destructive>
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="outline" destructive>
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="transparent" destructive>
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link" destructive>
          Button
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Button before={<PlusIcon />} variant="primary" shape="pill" destructive />
        <Button before={<PlusIcon />} variant="secondary" shape="pill" destructive />
        <Button before={<PlusIcon />} variant="tertiary" shape="pill" destructive />
        <Button before={<PlusIcon />} variant="outline" shape="pill" destructive />
        <Button before={<PlusIcon />} variant="transparent" shape="pill" destructive />
        <Button before={<PlusIcon />} variant="link" shape="pill" destructive />
      </div>

      <div className="flex flex-col gap-4">
        <Button after={<PlusIcon />} before={<PlusIcon />} shape="pill" destructive>
          Button
        </Button>

        <Button
          after={<PlusIcon />}
          before={<PlusIcon />}
          variant="secondary"
          shape="pill"
          destructive
        >
          Button
        </Button>

        <Button
          after={<PlusIcon />}
          before={<PlusIcon />}
          variant="tertiary"
          shape="pill"
          destructive
        >
          Button
        </Button>

        <Button
          after={<PlusIcon />}
          before={<PlusIcon />}
          variant="outline"
          shape="pill"
          destructive
        >
          Button
        </Button>

        <Button
          after={<PlusIcon />}
          before={<PlusIcon />}
          variant="transparent"
          shape="pill"
          destructive
        >
          Button
        </Button>

        <Button after={<PlusIcon />} before={<PlusIcon />} variant="link" shape="pill" destructive>
          Button
        </Button>
      </div>
    </div>
  );
}
