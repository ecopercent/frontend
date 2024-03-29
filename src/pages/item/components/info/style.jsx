import styled from "@emotion/styled";
import * as btn from "@style/button";
import * as font from "@style/font";
import media from "@style/media";

export const InfoContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
`;

export const InfoHeaderDiv = styled.div`
  width: 100%;
  height: 44px;
  padding: 10px 20px;
  @media ${media.mobile} {
    padding: 10px 15px;
  }

  border-bottom: 0.5px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${font.boldBody}
`;

export const InfoContentsDiv = styled.div`
  width: 100%;
  padding: 10px 20px;
  @media ${media.mobile} {
    padding: 10px 15px;
  }

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

  ${(props) => {
    return props.disabled && `color: gray; opacity: 0.7; cursor: not-allowed;`;
  }}
`;

export const TitleSetBtn = styled.button`
  ${btn.green}
  ${font.normalBtn}

  padding: 0px;
  ${(props) => {
    return (
      props.disabled &&
      `letter-spacing: -1px; font-size: 12px; color: gray; opacity: 0.7; cursor: not-allowed;`
    );
  }}
`;

/*
 *          Info Contents
 */

export const ContentPart = styled.div`
  display: flex;
  justify-content: space-between;

  width: 40%;
  @media ${media.mobile} {
    width: 48%;
  }
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
