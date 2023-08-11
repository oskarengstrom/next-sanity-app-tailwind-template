import { groq } from "next-sanity";

export const pagePathsQuery = groq`
*[_type == "page" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
