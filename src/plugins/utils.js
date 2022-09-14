import { messages } from "../Global/messages";
import store from "./store";

export const isDev = () => {
  // eslint-disable-next-line no-undef
  return process.env.REACT_APP_ENV === "dev";
};

export const clearAuthLocalStorage = () => {
  store.set("email", "");
  store.set("name", "");
  store.set("access_token", "");
  store.set("token_type", "");
};

export const handleApiErrors = (err, setNotifs, setDisableSubmit) => {
  if (!err) return;
  if (err.code === "ERR_NETWORK" || err.response?.status === 404) {
    setNotifs && setNotifs({ errors: [messages.err.noServer] });
  } else if (err?.response?.status === 401) {
    setNotifs && setNotifs({ errors: [messages.err.wrongEmailPass] });
  } else {
    setNotifs && setNotifs({ errors: [messages.err.err] });
  }
  setDisableSubmit && setDisableSubmit(false);
};
