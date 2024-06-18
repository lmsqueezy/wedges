import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

import { type FrontmatterProps } from "@/types/mdx";
import { siteConfig } from "@/config/siteConfig";

import { toTitleCase } from "../utils";

function getArticles(dirPath: string) {
  const fileMap = new Map<string, string>([["Introduction", "/"]]);

  function traverseDir(currentPath: string) {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const fullPath = path.join(currentPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDir(fullPath);
      } else if (stat.isFile() && path.extname(fullPath) === ".mdx") {
        const title = toTitleCase(path.basename(fullPath, ".mdx"));
        const url = fullPath.replace(process.cwd(), "").replace("public", "").replace("//docs", "");
        fileMap.set(title, url);
      }
    });
  }

  traverseDir(dirPath);
  return fileMap;
}

export async function getMDXData(slug?: string[]) {
  let filePath = "";
  let folderPath = `${siteConfig.basePath}/docs/`;
  const docsDir = path.join(process.cwd(), "public", "docs");

  if (!slug) {
    filePath = path.join(process.cwd(), "public", "docs", "index.mdx");
  } else {
    if (slug.length === 1) {
      filePath = path.join(process.cwd(), "public", "docs", `${slug[0]}.mdx`);

      if (!fs.existsSync(filePath)) {
        filePath = path.join(process.cwd(), "public", "docs", `${slug[0]}/index.mdx`);
        folderPath += slug[0];
      }
    } else {
      filePath = path.join(process.cwd(), "public", "docs", `${slug[0]}/${slug[1]}.mdx`);
      folderPath = `../${folderPath}/${slug[0]}`;
    }
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdown = fs.readFileSync(filePath, "utf-8");
  const articles = getArticles(docsDir);
  console.log({ articles });

  const { frontmatter } = await compileMDX<FrontmatterProps>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  return {
    frontmatter,
    folderPath,
    filePath,
    markdown,
  };
}
