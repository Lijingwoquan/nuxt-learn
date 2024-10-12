import { useAuthStore } from "~/store/auth";

const apiCore = (url, opt) => {
  const config = useRuntimeConfig();

  const authStore = useAuthStore();

  const apiFun = () => {
    if (import.meta.client) {
      return useFetch;
    } else {
      return $fetch;
    }
  };

  const nuxtApp = useNuxtApp();

  return useFetch(url, {
    baseURL: config.public.apiBase,
    retry: false,
    onRequest({ options }) {
      let token = "";
      token = authStore.getToken();
      if (token) {
        options.headers = {
          Authorization: `Bearer ${token}`,
          ...options.headers,
        };
      }
    },
    // onRequestError({ request, options, error }) {
    //   // Handle the request errors
    //   console.log(error);
    // },
    onResponse({ request, response, options }) {
      if (response.status >= 200 && response.status <= 300) {
        console.log(response._data);
      }
    },
    onResponseError({ request, response, options }) {
      if (response._data.msg === "需要登录") {
        nuxtApp.runWithContext(() => {
          navigateTo("/login");
        });
      }

      if (import.meta.client) {
        ElMessage({
          message: response?._data.msg || "未知错误",
          type: "error",
        });
      }
    },
    ...opt,
  });
};

const commonApi = (method, url, options) => {
  return new Promise((resolve, reject) => {
    apiCore(url, {
      method,
      ...options,
    }).then((res) => {
      if (res.status.value === "success") {
        resolve(res.data.value);
      } else {
        reject(res.error.value.data?.msg || res.error.value);
      }
    });
  });
};

export const api = {
  get(url, options) {
    return commonApi("GET", url, options);
  },
  post(url, form, options = {}) {
    return commonApi("POST", url, {
      body: form,
      ...options,
    });
  },
  push(url, form, options = {}) {
    return commonApi("PUSH", url, {
      body: form,
      ...options,
    });
  },
  delete(url, form, options = {}) {
    return commonApi("DELETE", url, {
      body: form,
      ...options,
    });
  },
};
