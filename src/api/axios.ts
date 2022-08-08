import axios from "axios";

// TOOD: .env it
const url = {
    local: "http://localhost:8000/api/",
    dev: "https://goje.herokuapp.com/api/",
    production: "https://goje.herokuapp.com/api/",
};

// TODO : set token from this user auth service token data
const token = "44|Ux2ISkUTtRnpNykVTR4tlRFDgkPkeA54IIvBg90u"

// Set axios data for create new from axios with create method
const axiosData = {
    baseURL: url.local,
    headers: {}
}
// Set token if exist token in user auth service
if (token) {
    axiosData.headers = {
        Authorization: `Bearer ${token}`
    }
}

export default axios.create(axiosData);

export const APIs = {
    auth: {
        login: {
            method: "post",
            url: "auth/login",
            data: {}

        },
        register: {
            method: "post",
            url: "auth/register",
            data: {}
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
