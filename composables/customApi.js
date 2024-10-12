const apiCore = (url, opt) => {
  const config = useRuntimeConfig();

  const apiFun = () => {
    if (import.meta.client) {
      return useFetch;
    } else {
      return $fetch;
    }
  };

  return useFetch(url, {
    baseURL: config.public.apiBase,
    retry: false,
    onRequest({ options }) {
      let token = "1";
      if (import.meta.client) {
        token = localStorage.getItem("token");
      }
      if (token) {
        options.headers = {
          Authorization: `Bearer ${token}`,
          ...options.headers,
        };
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
        if (import.meta.client) {
          ElMessage({
            message: res.error.value.data?.msg || "未知错误",
            type: "error",
          });
          if (res.error.value.data?.msg === "需要登录") {
            navigateTo("/login");
          }
        }
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
