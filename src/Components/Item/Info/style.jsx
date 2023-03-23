import styled from "@emotion/styled";
import * as btn from "../../../style/button";
import * as font from "../../../style/font";

export const InfoContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
`;

export const InfoHeaderDiv = styled.div`
  width: 100%;
  height: 44px;
  padding: 10px 20px;
  border-bottom: 0.5px solid;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${font.boldBody}
`;

export const InfoContentsDiv = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
`;

/*
 *          Info Header - Title
 */

export const InfoBtnContainer = styled.div`
  display: flex;
  gap: 7px;
`;

export const ModifyBtn = styled.button`
  ${btn.normal}
  ${font.normalBtn}
`;

export const TitleSetBtn = styled.button`
  ${btn.green}
  ${font.normalBtn}

  padding: 0px;
  ${(props) => {
    return (
      props.isTitle &&
      `letter-spacing: -1px;
	  font-size: 12px;
	  color: gray;`
    );
  }}
`;

/*
 *          Info Contents
 */

export const ContentPart = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const InfoLabel = styled.span`
  text-align: left;
  ${font.boldSmall}
  line-height: 150%;
`;

export const InfoValue = styled.span`
  text-align: right;
  ${font.normalSmall}
  line-height: 150%;
`;
