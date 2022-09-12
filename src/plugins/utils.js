import store from "./store";

export const isDev = () => {
  // eslint-disable-next-line no-undef
  return process.env.REACT_APP_ENV === "dev";
};

export const clearAuthLocalStorage = () => {
  store.set("email", "");
  store.set("name", "");
  store.set("access_token", "");
  store.set("token_type", "");
};
