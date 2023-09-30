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
          color="gray"
          title="Gray"
          variant="inline"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="gray"
          title="Gray"
          variant="expanded"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="primary"
          title="Primary"
          variant="inline"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="primary"
          title="Primary"
          variant="expanded"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="info"
          title="Info"
          variant="inline"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="info"
          title="Info"
          variant="expanded"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="success"
          title="Success"
          variant="inline"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="success"
          title="Success"
          variant="expanded"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="warning"
          title="Warning"
          variant="inline"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="warning"
          title="Warning"
          variant="expanded"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="error"
          title="Error"
          variant="inline"
          onClose={() => {
            alert("close");
          }}
        >
          This is alert description here.
        </Alert>

        <Alert
          after={
            <Button size="sm" variant="outline">
              Save
            </Button>
          }
          color="error"
          title="Error"
          variant="expanded"
          onClose={() => {
            alert("close");
          }}
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
          >
            <TrashIcon />
          </Alert.CloseButton>
        </Alert.Root>
      </div>
    </main>
  );
}
