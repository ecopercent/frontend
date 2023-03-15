import styled from "@emotion/styled";
import * as color from "../../../style/color";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 24px;
  gap: 16px;

  width: 390px;
  height: 180px;
  margin: 0 auto;
  border-bottom: 0.5px solid;
`;

export const ProfileImgTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 342px;
  height: 100px;
`;

export const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 0.5px solid;
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px 0px;
  gap: 12px;

  width: 220px;
  height: 100px;
`;

export const ProfileTextNickname = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 129% */

  letter-spacing: -0.408px;
`;

export const ProfileTextMessage = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 147% */

  letter-spacing: -0.408px;
`;

export const ProfileButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 8px;

  width: 342px;
  height: 24px;
`;

export const ProfileEditButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 86px;
  height: 24px;

  background: ${color.lightGray};
  border-radius: 8px;
  border: 0px;
`;
