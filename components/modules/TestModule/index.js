import { getClient } from "@/sanity/lib/getClient";
import serverLog from "@/utils/serverLog";
import classNames from "classnames";
import { groq } from "next-sanity";
import React from "react";

const query = groq`*[_id == $atPageId]
  {
    "data": modules[_key == $_key][0]{
      ...,
      theme,
    }
  }[0]`;

export default async function TestModule({ _type, _key, atPageId, ...props }) {
  const client = getClient();
  const { data } = await client.fetch(query, {
    atPageId,
    _key,
  });

  return (
    <section
      className={classNames(data.theme || "theme-default", "bg-primary")}
    >
      <div className="xl:container xl:mx-auto px-4 xl:px-0 py-10">
        {data.title}
      </div>
    </section>
  );
}
