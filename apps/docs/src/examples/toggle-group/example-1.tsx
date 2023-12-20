import {
  ColumnsHorizontalIcon,
  GridIcon,
  GridMasonryIcon,
  RowsIcon,
  TableColumnsIcon,
  TableRowsIcon,
} from "@iconicicons/react";
import { ToggleGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-center gap-6">
      <ToggleGroup type="single" defaultValue="days">
        <ToggleGroup.Item value="days">Days</ToggleGroup.Item>
        <ToggleGroup.Item value="months">Months</ToggleGroup.Item>
        <ToggleGroup.Item value="years">Years</ToggleGroup.Item>
      </ToggleGroup>

      <ToggleGroup type="single" size="sm" defaultValue="grid">
        <ToggleGroup.Item before={<GridIcon />} value="grid">
          Grid
        </ToggleGroup.Item>

        <ToggleGroup.Item before={<ColumnsHorizontalIcon />} value="column">
          Column
        </ToggleGroup.Item>

        <ToggleGroup.Item before={<RowsIcon />} value="row">
          Row
        </ToggleGroup.Item>
      </ToggleGroup>

      <div className="flex items-center gap-6">
        <ToggleGroup orientation="vertical" size="md" defaultValue="grid" type="single">
          <ToggleGroup.Item value="grid" before={<GridIcon />} />
          <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
          <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
          <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
        </ToggleGroup>

        <ToggleGroup orientation="vertical" size="sm" defaultValue="grid" type="single">
          <ToggleGroup.Item value="grid" before={<GridIcon />} />
          <ToggleGroup.Item value="masonry" before={<GridMasonryIcon />} />
          <ToggleGroup.Item value="column" before={<TableColumnsIcon />} />
          <ToggleGroup.Item value="row" before={<TableRowsIcon />} />
        </ToggleGroup>
      </div>
    </div>
  );
}
