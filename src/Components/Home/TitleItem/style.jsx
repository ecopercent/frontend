import styled from "@emotion/styled";
import * as font from "../../../style/font";

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
`;

export const NoTitleNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1 0 auto;
  width: 100%;

  // TODO : 하단 남는 공간 꽉 채우게
  // 공간 확인용 컬러
  // background-color: green;
`;

export const NoTitleNotice = styled.span`
  ${font.boldBody}
  line-height: 2.0;
  text-align: center;
`;
