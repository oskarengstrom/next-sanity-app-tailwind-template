import PageComponent from "@/components/pages/PageComponent";
import { getClient } from "@/sanity/lib/getClient";
import { pagePathsQuery } from "@/sanity/lib/queries/pagePathsQuery";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  // @TODO
  // Currently, only published docs will be avail on preview,
  // but their content can be draft data.
  // Also, draftMode is not avail on static generation?
  //
  // const preview = draftMode().isEnabled
  //   ? { token: process.env.SANITY_API_READ_TOKEN }
  //   : undefined;

  const pages = await client.fetch(pagePathsQuery);
  return pages;
}

export default async function Page({ params }) {
  const client = getClient();
  const page = await client.fetch(pageQuery, {
    page: params.page.join("/"),
  });

  if (typeof window !== "undefined") {
    window.document.body.classList.add("test");
  }

  if (!page) {
    // TODO: 404 page / notFound?
    return <div>temp 404</div>;
  }

  return <PageComponent page={page} />;
}
