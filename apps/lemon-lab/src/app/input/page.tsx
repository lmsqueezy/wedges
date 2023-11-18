"use client";

import { Input } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function InputPage() {
  return (
    <main>
      <PageTitle>Input</PageTitle>

      <div className="flex flex-col gap-24">
        <div className="max-w-[400px]">
          <Input
            description="This is a description"
            helperText="Helper Text"
            label="Input Example"
            placeholder="Your email"
            tooltip="Hello world"
            type="text"
          />
        </div>
      </div>
    </main>
  );
}
