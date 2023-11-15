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

console.log("🚀 Generating component examples...");
console.log({ examplesPath, indexPath });

let indexContent = `// @ts-nocheck
// Generated file - do not edit manually!
import { lazy } from "react";

export const Demos: Record<string, any> = {
`;

// Process directory
const processDirectory = (dir, prefix = "") => {
  const entries = fs.readdirSync(dir);

  entries.forEach((entry) => {
    // Skip index and _index files
    if (entry === "index.ts") {
      return;
    }

    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isFile() && /\.(j|t)sx?$/.test(entry)) {
      const slug = sluggify(path.basename(entry, path.extname(entry)));
      const key = prefix + slug;
      const relativePath = `@/examples/${path
        .relative(examplesPath, fullPath)
        .replace(/\\/g, "/")}`;
      const fileContents = fs.readFileSync(fullPath, "utf8").replace(/`/g, "\\`");

      indexContent += `  '${key}': { 
    component: lazy(() => import('${relativePath}')), 
    code: \`${fileContents}\` },\n`;
    } else if (stat.isDirectory()) {
      processDirectory(fullPath, `${sluggify(entry)}/`);
    }
  });
};

// Read the examples directory
processDirectory(examplesPath);

// Finish building the index
indexContent += "};\n";

// Write file.
rimraf.sync(indexPath);
fs.writeFileSync(indexPath, indexContent);

console.log("✅ Component examples generated!");
