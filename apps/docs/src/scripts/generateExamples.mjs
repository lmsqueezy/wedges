/* eslint-disable no-console */
// @ts-nocheck
import fs from "fs";
import path from "path";
import { rimraf } from "rimraf";

/* -------------------------------------------------------------------------- */
/*                               Build index.ts                               */
/* -------------------------------------------------------------------------- */
const sluggify = (str) => str.replace(/[\s_]+/g, "-").replace(/[^\w-]+/g, "");

const examplesPath = path.join(process.cwd(), "src/examples");
const indexPath = `${examplesPath}/index.ts`;

console.log("  🍋 🚀 Generating component examples...");

let indexContent = `/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* -------------------------------------------------------------------------- */
/*                    GENERATED FILE, DO NOT EDIT MANUALLY!                   */
/* -------------------------------------------------------------------------- */
import { lazy, type LazyExoticComponent } from "react";

type Demo = {
  component: LazyExoticComponent<() => JSX.Element>;
  code: string;
};

export const Demos: Record<string, Demo> = {
`;

// Process directory
const processDirectory = (dir, prefix = "") => {
  try {
    const entries = fs.readdirSync(dir);

    entries.forEach((entry) => {
      if (entry === "index.ts") {
        return;
      }

      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);

      // Validate that the path is within the examplesPath
      if (!fullPath.startsWith(examplesPath)) {
        throw new Error("Invalid path detected");
      }

      if (stat.isFile() && /\.(j|t)sx?$/.test(entry)) {
        const slug = sluggify(path.basename(entry, path.extname(entry)));
        const key = prefix + slug;
        const relativePath = `@/examples/${path
          .relative(examplesPath, fullPath)
          .replace(/\\/g, "/")}`;

        const fileContents = fs
          .readFileSync(fullPath, "utf8")
          .replace(/`/g, "\\`")
          .replace("export default function", "export function");

        indexContent += `  "${key}": {
    component: lazy(() => import("${relativePath}")),
    code: \`${fileContents}\`,\n  },\n`;
      } else if (stat.isDirectory()) {
        processDirectory(fullPath, `${sluggify(entry)}/`);
      }
    });
  } catch (error) {
    console.error("Error processing directory:", error);
    throw error; // rethrow the error to be caught by the caller
  }
};

// Read the examples directory
try {
  processDirectory(examplesPath);

  // Finish building the index
  indexContent += "};\n";

  // Write file.
  rimraf.sync(indexPath);
  fs.writeFileSync(indexPath, indexContent);

  console.log("  ✅ Component examples generated!");
} catch (error) {
  console.error("Error generating component examples:", error);
  process.exit(1);
}
