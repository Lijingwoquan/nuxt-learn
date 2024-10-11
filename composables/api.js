import { useFetch } from "nuxt/app";

export const apiBefore = (url, options) => {
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
    ...options,
  });
};

export const getApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    apiBefore(url, {
      method: "GET",
      ...options,
    })
      .then((res) => {
        resolve(res.data.value);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// useFetch(requestUrl, {
//   onRequest({ request, options }) {
//     // Set the request headers
//     // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
//     options.headers.set("Authorization", "...");
//   },
//   onRequestError({ request, options, error }) {
//     // Handle the request errors
//   },
//   onResponse({ request, response, options }) {
//     // Process the response data
//   },
//   onResponseError({ request, response, options }) {
//     // Handle the response errors
//   },
// });
