/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* -------------------------------------------------------------------------- */
/*                    GENERATED FILE, DO NOT EDIT MANUALLY!                   */
/* -------------------------------------------------------------------------- */
import { lazy, type LazyExoticComponent } from "react";

type Demo = {
  component: LazyExoticComponent<() => JSX.Element>;
  code: string;
}

export const Demos: Record<string, Demo> = {
  "alert/example-1": {
    component: lazy(() => import("@/examples/alert/example-1.tsx")),
    code: `import { Alert, Button } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Alert
      closable
      color="primary"
      onClose={() => alert("onClose callback")}
      title="The data export you requested is ready!"
      variant="expanded"
      after={
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="light:bg-white">
            View the data
          </Button>

          <Button variant="link" size="sm" className="text-surface-500 hover:text-surface-900">
            Maybe later
          </Button>
        </div>
      }
    />
  );
}
`,
  },
  "alert/example-2": {
    component: lazy(() => import("@/examples/alert/example-2.tsx")),
    code: `import { ArrowUpRightIcon, CheckIcon, EmojiSadIcon } from "@iconicicons/react";
import { Alert, Button } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex flex-col gap-6">
      {/* Example 1 */}
      <Alert color="success" title="Successfully uploaded!" before={<CheckIcon />} closable />

      {/* Example 2 */}
      <Alert
        title="You have no credits left!"
        color="warning"
        after={
          <Button
            variant="link"
            className="text-inherit hover:text-surface-900 dark:text-wg-yellow-500 dark:hover:text-yellow-300"
          >
            Upgrade
          </Button>
        }
      >
        Upgrade to continue.
      </Alert>

      {/* Example 3 */}
      <Alert
        before={<EmojiSadIcon />}
        color="error"
        title="There was a problem with your submission"
        variant="expanded"
      >
        <div>
          <p>Must include at least 1 number</p>
          <p>Must include at least 2 uppercase letters</p>
        </div>
      </Alert>

      {/* Example 4 */}
      <Alert
        title="A new software update is available. See what's new."
        closable
        color="info"
        variant="expanded"
        after={
          <Button
            variant="outline"
            className="light:bg-white"
            size="sm"
            after={<ArrowUpRightIcon />}
          >
            View the changelog
          </Button>
        }
      />
    </div>
  );
}
`,
  },
  "alert/preview": {
    component: lazy(() => import("@/examples/alert/preview.tsx")),
    code: `import { Alert, Button } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Alert title="Alert title" after={<Button variant="link">Button</Button>}>
      Alert content
    </Alert>
  );
}
`,
  },
  "avatar/example-1": {
    component: lazy(() => import("@/examples/avatar/example-1.tsx")),
    code: `import { Avatar } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex items-center justify-center">
      <Avatar
        alt="Max Quest"
        size="lg"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
        status="green"
        notification="red"
        initials="MQ"
      />
    </div>
  );
}
`,
  },
  "avatar/example-2": {
    component: lazy(() => import("@/examples/avatar/example-2.tsx")),
    code: `import { Avatar } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <>
      <div className="flex items-center justify-center gap-6">
        <Avatar
          alt="Max Quest"
          size="xxs"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
          status="green"
          notification="red"
        />

        <Avatar
          alt="Max Quest"
          size="xs"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
          status="green"
          notification="red"
        />

        <Avatar
          alt="Max Quest"
          size="sm"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
          status="green"
          notification="red"
        />

        <Avatar
          alt="Max Quest"
          size="md"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
          status="green"
          notification="red"
        />

        <Avatar
          alt="Max Quest"
          size="lg"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
          status="green"
          notification="red"
        />

        <Avatar
          alt="Max Quest"
          size="2xl"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
          status="green"
          notification="red"
        />
      </div>

      <div className="mt-12 flex items-center justify-center gap-6">
        <Avatar alt="Max Quest" size="xxs" status="green" notification="red" />
        <Avatar alt="Max Quest" size="xs" status="green" notification="red" />
        <Avatar alt="Max Quest" size="sm" status="green" notification="red" />
        <Avatar alt="Max Quest" size="md" status="green" notification="red" />
        <Avatar alt="Max Quest" size="lg" status="green" notification="red" />
        <Avatar alt="Max Quest" size="2xl" status="green" notification="red" />
      </div>

      <div className="mt-12 flex items-center justify-center gap-6">
        <Avatar alt="Max Quest" initials="W" size="xxs" status="green" notification="red" />
        <Avatar alt="Max Quest" initials="E" size="xs" status="green" notification="red" />
        <Avatar alt="Max Quest" initials="d" size="sm" status="green" notification="red" />
        <Avatar alt="Max Quest" initials="g" size="md" status="green" notification="red" />
        <Avatar alt="Max Quest" initials="E" size="lg" status="green" notification="red" />
        <Avatar alt="Max Quest" initials="S" size="2xl" status="green" notification="red" />
      </div>
    </>
  );
}
`,
  },
  "avatar/example-3": {
    component: lazy(() => import("@/examples/avatar/example-3.tsx")),
    code: `import { Avatar, Tooltip } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Tooltip content="Max Quest" sideOffset={8}>
        <Avatar.Root className="h-16 w-16 justify-center rounded-full outline outline-offset-2 outline-wg-red">
          <Avatar.Image
            className="rounded-full"
            src="https://images.unsplash.com/photo-1560800452-f2d475982b96?auto=format&fit=crop&w=250&h=250"
          />
          <Avatar.Fallback className="rounded-full" />
          <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700/50 text-white backdrop-blur-sm">
            MQ
          </span>
          <Avatar.Status className="left-1 bg-wg-red" />
        </Avatar.Root>
      </Tooltip>
    </div>
  );
}
`,
  },
  "avatar/preview": {
    component: lazy(() => import("@/examples/avatar/preview.tsx")),
    code: `import { Avatar } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Avatar
      alt="Max Quest"
      size="xl"
      src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=250&h=250&auto=format&fit=crop"
    />
  );
}
`,
  },
  "avatar-group/example-1": {
    component: lazy(() => import("@/examples/avatar-group/example-1.tsx")),
    code: `import { AvatarGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center justify-center gap-6">
        <AvatarGroup
          size="sm"
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />

        <AvatarGroup
          size="sm"
          previousOnTop={true}
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />
      </div>

      <div className="flex items-center justify-center gap-6">
        <AvatarGroup
          size="md"
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />

        <AvatarGroup
          size="md"
          previousOnTop={true}
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />
      </div>

      <div className="flex items-center justify-center gap-6">
        <AvatarGroup
          size="lg"
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />

        <AvatarGroup
          size="lg"
          previousOnTop={true}
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />
      </div>

      <div className="flex items-center justify-center gap-6">
        <AvatarGroup
          size="xl"
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />

        <AvatarGroup
          size="xl"
          previousOnTop={true}
          items={[
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 1",
            },
            {
              src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
            {
              src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop&crop=face",
              alt: "Avatar 2",
            },
          ]}
          moreLabel="+3"
        />
      </div>
    </div>
  );
}
`,
  },
  "avatar-group/example-2": {
    component: lazy(() => import("@/examples/avatar-group/example-2.tsx")),
    code: `import { AvatarGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex justify-center">
      <AvatarGroup.Root>
        <AvatarGroup.Item
          size="md"
          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=250"
        />

        <AvatarGroup.Item
          size="md"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&h=250"
        />

        <AvatarGroup.Item
          size="md"
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=250"
        />

        <AvatarGroup.Label className="z-40 bg-primary px-3 text-sm text-white dark:bg-primary">
          42k likes
        </AvatarGroup.Label>

        <AvatarGroup.Item
          className="z-30"
          size="md"
          src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=250&q=60"
        />
        <AvatarGroup.Item
          className="z-20"
          size="md"
          src="https://images.unsplash.com/photo-1560800452-f2d475982b96?fit=crop&w=250&h=250&q=80"
        />
        <AvatarGroup.Item
          className="z-10"
          size="md"
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?fit=crop&w=250&q=60"
        />
      </AvatarGroup.Root>
    </div>
  );
}
`,
  },
  "avatar-group/example-3": {
    component: lazy(() => import("@/examples/avatar-group/example-3.tsx")),
    code: `import { AvatarGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="mx-auto max-w-fit rounded-lg p-12 wg-bg-orange-100 dark:wg-bg-yellow-950">
      <AvatarGroup
        size="xl"
        items={[
          {
            src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 1",
          },
          {
            src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 2",
          },
          {
            src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 2",
          },
        ]}
      />
    </div>
  );
}
`,
  },
  "avatar-group/preview": {
    component: lazy(() => import("@/examples/avatar-group/preview.tsx")),
    code: `import { AvatarGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex items-center justify-center">
      <AvatarGroup
        items={[
          {
            src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 1",
          },
          {
            src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 2",
          },
          {
            src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 2",
          },
        ]}
        moreLabel="+3"
      />
    </div>
  );
}
`,
  },
  "badge/example-1": {
    component: lazy(() => import("@/examples/badge/example-1.tsx")),
    code: `import {
  CheckIcon,
  CloseIcon,
  FlagIcon,
  PinTackIcon,
  PlayIcon,
  SpinnerIcon,
} from "@iconicicons/react";
import { Badge } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-2">
        <Badge before={<CheckIcon />} color="green" shape="pill">
          Paid
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke={true}>
          Active
        </Badge>

        <Badge before={<CheckIcon />} color="green" shape="pill" stroke={true}>
          200
        </Badge>

        <Badge before={<CloseIcon />} color="red" shape="pill">
          Rejected
        </Badge>

        <Badge before={<CloseIcon />} color="primary" stroke={true}>
          Chargeback
        </Badge>

        <Badge before={<CloseIcon />} color="red" shape="pill" stroke={true}>
          Chargeback
        </Badge>

        <Badge before={<CloseIcon />}>Expired</Badge>

        <Badge
          before={
            <span className="flex h-4 w-4 items-center justify-center rounded-full before:flex before:aspect-square before:w-[6px] before:rounded-full before:bg-wg-green before:content-['']" />
          }
        >
          Online
        </Badge>

        <Badge before={<SpinnerIcon />} color="blue" shape="pill">
          Processing
        </Badge>

        <Badge before={<FlagIcon />} color="blue" stroke={true}>
          Flagged
        </Badge>

        <Badge color="blue" shape="pill" stroke={true}>
          Washington D.C.
        </Badge>

        <Badge color="red" shape="pill">
          4
        </Badge>

        <Badge before={<PinTackIcon />} color="yellow" stroke={true}>
          Pinned
        </Badge>

        <Badge before={<PlayIcon />} color="pink" shape="pill">
          1m 30s
        </Badge>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <Badge color="green" size="sm" shape="pill" stroke={true}>
          New York City
        </Badge>

        <Badge color="orange" size="sm" shape="pill">
          1
        </Badge>

        <Badge before={<PinTackIcon />} size="sm" color="yellow" stroke={true}>
          Pinned
        </Badge>

        <Badge before={<PlayIcon />} size="sm" color="pink" shape="pill">
          1m 30s
        </Badge>
      </div>
    </>
  );
}
`,
  },
  "badge/preview": {
    component: lazy(() => import("@/examples/badge/preview.tsx")),
    code: `import { PlusIcon } from "@iconicicons/react";
import { Badge } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Badge before={<PlusIcon />} after={<PlusIcon />}>
      Label
    </Badge>
  );
}
`,
  },
  "button/example-1": {
    component: lazy(() => import("@/examples/button/example-1.tsx")),
    code: `import {
  ArrowUpRightIcon,
  BellIcon,
  CheckIcon,
  PlusIcon,
  TrashIcon,
  WarningTriangleIcon,
} from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

export function Example() {
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
`,
  },
  "button/preview": {
    component: lazy(() => import("@/examples/button/preview.tsx")),
    code: `import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Button after={<PlusIcon />} before={<PlusIcon />}>
      Button
    </Button>
  );
}
`,
  },
  "button-group/example-1": {
    component: lazy(() => import("@/examples/button-group/example-1.tsx")),
    code: `import {
  ChevronDownIcon,
  DotsVerticalIcon,
  GridIcon,
  GridMasonryIcon,
  Monitor2Icon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TableColumnsIcon,
  TableRowsIcon,
} from "@iconicicons/react";
import { ButtonGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Example 1 */}
      <ButtonGroup orientation="vertical">
        <ButtonGroup.Item className="justify-start" before={<SunIcon />}>
          Light
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<MoonIcon />}>
          Dark
        </ButtonGroup.Item>

        <ButtonGroup.Item className="justify-start" before={<Monitor2Icon />}>
          System
        </ButtonGroup.Item>
      </ButtonGroup>

      {/* Example 2 */}
      <ButtonGroup>
        <ButtonGroup.Item after={<GridIcon />} />
        <ButtonGroup.Item after={<GridMasonryIcon />} />
        <ButtonGroup.Item after={<TableColumnsIcon />} />
        <ButtonGroup.Item after={<TableRowsIcon />} />
      </ButtonGroup>

      {/* Example 3 */}
      <ButtonGroup>
        <ButtonGroup.Item disabled>Publish Post</ButtonGroup.Item>
        <ButtonGroup.Item>Draft</ButtonGroup.Item>
        <ButtonGroup.Item before={<DotsVerticalIcon />} />
      </ButtonGroup>

      {/* Example 4 */}
      <ButtonGroup size="sm">
        <ButtonGroup.Item destructive before={<PlusIcon />}>
          Destructive
        </ButtonGroup.Item>

        <ButtonGroup.Item before={<PlusIcon />}>Button</ButtonGroup.Item>

        <ButtonGroup.Item before={<ChevronDownIcon />} />
      </ButtonGroup>
    </div>
  );
}
`,
  },
  "button-group/example-2": {
    component: lazy(() => import("@/examples/button-group/example-2.tsx")),
    code: `import { ChevronDownIcon, CopyIcon, DownloadIcon, EditIcon } from "@iconicicons/react";
import { ButtonGroup, Tooltip } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <ButtonGroup size="sm">
      <Tooltip
        align="center"
        animation={false}
        content="View raw code"
        delayDuration={0}
        side="top"
      >
        <ButtonGroup.Item>Raw</ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Copy" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <CopyIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Download" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <DownloadIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Edit" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <EditIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="More" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <ChevronDownIcon />
        </ButtonGroup.Item>
      </Tooltip>
    </ButtonGroup>
  );
}
`,
  },
  "button-group/preview": {
    component: lazy(() => import("@/examples/button-group/preview.tsx")),
    code: `import { PlusIcon } from "@iconicicons/react";
import { ButtonGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <ButtonGroup>
      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>
    </ButtonGroup>
  );
}
`,
  },
  "checkbox/example-1": {
    component: lazy(() => import("@/examples/checkbox/example-1.tsx")),
    code: `import { Checkbox } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto flex w-fit flex-col gap-6 text-left">
      <Checkbox label="Required" required />

      <Checkbox
        description="(optional)"
        helperText="Helper text"
        label="Label"
        tooltip="Tooltip example"
      />

      <Checkbox
        helperText="Indeterminate"
        label="Label"
        tooltip="Tooltip example"
        checked="indeterminate"
      />

      <Checkbox defaultChecked disabled description="Disabled" tooltip="Tooltip example" />
    </div>
  );
}
`,
  },
  "checkbox/example-2": {
    component: lazy(() => import("@/examples/checkbox/example-2.tsx")),
    code: `import { AvatarGroup, Checkbox } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto flex w-fit flex-col gap-6 text-left">
      <Checkbox.Root
        asChild
        className="flex w-80 cursor-pointer items-center justify-between rounded-lg border border-surface-100 px-4 py-3 shadow-wg-xs outline-2 -outline-offset-1 outline-primary wg-bg-white dark:wg-bg-neutral-900 [&:has([data-state=checked])]:outline"
      >
        <label>
          <Checkbox.Item />

          <div className="flex grow items-center justify-between text-sm">
            <span className="select-none">Share to 3 users</span>

            <AvatarGroup
              items={[
                {
                  initials: "W",
                },
                {
                  initials: "D",
                },
                {
                  initials: "G",
                },
              ]}
              size="xs"
            />
          </div>
        </label>
      </Checkbox.Root>
    </div>
  );
}
`,
  },
  "checkbox/preview": {
    component: lazy(() => import("@/examples/checkbox/preview.tsx")),
    code: `import { Checkbox } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <Checkbox
        description="description"
        helperText="Helper text"
        label="Label"
        required
        tooltip="Tooltip example"
      />
    </div>
  );
}
`,
  },
  "checkbox-group/example-1": {
    component: lazy(() => import("@/examples/checkbox-group/example-1.tsx")),
    code: `import { CheckboxGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto flex w-fit flex-col gap-8 text-left">
      <CheckboxGroup
        required
        description="(description)"
        helperText="Helper text"
        label="Vertical"
        tooltip="Tooltip example"
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item defaultChecked label="Option 2" />
        <CheckboxGroup.Item disabled label="Option 3" />
        <CheckboxGroup.Item label="Option 4" />
        <CheckboxGroup.Item label="Option 5" tooltip="Optional tooltip content" />
      </CheckboxGroup>

      <CheckboxGroup
        disabled
        description="(disabled)"
        helperText="Helper text"
        label="Horizontal"
        orientation="horizontal"
        tooltip="Tooltip example"
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item defaultChecked label="Option 2" />
        <CheckboxGroup.Item disabled label="Option 3" />
      </CheckboxGroup>
    </div>
  );
}
`,
  },
  "checkbox-group/preview": {
    component: lazy(() => import("@/examples/checkbox-group/preview.tsx")),
    code: `import { CheckboxGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <CheckboxGroup
        description="description"
        helperText="Helper text"
        label="Label"
        required
        tooltip="Tooltip example"
      >
        <CheckboxGroup.Item label="Option 1" />
        <CheckboxGroup.Item label="Option 2" />
        <CheckboxGroup.Item label="Option 3" />
        <CheckboxGroup.Item label="Option 4" />
      </CheckboxGroup>
    </div>
  );
}
`,
  },
  "colors/themableColors": {
    component: lazy(() => import("@/examples/colors/themableColors.tsx")),
    code: `export function ColorsExample() {
  return (
    <div className="flex flex-col items-center rounded border border-surface-100 bg-surface p-20 leading-6">
      <span className="text-surface-500">Easy Peasy</span>
      <span className="font-medium text-surface-900">Lemon Squeezy</span>
    </div>
  );
}
`,
  },
  "label/example-1": {
    component: lazy(() => import("@/examples/label/example-1.tsx")),
    code: `import { Label } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start text-start">
      <Label description="description" required tooltip="Tooltip example">
        Label
      </Label>

      <Label.Helper error>There are errors in your form.</Label.Helper>
    </div>
  );
}
`,
  },
  "label/preview": {
    component: lazy(() => import("@/examples/label/preview.tsx")),
    code: `import { Label } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Label description="description" required tooltip="Tooltip example">
      Label
    </Label>
  );
}
`,
  },
  "popover/example-1": {
    component: lazy(() => import("@/examples/popover/example-1.tsx")),
    code: `import { ChevronDownIcon, CopyIcon, DownloadIcon } from "@iconicicons/react";
import { ButtonGroup, CheckboxGroup, Popover } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <ButtonGroup>
      <ButtonGroup.Item isIconOnly>
        <CopyIcon />
      </ButtonGroup.Item>

      <ButtonGroup.Item isIconOnly>
        <DownloadIcon />
      </ButtonGroup.Item>

      <Popover>
        <Popover.Trigger asChild>
          <ButtonGroup.Item isIconOnly>
            <ChevronDownIcon />
          </ButtonGroup.Item>
        </Popover.Trigger>

        <Popover.Content align="end" className="min-w-[130px]">
          <CheckboxGroup label="Group Label">
            <CheckboxGroup.Item label="Option 1" />
            <CheckboxGroup.Item label="Option 2" />
            <CheckboxGroup.Item label="Option 3" />
            <CheckboxGroup.Item label="Option 4" />
          </CheckboxGroup>
        </Popover.Content>
      </Popover>
    </ButtonGroup>
  );
}
`,
  },
  "popover/preview": {
    component: lazy(() => import("@/examples/popover/preview.tsx")),
    code: `import { ChevronDownIcon } from "@iconicicons/react";
import { Button, CheckboxGroup, Popover } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="tertiary" size="sm" after={<ChevronDownIcon />} shape="pill">
          Show Popover
        </Button>
      </Popover.Trigger>

      <Popover.Content className="min-w-[140px]">
        <CheckboxGroup label="Group Label">
          <CheckboxGroup.Item label="Option 1" />
          <CheckboxGroup.Item label="Option 2" />
          <CheckboxGroup.Item label="Option 3" />
          <CheckboxGroup.Item label="Option 4" />
        </CheckboxGroup>
      </Popover.Content>
    </Popover>
  );
}
`,
  },
  "radio-group/example-1": {
    component: lazy(() => import("@/examples/radio-group/example-1.tsx")),
    code: `import { RadioGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto flex w-fit flex-col gap-8 text-left">
      {/* Example 1 */}
      <RadioGroup
        required
        description="(description)"
        helperText="Helper text"
        label="Vertical"
        tooltip="Tooltip example"
      >
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
        <RadioGroup.Item
          value="option-4"
          description="(description)"
          helperText="Helper text"
          label="Option 4"
          tooltip="Tooltip example"
        >
          children?
        </RadioGroup.Item>
      </RadioGroup>

      {/* Example 2 */}
      <RadioGroup
        disabled
        description="(disabled)"
        helperText="Helper text"
        label="Horizontal"
        orientation="horizontal"
        tooltip="Tooltip example"
      >
        <RadioGroup.Item value="option-1" label="Option 1" />
        <RadioGroup.Item value="option-2" label="Option 2" />
        <RadioGroup.Item value="option-3" label="Option 3" />
      </RadioGroup>
    </div>
  );
}
`,
  },
  "radio-group/preview": {
    component: lazy(() => import("@/examples/radio-group/preview.tsx")),
    code: `import { RadioGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <RadioGroup
        defaultValue="value-1"
        description="description"
        helperText="Helper text"
        label="Label"
        required
        tooltip="Tooltip example"
      >
        <RadioGroup.Item label="Value 1" value="value-1" />
        <RadioGroup.Item label="Value 2" value="value-2" />
        <RadioGroup.Item label="Value 3" value="value-3" />
        <RadioGroup.Item label="Value 4" value="value-4" />
      </RadioGroup>
    </div>
  );
}
`,
  },
  "switch/example-1": {
    component: lazy(() => import("@/examples/switch/example-1.tsx")),
    code: `import { Switch } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex flex-col gap-12">
      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 1 */}
        <Switch label="Label" tooltip="Tooltip example" />

        {/* Example 2s */}
        <Switch
          description="(disabled)"
          helperText="Helper text"
          label="Label"
          tooltip="Tooltip example"
          disabled
        />
      </div>

      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 3s */}
        <Switch alignLabel="start" label="Label" tooltip="Tooltip example" />

        {/* Example 4 */}
        <Switch
          alignLabel="start"
          description="(disabled)"
          helperText="Helper text"
          label="Label"
          tooltip="Tooltip example"
          disabled
        />
      </div>
    </div>
  );
}
`,
  },
  "switch/preview": {
    component: lazy(() => import("@/examples/switch/preview.tsx")),
    code: `import { Switch } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <Switch
      required
      alignLabel="end"
      description="(description)"
      disabled={false}
      helperText="Helper Text"
      label="Label"
      tooltip="Tooltip example"
    />
  );
}
`,
  },
  "switch-group/preview": {
    component: lazy(() => import("@/examples/switch-group/preview.tsx")),
    code: `import { SwitchGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <SwitchGroup
        required
        alignLabels="end"
        aria-invalid="true"
        description="(optional)"
        helperText="This field is required"
        label="Hello Label"
        tooltip="This is a custom tooltip message"
      >
        <SwitchGroup.Item disabled helperText="Disabled item with helper text" label="Item 1" />
        <SwitchGroup.Item required label="Item 2 with a Tooltip" tooltip="test" />
        <SwitchGroup.Item label="With Label" />
      </SwitchGroup>
    </div>
  );
}
`,
  },
};
