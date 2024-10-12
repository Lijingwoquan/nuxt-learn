import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (authStore.getToken()) {
    if (import.meta.client) {
      ElMessage.warning("请勿重复登录");
    }
    if (from.path != "/login") {
      return navigateTo({
        path: from.path,
      });
    } else {
      console.log(from.path);
      return navigateTo("/");
    }
  }
});
