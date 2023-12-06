/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["theme-default", "theme-dark"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "hsl(var(--color-black) / <alpha-value>)",
      white: "hsl(var(--color-white) / <alpha-value>)",
      50: "hsl(var(--bg-50) / <alpha-value>)",
      100: "hsl(var(--bg-100) / <alpha-value>)",
      200: "hsl(var(--bg-200) / <alpha-value>)",
      300: "hsl(var(--bg-300) / <alpha-value>)",
      400: "hsl(var(--bg-400) / <alpha-value>)",
      500: "hsl(var(--bg-500) / <alpha-value>)",
      600: "hsl(var(--bg-600) / <alpha-value>)",
      700: "hsl(var(--bg-700) / <alpha-value>)",
      800: "hsl(var(--bg-800) / <alpha-value>)",
      900: "hsl(var(--bg-900) / <alpha-value>)",
      950: "hsl(var(--bg-950) / <alpha-value>)",
      foreground: "hsl(var(--text-strong) / <alpha-value>)",
      divider: "hsl(var(--bg-inverted) / 20%)",
    },
    textColor: {
      strong: "hsl(var(--text-strong) / <alpha-value>)",
      weak: "hsl(var(--text-weak) / <alpha-value>)",
      disabled: "hsl(var(--text-disabled) / <alpha-value>)",
      inverted: "hsl(var(--text-inverted) / <alpha-value>)",
    },

    extend: {
      backgroundColor: {
        default: "hsl(var(--bg-default) / <alpha-value>)",
        inverted: "hsl(var(--bg-inverted) / <alpha-value>)",
      },
      boxShadow: {
        border: "inset 0 0 0 1px hsl(var(--text-weak))",
      },
      ringColor: {
        default: "hsl(var(--focus-ring) / <alpha-value>)",
      },
      fontFamily: {
        default: ["var(--font-default)", "sans-serif"],
      },
      animation: {
        loadingJump: "loadingJump 1s infinite ease-in-out",
      },
      keyframes: {
        loadingJump: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-4px)" },
        },
      },
      transitionDuration: {
        themeSwitch: "350ms",
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xPadMax: "1600px",
      "to-xl": { max: "1439px" },
      "to-lg": { max: "975px" },
      "to-md": { max: "767px" },
      "to-sm": { max: "479px" },
      "only-xs": { max: "479px" },
      "only-sm": { min: "478px", max: "767px" },
      "only-md": { min: "768px", max: "975px" },
      "only-lg": { min: "976px", max: "1439px" },
      pointer: { raw: "(pointer: fine)" },
      touch: { raw: "(pointer: coarse)" },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
