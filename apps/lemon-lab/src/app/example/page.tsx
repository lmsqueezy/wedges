import PageTitle from "@/components/PageTitle";

export default function ExamplePage() {
  return (
    <main>
      <PageTitle>Example</PageTitle>

      <section className="flex gap-4">
        <div className="bg-wg-accent mt-10 flex h-40 w-40 items-center justify-center rounded text-white">
          Accent
        </div>

        <div className="bg-wg-secondary mt-10 flex h-40 w-40 items-center justify-center rounded text-white dark:text-gray-500">
          Secondary
        </div>
      </section>
    </main>
  );
}
