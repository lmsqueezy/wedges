"use client";

import { Checkbox, CheckboxGroup, RadioGroup, Switch, SwitchGroup } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function SwitchPage() {
  return (
    <main>
      <PageTitle>Switch/Radio/Checkbox</PageTitle>

      <div className="flex flex-col items-start gap-10">
        <div>
          <h2 className="mb-8 mt-10 text-xl">Switch</h2>

          <div className="flex flex-col gap-6">
            <Switch
              required
              alignLabel="end"
              disabled={false}
              helperText="Helper Text"
              label="Sticky Header"
              tooltip="This is a custom tooltip message"
            />

            <Switch disabled alignLabel="end" helperText="Disabled Switch" label="Sticky Header" />
          </div>
        </div>

        <div>
          <h2 className="mb-8 mt-10 text-xl">Switch Group</h2>

          <SwitchGroup
            required
            alignLabels="end"
            aria-invalid="true"
            helperText="This field is required"
            label="Hello Label"
            tooltip="This is a custom tooltip message"
          >
            <SwitchGroup.Item disabled helperText="Disabled item with helper text" label="Item 1" />
            <SwitchGroup.Item required label="Item 2 with a Tooltip" tooltip="test" />
            <SwitchGroup.Item label="Item 3">Test</SwitchGroup.Item>
          </SwitchGroup>
        </div>

        <div>
          <h2 className="mb-8 mt-10 text-xl">Radio Group</h2>

          <RadioGroup
            required
            aria-invalid={false}
            defaultValue="val-1"
            helperText="This field is required"
            label="Vertical Radio Group"
            tooltip="This is a custom tooltip message"
          >
            <RadioGroup.Item
              disabled
              helperText="Disabled helper text"
              label="Disabled Item"
              value="val-1"
            />
            <RadioGroup.Item label="Value 2" value="val-2" />
            <RadioGroup.Item label="Value 3" value="val-3" />
          </RadioGroup>
        </div>

        <div>
          <RadioGroup
            required
            aria-invalid={false}
            defaultValue="val-1"
            helperText="This field is required"
            label="Horizontal Radio Group"
            orientation="horizontal"
            tooltip="This is a custom tooltip message"
          >
            <RadioGroup.Item disabled label="Disabled Item" value="val-1" />
            <RadioGroup.Item aria-invalid helperText="Helper Text" label="Value 2" value="val-2" />
            <RadioGroup.Item label="Value 3" value="val-3" />
          </RadioGroup>
        </div>

        <div>
          <h2 className="mb-8 mt-10 text-xl">Checkbox</h2>

          <div className="flex flex-col gap-6">
            <Checkbox
              defaultChecked
              helperText="Helper text"
              label="Checkbox Label"
              tooltip="Tooltip example"
            />

            <Checkbox
              defaultChecked
              disabled
              helperText="Disabled checkbox"
              label="Checkbox Label"
              tooltip="Tooltip example"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-8 mt-10 text-xl">Checkbox Group</h2>

          <CheckboxGroup
            defaultChecked
            required
            helperText="Helper text"
            label="Checkbox Label"
            tooltip="Tooltip example"
          >
            <CheckboxGroup.Item label="Option 1" />
            <CheckboxGroup.Item
              aria-invalid
              defaultChecked
              required
              helperText="Invalid field"
              label="Option 2"
            />
            <CheckboxGroup.Item
              isIndeterminate
              helperText="Has to be controlled"
              label="Indeterminate"
            />
            <CheckboxGroup.Item label="Option 4" />
          </CheckboxGroup>
        </div>
      </div>
    </main>
  );
}
