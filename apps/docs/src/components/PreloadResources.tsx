"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID;

  if (ALGOLIA_APP_ID && ALGOLIA_APP_ID.trim() !== "") {
    ReactDOM.preconnect(`https://${ALGOLIA_APP_ID}-dsn.algolia.net`, { crossOrigin: "anonymous" });
  }

  return null;
}
