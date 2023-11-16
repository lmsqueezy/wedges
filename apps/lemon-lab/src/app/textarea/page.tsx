"use client";

import { Textarea } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function TextareaPage() {
  return (
    <main>
      <PageTitle>Textarea</PageTitle>

      <div className="flex flex-col gap-24">
        <div className="max-w-[400px] grow">
          <Textarea
            required
            className="resize-none"
            helperText="Please describe the issue"
            label="Hello world"
            placeholder="Your message"
            tooltip="Hello world"
          />
        </div>

        <div className="max-w-[400px] grow">
          <Textarea
            destructive
            required
            className="resize-none"
            description="(optional)"
            helperText="Please describe the issue"
            label="Hello world"
            placeholder="Your message"
            tooltip="Hello world"
          />
        </div>

        <div className="max-w-[400px] grow">
          <Textarea
            disabled
            required
            className="resize-none"
            helperText="Please describe the issue"
            label="Hello world"
            placeholder="Your message"
            tooltip="Hello world"
            value="Custom value in disabled textfield"
          />
        </div>

        <div />
      </div>
    </main>
  );
}
