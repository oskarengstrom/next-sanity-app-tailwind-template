// import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        disabled: "var(--text-disabled)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    // fontSize: {
    //   sm: "0.8rem",
    //   base: "1rem",
    //   xl: "1.25rem",
    //   heading1: [
    //     "4rem",
    //     {
    //       lineHeight: "4rem",
    //       letterSpacing: "-0.02em",
    //       fontWeight: "500",
    //     },
    //   ],
    //   heading2: [
    //     "2.5rem",
    //     {
    //       lineHeight: "2.5rem",
    //       letterSpacing: "-0.02em",
    //       fontWeight: "500",
    //     },
    //   ],
    //   heading3: [
    //     "1.5rem",
    //     {
    //       lineHeight: "1.5rem",
    //       letterSpacing: "-0.02em",
    //       fontWeight: "500",
    //     },
    //   ],
    //   preamble: [
    //     "1.25rem",
    //     {
    //       lineHeight: "1.25rem",
    //       letterSpacing: "-0.02em",
    //       fontWeight: "500",
    //     },
    //   ],
    // },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
