export const refResolver = (ref) => {
  switch (ref._type) {
    case "page":
      if (ref.slug.current === "home") {
        return "/";
      }
      return `/${ref.slug.current}`;
    // case "articlePage":
    //   return `/articles/${ref.slug.current}`;
    // default:
    //   return "/";
  }
};
