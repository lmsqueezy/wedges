import { GridIcon, GridMasonryIcon, TableColumnsIcon, TableRowsIcon } from "@iconicicons/react";
import { ToggleGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <ToggleGroup.Root orientation="horizontal" defaultValue="grid" type="single">
      <ToggleGroup.Item value="grid" before={<GridIcon />} />
      <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
      <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
      <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
    </ToggleGroup.Root>
  );
}
