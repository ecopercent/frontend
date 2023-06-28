import React from "react";
import { createPortal } from "react-dom";

export default function ModalContainer({ children }) {
  return createPortal(<div>{children}</div>, document.getElementById("modal"));
}
