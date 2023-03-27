import React from "react";
import * as S from "./style";

export default function NoTitleItem() {
  return (
    <S.NoTitleNoticeContainer>
      <S.NoTitleNotice>
        등록된 대표 아이템이 없습니다.
        <br />
        대표 아이템을 등록해주세요.
      </S.NoTitleNotice>
    </S.NoTitleNoticeContainer>
  );
}
