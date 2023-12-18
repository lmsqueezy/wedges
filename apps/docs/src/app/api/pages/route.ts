import { NextResponse, type NextRequest } from "next/server";
import { allDocs } from "contentlayer/generated";

export async function GET(_request: NextRequest) {
  const docs = allDocs.map((doc) => {
    console.log(doc._id);
    return {
      id: doc._id,
      title: doc.title,
      description: doc.description,
    };
  });

  return NextResponse.json(docs);
}

/**
 * [
 * {id, title, description},
 * {},
 * {}
 * ]
 *
 *
 */
