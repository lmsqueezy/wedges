import { Badge } from "@lmsqueezy/wedges";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LinkProperties, allDocs } from "contentlayer/generated";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditPageLink } from "@/components/EditPageLink";
import { GithubIcon } from "@/components/GithubIcon";
import { Mdx } from "@/components/Mdx";
import { Pagination } from "@/components/Pagination";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";
import { siteConfig } from "@/config/siteConfig";
import { getTableOfContents } from "@/lib/toc";

import "@/styles/mdx.scss";
import { ShareIcon } from "@iconicicons/react";

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
  const links = doc.links ?? undefined;
  const showTOC = doc.toc !== false && toc?.items?.length;

  return (
    <div className="w-full xl:grid xl:grid-cols-[1fr_200px] xl:gap-10">
      <div className="mx-auto w-full min-w-0">
        <Breadcrumbs path={breadcrumbs} />

        <div className="mb-12 space-y-3">
          <h2 className="text-surface-900 font-display text-4xl tracking-tight">{title}</h2>

          {description ? (
            <p className="text-surface-600 max-w-md text-base leading-normal [text-wrap:balance] lg:text-lg lg:leading-normal">
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
function Links({ links, size = "md" }: { links?: LinkProperties; size?: "sm" | "md" }) {
  if (!links) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 pt-2">
      {links.source ? (
        <Link href={links.source ?? "#"} rel="noopener noreferrer" target="_blank">
          {/* {<GithubIcon className="h-3 w-3 opacity-100" /> */}
          <Badge after={<ShareIcon />} color="gray" size={size}>
            Source
          </Badge>
        </Link>
      ) : null}

      {links.radix ? (
        <Link href={links.radix ?? "#"} rel="noopener noreferrer" target="_blank">
          {/* <svg
                className="h-3 w-3 opacity-100 transition-colors duration-100"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                  fill="currentcolor"
                />
                <path d="M12 0H4V8H12V0Z" fill="currentcolor" />
                <path
                  d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                  fill="currentcolor"
                />
              </svg> */}
          <Badge after={<ShareIcon />} color="gray" size={size}>
            Radix UI
          </Badge>
        </Link>
      ) : null}

      {links.sandbox ? (
        <Link href={links.source ?? "#"} rel="noopener noreferrer" target="_blank">
          <Badge
            // before={<GithubIcon className="h-3 w-3 opacity-100" />}
            after={<ShareIcon />}
            color="gray"
            size={size}
          >
            CodeSandbox
          </Badge>
        </Link>
      ) : null}
    </div>
  );
}
