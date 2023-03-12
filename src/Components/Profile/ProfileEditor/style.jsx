import styled from "@emotion/styled";

const lightGreen = "#e1eedd";
const lightGray = "#dedede";

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

export const ProfileImgOpacity = styled.div`
  display: ${(props) => {
    return props.isUploaded ? "none" : "inline-block";
  }};
  position: absolute;
  height: 100.5px;
  width: 100.5px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
`;

export const ProfileImgOverlay = styled.img`
  ${(props) => {
    return props.isUploaded ? "display: none" : "";
  }};
  position: absolute;
  height: 40px;
  width: 40px;
  padding: 30px 30px;
`;

export const ProfileImgPreview = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 0.5px solid;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;

export const ProfileTextForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 0px 0px;
  gap: 8px;

  width: 220px;
  height: 100px;
`;

export const ProfileTextarea = styled.textarea`
  width: 220px;
  resize: none;

  font-family: "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  /* or 156% */
`;

export const ProfileBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 8px;

  width: 342px;
  height: 24px;
`;

export const ProfileBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 86px;
  height: 24px;

  background: ${(props) => {
    return props.featured ? lightGreen : lightGray;
  }};
  border-radius: 8px;
  border: 0px;

  font-style: normal;
  font-weight: ${(props) => {
    return props.featured ? 600 : 400;
  }};
  font-size: 12px;
  line-height: 16px;
`;
