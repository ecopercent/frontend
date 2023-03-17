import React from "react";
import { useMediaQuery } from "react-responsive";
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";
import ProfileBtns from "./ProfileBtns";
import * as S from "./style";

export default function ProfileViewer({ userId, setIsEditing }) {
  const isMobile = useMediaQuery({
    query: "(max-width:470px)",
  });

  return (
    <S.ProfileContainer isMobile={isMobile}>
      <S.ProfileImgTextWrapper isMobile={isMobile}>
        <ProfileImg userId={userId} />
        <ProfileText userId={userId} isMobile={isMobile} />
      </S.ProfileImgTextWrapper>
      <ProfileBtns userId={userId} handleClick={setIsEditing} />
    </S.ProfileContainer>
  );
}
