import themeField from "../utils/themeField";

export default {
  name: "testModule",
  title: "Test Module",
  type: "object",
  fields: [
    themeField,
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
  preview: {
    select: {
      subtitle: "title",
    },
    prepare({ subtitle }) {
      return {
        title: "Test Module",
        subtitle,
      };
    },
  },
};
