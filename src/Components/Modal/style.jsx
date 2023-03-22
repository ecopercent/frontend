import styled from "@emotion/styled";
import * as btn from "../../style/button";
import * as font from "../../style/font";
import * as color from "../../style/color";

export const backgroundOverlay = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalLayout = styled.div`
  width: 350px;
  height: 200px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${color.ivory};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  ${font.boldTitle3}
`;

export const ModalContent = styled.span`
  ${font.normalBody}
`;

export const BtnContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;

  margin: 0px 40px;
`;

export const SubmitBtn = styled.button`
  ${btn.green}
  ${font.normalBtn}
`;

export const CancelBtn = styled.button`
  ${btn.normal}
  ${font.normalBtn}
=======

export const CreateModal = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;

  & > div {
    margin-top: 200px;
    display: inline-block;
    width: 300px;
    background: white;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
    border-radius: 6px;
    user-select: none;
    max-width: 440px;
    padding: 30px 40px 0;
    z-index: 1012;
    position: relative;
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;
