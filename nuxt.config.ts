// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    // layoutTransition: { name: "layout", mode: "out-in" },
  },
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBase: "http://127.0.0.1:8080/api",
    },
  },
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["element-plus/dist/index.css", "~/assets/css/tailwind.css"],
  build: {
    transpile: process.env.prod
      ? ["element-plus", "pinia-plugin-persistedstate"]
      : [],
  },
  nitro: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
