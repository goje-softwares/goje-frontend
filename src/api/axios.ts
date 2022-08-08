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

const token = store.get("access_token");
console.log(token);
if (token) {
  axiosData.headers = {
    Authorization: `Bearer ${token}`,
  };
}

export default axios.create(axiosData);

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
