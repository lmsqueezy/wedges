import { Slider } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-row items-center justify-center gap-12 text-surface-300">
      <Slider defaultValue={[25]} showTooltip="hover" orientation="vertical" />
      <Slider defaultValue={[50]} showTooltip="hover" orientation="vertical" />
      <Slider defaultValue={[75]} showTooltip="hover" orientation="vertical" />
    </div>
  );
}
