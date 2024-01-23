import { CheckCircleIcon, CloseCircleIcon, CloseIcon, SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="inline-flex w-full max-w-[400px] flex-col gap-y-12">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText="27MB of 60MB"
        indicator="50%"
        label="Uploading..."
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />

      <ProgressBar
        afterIndicator={<CheckCircleIcon className="text-wg-green" />}
        color="green"
        helperText="60MB of 60MB"
        indicator="100%"
        label="Uploading Complete"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={100}
      />

      <ProgressBar
        afterIndicator={<CloseCircleIcon className="text-wg-red" />}
        color="red"
        helperText={<span className="text-destructive">Oops, something went wrong</span>}
        label="Uploading Failed"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={100}
      />

      <ProgressBar
        color="green"
        indicator="368"
        label="Class A"
        max={500}
        value={368}
        variant="inline"
      />

      <ProgressBar
        color="orange"
        indicator="211"
        label="Class B"
        max={500}
        value={211}
        variant="inline"
      />

      <ProgressBar
        color="red"
        indicator="96"
        label="Class C"
        max={500}
        value={96}
        variant="inline"
      />

      <ProgressBar
        afterIndicator={<CloseIcon />}
        color="secondary"
        description="(23.6MB)"
        indicator={<span className="text-surface-500">50% (9 sec left)</span>}
        label="design system.fig"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
      />

      <ProgressBar indicator="70%" label="Please wait..." value={70} color="secondary" />

      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        indicator="50%"
        label="Progress"
        tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        value={50}
        variant="inline"
      />

      <ProgressBar indicator="50% Complete" value={50} variant="inline" color="blue" />

      <ProgressBar
        afterIndicator={<CloseIcon />}
        description="35%"
        value={35}
        variant="inline"
        color="yellow"
      />

      <ProgressBar value={70} color="pink" helperText="(650MB/1.12GB) · 17 seconds remaining" />
    </div>
  );
}
