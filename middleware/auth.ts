import { needTokenRequest } from "~/api/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    await needTokenRequest();
  } catch (error) {
    return navigateTo("/login");
  }
});

