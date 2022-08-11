import axios from "axios";
import store from "../utils/store";

// TOOD: .env it
const url = {
  local: "http://localhost:8000/api/",
  dev: "https://goje.herokuapp.com/api/",
  production: "https://goje.herokuapp.com/api/",
};

const axiosData = {
  baseURL: url.local,
  headers: {},
};

export const api = axios.create(axiosData);
// reading token from store on every request
api.interceptors.request.use((req) => {
  const token = store.get("access_token");
  if (token && req.headers) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});
export const APIs = {
  auth: {
    login: {
      method: "post",
      url: "auth/login",
      data: {},
    },
    register: {
      method: "post",
      url: "auth/register",
      data: {},
    },
    logout: {
      method: "post",
      url: "auth/logout",
    },
  },
  product: {
    list: {
      method: "get",
      url: "products",
    },
    show: {
      method: "get",
      url: "products/{id}",
    },
    create: {
      method: "post",
      url: "products/store",
    },
    delete: {
      method: "delete",
      url: "products/destroy/{id}",
    },
  },
};
