import React, { useCallback } from "react";
import { CreateModal, CloseModalButton } from "./style";

const Modal = ({ show, children, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
    onCloseModal();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <CreateModal onClick={onCloseModal}>
      <div>
        <CloseModalButton onClick={stopPropagation}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
