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
      <Tooltip content="Customized Avatar component" sideOffset={8}>
        <Avatar.Root className="h-16 w-16 justify-center rounded-full outline outline-offset-2 outline-wg-red">
          <Avatar.Image
            className="rounded-full"
            src="https://images.unsplash.com/photo-1560800452-f2d475982b96?auto=format&fit=crop&w=250&h=250"
          />
          <Avatar.Fallback className="rounded-full" />
          <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700/50 text-white backdrop-blur-sm">
            WG
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
  CloudIcon,
  CopyIcon,
  DotsVerticalIcon,
  DownloadIcon,
  EditIcon,
  MoonIcon,
  SendIcon,
  StarIcon,
  SunIcon,
} from "@iconicicons/react";
import { ButtonGroup, Tooltip } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* Example 1 */}
      <ButtonGroup.Root>
        <ButtonGroup.Item after={<CopyIcon />} before={<SunIcon />}>
          Button
        </ButtonGroup.Item>

        <ButtonGroup.Item after={<StarIcon />} before={<CloudIcon />}>
          Button
        </ButtonGroup.Item>

        <ButtonGroup.Item after={<SendIcon />} before={<MoonIcon />}>
          Button
        </ButtonGroup.Item>
      </ButtonGroup.Root>

      {/* Example 2 */}
      <ButtonGroup.Root>
        <ButtonGroup.Item before={<DownloadIcon />}>Download</ButtonGroup.Item>

        <ButtonGroup.Item isIconOnly>
          <DotsVerticalIcon />
        </ButtonGroup.Item>
      </ButtonGroup.Root>
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
    <ButtonGroup.Root size="sm">
      <ButtonGroup.Item>Raw</ButtonGroup.Item>

      <ButtonGroup.Item isIconOnly>
        <CopyIcon />
      </ButtonGroup.Item>

      <ButtonGroup.Item isIconOnly>
        <DownloadIcon />
      </ButtonGroup.Item>

      <Tooltip align="center" animation={true} content="Edit page" delayDuration={0} side="top">
        <ButtonGroup.Item isIconOnly>
          <EditIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <ButtonGroup.Item isIconOnly>
        <ChevronDownIcon />
      </ButtonGroup.Item>
    </ButtonGroup.Root>
  );
}
`,
  },
  "button-group/preview": {
    component: lazy(() => import("@/examples/button-group/preview.tsx")),
    code: `import { CloudIcon, CopyIcon, MoonIcon, SendIcon, StarIcon, SunIcon } from "@iconicicons/react";
import { ButtonGroup } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Item after={<CopyIcon />} before={<SunIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<StarIcon />} before={<CloudIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<SendIcon />} before={<MoonIcon />}>
        Button
      </ButtonGroup.Item>
    </ButtonGroup.Root>
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
};
