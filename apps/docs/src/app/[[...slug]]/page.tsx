import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@lmsqueezy/wedges";
import { allDocs, type LinkProperties } from "contentlayer/generated";

import { siteConfig } from "@/config/siteConfig";
import { getTableOfContents } from "@/lib/toc";
import { EditPageLink } from "@/components/EditPageLink";
import { GithubIcon, RadixIcon, StackBlitzIcon } from "@/components/Icons";
import { Mdx } from "@/components/Mdx";
import { Pagination } from "@/components/Pagination";
import { PreloadResources } from "@/components/PreloadResources";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";

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
  //   const breadcrumbs = doc.breadcrumbs ?? [];
  const links = doc.links ?? undefined;
  const showTOC = doc.toc !== false && toc?.items?.length;

  return (
    <div className="w-full xl:grid xl:grid-cols-[1fr_200px] xl:gap-10">
      <PreloadResources />

      <div className="mx-auto w-full min-w-0">
        {/* <Breadcrumbs path={breadcrumbs} /> */}

        <div className="mb-10 space-y-3">
          <h2 className="font-display text-4xl tracking-tight text-surface-900">{title}</h2>

          {description ? (
            <p className="max-w-prose text-base text-gray-500 [text-wrap:balance] lg:text-lg">
              {description}
            </p>
          ) : null}

          <Links links={links} />
        </div>

        <Prose>
          <Mdx code={doc.body.code} />
        </Prose>

        <Pagination doc={doc} />
        <EditPageLink />
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

/* ------------------------------ Header links ------------------------------ */
function Links({ links }: { links?: LinkProperties }) {
  if (!links) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 pt-2">
      {links.radix ? (
        <Button
          asChild
          before={<RadixIcon aria-hidden />}
          className="gap-1 px-3"
          size="sm"
          variant="tertiary"
        >
          <Link href={links.radix ?? "#"} rel="noopener noreferrer" target="_blank">
            Radix UI
          </Link>
        </Button>
      ) : null}

      {links.source ? (
        <Button
          asChild
          before={<GithubIcon aria-hidden />}
          className="gap-1 px-3"
          size="sm"
          variant="tertiary"
        >
          <Link href={links.source ?? "#"} rel="noopener noreferrer" target="_blank">
            Source
          </Link>
        </Button>
      ) : null}

      {links.sandbox ? (
        <Button
          asChild
          before={<StackBlitzIcon aria-hidden />}
          className="gap-1 px-3"
          size="sm"
          variant="tertiary"
        >
          <Link href={links.sandbox ?? "#"} rel="noopener noreferrer" target="_blank">
            StackBlitz
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
