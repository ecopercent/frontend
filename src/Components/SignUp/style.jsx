import styled from "@emotion/styled";
import { BsPatchCheckFill } from "react-icons/bs";
import * as font from "../../style/font";
import * as button from "../../style/button";
import { basicGreen } from "../../style/color";

export const SignUpLayoutCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin: 10px 10px;
  padding: 40px 20px;
  height: calc(100vh - 20px);

  border: 1px solid;
  border-radius: 5px;
`;

export const InputList = styled.ul`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 40px;

  margin: 0;
  padding: 0;

  height: 90%;
  overflow: auto;
`;

/*
 *          Submit Btn
 */

export const SubmitBtnsBox = styled.div`
  width: 90%;
  display: flex;

  justify-content: space-between;
  position: absolute;
  bottom: 20px;

  margin: 30px 0 0;
`;

export const Btn = styled.button`
  ${(props) => {
    if (props.featured) return button.green;
    if (props.warning) return button.pink;
    if (props.disabled) return button.disabled;
    return button.normal;
  }}}
`;

/*
 *      Welcome page
 */

export const WelcomeIcon = styled(BsPatchCheckFill)`
  width: 50px;
  height: 50px;
  color: ${basicGreen};
  margin: 20px;
`;

export const WelcomLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;

export const Headline = styled.h2`
  ${font.boldBody}
  font-size: 30px;
`;

export const WelcomeText = styled.span`
  ${font.boldHeadline};
  font-weight: 400;
  margin: 40px;
`;

export const GoHomeBtn = styled.button`
  ${button.profileGreen};
  ${font.normalSubheadline}
  height: 40px;
  width: 100px;
`;
