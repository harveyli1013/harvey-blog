import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mingcute"]),
    }),
  ],
  variants: {},
  content: {
    //enable remove unused CSS only in production
    enabled: process.env.NODE_ENV === "production",
    //any file containing the reference of CSS styles by class name.
    content: ["./src/**/*.{html,vue,js,jsx,ts}", "nuxt.config.js"],
  },
};
