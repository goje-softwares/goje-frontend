import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    console.log(auth);
  });
  
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
