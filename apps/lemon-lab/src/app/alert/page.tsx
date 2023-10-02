"use client";

import { BellIcon, TrashIcon } from "@iconicicons/react";
import { Alert, Button } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function ButtonPage() {
  return (
    <main>
      <PageTitle>Alert</PageTitle>

      <div className="mt-24 flex flex-col gap-6">
        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="gray"
          title="Gray"
          variant="inline"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="gray"
          title="Gray"
          variant="expanded"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="primary"
          title="Primary"
          variant="inline"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="primary"
          title="Primary"
          variant="expanded"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="info"
          title="Info"
          variant="inline"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="info"
          title="Info"
          variant="expanded"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="success"
          title="Success"
          variant="inline"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="success"
          title="Success"
          variant="expanded"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="warning"
          title="Warning"
          variant="inline"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="warning"
          title="Warning"
          variant="expanded"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="error"
          title="Error"
          variant="inline"
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          closable={true}
          color="error"
          title="Error"
          variant="expanded"
        >
          This is alert description here.
        </Alert>

        <h2 className="mt-10 text-xl">Custom</h2>

        <Alert.Root className="flex w-fit items-center gap-3 rounded-full bg-slate-800 p-2 pl-4 text-base text-slate-300 dark:bg-slate-800">
          <Alert.Before className="h-6 w-6 text-yellow-400 dark:text-yellow-400">
            <BellIcon />
          </Alert.Before>

          <Alert.Title className="text-yellow-400">Custom</Alert.Title>

          <div className="flex h-[1.25em] w-px rotate-[18deg] bg-slate-500" />

          <Alert.Description>This is alert description here</Alert.Description>

          <Alert.CloseButton
            destructive
            className="hover:bg-wg-red dark:hover:bg-wg-red ml-1 bg-slate-600 text-white"
            shape="pill"
            onClick={() => {
              alert("custom handler");
            }}
          >
            <TrashIcon />
          </Alert.CloseButton>
        </Alert.Root>
      </div>
    </main>
  );
}
