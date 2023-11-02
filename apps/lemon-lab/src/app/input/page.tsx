"use client";

import PageTitle from "@/components/PageTitle";
import { Input } from "@lmsqueezy/wedges";

export default function InputPage() {
  return (
    <main>
      <PageTitle>Input</PageTitle>

      <div className="flex flex-col gap-24">
        <div className="max-w-[400px]">
          <Input
            label="Input Example"
            tooltip="Hello world"
            helperText="Helper Text"
            placeholder="Your email"
            description="This is a description"
            type="text"
          />
        </div>
      </div>
    </main>
  );
}
