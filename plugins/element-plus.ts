import ElementPlus from "element-plus";
import * as ElementPlusIcons from "@element-plus/icons-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIcons)) {
    nuxtApp.vueApp.component(key, component);
  }
});
