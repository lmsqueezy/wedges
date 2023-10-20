"use client";

import { Checkbox, RadioGroup, Switch, SwitchGroup } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function SwitchPage() {
  return (
    <main>
      <PageTitle>Switch/Radio/Checkbox</PageTitle>

      <div className="flex flex-col items-start gap-10">
        <div>
          <h2 className="mb-8 mt-10 text-xl">Switch</h2>
          <Switch
            required
            alignLabel="end"
            disabled={false}
            helperText="Helper Text"
            label="Sticky Header"
            tooltip="This is a custom tooltip message"
          />
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
            <SwitchGroup.Item disabled helperText="Disabled helper text" label="Item 1" />
            <SwitchGroup.Item label="Item 2 with a longer label" tooltip="test" />
            <SwitchGroup.Item required label="Item 3">
              Test
            </SwitchGroup.Item>
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
            <RadioGroup.Item label="Value 2" value="val-2" />
            <RadioGroup.Item label="Value 3" value="val-3" />
          </RadioGroup>
        </div>

        <div>
          <h2 className="mb-8 mt-10 text-xl">Checkbox</h2>

          <Checkbox
            defaultChecked
            // disabled
            helperText="Helper text"
            label="Checkbox Label"
            tooltip="Tooltip example"
          />
        </div>

        <div>
          <h2 className="mb-8 mt-10 text-xl">Checkbox Group</h2>

          <Checkbox
            defaultChecked
            // disabled
            helperText="Helper text"
            label="Checkbox Label"
            tooltip="Tooltip example"
          />
        </div>
      </div>
    </main>
  );
}
