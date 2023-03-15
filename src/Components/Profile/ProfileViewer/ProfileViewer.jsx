import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";
import ProfileBtns from "./ProfileBtns";
import * as S from "./style";

export default function ProfileViewer({ userId, setIsEditing }) {
  return (
    <S.ProfileContainer>
      <S.ProfileImgTextWrapper>
        <ProfileImg userId={userId} />
        <ProfileText userId={userId} />
      </S.ProfileImgTextWrapper>
      <ProfileBtns userId={userId} handleClick={setIsEditing} />
    </S.ProfileContainer>
  );
}
