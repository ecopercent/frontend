import styled from "@emotion/styled";

export const TitleItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spacer = styled.span`
  display: block;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
`;

export const ImageClipper = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  object-fit: cover; /* 이미지 비율 유지 */
  border-radius: 50%;
  border: 1px solid;
  // border-image: url(${"/hyopark.jpg"}) 1000 round;
`;
