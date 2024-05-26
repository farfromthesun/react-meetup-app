import { createContext, useEffect, useRef, useState } from "react";
import ToastX from "../components/ui/ToastX";

const ToastContext = createContext();

export function ToastContextProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function toast({ message }) {
    setVisible(false);

    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setMessage(message);
      setVisible(true);
    }, 100);
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastX open={visible} setOpen={setVisible} message={message} />
    </ToastContext.Provider>
  );
}

export default ToastContext;
