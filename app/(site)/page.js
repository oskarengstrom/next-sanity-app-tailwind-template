import PageComponent from "@/components/pages/PageComponent";
import { getClient } from "@/sanity/lib/getClient";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";
import serverLog from "@/utils/serverLog";
import { draftMode } from "next/headers";

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const client = getClient(preview);
  const page = await client.fetch(pageQuery, {
    page: "home",
  });

  return <PageComponent page={page} />;
}
