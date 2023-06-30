import styled from "@emotion/styled";
import * as font from "@style/font";
import * as btn from "@style/button";

export const ProfileImg = styled.img`
  height: 100.5px;
  width: 100.5px;
  flex-shrink: 0;

  border-radius: 50%;
  border: 0.5px solid;
  object-fit: cover;
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0 0;
  gap: 12px;

  word-break: break-all;
  width: 100%;
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
  ${(props) => {
    if (props.disabled)
      return `cursor: not-allowed;
      color: white;`;
    return null;
  }}
`;
