import styled from "@emotion/styled";
import * as font from "../../style/font";
import * as color from "../../style/color";

export const LoginLayout = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10vh;
  height: 10vh;
`;

export const LoginBox = styled.div`
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

  height: 10vh;
  margin-top: 10vh;
`;
