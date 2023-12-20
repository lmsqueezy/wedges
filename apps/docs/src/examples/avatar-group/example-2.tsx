import { AvatarGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex justify-center">
      <AvatarGroup.Root>
        <AvatarGroup.Item
          size="md"
          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=250"
        />

        <AvatarGroup.Item
          size="md"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&h=250"
        />

        <AvatarGroup.Item
          size="md"
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=250"
        />

        <AvatarGroup.Label className="z-40 bg-primary px-3 text-sm text-white dark:bg-primary">
          42k likes
        </AvatarGroup.Label>

        <AvatarGroup.Item
          className="z-30"
          size="md"
          src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=250&q=60"
        />
        <AvatarGroup.Item
          className="z-20"
          size="md"
          src="https://images.unsplash.com/photo-1560800452-f2d475982b96?fit=crop&w=250&h=250&q=80"
        />
        <AvatarGroup.Item
          className="z-10"
          size="md"
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?fit=crop&w=250&q=60"
        />
      </AvatarGroup.Root>
    </div>
  );
}
