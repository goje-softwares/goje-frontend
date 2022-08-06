import axios from "axios";

// TOOD: .env it
const url = {
  local: "http://localhost:8000/api/",
  dev: "https://goje.herokuapp.com/api/",
  production: "https://goje.herokuapp.com/api/",
};

export default axios.create({
  baseURL: url.local,
});

export const APIs = {
  auth: {
    login:  {
      method: "post",
      url: "auth/login",
      data: {}

    },
    register:  {
      method: "post",
      url: "auth/register",
      data: {}
    },
    logout:  {
      method: "post",
      url: "auth/logout",
    },
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
