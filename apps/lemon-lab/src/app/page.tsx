import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full max-w-5xl grow">
        <h1 className="mb-24 text-center text-4xl tracking-tight">Lemon Lab</h1>

        <div className="flex flex-col items-start gap-5">
          <div className="bg-wg-white-50 flex flex-col gap-5 p-10">
            <Link href="avatar" className="underline">
              Avatar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
