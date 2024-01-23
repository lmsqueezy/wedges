import * as React from "react";

import { cn, isReactElement } from "../../helpers/utils";
import { type Avatar, type AvatarProps } from "../Avatar";
import { Badge, type BadgeElement } from "../Badge";
import { Button } from "../Button";
import { CloseIcon } from "../icons";

/* ---------------------------------- Types --------------------------------- */
type ClosableProps = {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable: true;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

type NotClosableProps = {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable?: false;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: never;
};

export type TagProps = React.ComponentPropsWithoutRef<typeof Badge> & {
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
  //   before?: React.ReactElement<HTMLElement>;

  /**
   * Specify alternative close icon to display within the tag
   *
   * * @example
   * // Display a tag with an avatar
   * <Tag closeIcon={<TrashIcon />} />.
   */
  closeIcon?: React.ReactElement<HTMLElement>;
} & (ClosableProps | NotClosableProps);

/* ------------------------------- Components ------------------------------- */
const Tag = React.forwardRef<BadgeElement, TagProps>((props, ref) => {
  const { avatar, before, closeIcon: deleteIcon, closable, onClose, ...otherProps } = props;
  const [visible, setVisible] = React.useState(true);

  /**
   * Handle the close event.
   * @param event - The event object
   */
  const handleClose = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClose) {
        onClose(event);
      }

      if (!event.defaultPrevented) {
        setVisible(false);
      }
    },
    [onClose]
  );

  const renderBefore = (
    <>
      {isReactElement(before)
        ? React.cloneElement(before, {
            className: cn("size-4", before.props.className || ""),
          })
        : before}

      {avatar &&
        React.cloneElement(avatar, {
          size: "xxs",
        } as Partial<AvatarProps>)}
    </>
  );

  const renderDeleteIcon = isReactElement(deleteIcon) ? (
    deleteIcon
  ) : (
    <CloseIcon aria-label="Close" className="size-4" />
  );

  const renderCloseButton: React.ReactElement<HTMLButtonElement> | undefined = closable ? (
    <Button
      before={renderDeleteIcon}
      className="duration-180 size-auto p-0 text-wg-gray-400 transition-colors hover:text-wg-gray-600 focus:outline-1 dark:text-wg-white-500 dark:hover:text-wg-white-700 [&>svg]:!opacity-100"
      shape="pill"
      size="xs-icon"
      variant="link"
      onClick={handleClose}
    />
  ) : undefined;

  if (!visible) {
    return null;
  }

  return <Badge ref={ref} before={renderBefore} {...otherProps} after={renderCloseButton} />;
});

Tag.displayName = "Tag";

export default Tag;
