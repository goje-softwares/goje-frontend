import React, { createContext, useEffect, useState } from "react";
import store from "../plugins/store";
import { isDev } from "../plugins/utils";

const AuthContext = createContext({});

let initialState = {
  email: "",
  name: "",
  access_token: "",
  token_type: "",
};
if (
  store.has("email") &&
  store.has("name") &&
  store.has("access_token") &&
  store.has("token_type")
) {
  initialState = {
    email: store.get("email"),
    name: store.get("name"),
    access_token: store.get("access_token"),
    token_type: store.get("token_type"),
  };
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  useEffect(() => {
    if (isDev()) {
      console.log("new auth state:", auth);
    }

    if (auth) {
      store.set("email", auth.email);
      store.set("name", auth.name);
      store.set("access_token", auth.access_token);
      store.set("token_type", auth.token_type);
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
