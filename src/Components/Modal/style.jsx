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
  gap: 20px;
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
  line-height: 1.5;
  text-align: center;
`;

export const BtnContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;

  margin: 0px 40px;
`;

export const Btn = styled.button`
  ${(props) => {
    if (props.featured) return btn.green;
    if (props.warning) return btn.pink;
    return btn.normal;
  }}
`;
