import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 24px;
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
    if (props.isViewer) return `20px`;
    return `15px`;
  }};

  width: 100%;
  height: 100px;
`;
