"use client";

import PageTitle from "@/components/PageTitle";
import { Textarea } from "@lmsqueezy/wedges";

export default function TextareaPage() {
  return (
    <main>
      <PageTitle>Textarea</PageTitle>

      <div className="flex flex-col gap-24">
        <div className="max-w-[400px] grow">
          <Textarea
            className="resize-none"
            placeholder="Your message"
            helperText="Please describe the issue"
            label="Hello world"
            required
            tooltip="Hello world"
          />
        </div>

        <div className="max-w-[400px] grow">
          <Textarea
            className="resize-none"
            placeholder="Your message"
            helperText="Please describe the issue"
            label="Hello world"
            required
            tooltip="Hello world"
            destructive
          />
        </div>

        <div className="max-w-[400px] grow">
          <Textarea
            className="resize-none"
            placeholder="Your message"
            helperText="Please describe the issue"
            label="Hello world"
            required
            tooltip="Hello world"
            value="Custom value in disabled textfield"
            disabled
          />
        </div>

        <div></div>
      </div>
    </main>
  );
}
