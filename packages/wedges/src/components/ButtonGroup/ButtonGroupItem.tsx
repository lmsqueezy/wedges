import * as React from "react";
import { Button, ButtonElement } from "../Button/";
import { ButtonGroupContext } from "./ButtonGroup";

export const ButtonGroupItem = React.forwardRef<
  ButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ disabled = false, ...otherProps }, ref) => {
  const context = React.useContext(ButtonGroupContext);
  const { disabled: ctxDisabled, size } = context || {};

  return <Button ref={ref} disabled={ctxDisabled || disabled} size={size} />;
});
