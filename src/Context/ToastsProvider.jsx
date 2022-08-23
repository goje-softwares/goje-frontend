import React, { createContext, useState } from "react";
import { useEffect } from "react";

const initialState = {
  errors: [],
  successes: [],
};

const ToastsContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setToasts(initialState);
    }, 4000);
  }, [toasts]);

  return (
    <ToastsContext.Provider value={{ toasts, setToasts, initialState }}>
      {children}
    </ToastsContext.Provider>
  );
};

export default ToastsContext;
