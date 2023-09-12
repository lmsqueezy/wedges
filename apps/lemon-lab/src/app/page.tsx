import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex grow flex-col items-center justify-center">
      <h1 className="flex w-full max-w-screen-sm flex-col text-8xl">
        <span>Wedges</span>
        <span className="text-surface-foreground-muted self-end">Playground</span>
      </h1>
    </main>
  );
}
