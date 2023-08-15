import themeField from "./utils/themeField";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    themeField,
    {
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        {
          type: "testModule",
        },
      ],
    },
  ],
};
