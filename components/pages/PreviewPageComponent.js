"use client";

import { useLiveQuery } from "@sanity/preview-kit";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";
import PageComponent from "./PageComponent";

export default function PreviewPageComponent({ page }) {
  // takes initial data as first arg, query as second arg
  // returns initial data until query is ready, then returns preview data
  const [data] = useLiveQuery(page, pageQuery, { page: "home" });
  return <PageComponent page={data} />;
}
