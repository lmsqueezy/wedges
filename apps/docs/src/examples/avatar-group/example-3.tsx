import { AvatarGroup } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="mx-auto max-w-fit rounded-lg p-12 wg-bg-orange-100 dark:wg-bg-yellow-950">
      <AvatarGroup
        size="xl"
        items={[
          {
            src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 1",
          },
          {
            src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 2",
          },
          {
            src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=250&h=250&auto=format&fit=crop",
            alt: "Avatar 2",
          },
        ]}
      />
    </div>
  );
}
