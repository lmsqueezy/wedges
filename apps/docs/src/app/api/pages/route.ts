import { NextResponse, type NextRequest } from "next/server";
import { allDocs } from "contentlayer/generated";

export async function GET(_request: NextRequest) {
  const docs = allDocs.map((doc) => {
    return {
      id: doc._id,
      title: doc.title,
      description: doc.description,
      raw: doc.body.raw,
    };
  });

  return NextResponse.json(docs);
}
