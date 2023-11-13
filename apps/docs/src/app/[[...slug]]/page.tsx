import { allDocs } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Mdx } from "@/components/Mdx";
import { Pagination } from "@/components/Pagination";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";
import { siteConfig } from "@/config/siteConfig";
import { getTableOfContents } from "@/lib/toc";

import "@/styles/mdx.scss";

type DocPageProps = {
  params: {
    slug: string[];
    toc: boolean;
  };
};

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  const title = doc.title;
  const description = doc.description;
  const breadcrumbs = doc.breadcrumbs ?? [];
  const showTOC = doc.toc !== false && toc?.items?.length;

  return (
    <div className="xl:grid xl:grid-cols-[1fr_200px] xl:gap-10">
      <div>
        <Breadcrumbs path={breadcrumbs} />

        <div className="mb-12 space-y-3">
          <h2 className="text-surface-900 font-display text-4xl tracking-tight">{title}</h2>

          {description ? (
            <p className="text-surface-600 max-w-md text-base leading-normal [text-wrap:balance] lg:text-lg lg:leading-normal">
              {description}
            </p>
          ) : null}
        </div>

        <Prose>
          <Mdx code={doc.body.code} />
        </Prose>

        <Pagination doc={doc} />
      </div>

      {showTOC ? <TableOfContents items={toc?.items} /> : null}
    </div>
  );
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });
  const title = doc ? doc.title : "Page not found";
  const description = doc?.description ?? siteConfig.siteDescription;

  return {
    title: `${title} • Wedges Documentation | Lemon Squeezy`,
    description,
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  let slug = "";

  if (!params.slug) {
    slug = "/";
  } else {
    slug = "/" + params.slug?.join("/") ?? "";
  }

  const doc = allDocs.find((doc) => doc.slug === slug);

  return doc ? doc : null;
}
