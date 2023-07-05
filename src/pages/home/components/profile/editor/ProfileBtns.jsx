import React from "react";
import * as S from "./style";

export default function ProfileBtns({
  setIsEditing,
  handleSubmit,
  isMutating,
}) {
  return (
    <S.ProfileBtnContainer>
      <S.ProfileBtn
        type="submit"
        featured
        onClick={handleSubmit}
        disabled={isMutating}
      >
        완료
      </S.ProfileBtn>
      <S.ProfileBtn type="button" onClick={setIsEditing} disabled={isMutating}>
        취소
      </S.ProfileBtn>
    </S.ProfileBtnContainer>
  );
}
