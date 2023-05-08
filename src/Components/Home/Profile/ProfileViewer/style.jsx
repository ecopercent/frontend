import styled from "@emotion/styled";
import * as font from "../../../../style/font";
import * as btn from "../../../../style/button";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props) => {
    return props.isMobile ? "15px 10px;" : "15px 24px;";
  }};
  gap: 16px;

  width: 100%;
  height: 180px;
  margin: 0 auto;
  border-bottom: 0.5px solid;
`;

export const ProfileImgTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${(props) => {
    return props.isMobile ? "10px;" : "20px;";
  }};

  width: 100%;
  height: 100px;
`;

export const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 0.5px solid;
  object-fit: cover;
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => {
    return props.isMobile ? "0px;" : "8px 0px 0px;";
  }}
  gap: ${(props) => {
    return props.isMobile ? "8px;" : "12px;";
  }}

  word-break: break-all;
  width: 100%
  height: 100px;
`;

export const ProfileTextNickname = styled.p`
  margin: 0;

  ${font.boldBody};
`;

export const ProfileTextMessage = styled.p`
  margin: 0;

  ${font.normalBody};
  line-height: 20px;
`;

export const ProfileButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 8px;

  height: 24px;
`;

export const ProfileEditButton = styled.button`
  ${btn.profile}
  ${font.normalBtn}
`;
