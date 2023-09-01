"use client";
import { Avatar, AvatarGroup } from "@lmsqueezy/wedges";

export default function AvatarGroupPage() {
  return (
    <main>
      <h1 className="text-wg-6xl text-wg-dark-1 mb-10 dark:text-white">Avatar Group</h1>

      <div className="mt-24 flex flex-col gap-24">
        <section>
          <h2 className="text-wg-xl mb-8">Simple</h2>

          <div className="justify-end">
            <AvatarGroup
              size="xl"
              moreLabel="+3"
              items={[
                {
                  src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60",
                  alt: "A picture of a person",
                },
                {
                  src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60",
                  alt: "A picture of a person",
                },
                {
                  src: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60",
                  alt: "A picture of a person",
                },
                {
                  src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80",
                  alt: "A picture of a person",
                },
                {
                  src: "https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80",
                  alt: "A picture of a person",
                },
                {
                  src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80",
                  alt: "A picture of a person",
                },
                {
                  src: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=250&q=60",
                  alt: "A picture of a person",
                },
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-wg-xl mb-8">Custom</h2>
          <AvatarGroup.Root>
            <AvatarGroup.Item src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80" />
            <AvatarGroup.Item src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80" />
            <AvatarGroup.Item src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60" />

            <AvatarGroup.Label
              className="dark:bg-wg-purple z-40 px-3 text-sm font-medium"
              label="30,000 followers"
            />

            <AvatarGroup.Item
              className="z-30"
              src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=250&q=60"
            />
            <AvatarGroup.Item
              className="z-20"
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?fit=crop&w=250&h=250&q=80"
            />
            <AvatarGroup.Item
              className="z-10"
              src="https://images.unsplash.com/photo-1549068106-b024baf5062d?fit=crop&w=250&q=60"
            />
          </AvatarGroup.Root>
        </section>
      </div>
    </main>
  );
}
