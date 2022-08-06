import axios from "axios";

// TOOD: .env it
const url = {
  local: "http://localhost:8000/",
  dev: "https://goje.herokuapp.com/",
  production: "https://goje.herokuapp.com/",
};

export default axios.create({
  baseURL: url.local,
});

export const APIs = {
  auth: {
    login: "api/auth/login",
    register: "api/auth/register",
    logout: "api/auth/logout",
  },
  // product: {
  //   list: {
  //     method: "get",
  //     url: "api/products",
  //   },
  //   show: {
  //     method: "get",
  //     url: "api/products/{id}",
  //   },
  //   create: {
  //     method: "post",
  //     url: "api/products/store",
  //   },
  //   delete: {
  //     method: "delete",
  //     url: "api/products/destroy/{id}",
  //   },
  // },
};
