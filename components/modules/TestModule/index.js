import { getClient } from "@/sanity/lib/getClient";
import { groq } from "next-sanity";
import React from "react";

const query = groq`*[_id == $atPageId]
  {
    "data": modules[_key == $_key][0]{
      ...,
    }
  }[0]`;

export default async function TestModule({ _type, _key, atPageId, ...props }) {
  const client = getClient();
  const { data } = await client.fetch(query, {
    atPageId,
    _key,
  });

  return (
    <div>
      (testmodule):
      <span>{data.title}</span>
    </div>
  );
}
