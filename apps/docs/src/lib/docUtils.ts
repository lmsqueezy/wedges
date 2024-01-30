/* -------------------------------------------------------------------------- */
/*             Includes common documentation components and const.            */
/* -------------------------------------------------------------------------- */

export type LabelDocsParams = {
  label?: boolean;
  description?: boolean;
  tooltip?: boolean;
  helperText?: boolean;
  required?: boolean;
  disabled?: boolean;
  before?: boolean;
  after?: boolean;
  asChild?: boolean;
};

export const createLabelDocs = ({
  label,
  description,
  tooltip,
  helperText,
  required,
  disabled,
  before,
  after,
  asChild,
}: LabelDocsParams) => {
  const components = [];

  if (asChild) {
    components.push([
      {
        value: "asChild",
        description:
          "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      },
      { value: "boolean" },
      { value: "false" },
    ]);
  }

  if (label) {
    components.push([
      {
        value: "label",
        description: "The label of the component.",
      },
      { value: "ReactNode" },
      {},
    ]);
  }

  if (description) {
    components.push([
      {
        value: "description",
        description:
          "Displays supplementary text next to the label, offering more detail or clarification.",
      },
      { value: "ReactNode" },
      {},
    ]);
  }

  if (tooltip) {
    components.push([
      {
        value: "tooltip",
        description:
          "Provides a hoverable tooltip for the label, offering additional context or information.",
      },
      { value: "ReactNode" },
      {},
    ]);
  }

  if (helperText) {
    components.push([
      {
        value: "helperText",
        description:
          "Additional guidance or notes rendered below the component to help explain how to use it.",
      },
      { value: "ReactNode" },
      {},
    ]);
  }

  if (required) {
    components.push([
      {
        value: "required",
        description:
          "Enables a visual indication on the label when set to `true`, signifying that interaction with the component is mandatory.",
      },
      { value: "boolean" },
      { value: "false" },
    ]);
  }

  if (disabled) {
    components.push([
      {
        value: "disabled",
        description:
          "When `true` additional styles will be applied to indicate that the component is disabled and prevent user interaction.",
      },
      {
        value: "boolean",
      },
      { value: "false" },
    ]);
  }

  if (before) {
    components.push([
      {
        value: "before",
        description:
          "The slot to be rendered before the component. This is commonly used to render an icon or other visual element.",
      },
      {
        value: "ReactNode",
      },
      {},
    ]);
  }

  if (after) {
    components.push([
      {
        value: "after",
        description:
          "The slot to be rendered after the component. This is commonly used to render an icon or other visual element.",
      },
      {
        value: "ReactNode",
      },
      {},
    ]);
  }

  return components;
};
