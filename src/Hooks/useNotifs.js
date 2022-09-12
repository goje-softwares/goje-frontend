import { useContext } from "react";
import NotifsContext from "../Context/NotifsProvider";

const useNotifs = () => {
  return useContext(NotifsContext);
};

export default useNotifs;
