export default {
  name: "textLink",
  title: "Text Link",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) =>
        Rule.custom((label, context) => {
          if (
            (context.parent.link.internalReference ||
              context.parent.link.href) &&
            !label
          ) {
            return "Label is required if link is set.";
          }
          return true;
        }),
    },
    {
      name: "link",
      title: "Link",
      type: "universalLink",
      validation: (Rule) =>
        Rule.custom((link, context) => {
          if (context.parent.label && !link.internalReference && !link.href) {
            return "Link is required if label is set.";
          }
          return true;
        }),
    },
  ],
};
