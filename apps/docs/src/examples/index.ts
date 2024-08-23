/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* -------------------------------------------------------------------------- */
/*                    GENERATED FILE, DO NOT EDIT MANUALLY!                   */
/* -------------------------------------------------------------------------- */
import { lazy, type LazyExoticComponent } from "react";

type Demo = {
  component: LazyExoticComponent<() => JSX.Element>;
  code: string;
};

export const Demos: Record<string, Demo> = {
  "alert/example-1": {
    component: lazy(() => import("@/examples/alert/example-1.tsx")),
    code: `import { Alert, Button } from "@lemonsqueezy/wedges";

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
import { Alert, Button } from "@lemonsqueezy/wedges";

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
    code: `import { Alert, Button } from "@lemonsqueezy/wedges";

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
    code: `import { Avatar } from "@lemonsqueezy/wedges";

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
    code: `import { Avatar } from "@lemonsqueezy/wedges";

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
    code: `import { Avatar, Tooltip } from "@lemonsqueezy/wedges";

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
    code: `import { Avatar } from "@lemonsqueezy/wedges";

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
    code: `import { AvatarGroup } from "@lemonsqueezy/wedges";

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
    code: `import { AvatarGroup } from "@lemonsqueezy/wedges";

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
    code: `import { AvatarGroup } from "@lemonsqueezy/wedges";

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
    code: `import { AvatarGroup } from "@lemonsqueezy/wedges";

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
        size="lg"
      />
    </div>
  );
}
`,
  },
  "badge/example-1": {
    component: lazy(() => import("@/examples/badge/example-1.tsx")),
    code: `import * as React from "react";
import {
  BookmarkIcon,
  CheckIcon,
  CloseIcon,
  EmojiHappyIcon,
  FlagIcon,
  HashtagIcon,
  HeartIcon,
  LockIcon,
  MinusIcon,
  PinIcon,
  PinTackIcon,
  PlayIcon,
  ShieldTickIcon,
  SpinnerIcon,
  UndoIcon,
  WifiIcon,
} from "@iconicicons/react";
import { Avatar, Badge } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CheckIcon />} color="green" shape="pill">
          Paid
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke>
          Active
        </Badge>

        <Badge before={<CheckIcon />} color="green" shape="pill">
          Paid
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke shape="pill">
          200
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CloseIcon />} color="red" shape="pill">
          Rejected
        </Badge>

        <Badge before={<CloseIcon />} color="red" stroke>
          Chargeback
        </Badge>

        <Badge before={<MinusIcon />} color="red" shape="pill" stroke>
          Disconnected
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CloseIcon />} shape="pill">
          Void
        </Badge>

        <Badge before={<CloseIcon />} stroke>
          Expired
        </Badge>

        <Badge before={<CloseIcon />}>Draft</Badge>

        <Badge before={<DotIcon className="text-wg-green" />} shape="pill" stroke>
          Online
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<SpinnerIcon />} color="blue" shape="pill">
          Processing
        </Badge>

        <Badge before={<FlagIcon />} color="blue" stroke>
          Flagged
        </Badge>

        <Badge color="blue" shape="pill" stroke>
          Washington D.C.
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge color="pink" shape="pill">
          Special
        </Badge>

        <Badge color="pink" stroke>
          Trial
        </Badge>

        <Badge before={<BookmarkIcon />} color="pink">
          Bookmarked
        </Badge>

        <Badge before={<HashtagIcon />} color="pink" shape="pill" stroke>
          Live
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<UndoIcon />} color="yellow" shape="pill">
          Moved
        </Badge>

        <Badge color="yellow" stroke>
          New
        </Badge>

        <Badge before={<ShieldTickIcon />} color="yellow">
          Secure
        </Badge>

        <Badge before={<LockIcon />} color="yellow" shape="pill" stroke>
          Locked
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge color="orange" shape="pill">
          Beta
        </Badge>

        <Badge before={<EmojiHappyIcon />} color="orange" stroke>
          Hello!
        </Badge>

        <Badge before={<PlayIcon />} color="orange">
          1m 30s
        </Badge>

        <Badge before={<PinIcon />} color="orange" shape="pill" stroke>
          Pinned
        </Badge>

        <Badge color="orange" shape="pill" stroke>
          4
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<HeartIcon />} color="primary" shape="pill">
          Design Systems
        </Badge>

        <Badge
          before={<Avatar size="xxs" src="https://github.com/ormanclark.png" />}
          color="primary"
          shape="pill"
        >
          @ormanclark
        </Badge>

        <Badge before={<WifiIcon />} color="primary" shape="pill">
          Free Wi-Fi
        </Badge>
      </div>
    </div>
  );
}

export function Example2() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
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

      <Badge before={<FlagIcon />} color="blue" stroke>
        Flagged
      </Badge>

      <Badge color="blue" shape="pill" stroke>
        Washington D.C.
      </Badge>

      <Badge color="red" shape="pill">
        4
      </Badge>

      <Badge before={<PinTackIcon />} color="yellow" stroke>
        Pinned
      </Badge>

      <Badge before={<PlayIcon />} color="pink" shape="pill">
        1m 30s
      </Badge>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <Badge color="green" size="sm" shape="pill" stroke>
          New York City
        </Badge>

        <Badge color="orange" size="sm" shape="pill">
          1
        </Badge>

        <Badge before={<PinTackIcon />} size="sm" color="yellow" stroke>
          Pinned
        </Badge>

        <Badge before={<PlayIcon />} size="sm" color="pink" shape="pill">
          1m 30s
        </Badge>
      </div>
    </div>
  );
}

/* ---------------------------------- Icons --------------------------------- */
const DotIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
    <svg {...props} fill="none" height="24" ref={ref} viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  )
);
`,
  },
  "badge/preview": {
    component: lazy(() => import("@/examples/badge/preview.tsx")),
    code: `import { PlusIcon } from "@iconicicons/react";
import { Badge } from "@lemonsqueezy/wedges";

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
    code: `import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export function Example() {
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
`,
  },
  "button/example-2": {
    component: lazy(() => import("@/examples/button/example-2.tsx")),
    code: `import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export function Example() {
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
`,
  },
  "button/example-3": {
    component: lazy(() => import("@/examples/button/example-3.tsx")),
    code: `import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

export function Example() {
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
`,
  },
  "button/preview": {
    component: lazy(() => import("@/examples/button/preview.tsx")),
    code: `import { PlusIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

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
import { ButtonGroup } from "@lemonsqueezy/wedges";

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
import { ButtonGroup, Tooltip } from "@lemonsqueezy/wedges";

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

      <Tooltip align="center" animation={false} content="Copy" delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <CopyIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip content="Download" delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <DownloadIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="Edit" delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <EditIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content="More" delayDuration={0}>
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
import { ButtonGroup } from "@lemonsqueezy/wedges";

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
    code: `import { Checkbox } from "@lemonsqueezy/wedges";

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
    code: `import { AvatarGroup, Checkbox } from "@lemonsqueezy/wedges";

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
    code: `import { Checkbox } from "@lemonsqueezy/wedges";

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
    code: `import { CheckboxGroup } from "@lemonsqueezy/wedges";

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
    code: `import { CheckboxGroup } from "@lemonsqueezy/wedges";

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
    <div className="mx-auto flex max-w-xs flex-col items-center rounded border border-surface-100 bg-surface p-20 leading-6">
      <span className="text-surface-500">Easy Peasy</span>
      <span className="font-medium text-surface-900">Lemon Squeezy</span>
    </div>
  );
}
`,
  },
  "dropdown-menu/example-1": {
    component: lazy(() => import("@/examples/dropdown-menu/example-1.tsx")),
    code: `import { DotsHorizontalIcon } from "@iconicicons/react";
import { Button, DropdownMenu } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button isIconOnly size="sm" variant="tertiary">
          <DotsHorizontalIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" side="top">
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>Bold</span>
            <DropdownMenu.Shortcut keys={["command"]}>B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Italic</span>
            <DropdownMenu.Shortcut keys={["command"]}>I</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Underline</span>
            <DropdownMenu.Shortcut keys={["command"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Strikethrough</span>
            <DropdownMenu.Shortcut keys={["command", "option"]}>X</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Create link</span>
            <DropdownMenu.Shortcut keys={["command"]}>K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>Bulleted list</span>
            <DropdownMenu.Shortcut keys={["shift", "command"]}>8</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Numbered list</span>
            <DropdownMenu.Shortcut keys={["command"]}>7</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
`,
  },
  "dropdown-menu/example-2": {
    component: lazy(() => import("@/examples/dropdown-menu/example-2.tsx")),
    code: `"use client";

import { useState } from "react";
import {
  BellIcon,
  BookIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  LockIcon,
  LogOutIcon,
  MoonIcon,
  SettingsIcon,
  UserIcon,
} from "@iconicicons/react";
import { Avatar, DropdownMenu, Switch } from "@lemonsqueezy/wedges";

export function Example() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <span className="group flex shrink cursor-pointer select-none items-center justify-center gap-1 rounded-lg p-1.5 px-2 text-sm text-surface-600 transition-colors duration-100 wg-antialiased hover:bg-surface dark:hover:bg-white/5">
            <Avatar
              size="xs"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
              status="green"
            />

            <span className="ms-2 flex flex-col">
              <span className="font-medium">John Doe</span>
            </span>

            <ChevronDownIcon className="trigger-icon h-5 w-5 text-surface-400" />
          </span>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content align="center" className="min-w-[140px]">
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <UserIcon />
              <span>Account</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <SettingsIcon />
              <span>Settings</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <LockIcon />
              <span>Privacy</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <BellIcon />
              <span>Notifications</span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <BookIcon />
              <span>Help Guide</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <HelpCircleIcon />
              <span>Help Center</span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Item
              onSelect={(e) => {
                e.preventDefault();
                setDarkMode(!darkMode);
              }}
            >
              <MoonIcon />
              <span>Dark Mode</span>
              <Switch checked={darkMode} className="pointer-events-none ml-2" />
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <LogOutIcon />
              <span>Log Out</span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
}
`,
  },
  "dropdown-menu/preview": {
    component: lazy(() => import("@/examples/dropdown-menu/preview.tsx")),
    code: `import { DownloadIcon, EyeOffIcon, MailIcon, PinIcon, RedoIcon } from "@iconicicons/react";
import { Button, DropdownMenu } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Item disabled>
            <RedoIcon />
            <span>Reply</span>
            <DropdownMenu.Shortcut keys={["option"]}>R</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <PinIcon />
            <span>Pin</span>
            <DropdownMenu.Shortcut keys={["option"]}>P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <DownloadIcon />
            <span>Save this message</span>
            <DropdownMenu.Shortcut keys={["command"]}>S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <EyeOffIcon />
            <span>Mark as unread</span>
            <DropdownMenu.Shortcut keys={["command", "option"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <MailIcon />
            <span>Share via email</span>
            <DropdownMenu.Shortcut keys={["command"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
`,
  },
  "input/preview": {
    component: lazy(() => import("@/examples/input/preview.tsx")),
    code: `import { Input } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto max-w-sm text-left">
      <Input
        required
        label="Label"
        description="(description)"
        placeholder="Placeholder"
        helperText="Helper text"
      />
    </div>
  );
}
`,
  },
  "kbd/example-1": {
    component: lazy(() => import("@/examples/kbd/example-1.tsx")),
    code: `import { Kbd } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="inline-flex items-center gap-4">
      <Kbd keys={["option", "command"]} size="xs">
        W
      </Kbd>

      <Kbd keys={["option", "command"]} size="sm">
        D
      </Kbd>

      <Kbd keys={["option", "command"]} size="md">
        G
      </Kbd>

      <Kbd keys={["option", "command"]} size="lg">
        S
      </Kbd>
    </div>
  );
}
`,
  },
  "kbd/preview": {
    component: lazy(() => import("@/examples/kbd/preview.tsx")),
    code: `import { Kbd } from "@lemonsqueezy/wedges";

export function Example() {
  return <Kbd keys={["option", "command"]}>K</Kbd>;
}
`,
  },
  "label/example-1": {
    component: lazy(() => import("@/examples/label/example-1.tsx")),
    code: `import { Label } from "@lemonsqueezy/wedges";

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
    code: `import { Label } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <Label description="description" required tooltip="Tooltip example">
      Label
    </Label>
  );
}
`,
  },
  "loading/example-1": {
    component: lazy(() => import("@/examples/loading/example-1.tsx")),
    code: `import { Loading } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="grid gap-y-12">
      <div className="flex items-center justify-center gap-7">
        <Loading type="spinner" size="xxl" />
        <Loading type="spinner" size="xl" />
        <Loading type="spinner" size="lg" />
        <Loading type="spinner" size="md" />
        <Loading type="spinner" size="sm" />
        <Loading type="spinner" size="xs" />
        <Loading type="spinner" size="xxs" />
      </div>

      <div className="flex items-center justify-center gap-7">
        <Loading type="line" size="xxs" />
        <Loading type="line" size="xs" />
        <Loading type="line" size="sm" />
        <Loading type="line" size="md" />
        <Loading type="line" size="lg" />
        <Loading type="line" size="xl" />
        <Loading type="line" size="xxl" />
      </div>

      <div className="flex items-center justify-center gap-7">
        <Loading type="dots" size="xxl" />
        <Loading type="dots" size="xl" />
        <Loading type="dots" size="lg" />
        <Loading type="dots" size="md" />
        <Loading type="dots" size="sm" />
        <Loading type="dots" size="xs" />
        <Loading type="dots" size="xxs" />
      </div>
    </div>
  );
}
`,
  },
  "loading/example-2": {
    component: lazy(() => import("@/examples/loading/example-2.tsx")),
    code: `import { Loading } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="flex items-center justify-center gap-10">
      <Loading type="spinner" color="secondary" size="xs" />
      <Loading type="line" className="text-wg-red" size="sm" />
      <Loading type="dots" className="text-wg-green" size="md" />
    </div>
  );
}
`,
  },
  "loading/preview": {
    component: lazy(() => import("@/examples/loading/preview.tsx")),
    code: `import { Loading } from "@lemonsqueezy/wedges";

export function Example() {
  return <Loading type="line" size="md" />;
}
`,
  },
  "popover/example-1": {
    component: lazy(() => import("@/examples/popover/example-1.tsx")),
    code: `import * as React from "react";
import { ChevronDownIcon, CopyIcon, DownloadIcon } from "@iconicicons/react";
import { ButtonGroup, CheckboxGroup, Popover } from "@lemonsqueezy/wedges";

export function Example() {
  const wrapper = React.useRef(null);
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setContainer(wrapper.current);
  }, []);

  return (
    <div id="popover-example-1" ref={wrapper}>
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

          {container ? (
            <Popover.Portal container={container}>
              <Popover.Content align="end" className="min-w-[130px]">
                <CheckboxGroup label="Group Label">
                  <CheckboxGroup.Item label="Option 1" />
                  <CheckboxGroup.Item label="Option 2" />
                  <CheckboxGroup.Item label="Option 3" />
                  <CheckboxGroup.Item label="Option 4" />
                </CheckboxGroup>
              </Popover.Content>
            </Popover.Portal>
          ) : null}
        </Popover>
      </ButtonGroup>
    </div>
  );
}
`,
  },
  "popover/preview": {
    component: lazy(() => import("@/examples/popover/preview.tsx")),
    code: `import { ChevronDownIcon } from "@iconicicons/react";
import { Button, CheckboxGroup, Popover } from "@lemonsqueezy/wedges";

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
  "progress-bar/example-1": {
    component: lazy(() => import("@/examples/progress-bar/example-1.tsx")),
    code: `import { SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="inline-flex w-full max-w-[400px] flex-col gap-y-12">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText="Helper text"
        indicator="50%"
        label="Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />

      <ProgressBar helperText="Helper text" value={50} />

      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        variant="inline"
        indicator="50%"
        label="Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />
    </div>
  );
}
`,
  },
  "progress-bar/example-2": {
    component: lazy(() => import("@/examples/progress-bar/example-2.tsx")),
    code: `import { CheckCircleIcon, CloseCircleIcon, CloseIcon, SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="inline-flex w-full max-w-[400px] flex-col gap-y-12">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText="27MB of 60MB"
        indicator="50%"
        label="Uploading..."
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />

      <ProgressBar
        afterIndicator={<CheckCircleIcon className="text-wg-green" />}
        color="green"
        helperText="60MB of 60MB"
        indicator="100%"
        label="Uploading Complete"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={100}
      />

      <ProgressBar
        afterIndicator={<CloseCircleIcon className="text-wg-red" />}
        color="red"
        helperText={<span className="text-destructive">Oops, something went wrong</span>}
        label="Uploading Failed"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={100}
      />

      <ProgressBar
        color="green"
        indicator="368"
        label="Class A"
        max={500}
        value={368}
        variant="inline"
      />

      <ProgressBar
        color="orange"
        indicator="211"
        label="Class B"
        max={500}
        value={211}
        variant="inline"
      />

      <ProgressBar
        color="red"
        indicator="96"
        label="Class C"
        max={500}
        value={96}
        variant="inline"
      />

      <ProgressBar
        afterIndicator={<CloseIcon />}
        color="secondary"
        description="(23.6MB)"
        indicator={<span className="text-surface-500">50% (9 sec left)</span>}
        label="design system.fig"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />

      <ProgressBar indicator="70%" label="Please wait..." value={70} color="secondary" />

      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        indicator="50%"
        label="Progress"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
        variant="inline"
      />

      <ProgressBar indicator="50% Complete" value={50} variant="inline" color="blue" />

      <ProgressBar
        afterIndicator={<CloseIcon />}
        description="35%"
        value={35}
        variant="inline"
        color="yellow"
      />

      <ProgressBar value={70} color="pink" helperText="(650MB/1.12GB) · 17 seconds remaining" />
    </div>
  );
}
`,
  },
  "progress-bar/preview": {
    component: lazy(() => import("@/examples/progress-bar/preview.tsx")),
    code: `import * as React from "react";
import { SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";

export function Example() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value + 1) % 101);
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="inline-block w-full max-w-[400px]">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText="Helper text"
        indicator={value + "%"}
        label="Label"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={value}
        max={100}
      />
    </div>
  );
}
`,
  },
  "progress-circle/example-1": {
    component: lazy(() => import("@/examples/progress-circle/example-1.tsx")),
    code: `import { ProgressCircle } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        <ProgressCircle value={75} size="xs" />
        <ProgressCircle value={75} size="sm" />
        <ProgressCircle value={75} size="md" />
        <ProgressCircle value={75} size="lg" />
        <ProgressCircle value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="green" value={75} size="xl" />
        <ProgressCircle color="green" value={75} size="lg" />
        <ProgressCircle color="green" value={75} size="md" />
        <ProgressCircle color="green" value={75} size="sm" />
        <ProgressCircle color="green" value={75} size="xs" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="blue" value={75} size="xs" />
        <ProgressCircle color="blue" value={75} size="sm" />
        <ProgressCircle color="blue" value={75} size="md" />
        <ProgressCircle color="blue" value={75} size="lg" />
        <ProgressCircle color="blue" value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="orange" value={75} size="xl" />
        <ProgressCircle color="orange" value={75} size="lg" />
        <ProgressCircle color="orange" value={75} size="md" />
        <ProgressCircle color="orange" value={75} size="sm" />
        <ProgressCircle color="orange" value={75} size="xs" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="pink" value={75} size="xs" />
        <ProgressCircle color="pink" value={75} size="sm" />
        <ProgressCircle color="pink" value={75} size="md" />
        <ProgressCircle color="pink" value={75} size="lg" />
        <ProgressCircle color="pink" value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="yellow" value={75} size="xl" />
        <ProgressCircle color="yellow" value={75} size="lg" />
        <ProgressCircle color="yellow" value={75} size="md" />
        <ProgressCircle color="yellow" value={75} size="sm" />
        <ProgressCircle color="yellow" value={75} size="xs" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="red" value={75} size="xs" />
        <ProgressCircle color="red" value={75} size="sm" />
        <ProgressCircle color="red" value={75} size="md" />
        <ProgressCircle color="red" value={75} size="lg" />
        <ProgressCircle color="red" value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="secondary" value={75} size="xl" />
        <ProgressCircle color="secondary" value={75} size="lg" />
        <ProgressCircle color="secondary" value={75} size="md" />
        <ProgressCircle color="secondary" value={75} size="sm" />
        <ProgressCircle color="secondary" value={75} size="xs" />
      </div>
    </div>
  );
}
`,
  },
  "progress-circle/preview": {
    component: lazy(() => import("@/examples/progress-circle/preview.tsx")),
    code: `import * as React from "react";
import { ProgressCircle } from "@lemonsqueezy/wedges";

export function Example() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value + 1) % 101);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block">
      <ProgressCircle color={value < 33 ? "red" : value < 66 ? "orange" : "green"} value={value} />
    </div>
  );
}
`,
  },
  "radio-group/example-1": {
    component: lazy(() => import("@/examples/radio-group/example-1.tsx")),
    code: `import { RadioGroup } from "@lemonsqueezy/wedges";

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
    code: `import { RadioGroup } from "@lemonsqueezy/wedges";

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
  "select/example-1": {
    component: lazy(() => import("@/examples/select/example-1.tsx")),
    code: `import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@lemonsqueezy/wedges";

export function Example() {
  const wrapper = React.useRef<HTMLDivElement>(null);

  const DotIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );

  return (
    <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
      <Select label="Project status" tooltip="Tooltip example" required>
        <SelectTrigger className="min-w-[192px]">
          <SelectValue placeholder="Select status" />
          <SelectIcon />
        </SelectTrigger>

        <SelectPortal container={wrapper.current}>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="pending">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-red" />
                  <span>Pending</span>
                </div>
              </SelectItem>

              <SelectItem value="in-progress">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-yellow" />
                  <span>In Progress</span>
                </div>
              </SelectItem>

              <SelectItem value="in-review">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-blue" />
                  <span>In Review</span>
                </div>
              </SelectItem>

              <SelectItem value="complete">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-green" />
                  <span>Complete</span>
                </div>
              </SelectItem>

              <SelectItem value="archived">
                <div className="flex items-center gap-1">
                  <DotIcon className="-ms-1 size-6 text-wg-gray-300" />
                  <span>Archived</span>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
`,
  },
  "select/example-2": {
    component: lazy(() => import("@/examples/select/example-2.tsx")),
    code: `import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectSeparator,
  SelectTrigger,
} from "@lemonsqueezy/wedges";

export function Example() {
  const wrapper = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
      <Select
        required
        label="Food"
        defaultValue="potato"
        tooltip="Tooltip example"
        helperText="Helper text"
      >
        <SelectTrigger className="min-w-[192px] data-[state=open]:border-transparent data-[state=open]:outline-none" />

        <SelectPortal container={wrapper.current}>
          <SelectContent className="max-h-[100px]" position="item-aligned">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Veggies</SelectLabel>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="potato">Potato</SelectItem>
              <SelectItem value="tomato">Tomato</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Meat</SelectLabel>
              <SelectItem value="beef">Beef</SelectItem>
              <SelectItem value="chicken">Chicken</SelectItem>
              <SelectItem value="pork">Pork</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
`,
  },
  "select/preview": {
    component: lazy(() => import("@/examples/select/preview.tsx")),
    code: `import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@lemonsqueezy/wedges";

export function Example() {
  const wrapper = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
      <Select label="Project status" tooltip="Tooltip example" required>
        <SelectTrigger className="min-w-[192px]">
          <SelectValue placeholder="Select status" />
          <SelectIcon />
        </SelectTrigger>

        <SelectPortal container={wrapper.current}>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="due-this-week">Due this week</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
`,
  },
  "slider/example-1": {
    component: lazy(() => import("@/examples/slider/example-1.tsx")),
    code: `import { Slider } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-row items-center justify-center gap-12 text-surface-300">
      <Slider defaultValue={[25]} showTooltip="hover" orientation="vertical" />
      <Slider defaultValue={[50]} showTooltip="hover" orientation="vertical" />
      <Slider defaultValue={[75]} showTooltip="hover" orientation="vertical" />
    </div>
  );
}
`,
  },
  "slider/example-2": {
    component: lazy(() => import("@/examples/slider/example-2.tsx")),
    code: `import { Slider } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col items-stretch gap-12">
      <Slider
        after="100"
        before="0"
        content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        defaultValue={[50]}
        description="(description)"
        helperText="Helper text"
        label="Label"
        disabled
      />
    </div>
  );
}
`,
  },
  "slider/example-3": {
    component: lazy(() => import("@/examples/slider/example-3.tsx")),
    code: `"use client";

import { useState } from "react";
import { Slider } from "@lemonsqueezy/wedges";

export function Example() {
  const [value, setValue] = useState([2500, 5000]);

  return (
    <Slider
      after="$10,000"
      before="$1,000"
      defaultValue={[2500, 5000]}
      label="Price Range"
      max={10000}
      min={1000}
      showTooltip="hover"
      onValueChange={(val) => setValue(val)}
      helperText={
        "Selected range: $" +
        value[0]?.toLocaleString("en-us") +
        " - $" +
        value[1]?.toLocaleString("en-us")
      }
      renderTooltip={(val) => {
        if (val) {
          return "$" + val.toLocaleString("en-US");
        }

        return "";
      }}
      step={100}
    />
  );
}
`,
  },
  "slider/example-4": {
    component: lazy(() => import("@/examples/slider/example-4.tsx")),
    code: `"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "@iconicicons/react";
import { Button, Slider } from "@lemonsqueezy/wedges";

export function Example() {
  const [value, setValue] = useState<number[]>([24]);

  const decrementValue = () => {
    setValue((currentValue) => {
      if (currentValue && currentValue.length > 0) {
        return [Math.max(currentValue[0]! - 2, 12)];
      }
      return currentValue;
    });
  };

  const incrementValue = () => {
    setValue((currentValue) => {
      if (currentValue && currentValue.length > 0) {
        return [Math.min(currentValue[0]! + 2, 48)];
      }
      return currentValue;
    });
  };

  const renderHelperText = () => {
    if (value && Array.isArray(value) && value.length > 0) {
      const firstValue = value[0]!;
      return firstValue < 24 ? "Small" : firstValue > 32 ? "Large" : "Medium";
    }

    return "";
  };

  return (
    <Slider
      after={
        <Button size="sm" onClick={incrementValue} isIconOnly variant="transparent">
          <PlusIcon />
        </Button>
      }
      before={
        <Button size="sm" onClick={decrementValue} isIconOnly variant="transparent">
          <MinusIcon />
        </Button>
      }
      onValueChange={(val) => {
        setValue(val);
      }}
      defaultValue={value}
      helperText={renderHelperText()}
      label="Font Size"
      max={48}
      min={12}
      renderTooltip={() => value.toString() + "px"}
      showTooltip="hover"
      step={2}
      value={value}
    />
  );
}
`,
  },
  "slider/example-5": {
    component: lazy(() => import("@/examples/slider/example-5.tsx")),
    code: `import { EmojiHappyIcon, EmojiSadIcon, MoonIcon, StarIcon, SunIcon } from "@iconicicons/react";
import { Slider } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col gap-y-20">
      <Slider
        defaultValue={[5]}
        description="(1-10)"
        helperText="How happy are you with the level of service?"
        label="Rating"
        max={10}
        min={1}
        showTooltip="hover"
        before={
          <div className="flex items-center gap-4">
            <EmojiSadIcon className="size-6 opacity-50" />
            <span>1</span>
          </div>
        }
        after={
          <div className="flex items-center gap-4">
            <span>10</span>
            <EmojiHappyIcon className="size-6 opacity-50" />
          </div>
        }
      />

      <Slider
        after={<SunIcon className="size-6 opacity-50" />}
        before={<MoonIcon className="size-6 opacity-50" />}
        defaultValue={[50]}
        label="Brightness"
        max={100}
        min={1}
        showTooltip="always"
        renderTooltip={(val) =>
          val <= 25 ? "Dark" : val <= 50 ? "Dim" : val <= 75 ? "Bright" : "Very Bright"
        }
      />

      <Slider
        after="$10,000"
        before="$1,000"
        defaultValue={[2500, 5000]}
        label="Price Range"
        max={10000}
        min={1000}
        renderTooltip={(val) => "$" + val.toLocaleString("en-US")}
        showTooltip="hover"
        step={100}
      />

      <Slider
        after="10"
        before={<StarIcon className="size-6 opacity-50" />}
        defaultValue={[6]}
        max={10}
        min={1}
      />

      <Slider defaultValue={[50]} />
    </div>
  );
}
`,
  },
  "slider/preview": {
    component: lazy(() => import("@/examples/slider/preview.tsx")),
    code: `import { MinusIcon, PlusIcon } from "@iconicicons/react";
import { Slider } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col gap-y-12 text-surface-300">
      <Slider
        after={<PlusIcon className="size-6 text-surface-300 dark:text-gray-500" />}
        before={<MinusIcon className="size-6 text-surface-300 dark:text-gray-500" />}
        content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        defaultValue={[50]}
        description="(description)"
        helperText="Helper text"
        label="Label"
      />
    </div>
  );
}
`,
  },
  "switch/example-1": {
    component: lazy(() => import("@/examples/switch/example-1.tsx")),
    code: `import { Switch } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="flex flex-col gap-12">
      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 1 */}
        <Switch label="Label" tooltip="Tooltip example" />

        {/* Example 2 */}
        <Switch
          description="(disabled)"
          helperText="Helper text"
          label="Label"
          tooltip="Tooltip example"
          disabled
        />
      </div>

      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 3 */}
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
    code: `import { Switch } from "@lemonsqueezy/wedges";

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
  "switch-group/example-1": {
    component: lazy(() => import("@/examples/switch-group/example-1.tsx")),
    code: `import { SwitchGroup } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="mx-auto flex w-fit flex-col gap-8 text-left">
      {/* Example 1 */}
      <SwitchGroup
        alignLabels="end"
        description="(description)"
        helperText="Helper text"
        label="Group Label"
        tooltip="Tooltip example"
      >
        <SwitchGroup.Item defaultChecked label="Option 1" />
        <SwitchGroup.Item disabled label="Option 2" />
        <SwitchGroup.Item label="Option 3" />
        <SwitchGroup.Item
          description="(description)"
          helperText="Helper text"
          label="Option 4"
          tooltip="Tooltip example"
        />
      </SwitchGroup>

      {/* Example 2 */}
      <SwitchGroup
        alignLabels="start"
        description="(description)"
        helperText="Helper text"
        label="Group Label"
        tooltip="Tooltip example"
      >
        <SwitchGroup.Item defaultChecked label="Option 1" />
        <SwitchGroup.Item disabled label="Option 2" />
        <SwitchGroup.Item label="Option 3" />
        <SwitchGroup.Item
          description="(description)"
          helperText="Helper text"
          label="Option 4"
          tooltip="Tooltip example"
        />
      </SwitchGroup>
    </div>
  );
}
`,
  },
  "switch-group/preview": {
    component: lazy(() => import("@/examples/switch-group/preview.tsx")),
    code: `import { SwitchGroup } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <SwitchGroup
        alignLabels="end"
        description="(description)"
        helperText="Helper text"
        label="Group Label"
        tooltip="Tooltip example"
      >
        <SwitchGroup.Item label="Option 1" />
        <SwitchGroup.Item label="Option 2" />
        <SwitchGroup.Item label="Option 3" />
        <SwitchGroup.Item label="Option 4" />
      </SwitchGroup>
    </div>
  );
}
`,
  },
  "tabs/example-1": {
    component: lazy(() => import("@/examples/tabs/example-1.tsx")),
    code: `import { BoxIcon, ClockIcon, SpinnerIcon } from "@iconicicons/react";
import { Badge, Tabs } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto flex w-fit max-w-full flex-col gap-10 overflow-scroll p-2 text-left">
      {/* Example 1 */}
      <Tabs variant="underlined" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                24
              </Badge>
            }
            value="actions"
            before={<SpinnerIcon />}
          >
            In progress
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                19
              </Badge>
            }
            before={<BoxIcon className="text-wg-green" />}
            value="Shipped"
          >
            Shipped
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                3
              </Badge>
            }
            before={<ClockIcon className="text-wg-red" />}
            value="delayed"
          >
            Security
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>

      {/* Example 2 */}
      <Tabs variant="contained-bottom" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                24
              </Badge>
            }
            value="actions"
            before={<SpinnerIcon />}
          >
            In progress
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                19
              </Badge>
            }
            before={<BoxIcon className="text-wg-green" />}
            value="Shipped"
          >
            Shipped
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                3
              </Badge>
            }
            before={<ClockIcon className="text-wg-red" />}
            value="delayed"
          >
            Security
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>

      {/* Example 3 */}
      <Tabs variant="fill" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                24
              </Badge>
            }
            value="actions"
            before={<SpinnerIcon />}
          >
            In progress
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                19
              </Badge>
            }
            before={<BoxIcon className="text-wg-green" />}
            value="Shipped"
          >
            Shipped
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                3
              </Badge>
            }
            before={<ClockIcon className="text-wg-red" />}
            value="delayed"
          >
            Security
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>

      {/* Example 4 */}
      <Tabs variant="contained-top" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                24
              </Badge>
            }
            value="actions"
            before={<SpinnerIcon />}
          >
            In progress
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                19
              </Badge>
            }
            before={<BoxIcon className="text-wg-green" />}
            value="Shipped"
          >
            Shipped
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge stroke size="sm" shape="pill">
                3
              </Badge>
            }
            before={<ClockIcon className="text-wg-red" />}
            value="delayed"
          >
            Security
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
`,
  },
  "tabs/example-2": {
    component: lazy(() => import("@/examples/tabs/example-2.tsx")),
    code: `import { Badge, Tabs, Tooltip } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto flex w-fit max-w-full flex-col gap-10 overflow-scroll p-2 text-left">
      {/* Example 1 */}
      <Tabs variant="contained-top" defaultValue="examples">
        <Tabs.List>
          <Tabs.Trigger value="examples">Examples</Tabs.Trigger>
          <Tabs.Trigger
            value="usage"
            after={
              <Badge size="sm" color="yellow">
                New
              </Badge>
            }
          >
            Usage
          </Tabs.Trigger>
          <Tooltip content="Tooltip example">
            <Tabs.Trigger value="playground" disabled after={<Badge size="sm">Pro</Badge>}>
              Playground
            </Tabs.Trigger>
          </Tooltip>
        </Tabs.List>
        {/* Add Tabs.Content for each trigger/tab */}
      </Tabs>
    </div>
  );
}
`,
  },
  "tabs/example-3": {
    component: lazy(() => import("@/examples/tabs/example-3.tsx")),
    code: `import * as React from "react";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "@iconicicons/react";
import { Badge, Tabs } from "@lemonsqueezy/wedges";

function IconUS() {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.065 12L22.5 12C22.5 11.0974 22.3794 10.223 22.1552 9.39129H12.065V12Z"
        fill="#D80027"
      />
      <path
        d="M12.065 6.78211H21.032C20.4198 5.7832 19.6371 4.90027 18.7246 4.1734H12.065V6.78211Z"
        fill="#D80027"
      />
      <path
        d="M12.5 22C14.8535 22 17.0164 21.1866 18.7246 19.8261H6.27492C7.98312 21.1866 10.1465 22 12.5 22Z"
        fill="#D80027"
      />
      <path
        d="M3.96755 17.2166H21.0321C21.5235 16.4147 21.9047 15.5381 22.1553 14.6079H2.8443C3.09497 15.5381 3.4761 16.4147 3.96755 17.2166Z"
        fill="#D80027"
      />
      <path
        d="M7.13219 3.56164H8.04348L7.19582 4.17746L7.51961 5.17391L6.67199 4.55809L5.82437 5.17391L6.10406 4.31309C5.35773 4.93477 4.70359 5.66313 4.16453 6.47469H4.45652L3.91695 6.86668C3.83289 7.00691 3.75227 7.14938 3.675 7.29395L3.93266 8.08695L3.45195 7.7377C3.33246 7.99086 3.22316 8.24973 3.12492 8.51398L3.40879 9.38773H4.45652L3.60887 10.0036L3.93266 11L3.08504 10.3842L2.5773 10.7531C2.52648 11.1616 2.5 11.5777 2.5 12H12.5C12.5 6.47719 12.5 5.82609 12.5 2C10.5245 2 8.68301 2.57305 7.13219 3.56164ZM7.51961 11L6.67199 10.3842L5.82437 11L6.14816 10.0036L5.30051 9.38773H6.34824L6.67199 8.39129L6.99574 9.38773H8.04348L7.19582 10.0036L7.51961 11ZM7.19582 7.09051L7.51961 8.08695L6.67199 7.47113L5.82437 8.08695L6.14816 7.09051L5.30051 6.47469H6.34824L6.67199 5.47824L6.99574 6.47469H8.04348L7.19582 7.09051ZM11.1066 11L10.2589 10.3842L9.41133 11L9.73512 10.0036L8.88746 9.38773H9.9352L10.2589 8.39129L10.5827 9.38773H11.6304L10.7828 10.0036L11.1066 11ZM10.7828 7.09051L11.1066 8.08695L10.2589 7.47113L9.41133 8.08695L9.73512 7.09051L8.88746 6.47469H9.9352L10.2589 5.47824L10.5827 6.47469H11.6304L10.7828 7.09051ZM10.7828 4.17746L11.1066 5.17391L10.2589 4.55809L9.41133 5.17391L9.73512 4.17746L8.88746 3.56164H9.9352L10.2589 2.5652L10.5827 3.56164H11.6304L10.7828 4.17746Z"
        fill="#0052B4"
      />
    </svg>
  );
}

function IconUK() {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.56724 5.91083C3.78173 6.93282 3.18942 8.11075 2.84454 9.3904H8.0468L4.56724 5.91083Z"
        fill="#0052B4"
      />
      <path
        d="M22.1558 9.39052C21.811 8.11091 21.2186 6.93298 20.4331 5.91099L16.9537 9.39052H22.1558Z"
        fill="#0052B4"
      />
      <path
        d="M2.84454 14.6085C3.18946 15.8881 3.78177 17.0661 4.56724 18.088L8.04669 14.6085H2.84454Z"
        fill="#0052B4"
      />
      <path
        d="M18.588 4.06648C17.566 3.28097 16.3881 2.68867 15.1084 2.34374V7.54597L18.588 4.06648Z"
        fill="#0052B4"
      />
      <path
        d="M6.41163 19.9314C7.43362 20.7169 8.61155 21.3092 9.89116 21.6541V16.452L6.41163 19.9314Z"
        fill="#0052B4"
      />
      <path
        d="M9.89112 2.34374C8.61151 2.68866 7.43358 3.28097 6.41163 4.06644L9.89112 7.54593V2.34374Z"
        fill="#0052B4"
      />
      <path
        d="M15.1084 21.6541C16.388 21.3092 17.566 20.7169 18.5879 19.9314L15.1084 16.452V21.6541Z"
        fill="#0052B4"
      />
      <path
        d="M16.9537 14.6085L20.4331 18.088C21.2186 17.0661 21.811 15.8881 22.1558 14.6085H16.9537Z"
        fill="#0052B4"
      />
      <path
        d="M22.4154 10.6957H13.8044L13.8044 2.08465C13.3774 2.02906 12.9421 2 12.5 2C12.0579 2 11.6226 2.02906 11.1957 2.08465V10.6956L2.58465 10.6956C2.52906 11.1226 2.5 11.5579 2.5 12C2.5 12.4421 2.52906 12.8774 2.58465 13.3043H11.1956L11.1956 21.9154C11.6226 21.9709 12.0579 22 12.5 22C12.9421 22 13.3774 21.971 13.8043 21.9154V13.3044L22.4154 13.3044C22.4709 12.8774 22.5 12.4421 22.5 12C22.5 11.5579 22.4709 11.1226 22.4154 10.6957Z"
        fill="#D80027"
      />
      <path
        d="M15.1087 14.6094L19.571 19.0717C19.7763 18.8666 19.9721 18.6521 20.1588 18.4297L16.3385 14.6093L15.1087 14.6094Z"
        fill="#D80027"
      />
      <path
        d="M9.89127 14.6093L5.42889 19.0716C5.63405 19.2769 5.84854 19.4727 6.07088 19.6595L9.89127 15.839V14.6093Z"
        fill="#D80027"
      />
      <path
        d="M9.89115 9.39093L5.4288 4.92847C5.22357 5.13363 5.02779 5.34812 4.84099 5.57047L8.66142 9.3909L9.89115 9.39093Z"
        fill="#D80027"
      />
      <path
        d="M15.1087 9.39182L19.5711 4.9294C19.3659 4.72417 19.1514 4.52839 18.9291 4.34163L15.1087 8.16206V9.39182Z"
        fill="#D80027"
      />
    </svg>
  );
}

export function Example() {
  return (
    <div className="grid gap-10">
      <Tabs variant="underlined" defaultValue="united-states">
        <Tabs.List stretch>
          <Tabs.Trigger
            after={
              <Badge color="green" size="sm" shape="pill" before={<ArrowUpRightIcon />}>
                99
              </Badge>
            }
            before={<IconUS />}
            value="united-states"
          >
            United States
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge before={<ArrowDownRightIcon />} color="red" shape="pill" size="sm">
                13
              </Badge>
            }
            before={<IconUK />}
            value="united-kingdom"
          >
            United Kingdom
          </Tabs.Trigger>
        </Tabs.List>

        {/* Add Tabs.Content for each trigger/tab */}
      </Tabs>

      {/* Example 2 */}
      <Tabs variant="contained-bottom" defaultValue="united-states">
        <Tabs.List stretch>
          <Tabs.Trigger
            after={
              <Badge color="green" size="sm" shape="pill" before={<ArrowUpRightIcon />}>
                99
              </Badge>
            }
            before={<IconUS />}
            value="united-states"
          >
            United States
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge before={<ArrowDownRightIcon />} color="red" shape="pill" size="sm">
                13
              </Badge>
            }
            before={<IconUK />}
            value="united-kingdom"
          >
            United Kingdom
          </Tabs.Trigger>
        </Tabs.List>

        {/* Add Tabs.Content for each trigger/tab */}
      </Tabs>

      {/* Example 3 */}
      <Tabs variant="fill" defaultValue="united-states">
        <Tabs.List stretch>
          <Tabs.Trigger
            after={
              <Badge color="green" size="sm" shape="pill" before={<ArrowUpRightIcon />}>
                99
              </Badge>
            }
            before={<IconUS />}
            value="united-states"
          >
            United States
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge before={<ArrowDownRightIcon />} color="red" shape="pill" size="sm">
                13
              </Badge>
            }
            before={<IconUK />}
            value="united-kingdom"
          >
            United Kingdom
          </Tabs.Trigger>
        </Tabs.List>

        {/* Add Tabs.Content for each trigger/tab */}
      </Tabs>

      {/* Example 4 */}
      <Tabs variant="contained-top" defaultValue="united-states">
        <Tabs.List stretch>
          <Tabs.Trigger
            after={
              <Badge color="green" size="sm" shape="pill" before={<ArrowUpRightIcon />}>
                99
              </Badge>
            }
            before={<IconUS />}
            value="united-states"
          >
            United States
          </Tabs.Trigger>

          <Tabs.Trigger
            after={
              <Badge before={<ArrowDownRightIcon />} color="red" shape="pill" size="sm">
                13
              </Badge>
            }
            before={<IconUK />}
            value="united-kingdom"
          >
            United Kingdom
          </Tabs.Trigger>
        </Tabs.List>

        {/* Add Tabs.Content for each trigger/tab */}
      </Tabs>
    </div>
  );
}
`,
  },
  "tabs/preview": {
    component: lazy(() => import("@/examples/tabs/preview.tsx")),
    code: `import { BookIcon, LockIcon, VideoIcon } from "@iconicicons/react";
import { Tabs } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <Tabs variant="contained-bottom" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger before={<VideoIcon />} value="actions">
            Actions
          </Tabs.Trigger>

          <Tabs.Trigger before={<BookIcon />} value="wiki">
            Wiki
          </Tabs.Trigger>

          <Tabs.Trigger before={<LockIcon />} value="security">
            Security
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="actions">Actions tab content</Tabs.Content>
        <Tabs.Content value="wiki">Wiki tab content</Tabs.Content>
        <Tabs.Content value="security">Security tab content</Tabs.Content>
      </Tabs>
    </div>
  );
}
`,
  },
  "tag/example-1": {
    component: lazy(() => import("@/examples/tag/example-1.tsx")),
    code: `import * as React from "react";
import { BookIcon, FileIcon, FolderIcon, TrashIcon } from "@iconicicons/react";
import { Avatar, Tag } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag closable>Pineapple</Tag>

        <Tag color="yellow" closable stroke>
          Lemons
        </Tag>

        <Tag closable>Watermelon</Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag before={<DotIcon />} color="green">
          Online
        </Tag>

        <Tag before={<DotIcon />} color="red">
          Offline
        </Tag>

        <Tag before={<DotIcon className="text-surface-300" />}>Suspended</Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag
          avatar={<Avatar src="https://github.com/ormanclark.png" />}
          closable
          shape="pill"
          stroke
        >
          @ormanclark
        </Tag>

        <Tag
          avatar={<Avatar src="https://github.com/lmsqueezy.png" />}
          color="orange"
          shape="pill"
          stroke
        >
          Lemon Squeezy
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag before={<FolderIcon />} color="blue" closable>
          Folders
        </Tag>

        <Tag before={<FileIcon />} color="blue">
          Files
        </Tag>

        <Tag before={<BookIcon />} color="blue" closable>
          Guides
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag color="yellow" closable stroke>
          New
        </Tag>

        <Tag color="orange" closable stroke>
          Pending
        </Tag>

        <Tag color="green" closable stroke>
          Active
        </Tag>

        <Tag color="red" closable stroke>
          Closed
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag color="primary" closable shape="pill">
          Free parking
        </Tag>

        <Tag color="primary" closable shape="pill">
          Pool
        </Tag>

        <Tag color="primary" closable shape="pill">
          Free WiFi
        </Tag>

        <Tag color="primary" closable shape="pill">
          Gym
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag before={<UKFlagIcon />} closable>
          United Kingdom
        </Tag>

        <Tag before={<USFlagIcon />} closable>
          United States
        </Tag>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          ux
        </Tag>

        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          ui
        </Tag>

        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          motion
        </Tag>

        <Tag
          closable
          className="uppercase"
          closeIcon={<TrashIcon className="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />}
          color="orange"
          shape="pill"
          size="sm"
          stroke
        >
          graphics
        </Tag>
      </div>
    </div>
  );
}

/* ---------------------------------- Icons --------------------------------- */
const USFlagIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props} ref={ref}>
        <path
          d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.065 12L22.5 12C22.5 11.0974 22.3794 10.223 22.1552 9.39129H12.065V12Z"
          fill="#D80027"
        />
        <path
          d="M12.065 6.78211H21.032C20.4198 5.7832 19.6371 4.90027 18.7246 4.1734H12.065V6.78211Z"
          fill="#D80027"
        />
        <path
          d="M12.5 22C14.8535 22 17.0164 21.1866 18.7246 19.8261H6.27492C7.98312 21.1866 10.1465 22 12.5 22Z"
          fill="#D80027"
        />
        <path
          d="M3.96755 17.2166H21.0321C21.5235 16.4147 21.9047 15.5381 22.1553 14.6079H2.8443C3.09497 15.5381 3.4761 16.4147 3.96755 17.2166Z"
          fill="#D80027"
        />
        <path
          d="M7.13219 3.56164H8.04348L7.19582 4.17746L7.51961 5.17391L6.67199 4.55809L5.82437 5.17391L6.10406 4.31309C5.35773 4.93477 4.70359 5.66313 4.16453 6.47469H4.45652L3.91695 6.86668C3.83289 7.00691 3.75227 7.14938 3.675 7.29395L3.93266 8.08695L3.45195 7.7377C3.33246 7.99086 3.22316 8.24973 3.12492 8.51398L3.40879 9.38773H4.45652L3.60887 10.0036L3.93266 11L3.08504 10.3842L2.5773 10.7531C2.52648 11.1616 2.5 11.5777 2.5 12H12.5C12.5 6.47719 12.5 5.82609 12.5 2C10.5245 2 8.68301 2.57305 7.13219 3.56164ZM7.51961 11L6.67199 10.3842L5.82437 11L6.14816 10.0036L5.30051 9.38773H6.34824L6.67199 8.39129L6.99574 9.38773H8.04348L7.19582 10.0036L7.51961 11ZM7.19582 7.09051L7.51961 8.08695L6.67199 7.47113L5.82437 8.08695L6.14816 7.09051L5.30051 6.47469H6.34824L6.67199 5.47824L6.99574 6.47469H8.04348L7.19582 7.09051ZM11.1066 11L10.2589 10.3842L9.41133 11L9.73512 10.0036L8.88746 9.38773H9.9352L10.2589 8.39129L10.5827 9.38773H11.6304L10.7828 10.0036L11.1066 11ZM10.7828 7.09051L11.1066 8.08695L10.2589 7.47113L9.41133 8.08695L9.73512 7.09051L8.88746 6.47469H9.9352L10.2589 5.47824L10.5827 6.47469H11.6304L10.7828 7.09051ZM10.7828 4.17746L11.1066 5.17391L10.2589 4.55809L9.41133 5.17391L9.73512 4.17746L8.88746 3.56164H9.9352L10.2589 2.5652L10.5827 3.56164H11.6304L10.7828 4.17746Z"
          fill="#0052B4"
        />
      </svg>
    );
  }
);

const UKFlagIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props} ref={ref}>
        <path
          d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
          fill="#F0F0F0"
        />
        <path
          d="M4.56724 5.91083C3.78173 6.93282 3.18942 8.11075 2.84454 9.3904H8.0468L4.56724 5.91083Z"
          fill="#0052B4"
        />
        <path
          d="M22.1558 9.39052C21.811 8.11091 21.2186 6.93298 20.4331 5.91099L16.9537 9.39052H22.1558Z"
          fill="#0052B4"
        />
        <path
          d="M2.84454 14.6085C3.18946 15.8881 3.78177 17.0661 4.56724 18.088L8.04669 14.6085H2.84454Z"
          fill="#0052B4"
        />
        <path
          d="M18.588 4.06648C17.566 3.28097 16.3881 2.68867 15.1084 2.34374V7.54597L18.588 4.06648Z"
          fill="#0052B4"
        />
        <path
          d="M6.41163 19.9314C7.43362 20.7169 8.61155 21.3092 9.89116 21.6541V16.452L6.41163 19.9314Z"
          fill="#0052B4"
        />
        <path
          d="M9.89112 2.34374C8.61151 2.68866 7.43358 3.28097 6.41163 4.06644L9.89112 7.54593V2.34374Z"
          fill="#0052B4"
        />
        <path
          d="M15.1084 21.6541C16.388 21.3092 17.566 20.7169 18.5879 19.9314L15.1084 16.452V21.6541Z"
          fill="#0052B4"
        />
        <path
          d="M16.9537 14.6085L20.4331 18.088C21.2186 17.0661 21.811 15.8881 22.1558 14.6085H16.9537Z"
          fill="#0052B4"
        />
        <path
          d="M22.4154 10.6957H13.8044L13.8044 2.08465C13.3774 2.02906 12.9421 2 12.5 2C12.0579 2 11.6226 2.02906 11.1957 2.08465V10.6956L2.58465 10.6956C2.52906 11.1226 2.5 11.5579 2.5 12C2.5 12.4421 2.52906 12.8774 2.58465 13.3043H11.1956L11.1956 21.9154C11.6226 21.9709 12.0579 22 12.5 22C12.9421 22 13.3774 21.971 13.8043 21.9154V13.3044L22.4154 13.3044C22.4709 12.8774 22.5 12.4421 22.5 12C22.5 11.5579 22.4709 11.1226 22.4154 10.6957Z"
          fill="#D80027"
        />
        <path
          d="M15.1087 14.6094L19.571 19.0717C19.7763 18.8666 19.9721 18.6521 20.1588 18.4297L16.3385 14.6093L15.1087 14.6094Z"
          fill="#D80027"
        />
        <path
          d="M9.89127 14.6093L5.42889 19.0716C5.63405 19.2769 5.84854 19.4727 6.07088 19.6595L9.89127 15.839V14.6093Z"
          fill="#D80027"
        />
        <path
          d="M9.89115 9.39093L5.4288 4.92847C5.22357 5.13363 5.02779 5.34812 4.84099 5.57047L8.66142 9.3909L9.89115 9.39093Z"
          fill="#D80027"
        />
        <path
          d="M15.1087 9.39182L19.5711 4.9294C19.3659 4.72417 19.1514 4.52839 18.9291 4.34163L15.1087 8.16206V9.39182Z"
          fill="#D80027"
        />
      </svg>
    );
  }
);

const DotIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
    <svg {...props} fill="none" height="24" ref={ref} viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  )
);
`,
  },
  "tag/preview": {
    component: lazy(() => import("@/examples/tag/preview.tsx")),
    code: `import { Tag } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <Tag
      closable
      onClose={(e: React.MouseEvent) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        alert("Custom onClose callback with preventDefault()");
      }}
    >
      Tag
    </Tag>
  );
}
`,
  },
  "textarea/example-1": {
    component: lazy(() => import("@/examples/textarea/example-1.tsx")),
    code: `import { Textarea } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto max-w-sm text-left">
      <Textarea
        destructive
        required
        description="(description)"
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
        tooltip="Tooltip example"
        className="max-h-64"
      />
    </div>
  );
}
`,
  },
  "textarea/example-2": {
    component: lazy(() => import("@/examples/textarea/example-2.tsx")),
    code: `import { Textarea } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto flex max-w-sm flex-col gap-10 text-left">
      <Textarea
        className="resize-none"
        placeholder="Placeholder"
        label="Label"
        tooltip="Hello world"
        value="Value in disabled state"
        disabled
      />

      <Textarea
        className="resize-none"
        description="(description)"
        helperText="Helper text"
        label="Label"
      />
    </div>
  );
}
`,
  },
  "textarea/preview": {
    component: lazy(() => import("@/examples/textarea/preview.tsx")),
    code: `import { Textarea } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="m-auto max-w-sm text-left">
      <Textarea label="Label" placeholder="Placeholder" />
    </div>
  );
}
`,
  },
  "theming/custom-themes": {
    component: lazy(() => import("@/examples/theming/custom-themes.tsx")),
    code: `import { Button } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="dark-blue mx-auto flex max-w-xs justify-center rounded-lg bg-background p-10 text-foreground">
      <Button variant="primary">Primary Button</Button>
    </div>
  );
}
`,
  },
  "theming/dark-mode": {
    component: lazy(() => import("@/examples/theming/dark-mode.tsx")),
    code: `import * as React from "react";
import { MoonIcon, SunIcon } from "@iconicicons/react";
import { Button, Switch, Toggle, ToggleGroup, Tooltip } from "@lemonsqueezy/wedges";

export function Example() {
  /** In your app, you can use a hook, such as \`useTheme\` or a similar way to access
   *  the current theme and a setter function to change the theme.
   */
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <div className="m-auto flex w-fit flex-col items-center gap-8 text-left">
      {/* Example 1 */}
      <Tooltip
        sideOffset={8}
        content={\`Click to switch to the ${
          typeof theme !== "undefined" && theme === "dark" ? "light" : "dark"
        } theme\`}
      >
        <Button
          variant="transparent"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          isIconOnly
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Tooltip>

      {/* Example 2 */}
      <ToggleGroup size="sm" type="single" defaultValue="light">
        <ToggleGroup.Item value="light">Light</ToggleGroup.Item>
        <ToggleGroup.Item value="dark">Dark</ToggleGroup.Item>
        <ToggleGroup.Item value="System">System</ToggleGroup.Item>
      </ToggleGroup>

      {/* Example 3 */}
      <Toggle shape="pill">Dark theme</Toggle>

      {/* Example 4 */}
      <Switch label="Dark theme" />
    </div>
  );
}
`,
  },
  "toggle/preview": {
    component: lazy(() => import("@/examples/toggle/preview.tsx")),
    code: `import { CropIcon } from "@iconicicons/react";
import { Toggle } from "@lemonsqueezy/wedges";

export function Example() {
  return <Toggle before={<CropIcon />} />;
}
`,
  },
  "toggle-group/example-1": {
    component: lazy(() => import("@/examples/toggle-group/example-1.tsx")),
    code: `import {
  ColumnsHorizontalIcon,
  GridIcon,
  GridMasonryIcon,
  RowsIcon,
  TableColumnsIcon,
  TableRowsIcon,
} from "@iconicicons/react";
import { ToggleGroup } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-center gap-6">
      <ToggleGroup type="single" defaultValue="days">
        <ToggleGroup.Item value="days">Days</ToggleGroup.Item>
        <ToggleGroup.Item value="months">Months</ToggleGroup.Item>
        <ToggleGroup.Item value="years">Years</ToggleGroup.Item>
      </ToggleGroup>

      <ToggleGroup type="single" size="sm" defaultValue="grid">
        <ToggleGroup.Item before={<GridIcon />} value="grid">
          Grid
        </ToggleGroup.Item>

        <ToggleGroup.Item before={<ColumnsHorizontalIcon />} value="column">
          Column
        </ToggleGroup.Item>

        <ToggleGroup.Item before={<RowsIcon />} value="row">
          Row
        </ToggleGroup.Item>
      </ToggleGroup>

      <div className="flex items-center gap-6">
        <ToggleGroup orientation="vertical" size="md" defaultValue="grid" type="single">
          <ToggleGroup.Item value="grid" before={<GridIcon />} />
          <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
          <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
          <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
        </ToggleGroup>

        <ToggleGroup orientation="vertical" size="sm" defaultValue="grid" type="single">
          <ToggleGroup.Item value="grid" before={<GridIcon />} />
          <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
          <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
          <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
        </ToggleGroup>
      </div>
    </div>
  );
}
`,
  },
  "toggle-group/example-2": {
    component: lazy(() => import("@/examples/toggle-group/example-2.tsx")),
    code: `import { ToggleGroup } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <ToggleGroup type="multiple" size="sm" defaultValue={["mon", "wed"]}>
      <ToggleGroup.Item value="mon">Mon</ToggleGroup.Item>
      <ToggleGroup.Item value="tue">Tue</ToggleGroup.Item>
      <ToggleGroup.Item value="wed">Wed</ToggleGroup.Item>
      <ToggleGroup.Item value="thu">Thu</ToggleGroup.Item>
      <ToggleGroup.Item value="fri">Fri</ToggleGroup.Item>

      <ToggleGroup.Item value="sat" disabled>
        Sat
      </ToggleGroup.Item>

      <ToggleGroup.Item value="sun" disabled>
        Sun
      </ToggleGroup.Item>
    </ToggleGroup>
  );
}
`,
  },
  "toggle-group/preview": {
    component: lazy(() => import("@/examples/toggle-group/preview.tsx")),
    code: `import { GridIcon, GridMasonryIcon, TableColumnsIcon, TableRowsIcon } from "@iconicicons/react";
import { ToggleGroup } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <ToggleGroup.Root orientation="horizontal" defaultValue="grid" type="single">
      <ToggleGroup.Item value="grid" before={<GridIcon />} />
      <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
      <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
      <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
    </ToggleGroup.Root>
  );
}
`,
  },
  "tooltip/example-1": {
    component: lazy(() => import("@/examples/tooltip/example-1.tsx")),
    code: `import { Tooltip } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <section className="mx-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="top"
        />

        <Tooltip
          align="center"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="top"
        />

        <Tooltip
          align="end"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="top"
        />
      </div>

      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="bottom"
        />

        <Tooltip
          align="center"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="bottom"
        />

        <Tooltip
          align="end"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="bottom"
        />
      </div>

      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="left"
        />

        <Tooltip
          align="center"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="left"
        />

        <Tooltip
          align="end"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="left"
        />
      </div>

      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="right"
        />

        <Tooltip
          align="center"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="right"
        />

        <Tooltip
          align="end"
          animation={true}
          content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
          delayDuration={0}
          side="right"
        />
      </div>
    </section>
  );
}
`,
  },
  "tooltip/example-2": {
    component: lazy(() => import("@/examples/tooltip/example-2.tsx")),
    code: `import * as React from "react";
import { Tooltip } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4">
        <Tooltip content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element." />

        <Tooltip
          color="secondary"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element."
        />

        <Tooltip
          color="soft"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element."
          arrow={false}
          sideOffset={10}
        />
      </div>

      <div className="flex items-center gap-4">
        <Tooltip
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
          size="md"
        />

        <Tooltip
          color="secondary"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
          size="md"
        />

        <Tooltip
          color="soft"
          content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
          arrow={false}
          sideOffset={10}
          size="md"
        />
      </div>
    </div>
  );
}
`,
  },
  "tooltip/preview": {
    component: lazy(() => import("@/examples/tooltip/preview.tsx")),
    code: `import { Tooltip } from "@lemonsqueezy/wedges";

export function Example() {
  return (
    <Tooltip
      animation={true}
      content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      delayDuration={0}
    />
  );
}
`,
  },
};
