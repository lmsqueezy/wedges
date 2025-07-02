
import * as React from "react";
import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Checkbox,
  CheckboxGroup,
  DropdownMenu,
  Input,
  Kbd,
  Label,
  Loading,
  Popover,
  ProgressBar,
  ProgressCircle,
  RadioGroup,
  Slider,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Switch,
  SwitchGroup,
  Tabs,
  Tag,
  Textarea,
  Toggle,
  ToggleGroup,
  Tooltip,
} from "@lemonsqueezy/wedges";
import { DirectionProvider } from "@/components/DirectionProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function AllComsPage() {
  return (
    <DirectionProvider>
      <div className="p-8 space-y-8">
        <LanguageSwitcher />
        <h1 className="text-2xl font-bold">All Components Playground</h1>
        <div className="space-y-4">
          <Button>Button</Button>
          <Checkbox label="Checkbox" />
          <CheckboxGroup label="Checkbox Group">
            <CheckboxGroup.Item label="Option 1" />
            <CheckboxGroup.Item label="Option 2" />
          </CheckboxGroup>
          <Input placeholder="Input" />
          <Badge>Badge</Badge>
          <Avatar initials="JD" />
          <AvatarGroup items={[{ initials: "J" }, { initials: "D" }]} />
          <Tabs>
            <Tabs.List>
              <Tabs.Trigger value="one">One</Tabs.Trigger>
              <Tabs.Trigger value="two">Two</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="one">Tab One</Tabs.Content>
            <Tabs.Content value="two">Tab Two</Tabs.Content>
          </Tabs>
          <Switch label="Switch" />
          <SwitchGroup label="Switch Group">
            <SwitchGroup.Item label="Switch 1" />
            <SwitchGroup.Item label="Switch 2" />
          </SwitchGroup>
          <Select>
            <SelectTrigger>Select an option</SelectTrigger>
            <SelectContent>
              <SelectItem value="a">A</SelectItem>
              <SelectItem value="b">B</SelectItem>
            </SelectContent>
          </Select>
          <RadioGroup label="Radio Group">
            <RadioGroup.Item value="1" label="Radio 1" />
            <RadioGroup.Item value="2" label="Radio 2" />
          </RadioGroup>
          <Slider defaultValue={[50]} max={100} step={1} />
          <Textarea placeholder="Textarea" />
          <Toggle>Toggle</Toggle>
          <ToggleGroup type="single" defaultValue="1">
            <ToggleGroup.Item value="1">One</ToggleGroup.Item>
            <ToggleGroup.Item value="2">Two</ToggleGroup.Item>
          </ToggleGroup>
          <Popover>
            <Popover.Trigger asChild>
              <Button>Open Popover</Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="p-4">Popover Content</div>
            </Popover.Content>
          </Popover>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button>Open Menu</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Item 1</DropdownMenu.Item>
              <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
          <Tooltip content="Tooltip text">
            <Button>Hover me</Button>
          </Tooltip>
          <Kbd>⌘K</Kbd>
          <Label htmlFor="input-example">Label</Label>
          <Loading type="dots" size="md" />
          <Loading type="line" size="md" />
          <ProgressBar value={50} max={100} />
          <ProgressCircle value={75} max={100} />
          <Tag>Tag</Tag>
          <Alert variant="inline">This is an alert</Alert>
        </div>
      </div>
    </DirectionProvider>
  );
}
