import styled from "@emotion/styled";

/*
 *          Info
 */

export const InfoDiv = styled.div`
  width: 100% - margin;
  margin: 10px 10px;
  border: 1px solid;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;

export const InfoHeaderDiv = styled.div`
  width: 100%;
  padding: 10px 10px;
  border-bottom: 0.5px solid;

  display: flex;
`;

export const InfoContentsDiv = styled.div`
  width: 100%;
  padding: 10px 10px;

  display: flex;
  justify-content: space-around;
`;

export const ContentPart = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const LeftText = styled.p`
  text-align: left;
`;

export const RightText = styled.p`
  text-align: right;
`;

/*
 *          Item List
 */

export const ItemListContainer = styled.div`
  width: 100% - margin;
  margin: 10px 10px;
  border: 1px solid;
  border-radius: 10px;
`;

export const ItemCategoryTabDiv = styled.div`
  width: 100%;
  padding: 10px 10px;
  border-bottom: 0.5px solid;
`;

export const ItemListDiv = styled.div`
  width: 100%px;

  display: flex;
  display-direction: column;
  justify-content: center;
`;
