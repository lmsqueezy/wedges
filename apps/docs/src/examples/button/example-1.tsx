import {
  ArrowUpRightIcon,
  BellIcon,
  CheckIcon,
  PlusIcon,
  TrashIcon,
  WarningTriangleIcon,
} from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap items-center justify-start gap-3">
        <Button after={<PlusIcon />} before={<PlusIcon />}>
          Button
        </Button>

        <Button variant="secondary" shape="pill" after={<PlusIcon />} before={<PlusIcon />}>
          Button
        </Button>

        <Button variant="tertiary" shape="pill" before={<PlusIcon />} />

        <Button variant="outline" after={<PlusIcon />} before={<PlusIcon />}>
          Button
        </Button>

        <Button variant="transparent" after={<PlusIcon />} before={<PlusIcon />}>
          Button
        </Button>

        <Button variant="link" after={<PlusIcon />} before={<PlusIcon />}>
          Button
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-3">
        <Button size="sm" before={<PlusIcon />}>
          Get Started
        </Button>

        <Button size="sm" variant="secondary" shape="pill">
          About
        </Button>

        <Button variant="tertiary" destructive size="sm" shape="pill" before={<TrashIcon />} />

        <Button size="sm" variant="outline" destructive before={<WarningTriangleIcon />}>
          Delete
        </Button>

        <Button size="sm" variant="transparent" after={<ArrowUpRightIcon />}>
          Read docs
        </Button>

        <Button size="sm" variant="link">
          More
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-3">
        <Button size="xs-icon" before={<PlusIcon />} />
        <Button size="xs-icon" destructive before={<CheckIcon />} />
        <Button size="xs-icon" variant="secondary" before={<BellIcon />} />
        <Button size="xs-icon" variant="tertiary" before={<CheckIcon />} />
        <Button size="xs-icon" variant="transparent" before={<PlusIcon />} />
        <Button size="xs-icon" variant="outline" before={<BellIcon />} />
      </div>
    </div>
  );
}
