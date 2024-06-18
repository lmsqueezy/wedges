import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@lemonsqueezy/wedges";

import { type FrontmatterProps } from "@/types/mdx";
import { type PageProps } from "@/types/page";
import { siteConfig } from "@/config/siteConfig";
import { getMDXData } from "@/lib/mdx/mdx";
import { CustomMDX } from "@/components/CustomMDX";
import { EditPageLink } from "@/components/EditPageLink";
import { GithubIcon, RadixIcon } from "@/components/Icons";
import { Pagination } from "@/components/Pagination";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";

import "@/styles/mdx.scss";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const mdxData = await getMDXData(props.params.slug);
  const title = mdxData ? mdxData.frontmatter.title : "Page not found";
  const description = mdxData ? mdxData.frontmatter.description : siteConfig.siteDescription;

  return {
    title: `${title} — Wedges | Lemon Squeezy`,
    description,
  };
}

export default async function DocPage(props: PageProps) {
  const { slug } = props.params;
  const mdxData = await getMDXData(slug);

  if (!mdxData) {
    notFound();
  }

  const { frontmatter, folderPath, markdown } = mdxData;
  const { toc: showToc = true, title, description, links } = frontmatter;

  return (
    <>
      <div className="mx-auto w-full min-w-0">
        <header
          aria-labelledby="page-title"
          aria-describedby="page-description"
          className="mb-10 space-y-3"
        >
          <h2
            id="page-title"
            className="font-display text-4xl text-[32px] leading-10 tracking-tight text-surface-900"
          >
            {title}
          </h2>

          {description ? (
            <p
              id="page-description"
              className="max-w-prose text-base text-gray-500 [text-wrap:balance] lg:text-lg"
            >
              {description}
            </p>
          ) : null}

          <Links links={links} />
        </header>

        <Prose>
          <CustomMDX folderPath={folderPath} source={markdown} />
        </Prose>

        <Pagination pageHref={mdxData?.url} />
        <EditPageLink />
      </div>

      {showToc ? <TableOfContents source={markdown} /> : null}
    </>
  );
}

function Links({ links }: { links?: FrontmatterProps["links"] }) {
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
          <Link href={links.radix} rel="noopener noreferrer" target="_blank">
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
          <Link href={links.source} rel="noopener noreferrer" target="_blank">
            Source
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
