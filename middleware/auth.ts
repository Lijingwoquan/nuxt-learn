import { needTokenRequest } from "~/api/user";

export default defineNuxtRouteMiddleware((to, from) => {
  needTokenRequest().catch((err) => {
    if (err === "需要登录") {
      const nuxtApp = useNuxtApp();
      nuxtApp.runWithContext(() => {
        navigateTo({
          path: "/login",
        });
      });
    }
  });
});
