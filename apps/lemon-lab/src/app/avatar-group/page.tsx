"use client";

import { AvatarGroup } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function AvatarGroupPage() {
  return (
    <main>
      <PageTitle>Avatar Group</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        <section>
          <h2 className="mb-8 text-xl">Simple</h2>

          <section>
            <h3 className="mb-8 text-sm">Previous on Top, Initials as fallback</h3>

            <AvatarGroup
              items={[
                {
                  src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60",
                  alt: "A picture of a person",
                  initials: "w",
                },
                {
                  alt: "A picture of a person",
                  initials: "e",
                },
                {
                  src: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60",
                  alt: "A picture of a person",
                  initials: "d",
                },
                {
                  src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80",
                  alt: "A picture of a person",
                  initials: "g",
                },
                {
                  src: "https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80",
                  alt: "A picture of a person",
                  initials: "e",
                },
                {
                  src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80",
                  alt: "A picture of a person",
                  initials: "s",
                },
              ]}
              moreLabel="+3"
              previousOnTop={true}
              size="md"
            />
          </section>

          <section className="mt-24">
            <h3 className="mb-8 text-sm">Next on Top</h3>

            <AvatarGroup
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
              moreLabel="+3"
              size="xl"
            />
          </section>
        </section>

        <section>
          <h2 className="mb-8 text-xl">Custom</h2>
          <AvatarGroup.Root>
            <AvatarGroup.Item src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80" />
            <AvatarGroup.Item src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80" />
            <AvatarGroup.Item src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60" />

            <AvatarGroup.Label className="bg-primary text-primary-foreground z-40 px-3 text-sm">
              3,000 followers
            </AvatarGroup.Label>

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
