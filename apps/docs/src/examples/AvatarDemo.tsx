import { Avatar } from "@lmsqueezy/wedges";

export default function AvatarDemo() {
  return (
    <div>
      <Avatar
        alt="A picture of a person"
        notification="yellow"
        size="xs"
        src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
      />

      <Avatar
        notification="green"
        size="sm"
        src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
      />

      <Avatar
        notification="green"
        size="md"
        src="https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80"
      />
    </div>
  );
}
