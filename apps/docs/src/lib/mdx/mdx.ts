import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

import { type FrontmatterProps } from "@/types/mdx";
import { siteConfig } from "@/config/siteConfig";

export async function getMDXData(slug?: string[]) {
  let filePath = "";
  let folderPath = `${siteConfig.basePath}/docs/`;
  let url = "/";

  if (!slug) {
    filePath = path.join(process.cwd(), "public", "docs", "index.mdx");
  } else {
    if (slug.length === 1) {
      filePath = path.join(process.cwd(), "public", "docs", `${slug[0]}.mdx`);
      url += slug[0];

      if (!fs.existsSync(filePath)) {
        filePath = path.join(process.cwd(), "public", "docs", `${slug[0]}/index.mdx`);
        folderPath += slug[0];
      }
    } else {
      filePath = path.join(process.cwd(), "public", "docs", `${slug[0]}/${slug[1]}.mdx`);
      folderPath = `../${folderPath}/${slug[0]}`;
      url += `${slug[0]}/${slug[1]}`;
    }
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdown = fs.readFileSync(filePath, "utf-8");

  const { frontmatter } = await compileMDX<FrontmatterProps>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  return {
    frontmatter,
    folderPath,
    filePath,
    markdown,
    url,
  };
}
