"use client";

import { Switch, SwitchGroup } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function SwitchPage() {
  return (
    <main>
      <PageTitle>Switch</PageTitle>

      <div className="flex flex-col items-start gap-10">
        <Switch
          required
          alignLabel="end"
          disabled={false}
          helperText="Helper Text"
          label="Sticky Header"
          tooltip="This is a custom tooltip message"
        />

        <div>
          <h2 className="mb-8 mt-10 text-xl">Switch Group</h2>

          <SwitchGroup
            required
            alignLabels="start"
            helperText="This is helper text"
            label="Hello Label"
            tooltip="This is a custom tooltip message"
          >
            <SwitchGroup.Item label="Item 1" />
            <SwitchGroup.Item label="Item 2 with a longer label" />
            <SwitchGroup.Item label="Item 3" />
          </SwitchGroup>
        </div>
      </div>
    </main>
  );
}
