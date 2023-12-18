import { Tag } from "@lmsqueezy/wedges";

export default function Example() {
  return (
    <Tag
      closable
      onClose={(e) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        alert("Custom onClose callback with preventDefault()");
      }}
    >
      Tag
    </Tag>
  );
}
