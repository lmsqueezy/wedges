"use client";

import { Kbd } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function KbdPage() {
  return (
    <main>
      <PageTitle>Kbd</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Example</h2>

          <div className="flex items-center gap-8">
            <Kbd keys={["command", "option", "shift"]}>A</Kbd>

            <p>
              Use the keys <Kbd keys={["shift"]} /> + <Kbd keys={["option"]} /> +{" "}
              <Kbd keys={["up"]} size="sm" /> in Visual Studio Code to duplicate a line of code.
            </p>
          </div>

          <div>
            <Kbd keys={["command"]}>C</Kbd> to copy
          </div>
        </section>
      </div>
    </main>
  );
}
