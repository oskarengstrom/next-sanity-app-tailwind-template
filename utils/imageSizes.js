// Usage:
// imageSizes({
//   DEFAULT: "100vw", // Defaults to 100vw
//   sm: "80vw",
//   md: "60vw",
//   lg: "60vw",
//   xl: "40vw",
// })

import tailwindConfig from "@/tailwind.config";

export default function imageSizes(sizes) {
  const breakpoints = tailwindConfig.theme.screens;

  let output = "";

  if (typeof sizes === "string") {
    return sizes;
  }

  if (typeof sizes === "object") {
    output += `${sizes.DEFAULT || "100vw"}`;

    Object.keys(breakpoints).map((key) => {
      if (sizes[key]) {
        output += `, (min-width: ${breakpoints[key]}) ${sizes[key]}`;
      }
    });

    return output;
  }

  return output;
}
