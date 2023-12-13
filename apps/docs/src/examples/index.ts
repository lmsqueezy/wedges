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
    code: `import { Avatar } from "@lmsqueezy/wedges";

export function Example() {
  return (
    <div className="flex items-center gap-6">
      <Avatar.Root className="h-16 w-16 justify-center">
        <Avatar.Image
          className="rounded-md"
          src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
        />

        <Avatar.Fallback className="rounded-2xl" />

        <span className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-700/60 text-white backdrop-blur-sm">
          WG
        </span>

        <Avatar.Status className="-bottom-1 -left-1 bg-wg-red" />
        <Avatar.Notification className="-right-0.5 -top-1 bg-purple-400" />
      </Avatar.Root>
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
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
    />
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
