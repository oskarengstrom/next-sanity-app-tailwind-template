export default {
  name: "theme",
  title: "Theme",
  type: "string",
  options: {
    list: [
      { title: "Default", value: "theme-default" },
      { title: "Light Blue", value: "theme-light-blue" },
      { title: "Dark", value: "theme-dark" },
    ],
  },
  initialValue: "theme-default",
};
