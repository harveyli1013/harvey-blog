/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-10-20 14:38:27
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-10-20 14:45:11
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false, // 默认为true false 则是 csr
  app: {
    head: {
      title: "Blog",
      meta: [],
      script: [],
      link: [],
      style: [],
    },
  },
  build: {},
  devServer: {
    port: 80,
    host: "localhost",
  },
  alias: {
    "@/": "./src/",
  },
});
