/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-10-20 14:38:27
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-10-25 13:46:41
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === "development" },
  srcDir: "src/",
  ssr: true, // 默认为true false 则是 csr

  app: {
    head: {
      title: "blog",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: "stylesheet", href: "https://awesome-lib.css" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ":root { color: red }" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
    baseURL: "/",
    rootId: "app",
  },

  modules: ["@nuxt/ui"],
  css: ["@/assets/style/global.css"],
  build: {},
  // debug: true,
  devServer: {
    port: 80,
    host: "localhost",
  },
  alias: {
    "@/": "./src/",
  },
  typescript: {
    typeCheck: process.env.NODE_ENV === "development",
  },
  vite: {},
  tailwindcss: {
    configPath: "./tailwind.config.ts",
  },
});
