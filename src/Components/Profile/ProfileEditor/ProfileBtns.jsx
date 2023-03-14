import React from "react";
import * as S from "./style";

export default function ProfileBtns({ setIsEditing, handleSubmit }) {
  return (
    <S.ProfileBtnContainer>
      <S.ProfileBtn
        type="submit"
        featured
        onClick={() => {
          setIsEditing();
          handleSubmit();
        }}
      >
        완료
      </S.ProfileBtn>
      <S.ProfileBtn type="button" onClick={setIsEditing}>
        취소
      </S.ProfileBtn>
    </S.ProfileBtnContainer>
  );
}
