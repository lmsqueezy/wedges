import { DownloadIcon, EyeOffIcon, MailIcon, PinIcon, RedoIcon } from "@iconicicons/react";
import { Button, DropdownMenu } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Item disabled>
            <RedoIcon />
            <span>Reply</span>
            <DropdownMenu.Shortcut keys={["option"]}>R</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <PinIcon />
            <span>Pin</span>
            <DropdownMenu.Shortcut keys={["option"]}>P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <DownloadIcon />
            <span>Save this message</span>
            <DropdownMenu.Shortcut keys={["command"]}>S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <EyeOffIcon />
            <span>Mark as unread</span>
            <DropdownMenu.Shortcut keys={["command", "option"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <MailIcon />
            <span>Share via email</span>
            <DropdownMenu.Shortcut keys={["command"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
