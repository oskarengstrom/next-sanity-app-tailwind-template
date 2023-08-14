import { universalLinkFields } from "../utils/universalLink";

export default {
  name: "bodyPortableText",
  title: "Body Portable Text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        // {title: 'H1', value: 'h1'},
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strikethrough", value: "strike-through" },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            fields: universalLinkFields,
            options: {
              modal: {
                type: "dialog",
              },
            },
          },
        ],
      },
    },
    // {
    //   type: "video",
    // },
    {
      type: "image",
    },
  ],
};
