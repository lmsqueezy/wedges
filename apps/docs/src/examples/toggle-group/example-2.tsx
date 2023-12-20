import { ToggleGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <ToggleGroup type="multiple" size="sm" defaultValue={["mon", "wed"]}>
      <ToggleGroup.Item value="mon">Mon</ToggleGroup.Item>
      <ToggleGroup.Item value="tue">Tue</ToggleGroup.Item>
      <ToggleGroup.Item value="wed">Wed</ToggleGroup.Item>
      <ToggleGroup.Item value="thu">Thu</ToggleGroup.Item>
      <ToggleGroup.Item value="fri">Fri</ToggleGroup.Item>

      <ToggleGroup.Item value="sat" disabled>
        Sat
      </ToggleGroup.Item>

      <ToggleGroup.Item value="sun" disabled>
        Sun
      </ToggleGroup.Item>
    </ToggleGroup>
  );
}
