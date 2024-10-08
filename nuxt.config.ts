// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // 定义需要全局加载的文件。
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  css: ["element-plus/dist/index.css", "~/assets/css/main.css"],
  build: {
    // 生产环境使用 babel 转译依赖。
    transpile: process.env.prod ? ["element-plus"] : [],
  },
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {
    //
  },
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: "123",
    // public中的键也可以在客户端使用
    public: {
      apiBase: "/api",
    },
  },
  nitro: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
  vue: {
    // 启用vue验性功能
    propsDestructure: true,
  },
});
