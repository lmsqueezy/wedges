import { BookIcon, LockIcon, VideoIcon } from "@iconicicons/react";
import { Tabs } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <Tabs variant="contained-bottom" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger before={<VideoIcon />} value="actions">
            Actions
          </Tabs.Trigger>

          <Tabs.Trigger before={<BookIcon />} value="wiki">
            Wiki
          </Tabs.Trigger>

          <Tabs.Trigger before={<LockIcon />} value="security">
            Security
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="actions">Actions tab content</Tabs.Content>
        <Tabs.Content value="wiki">Wiki tab content</Tabs.Content>
        <Tabs.Content value="security">Security tab content</Tabs.Content>
      </Tabs>
    </div>
  );
}
