import PageBuilder from "@/components/PageBuilder";
import { cachedClient, client } from "@/sanity/lib/client";
import { pagePathsQuery } from "@/sanity/lib/queries/pagePathsQuery";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";

export async function generateStaticParams() {
  const pages = await cachedClient(pagePathsQuery);
  return pages;
}

export default async function Page({ params }) {
  const page = await cachedClient(pageQuery, { page: params.page.join("/") });

  if (!page) {
    // TODO: 404 page / notFound?
    return <div>temp 404</div>;
  }

  return <PageBuilder modules={page.modules} />;
}
