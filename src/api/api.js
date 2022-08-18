import axios from "axios";
import store from "../utils/store";
import { isDev } from "../utils/utils";

// eslint-disable-next-line no-undef
const endPoint = process.env.REACT_APP_API_ENDPOINT;
const axiosData = {
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {},
};

if (isDev()) {
  console.log("API Endpoint: ", endPoint);
}

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