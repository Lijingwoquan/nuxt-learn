import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  const getToken = () => {
    const tokenCookie = useCookie("auth_token");
    if (tokenCookie.value) {
      token.value = tokenCookie.value;
    }
    return token.value;
  };
  const setToken = (value) => {
    token.value = value;
    const tokenCookie = useCookie("auth_token");
    tokenCookie.value = value;
  };
  const removeToken = () => {
    token.value = "";
    const tokenCookie = useCookie("auth_token");
    tokenCookie.value = null;
  };

  return {
    token,
    getToken,
    setToken,
    removeToken,
  };
});
