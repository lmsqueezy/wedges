import { Badge, Tabs, Tooltip } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="m-auto flex w-fit max-w-full flex-col gap-10 overflow-scroll p-2 text-left">
      {/* Example 1 */}
      <Tabs variant="contained-top" defaultValue="examples">
        <Tabs.List>
          <Tabs.Trigger value="examples">Examples</Tabs.Trigger>
          <Tabs.Trigger
            value="usage"
            after={
              <Badge size="sm" color="yellow">
                New
              </Badge>
            }
          >
            Usage
          </Tabs.Trigger>
          <Tooltip content="Tooltip example">
            <Tabs.Trigger value="playground" disabled after={<Badge size="sm">Pro</Badge>}>
              Playground
            </Tabs.Trigger>
          </Tooltip>
        </Tabs.List>
        {/* Add Tabs.Content for each trigger/tab */}
      </Tabs>
    </div>
  );
}
