export type LabelHelperProps = {
  /**
   * Main label displayed above radio buttons. It can be a string, element, or any other
   * renderable node.
   */
  label?: React.ReactNode;

  /**
   * Additional text or information to guide the user. This can be an instruction,
   * a hint, or any other supplementary information. It's rendered below label.
   */
  helperText?: React.ReactNode;

  /**
   * Tooltip displayed next to the label. It can be a string, element, or any other
   * renderable node.
   */
  tooltip?: React.ReactNode;
};
