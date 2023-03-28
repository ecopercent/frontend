import styled from "@emotion/styled";
import * as font from "../../style/font";
import { lightGreen } from "../../style/color";

export const LoginLayout = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  height: 100%;
  margin: 0 auto;
`;

export const TmpLogo = styled.div`
  // position: relative;
  // top: 100px;
  // left: 50%;
  // transform: translate(-50%, 0%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;

  background-color: ${lightGreen};
  border-radius: 50px;
  ${font.normalSubheadline};
`;

export const SloganSpan = styled.span`
  ${font.normalSubheadline};

  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
