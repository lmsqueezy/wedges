import { DotsHorizontalIcon } from "@iconicicons/react";
import { Button, DropdownMenu } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button isIconOnly size="sm" variant="tertiary">
          <DotsHorizontalIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" side="top">
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>Bold</span>
            <DropdownMenu.Shortcut keys={["command"]}>B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Italic</span>
            <DropdownMenu.Shortcut keys={["command"]}>I</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Underline</span>
            <DropdownMenu.Shortcut keys={["command"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Strikethrough</span>
            <DropdownMenu.Shortcut keys={["command", "option"]}>X</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Create link</span>
            <DropdownMenu.Shortcut keys={["command"]}>K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>Bulleted list</span>
            <DropdownMenu.Shortcut keys={["shift", "command"]}>8</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Numbered list</span>
            <DropdownMenu.Shortcut keys={["command"]}>7</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
