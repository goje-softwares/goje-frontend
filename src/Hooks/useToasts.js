import { useContext } from "react";
import ToastsContext from "../Context/ToastsProvider";

const useToasts = () => {
  return useContext(ToastsContext);
};

export default useToasts;
