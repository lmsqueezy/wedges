"use client";

import { useState } from "react";
import {
  BellIcon,
  BookIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  LockIcon,
  LogOutIcon,
  MoonIcon,
  SettingsIcon,
  UserIcon,
} from "@iconicicons/react";
import { Avatar, DropdownMenu, Switch } from "@lemonsqueezy/wedges";

export default function Example() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <span className="group flex shrink cursor-pointer select-none items-center justify-center gap-1 rounded-lg p-1.5 px-2 text-sm text-surface-600 transition-colors duration-100 wg-antialiased hover:bg-surface dark:hover:bg-white/5">
            <Avatar
              size="xs"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
              status="green"
            />

            <span className="ms-2 flex flex-col">
              <span className="font-medium">John Doe</span>
            </span>

            <ChevronDownIcon className="trigger-icon h-5 w-5 text-surface-400" />
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
  );
}
