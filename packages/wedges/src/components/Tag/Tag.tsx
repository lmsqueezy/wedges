import * as React from "react";

import { cn, isReactElement } from "../../helpers/utils";
import { Avatar, AvatarProps } from "../Avatar";
import { Badge, BadgeElement } from "../Badge";
import { CloseIcon } from "../icons";

/* ---------------------------------- Types --------------------------------- */
export type TagProps = Omit<React.ComponentPropsWithoutRef<typeof Badge>, "before"> & {
  /**
   * An optional avatar to display within the tag.
   * Expects Avatar component.
   *
   * @example
   * // Display a tag with an avatar
   * <Tag avatar={<Avatar src="..." />} />
   */
  avatar?: React.ReactElement<typeof Avatar>;

  /**
   * An optional element to display before the tag content.
   * This can be used to display an icon or other element.
   */
  before?: React.ReactElement<HTMLElement>;

  /**
   * Specify alternative close icon to display within the tag
   *
   * * @example
   * // Display a tag with an avatar
   * <Tag closeIcon={<TrashIcon />} />.
   */
  closeIcon?: React.ReactElement<HTMLElement>;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

/* ------------------------------- Components ------------------------------- */
const Tag = React.forwardRef<BadgeElement, TagProps>((props, ref) => {
  const { avatar, before, closeIcon: deleteIcon, onClose, ...otherProps } = props;

  const renderBefore = (
    <>
      {isReactElement(before)
        ? React.cloneElement(before, {
            className: cn("h-4 min-w-4 w-auto", before.props.className || ""),
          })
        : before}

      {avatar &&
        React.cloneElement(avatar, {
          size: "xxs",
          status: null,
          notification: null,
        } as Partial<AvatarProps>)}
    </>
  );

  const renderDeleteIcon = (
    <>
      {isReactElement(deleteIcon) ? (
        React.cloneElement(deleteIcon, {
          className: cn("h-4 w-4 text-inherit", deleteIcon.props.className || ""),
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
