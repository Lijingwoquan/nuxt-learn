export const getUserInfo = (id: string) => {
  return api.get(`/user?id=${id}`);
};

export const postUserInfo = (form: object) => {
  return api.post(`/user`, form);
};

export const needTokenRequest = () => {
  return api.get("/user/private");
};
