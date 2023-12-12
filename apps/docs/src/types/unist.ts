import { type Node } from "unist-builder/lib";

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
