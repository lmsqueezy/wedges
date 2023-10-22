"use client";

import { Avatar, Button, DropdownMenu } from "@lmsqueezy/wedges";
import {
  ChevronDownIcon,
  DotsHorizontalIcon,
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

      <div className="flex gap-72">
        <div>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
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
                      <DropdownMenu.Item destructive>
                        <span>Delete account</span>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>

        <div>
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
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <span className="wg-antialiased text-surface-600 data-[state=open]:bg-surface hover:bg-surface group flex cursor-pointer select-none items-center gap-1 rounded-lg p-1.5 px-2 text-sm transition-colors duration-100 dark:hover:bg-white/5">
                <Avatar size="xs" src="https://github.com/brankoconjic.png" status="green" />

                <span className=" ms-2 flex flex-col">
                  <span className="font-medium">Branko</span>
                </span>

                <ChevronDownIcon className="trigger-icon text-surface-400 h-5 w-5" />
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content align="center" className="min-w-[140px]">
              <DropdownMenu.Group>
                <DropdownMenu.Label>Account</DropdownMenu.Label>

                <DropdownMenu.Item>
                  <span>Settings</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <span>Privacy</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <span>Notifications</span>
                </DropdownMenu.Item>
              </DropdownMenu.Group>

              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Label>Help</DropdownMenu.Label>

                <DropdownMenu.Item>
                  <span>Help Guide</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <span>Help Center</span>
                </DropdownMenu.Item>
              </DropdownMenu.Group>

              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <span>Dark Mode</span>
                </DropdownMenu.Item>
              </DropdownMenu.Group>

              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <span>Log Out</span>
                </DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </main>
  );
}
