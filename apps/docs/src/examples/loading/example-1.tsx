import { Loading } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="grid gap-y-12">
      <div className="flex items-center justify-center gap-7">
        <Loading type="spinner" size="xxl" />
        <Loading type="spinner" size="xl" />
        <Loading type="spinner" size="lg" />
        <Loading type="spinner" size="md" />
        <Loading type="spinner" size="sm" />
        <Loading type="spinner" size="xs" />
        <Loading type="spinner" size="xxs" />
      </div>

      <div className="flex items-center justify-center gap-7">
        <Loading type="line" size="xxs" />
        <Loading type="line" size="xs" />
        <Loading type="line" size="sm" />
        <Loading type="line" size="md" />
        <Loading type="line" size="lg" />
        <Loading type="line" size="xl" />
        <Loading type="line" size="xxl" />
      </div>

      <div className="flex items-center justify-center gap-7">
        <Loading type="dots" size="xxl" />
        <Loading type="dots" size="xl" />
        <Loading type="dots" size="lg" />
        <Loading type="dots" size="md" />
        <Loading type="dots" size="sm" />
        <Loading type="dots" size="xs" />
        <Loading type="dots" size="xxs" />
      </div>
    </div>
  );
}
