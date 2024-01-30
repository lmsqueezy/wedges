/* -------------------------------------------------------------------------- */
/*             Includes common documentation components and const.            */
/* -------------------------------------------------------------------------- */

export const createLabelDocs = ({
  label,
  description,
  tooltip,
  helperText,
  required,
  disabled,
}: {
  label?: boolean;
  description?: boolean;
  tooltip?: boolean;
  helperText?: boolean;
  required?: boolean;
  disabled?: boolean;
}) => {
  const components = [];

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

  return components;
};
