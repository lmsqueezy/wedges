"use client";
import PageTitle from "@/components/PageTitle";
import { Avatar } from "@lmsqueezy/wedges";

export default function AvatarPage() {
  return (
    <main>
      <PageTitle>Avatar</PageTitle>

      <div className="mt-24 flex flex-col gap-24">
        {/* Image */}
        <section>
          <h2 className="text-wg-xl mb-8">Image</h2>
          <div className="flex items-center gap-6">
            <Avatar
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
              notification="yellow"
              size="xs"
              alt="A picture of a person"
            />

            <Avatar
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
              notification="green"
              size="sm"
            />

            <Avatar
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
              notification="green"
              size="md"
            />

            <Avatar
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
              notification="green"
              size="lg"
            />

            <Avatar
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
              notification="green"
              size="xl"
            />

            <Avatar
              src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
              status="default"
              notification="green"
              size="2xl"
              alt="A picture of a person"
            />
          </div>
        </section>

        {/* Initials */}
        <section>
          <h2 className="text-wg-xl mb-8">Initial</h2>
          <div className="flex items-center gap-6">
            <Avatar status="yellow" initials="Wedges" notification="green" size="xs" />
            <Avatar status="yellow" initials="e" notification="green" size="sm" />
            <Avatar status="yellow" initials="d" notification="green" size="md" />
            <Avatar status="yellow" initials="g" notification="green" size="lg" />
            <Avatar status="yellow" initials="e" notification="green" size="xl" />
            <Avatar
              status="yellow"
              initials="S"
              notification="green"
              size="2xl"
              className="bg-teal-800 outline outline-offset-2 outline-teal-500"
            />
          </div>
        </section>

        {/* Fallback */}
        <section>
          <h2 className="text-wg-xl mb-8">Fallback</h2>
          <div className="flex items-center gap-6">
            <Avatar status="yellow" notification="green" size="xs" />
            <Avatar status="yellow" notification="green" size="sm" />
            <Avatar status="yellow" notification="green" size="md" />
            <Avatar status="yellow" notification="green" size="lg" />
            <Avatar status="yellow" notification="green" size="xl" />
            <Avatar status="yellow" notification="green" size="2xl" />
          </div>
        </section>

        {/* Custom */}
        <section>
          <h2 className="text-wg-xl mb-8">Custom</h2>

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

            <Avatar>Hello</Avatar>
          </div>
        </section>
      </div>
    </main>
  );
}
