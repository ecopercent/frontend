import React, { forwardRef } from "react";
import * as S from "./style";

function ProfileText({ userData, setUserData }, ref) {
  return (
    <S.ProfileTextBox>
      <S.ProfileText
        value={userData.nickname}
        onChange={(e) => {
          setUserData({ ...userData, nickname: e.target.value });
        }}
        rows={1}
        maxLength={8}
        ref={ref}
      />
      <S.ProfileTextarea
        value={userData.profileMessage}
        onChange={(e) => {
          setUserData({ ...userData, profileMessage: e.target.value });
        }}
        rows={4}
        maxLength={35}
      />
    </S.ProfileTextBox>
  );
}

export default forwardRef(ProfileText);
