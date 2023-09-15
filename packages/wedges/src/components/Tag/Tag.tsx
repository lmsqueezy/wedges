import { CloseIcon } from "@iconicicons/react";
import * as React from "react";

import { cn } from "../../helpers/utils";
import { Avatar, AvatarProps } from "../Avatar";
import { Badge, BadgeElement } from "../Badge";

/* ---------------------------------- Types --------------------------------- */
export type TagProps = Omit<React.ComponentPropsWithoutRef<typeof Badge>, "before"> & {
  avatar?: React.ReactElement<typeof Avatar>;
  before?: React.ReactElement<HTMLElement>;
  deleteIcon?: React.ReactElement<HTMLElement>;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

/* ------------------------------- Components ------------------------------- */
const Tag = React.forwardRef<BadgeElement, TagProps>((props, ref) => {
  const { avatar, before, deleteIcon, onClose, ...otherProps } = props;

  const renderBefore = (
    <>
      {React.isValidElement(before)
        ? React.cloneElement(before, {
            className: cn("h-4 min-w-4 w-auto", before.props.className || ""),
          })
        : before}

      {avatar &&
        React.cloneElement(avatar, {
          size: "xxs",
          status: null,
          notification: null,
          children: <span className="bg-surface-3" />,
        } as Partial<AvatarProps>)}
    </>
  );

  const renderDeleteIcon = (
    <>
      {React.isValidElement(deleteIcon) ? (
        React.cloneElement(deleteIcon, {
          className: cn("h-4 min-w-4 w-auto text-inherit", deleteIcon.props.className || ""),
        })
      ) : (
        <CloseIcon className="h-4 w-4 text-inherit" />
      )}
    </>
  );

  const renderCloseButton: React.ReactElement<HTMLButtonElement> | undefined = onClose ? (
    <button
      className="text-surface-foreground-muted focus-visible:text-surface-foreground hover:text-surface-foreground focus-visible:outline-primary focus-visible:text-primary dark:focus-visible:outline-wg-purple-400 dark:focus-visible:text-wg-purple-400 flex items-center justify-center rounded-full filter-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-0"
      type="button"
      onClick={onClose}
    >
      {renderDeleteIcon}
    </button>
  ) : undefined;

  return <Badge ref={ref} before={renderBefore} {...otherProps} after={renderCloseButton} />;
});

Tag.displayName = "Tag";

export default Tag;
