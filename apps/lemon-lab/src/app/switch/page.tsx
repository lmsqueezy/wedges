"use client";

import { Switch } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function SwitchPage() {
  return (
    <main>
      <PageTitle>Switch</PageTitle>

      <div className="flex flex-col items-start gap-10">
        <Switch helperText="Helper Text" label="Sticky Header" labelPosition="end" />
      </div>
    </main>
  );
}
