// 需要进行服务端渲染
const apiCore = async (url, opt) => {
  const config = useRuntimeConfig();

  const nuxtApp = useNuxtApp();

  return await useFetch(url, {
    baseURL: config.public.apiBase,
    retry: false,
    onRequest({ options }) {
      let token = "";

      token = useCookie("auth_token").value;
      if (token) {
        options.headers = {
          Authorization: `Bearer ${token}`,
          ...options.headers,
        };
      }
    },
    // onRequestError({ request, options, error }) {
    //   // Handle the request errors
    //   console.log("onRequestError" + error);
    // },
    onResponse({ request, response, options }) {
      // Process the response data
      if (response.status >= 200 && response.status <= 300) {
        console.log("服务端端请求");
        console.log(response._data);
      }
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
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
      if (res.error.value) {
        reject(res.error.value.data);
      }
      resolve(res.data.value);
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
  put(url, form, options = {}) {
    return commonApi("PUT", url, {
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
