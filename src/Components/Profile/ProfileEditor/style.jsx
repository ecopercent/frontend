import styled from "@emotion/styled";

export const ProfileComponentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 342px;
  height: 100px;
`;

export const ProfileImgOpacity = styled.div`
  display: ${(isUploaded) => {
    return isUploaded ? "none" : "inline-block";
  }};
  position: absolute;
  height: 100.5px;
  width: 100.5px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
`;

export const ProfileImgOverlay = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  padding: 30px 30px;
`;
