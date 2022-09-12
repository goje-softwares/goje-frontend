import React, { createContext, useState } from "react";
import { useEffect } from "react";

const initialState = {
  errors: [],
  successes: [],
};

const NotifsContext = createContext({});

export const NotifsProvider = ({ children }) => {
  const [notifs, setNotifs] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setNotifs(initialState);
    }, 4000);
  }, [notifs]);

  return (
    <NotifsContext.Provider value={{ notifs, setNotifs, initialState }}>
      {children}
    </NotifsContext.Provider>
  );
};

export default NotifsContext;
