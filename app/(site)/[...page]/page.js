import PageComponent from "@/components/pages/PageComponent";
import { getClient } from "@/sanity/lib/getClient";
import { pagePathsQuery } from "@/sanity/lib/queries/pagePathsQuery";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  // BUG? TODO!
  // Currently, only published docs will be avail on preview,
  // but their content can be draft data.
  //
  // const preview = draftMode().isEnabled
  //   ? { token: process.env.SANITY_API_READ_TOKEN }
  //   : undefined;

  const client = getClient();
  const pages = await client.fetch(pagePathsQuery);
  return pages;
}

export default async function Page({ params }) {
  const client = getClient();
  const page = await client.fetch(pageQuery, {
    page: params.page.join("/"),
  });

  if (!page) {
    // TODO: 404 page / notFound?
    return <div>temp 404</div>;
  }

  return <PageComponent page={page} />;
}
