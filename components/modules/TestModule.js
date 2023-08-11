import { cachedClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";

const query = groq`*[
  _id == $atPageId]
  {
      "data": modules[_key == $_key][0]{
        ...,
      }
  }[0]`;

export default async function TestModule({
  _type,
  _key,
  atPageSlug,
  atPageId,
  ...props
}) {
  const { data } = await cachedClient(query, { atPageSlug, atPageId, _key });

  console.log("where does this run?");

  return (
    <div>
      title:
      {data.title}
    </div>
  );
}
