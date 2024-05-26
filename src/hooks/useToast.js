import { useContext } from "react";
import ToastContext from "../store/toast-context";

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastContextProvider");
  }
  return context;
}
export default useToast;
