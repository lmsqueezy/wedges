"use client";

import {
  BellIcon,
  BookIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  DownloadIcon,
  EyeOffIcon,
  HelpCircleIcon,
  LockIcon,
  LogOutIcon,
  MailIcon,
  MoonIcon,
  PinIcon,
  RedoIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "@iconicicons/react";
import { Avatar, Button, DropdownMenu, Switch } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";
import { useState } from "react";

export default function DropdownMenuPage() {
  const [account, setAccount] = useState("branko");
  const [showURL, setShowURL] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

                  <DropdownMenu.SubContent inset={true}>
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
                      <DropdownMenu.Label>
                        <span>Account</span>
                      </DropdownMenu.Label>

                      <DropdownMenu.RadioGroup value={account} onValueChange={setAccount}>
                        <DropdownMenu.RadioItem value="pedro">Pedro Duarte</DropdownMenu.RadioItem>

                        <DropdownMenu.RadioItem value="branko">
                          Branko Conjic
                        </DropdownMenu.RadioItem>
                      </DropdownMenu.RadioGroup>
                    </DropdownMenu.Group>

                    <DropdownMenu.Separator />

                    <DropdownMenu.Group>
                      <DropdownMenu.Label>Options</DropdownMenu.Label>

                      <DropdownMenu.CheckboxItem checked={showURL} onCheckedChange={setShowURL}>
                        <span>Show Full URLs</span>
                        <DropdownMenu.Shortcut keys={["command"]}>U</DropdownMenu.Shortcut>
                      </DropdownMenu.CheckboxItem>

                      <DropdownMenu.CheckboxItem
                        checked={showBookmarks}
                        onCheckedChange={setShowBookmarks}
                      >
                        <span>Show Bookmarks</span>
                        <DropdownMenu.Shortcut keys={["option"]}>B</DropdownMenu.Shortcut>
                      </DropdownMenu.CheckboxItem>
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
              <span className="wg-antialiased text-surface-600 hover:bg-surface group flex cursor-pointer select-none items-center gap-1 rounded-lg p-1.5 px-2 text-sm transition-colors duration-100 dark:hover:bg-white/5">
                <Avatar size="xs" src="https://github.com/brankoconjic.png" status="green" />

                <span className=" ms-2 flex flex-col">
                  <span className="font-medium">Branko</span>
                </span>

                <ChevronDownIcon className="trigger-icon text-surface-400 h-5 w-5" />
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content align="center" className="min-w-[140px]">
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <UserIcon />
                  <span>Account</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <SettingsIcon />
                  <span>Settings</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <LockIcon />
                  <span>Privacy</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <BellIcon />
                  <span>Notifications</span>
                </DropdownMenu.Item>
              </DropdownMenu.Group>

              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <BookIcon />
                  <span>Help Guide</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item>
                  <HelpCircleIcon />
                  <span>Help Center</span>
                </DropdownMenu.Item>
              </DropdownMenu.Group>

              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Item
                  onSelect={(e) => {
                    e.preventDefault();
                    setDarkMode(!darkMode);
                  }}
                >
                  <MoonIcon />
                  <span>Dark Mode</span>
                  <Switch checked={darkMode} className="pointer-events-none ml-2" />
                </DropdownMenu.Item>
              </DropdownMenu.Group>

              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <LogOutIcon />
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
