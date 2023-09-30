"use client";
import { Avatar } from "@lmsqueezy/wedges";

import PageTitle from "@/components/PageTitle";

export default function AvatarPage() {
  return (
    <main>
      <PageTitle>Avatar</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        {/* Image */}
        <section>
          <h2 className="mb-8 text-xl">Image</h2>
          <div className="flex items-center gap-6">
            <Avatar
              alt="A picture of a person"
              notification="yellow"
              size="xs"
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
            />

            <Avatar
              notification="green"
              size="sm"
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
            />

            <Avatar
              notification="green"
              size="md"
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
            />

            <Avatar
              notification="green"
              size="lg"
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
            />

            <Avatar
              notification="green"
              size="xl"
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
            />

            <Avatar
              alt="A picture of a person"
              notification="green"
              size="2xl"
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
            />
          </div>
        </section>

        {/* Initials */}
        <section>
          <h2 className="mb-8 text-xl">Initial</h2>
          <div className="flex items-center gap-6">
            <Avatar initials="Wedges" notification="green" size="xs" status="yellow" />
            <Avatar initials="e" notification="green" size="sm" status="yellow" />
            <Avatar initials="d" notification="green" size="md" status="yellow" />
            <Avatar initials="g" notification="green" size="lg" status="yellow" />
            <Avatar initials="e" notification="green" size="xl" status="yellow" />
            <Avatar
              className="bg-teal-800 outline outline-offset-2 outline-teal-500"
              initials="S"
              notification="green"
              size="2xl"
              status="yellow"
            />
          </div>
        </section>

        {/* Fallback */}
        <section>
          <h2 className="mb-8 text-xl">Fallback</h2>
          <div className="flex items-center gap-6">
            <Avatar notification="green" size="xs" status="yellow" />
            <Avatar notification="green" size="sm" status="yellow" />
            <Avatar notification="green" size="md" status="yellow" />
            <Avatar notification="green" size="lg" status="yellow" />
            <Avatar notification="green" size="xl" status="yellow" />
            <Avatar notification="green" size="2xl" status="yellow" />
          </div>
        </section>

        {/* Custom */}
        <section>
          <h2 className="mb-8 text-xl">Custom</h2>

          <div className="flex items-center gap-6">
            <Avatar.Root className="h-16 w-16 justify-center">
              <Avatar.Image
                className="rounded-md"
                src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              />

              <Avatar.Fallback className="rounded-2xl" />

              <span className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-700/60 text-white backdrop-blur-sm">
                WG
              </span>

              <Avatar.Status className="bg-wg-red -bottom-1 -left-1" />
              <Avatar.Notification className="-right-0.5 -top-1 bg-purple-400" />
            </Avatar.Root>
          </div>
        </section>
      </div>
    </main>
  );
}
