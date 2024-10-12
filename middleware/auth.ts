import { needTokenRequest } from "~/api/user";

export default defineNuxtRouteMiddleware((to, from) => {
  needTokenRequest();
});
