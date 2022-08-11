import { bool } from "../Global/Types";

export const isDev = (): bool => {
  return process.env.REACT_APP_ENV === "dev";
};
