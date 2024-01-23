import { ProgressCircle } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        <ProgressCircle value={75} size="xs" />
        <ProgressCircle value={75} size="sm" />
        <ProgressCircle value={75} size="md" />
        <ProgressCircle value={75} size="lg" />
        <ProgressCircle value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="green" value={75} size="xl" />
        <ProgressCircle color="green" value={75} size="lg" />
        <ProgressCircle color="green" value={75} size="md" />
        <ProgressCircle color="green" value={75} size="sm" />
        <ProgressCircle color="green" value={75} size="xs" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="blue" value={75} size="xs" />
        <ProgressCircle color="blue" value={75} size="sm" />
        <ProgressCircle color="blue" value={75} size="md" />
        <ProgressCircle color="blue" value={75} size="lg" />
        <ProgressCircle color="blue" value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="orange" value={75} size="xl" />
        <ProgressCircle color="orange" value={75} size="lg" />
        <ProgressCircle color="orange" value={75} size="md" />
        <ProgressCircle color="orange" value={75} size="sm" />
        <ProgressCircle color="orange" value={75} size="xs" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="pink" value={75} size="xs" />
        <ProgressCircle color="pink" value={75} size="sm" />
        <ProgressCircle color="pink" value={75} size="md" />
        <ProgressCircle color="pink" value={75} size="lg" />
        <ProgressCircle color="pink" value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="yellow" value={75} size="xl" />
        <ProgressCircle color="yellow" value={75} size="lg" />
        <ProgressCircle color="yellow" value={75} size="md" />
        <ProgressCircle color="yellow" value={75} size="sm" />
        <ProgressCircle color="yellow" value={75} size="xs" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="red" value={75} size="xs" />
        <ProgressCircle color="red" value={75} size="sm" />
        <ProgressCircle color="red" value={75} size="md" />
        <ProgressCircle color="red" value={75} size="lg" />
        <ProgressCircle color="red" value={75} size="xl" />
      </div>

      <div className="flex items-center gap-6">
        <ProgressCircle color="secondary" value={75} size="xl" />
        <ProgressCircle color="secondary" value={75} size="lg" />
        <ProgressCircle color="secondary" value={75} size="md" />
        <ProgressCircle color="secondary" value={75} size="sm" />
        <ProgressCircle color="secondary" value={75} size="xs" />
      </div>
    </div>
  );
}
