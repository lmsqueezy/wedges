import { Avatar, Tooltip } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Tooltip content="Max Quest" sideOffset={8}>
        <Avatar.Root className="h-16 w-16 justify-center rounded-full outline outline-offset-2 outline-wg-red">
          <Avatar.Image
            className="rounded-full"
            src="https://images.unsplash.com/photo-1560800452-f2d475982b96?auto=format&fit=crop&w=250&h=250"
          />
          <Avatar.Fallback className="rounded-full" />
          <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700/50 text-white backdrop-blur-sm">
            MQ
          </span>
          <Avatar.Status className="left-1 bg-wg-red" />
        </Avatar.Root>
      </Tooltip>
    </div>
  );
}
