import styled from "@emotion/styled";

export const ItemEditBorder = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ImageClipper = styled.img`
  // position: relative;
  width: 120px;
  height: 150px;
  object-fit: cover; /* 이미지 비율 유지 */
  border-radius: 45%;
  border: 1px solid;
`;

export const FlexCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 5%;
`;

export const EditDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1%;
  width: 50%;
`;

export const Input = styled.input`
  height: 2%;
  width: 90%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 18px;
  line-height: 1;
  margin-left: 25%;
`;

export const Select = styled.select`
  height: 2%;
  width: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 18px;
  line-height: 1;
  margin-left: 25%;
`;

export const Span = styled.span`
  position: absolute;
  margin-left: -10%;
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;
