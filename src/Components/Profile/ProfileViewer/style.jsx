import styled from "@emotion/styled";

export const ProfileComponentsWrapper = styled.div`
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
