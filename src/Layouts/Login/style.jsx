import styled from "@emotion/styled";
import * as font from "../../style/font";
import * as color from "../../style/color";

export const LoginLayout = styled.div`
  height: 100%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  position: fixed;
  top: 20vh;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 10vh;
`;

export const LoginBox = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
`;

export const Line = styled.hr`
  width: 60%;
  max-width: 600px;
  margin: 20px 0px;
  border: 0.5px solid ${color.basicGreen};
`;

export const ContinueWith = styled.span`
  position: fixed;
  background-color: white;
  padding: 10px 10px;
  ${font.boldHeadline};
  line-height: 20px;
`;

export const SloganSpan = styled.span`
  ${font.normalSubheadline};

  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
