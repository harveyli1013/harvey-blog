// import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  content: ["./src/**/*.{html,vue,js,jsx,ts,md}", "nuxt.config.ts"],
  theme: {
    extend: {},
  },
  plugins: [
    // iconsPlugin({
    //   collections: getIconCollections(["mingcute"]),
    // }),
  ],
  variants: {},
};
