"use client";

import { Kbd } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function KbdPage() {
  return (
    <main>
      <PageTitle>Kbd</PageTitle>

      <div className="flex flex-col gap-24">
        <section className="space-y-6 text-sm leading-6">
          <div className="flex items-center gap-8">
            <Kbd keys={["command", "option", "shift"]}>A</Kbd>

            <p>
              Use the keys <Kbd keys={["shift"]} /> + <Kbd keys={["option"]} /> +{" "}
              <Kbd keys={["up"]} size="sm" /> in Visual Studio Code to duplicate a line of code.
            </p>
          </div>

          <div className="flex items-center gap-10">
            <div>
              <Kbd keys={["command"]} size="lg">
                A
              </Kbd>{" "}
              to copy
            </div>

            <div>
              <Kbd keys={["command"]} size="base">
                B
              </Kbd>{" "}
              to copy
            </div>

            <div>
              <Kbd keys={["command"]} size="sm">
                C
              </Kbd>{" "}
              to copy
            </div>

            <div>
              <Kbd keys={["command"]} size="xs">
                D
              </Kbd>{" "}
              to copy
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
