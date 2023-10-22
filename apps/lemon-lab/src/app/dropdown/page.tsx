"use client";

import { Avatar, Checkbox, DropdownMenu } from "@lmsqueezy/wedges";
import {
  DownloadIcon,
  EyeOffIcon,
  MailIcon,
  PinIcon,
  RedoIcon,
  UsersIcon,
} from "@iconicicons/react";

import PageTitle from "@/components/PageTitle";

export default function DropdownMenuPage() {
  return (
    <main>
      <PageTitle>Dropdown Menu</PageTitle>

      <div className="flex flex-col gap-24">
        <div>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              {/* <Button
                size="sm"
                isIconOnly
                className="data-[state=open]:bg-surface/5"
                variant="outline"
              >
                <DotsHorizontalIcon />
              </Button> */}
              <Avatar className="cursor-pointer" initials="B" size="sm" status="green" />
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

              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>
                    <UsersIcon />
                    <span>Invite users</span>
                  </DropdownMenu.SubTrigger>

                  <DropdownMenu.SubContent>
                    <DropdownMenu.Group>
                      <DropdownMenu.Item>
                        <span>Email</span>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <span>Message</span>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>

                    <DropdownMenu.Separator />

                    <DropdownMenu.Group>
                      <DropdownMenu.Item className="text-destructive dark:text-destructive">
                        <span>Delete account</span>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </main>
  );
}
