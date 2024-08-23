import { cn } from "../../helpers/utils";

const CheckIcon = ({ className, ...otherProps }: React.ComponentProps<"svg">) => (
  <svg
    {...otherProps}
    className={cn("!opacity-100", className)}
    fill="none"
    height="24"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M7.75 12.75L10 15.25L16.25 8.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export { CheckIcon };
