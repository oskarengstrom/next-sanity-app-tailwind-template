import theme from "./types/entities/theme";
import testModule from "./types/modules/testModule";
import header from "./types/navigation/header";
import page from "./types/page";
import bodyPortableText from "./types/portableText/bodyPortableText";
import textLink from "./types/utils/textLink";
import universalLink from "./types/utils/universalLink";

export const schema = {
  types: [
    header,
    theme,

    // pages
    page,

    // modules
    testModule,

    // utils
    textLink,
    universalLink,

    // portable text
    bodyPortableText,
  ],
};
