import PreviewProvider from "@/components/PreviewProvider";
import PageComponent from "@/components/pages/PageComponent";
import { getCachedClient } from "@/sanity/lib/getClient";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";
import { draftMode } from "next/headers";
import PreviewPageComponent from "@/components/pages/PreviewPageComponent";

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const page = await getCachedClient(preview)(pageQuery, { page: "home" });

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPageComponent page={page} preview={preview} />
      </PreviewProvider>
    );
  }

  return <PageComponent page={page} />;
}
