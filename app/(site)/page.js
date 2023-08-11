import PageBuilder from "@/components/PageBuilder";
import { cachedClient, client } from "@/sanity/lib/client";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";

export default async function Home() {
  const page = await cachedClient(pageQuery, { page: "home" });
  // const page = await client.fetch(pageQuery, { page: "home" });

  return <PageBuilder modules={page.modules} />;
}
