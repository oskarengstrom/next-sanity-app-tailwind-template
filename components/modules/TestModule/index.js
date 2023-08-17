import { getClient } from "@/sanity/lib/getClient";
import serverLog from "@/utils/serverLog";
import { groq } from "next-sanity";
import React from "react";
import TestModule from "./TestModule";

const query = groq`*[_id == $atPageId]
  {
    "data": modules[_key == $_key][0]{
      ...,
      theme,
      picture{
        ...,
        asset->,
      },
    }
  }[0]`;

export default async function ({ _type, _key, atPageId, ...props }) {
  const client = getClient();
  const { data } = await client.fetch(query, {
    atPageId,
    _key,
  });

  return <TestModule data={data} />;
}
