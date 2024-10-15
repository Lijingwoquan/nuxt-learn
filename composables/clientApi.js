// 不需要进行服务端渲染
const apiCore = async (url, opt) => {
  const config = useRuntimeConfig();

  const nuxtApp = useNuxtApp();

  const requestUrl = config.public.apiBase + url;

  return await $fetch(requestUrl, {
    method: opt.method || "get",
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
        console.log("客户端请求");
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
  if (import.meta.client) {
    return new Promise((resolve, reject) => {
      apiCore(url, {
        method,
        ...options,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err.data.msg || "请求错误");
        });
    });
  }
};

export const clientApi = {
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
