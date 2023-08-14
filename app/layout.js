import classNames from "classnames";
import "./globals.css";
import "./themes.css";
import { Inter } from "next/font/google";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={classNames(inter.className, "")}>{children}</body>
    </html>
  );
}
