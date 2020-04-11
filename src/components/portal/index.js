import { useEffect } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("React.Fragment");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};
