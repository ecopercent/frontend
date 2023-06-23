import React, { useEffect, useMemo, useRef } from "react";
import useOutsideClick from "@hooks/useOutsideClick";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";

export default function useModal({ onClose }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, onClose);

  // body의 스크롤 block
  useEffect(() => {
    const body = document.querySelector("body");
    const { overflow } = body.style;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = overflow;
    };
  });

  const Modal = useMemo(() => {
    return function ({ children }) {
      return (
        <ModalContainer>
          <BackgroundOverlay>
            <div ref={modalRef}>{children}</div>
          </BackgroundOverlay>
        </ModalContainer>
      );
    };
  }, []);

  return Modal;
}

function ModalContainer({ children }) {
  return createPortal(<div>{children}</div>, document.getElementById("modal"));
}

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;
