import { type Node } from "unist";

export type TOCItem = {
  title: string;
  url: string;
  level: number;
  children: TOCItem[];
};

export type FrontmatterProps = {
  title: string;
  description?: string;
  links?: {
    radix?: string;
    source?: string;
  };
  toc?: boolean;
};

export interface UnistNode extends Node {
  type: string;
  name?: string;
  tagName?: string;
  raw?: string;
  value?: string;
  properties?: {
    raw?: string;
    className?: string;
    [key: string]: unknown;
  };
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
}

export interface UnistTree extends Node {
  children: UnistNode[];
}
