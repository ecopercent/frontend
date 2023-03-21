import { useEffect } from "react";

export default function useOutsideClick(modalRef, onClose) {
  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    }
    window.addEventListener("mousedown", handleClick);

    return () => {
      return window.removeEventListener("mousedown", handleClick);
    };
  });
}
