import { type ReactNode } from "react";

export type PageProps = {
  children: ReactNode;
  params: { slug?: string[] };
};
