import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";
import ProfileEditBtn from "./ProfileEditBtn";
import * as S from "./style";

export default function ProfileViewer({ setIsEditing }) {
  return (
    <S.ProfileContainer>
      <S.ProfileImgTextWrapper>
        <ProfileImg />
        <ProfileText />
      </S.ProfileImgTextWrapper>
      <ProfileEditBtn handleClick={setIsEditing} />
    </S.ProfileContainer>
  );
}
