import classNames from "classnames";
import "@/app/globals.css";
import "@/app/themes.css";
import { Inter } from "next/font/google";
import { getClient } from "@/sanity/lib/getClient";
import { pageQuery } from "@/sanity/lib/queries/pageQuery";
import { draftMode, headers } from "next/headers";
import serverLog from "@/utils/serverLog";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Template yey2",
    description: "a descriptipon",
    openGraph: {
      title: "Template yey2",
      description: "a descriptipon",
      // images: [`/api/og?title=Next.js App Router`],
    },
    keywords: ["Next.js", "React", "JavaScript"],
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RootTemplate({ children, ...props }) {
  // Complicated way to add theme to current route:
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const client = getClient(preview);
  const page = await client.fetch(pageQuery, {
    page: activePath.split("/")[1] === "" ? "home" : activePath.split("/")[1],
  });

  //   console.log(page);
  console.log("- - -");

  return (
    <html lang="en" className="">
      <body
        className={classNames(
          inter.className,
          // "bg-slate-500"
          // "min-h-screen"

          page?.theme &&
            classNames(page.theme || "theme-default", "bg-primary text-primary")
        )}
      >
        {children}
      </body>
    </html>
  );
}
