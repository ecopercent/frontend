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
  display: flex;
  flex-direction: column;
  align-items: center;
  /* TODO: 마진 확인하기 */
  margin: auto 0;
`;

export const Headline = styled.h2`
  ${font.boldBody}
  font-size: 30px;
`;

export const NotificationText = styled.span`
  ${font.boldHeadline};
  font-weight: 400;
  margin: 40px;
`;

export const GoHomeBtn = styled.button`
  ${button.profileGreen};
  ${font.normalSubheadline}
  height: 40px;
  width: 100px;

  :hover {
    background: ${basicGreen};
  }
`;
