import * as React from "react";
import { MoonIcon, SunIcon } from "@iconicicons/react";
import { Button, Switch, Toggle, ToggleGroup, Tooltip } from "@lemonsqueezy/wedges";

export default function Example() {
  /** In your app, you can use a hook, such as `useTheme` or a similar way to access
   *  the current theme and a setter function to change the theme.
   */
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <div className="m-auto flex w-fit flex-col items-center gap-8 text-left">
      {/* Example 1 */}
      <Tooltip
        sideOffset={8}
        content={`Click to switch to the ${
          typeof theme !== "undefined" && theme === "dark" ? "light" : "dark"
        } theme`}
      >
        <Button
          variant="transparent"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          isIconOnly
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Tooltip>

      {/* Example 2 */}
      <ToggleGroup size="sm" type="single" defaultValue="light">
        <ToggleGroup.Item value="light">Light</ToggleGroup.Item>
        <ToggleGroup.Item value="dark">Dark</ToggleGroup.Item>
        <ToggleGroup.Item value="System">System</ToggleGroup.Item>
      </ToggleGroup>

      {/* Example 3 */}
      <Toggle shape="pill">Dark theme</Toggle>

      {/* Example 4 */}
      <Switch label="Dark theme" />
    </div>
  );
}
