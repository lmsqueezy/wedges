import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";

export default function DocPage() {
  return (
    <div className="xl:grid xl:grid-cols-[1fr_300px] xl:gap-10">
      <div>
        <Breadcrumbs title="Getting Started" />

        <Prose>
          <h2>Introduction</h2>
          <p>Hello world</p>
        </Prose>
      </div>

      <TableOfContents
        items={[
          {
            label: "Introduction",
            href: "/test/#introduction",
          },
        ]}
      />
    </div>
  );
}
