import { cachedClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";

const query = groq`*[
  _type == "page" 
  && slug.current == $page]
  {
      "data": modules[_key == $key][0]{
        ...,
      }
  }[0]`;

export default async function TestModule({
  _type,
  _key,
  atPageSlug,
  ...props
}) {
  const { data } = await cachedClient(query, { page: atPageSlug, key: _key });

  return <div>title: {data.title}</div>;
}
