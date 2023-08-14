export const universalLinkFields = [
  {
    name: "href",
    type: "url",
    title: "External href",
    validation: (Rule) =>
      Rule.uri({
        scheme: ["http", "https", "mailto", "tel"],
      }),
    hidden: ({ parent, value }) =>
      !!parent?.internalReference || !!parent?.mediaItem,
    description: "Link to an external URL",
  },
  {
    name: "internalReference",
    type: "reference",
    title: "Internal Reference",
    to: [{ type: "page" }],
    hidden: ({ parent, value }) => !!parent?.href || !!parent?.mediaItem,
    description: "Link between pages on the site",
  },
  {
    name: "mediaItem",
    type: "file",
    title: "Media Item",
    hidden: ({ parent, value }) =>
      !!parent?.href || !!parent?.internalReference,
    description: "Link to a media item (will open in new tab)",
  },
  {
    name: "anchor",
    type: "string",
    title: "#Anchor",
    hidden: ({ parent, value }) => !!parent?.href || !!parent?.mediaItem,
    description:
      'The ID of an element on the page to scroll to, (no "#". Only available for internal links)',
  },
  {
    name: "blank",
    type: "boolean",
    title: "Blank",
    initialValue: false,
    options: {
      layout: "checkbox",
    },
    description: "Open in new tab",
    hidden: ({ parent, value }) => !!parent?.mediaItem,
  },
  {
    name: "additionalProperties",
    type: "array",
    title: "Additional Properties",
    of: [
      {
        type: "object",
        fields: [
          {
            name: "property",
            type: "string",
            title: "Property",
            validation: (Rule) =>
              Rule.required()
                .regex(/^[a-z0-9-]+$/)
                .error(
                  "Required and must be lowercase alphanumeric with dashes"
                ),
          },
          {
            name: "value",
            type: "string",
            title: "Value",
            validation: (Rule) => Rule.required(),
          },
        ],
      },
    ],
    description:
      'Additional properties/attributes to add to the link element (e.g. "id" or "data-*")',
  },
];

export default {
  name: "universalLink",
  title: "Universal Link",
  type: "object",
  fields: universalLinkFields,
};
