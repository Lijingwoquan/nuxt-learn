import { useFetch } from "nuxt/app";

const apiCore = (url, options) => {
  const config = useRuntimeConfig();

  return useFetch(url, {
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      let token;
      if (import.meta.client) {
        token = localStorage.getItem("token");
      }
      options.headers = {
        Authorization: `Bearer ${token}`,
        ...options.headers,
      };
    },
    // onRequestError({ request, options, error }) {
    //   // Handle the request errors
    // },
    // onResponse({ request, response, options }) {
    //   // Process the response data
    //   if (response.status <= 300) {
    //   }
    // },
    // onResponseError({ request, response, options }) {
    //   // Handle the response errors
    // },
    ...options,
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
        if (import.meta.client) {
          ElMessage({
            message: res.error.value.data?.msg || "未知错误",
            type: "error",
          });
        }
        reject(res.error.value.data);
      }
    });
  });
};

export const api = {
  get(url, options) {
    return commonApi("GET", url, options);
  },
  post() {
    return commonApi("POST", url, options);
  },
  push() {
    return commonApi("PUSH", url, options);
  },
  delete() {
    return commonApi("DELETE", url, options);
  },
};
