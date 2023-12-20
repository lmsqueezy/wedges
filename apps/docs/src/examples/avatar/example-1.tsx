import { Avatar } from "@lemonsqueezy/wedges";

export default function Example() {
  return (
    <div className="flex items-center justify-center">
      <Avatar
        alt="Max Quest"
        size="lg"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
        status="green"
        notification="red"
        initials="MQ"
      />
    </div>
  );
}
