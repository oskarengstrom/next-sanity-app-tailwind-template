import { getClient } from "@/sanity/lib/getClient";
import { getLinkProps } from "@/utils/getLinkProps";
import serverLog from "@/utils/serverLog";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import Link from "next/link";
import React from "react";

const headerQuery = groq`*[_type == "header"][0]{
  ...,
  navigationItems[]{
    ...,
    link{
      ...,
      internalReference->
    }
  }
}`;

export default async function Header() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const client = getClient(preview);
  const data = await client.fetch(headerQuery);

  // serverLog(data, 3);

  return (
    <div className="p-4 flex justify-between items-center">
      <div>{data.title}</div>
      <input type="text" placeholder="Search" className="text-black" />
      <div className="flex gap-3 items-center">
        {data.navigationItems.map((item) => (
          <Link key={item._key} {...getLinkProps(item.link)}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
