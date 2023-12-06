import PageComponent from "@/components/pages/PageComponent";
import { pagePathsQuery } from "@/sanity/lib/queries/pagePathsQuery";
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
  // // TODO: 404 page / notFound?
  // const client = getClient();
  // const page = await client.fetch(pageQuery, {
  //   page: params.page.join("/"),
  // });
  // if (!page) {
  //   return <div>temp 404</div>;
  // }

  return <PageComponent page={page} />;
}
