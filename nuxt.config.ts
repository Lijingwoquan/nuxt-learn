// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  css: ["element-plus/dist/index.css", "~/assets/css/tailwind.css"],
  build: {
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
  nitro: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
