import styled from "@emotion/styled";

export const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100% - margin;
  margin: 10px 10px 5px;
`;

export const ListLayout = styled.div`
  width: 100% - margin;
  margin: 5px 10px 10px;
  border: 1px solid;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  overflow-y: auto;
`;
