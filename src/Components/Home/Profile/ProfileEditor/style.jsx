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

export const ProfileTextForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => {
    return props.isMobile ? "0px;" : "5px 10px 0px 0px;";
  }}
  gap: ${(props) => {
    return props.isMobile ? "3px;" : "8px;";
  }}

  width: 100%;
  height: 100%;
`;

export const ProfileTextarea = styled.textarea`
  width: 100%;
  resize: none;

  ${font.normalTextarea}
  line-height: 16px;
`;

export const ProfileBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 8px;

  width: 100%;
  height: 24px;
`;

export const ProfileBtn = styled.button`
  ${(props) => {
    return props.featured ? btn.profileGreen : btn.profile;
  }};

  ${(props) => {
    return props.featured && font.boldBtn;
  }};
`;
