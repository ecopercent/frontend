import React from "react";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { basicGreen } from "@style/color";
import * as S from "./style";

export default function NoTitleItem() {
  return (
    <S.NoTitleNoticeContainer>
      <BsFillPatchExclamationFill size={40} color={basicGreen} />
      <S.NoTitleNotice>
        등록된 대표 아이템이 없습니다.
        <br />
        대표 아이템을 등록해주세요.
      </S.NoTitleNotice>
    </S.NoTitleNoticeContainer>
  );
}
