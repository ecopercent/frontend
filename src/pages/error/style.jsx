import styled from "@emotion/styled";
import * as font from "@style/font";
import * as button from "@style/button";
import { basicGreen } from "@style/color";
import { BsFillPatchExclamationFill } from "react-icons/bs";

export const WarningIcon = styled(BsFillPatchExclamationFill)`
  width: 50px;
  height: 50px;
  color: ${basicGreen};
  margin: 20px;
`;

export const PageLayout = styled.div`
  height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto 0;
`;

export const Headline = styled.h2`
  ${font.boldBody}
  font-size: 30px;
`;

export const NotificationText = styled.span`
  ${font.boldHeadline};
  font-weight: 400;
  margin: 40px 0;
  line-height: 2;
`;

export const GoHomeBtn = styled.button`
  ${button.profileGreen};
  ${font.normalSubheadline}
  height: 40px;
  width: 100px;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: ${basicGreen};
    }
  }
`;

export const Line = styled.div`
  margin-top: 20px;
  height: 1px;
  width: 150px;
  background-color: black;
`;

export const Anchor = styled.a`
  color: gray;
  text-decoration: none;
  text-align: center;

  width: 80px;
  background-color: white;
  translate: 0 -50%;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
