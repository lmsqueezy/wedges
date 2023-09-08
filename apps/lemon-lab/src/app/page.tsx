import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full max-w-5xl grow">
        <PageTitle>Wedges Playground</PageTitle>

        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col p-10">
            <Link href="avatar" className="underline">
              Avatar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
