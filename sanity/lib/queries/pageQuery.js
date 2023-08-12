import { groq } from "next-sanity";

// Get all posts
export const pageQuery = groq`*[
_type == "page" 
&& slug.current == $page]
{
    ...,
    modules[]{
        ...,
        "atPageId": ^._id,
    }
}[0]`;
