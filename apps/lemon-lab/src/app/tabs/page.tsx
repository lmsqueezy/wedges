"use client";

import { CodeIcon, EyeIcon } from "@iconicicons/react";
import { Badge, Tabs } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function TabsPage() {
  return (
    <main>
      <PageTitle>Tabs</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Fill</h2>

          <section>
            <Tabs defaultValue="account" variant="fill">
              <Tabs.List>
                <Tabs.Trigger
                  after={
                    <Badge shape="pill" size="sm">
                      12
                    </Badge>
                  }
                  before={<EyeIcon />}
                  value="password"
                >
                  Preview
                </Tabs.Trigger>

                <Tabs.Trigger before={<CodeIcon />} value="account">
                  Code
                </Tabs.Trigger>

                <Tabs.Trigger disabled before={<CodeIcon />} value="disabled">
                  Disabled
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="account">Account tab content</Tabs.Content>
              <Tabs.Content value="password">Password Content</Tabs.Content>
            </Tabs>
          </section>
        </section>

        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Underlined</h2>

          <section>
            <Tabs defaultValue="account" variant="underlined">
              <Tabs.List>
                <Tabs.Trigger
                  after={
                    <Badge shape="pill" size="sm">
                      12
                    </Badge>
                  }
                  before={<EyeIcon />}
                  value="password"
                >
                  Preview
                </Tabs.Trigger>

                <Tabs.Trigger before={<CodeIcon />} value="account">
                  Code
                </Tabs.Trigger>

                <Tabs.Trigger disabled value="disabled">
                  Disabled
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="account">Account tab content</Tabs.Content>
              <Tabs.Content value="password">Password Content</Tabs.Content>
            </Tabs>
          </section>
        </section>

        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Contained Bottom</h2>

          <section>
            <Tabs defaultValue="account" variant="contained-bottom">
              <Tabs.List stretch={true}>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="password">Password</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="account">Account tab content</Tabs.Content>
              <Tabs.Content value="password">Password Content</Tabs.Content>
            </Tabs>
          </section>
        </section>

        <section className="space-y-6">
          <h2 className="mb-8 text-xl">Contained Top</h2>

          <section>
            <Tabs defaultValue="account" variant="contained-top">
              <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="password">Password</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="account">Account tab content</Tabs.Content>
              <Tabs.Content value="password">Password Content</Tabs.Content>
            </Tabs>
          </section>
        </section>
      </div>
    </main>
  );
}
