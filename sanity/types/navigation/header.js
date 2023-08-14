export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Header Title",
      type: "string",
    },
    {
      name: "navigationItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "textLink",
        },
      ],
    },
  ],
};
