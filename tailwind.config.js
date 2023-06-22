import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = [
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      mont: ["var(--font-mont)", ...fontFamily.sans],
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      glossy: "#bbc2cc",
      primary: "#B63E96",
      primaryDark: "#58E6D9", // 80,230,217
      gatewayBlue: "#0b3080",
    },
  },
};
export const plugins = [];
